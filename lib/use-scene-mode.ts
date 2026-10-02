'use client'

import { useEffect, useState } from 'react'

export type SceneMode = 'full' | 'lite' | 'off'

function detectMode(): SceneMode {
  if (typeof window === 'undefined') return 'off'
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 'off'

  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string }
    }
  ).connection

  if (connection?.saveData) return 'off'
  if (connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g') {
    return 'off'
  }

  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
  if (!gl) return 'off'

  const cores = navigator.hardwareConcurrency ?? 8
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8
  const mobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768

  if (mobile || cores <= 4 || memory <= 4) return 'lite'
  return 'full'
}

export function useSceneMode() {
  const [mode, setMode] = useState<SceneMode>('off')
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const apply = () => setMode(detectMode())
    apply()
    setReady(true)

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    motion.addEventListener('change', apply)
    return () => {
      motion.removeEventListener('change', apply)
    }
  }, [])

  return { mode, ready, setMode }
}
