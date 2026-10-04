import { experiences } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

/** Seksi 03 — Riwayat pengalaman: periode di kolom kiri, detail di kanan. */
export default function Experience() {
  return (
    <section id="pengalaman" aria-labelledby="pengalaman-title" className="space-y-10">
      <SectionHeading
        id="pengalaman-title"
        index="03"
        title="Pengalaman Kerja"
        subtitle="Riwayat kontribusi profesional dalam pengembangan perangkat lunak dan desain."
      />

      <div className="relative">
        {/* Garis progres: terisi oleh GSAP ScrollTrigger mengikuti posisi scroll. */}
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-8 left-0 z-10 w-0.5 bg-glass-line">
          <span data-progress className="block h-full w-full origin-top bg-accent" />
        </span>

      <ol data-spotlight className="glass relative divide-y divide-glass-line rounded-lg px-6 sm:px-8">
        {experiences.map((item, i) => (
          <li
            key={`${item.company}-${item.period}`}
            data-reveal
            className="grid gap-4 py-8 md:grid-cols-[13rem_1fr] md:gap-10"
          >
            <div className="flex items-center gap-2.5 md:flex-col md:items-start md:gap-3">
              <span
                aria-hidden="true"
                className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-accent ring-4 ring-accent-soft' : 'bg-line-strong'}`}
              />
              <time className="font-mono text-xs text-muted">{item.period}</time>
            </div>

            <article className="space-y-4">
              <header className="space-y-1">
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{item.role}</h3>
                <p className="text-sm text-muted">{item.company}</p>
              </header>

              <ul data-stagger className="space-y-2.5 text-[15px] leading-relaxed text-body">
                {item.highlights.map((highlight, j) => (
                  <li key={highlight} style={{ '--i': j * 2 }} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7rem] h-px w-3 shrink-0 bg-accent/70" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
      </div>
    </section>
  )
}
