import { Database, Network, Radio } from 'lucide-react'

/** Registry eksplisit agar ikon tetap bisa di-tree-shake. */
const LUCIDE_ICONS = {
  Radio,
  Network,
  Database,
}

/**
 * Merender ikon teknologi dari dua sumber:
 * - `devicon` → SVG Devicon self-host di /public/icons (`invert` untuk logo hitam di latar gelap)
 * - `lucide`  → komponen lucide-react
 */
export default function TechIcon({ icon }) {
  if (!icon) return null

  if (icon.type === 'devicon') {
    return (
      <img
        src={`/icons/${icon.name}.svg`}
        alt=""
        width="14"
        height="14"
        loading="lazy"
        decoding="async"
        className={`h-3.5 w-3.5 ${icon.invert ? 'invert' : ''}`}
      />
    )
  }

  if (icon.type === 'lucide') {
    const Icon = LUCIDE_ICONS[icon.name]
    if (!Icon) return null
    return <Icon className={icon.className} aria-hidden="true" />
  }

  return null
}
