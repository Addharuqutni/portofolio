import { useEffect } from 'react'

/**
 * Pena sorot mengikuti kursor: cahaya radial lembut yang mengikuti pointer di seluruh halaman.
 *
 * Posisi ditulis ke variabel CSS (--cursor-x / --cursor-y) lalu dipakai elemen
 * `.cursor-glow` di index.css. Geraknya diredam dengan lerp agar terasa melayang,
 * bukan menempel kaku. Lapisan ini `pointer-events: none` dan z-index di bawah toast.
 */
export function useCursorGlow() {
  useEffect(() => {
    // Hanya perangkat dengan pointer halus (mouse/trackpad) dan tanpa reduced motion.
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference)')
    if (!fine.matches || !motion.matches) return

    let frame = 0
    // Mulai dari tengah viewport supaya tidak menyala dari pojok kiri atas.
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY
    let active = false

    const write = () => {
      document.documentElement.style.setProperty('--cursor-x', `${currentX.toFixed(1)}px`)
      document.documentElement.style.setProperty('--cursor-y', `${currentY.toFixed(1)}px`)
    }

    const tick = () => {
      // 0.12 → cukup lambat untuk terasa melayang, cukup cepat agar tidak tertinggal.
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12
      write()

      // Berhenti bila sudah sampai tujuan: tidak ada frame yang dihitung saat kursor diam.
      if (Math.abs(targetX - currentX) < 0.5 && Math.abs(targetY - currentY) < 0.5) {
        frame = 0
        return
      }
      frame = requestAnimationFrame(tick)
    }

    const onMove = (event) => {
      targetX = event.clientX
      targetY = event.clientY
      if (!active) {
        active = true
        document.documentElement.classList.add('has-cursor-glow')
      }
      if (!frame) frame = requestAnimationFrame(tick)
    }

    // Kursor keluar jendela: pudarkan, jangan biarkan cahaya membeku di tepi.
    const onLeave = () => document.documentElement.classList.remove('has-cursor-glow')
    const onEnter = () => document.documentElement.classList.add('has-cursor-glow')

    write()
    // Cahaya sudah menyala sejak halaman dibuka (di tengah layar), lalu mengikuti kursor
    // pada gerakan pertama. Tanpa ini efek baru terlihat setelah mouse digerakkan.
    document.documentElement.classList.add('has-cursor-glow')
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    document.addEventListener('pointerenter', onEnter)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('pointerenter', onEnter)
      document.documentElement.classList.remove('has-cursor-glow')
    }
  }, [])
}
