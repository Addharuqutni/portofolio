import { useEffect, useState } from 'react'

/**
 * Mengembalikan id seksi yang sedang dibaca: seksi terakhir yang bagian atasnya
 * sudah melewati garis 35% viewport. Tidak bergantung pada tinggi seksi,
 * jadi seksi pendek dan celah antar-seksi tetap terdeteksi.
 */
export function useActiveSection(ids, route) {
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
  }, [ids, route])

  return active
}

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

/**
 * Mengisi --x/--y pada `[data-spotlight]` yang sedang di-hover (cahaya ikut kursor),
 * plus --rx/--ry untuk tilt 3D pada elemen yang juga bertanda `[data-tilt]`.
 */
export function useSpotlight() {
  useEffect(() => {
    let frame = 0
    let last = null

    const update = () => {
      frame = 0
      const event = last
      const card = event.target.closest?.('[data-spotlight]')
      if (!card) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--x', `${event.clientX - rect.left}px`)
      card.style.setProperty('--y', `${event.clientY - rect.top}px`)
      if (!card.hasAttribute('data-tilt')) return
      // Maks. 4 derajat ke tiap arah; cukup terasa tanpa membuat teks sulit dibaca.
      const px = (event.clientX - rect.left) / rect.width - 0.5
      const py = (event.clientY - rect.top) / rect.height - 0.5
      card.style.setProperty('--rx', `${(px * 8).toFixed(2)}deg`)
      card.style.setProperty('--ry', `${(-py * 8).toFixed(2)}deg`)
    }
    const onMove = (event) => {
      last = event
      if (!frame) frame = requestAnimationFrame(update)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('pointermove', onMove)
    }
  }, [])
}
