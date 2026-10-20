/**
 * OrbitGraphic — motion graphic HUD berbentuk radar/orbital, dirender sebagai SVG.
 *
 * Lapisan: cincin statis, cincin berputar (dua arah), sapuan radar, busur dash mengalir,
 * inti berdenyut, dan gelombang keluar. Semua gerak lewat class CSS (index.css) agar
 * ikut mati saat prefers-reduced-motion.
 *
 * Titik orbit diletakkan dengan koordinat kutub supaya tetap presisi di viewBox 200x200.
 */
const CENTER = 100

/** Titik pada lingkaran, sudut dalam derajat (0° = kanan, searah jarum jam). */
function polar(radius, angle) {
  const rad = (angle * Math.PI) / 180
  return { x: CENTER + radius * Math.cos(rad), y: CENTER + radius * Math.sin(rad) }
}

const NODES = [
  { radius: 62, angle: -38, accent: true },
  { radius: 62, angle: 96, accent: false },
  { radius: 62, angle: 208, accent: false },
  { radius: 38, angle: 22, accent: false },
  { radius: 38, angle: 154, accent: true },
  { radius: 86, angle: -96, accent: false },
  { radius: 86, angle: 46, accent: false },
]

export default function OrbitGraphic({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label="Diagram orbital yang berputar: inti sistem dengan node terhubung"
      className={`overflow-visible ${className}`}
    >
      <defs>
        <radialGradient id="orbit-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#b8f35c" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#b8f35c" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#b8f35c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="orbit-sweep-fill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b8f35c" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#b8f35c" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="orbit-arc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b8f35c" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#7cc4ff" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* Cincin struktur */}
      <circle cx={CENTER} cy={CENTER} r="92" fill="none" stroke="rgb(255 255 255 / 0.08)" strokeWidth="0.7" />
      <circle cx={CENTER} cy={CENTER} r="62" fill="none" stroke="rgb(255 255 255 / 0.07)" strokeWidth="0.7" />
      <circle
        cx={CENTER}
        cy={CENTER}
        r="38"
        fill="none"
        stroke="rgb(255 255 255 / 0.06)"
        strokeWidth="0.7"
        strokeDasharray="2 5"
      />

      {/* Sumbu silang tipis */}
      <g stroke="rgb(255 255 255 / 0.06)" strokeWidth="0.6">
        <line x1="8" y1={CENTER} x2="192" y2={CENTER} />
        <line x1={CENTER} y1="8" x2={CENTER} y2="192" />
      </g>

      {/* Sapuan radar: sektor setengah lingkaran yang berputar */}
      <g className="orbit-sweep">
        <path d={`M ${CENTER} ${CENTER} L ${CENTER + 92} ${CENTER} A 92 92 0 0 0 ${CENTER} ${CENTER - 92} Z`} fill="url(#orbit-sweep-fill)" />
        <line
          x1={CENTER}
          y1={CENTER}
          x2={CENTER + 92}
          y2={CENTER}
          stroke="#b8f35c"
          strokeWidth="0.9"
          strokeOpacity="0.5"
        />
      </g>

      {/* Busur dash mengalir, dua arah berlawanan */}
      <g className="orbit-spin">
        <circle
          cx={CENTER}
          cy={CENTER}
          r="78"
          fill="none"
          stroke="url(#orbit-arc)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="26 190"
          className="orbit-dash"
        />
      </g>
      <g className="orbit-spin-reverse">
        <circle
          cx={CENTER}
          cy={CENTER}
          r="70"
          fill="none"
          stroke="rgb(255 255 255 / 0.28)"
          strokeWidth="0.9"
          strokeLinecap="round"
          strokeDasharray="3 12"
        />
      </g>

      {/* Garis penghubung node ke inti */}
      <g stroke="rgb(255 255 255 / 0.14)" strokeWidth="0.6">
        {NODES.map((node, i) => {
          const p = polar(node.radius, node.angle)
          return <line key={`link-${i}`} x1={CENTER} y1={CENTER} x2={p.x} y2={p.y} />
        })}
      </g>

      {/* Node orbit: cincin berputar pelan bersama titik-titiknya */}
      <g className="orbit-spin-fast">
        {NODES.map((node, i) => {
          const p = polar(node.radius, node.angle)
          return (
            <g key={`node-${i}`}>
              <circle cx={p.x} cy={p.y} r={node.accent ? 5.5 : 4} fill="rgb(10 12 16 / 0.9)" stroke={node.accent ? '#b8f35c' : 'rgb(255 255 255 / 0.4)'} strokeWidth="1" />
              <circle cx={p.x} cy={p.y} r={node.accent ? 1.9 : 1.4} fill={node.accent ? '#b8f35c' : 'rgb(241 243 246 / 0.85)'} />
            </g>
          )
        })}
      </g>

      {/* Gelombang keluar dari inti */}
      <circle cx={CENTER} cy={CENTER} r="20" fill="none" stroke="#b8f35c" strokeWidth="1" className="orbit-wave" />
      <circle cx={CENTER} cy={CENTER} r="20" fill="none" stroke="#b8f35c" strokeWidth="0.8" className="orbit-wave" style={{ animationDelay: '1.2s' }} />

      {/* Inti */}
      <circle cx={CENTER} cy={CENTER} r="30" fill="url(#orbit-core)" className="orbit-pulse" />
      <circle cx={CENTER} cy={CENTER} r="5" fill="#b8f35c" />
      <circle cx={CENTER} cy={CENTER} r="11" fill="none" stroke="#b8f35c" strokeOpacity="0.5" strokeWidth="0.9" />
    </svg>
  )
}
