'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import SceneCanvas from './SceneCanvas'

const PARTICLE_COUNT = 1400
const SPREAD_X = 12
const SPREAD_Y = 7.5
const SPREAD_Z = 8

const vertexShader = /* glsl */ `
  attribute float aScale;
  attribute float aPhase;
  uniform float uTime;
  uniform float uPixelRatio;
  varying float vMix;

  void main() {
    vec3 drifted = position;
    drifted.y += sin(uTime * 0.32 + aPhase) * 0.5;
    drifted.x += cos(uTime * 0.24 + aPhase * 1.7) * 0.4;

    vec4 modelPosition = modelMatrix * vec4(drifted, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;

    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = aScale * uPixelRatio * (34.0 / -viewPosition.z);
    vMix = 0.5 + 0.5 * sin(uTime * 0.7 + aPhase);
  }
`

const fragmentShader = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vMix;

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    float falloff = pow(1.0 - dist * 2.0, 2.2);
    gl_FragColor = vec4(mix(uColorA, uColorB, vMix), falloff * 0.7);
  }
`

function ParticleField() {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const groupRef = useRef<THREE.Group>(null)

  const { positions, scales, phases } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const scales = new Float32Array(PARTICLE_COUNT)
    const phases = new Float32Array(PARTICLE_COUNT)

    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * SPREAD_X
      positions[i * 3 + 1] = (Math.random() - 0.5) * SPREAD_Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * SPREAD_Z
      scales[i] = 1.4 + Math.random() * 4.4
      phases[i] = Math.random() * Math.PI * 2
    }

    return { positions, scales, phases }
  }, [])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: 1 },
      uColorA: { value: new THREE.Color('#34d399') },
      uColorB: { value: new THREE.Color('#fbbf24') },
    }),
    []
  )

  useFrame((state) => {
    const material = materialRef.current
    if (material) {
      material.uniforms.uTime.value = state.clock.elapsedTime
      material.uniforms.uPixelRatio.value = state.gl.getPixelRatio()
    }
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.015
    }
  })

  return (
    <group ref={groupRef}>
      <points frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
          <bufferAttribute attach="attributes-aPhase" args={[phases, 1]} />
        </bufferGeometry>
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

function WireframeShell({
  position,
  radius,
  detail,
  color,
  opacity,
  speed
}: {
  position: [number, number, number]
  radius: number
  detail: number
  color: string
  opacity: number
  speed: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    const mesh = meshRef.current
    if (!mesh) return
    mesh.rotation.x += delta * speed * 0.6
    mesh.rotation.y += delta * speed
  })

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[radius, detail]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={opacity} depthWrite={false} />
    </mesh>
  )
}

type HeroSceneProps = { className?: string }

export default function HeroScene({ className }: HeroSceneProps) {
  return (
    <SceneCanvas className={className} parallax={0.6} parallaxLift={0.45}>
      <ParticleField />
      <WireframeShell position={[3.2, -0.8, -2.5]} radius={2.5} detail={1} color="#10b981" opacity={0.18} speed={0.1} />
      <WireframeShell position={[-3.6, 1.4, -3.5]} radius={1.6} detail={1} color="#f59e0b" opacity={0.13} speed={0.16} />
    </SceneCanvas>
  )
}
