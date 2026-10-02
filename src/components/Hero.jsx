import { Fragment } from 'react'
import { ArrowDown, Check, Copy, ExternalLink, MapPin, MessageSquare } from 'lucide-react'
import { profile } from '../data/portfolio.js'
import { useToastContext } from '../context/ToastContext.jsx'
import { useClipboard } from '../hooks/useClipboard.js'

const actionBase =
  'inline-flex min-h-12 items-center gap-2 rounded-xl px-5 text-sm font-medium transition-[background-color,border-color,color,transform] duration-150 active:scale-[0.98]'
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
    <section id="hero" aria-labelledby="hero-title" className="relative pt-16 sm:pt-28">
      <div aria-hidden="true" className="bg-hero-grid pointer-events-none absolute -inset-x-24 -top-40 bottom-0 -z-10" />

      <div className="hero-parallax space-y-10">
        <div
          className="animate-enter flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs uppercase tracking-wider"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent-soft px-3.5 py-1.5 text-accent">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {profile.location}
          </span>
        </div>

        <div className="space-y-6">
          <p className="animate-enter font-mono text-sm text-muted" style={{ '--enter-delay': '120ms' }}>
            <span className="text-accent" aria-hidden="true">
              /{' '}
            </span>
            {profile.role}
          </p>
          <h1
            id="hero-title"
            className="max-w-5xl font-display text-[2.6rem] font-bold leading-[0.98] tracking-[-0.035em] text-balance text-ink sm:text-6xl lg:text-[5.25rem]"
          >
            {/* Tiap kata naik dari balik mask; spasi di luar span agar teks tetap terbaca utuh. */}
            {profile.name.split(' ').map((word, i) => (
              <Fragment key={i}>
                {i > 0 && ' '}
                <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <span className="animate-rise inline-block" style={{ '--enter-delay': `${200 + i * 90}ms` }}>
                    {word}
                  </span>
                </span>
              </Fragment>
            ))}
          </h1>
        </div>

        <div
          className="animate-enter grid gap-6 border-t border-line pt-8 lg:grid-cols-[1.25fr_1fr] lg:gap-16"
          style={{ '--enter-delay': '520ms' }}
        >
          <p className="text-xl leading-snug text-pretty text-body sm:text-2xl">
            {profile.headline.lead}{' '}
            <span className="underline-draw font-medium text-ink">
              {profile.headline.highlight}
            </span>
            {profile.headline.tail}
          </p>
          <p className="text-[15px] leading-relaxed text-pretty text-muted">{profile.summary}</p>
        </div>

        <div className="animate-enter flex flex-wrap items-center gap-3" style={{ '--enter-delay': '640ms' }}>
          <a href="#proyek" className={`${actionBase} btn-shine bg-accent font-semibold text-canvas shadow-[0_8px_32px_-8px_rgb(184_243_92/0.5)] hover:bg-ink`}>
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
