import { projects } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

/** Seksi 03 — Proyek pilihan. */
export default function Projects() {
  return (
    <section id="proyek" className="scroll-mt-20 space-y-4 border-t border-zinc-900 pt-4">
      <SectionHeading
        index="03"
        title="Proyek Pilihan"
        subtitle="Sistem nyata yang telah dirancang, diuji, dan diimplementasikan"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col justify-between gap-3.5 rounded-xl border border-zinc-900 bg-zinc-950 p-5 transition hover:border-zinc-800"
          >
            <div className="space-y-2.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100 sm:text-base">{project.title}</h3>
                  <p className="mt-0.5 font-mono text-xs text-zinc-500">{project.stack}</p>
                </div>
                <span className="shrink-0 rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400">
                  {project.badge}
                </span>
              </div>

              <p className="text-xs leading-relaxed text-zinc-300 sm:text-sm">{project.description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 border-t border-zinc-900 pt-2.5 font-mono text-[11px] text-zinc-400">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
