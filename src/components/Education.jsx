import { education } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

/**
 * Pendidikan — ledger, bukan dua kartu.
 *
 * Dua entri tidak mengisi dua kontainer berbingkai; yang membuatnya terbaca adalah
 * kolom periode yang sejajar di kiri. IPK ditulis mono karena memang angka ukuran,
 * satu-satunya tempat mono tepat dipakai di seksi ini.
 */
export default function Education({ className = '' }) {
  return (
    <section id="pendidikan" aria-labelledby="pendidikan-title" className={`space-y-6 ${className}`}>
      <SectionHeading
        id="pendidikan-title"
        title="Pendidikan"
        subtitle="Latar belakang akademik formal di bidang rekayasa perangkat lunak."
      />

      <ol data-reveal className="divide-y divide-line border-y border-line">
        {education.map((item) => (
          <li
            key={`${item.title}-${item.institution}`}
            className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:gap-8"
          >
            <div className="flex shrink-0 items-baseline gap-3 sm:w-52 sm:flex-col sm:gap-1">
              <time className="font-mono text-[13px] text-muted">{item.period}</time>
              <span className="text-[13px] text-muted">{item.level}</span>
            </div>

            <div className="flex-1 space-y-1.5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
                {item.highlight && (
                  // Mono karena ini angka hasil ukur, bukan label hiasan.
                  <span className="font-mono text-[13px] text-accent">IPK {item.highlight}</span>
                )}
              </div>
              <p className="text-[15px] text-body">{item.institution}</p>
              <p className="text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
