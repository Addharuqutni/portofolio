import { projects } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

/** Seksi 04 — Proyek pilihan. */
export default function Projects() {
  return (
    <section id="proyek" aria-labelledby="proyek-title" className="space-y-10">
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
            data-spotlight
            data-tilt
            className="glass group relative flex flex-col gap-6 rounded-2xl p-6 transition-[border-color,background-color,translate] duration-200 hover:-translate-y-1 hover:border-glass-strong hover:bg-glass-hover sm:p-7"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
            />

            <div className="flex items-start justify-between gap-3">
              <span aria-hidden="true" className="font-display text-4xl font-bold leading-none tracking-tighter text-line-strong transition-colors duration-200 group-hover:text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="rounded-full border border-glass-strong px-3 py-1 font-mono text-[11px] text-body">
                {project.badge}
              </span>
            </div>

            <div className="flex-1 space-y-3">
              <div className="space-y-1.5">
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{project.title}</h3>
                <p className="font-mono text-xs text-muted">{project.stack}</p>
              </div>
              <p className="text-sm leading-relaxed text-body">{project.description}</p>
            </div>

            <ul data-stagger className="flex flex-wrap gap-1.5 font-mono text-[11px] text-muted">
              {project.tags.map((tag, j) => (
                <li key={tag} style={{ '--i': j }} className="rounded-md border border-glass-line bg-glass px-2.5 py-1">
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
