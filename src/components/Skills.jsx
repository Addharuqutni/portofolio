import { skillGroups } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import TechIcon from './TechIcon.jsx'

/** Seksi 01 — Keahlian teknis per kategori. */
export default function Skills() {
  return (
    <section id="keahlian" aria-labelledby="keahlian-title" className="space-y-10">
      <SectionHeading
        id="keahlian-title"
        index="01"
        title="Keahlian Teknis"
        subtitle="Teknologi dan stack yang digunakan dalam lingkungan produksi."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            data-reveal
            data-spotlight
            data-tilt
            className="glass relative space-y-5 rounded-lg p-6 transition-colors duration-200 hover:border-glass-strong hover:bg-glass-hover sm:p-7"
          >
            <div className="space-y-1">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{group.meta}</p>
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{group.title}</h3>
            </div>

            <ul data-stagger className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <li
                  key={skill.label}
                  style={{ '--i': i }}
                  className="inline-flex items-center gap-2 rounded-lg border border-glass-line bg-glass px-3 py-2 font-mono text-xs text-body transition-colors duration-150 hover:border-glass-strong hover:text-ink"
                >
                  <TechIcon icon={skill.icon} />
                  {skill.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
