export const interaction = {
  mouseX: 0,
  mouseY: 0,
  scroll: 0,
  compact: false,
}

const SECTION_IDS = ['intro', 'about', 'work', 'contact'] as const

export function syncScrollProgress() {
  interaction.compact = window.innerWidth < 768

  const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
    (node): node is HTMLElement => node instanceof HTMLElement,
  )

  if (sections.length === SECTION_IDS.length) {
    const marker = window.scrollY + window.innerHeight * 0.38
    let index = 0

    for (let i = 0; i < sections.length; i++) {
      if (marker >= sections[i].offsetTop) index = i
    }

    const current = sections[index]
    const next = sections[index + 1]
    const start = current.offsetTop
    const end = next
      ? next.offsetTop
      : start + Math.max(current.offsetHeight, window.innerHeight)
    const local = (marker - start) / Math.max(1, end - start)

    interaction.scroll = Math.min(1, Math.max(0, (index + local) / sections.length))
    return
  }

  const max = document.documentElement.scrollHeight - window.innerHeight
  interaction.scroll = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
}

export function syncPointer(clientX: number, clientY: number) {
  interaction.mouseX = (clientX / window.innerWidth) * 2 - 1
  interaction.mouseY = -((clientY / window.innerHeight) * 2 - 1)
}

export function choreography(t: number) {
  const compact = interaction.compact
  const span = compact ? 0.42 : 1

  if (t < 0.25) {
    const k = t / 0.25
    return {
      x: 0.15 * k * span,
      y: compact ? 0.35 : 0,
      z: 0,
      s: compact ? 0.78 : 1,
      inner: 0.28 + 0.12 * k,
      camX: 0,
      camY: 0,
    }
  }

  if (t < 0.5) {
    const k = (t - 0.25) / 0.25
    return {
      x: (0.15 + 1.55 * k) * span,
      y: (compact ? 0.28 : 0) + 0.05 * k,
      z: -0.35 * k,
      s: (compact ? 0.78 : 1) - 0.12 * k,
      inner: 0.4 + 0.35 * k,
      camX: 0.35 * k * span,
      camY: 0.05 * k,
    }
  }

  if (t < 0.75) {
    const k = (t - 0.5) / 0.25
    return {
      x: (1.7 + 1.35 * k) * span,
      y: 0.05 + 1.15 * k * (compact ? 0.55 : 1),
      z: -0.35 - 0.7 * k,
      s: 0.88 - 0.42 * k,
      inner: 0.75,
      camX: 0.35 * span,
      camY: 0.12 * k,
    }
  }

  const k = (t - 0.75) / 0.25
  return {
    x: (3.05 - 2.2 * k) * span,
    y: 1.2 - 0.85 * k,
    z: -1.05 + 0.35 * k,
    s: 0.46 + 0.18 * k,
    inner: 0.75 - 0.15 * k,
    camX: (0.35 - 0.2 * k) * span,
    camY: 0.12 - 0.08 * k,
  }
}
