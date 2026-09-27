/** Judul seksi bernomor, mis. "01. Keahlian Teknis". */
export default function SectionHeading({ index, title, subtitle }) {
  return (
    <div>
      <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400">
        {index}. {title}
      </h2>
      {subtitle && <p className="mt-0.5 text-xs text-zinc-400 sm:text-sm">{subtitle}</p>}
    </div>
  )
}
