import { nav, profile } from '@/lib/content'

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/[0.04] bg-zinc-950/40 backdrop-blur-md">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-40 focus:rounded-full focus:bg-emerald-500 focus:px-3 focus:py-1.5 focus:text-xs focus:font-semibold focus:text-zinc-950"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        <a
          href="#intro"
          className="font-display shrink-0 text-sm font-medium tracking-tight text-zinc-100"
        >
          {profile.mark}
          <span className="text-emerald-400">®</span>
        </a>
        <nav className="flex items-center gap-3 overflow-x-auto text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400 sm:gap-5 sm:text-[11px] md:gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-zinc-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
