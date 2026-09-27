import { experiences } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

/** Seksi 02 — Riwayat pengalaman dalam bentuk timeline. */
export default function Experience() {
  return (
    <section id="pengalaman" aria-labelledby="pengalaman-title" className="space-y-8">
      <SectionHeading
        id="pengalaman-title"
        index="03"
        title="Pengalaman Kerja"
        subtitle="Riwayat kontribusi profesional dalam pengembangan perangkat lunak dan desain."
      />

      <ol className="relative space-y-4 border-l border-zinc-900 pl-6 sm:pl-8">
        {experiences.map((item, i) => (
          <li key={`${item.company}-${item.period}`} data-reveal className="relative">
            <span
              aria-hidden="true"
              className={`absolute top-6 -left-[calc(1.5rem+4.5px)] h-2 w-2 rounded-full ring-4 ring-[#09090b] sm:-left-[calc(2rem+4.5px)] ${
                i === 0 ? 'bg-emerald-400' : 'bg-zinc-600'
              }`}
            />
            <article className="space-y-3 rounded-xl border border-zinc-900 bg-zinc-950 p-5 transition-colors duration-200 hover:border-zinc-800 sm:p-6">
              <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <div className="space-y-0.5">
                  <h3 className="text-base font-semibold text-zinc-100">{item.role}</h3>
                  <p className="text-sm text-zinc-400">{item.company}</p>
                </div>
                <time className="shrink-0 font-mono text-xs text-zinc-500">{item.period}</time>
              </header>

              <ul className="space-y-2 text-sm leading-relaxed text-zinc-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6rem] h-px w-2.5 shrink-0 bg-zinc-600" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
