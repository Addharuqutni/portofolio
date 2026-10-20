import { Fragment } from 'react'
import { ArrowDown, Check, Copy, ExternalLink, MapPin, MessageSquare } from 'lucide-react'
import { profile } from '../data/portfolio.js'
import { useToastContext } from '../context/ToastContext.jsx'
import { useClipboard } from '../hooks/useClipboard.js'
import OrbitGraphic from './OrbitGraphic.jsx'

const actionBase =
  'inline-flex min-h-12 items-center gap-2 rounded-lg px-5 text-sm font-medium transition-[background-color,border-color,color,scale] duration-150 active:scale-[0.98]'
const actionSecondary = `${actionBase} border border-line bg-raised text-body hover:border-line-strong hover:text-ink`

/** Nama dipecah per kata agar bisa naik berurutan (lihat .word-rise). */
const nameWords = profile.name.split(' ')

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
      {/* Dua kolom mulai lg: teks di kiri, panggung visual di kanan. Sebelumnya seluruh
          dekorasi diposisikan absolut terhadap section sehingga menabrak teks di lebar
          tertentu; kini semuanya terkurung di dalam panggung berukuran sendiri. */}
      <div className="hero-parallax grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="space-y-8 lg:col-span-7">
          <div className="space-y-6">
            <div className="animate-enter flex flex-wrap items-center gap-x-4 gap-y-2" style={{ '--enter-delay': '120ms' }}>
              <p className="text-[15px] font-medium text-ink">{profile.role}</p>
              <span className="inline-flex items-center gap-1.5 text-[13px] text-muted">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {profile.location}
              </span>
            </div>
            <h1
              id="hero-title"
              className="flex max-w-[19ch] flex-wrap gap-x-[0.24em] gap-y-1 font-display text-[2.6rem] font-bold leading-[0.98] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.5rem] xl:text-[5.25rem]"
            >
              {nameWords.map((word, i) => (
                // Spasi tetap ditulis sebagai text node: flex mengabaikannya untuk tata letak,
                // tapi teks tetap utuh saat dibaca pembaca layar atau disalin.
                <Fragment key={`${word}-${i}`}>
                  <span className="word-rise" style={{ '--word-delay': `${180 + i * 90}ms` }}>
                    {word}
                  </span>
                  {i < nameWords.length - 1 ? ' ' : null}
                </Fragment>
              ))}
            </h1>
          </div>

          {/* max-w-2xl (42rem) → ukuran baris ~72ch pada 18px, masuk rentang baca 65–75ch. */}
          <div className="animate-enter border-t border-line pt-6" style={{ '--enter-delay': '520ms' }}>
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

        {/* Panggung visual: kotak aspect-square, semua dekorasi menempati dirinya sendiri. */}
        <div aria-hidden="true" className="relative hidden lg:col-span-5 lg:block">
          <div className="relative mx-auto aspect-square w-full max-w-[22rem] xl:max-w-[26rem]">
            <span className="spin-ring absolute inset-0 opacity-70" />
            <OrbitGraphic className="absolute inset-[12%] h-[76%] w-[76%] opacity-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
