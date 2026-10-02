/**
 * Notifikasi kecil di pojok kanan bawah, setara #toast pada versi HTML statis.
 */
export default function Toast({ visible, message }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 pointer-events-none flex items-center gap-2.5 rounded-xl border glass bg-raised/70 px-4 py-3 font-mono text-sm text-ink shadow-2xl shadow-black/50 transition-all duration-200 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
      <span>{message}</span>
    </div>
  )
}
