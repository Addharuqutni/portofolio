import { ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 font-mono text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="space-y-1">
          <p>
            © {year} {profile.name}
          </p>
          <p className="text-zinc-600">Banyumas, Jawa Tengah</p>
        </div>
        <a
          href="#hero"
          className="inline-flex min-h-11 items-center gap-2 self-start rounded-lg px-1 text-zinc-400 transition-colors hover:text-zinc-100 sm:self-auto"
        >
          Kembali ke atas <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
