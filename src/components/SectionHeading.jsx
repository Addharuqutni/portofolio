/** Judul seksi: indeks mono kecil + judul tegas + deskripsi. */
export default function SectionHeading({ id, index, title, subtitle }) {
  return (
    <div className="space-y-1.5">
      <p className="flex items-center gap-2 font-mono text-xs text-zinc-400">
        <span className="text-emerald-400">{index}</span>
        <span className="h-px w-6 bg-zinc-800" aria-hidden="true" />
      </p>
      <h2 id={id} className="text-xl font-semibold tracking-tight text-zinc-100 sm:text-2xl">
        {title}
      </h2>
      {subtitle && <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">{subtitle}</p>}
    </div>
  )
}
