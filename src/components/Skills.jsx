import { skillGroups } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import TechIcon from './TechIcon.jsx'

/** Seksi 01 — Keahlian teknis per kategori. */
export default function Skills() {
  return (
    <section id="keahlian" aria-labelledby="keahlian-title" className="space-y-8">
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
            className="space-y-4 rounded-xl border border-zinc-900 bg-zinc-950 p-5 transition-colors duration-200 hover:border-zinc-800"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-sm font-semibold text-zinc-100">{group.title}</h3>
              <span className="font-mono text-[11px] text-zinc-500">{group.meta}</span>
            </div>

            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill.label}
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1.5 font-mono text-xs text-zinc-300 transition-colors duration-150 hover:border-zinc-700 hover:text-zinc-100"
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
