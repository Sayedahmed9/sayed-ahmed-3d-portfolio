const certificates = [
  {
    title: 'Professional Certificate',
    issuer: 'Skilljar',
    date: 'February 25, 2026',
    description:
      'A verified professional learning certificate demonstrating Sayed’s commitment to building practical knowledge and continuing his development.',
    document:
      'https://blobs.vusercontent.net/blob/certificate-hbdx4yspus33-1772017491-JK3XkTQaO83NqlbovAhUFcBT6DG3L3.pdf',
    verification: 'https://www.linkedin.com/in/sayed-ahmed-a856782b9',
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'December 17, 2025',
    description:
      'Completed foundational networking training covering essential network concepts, connectivity, and the principles behind modern digital communication.',
    document:
      'https://blobs.vusercontent.net/blob/2AB23CI026%20CISCO%20Packet%20%281%29-0oWF8JFtlk3udO52W833c2R7yDFYrY.pdf',
    verification: 'https://www.linkedin.com/in/sayed-ahmed-a856782b9',
  },
  {
    title: 'Verified Learning Certificate',
    issuer: 'Skilljar',
    date: 'February 25, 2026',
    description:
      'An independently verifiable certificate recognizing a completed learning achievement and Sayed’s consistent investment in professional growth.',
    document:
      'https://blobs.vusercontent.net/blob/certificate-drhk8cxmig5n-1772016492-DNBiR7OLkUNuG6WF2sIPPJW2zd59k7.pdf',
    verification: 'https://verify.skilljar.com/c/drhk8cxmig5n',
  },
]

export function Certificates() {
  return (
    <section
      id="certificates"
      className="border-t border-border bg-background px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-5xl font-bold leading-none tracking-tighter md:text-7xl">
            Proof of<br />
            <span className="text-primary">Progress</span>
          </h2>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Certificates earned along the way, each with its own story and a link to learn more.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <article
              key={certificate.title + certificate.date}
              className="flex min-h-80 flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
                    0{index + 1}
                  </span>
                  <span className="text-right text-xs uppercase tracking-widest text-muted-foreground">
                    {certificate.date}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-card-foreground">
                    {certificate.title}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    {certificate.issuer}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {certificate.description}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={certificate.document}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-85"
                >
                  View certificate
                </a>
                <a
                  href={certificate.verification}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Verify / LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
