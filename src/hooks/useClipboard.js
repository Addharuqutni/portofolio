import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Menyalin teks ke clipboard dengan fallback untuk browser lama / konteks non-HTTPS.
 * Mengembalikan [copy, copiedKey] agar UI bisa memberi umpan balik per tombol.
 */
export function useClipboard({ timeout = 2000 } = {}) {
  const [copiedKey, setCopiedKey] = useState(null)
  const timerRef = useRef(null)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const copy = useCallback(
    async (text, key = 'default') => {
      let ok = false

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text)
          ok = true
        }
      } catch {
        ok = false
      }

      if (!ok) {
        // Fallback legacy
        const el = document.createElement('textarea')
        el.value = text
        el.setAttribute('readonly', '')
        el.style.position = 'fixed'
        el.style.top = '-9999px'
        document.body.appendChild(el)
        el.select()
        try {
          ok = document.execCommand('copy')
        } catch {
          ok = false
        }
        document.body.removeChild(el)
      }

      clearTimeout(timerRef.current)
      setCopiedKey(key)
      timerRef.current = setTimeout(() => setCopiedKey(null), timeout)

      return ok
    },
    [timeout],
  )

  return { copy, copiedKey }
}
