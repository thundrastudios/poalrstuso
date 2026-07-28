import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Services from '@/components/ourServices/Services'
import Work from '@/components/workExample/Work'
import OurProcess from '@/components/ourProcess/ourProcess'

// app/page.tsx
export default function Home() {
  return (
    <div className='min-h-screen text-text-primary overflow-x-hidden flex flex-col'>
      <Header />

      <main className='flex-1 space-y-16 md:space-y-24 pt-28'>
        <section id="hero">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="process">
          <OurProcess />
        </section>
      </main>
    </div>
  )
}