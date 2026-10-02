import { certificates, skillGroups } from '@/lib/content'

export function Work() {
  return (
    <section id="work" className="relative z-10 scroll-mt-24 px-6 py-28 md:px-8 md:py-36">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-16 flex max-w-2xl flex-col gap-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-400">
            Work
          </p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.04em] text-zinc-100">
            Toolkit and proof
          </h2>
          <p className="text-pretty text-base leading-relaxed text-zinc-400">
            A snapshot of what I work with day to day — and certificates earned
            along the way.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-zinc-950/80 p-6 backdrop-blur-sm">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[15px] text-zinc-100">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-4 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <article
              key={`${certificate.title}-${certificate.date}`}
              className="flex min-h-72 flex-col justify-between rounded-2xl border border-white/[0.08] bg-zinc-950/70 p-6 backdrop-blur-sm transition-colors hover:border-emerald-400/25"
            >
              <div>
                <div className="mb-8 flex items-start justify-between gap-4 text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                  <span className="text-emerald-400">0{index + 1}</span>
                  <span className="text-right">{certificate.date}</span>
                </div>
                <h3 className="font-display text-2xl font-medium tracking-tight text-zinc-100">
                  {certificate.title}
                </h3>
                <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-400">
                  {certificate.issuer}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {certificate.description}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={certificate.document}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-emerald-500 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-950 transition-colors hover:bg-emerald-400"
                >
                  View certificate
                </a>
                <a
                  href={certificate.verification}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-100 transition-colors hover:border-emerald-400/50 hover:text-emerald-400"
                >
                  {certificate.verifyLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
