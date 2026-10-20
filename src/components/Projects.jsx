import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { projects, routes } from '../data/portfolio.js'
import ProjectCard from './ProjectCard.jsx'
import SectionHeading from './SectionHeading.jsx'

// Proyek unggulan di depan, sisanya mengikuti urutan data (sort stabil).
const slides = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))

/** Kecepatan aliran dalam piksel per detik. ~28px/s: kartu terbaca, tetap terasa hidup. */
const SPEED = 28
/** Setelah pengguna menggeser manual, aliran menunggu selama ini sebelum lanjut. */
const IDLE_MS = 2600

/**
 * Proyek pilihan — daftar yang mengalir terus, tanpa berhenti per kartu.
 *
 * Sebelumnya kartu melompat satu per satu tiap 4 detik. Aliran kontinu dipilih
 * karena gerak kecil dan tetap lebih mudah diikuti mata daripada lompatan besar
 * yang berulang, dan itu juga yang membuat daftar terasa hidup tanpa menuntut klik.
 *
 * Daftar dirender dua kali; saat posisi melewati satu putaran, posisi dikurangi satu
 * putaran sehingga aliran tampak tak berujung. Memakai scroll container sungguhan
 * (bukan transform) agar pengguna tetap bisa menggeser manual dan fokus keyboard
 * selalu digulir ke dalam pandangan.
 *
 * Aliran tertahan saat kursi di atas carousel, saat fokus keyboard di dalamnya, saat
 * carousel di luar layar atau tab tersembunyi, dan sesaat setelah pengguna menggeser.
 * Bila reduced motion aktif, aliran tidak berjalan (kartu tetap bisa digeser manual).
 */
