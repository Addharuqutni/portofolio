import { useEffect, useState } from 'react'
import { ToastProvider } from './context/ToastContext.jsx'
import { useReveal, useSpotlight } from './hooks/useScrollEffects.js'
import { useGsapEffects } from './hooks/useGsapEffects.js'
import { routes } from './data/portfolio.js'
import Footer from './components/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

/**
 * Routing ringan: situs statis dengan dua halaman, tanpa library router.
 * Vercel sudah me-rewrite semua path ke index.html, jadi '/proyek' aman di-refresh.
 */
function useRoute() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onNavigate = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onNavigate)
    return () => window.removeEventListener('popstate', onNavigate)
  }, [])

  return path.replace(/\/+$/, '') === routes.projects ? 'proyek' : 'home'
}

export default function App() {
  const route = useRoute()
  useReveal(route)
  useSpotlight()
  useGsapEffects(route)

  // Halaman baru selalu dibuka dari atas.
  useEffect(() => {
    if (route === 'proyek') window.scrollTo(0, 0)
  }, [route])

  return (
    <ToastProvider>
      <div aria-hidden="true" className="ambient">
        <span />
        <span />
        <span />
      </div>

      {/* Skip link tetap dipertahankan: tanpa nav, ini lompatan keyboard pertama ke konten. */}
      <a
        href="#main"
        className="sr-only z-50 rounded-lg bg-accent px-4 py-2 font-mono text-xs font-medium text-canvas focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Lewati ke konten
      </a>

      {route === 'proyek' ? <ProjectsPage /> : <HomePage />}

      <Footer />
    </ToastProvider>
  )
}
