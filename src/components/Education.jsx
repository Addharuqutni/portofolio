import { education } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

/** Seksi 04 — Pendidikan formal. */
export default function Education() {
  return (
    <section id="pendidikan" aria-labelledby="pendidikan-title" className="space-y-8">
      <SectionHeading
        id="pendidikan-title"
        index="04"
        title="Pendidikan"
        subtitle="Latar belakang akademik formal di bidang rekayasa perangkat lunak."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <article
            key={`${item.title}-${item.institution}`}
            data-reveal
            className="flex gap-4 rounded-xl border border-zinc-900 bg-zinc-950 p-5 transition-colors duration-200 hover:border-zinc-800"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 font-mono text-xs font-semibold text-zinc-200">
              {item.level}
            </span>

            <div className="min-w-0 space-y-2">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <time className="font-mono text-xs text-zinc-500">{item.period}</time>
                {item.highlight && (
                  <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-300">
                    {item.highlight}
                  </span>
                )}
              </div>
              <h3 className="text-base font-semibold text-zinc-100">{item.title}</h3>
              <p className="text-sm text-zinc-300">{item.institution}</p>
              <p className="text-sm leading-relaxed text-zinc-400">{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
