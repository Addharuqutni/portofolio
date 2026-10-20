/**
 * Bilah progres baca tipis di tepi atas viewport.
 *
 * Digerakkan sepenuhnya oleh CSS scroll-driven animation (tanpa listener scroll),
 * jadi tidak menambah biaya JS per frame. Di browser tanpa dukungan
 * `animation-timeline`, bilah disembunyikan (lihat `.scroll-progress` di index.css).
 */
export default function ScrollProgress() {
  return <div aria-hidden="true" className="scroll-progress" />
}
