import { experiences } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

/** Seksi 02 — Riwayat pengalaman kerja & magang. */
export default function Experience() {
  return (
    <section id="pengalaman" className="scroll-mt-20 space-y-4 border-t border-zinc-900 pt-4">
      <SectionHeading
        index="02"
        title="Pengalaman Kerja"
        subtitle="Riwayat kontribusi profesional dalam pengembangan perangkat lunak dan desain"
      />

      <div className="space-y-3.5">
        {experiences.map((item) => (
          <article key={`${item.company}-${item.period}`} className="space-y-2.5 rounded-xl border border-zinc-900 bg-zinc-950 p-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-sm font-semibold text-zinc-100 sm:text-base">{item.role}</h3>
                <p className="text-xs font-medium text-zinc-400 sm:text-sm">{item.company}</p>
              </div>
              <span className="font-mono text-xs text-zinc-500">{item.period}</span>
            </div>

            <ul className="list-inside list-disc space-y-1.5 text-xs leading-relaxed text-zinc-300 sm:text-sm">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
