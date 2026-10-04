import { profile } from '../data/portfolio.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-glass-line bg-glass">
      <div className="page-shell space-y-1 px-5 py-4 text-center font-mono text-xs text-muted sm:px-8">
        <p className="text-body">
          © {year} {profile.name}
        </p>
        <p>Banyumas, Jawa Tengah</p>
      </div>
    </footer>
  )
}