import { education } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

const PERIOD_TONES = {
  neutral: 'text-zinc-500',
  emerald: 'text-emerald-400',
  sky: 'text-sky-400',
}

const BADGE_TONES = {
  neutral: 'text-zinc-200 font-semibold',
  muted: 'text-zinc-400',
}

/** Seksi 04 — Pendidikan formal & sertifikasi. */
export default function Education() {
  return (
    <section id="tentang" className="scroll-mt-20 space-y-4 border-t border-zinc-900 pt-4">
      <SectionHeading
        index="04"
        title="Pendidikan & Sertifikasi"
        subtitle="Latar belakang akademik formal dan sertifikasi kompetensi industri"
      />

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {education.map((item) => (
          <article
            key={`${item.title}-${item.institution}`}
            className="space-y-1.5 rounded-xl border border-zinc-900 bg-zinc-950 p-4"
          >
            <div className="flex items-start justify-between">
              <span className={`font-mono text-xs ${PERIOD_TONES[item.periodTone] ?? PERIOD_TONES.neutral}`}>
                {item.period}
              </span>
              <span
                className={`rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 font-mono text-xs ${
                  BADGE_TONES[item.badgeTone] ?? BADGE_TONES.muted
                }`}
              >
                {item.badge}
              </span>
            </div>
            <h3 className="text-sm font-semibold text-zinc-100 sm:text-base">{item.title}</h3>
            <p className="text-xs text-zinc-400">{item.institution}</p>
            <p className="pt-0.5 text-xs leading-relaxed text-zinc-400">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
