import { useEffect } from 'react'
import { profile } from '../data/portfolio.js'
import Hero from '../components/Hero.jsx'
import Skills from '../components/Skills.jsx'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import Education from '../components/Education.jsx'
import Certifications from '../components/Certifications.jsx'
import Contact from '../components/Contact.jsx'

/** Beranda: seluruh seksi dalam satu halaman. Dibuka di /. */
export default function HomePage() {
  useEffect(() => {
    document.title = `${profile.name} — ${profile.role}`
  }, [])

  return (
    <main id="main" className="page-shell space-y-28 px-5 pb-24 sm:space-y-36 sm:px-8">
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  )
}
