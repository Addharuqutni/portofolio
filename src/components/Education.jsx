import { education } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

/** Seksi 02 — Pendidikan formal. */
export default function Education() {
  return (
    <section id="pendidikan" aria-labelledby="pendidikan-title" className="space-y-10">
      <SectionHeading
        id="pendidikan-title"
        index="02"
        title="Pendidikan"
        subtitle="Latar belakang akademik formal di bidang rekayasa perangkat lunak."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {education.map((item) => (
          <article
            key={`${item.title}-${item.institution}`}
            data-reveal
            data-spotlight
            data-tilt
            className="glass relative flex flex-col gap-6 overflow-hidden rounded-lg p-6 transition-colors duration-200 hover:border-glass-strong hover:bg-glass-hover sm:p-7"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-6 font-display text-[7rem] font-bold leading-none tracking-tighter text-white/[0.05] select-none"
            >
              {item.level}
            </span>

            <div className="relative flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="rounded-md bg-ink px-2 py-0.5 font-mono text-[11px] font-medium text-canvas">
                {item.level}
              </span>
              <time className="font-mono text-xs text-muted">{item.period}</time>
              {item.highlight && (
                <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] font-medium text-accent">
                  {item.highlight}
                </span>
              )}
            </div>

            <div className="relative space-y-2">
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="text-sm text-body">{item.institution}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
