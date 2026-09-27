import { ArrowDown, Copy, ExternalLink, MessageSquare } from 'lucide-react'
import { profile } from '../data/portfolio.js'
import { useToastContext } from '../context/ToastContext.jsx'
import { useClipboard } from '../hooks/useClipboard.js'

const actionBase =
  'inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 font-mono text-xs transition active:scale-[0.98]'

/** Seksi pembuka: status, nama, value proposition, dan aksi cepat. */
export default function Hero() {
  const { notify } = useToastContext()
  const { copy } = useClipboard()

  const handleCopyEmail = async () => {
    const ok = await copy(profile.email, 'email')
    notify(ok ? 'Email disalin!' : 'Gagal menyalin email')
  }

  return (
    <section id="hero" className="space-y-6 scroll-mt-20">
      {/* Status ketersediaan & lokasi */}
      <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
        <span className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-zinc-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden="true" />
          {profile.availability}
        </span>
        <span className="hidden text-zinc-600 sm:inline" aria-hidden="true">
          •
        </span>
        <span className="text-zinc-400">{profile.location}</span>
      </div>

      {/* Nama & value proposition */}
      <div className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">{profile.name}</h1>
        <p className="text-base font-medium leading-relaxed text-zinc-200 sm:text-lg">
          {profile.headline.lead}{' '}
          <span className="text-white underline decoration-zinc-700 underline-offset-4">
            {profile.headline.highlight}
          </span>
          {profile.headline.tail}
        </p>
        <p className="pt-0.5 text-xs leading-relaxed text-zinc-400 sm:text-sm">{profile.summary}</p>
      </div>

      {/* Aksi cepat */}
      <div className="flex flex-wrap items-center gap-2.5 pt-1 font-mono text-xs">
        <a
          href="#proyek"
          className={`${actionBase} bg-zinc-100 font-semibold text-zinc-950 hover:bg-white`}
        >
          <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" /> Lihat Proyek
        </a>

        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={`${actionBase} border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800`}
        >
          <MessageSquare className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" /> WhatsApp
        </a>

        <button
          type="button"
          onClick={handleCopyEmail}
          className={`${actionBase} border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800`}
        >
          <Copy className="h-3.5 w-3.5" aria-hidden="true" /> Salin Email
        </button>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${actionBase} border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800`}
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> GitHub
        </a>
      </div>
    </section>
  )
}
