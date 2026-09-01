export function Hero() {
  return (
    <section
      id="intro"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-6 pb-10 pt-8 md:px-12 md:pb-16 md:pt-10"
    >
      {/* top bar */}
      <header className="flex items-center justify-between">
        <span className="font-display text-sm font-bold tracking-tight md:text-base">
          SA<span className="text-primary">®</span>
        </span>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-widest text-muted-foreground md:text-sm">
          <a href="#intro" className="transition-colors hover:text-foreground">
            Intro
          </a>
          <a href="#skills" className="transition-colors hover:text-foreground">
            Skills
          </a>
          <a href="#certificates" className="transition-colors hover:text-foreground">
            Certificates
          </a>
          <a
            href="https://www.instagram.com/aahmed.sm"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Instagram
          </a>
          <a
            href="mailto:sayedahmed260260@gmail.com"
            className="transition-colors hover:text-foreground"
          >
            Gmail
          </a>
          <a
            href="https://www.linkedin.com/in/sayed-ahmed-a856782b9"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </nav>
      </header>

      {/* headline */}
      <div className="flex flex-1 flex-col justify-center py-12">
        <p className="mb-6 max-w-md text-pretty text-sm font-medium uppercase tracking-widest text-muted-foreground md:text-base">
          Student · Lifelong learner · Building things that matter
        </p>
        <h1 className="font-display text-[18vw] font-bold leading-[0.85] tracking-tighter text-foreground md:text-[15vw] lg:text-[13rem]">
          SAYED
          <br />
          <span className="text-primary">AHMED</span>
        </h1>
      </div>

      {/* bottom row */}
      <div className="flex flex-col gap-6 border-t border-border pt-6 md:flex-row md:items-end md:justify-between">
        <p className="max-w-xl text-balance text-lg leading-relaxed text-foreground md:text-xl">
          Hi, I&apos;m Sayed — a curious student who loves turning ideas into
          real projects. Always experimenting, always learning something new.
        </p>
        <a
          href="#skills"
          className="group inline-flex items-center gap-2 self-start whitespace-nowrap rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5 md:self-auto"
        >
          See my skills
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
      </div>
    </section>
  )
}
