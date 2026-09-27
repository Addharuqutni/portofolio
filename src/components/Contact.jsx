import { Copy, ExternalLink, Mail, MessageSquare } from 'lucide-react'
import { profile } from '../data/portfolio.js'
import { useToastContext } from '../context/ToastContext.jsx'
import { useClipboard } from '../hooks/useClipboard.js'
import SectionHeading from './SectionHeading.jsx'

const linkBase =
  'inline-flex items-center gap-2 rounded-lg border border-zinc-900 bg-zinc-950 px-3 py-2 font-mono text-xs text-zinc-200 transition hover:border-zinc-700'

/** Seksi 05 — Hubungi saya. */
export default function Contact() {
  const { notify } = useToastContext()
  const { copy } = useClipboard()

  const handleCopy = async () => {
    const ok = await copy(profile.email, 'email')
    notify(ok ? 'Email disalin!' : 'Gagal menyalin email')
  }

  return (
    <section id="kontak" className="scroll-mt-20 space-y-3 border-t border-zinc-900 pt-4">
      <SectionHeading
        index="05"
        title="Hubungi Saya"
        subtitle="Terbuka untuk posisi full-time, freelance, maupun diskusi teknis."
      />

      <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
        <a href={`mailto:${profile.email}`} className={linkBase}>
          <Mail className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
          <span>{profile.email}</span>
        </a>

        <button
          type="button"
          onClick={handleCopy}
          title="Salin Email"
          className={`${linkBase} text-zinc-400 hover:text-zinc-200`}
        >
          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Salin</span>
        </button>

        <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className={linkBase}>
          <MessageSquare className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>

        <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkBase}>
          <ExternalLink className="h-3.5 w-3.5 text-zinc-400" aria-hidden="true" />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  )
}
