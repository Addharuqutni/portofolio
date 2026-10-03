import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'
import { projects, profile, routes } from '../data/portfolio.js'
import ProjectCard from '../components/ProjectCard.jsx'

/** Halaman daftar lengkap proyek. Dibuka di /proyek. */
export default function ProjectsPage() {
  useEffect(() => {
    document.title = `Semua Proyek — ${profile.name}`
  }, [])

  return (
    <main id="main" className="page-shell space-y-12 overflow-x-clip px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
      <header className="space-y-6">
        <a
          href={routes.home}
          className="group inline-flex min-h-11 items-center gap-2 rounded-xl font-mono text-xs text-muted transition-colors duration-150 hover:text-ink"
        >
          <ArrowLeft
            className="h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Beranda
        </a>

        <div className="space-y-4 border-t border-line pt-8">
          <p aria-hidden="true" className="flex items-center gap-3 font-mono text-xs text-accent">
            04
            <span data-line className="h-px w-8 origin-left bg-accent" />
          </p>
          <h1
            id="semua-proyek-title"
            className="font-display text-3xl font-semibold tracking-[-0.025em] text-balance text-ink sm:text-5xl"
          >
            Semua Proyek
          </h1>
          <p className="max-w-2xl text-[15px] leading-relaxed text-pretty text-muted">
            Daftar lengkap {projects.length} proyek: sistem nyata yang dirancang, diuji, dan diimplementasikan.
          </p>
        </div>
      </header>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} layout="row" />
        ))}
      </div>
    </main>
  )
}
