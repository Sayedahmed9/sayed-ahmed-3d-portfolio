const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'Python', 'HTML & CSS', 'SQL'],
  },
  {
    title: 'Tools',
    items: ['Git & GitHub', 'VS Code', 'Figma', 'Notion'],
  },
  {
    title: 'Concepts',
    items: ['Problem Solving', 'Data Structures', 'UI Design', 'Teamwork'],
  },
  {
    title: 'Currently Learning',
    items: ['React', 'Next.js', 'TypeScript', 'Databases'],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-foreground px-6 py-20 text-background md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-5xl font-bold leading-none tracking-tighter md:text-7xl">
            Skills &<br />
            <span className="text-primary">Toolkit</span>
          </h2>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-background/60 md:text-base">
            A snapshot of what I work with day to day — and what I&apos;m
            actively leveling up right now.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-background/15 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="flex flex-col gap-5 bg-foreground p-7 transition-colors hover:bg-primary/10"
            >
              <h3 className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-lg font-medium leading-tight text-background md:text-xl"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <footer className="mt-20 flex flex-col gap-2 border-t border-background/15 pt-6 text-xs uppercase tracking-widest text-background/50 md:flex-row md:justify-between">
          <span>Sayed Ahmed</span>
          <span>Portfolio &mdash; {new Date().getFullYear()}</span>
        </footer>
      </div>
    </section>
  )
}
