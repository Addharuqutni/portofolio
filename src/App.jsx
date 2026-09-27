import { ToastProvider } from './context/ToastContext.jsx'
import { useReveal } from './hooks/useScrollEffects.js'
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

  return (
    <ToastProvider>
      <Header />

      <main id="main" className="mx-auto max-w-6xl space-y-24 overflow-x-clip px-5 pb-20 pt-6 sm:space-y-32 sm:px-8">
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
