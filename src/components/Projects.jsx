import { projects } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

/** Seksi 04 — Proyek pilihan. */
export default function Projects() {
  return (
    <section id="proyek" aria-labelledby="proyek-title" className="space-y-8">
      <SectionHeading
        id="proyek-title"
        index="04"
        title="Proyek Pilihan"
        subtitle="Sistem nyata yang telah dirancang, diuji, dan diimplementasikan."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <article
            key={project.title}
            data-reveal
            className="group relative flex flex-col gap-5 overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950 p-5 transition-colors duration-200 hover:border-zinc-700 sm:p-6"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between gap-3 font-mono text-[11px]">
                <span className="text-zinc-500">{String(i + 1).padStart(2, '0')}</span>
                <span className="rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-0.5 text-zinc-300">
                  {project.badge}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-100">{project.title}</h3>
                <p className="font-mono text-xs text-zinc-500">{project.stack}</p>
              </div>

              <p className="text-sm leading-relaxed text-zinc-300">{project.description}</p>
            </div>

            <ul className="flex flex-wrap gap-1.5 border-t border-zinc-900 pt-4 font-mono text-[11px] text-zinc-400">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
