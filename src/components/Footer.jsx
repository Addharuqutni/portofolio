import { profile } from '../data/portfolio.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-6xl space-y-1 border-t border-zinc-900 px-5 py-8 text-center font-mono text-xs text-zinc-500">
      <p>
        © {year} {profile.name}
      </p>
      <p className="text-[11px] text-zinc-600">
        Dirancang dengan tipografi presisi & minimalis • Banyumas, Jawa Tengah
      </p>
    </footer>
  )
}
