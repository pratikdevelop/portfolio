'use client'

import { useEffect, useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useTexture, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'
import SceneCanvas from './SceneCanvas'
import { usePointer } from './hooks'

// SceneCanvas uses a perspective camera at z=6 with fov 55, so the visible
// frustum at z=0 is 6.25 world units tall. Keep the outermost ring under that
// (2 x 2.82 = 5.64) so nothing clips on square canvases.
const CARD_H = 3.9
const CARD_W = 3.06
const BOW_RADIUS = 8
const BOB_SPEED = 0.6
const BOB_RANGE = 0.09

// A large radius with a narrow arc yields an almost-flat panel with a subtle bow,
// so the portrait still reads as a full photo instead of a curved sliver.
const ARC = 2 * Math.asin(CARD_W / (2 * BOW_RADIUS))

function PortraitCard() {
  const texture = useTexture('/profile.png')
  const cardRef = useRef<THREE.Group>(null)
  const pointer = usePointer()
  const gl = useThree((state) => state.gl)

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = Math.min(8, gl.capabilities.getMaxAnisotropy())
    // profile.png is square while the card is portrait, so crop the sides to a
    // centred window instead of letting the texture stretch.
    texture.wrapS = THREE.ClampToEdgeWrapping
    texture.wrapT = THREE.ClampToEdgeWrapping
    texture.repeat.set(CARD_W / CARD_H, 1)
    texture.offset.set((1 - CARD_W / CARD_H) / 2, 0)
    texture.needsUpdate = true
  }, [texture, gl])

  useFrame((state, delta) => {
    const group = cardRef.current
    if (!group) return

    const factor = 1 - Math.pow(0.001, delta)
    const targetY = pointer.current.x * 0.28
    const targetX = pointer.current.y * 0.14

    group.rotation.y += (targetY - group.rotation.y) * factor
    group.rotation.x += (targetX - group.rotation.x) * factor
    group.position.y = Math.sin(state.clock.elapsedTime * BOB_SPEED) * BOB_RANGE
  })

  return (
    <group ref={cardRef}>
      {/* accent edge peeking out behind the card.
          RoundedBox requires radius < half the smallest dimension, so the boxes
          are kept deeper than 2 x radius. */}
      <RoundedBox args={[CARD_W + 0.16, CARD_H + 0.16, 0.24]} radius={0.09} smoothness={4} position={[0, 0, -0.26]}>
        <meshBasicMaterial color="#10b981" transparent opacity={0.55} toneMapped={false} />
      </RoundedBox>

      {/* glass back plate */}
      <RoundedBox args={[CARD_W + 0.05, CARD_H + 0.05, 0.18]} radius={0.07} smoothness={4} position={[0, 0, -0.14]}>
        <meshBasicMaterial color="#0a1220" toneMapped={false} />
      </RoundedBox>

      {/* Bowed portrait panel. The cylinder surface sits at z = +BOW_RADIUS, so the
          mesh is pushed back by the same amount to place the arc at z = 0 with its
          edges bowing away from the camera. Everything else must stay behind z = 0. */}
      <mesh position={[0, 0, -BOW_RADIUS]}>
        <cylinderGeometry args={[BOW_RADIUS, BOW_RADIUS, CARD_H, 96, 1, true, -ARC / 2, ARC]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} toneMapped={false} />
      </mesh>

      {/* highlight sweep along the top of the glass */}
      <mesh position={[0, CARD_H / 2 - 0.22, 0.02]}>
        <planeGeometry args={[CARD_W * 0.9, 0.018]} />
        <meshBasicMaterial color="#6ee7b7" transparent opacity={0.85} toneMapped={false} />
      </mesh>
    </group>
  )
}

function OrbitalRings() {
  const groupRef = useRef<THREE.Group>(null)

  const rings = useMemo(
    (): { radius: number; tube: number; color: string; opacity: number; rot: [number, number, number] }[] => [
      { radius: 2.58, tube: 0.012, color: '#34d399', opacity: 0.5, rot: [Math.PI / 2.1, 0.2, 0] },
      { radius: 2.7, tube: 0.008, color: '#fbbf24', opacity: 0.4, rot: [Math.PI / 1.65, 0.75, 0.4] },
      { radius: 2.82, tube: 0.006, color: '#34d399', opacity: 0.22, rot: [Math.PI / 2.7, -0.5, 0.9] }
    ],
    []
  )

  useFrame((state, delta) => {
    const group = groupRef.current
    if (!group) return
    group.rotation.y += delta * 0.06
    group.position.y = Math.sin(state.clock.elapsedTime * BOB_SPEED) * BOB_RANGE
  })

  return (
    <group ref={groupRef} position={[0, 0, -0.35]}>
      {/* Rings are rotationally symmetric, so spinning the group only changes their
          projected width (bounded by 2 x radius, safely inside the 6.25 frustum).
          Free-orbiting beads were removed on purpose: they swing in Z and
          perspective magnifies them up to ~1.7x near the camera, which pushed them
          past the canvas edge. */}
      {rings.map((ring, index) => (
        <group key={index} rotation={ring.rot}>
          <mesh>
            <torusGeometry args={[ring.radius, ring.tube, 8, 128]} />
            <meshBasicMaterial color={ring.color} transparent opacity={ring.opacity} depthWrite={false} toneMapped={false} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

type AvatarSceneProps = { className?: string }

export default function AvatarScene({ className }: AvatarSceneProps) {
  return (
    <SceneCanvas className={className} parallax={0}>
      <PortraitCard />
      <OrbitalRings />
    </SceneCanvas>
  )
}
