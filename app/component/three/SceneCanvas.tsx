'use client'

import { Component, Suspense, useEffect, useState, type ErrorInfo, type ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useInViewport, usePageVisible, usePointer, usePrefersReducedMotion, supportsWebGL } from './hooks'

const DEFAULT_CAMERA = { position: [0, 0, 6] as [number, number, number], fov: 55 }
const GL_CONFIG = { antialias: true, alpha: true, powerPreference: 'high-performance' as const }
const DPR_RANGE: [number, number] = [1, 2]

function handleCreated({ gl }: { gl: THREE.WebGLRenderer }) {
  gl.toneMapping = THREE.ACESFilmicToneMapping
}

class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[three] scene failed to render', error, info)
    }
  }

  render() {
    return this.state.failed ? null : this.props.children
  }
}

function ParallaxRig({ strength, lift }: { strength: number; lift: number }) {
  const pointer = usePointer()

  useFrame((state, delta) => {
    const factor = 1 - Math.pow(0.001, delta)
    const { camera } = state
    const targetX = pointer.current.x * strength
    const targetY = pointer.current.y * strength * lift
    camera.position.x += (targetX - camera.position.x) * factor
    camera.position.y += (targetY - camera.position.y) * factor
    camera.lookAt(0, 0, 0)
  })

  return null
}

type SceneCanvasProps = {
  children: ReactNode
  className?: string
  parallax?: number
  parallaxLift?: number
}

export default function SceneCanvas({ children, className, parallax = 0.45, parallaxLift = 0.6 }: SceneCanvasProps) {
  const { ref, inView } = useInViewport<HTMLDivElement>()
  const pageVisible = usePageVisible()
  const reduced = usePrefersReducedMotion()
  const [supported, setSupported] = useState<boolean | null>(null)

  useEffect(() => {
    setSupported(supportsWebGL())
  }, [])

  const active = inView && pageVisible && !reduced

  if (supported === false) return null

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <SceneBoundary>
        <Canvas
          camera={DEFAULT_CAMERA}
          dpr={DPR_RANGE}
          frameloop={active ? 'always' : 'demand'}
          gl={GL_CONFIG}
          onCreated={handleCreated}
          style={{ pointerEvents: 'none' }}
        >
          <Suspense fallback={null}>
            {parallax > 0 ? <ParallaxRig strength={parallax} lift={parallaxLift} /> : null}
            {children}
          </Suspense>
        </Canvas>
      </SceneBoundary>
    </div>
  )
}
