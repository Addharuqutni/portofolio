import { useEffect, useState } from 'react'

/** Mengembalikan id seksi yang sedang berada di tengah viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
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
