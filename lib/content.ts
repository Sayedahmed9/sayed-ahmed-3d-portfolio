export const profile = {
  name: 'Sayed Ahmed',
  mark: 'SA',
  role: 'Student · Lifelong learner · Building things that matter',
  email: 'sayedahmed260260@gmail.com',
  instagram: 'https://www.instagram.com/aahmed.sm',
  linkedin: 'https://www.linkedin.com/in/sayed-ahmed-a856782b9',
  intro:
    "Hi, I'm Sayed — a curious student who loves turning ideas into real projects. Always experimenting, always learning something new.",
  about: [
    'I learn by making. Most of my time sits between writing code, studying how systems actually work, and shipping small things that teach me something I could not get from a tutorial.',
    'I care about clear interfaces, honest craft, and slowing down enough to understand the problem before reaching for a framework. The work on this site is a snapshot of that process — skills I use daily, and certificates that mark real progress along the way.',
  ],
}

export const nav = [
  { href: '#intro', label: 'Intro' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
] as const

export const skillGroups = [
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
] as const

export const certificates = [
  {
    title: 'Professional Certificate',
    issuer: 'Skilljar',
    date: 'February 25, 2026',
    description:
      'A verified professional learning certificate demonstrating a commitment to building practical knowledge and continuing development.',
    document:
      'https://blobs.vusercontent.net/blob/certificate-hbdx4yspus33-1772017491-JK3XkTQaO83NqlbovAhUFcBT6DG3L3.pdf',
    verification: 'https://www.linkedin.com/in/sayed-ahmed-a856782b9',
    verifyLabel: 'LinkedIn',
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'December 17, 2025',
    description:
      'Foundational networking training covering essential network concepts, connectivity, and the principles behind modern digital communication.',
    document:
      'https://blobs.vusercontent.net/blob/2AB23CI026%20CISCO%20Packet%20%281%29-0oWF8JFtlk3udO52W833c2R7yDFYrY.pdf',
    verification: 'https://www.linkedin.com/in/sayed-ahmed-a856782b9',
    verifyLabel: 'LinkedIn',
  },
  {
    title: 'Verified Learning Certificate',
    issuer: 'Skilljar',
    date: 'February 25, 2026',
    description:
      'An independently verifiable certificate recognizing a completed learning achievement and consistent investment in professional growth.',
    document:
      'https://blobs.vusercontent.net/blob/certificate-drhk8cxmig5n-1772016492-DNBiR7OLkUNuG6WF2sIPPJW2zd59k7.pdf',
    verification: 'https://verify.skilljar.com/c/drhk8cxmig5n',
    verifyLabel: 'Verify',
  },
] as const
