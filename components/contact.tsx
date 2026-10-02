import { profile } from '@/lib/content'

const links = [
  { href: `mailto:${profile.email}`, label: 'Email', meta: profile.email },
  { href: profile.linkedin, label: 'LinkedIn', meta: 'sayed-ahmed', external: true },
  { href: profile.instagram, label: 'Instagram', meta: '@aahmed.sm', external: true },
]

export function Contact() {
  return (
    <section id="contact" className="relative z-10 scroll-mt-24 px-6 py-28 md:px-8 md:pb-16 md:pt-36">
      <div className="mx-auto w-full max-w-6xl border-t border-white/[0.08] pt-16">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-400">
          Contact
        </p>
        <h2 className="font-display mt-4 max-w-xl text-[clamp(2.2rem,5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.04em] text-zinc-100">
          Let’s make something considered.
        </h2>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
          {links.map((link) => (
            <li key={link.label} className="bg-zinc-950/80">
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="flex h-full flex-col gap-3 p-6 transition-colors hover:bg-white/[0.03]"
              >
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">
                  {link.label}
                </span>
                <span className="text-lg text-zinc-100">{link.meta}</span>
              </a>
            </li>
          ))}
        </ul>
        <footer className="mt-16 flex flex-col gap-2 text-[11px] uppercase tracking-[0.18em] text-zinc-500 md:flex-row md:justify-between">
          <span>{profile.name}</span>
          <span>Portfolio — {new Date().getFullYear()}</span>
        </footer>
      </div>
    </section>
  )
}
