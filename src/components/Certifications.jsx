import { certifications } from '../data/portfolio.js'
import SectionHeading from './SectionHeading.jsx'

/**
 * Sertifikasi — dua kredensial sebagai daftar ringkas, bukan dua kartu kotak.
 *
 * Kartu hanya memberi bingkai yang tidak dibutuhkan dua baris teks. Yang penting
 * di sini: nama, penerbit, dan cakupannya — semua terbaca tanpa kontainer.
 */
export default function Certifications({ className = '' }) {
  return (
    <section id="sertifikasi" aria-labelledby="sertifikasi-title" className={`space-y-6 ${className}`}>
      <SectionHeading
        id="sertifikasi-title"
        title="Sertifikasi"
        subtitle="Kredensial kompetensi yang diakui secara nasional dan oleh industri."
      />

      <ul data-reveal className="divide-y divide-line border-y border-line">
        {certifications.map((cert) => (
          <li key={`${cert.title}-${cert.issuer}`} className="flex flex-col gap-1.5 py-5 sm:flex-row sm:gap-8">
            <div className="flex shrink-0 flex-wrap items-baseline gap-x-2 gap-y-1 sm:w-52">
              <h3 className="text-[15px] font-medium text-ink">{cert.title}</h3>
              <span className="text-[13px] text-muted">{cert.scope}</span>
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-[15px] text-body">{cert.issuer}</p>
              <p className="text-sm leading-relaxed text-muted">{cert.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