export default function Projects({ className = '' }) {
  const rootRef = useRef(null)
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const root = rootRef.current
    const track = trackRef.current
    if (!root || !track) return

    const hold = { hover: false, focus: false, offscreen: false, lastInput: 0 }
    // Dibaca tiap frame, jadi perubahan setelan OS langsung berlaku tanpa reload.
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let loop = 0
    let pos = track.scrollLeft
    let last = 0
    let lastSync = 0
    let frame = 0

    // Lebar satu putaran = jarak dari item pertama ke salinan pertamanya.
    const measure = () => {
      const copy = track.children[slides.length]
      loop = copy ? copy.offsetLeft - track.firstElementChild.offsetLeft : 0
    }

    /** Perbarui penghitung & titik sesuai kartu terdekat. */
    const syncActive = () => {
      const first = track.firstElementChild
      if (!first) return
      const step = first.getBoundingClientRect().width + 16
      const raw = Math.round(track.scrollLeft / step) % slides.length
      const index = raw < 0 ? raw + slides.length : raw
      setActive((prev) => (prev === index ? prev : index))
    }

    const tick = (now) => {
      frame = requestAnimationFrame(tick)
      const dt = Math.min(now - (last || now), 50)
      last = now
      if (!loop) return

      // Pengguna menggeser manual: ikuti posisinya, dan bungkus ke awal/akhir.
      if (Math.abs(track.scrollLeft - pos) > 2) pos = track.scrollLeft
      if (pos < 1) pos += loop

      const held =
        reducedMotion.matches ||
        hold.hover ||
        hold.focus ||
        hold.offscreen ||
        document.hidden ||
        now - hold.lastInput < IDLE_MS
      if (!held) pos += (SPEED * dt) / 1000
      if (pos >= loop) pos -= loop

      if (Math.abs(track.scrollLeft - pos) >= 0.5) track.scrollLeft = pos

      // Penghitung mengikuti aliran, bukan hanya saat pengguna menyentuh.
      if (now - lastSync > 250) {
        lastSync = now
        syncActive()
      }
    }

    const markInput = () => {
      hold.lastInput = performance.now()
      syncActive()
    }
    const onEnter = (event) => {
      if (event.pointerType === 'mouse') hold.hover = true
    }
    const onLeave = () => {
      hold.hover = false
    }
    // Hanya fokus keyboard yang menahan; fokus sisa klik mouse tidak.
    const onFocusIn = (event) => {
      hold.focus = event.target.matches(':focus-visible')
    }
    const onFocusOut = (event) => {
      if (!root.contains(event.relatedTarget)) hold.focus = false
    }

    const resizeObserver = new ResizeObserver(measure)
    const viewObserver = new IntersectionObserver(([entry]) => {
      hold.offscreen = !entry.isIntersecting
    })
    const inputs = ['pointerdown', 'wheel', 'touchstart', 'keydown']

    measure()
    resizeObserver.observe(track)
    viewObserver.observe(root)
    root.addEventListener('pointerenter', onEnter)
    root.addEventListener('pointerleave', onLeave)
    root.addEventListener('focusin', onFocusIn)
    root.addEventListener('focusout', onFocusOut)
    inputs.forEach((type) => track.addEventListener(type, markInput, { passive: true }))
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      viewObserver.disconnect()
      root.removeEventListener('pointerenter', onEnter)
      root.removeEventListener('pointerleave', onLeave)
      root.removeEventListener('focusin', onFocusIn)
      root.removeEventListener('focusout', onFocusOut)
      inputs.forEach((type) => track.removeEventListener(type, markInput))
    }
  }, [])

  return (
    <section id="proyek" aria-labelledby="proyek-title" className={`space-y-6 ${className}`}>
      <SectionHeading
        id="proyek-title"
        title="Proyek Pilihan"
        subtitle="Sistem nyata yang telah dirancang, diuji, dan diimplementasikan."
      />

      <div ref={rootRef} data-reveal data-carousel className="space-y-6">
        {/* Full-bleed: keluar dari page-shell (80rem) sampai tepi viewport. */}
        <div className="relative left-1/2 w-screen -translate-x-1/2">
          <div
            ref={trackRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Daftar proyek yang bergerak otomatis"
            tabIndex={0}
            className="no-scrollbar flex gap-4 overflow-x-auto px-5 py-2 sm:px-8 [mask-image:linear-gradient(to_right,transparent,#000_4%,#000_96%,transparent)]"
          >
            {[0, 1].map((copy) =>
              slides.map((project, i) => (
                <div
                  key={`${copy}-${project.title}`}
                  role={copy ? undefined : 'group'}
                  aria-roledescription={copy ? undefined : 'slide'}
                  aria-label={copy ? undefined : `${i + 1} dari ${slides.length}: ${project.title}`}
                  // Salinan kedua hanya untuk ilusi tak berujung: disembunyikan dari
                  // pembaca layar dan Tab.
                  aria-hidden={copy ? true : undefined}
                  inert={copy ? true : undefined}
                  className="flex w-[85%] shrink-0 sm:w-[52%] lg:w-[38%] xl:w-[31%] *:w-full"
                >
                  <ProjectCard project={project} index={i} reveal={false} compact featured={project.featured} />
                </div>
              )),
            )}
          </div>
        </div>

        {/* Kendali: penghitung posisi dan tautan semua proyek. */}
        <div className="flex items-center justify-between gap-4 px-5 sm:px-8">
          <p className="text-[15px] text-muted tabular-nums" aria-live="polite">
            <span className="sr-only">
              Proyek {active + 1} dari {slides.length}
            </span>
            <span aria-hidden="true">
              <span className="text-ink">{String(active + 1).padStart(2, '0')}</span>
              {' / '}
              {String(slides.length).padStart(2, '0')}
            </span>
          </p>

          <a
            href={routes.projects}
            className="group inline-flex min-h-11 shrink-0 items-center gap-2 text-[15px] font-medium text-body transition-colors duration-150 hover:text-ink"
          >
            Semua proyek
            <ArrowRight
              className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
