import { ToastProvider } from './context/ToastContext.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <ToastProvider>
      <Header />

      <main className="mx-auto max-w-6xl space-y-16 px-5 py-10 sm:px-8 sm:py-16">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </ToastProvider>
  )
}
