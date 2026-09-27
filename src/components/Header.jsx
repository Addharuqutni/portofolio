import { navLinks, profile } from '../data/portfolio.js'

/** Header sticky dengan navigasi anchor. */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900 bg-[#09090b]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#hero" className="group flex shrink-0 items-center gap-2 text-zinc-200 transition hover:text-white">
          <span className="font-mono text-sm text-zinc-500 group-hover:text-zinc-300">~/</span>
          <span className="text-sm font-semibold tracking-tight text-zinc-100">{profile.shortName}</span>
        </a>

        <nav
          aria-label="Navigasi utama"
          className="no-scrollbar -mr-1 flex items-center gap-5 overflow-x-auto text-xs font-medium text-zinc-400 sm:gap-7 sm:text-sm"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="shrink-0 whitespace-nowrap transition hover:text-zinc-100">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
