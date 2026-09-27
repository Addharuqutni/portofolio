import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio.js'
import { useActiveSection } from '../hooks/useScrollEffects.js'

const SECTION_IDS = navLinks.map((link) => link.href.slice(1))

/** Header sticky: skip link, indikator seksi aktif, border muncul saat scroll. */
export default function Header() {
  const active = useActiveSection(SECTION_IDS)
  const [scrolled, setScrolled] = useState(false)

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
        className="sr-only z-50 rounded-lg bg-zinc-100 px-4 py-2 font-mono text-xs font-semibold text-zinc-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Lewati ke konten
      </a>

      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-200 ${
          scrolled ? 'border-zinc-900 bg-[#09090b]/85' : 'border-transparent bg-[#09090b]/0'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a
            href="#hero"
            className="group flex min-h-11 shrink-0 items-center gap-1.5 text-zinc-200 transition-colors hover:text-white"
          >
            <span className="font-mono text-sm text-zinc-500 transition-colors group-hover:text-emerald-400">~/</span>
            <span className="text-sm font-semibold tracking-tight text-zinc-100">{profile.shortName}</span>
          </a>

          <nav aria-label="Navigasi utama" className="relative min-w-0">
            <ul className="no-scrollbar flex items-center gap-1 overflow-x-auto text-[13px] font-medium sm:text-sm">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1)
                return (
                  <li key={link.href} className="shrink-0">
                    <a
                      href={link.href}
                      aria-current={isActive ? 'location' : undefined}
                      className={`flex min-h-11 items-center rounded-md px-2.5 transition-colors duration-150 ${
                        isActive ? 'text-zinc-50' : 'text-zinc-400 hover:text-zinc-100'
                      }`}
                    >
                      <span className="relative">
                        {link.label}
                        <span
                          aria-hidden="true"
                          className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-emerald-400 transition-transform duration-200 ${
                            isActive ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        />
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
            {/* Petunjuk bahwa nav bisa digeser di layar sempit */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-[#09090b] to-transparent sm:hidden"
            />
          </nav>
        </div>
      </header>
    </>
  )
}
