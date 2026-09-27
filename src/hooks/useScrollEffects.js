import { useEffect, useState } from 'react'

/**
 * Mengembalikan id seksi yang sedang dibaca: seksi terakhir yang bagian atasnya
 * sudah melewati garis 35% viewport. Tidak bergantung pada tinggi seksi,
 * jadi seksi pendek dan celah antar-seksi tetap terdeteksi.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const line = window.innerHeight * 0.35
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      let current = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(atBottom ? ids[ids.length - 1] : current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids])

  return active
}

/** Memudarkan elemen `[data-reveal]` saat masuk viewport; dilewati bila reduced-motion. */
export function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const elements = [...document.querySelectorAll('[data-reveal]')]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )

    elements.forEach((el) => {
      // Elemen yang sudah terlihat saat load tidak dianimasikan.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return
      el.classList.add('reveal-pending')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
