import { useState } from 'react'
import { getMotif } from './ProjectMotifs.jsx'

/**
 * Visual kartu proyek.
 *
 * Urutan sumber gambar:
 * 1. `project.cover` — path eksplisit, boleh URL eksternal.
 * 2. `src/assets/covers/<slug>.<ext>` — terdeteksi otomatis saat build, cukup taruh filenya.
 * 3. Motif SVG per proyek (lihat ProjectMotifs.jsx) — dipakai bila gambar belum ada
 *    atau gagal dimuat. Motif dipilih dari slug, jadi tiap proyek punya bahasanya sendiri.
 *
 * Semua visual memakai aspect-ratio tetap agar tata letak tidak bergeser saat dimuat.
 */

const FILES = import.meta.glob('../assets/covers/*.{avif,webp,png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const EXT_ORDER = ['avif', 'webp', 'png', 'jpg', 'jpeg']

/** Peta slug (nama file tanpa ekstensi, huruf kecil) → url gambar dengan format paling efisien. */
const BY_SLUG = Object.entries(FILES).reduce((acc, [path, url]) => {
  const match = /\/([^/]+)\.([a-z0-9]+)$/i.exec(path)
  if (!match) return acc
  const slug = match[1].toLowerCase()
  const ext = match[2].toLowerCase()
  if (!acc[slug] || EXT_ORDER.indexOf(ext) < EXT_ORDER.indexOf(acc[slug].ext)) {
    acc[slug] = { ext, url }
  }
  return acc
}, {})

export default function ProjectVisual({ project, index, className = '' }) {
  const [failed, setFailed] = useState(false)
  const src = project.cover || BY_SLUG[project.slug]?.url

  // Motif dipilih dari slug proyek (lihat ProjectMotifs.jsx), bukan sekadar bergilir,
  // sehingga tiap kartu punya bahasa visualnya sendiri.
  const Motif = getMotif(project, index)

  // Bingkai memotong isi; isi diberi [data-parallax] agar digeser GSAP saat discroll.
  return (
    <div
      className={`group/visual relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-glass-line bg-[radial-gradient(ellipse_at_30%_0%,rgb(184_243_92/0.07),transparent_60%)] ${className}`}
    >
      {/* Motif adalah visual utama: diagram per proyek yang digambar khusus untuknya.
          Screenshot hanya dipakai bila proyek memang punya, dan motif tetap menjadi
          latar pengenal di belakangnya. */}
      <div data-parallax className={`absolute inset-0 ${src && !failed ? 'opacity-20' : 'scale-[1.04]'}`}>
        <Motif />
      </div>

      {src && !failed ? (
        <img
          data-parallax
          src={src}
          alt={`Pratinjau ${project.title}`}
          width="640"
          height="400"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="relative h-full w-full scale-[1.08] object-cover object-top"
        />
      ) : null}
    </div>
  )
}
