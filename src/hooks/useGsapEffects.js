import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

const MOTION = '(prefers-reduced-motion: no-preference)'

/**
 * Efek GSAP yang sulit dibuat dengan CSS saja, dipasang lewat atribut data:
 * - [data-split]    → judul dipecah per huruf, naik dari balik mask saat dimuat.
 * - [data-progress] → garis yang terisi mengikuti scroll (timeline pengalaman).
 * - [data-parallax] → isi visual bergeser pelan di dalam bingkainya saat discroll.
 * - [data-magnetic] → tombol tertarik ke arah kursor.
 * Dijalankan ulang tiap ganti halaman; animasi, ScrollTrigger, dan listener dibersihkan otomatis.
 */
export function useGsapEffects(route) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add({ motion: MOTION, reduce: '(prefers-reduced-motion: reduce)' }, (context) => {
        const { motion } = context.conditions

        // autoSplit memecah ulang saat font selesai dimuat / lebar berubah; animasi dibuat di onSplit.
        const splits = gsap.utils.toArray('[data-split]').map((el) =>
          SplitText.create(el, {
            type: 'words,chars',
            wordsClass: 'split-word',
            mask: 'words',
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(
                self.chars,
                motion
                  ? { yPercent: 115, rotate: 6, duration: 0.95, ease: 'expo.out', stagger: 0.018, delay: 0.15 }
                  : // Reduced motion: tanpa gerak, cukup memudar.
                    { autoAlpha: 0, duration: 0.5, stagger: 0.008, delay: 0.1 },
              ),
          }),
        )

        // Garis progres tidak menggeser konten, jadi tetap aktif saat reduced motion.
        gsap.utils.toArray('[data-progress]').forEach((el) => {
          gsap.fromTo(
            el,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: { trigger: el.parentElement, start: 'top 75%', end: 'bottom 60%', scrub: 0.6 },
            },
          )
        })

        return () => splits.forEach((split) => split.revert())
      })

      mm.add(MOTION, () => {
        gsap.utils.toArray('[data-parallax]').forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: 'none',
              scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
            },
          )
        })
      })

      mm.add(`(hover: hover) and ${MOTION}`, () => {
        const cleanups = gsap.utils.toArray('[data-magnetic]').map((el) => {
          const toX = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' })
          const toY = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' })

          const onMove = (event) => {
            // Pusat dihitung tanpa offset yang sedang diterapkan agar tarikan tidak menumpuk.
            const rect = el.getBoundingClientRect()
            const cx = rect.left - gsap.getProperty(el, 'x') + rect.width / 2
            const cy = rect.top - gsap.getProperty(el, 'y') + rect.height / 2
            toX((event.clientX - cx) * 0.3)
            toY((event.clientY - cy) * 0.3)
          }
          const onLeave = () => {
            toX(0)
            toY(0)
          }

          el.addEventListener('pointermove', onMove)
          el.addEventListener('pointerleave', onLeave)
          return () => {
            el.removeEventListener('pointermove', onMove)
            el.removeEventListener('pointerleave', onLeave)
          }
        })
        return () => cleanups.forEach((cleanup) => cleanup())
      })

      return () => mm.revert()
    },
    { dependencies: [route], revertOnUpdate: true },
  )
}
