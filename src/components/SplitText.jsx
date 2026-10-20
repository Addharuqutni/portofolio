import { Fragment } from 'react'

/**
 * Memecah teks menjadi kata-kata yang naik berurutan dari balik garis potong.
 *
 * - Posisi awal (translateY 110%) hanya berlaku selama induknya berkelas
 *   `reveal-pending` (dipasang useReveal), jadi tanpa JS teks tetap tampil utuh.
 * - Spasi tetap ditulis sebagai text node: flex mengabaikannya untuk tata letak,
 *   tetapi teks tetap utuh saat disalin dan dibaca pembaca layar.
 * - Kata-kata ditandai `aria-hidden` dan teks utuh disisipkan terpisah untuk
 *   pembaca layar. Tanpa ini, `<span aria-label>` memicu aria-prohibited-attr:
 *   elemen generik tidak boleh punya nama yang dibuat-buat lewat aria-label.
 */
export default function SplitText({ as: Tag = 'span', text, className = '', delay = 0, stagger = 70, duration = 620 }) {
  const words = text.split(' ').filter(Boolean)

  return (
    <Tag className={`flex flex-wrap ${className}`} style={{ '--split-duration': `${duration}ms` }}>
      {/* Versi utuh khusus pembaca layar; tidak terlihat secara visual. */}
      <span className="sr-only">{text}</span>

      {/* Versi kata per kata hanya untuk mata. */}
      <span aria-hidden="true" className="flex flex-wrap">
        {words.map((word, i) => (
          <Fragment key={`${word}-${i}`}>
            {/* overflow-hidden memotong kata yang masih berada di bawah garis. */}
            <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              <span className="split-word" style={{ '--split-delay': `${delay + i * stagger}ms` }}>
                {word}
              </span>
            </span>
            {i < words.length - 1 ? ' ' : null}
          </Fragment>
        ))}
      </span>
    </Tag>
  )
}
