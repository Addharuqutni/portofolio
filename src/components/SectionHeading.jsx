import SplitText from './SplitText.jsx'

/**
 * Judul seksi gaya editorial: garis atas, judul display, deskripsi di kanan.
 *
 * Tanpa nomor seksi dan tanpa label eyebrow: urutan bagian tidak membawa informasi
 * yang dibaca pengunjung, dan label kecil di atas judul hanya menambah lapisan teks
 * tanpa menambah makna. Judulnya sendiri sudah cukup membawa beban itu.
 */
export default function SectionHeading({ id, title, subtitle }) {
  return (
    // pt-8 di atas judul lebih besar dari jarak ke konten (24px, dari space-y-6
    // pemanggil): judul mengelompok dengan seksi sebelumnya, lalu melepas isinya.
    <div data-reveal className="relative grid gap-3 pt-8 md:grid-cols-[1fr_minmax(0,20rem)] md:items-end md:gap-10">
      {/* Garis pemisah seksi: full-bleed selebar viewport, lepas dari page-shell. */}
      <span
        data-line
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 origin-left bg-line-strong"
      />
      <h2
        id={id}
        className="font-display text-3xl font-semibold tracking-[-0.025em] text-balance text-ink sm:text-4xl"
      >
        <SplitText as="span" text={title} className="gap-x-[0.26em]" delay={180} stagger={70} />
      </h2>
      {subtitle && <p className="text-sm leading-relaxed text-pretty text-muted md:text-right">{subtitle}</p>}
    </div>
  )
}
