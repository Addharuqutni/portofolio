import { Fragment } from 'react'

/**
 * Marquee — pita berjalan tanpa henti. Isi dirender dua kali agar jahitan
 * di tengah tidak terlihat (CSS menggeser tepat -50%). Berhenti saat hover/fokus
 * (`.marquee-host`) dan saat reduced motion (index.css).
 *
 * `items` boleh berupa array string (dirender sebagai chip) atau node React.
 */
export default function Marquee({ items, reverse = false, duration = 38, className = '', chipClass = '' }) {
  const row = (
    <div aria-hidden="true" className={`flex shrink-0 items-center gap-3 pr-3 ${chipClass}`}>
      {items.map((item, i) => (
        <Fragment key={`${i}-${typeof item === 'string' ? item : i}`}>
          <span className="shrink-0">{item}</span>
          <span aria-hidden="true" className="shrink-0 text-accent/50">
            /
          </span>
        </Fragment>
      ))}
    </div>
  )

  return (
    <div
      className={`marquee-host relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] ${className}`}
    >
      <div
        className={`marquee ${reverse ? 'marquee-reverse' : ''}`}
        style={{ '--marquee-duration': `${duration}s` }}
      >
        {row}
        {row}
      </div>
    </div>
  )
}
