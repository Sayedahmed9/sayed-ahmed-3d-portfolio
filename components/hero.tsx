import { profile } from '@/lib/content'

export function Hero() {
  return (
    <section
      id="intro"
      className="relative z-10 flex min-h-svh scroll-mt-24 flex-col justify-end px-6 pb-16 pt-28 md:px-8 md:pb-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-400">
          {profile.role}
        </p>
        <h1 className="font-display max-w-3xl text-[clamp(3.4rem,10vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.06em] text-zinc-100">
          Sayed
          <br />
          Ahmed
        </h1>
        <div className="mt-10 flex max-w-xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="text-pretty text-base leading-relaxed text-zinc-400 md:text-lg">
            {profile.intro}
          </p>
          <a
            href="#work"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-emerald-500 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-950 transition-colors hover:bg-emerald-400"
          >
            View work
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
