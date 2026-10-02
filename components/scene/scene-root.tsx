'use client'

import dynamic from 'next/dynamic'
import { FallbackCrystal } from '@/components/scene/fallback-crystal'
import { useSceneMode } from '@/lib/use-scene-mode'

const SceneCanvas = dynamic(
  () => import('@/components/scene/scene-canvas').then((mod) => mod.SceneCanvas),
  { ssr: false, loading: () => <FallbackCrystal /> },
)

export function SceneRoot() {
  const { mode, ready, setMode } = useSceneMode()

  if (!ready || mode === 'off') {
    return <FallbackCrystal />
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <SceneCanvas
        mode={mode}
        onDegrade={() => setMode((current) => (current === 'full' ? 'lite' : 'off'))}
      />
    </div>
  )
}
