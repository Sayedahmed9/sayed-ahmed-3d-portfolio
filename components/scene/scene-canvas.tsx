'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { CrystalCore } from '@/components/scene/crystal-core'
import { interaction, syncPointer, syncScrollProgress } from '@/lib/interaction'
import type { SceneMode } from '@/lib/use-scene-mode'

function FrameGuard({ onDegrade }: { onDegrade: () => void }) {
  const elapsed = useRef(0)
  const frames = useRef(0)
  const trips = useRef(0)

  useFrame((_, delta) => {
    elapsed.current += delta
    frames.current += 1

    if (elapsed.current < 1.25) return

    const fps = frames.current / elapsed.current
    elapsed.current = 0
    frames.current = 0

    if (fps < 28) {
      trips.current += 1
      if (trips.current >= 2) onDegrade()
    } else {
      trips.current = 0
    }
  })

  return null
}

export function SceneCanvas({
  mode,
  onDegrade,
}: {
  mode: Exclude<SceneMode, 'off'>
  onDegrade: () => void
}) {
  const [frameloop, setFrameloop] = useState<'always' | 'never'>('always')

  useEffect(() => {
    const onScroll = () => syncScrollProgress()
    const onPointer = (event: PointerEvent) => syncPointer(event.clientX, event.clientY)
    const onVisibility = () => {
      setFrameloop(document.hidden ? 'never' : 'always')
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointer, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('resize', onScroll)
      document.removeEventListener('visibilitychange', onVisibility)
      interaction.mouseX = 0
      interaction.mouseY = 0
    }
  }, [])

  return (
    <Canvas
      frameloop={frameloop}
      dpr={mode === 'full' ? [1, 1.5] : [1, 1]}
      gl={{
        alpha: true,
        antialias: mode === 'full',
        powerPreference: mode === 'full' ? 'high-performance' : 'low-power',
        stencil: false,
        depth: true,
      }}
      camera={{ position: [0, 0, 6.2], fov: 32, near: 0.1, far: 40 }}
      style={{ pointerEvents: 'none' }}
    >
      <color attach="background" args={['#09090b']} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 8]} intensity={1.15} color="#f4f4f5" />
      <pointLight position={[-3, -2, 4]} intensity={8} color="#10b981" distance={12} />
      <CrystalCore mode={mode} />
      <FrameGuard onDegrade={onDegrade} />
    </Canvas>
  )
}
