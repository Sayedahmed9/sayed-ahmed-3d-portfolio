import { profile } from '@/lib/content'

export function About() {
  return (
    <section id="about" className="relative z-10 scroll-mt-24 px-6 py-28 md:px-8 md:py-36">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-24">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-400">
            About
          </p>
          <h2 className="font-display mt-4 max-w-sm text-[clamp(2.2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.04em] text-zinc-100">
            Built slowly.
            <br />
            Learned in public.
          </h2>
        </div>
        <div className="flex max-w-xl flex-col gap-6 pt-2 text-base leading-relaxed text-zinc-400 md:text-lg">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
