import { useEffect } from 'react'
import { profile, skillGroups } from '../data/portfolio.js'
import Hero from '../components/Hero.jsx'
import Skills from '../components/Skills.jsx'
import Experience from '../components/Experience.jsx'
import Projects from '../components/Projects.jsx'
import Education from '../components/Education.jsx'
import Certifications from '../components/Certifications.jsx'
import Contact from '../components/Contact.jsx'
import Marquee from '../components/Marquee.jsx'

/** Nama teknologi untuk pita berjalan di antara hero dan keahlian. */
const stackBand = skillGroups.flatMap((group) => group.skills.map((skill) => skill.label))

/** Beranda: seluruh seksi dalam satu halaman. Dibuka di /. */
export default function HomePage() {
  useEffect(() => {
    document.title = `${profile.name} — ${profile.role}`
  }, [])

  return (
    <main id="main" className="page-shell px-5 pb-24 sm:px-8">
      <Hero />

      {/* Pita stack: pemisah bergerak antara hero dan seksi keahlian. */}
      <div
        aria-hidden="true"
        className="section-space relative left-1/2 w-screen -translate-x-1/2 border-y border-line py-3"
      >
        <Marquee
          items={stackBand}
          duration={46}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
        />
      </div>

      {/* Ritme antarseksi disengaja, bukan satu nilai yang diulang:
          Pendidikan & Pengalaman dirapatkan karena masih satu kelompok riwayat;
          Proyek diberi ruang ekstra karena ia seksi terberat di halaman. */}
      <Skills />
      <Education className="section-space" />
      <Experience className="section-space-sm" />
      <Projects className="section-space-lg" />
      <Certifications className="section-space" />
      <Contact className="section-space" />
    </main>
  )
}
