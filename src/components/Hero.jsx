import { ArrowDown, Check, Copy, ExternalLink, MapPin, MessageSquare } from 'lucide-react'
import { profile } from '../data/portfolio.js'
import { useToastContext } from '../context/ToastContext.jsx'
import { useClipboard } from '../hooks/useClipboard.js'

const actionBase =
  'inline-flex min-h-12 items-center gap-2 rounded-[5px] px-5 text-sm font-medium transition-[background-color,border-color,color,scale] duration-150 active:scale-[0.98]'
const actionSecondary = `${actionBase} glass text-body hover:border-glass-strong hover:bg-glass-hover hover:text-ink`

/** Seksi pembuka: status, nama, value proposition, dan aksi cepat. */
export default function Hero() {
  const { notify } = useToastContext()
  const { copy, copiedKey } = useClipboard()
  const copied = copiedKey === 'hero-email'

  const handleCopyEmail = async () => {
    const ok = await copy(profile.email, 'hero-email')
    notify(ok ? 'Email disalin!' : 'Gagal menyalin email')
  }

  return (
    <section id="hero" aria-labelledby="hero-title" className="relative pt-10 sm:pt-16">
      <div aria-hidden="true" className="bg-hero-grid pointer-events-none absolute -inset-x-24 -top-40 bottom-0 -z-10" />

      <div className="hero-parallax space-y-10">
        <div className="space-y-6">
          <div
            className="animate-enter flex flex-wrap items-center justify-between gap-x-6 gap-y-3 font-mono"
          >
            <p className="text-sm" style={{ '--enter-delay': '120ms' }}>
              <span className="text-accent" aria-hidden="true">
                /{' '}
              </span>
              <span className="inline-block rounded-[3px] bg-accent/20 px-2 py-0.5 text-ink">
                {profile.role}
              </span>
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.location}
            </span>
          </div>
          <h1
            id="hero-title"
            className="max-w-5xl font-display text-[2.6rem] font-bold leading-[0.98] tracking-[-0.035em] text-balance text-ink sm:text-6xl lg:text-[5.25rem]"
          >
            {profile.name}
          </h1>
        </div>

        <div
          className="animate-enter border-t border-line pt-8"
          style={{ '--enter-delay': '520ms' }}
        >
          <p className="max-w-2xl text-base leading-relaxed text-pretty text-body sm:text-lg">
            {profile.summary}
          </p>
        </div>

        <div className="animate-enter flex flex-wrap items-center gap-3" style={{ '--enter-delay': '640ms' }}>
          <a href="#proyek" data-magnetic className={`${actionBase} btn-shine bg-accent font-semibold text-canvas shadow-[0_8px_32px_-8px_rgb(184_243_92/0.5)] hover:bg-ink`}>
            <ArrowDown className="h-4 w-4" aria-hidden="true" /> Lihat Proyek
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className={actionSecondary}>
            <MessageSquare className="h-4 w-4 text-accent" aria-hidden="true" /> WhatsApp
          </a>
          <button type="button" onClick={handleCopyEmail} className={actionSecondary} aria-live="polite">
            {copied ? (
              <Check className="h-4 w-4 text-accent" aria-hidden="true" />
            ) : (
              <Copy className="h-4 w-4" aria-hidden="true" />
            )}
            {copied ? 'Tersalin' : 'Salin Email'}
          </button>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={actionSecondary}>
            <ExternalLink className="h-4 w-4" aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
