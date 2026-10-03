import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { projects, routes } from '../data/portfolio.js'
import ProjectCard from './ProjectCard.jsx'
import SectionHeading from './SectionHeading.jsx'

// Proyek unggulan di depan, sisanya mengikuti urutan data (sort stabil).
const slides = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))

/** Kecepatan aliran dalam piksel per detik. */
const SPEED = 40
/** Setelah pengguna menggeser manual, aliran menunggu selama ini sebelum lanjut. */
const IDLE_MS = 2500

/**
 * Seksi 04 — Proyek dalam carousel yang mengalir terus (marquee), tanpa berhenti per slide.
 *
 * Daftar dirender dua kali; saat posisi melewati satu putaran, posisi dikurangi satu putaran
 * sehingga aliran terlihat tak berujung. Memakai scroll container sungguhan (bukan transform)
 * agar pengguna tetap bisa menggeser manual dan fokus keyboard selalu digulir ke dalam pandangan.
 *
 * Aliran tertahan saat kursor di atas carousel, saat fokus keyboard di dalamnya, saat carousel
 * di luar layar atau tab tersembunyi, dan sesaat setelah pengguna menggeser. Bila reduced motion
 * aktif, aliran tidak berjalan (kartu tetap bisa digeser manual).
 */
export default function Projects() {
  const rootRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    const track = trackRef.current
    const hold = { hover: false, focus: false, offscreen: false, lastInput: 0 }
    // Dibaca tiap frame, jadi perubahan setelan OS langsung berlaku tanpa reload.
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let loop = 0
    let pos = track.scrollLeft
    let last = 0
    let frame = 0

    // Lebar satu putaran = jarak dari item pertama ke salinan pertamanya.
    const measure = () => {
      const copy = track.children[slides.length]
      loop = copy ? copy.offsetLeft - track.firstElementChild.offsetLeft : 0
    }

    const tick = (now) => {
      frame = requestAnimationFrame(tick)
      const dt = Math.min(now - (last || now), 50)
      last = now
      if (!loop) return

      // Pengguna menggeser manual: ikuti posisinya, dan bungkus ke awal/akhir agar tak berujung.
      if (Math.abs(track.scrollLeft - pos) > 2) pos = track.scrollLeft
      if (pos < 1) pos += loop

      const held =
        reducedMotion.matches || hold.hover || hold.focus || hold.offscreen || document.hidden || now - hold.lastInput < IDLE_MS
      if (!held) pos += (SPEED * dt) / 1000
      if (pos >= loop) pos -= loop

      if (Math.abs(track.scrollLeft - pos) >= 0.5) track.scrollLeft = pos
    }

    const markInput = () => {
      hold.lastInput = performance.now()
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
    <section id="proyek" aria-labelledby="proyek-title" className="space-y-10">
      <SectionHeading
        id="proyek-title"
        index="04"
        title="Proyek Pilihan"
        subtitle="Sistem nyata yang telah dirancang, diuji, dan diimplementasikan."
      />

      <div ref={rootRef} data-reveal className="space-y-8">
        <div
          ref={trackRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Daftar proyek yang bergerak otomatis"
          tabIndex={0}
          className="no-scrollbar flex gap-4 overflow-x-auto py-4 [mask-image:linear-gradient(to_right,transparent,#000_3%,#000_97%,transparent)]"
        >
          {[0, 1].map((copy) =>
            slides.map((project, i) => (
              <div
                key={`${copy}-${project.title}`}
                role={copy ? undefined : 'group'}
                aria-roledescription={copy ? undefined : 'slide'}
                aria-label={copy ? undefined : `${i + 1} dari ${slides.length}: ${project.title}`}
                // Salinan kedua hanya untuk ilusi tak berujung: disembunyikan dari pembaca layar dan Tab.
                aria-hidden={copy ? true : undefined}
                inert={copy ? true : undefined}
                className="flex w-[86%] shrink-0 *:w-full sm:w-[calc((100%-1rem)/2)]"
              >
                <ProjectCard project={project} index={i} reveal={false} compact />
              </div>
            )),
          )}
        </div>

        <div className="flex justify-center">
          <a
            href={routes.projects}
            data-magnetic
            className="group inline-flex min-h-12 items-center gap-2 rounded-xl border border-glass-line bg-glass px-5 text-sm font-medium text-body transition-colors duration-150 hover:border-glass-strong hover:bg-glass-hover hover:text-ink"
          >
            Lihat semua proyek
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
