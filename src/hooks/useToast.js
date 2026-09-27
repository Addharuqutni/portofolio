import { useCallback, useEffect, useState } from 'react'

/**
 * Toast sederhana dengan auto-dismiss.
 * Menggantikan manipulasi class DOM manual pada versi HTML statis.
 */
export function useToast({ duration = 2000 } = {}) {
  const [toast, setToast] = useState({ visible: false, message: '' })

  const showToast = useCallback(
    (message = 'Teks disalin') => {
      setToast({ visible: true, message })
    },
    [],
  )

  useEffect(() => {
    if (!toast.visible) return undefined
    const timer = setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }))
    }, duration)
    return () => clearTimeout(timer)
  }, [toast.visible, toast.message, duration])

  return { toast, showToast }
}
