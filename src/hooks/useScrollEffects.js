import { useEffect } from 'react'

/**
 * Memunculkan elemen `[data-reveal]` saat masuk viewport, dengan delay bertingkat antar saudara.
 * Reduced-motion ditangani di CSS (gerak dihapus, fade tetap). Setelah selesai, kelas reveal
 * dilepas agar transisi hover milik elemen (Tailwind) kembali berlaku.
 */
export function useReveal(route) {
  useEffect(() => {
    const timers = []
    const elements = [...document.querySelectorAll('[data-reveal]')]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target
          el.classList.add('is-revealed')
          observer.unobserve(el)
          // ponytail: durasi terpanjang (garis judul / stagger chip) di-hardcode; naikkan jika CSS reveal diperlambat.
          const delay = parseInt(el.style.getPropertyValue('--reveal-delay'), 10) || 0
          timers.push(
            setTimeout(() => {
              el.classList.remove('reveal-pending', 'is-revealed')
              el.style.removeProperty('--reveal-delay')
            }, delay + 1600),
          )
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach((el) => {
      // Elemen yang sudah terlihat saat load tidak dianimasikan (hero punya entrance sendiri).
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return
      const siblings = [...el.parentElement.children].filter((child) => child.hasAttribute('data-reveal'))
      el.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(el), 5) * 120}ms`)
      el.classList.add('reveal-pending')
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [route])
}
