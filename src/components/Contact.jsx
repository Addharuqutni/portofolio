import { ArrowUpRight, Check, Copy, ExternalLink, Mail, MessageSquare } from 'lucide-react'
import { profile } from '../data/portfolio.js'
import { useToastContext } from '../context/ToastContext.jsx'
import { useClipboard } from '../hooks/useClipboard.js'
import SectionHeading from './SectionHeading.jsx'

const channelBase =
  'group flex min-h-14 items-center justify-between gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3 transition-colors duration-150 hover:border-zinc-700 hover:bg-zinc-900'

/** Seksi 05 — Hubungi saya. */
export default function Contact() {
  const { notify } = useToastContext()
  const { copy, copiedKey } = useClipboard()
  const copied = copiedKey === 'contact-email'

  const handleCopy = async () => {
    const ok = await copy(profile.email, 'contact-email')
    notify(ok ? 'Email disalin!' : 'Gagal menyalin email')
  }

  return (
    <section id="kontak" aria-labelledby="kontak-title" className="space-y-8">
      <SectionHeading
        id="kontak-title"
        index="05"
        title="Hubungi Saya"
        subtitle="Terbuka untuk posisi full-time, freelance, maupun diskusi teknis."
      />

      <div
        data-reveal
        className="grid grid-cols-1 gap-6 rounded-2xl border border-zinc-900 bg-gradient-to-b from-zinc-950 to-[#09090b] p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr] lg:items-center"
      >
        <div className="space-y-3">
          <p className="text-2xl font-semibold tracking-tight text-balance text-zinc-100 sm:text-3xl">
            Punya proyek atau posisi yang cocok?
          </p>
          <p className="text-sm leading-relaxed text-zinc-400">
            Kirim email atau pesan WhatsApp — saya biasanya membalas dalam 1×24 jam.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-2.5 font-mono text-sm">
          <div className="flex gap-2.5">
            <a href={`mailto:${profile.email}`} className={`${channelBase} min-w-0 flex-1`}>
              <span className="flex min-w-0 items-center gap-3 text-zinc-200">
                <Mail className="h-4 w-4 shrink-0 text-zinc-400" aria-hidden="true" />
                <span className="truncate">{profile.email}</span>
              </span>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-zinc-500 transition-colors group-hover:text-zinc-200"
                aria-hidden="true"
              />
            </a>
            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? 'Email tersalin' : 'Salin alamat email'}
              title="Salin Email"
              className="flex min-h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-colors duration-150 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100"
            >
              {copied ? (
                <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2">
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className={channelBase}>
              <span className="flex items-center gap-3 text-zinc-200">
                <MessageSquare className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                WhatsApp
              </span>
              <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-zinc-200" aria-hidden="true" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={channelBase}>
              <span className="flex items-center gap-3 text-zinc-200">
                <ExternalLink className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                GitHub
              </span>
              <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-zinc-200" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
