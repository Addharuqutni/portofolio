import { ArrowUpRight, Check, Copy, ExternalLink, Mail, MessageSquare } from 'lucide-react'
import { profile } from '../data/portfolio.js'
import { useToastContext } from '../context/ToastContext.jsx'
import { useClipboard } from '../hooks/useClipboard.js'
import SectionHeading from './SectionHeading.jsx'

const channelBase =
  'group flex min-h-14 items-center justify-between gap-3 rounded-lg border border-line bg-raised px-4 py-3 transition-colors duration-150 hover:border-accent'
const arrow = 'h-4 w-4 shrink-0 text-muted transition-[color,transform] duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent'

/** Seksi 06 — Hubungi saya. */
export default function Contact({ className = '' }) {
  const { notify } = useToastContext()
  const { copy, copiedKey } = useClipboard()
  const copied = copiedKey === 'contact-email'

  const handleCopy = async () => {
    const ok = await copy(profile.email, 'contact-email')
    notify(ok ? 'Email disalin!' : 'Gagal menyalin email')
  }

  return (
    <section id="kontak" aria-labelledby="kontak-title" className={`space-y-6 ${className}`}>
      <SectionHeading
        id="kontak-title"
        title="Hubungi Saya"
        subtitle="Terbuka untuk posisi full-time, freelance, maupun diskusi teknis."
      />

      <div
        data-reveal
        className="grid grid-cols-1 gap-8 border-y border-line py-8 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-12"
      >
        <div className="space-y-4">
          <p className="font-display text-3xl font-semibold leading-tight tracking-[-0.025em] text-balance text-ink sm:text-4xl">
            Punya proyek atau posisi yang cocok?
          </p>
          <p className="text-[15px] leading-relaxed text-muted">
            Kirim email atau pesan WhatsApp — saya biasanya membalas dalam 1×24 jam.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-3 text-sm">
          <div className="flex gap-3">
            <a href={`mailto:${profile.email}`} className={`${channelBase} min-w-0 flex-1`}>
              <span className="flex min-w-0 items-center gap-3 text-ink">
                <Mail className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                {/* Mono di sini karena alamat email adalah data, bukan label. */}
                <span className="truncate font-mono">{profile.email}</span>
              </span>
              <ArrowUpRight className={arrow} aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? 'Email tersalin' : 'Salin alamat email'}
              title="Salin Email"
              className="flex min-h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-line bg-raised text-muted transition-colors duration-150 hover:border-accent hover:text-ink"
            >
              {copied ? (
                <Check className="h-4 w-4 text-accent" aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className={channelBase}>
              <span className="flex items-center gap-3 text-ink">
                <MessageSquare className="h-4 w-4 text-accent" aria-hidden="true" />
                WhatsApp
              </span>
              <ArrowUpRight className={arrow} aria-hidden="true" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={channelBase}>
              <span className="flex items-center gap-3 text-ink">
                <ExternalLink className="h-4 w-4 text-muted" aria-hidden="true" />
                GitHub
              </span>
              <ArrowUpRight className={arrow} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
