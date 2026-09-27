import { ArrowDown, Check, Copy, ExternalLink, MapPin, MessageSquare } from 'lucide-react'
import { experiences, profile, projects } from '../data/portfolio.js'
import { useToastContext } from '../context/ToastContext.jsx'
import { useClipboard } from '../hooks/useClipboard.js'

const actionBase =
  'inline-flex min-h-11 items-center gap-2 rounded-lg px-4 font-mono text-xs transition-[background-color,border-color,color,transform] duration-150 active:scale-[0.98]'
const actionSecondary = `${actionBase} border border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100`

const stats = [
  { value: '3.81', label: 'IPK S1 Informatika' },
  { value: String(projects.length), label: 'Proyek pilihan' },
  { value: String(experiences.length), label: 'Pengalaman profesional' },
  { value: 'BNSP', label: 'Junior Web Developer' },
]

/** Seksi pembuka: status, nama, value proposition, aksi cepat, dan fakta singkat. */
export default function Hero() {
  const { notify } = useToastContext()
  const { copy, copiedKey } = useClipboard()
  const copied = copiedKey === 'hero-email'

  const handleCopyEmail = async () => {
    const ok = await copy(profile.email, 'hero-email')
    notify(ok ? 'Email disalin!' : 'Gagal menyalin email')
  }

  return (
    <section id="hero" aria-labelledby="hero-title" className="relative pt-6 sm:pt-12">
      <div aria-hidden="true" className="bg-dot-grid pointer-events-none absolute -inset-x-8 -top-24 bottom-0 -z-10" />

      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-emerald-300">
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </span>
          <span className="inline-flex items-center gap-1.5 text-zinc-400">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {profile.location}
          </span>
        </div>

        <div className="max-w-3xl space-y-5">
          <div className="space-y-2">
            <p className="font-mono text-sm text-zinc-400">{profile.role}</p>
            <h1
              id="hero-title"
              className="text-4xl font-bold leading-[1.05] tracking-tight text-balance text-zinc-50 sm:text-5xl lg:text-6xl"
            >
              {profile.name}
            </h1>
          </div>
          <p className="text-lg font-medium leading-relaxed text-pretty text-zinc-300 sm:text-xl">
            {profile.headline.lead}{' '}
            <span className="text-white underline decoration-emerald-400/60 decoration-2 underline-offset-[6px]">
              {profile.headline.highlight}
            </span>
            {profile.headline.tail}
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-pretty text-zinc-400 sm:text-base">{profile.summary}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href="#proyek"
            className={`${actionBase} bg-zinc-100 font-semibold text-zinc-950 hover:bg-white`}
          >
            <ArrowDown className="h-4 w-4" aria-hidden="true" /> Lihat Proyek
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className={actionSecondary}>
            <MessageSquare className="h-4 w-4 text-emerald-400" aria-hidden="true" /> WhatsApp
          </a>
          <button type="button" onClick={handleCopyEmail} className={actionSecondary} aria-live="polite">
            {copied ? (
              <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            ) : (
              <Copy className="h-4 w-4" aria-hidden="true" />
            )}
            {copied ? 'Tersalin' : 'Salin Email'}
          </button>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={actionSecondary}>
            <ExternalLink className="h-4 w-4" aria-hidden="true" /> GitHub
          </a>
        </div>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-zinc-900 bg-zinc-900 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col bg-[#09090b] px-4 py-4 sm:px-5">
              <dt className="order-2 mt-1 text-xs text-zinc-400">{stat.label}</dt>
              <dd className="font-mono text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
