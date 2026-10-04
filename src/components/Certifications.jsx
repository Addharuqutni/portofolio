import { BadgeCheck } from 'lucide-react'
import { certifications } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

const TONES = {
  emerald: { icon: 'text-accent bg-accent-soft', type: 'text-accent' },
  sky: { icon: 'text-info bg-info/10', type: 'text-info' },
}

/** Seksi 05 — Sertifikasi kompetensi. */
export default function Certifications() {
  return (
    <section id="sertifikasi" aria-labelledby="sertifikasi-title" className="space-y-10">
      <SectionHeading
        id="sertifikasi-title"
        index="05"
        title="Sertifikasi"
        subtitle="Kredensial kompetensi yang diakui secara nasional dan oleh industri."
      />

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {certifications.map((cert) => {
          const tone = TONES[cert.tone] ?? TONES.emerald
          return (
            <li
              key={`${cert.title}-${cert.issuer}`}
              data-reveal
              data-spotlight
              data-tilt
              className="glass relative flex flex-col gap-5 rounded-lg p-6 transition-colors duration-200 hover:border-glass-strong hover:bg-glass-hover sm:p-7"
            >
              <div className="flex items-start justify-between gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${tone.icon}`}>
                  <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col items-end gap-1.5 font-mono text-[11px]">
                  <span className={tone.type}>{cert.type}</span>
                  <span className="rounded-full border border-glass-strong px-2.5 py-0.5 text-muted">{cert.scope}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{cert.title}</h3>
                <p className="text-sm text-body">{cert.issuer}</p>
                <p className="text-sm leading-relaxed text-muted">{cert.detail}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
