import { ArrowUpRight, CodeXml } from 'lucide-react'
import ProjectVisual from './ProjectVisual.jsx'

const linkClass =
  'group/link inline-flex min-h-11 items-center gap-1.5 rounded-lg px-1 font-mono text-xs text-body transition-colors duration-150 hover:text-accent'

/** Tautan kode & demo; bila tidak ada, teks keterangan agar tinggi kartu tetap seragam. */
function ProjectLinks({ project }) {
  if (!project.repo && !project.demo) {
    return (
      <p className="-mb-2 flex min-h-11 items-center border-t border-glass-line pt-2 font-mono text-xs text-muted">
        Tidak ada tautan publik
      </p>
    )
  }
  return (
    <div className="-mb-2 flex flex-wrap gap-x-5 border-t border-glass-line pt-2">
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Kode sumber ${project.title} di GitHub`}
          className={linkClass}
        >
          <CodeXml className="h-3.5 w-3.5" aria-hidden="true" />
          Kode
          <ArrowUpRight
            className="h-3 w-3 transition-transform duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Demo live ${project.title}`}
          className={linkClass}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          Demo live
          <ArrowUpRight
            className="h-3 w-3 transition-transform duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      )}
    </div>
  )
}

/**
 * Kartu proyek, dipakai beranda dan halaman daftar proyek.
 * `layout`:
 * - 'stack' (default) → visual di atas teks, untuk grid beranda.
 * - 'row' → visual di samping teks mulai layar md, untuk halaman daftar proyek.
 * `reveal={false}` mematikan animasi muncul per kartu (dipakai carousel beranda).
 * `compact` → isi ringkas: gambar, judul, tech stack, tautan (dipakai carousel beranda).
 */
export default function ProjectCard({ project, index, layout = 'stack', reveal = true, compact = false }) {
  const row = layout === 'row'

  return (
    <article
      // Di dalam carousel, reveal dipasang pada carousel-nya; slide yang tersembunyi
      // ke samping tidak boleh menunggu IntersectionObserver per kartu.
      data-reveal={reveal || undefined}
      data-spotlight
      data-tilt
      className={`glass group relative flex flex-col rounded-2xl transition-[border-color,background-color,translate] duration-200 hover:-translate-y-1 hover:border-glass-strong hover:bg-glass-hover ${
        compact ? 'gap-5 p-5 sm:p-6' : 'gap-6 p-6 sm:p-7'
      } ${row ? 'md:flex-row md:items-center md:gap-8 lg:gap-10' : ''}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-6 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
      />

      <ProjectVisual project={project} index={index} className={row ? 'md:w-[42%] md:shrink-0' : ''} />

      {compact ? (
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex-1 space-y-3">
            <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink">{project.title}</h3>
            <ul aria-label="Tech stack" className="flex flex-wrap gap-1.5 font-mono text-[11px] text-muted">
              {project.stack.split('•').map((tech) => (
                <li key={tech} className="rounded-md border border-glass-line bg-glass px-2 py-0.5">
                  {tech.trim()}
                </li>
              ))}
            </ul>
          </div>
          <ProjectLinks project={project} />
        </div>
      ) : (
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex items-start justify-between gap-3">
            <span
              aria-hidden="true"
              className="font-display text-4xl font-bold leading-none tracking-tighter text-line-strong transition-colors duration-200 group-hover:text-accent"
            >
              {String(index + 1).padStart(2, '0')}
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

          <ProjectLinks project={project} />
        </div>
      )}
    </article>
  )
}
