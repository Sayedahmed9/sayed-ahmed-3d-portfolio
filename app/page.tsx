import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'

export default function Page() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <Hero />
      <Skills />
    </main>
  )
}
