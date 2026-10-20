import { skillGroups } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'
import TechIcon from './TechIcon.jsx'

/**
 * Keahlian teknis — baris datar per kelompok, bukan empat kartu identik.
 *
 * Tujuh belas chip tidak butuh empat kontainer berbingkai: yang diperlukan hanya
 * pengelompokan, dan itu sudah dikerjakan oleh jarak antar baris. Kategori jadi
 * kolom kiri yang sejajar, teknologinya mengalir di kanan.
 */
export default function Skills({ className = '' }) {
  return (
    <section id="keahlian" aria-labelledby="keahlian-title" className={`space-y-6 ${className}`}>
      <SectionHeading
        id="keahlian-title"
        title="Keahlian Teknis"
        subtitle="Teknologi dan stack yang digunakan dalam lingkungan produksi."
      />

      <dl data-reveal className="divide-y divide-line border-y border-line">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="flex flex-col gap-3 py-5 sm:flex-row sm:items-baseline sm:gap-8"
          >
            <dt className="w-full shrink-0 text-base font-medium text-ink sm:w-56">{group.title}</dt>
            <dd className="flex-1">
              <ul data-stagger className="flex flex-wrap gap-x-2 gap-y-2">
                {group.skills.map((skill, i) => (
                  <li
                    key={skill.label}
                    style={{ '--i': i }}
                    className="inline-flex items-center gap-2 rounded-md border border-line bg-raised px-3 py-1.5 text-[15px] text-body"
                  >
                    <TechIcon icon={skill.icon} />
                    {skill.label}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
