import { skillGroups } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import TechIcon from './TechIcon.jsx'

/** Seksi 01 — Keahlian teknis per kategori. */
export default function Skills() {
  return (
    <section id="keahlian" className="scroll-mt-20 space-y-4 border-t border-zinc-900 pt-4">
      <SectionHeading
        index="01"
        title="Keahlian Teknis"
        subtitle="Teknologi dan stack yang digunakan dalam lingkungan produksi"
      />

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="space-y-3 rounded-xl border border-zinc-900 bg-zinc-950 p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-medium text-zinc-200">{group.title}</span>
              <span className="font-mono text-[11px] text-zinc-500">{group.meta}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill.label}
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 font-mono text-xs text-zinc-300"
                >
                  <TechIcon icon={skill.icon} />
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
