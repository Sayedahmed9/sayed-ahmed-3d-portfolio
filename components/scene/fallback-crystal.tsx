export function FallbackCrystal() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-1/2 top-[42%] h-[min(46vw,420px)] w-[min(46vw,420px)] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-[12%] rotate-45 rounded-[28%] border border-emerald-400/25 bg-gradient-to-br from-emerald-300/10 via-zinc-100/5 to-transparent blur-[0.5px]" />
        <div className="absolute inset-[28%] rotate-12 border border-emerald-400/40" />
        <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/70" />
      </div>
    </div>
  )
}
