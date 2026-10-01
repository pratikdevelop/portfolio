'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import SceneCanvas from './SceneCanvas'

type Variant = 'icosahedron' | 'torus' | 'rings'

type SectionSceneProps = {
  className?: string
  variant?: Variant
  position?: [number, number, number]
  scale?: number
  opacity?: number
}

function Icosahedron({ opacity, speed }: { opacity: number; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    const mesh = meshRef.current
    if (!mesh) return
    mesh.rotation.x += delta * speed * 0.5
    mesh.rotation.y += delta * speed
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.9, 1]} />
      <meshBasicMaterial color="#10b981" wireframe transparent opacity={opacity} depthWrite={false} />
    </mesh>
  )
}

function TorusKnot({ opacity, speed }: { opacity: number; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    const mesh = meshRef.current
    if (!mesh) return
    mesh.rotation.x += delta * speed * 0.7
    mesh.rotation.z += delta * speed
  })

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.15, 0.32, 96, 16]} />
      <meshBasicMaterial color="#f59e0b" wireframe transparent opacity={opacity} depthWrite={false} />
    </mesh>
  )
}

function Rings({ opacity, speed }: { opacity: number; speed: number }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    const group = groupRef.current
    if (!group) return
    group.rotation.x += delta * speed * 0.35
    group.rotation.y += delta * speed * 0.6
  })

  return (
    <group ref={groupRef}>
      {[0, 1, 2].map((index) => (
        <mesh key={index} rotation={[index * 0.7, index * 1.1, index * 0.4]}>
          <torusGeometry args={[1 + index * 0.42, 0.022, 8, 96]} />
          <meshBasicMaterial color="#34d399" transparent opacity={opacity * (1 - index * 0.22)} depthWrite={false} />
        </mesh>
      ))}
    </group>
  )
}

export default function SectionScene({
  className,
  variant = 'icosahedron',
  position = [2.6, 0.2, -1.5],
  scale = 1,
  opacity = 0.13
}: SectionSceneProps) {
  const speed = 0.12

  return (
    <SceneCanvas className={className} parallax={0.25} parallaxLift={0.4}>
      <group position={position} scale={scale}>
        {variant === 'icosahedron' ? <Icosahedron opacity={opacity} speed={speed} /> : null}
        {variant === 'torus' ? <TorusKnot opacity={opacity} speed={speed} /> : null}
        {variant === 'rings' ? <Rings opacity={opacity} speed={speed} /> : null}
      </group>
    </SceneCanvas>
  )
}
