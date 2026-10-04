/** Judul seksi gaya editorial: garis atas, indeks mono, judul display, deskripsi di kanan. */
export default function SectionHeading({ id, index, title, subtitle }) {
  return (
    <div data-reveal className="relative grid gap-4 pt-6 md:grid-cols-[1fr_minmax(0,22rem)] md:items-end md:gap-10">
      {/* Garis pemisah seksi: full-bleed selebar viewport, lepas dari page-shell (80rem). */}
      <span data-line aria-hidden="true" className="absolute left-1/2 top-0 h-px w-screen -translate-x-1/2 origin-left bg-line-strong" />
      <div className="space-y-3">
        <p aria-hidden="true" className="flex items-center gap-3 font-mono text-xs text-accent">
          {index}
          <span data-line className="h-px w-8 origin-left bg-accent" />
        </p>
        <h2
          id={id}
          className="font-display text-3xl font-semibold tracking-[-0.025em] text-balance text-ink sm:text-4xl"
        >
          {title}
        </h2>
      </div>
      {subtitle && <p className="text-sm leading-relaxed text-pretty text-muted md:text-right">{subtitle}</p>}
    </div>
  )
}
