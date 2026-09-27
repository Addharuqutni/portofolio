import { Database, Network, Radio } from 'lucide-react'

/** Registry eksplisit agar ikon tetap bisa di-tree-shake. */
const LUCIDE_ICONS = {
  Radio,
  Network,
  Database,
}

/**
 * Merender ikon teknologi dari dua sumber:
 * - `devicon` → kelas CSS Devicon (dimuat dari CDN di index.html)
 * - `lucide`  → komponen lucide-react
 */
export default function TechIcon({ icon }) {
  if (!icon) return null

  if (icon.type === 'devicon') {
    return <i className={icon.className} aria-hidden="true" />
  }

  if (icon.type === 'lucide') {
    const Icon = LUCIDE_ICONS[icon.name]
    if (!Icon) return null
    return <Icon className={icon.className} aria-hidden="true" />
  }

  return null
}
