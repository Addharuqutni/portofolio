import { education } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

const PERIOD_TONES = {
  neutral: 'text-zinc-500',
  emerald: 'text-emerald-400',
  sky: 'text-sky-400',
}

const BADGE_TONES = {
  neutral: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-300 font-semibold',
  muted: 'border-zinc-800 bg-zinc-900 text-zinc-400',
}

/** Seksi 04 — Pendidikan formal & sertifikasi. */
export default function Education() {
  return (
    <section id="tentang" aria-labelledby="tentang-title" className="space-y-8">
      <SectionHeading
        id="tentang-title"
        index="04"
        title="Pendidikan & Sertifikasi"
        subtitle="Latar belakang akademik formal dan sertifikasi kompetensi industri."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <article
            key={`${item.title}-${item.institution}`}
            data-reveal
            className="space-y-2 rounded-xl border border-zinc-900 bg-zinc-950 p-5 transition-colors duration-200 hover:border-zinc-800"
          >
            <div className="flex items-center justify-between gap-3">
              <span className={`font-mono text-xs ${PERIOD_TONES[item.periodTone] ?? PERIOD_TONES.neutral}`}>
                {item.period}
              </span>
              <span
                className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${
                  BADGE_TONES[item.badgeTone] ?? BADGE_TONES.muted
                }`}
              >
                {item.badge}
              </span>
            </div>
            <h3 className="pt-1 text-base font-semibold text-zinc-100">{item.title}</h3>
            <p className="text-sm text-zinc-300">{item.institution}</p>
            <p className="text-sm leading-relaxed text-zinc-400">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
