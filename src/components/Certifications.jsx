import { BadgeCheck } from 'lucide-react'
import { certifications } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

const TONES = {
  emerald: { icon: 'text-emerald-400', type: 'text-emerald-400' },
  sky: { icon: 'text-sky-400', type: 'text-sky-400' },
}

/** Seksi 05 — Sertifikasi kompetensi. */
export default function Certifications() {
  return (
    <section id="sertifikasi" aria-labelledby="sertifikasi-title" className="space-y-8">
      <SectionHeading
        id="sertifikasi-title"
        index="05"
        title="Sertifikasi"
        subtitle="Kredensial kompetensi yang diakui secara nasional dan oleh industri."
      />

      <ul className="divide-y divide-zinc-900 overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950">
        {certifications.map((cert) => {
          const tone = TONES[cert.tone] ?? TONES.emerald
          return (
            <li
              key={`${cert.title}-${cert.issuer}`}
              data-reveal
              className="grid gap-3 p-5 transition-colors duration-200 hover:bg-zinc-900/40 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-5 sm:p-6"
            >
              <BadgeCheck className={`h-6 w-6 ${tone.icon}`} aria-hidden="true" />

              <div className="min-w-0 space-y-1.5">
                <h3 className="text-base font-semibold text-zinc-100">{cert.title}</h3>
                <p className="text-sm text-zinc-300">{cert.issuer}</p>
                <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">{cert.detail}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] sm:flex-col sm:items-end">
                <span className={tone.type}>{cert.type}</span>
                <span className="rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-0.5 text-zinc-400">
                  {cert.scope}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
