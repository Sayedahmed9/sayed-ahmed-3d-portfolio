'use client'

import { MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group, MathUtils, Mesh } from 'three'
import { choreography, interaction } from '@/lib/interaction'
import type { SceneMode } from '@/lib/use-scene-mode'

const RPM = 0.3
const RAD_PER_SEC = (RPM * Math.PI * 2) / 60
const ENTRANCE = 1.25

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function CrystalCore({ mode }: { mode: Exclude<SceneMode, 'off'> }) {
  const group = useRef<Group>(null)
  const inner = useRef<Mesh>(null)
  const elapsed = useRef(0)

  useFrame((state, delta) => {
    elapsed.current += delta
    const enter = easeOutCubic(Math.min(1, elapsed.current / ENTRANCE))
    const pose = choreography(interaction.scroll)

    const mx = interaction.mouseX
    const my = interaction.mouseY

    const targetX = pose.x + mx * 0.18
    const targetY = pose.y + my * 0.14
    const targetZ = pose.z
    const targetS = pose.s * (0.08 + 0.92 * enter)

    const g = group.current
    if (!g) return

    g.position.x = MathUtils.damp(g.position.x, targetX, 3.2, delta)
    g.position.y = MathUtils.damp(g.position.y, targetY, 3.2, delta)
    g.position.z = MathUtils.damp(g.position.z, targetZ, 3.2, delta)
    const nextScale = MathUtils.damp(g.scale.x, targetS, 3.6, delta)
    g.scale.setScalar(Math.max(nextScale, 0.001))

    g.rotation.y += RAD_PER_SEC * delta
    g.rotation.x = MathUtils.damp(g.rotation.x, my * 0.22, 2.4, delta)
    g.rotation.z = MathUtils.damp(g.rotation.z, mx * 0.08, 2.4, delta)

    if (inner.current) {
      inner.current.rotation.y -= RAD_PER_SEC * 1.6 * delta
      const mat = inner.current.material as { opacity: number }
      mat.opacity = MathUtils.damp(mat.opacity, pose.inner, 4, delta)
    }

    state.camera.position.x = MathUtils.damp(state.camera.position.x, pose.camX, 2.2, delta)
    state.camera.position.y = MathUtils.damp(state.camera.position.y, pose.camY, 2.2, delta)
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <group ref={group} scale={0.08}>
      <mesh ref={inner}>
        <icosahedronGeometry args={[0.58, 0]} />
        <meshBasicMaterial
          color="#10b981"
          wireframe
          transparent
          opacity={0.28}
          depthWrite={false}
        />
      </mesh>

      <mesh>
        <icosahedronGeometry args={[0.22, 0]} />
        <meshBasicMaterial color="#10b981" transparent opacity={0.55} />
      </mesh>

      <mesh>
        <octahedronGeometry args={[1.15, 0]} />
        {mode === 'full' ? (
          <MeshTransmissionMaterial
            backside
            samples={4}
            resolution={256}
            transmission={1}
            roughness={0.14}
            thickness={1.35}
            ior={1.42}
            chromaticAberration={0.06}
            anisotropy={0.12}
            distortion={0.08}
            distortionScale={0.16}
            temporalDistortion={0.04}
            color="#d1fae5"
            attenuationColor="#10b981"
            attenuationDistance={0.85}
          />
        ) : (
          <meshPhysicalMaterial
            color="#d1fae5"
            roughness={0.18}
            metalness={0.05}
            transmission={0.72}
            thickness={0.9}
            ior={1.4}
            transparent
            opacity={0.92}
          />
        )}
      </mesh>
    </group>
  )
}
