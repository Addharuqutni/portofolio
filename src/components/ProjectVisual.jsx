import { useState } from 'react'

/**
 * Visual kartu proyek.
 *
 * Urutan sumber gambar:
 * 1. `project.cover` — path eksplisit, boleh URL eksternal.
 * 2. `src/assets/covers/<slug>.<ext>` — terdeteksi otomatis saat build, cukup taruh filenya.
 * 3. Motif SVG bawaan — dipakai bila gambar belum ada atau gagal dimuat.
 *
 * Semua visual memakai aspect-ratio tetap agar tata letak tidak bergeser saat dimuat.
 */

const FILES = import.meta.glob('../assets/covers/*.{avif,webp,png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const EXT_ORDER = ['avif', 'webp', 'png', 'jpg', 'jpeg']

/** Peta slug (nama file tanpa ekstensi, huruf kecil) → url gambar dengan format paling efisien. */
const BY_SLUG = Object.entries(FILES).reduce((acc, [path, url]) => {
  const match = /\/([^/]+)\.([a-z0-9]+)$/i.exec(path)
  if (!match) return acc
  const slug = match[1].toLowerCase()
  const ext = match[2].toLowerCase()
  if (!acc[slug] || EXT_ORDER.indexOf(ext) < EXT_ORDER.indexOf(acc[slug].ext)) {
    acc[slug] = { ext, url }
  }
  return acc
}, {})

const stroke = 'rgb(255 255 255 / 0.14)'
const faint = 'rgb(255 255 255 / 0.07)'

/** 01 — Candlestick + garis tren. */
function Candles() {
  const bars = [
    [18, 46, 30],
    [40, 78, 22],
    [62, 58, 34],
    [84, 96, 26],
    [106, 70, 30],
    [128, 112, 20],
    [150, 88, 28],
  ]
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
      <g stroke={faint}>
        <line x1="0" y1="50" x2="320" y2="50" />
        <line x1="0" y1="100" x2="320" y2="100" />
        <line x1="0" y1="150" x2="320" y2="150" />
      </g>
      {bars.map(([x, top, h], i) => (
        <g key={x}>
          <line x1={x + 9} y1={top - 14} x2={x + 9} y2={top + h + 14} stroke={stroke} strokeWidth="1.5" />
          <rect
            x={x}
            y={top}
            width="18"
            height={h}
            rx="2"
            fill={i % 3 === 1 ? 'rgb(255 255 255 / 0.16)' : 'rgb(184 243 92 / 0.55)'}
          />
        </g>
      ))}
      <path
        d="M27 120 L49 96 L71 104 L93 62 L115 76 L137 44 L159 58"
        fill="none"
        stroke="rgb(184 243 92 / 0.85)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="159" cy="58" r="4" fill="#b8f35c" />
    </svg>
  )
}

/** 02 — Denyut telemetri + simpul perangkat. */
function Pulse() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
      <g stroke={faint}>
        <line x1="0" y1="40" x2="320" y2="40" />
        <line x1="0" y1="160" x2="320" y2="160" />
      </g>
      <path
        d="M0 120 H48 L62 120 L72 74 L84 150 L96 100 H140 L152 100 L162 60 L174 148 L186 100 H232 L244 100 L254 82 L266 128 L278 100 H320"
        fill="none"
        stroke="rgb(184 243 92 / 0.8)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {[48, 96, 140, 186, 232, 278].map((x) => (
        <circle key={x} cx={x} cy="100" r="3.5" fill="rgb(255 255 255 / 0.35)" />
      ))}
      <circle cx="162" cy="60" r="4.5" fill="#b8f35c" />
      <circle cx="162" cy="60" r="10" fill="none" stroke="rgb(184 243 92 / 0.35)" />
    </svg>
  )
}

/** 03 — Peta: grid, rute, dan penanda toko. */
function MapMotif() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
      <g stroke={faint}>
        {[40, 80, 120, 160, 200, 240, 280].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="200" />
        ))}
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} />
        ))}
      </g>
      <path
        d="M56 150 C 96 150, 96 92, 140 92 S 196 132, 244 76"
        fill="none"
        stroke="rgb(184 243 92 / 0.8)"
        strokeWidth="2"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
      {[
        [56, 150],
        [140, 92],
      ].map(([cx, cy]) => (
        <g key={cx}>
          <path
            d={`M${cx} ${cy - 22} a 9 9 0 1 1 0.01 0 z`}
            fill="rgb(255 255 255 / 0.18)"
            stroke="rgb(255 255 255 / 0.35)"
          />
          <circle cx={cx} cy={cy - 22} r="3" fill="#b8f35c" />
          <line x1={cx} y1={cy - 13} x2={cx} y2={cy} stroke="rgb(255 255 255 / 0.3)" />
        </g>
      ))}
      <g fill="rgb(255 255 255 / 0.12)" stroke={stroke}>
        <rect x="222" y="118" width="22" height="22" rx="3" />
        <rect x="252" y="140" width="22" height="22" rx="3" />
        <rect x="196" y="152" width="16" height="16" rx="3" />
      </g>
    </svg>
  )
}

/** 04 — Kerangka antarmuka: kartu, avatar, dan baris teks. */
function Wireframe() {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true">
      <rect x="24" y="24" width="272" height="152" rx="10" fill="rgb(255 255 255 / 0.05)" stroke={stroke} />
      <rect x="40" y="40" width="240" height="30" rx="6" fill="rgb(184 243 92 / 0.18)" stroke="rgb(184 243 92 / 0.5)" />
      <circle cx="56" cy="55" r="7" fill="rgb(255 255 255 / 0.22)" />
      <g fill="rgb(255 255 255 / 0.22)">
        <rect x="74" y="50" width="60" height="5" rx="2.5" />
        <rect x="74" y="60" width="34" height="4" rx="2" />
      </g>
      <g fill="rgb(255 255 255 / 0.12)" stroke={stroke}>
        <rect x="40" y="84" width="112" height="76" rx="8" />
        <rect x="168" y="84" width="112" height="76" rx="8" />
      </g>
      <g fill="rgb(255 255 255 / 0.2)">
        <rect x="54" y="100" width="72" height="6" rx="3" />
        <rect x="54" y="114" width="84" height="5" rx="2.5" />
        <rect x="54" y="126" width="52" height="5" rx="2.5" />
        <rect x="182" y="100" width="72" height="6" rx="3" />
        <rect x="182" y="114" width="84" height="5" rx="2.5" />
      </g>
      <rect x="182" y="132" width="46" height="14" rx="7" fill="rgb(184 243 92 / 0.6)" />
    </svg>
  )
}

const MOTIFS = [Candles, Pulse, MapMotif, Wireframe]

export default function ProjectVisual({ project, index, className = '' }) {
  const [failed, setFailed] = useState(false)
  const src = project.cover || BY_SLUG[project.slug]?.url

  const Motif = MOTIFS[index % MOTIFS.length]

  // Bingkai memotong isi; isi diberi [data-parallax] agar digeser GSAP saat discroll.
  return (
    <div
      className={`aspect-[16/10] w-full overflow-hidden rounded-lg border border-glass-line bg-[radial-gradient(ellipse_at_30%_0%,rgb(184_243_92/0.07),transparent_60%)] ${className}`}
    >
      {src && !failed ? (
        <img
          data-parallax
          src={src}
          alt={`Pratinjau ${project.title}`}
          width="640"
          height="400"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full scale-[1.12] object-cover object-top"
        />
      ) : (
        <div data-parallax className="h-full w-full scale-[1.12]">
          <Motif />
        </div>
      )}
    </div>
  )
}
