import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-glass-line bg-glass">
      <div className="page-shell flex flex-col gap-4 px-5 py-10 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="space-y-1">
          <p className="text-body">
            © {year} {profile.name}
          </p>
          <p>Banyumas, Jawa Tengah</p>
        </div>
        <a
          href="#main"
          className="group inline-flex min-h-11 items-center gap-2 self-start rounded-xl border border-glass-line bg-glass px-4 text-body transition-colors hover:border-glass-strong hover:text-ink sm:self-auto"
        >
          Kembali ke atas
          <ArrowUp className="h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
