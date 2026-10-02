import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { SceneRoot } from '@/components/scene/scene-root'
import { SiteNav } from '@/components/site-nav'
import { Work } from '@/components/work'

export default function Page() {
  return (
    <>
      <SceneRoot />
      <div className="grain pointer-events-none fixed inset-0 z-[1]" />
      <div className="vignette pointer-events-none fixed inset-0 z-[1]" />
      <SiteNav />
      <main id="content" className="relative z-10">
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
    </>
  )
}
