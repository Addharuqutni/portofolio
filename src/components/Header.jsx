import { useEffect, useState } from 'react'
import { navLinks, profile, routes } from '../data/portfolio.js'
import { useActiveSection } from '../hooks/useScrollEffects.js'

const SECTION_IDS = navLinks.map((link) => link.href.slice(1))
const NO_SECTIONS = []

/** Header sticky: skip link, indikator seksi aktif, panel mengapung saat scroll.
 *  Di halaman selain beranda, tautan seksi diarahkan balik ke beranda ('/#keahlian'). */
export default function Header({ route = 'home' }) {
  const onHome = route === 'home'
  const active = useActiveSection(onHome ? SECTION_IDS : NO_SECTIONS, route)
  const [scrolled, setScrolled] = useState(false)
  const to = (href) => (onHome ? href : `${routes.home}${href}`)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-lg bg-accent px-4 py-2 font-mono text-xs font-medium text-canvas focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Lewati ke konten
      </a>

      <span
        aria-hidden="true"
        className="scroll-progress fixed inset-x-0 top-0 z-50 h-0.5 bg-accent"
      />

      <header className="animate-slide-down sticky top-0 z-40 px-3 pt-3 sm:px-6">
        <div
          className={`page-shell flex h-14 items-center justify-between gap-4 rounded-2xl pl-4 pr-1.5 transition-[background-color,border-color,box-shadow] duration-300 sm:pl-5 ${
            scrolled ? 'glass glass-blur bg-canvas/50' : 'border border-transparent'
          }`}
        >
          <a href={onHome ? "#hero" : routes.home} className="group flex min-h-11 shrink-0 items-center gap-2.5">
            <span
              aria-hidden="true"
              className="flex h-7 w-7 items-center justify-center rounded-md bg-accent font-display text-sm font-bold text-canvas transition-transform duration-200 group-hover:-rotate-6"
            >
              {profile.shortName.charAt(0).toUpperCase()}
            </span>
            <span className="hidden font-display text-sm font-semibold tracking-tight text-ink sm:inline">
              {profile.shortName}
            </span>
            <span className="sr-only sm:hidden">{profile.shortName}</span>
          </a>

          <nav aria-label="Navigasi utama" className="relative min-w-0">
            <ul className="no-scrollbar flex items-center gap-0.5 overflow-x-auto text-[13px] font-medium">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1) || (!onHome && link.href === '#proyek')
                return (
                  <li key={link.href} className="shrink-0">
                    <a
                      href={to(link.href)}
                      aria-current={isActive ? 'location' : undefined}
                      className={`flex min-h-11 items-center gap-1.5 rounded-xl px-3 transition-colors duration-150 ${
                        isActive ? 'bg-glass-hover text-ink shadow-[inset_0_1px_0_rgb(255_255_255/0.08)]' : 'text-muted hover:text-ink'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-200 ${
                          isActive ? 'scale-100' : 'scale-0'
                        }`}
                      />
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
            {/* Petunjuk bahwa nav bisa digeser di layar sempit */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-canvas to-transparent sm:hidden"
            />
          </nav>
        </div>
      </header>
    </>
  )
}
