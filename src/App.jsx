import { ToastProvider } from './context/ToastContext.jsx'
import { useReveal, useSpotlight } from './hooks/useScrollEffects.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Certifications from './components/Certifications.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useReveal()
  useSpotlight()

  return (
    <ToastProvider>
      <div aria-hidden="true" className="ambient">
        <span />
        <span />
        <span />
      </div>

      <Header />

      <main id="main" className="mx-auto max-w-6xl space-y-28 overflow-x-clip px-5 pb-24 sm:space-y-36 sm:px-8">
        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </ToastProvider>
  )
}
