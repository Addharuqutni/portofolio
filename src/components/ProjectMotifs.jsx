/**
 * Motif visual per proyek — diagram geometris, bukan ilustrasi.
 *
 * Setiap proyek punya bahasanya sendiri (candlestick, telemetri, peta, kanban, ...)
 * sehingga kartu bisa dikenali dari visualnya, bukan hanya judulnya. Semua digambar
 * sebagai garis tegas pada viewBox 320×200 agar tetap tajam di segala ukuran dan
 * tidak bergantung pada aset gambar.
 *
 * Animasi memakai class CSS (`motif-dash`, `motif-pulse`, `motif-sweep`) yang
 * dimatikan otomatis saat prefers-reduced-motion.
 */

const LINE = 'rgb(255 255 255 / 0.13)'
const LINE_SOFT = 'rgb(255 255 255 / 0.07)'
const FILL = 'rgb(255 255 255 / 0.1)'
const FILL_SOFT = 'rgb(255 255 255 / 0.05)'
const ACCENT = 'rgb(184 243 92 / 0.85)'
const ACCENT_FILL = 'rgb(184 243 92 / 0.5)'
const ACCENT_SOFT = 'rgb(184 243 92 / 0.16)'

/** Latar bersama: grid halus + tanda sudut, memberi kesan bidang terukur. */
function Frame() {
  return (
    <g aria-hidden="true">
      <g stroke={LINE_SOFT} strokeWidth="1">
        {[40, 80, 120, 160, 200, 240, 280].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="200" />
        ))}
        {[40, 80, 120, 160].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="320" y2={y} />
        ))}
      </g>
      <g stroke="rgb(255 255 255 / 0.3)" strokeWidth="1">
        <path d="M10 22 V10 H22" fill="none" />
        <path d="M298 10 H310 V22" fill="none" />
        <path d="M310 178 V190 H298" fill="none" />
        <path d="M22 190 H10 V178" fill="none" />
      </g>
    </g>
  )
}

/** 01 — Crypto: candlestick, garis tren, dan kedalaman order book. */
function Crypto() {
  const candles = [
    [40, 96, 30],
    [68, 78, 26],
    [96, 104, 34],
    [124, 62, 28],
    [152, 82, 22],
    [180, 50, 30],
    [208, 70, 24],
    [236, 38, 26],
  ]
  const depth = [
    [40, 22],
    [52, 34],
    [64, 28],
    [76, 48],
    [88, 42],
    [100, 62],
    [112, 54],
    [124, 78],
    [136, 68],
    [148, 92],
    [160, 82],
    [172, 104],
    [184, 96],
    [196, 118],
    [208, 108],
    [220, 130],
    [232, 120],
    [244, 142],
  ]
  return (
    <>
      <Frame />
      {/* Kedalaman pasar: area terisi di bawah garis tangga. */}
      <path
        d={`M40 200 ${depth.map(([x, y]) => `L${x} ${y}`).join(' ')} L244 200 Z`}
        fill={ACCENT_SOFT}
        stroke="none"
      />
      <path
        d={depth.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ')}
        fill="none"
        stroke="rgb(184 243 92 / 0.4)"
        strokeWidth="1"
      />
      {candles.map(([x, top, h], i) => (
        <g key={x}>
          <line x1={x + 8} y1={top - 12} x2={x + 8} y2={top + h + 12} stroke={LINE} strokeWidth="1.5" />
          <rect
            x={x}
            y={top}
            width="16"
            height={h}
            rx="1.5"
            fill={i % 3 === 2 ? FILL : ACCENT_FILL}
          />
        </g>
      ))}
      <path
        d="M48 112 L76 94 L104 118 L132 76 L160 96 L188 62 L216 84 L244 50"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="motif-dash"
        strokeDasharray="6 8"
      />
      <circle cx="244" cy="50" r="4" fill="#b8f35c" className="motif-pulse" />
    </>
  )
}

/** 02 — IoT: gelombang telemetri + simpul perangkat dan busur sinyal. */
function Iot() {
  const wave =
    'M0 110 H34 L44 110 L52 74 L62 146 L72 92 L82 110 H116 L126 110 L134 66 L144 150 L154 96 L164 110 H198 L208 110 L216 80 L226 138 L236 110 H270 L280 110 L288 88 L296 130 L304 110 H320'
  return (
    <>
      <Frame />
      <path d={wave} fill="none" stroke={ACCENT} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {[52, 134, 216, 288].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={110} r="3" fill="rgb(255 255 255 / 0.45)" />
          <circle
            cx={x}
            cy={110}
            r="11"
            fill="none"
            stroke="rgb(184 243 92 / 0.45)"
            className="motif-pulse"
            style={{ animationDelay: `${i * 0.45}s` }}
          />
        </g>
      ))}
      {/* Tiga perangkat terhubung ke simpul utama. */}
      <g stroke={LINE} strokeWidth="1" strokeDasharray="3 4">
        <line x1="134" y1="110" x2="134" y2="46" />
        <line x1="134" y1="110" x2="82" y2="168" />
        <line x1="134" y1="110" x2="186" y2="168" />
      </g>
      {[
        [134, 46],
        [82, 168],
        [186, 168],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x - 11} y={y - 8} width="22" height="16" rx="3" fill={FILL_SOFT} stroke={LINE} />
          <rect x={x - 5} y={y - 3} width="10" height="6" rx="1.5" fill="rgb(184 243 92 / 0.6)" />
        </g>
      ))}
      <circle cx="134" cy="110" r="5" fill="#b8f35c" />
    </>
  )
}

/** 03 — GIS: rute kurva, penanda lokasi, dan blok bangunan. */
function MapRoute() {
  return (
    <>
      <Frame />
      <path
        d="M44 156 C 88 156, 84 100, 132 100 S 194 138, 246 74"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2"
        strokeDasharray="7 7"
        strokeLinecap="round"
        className="motif-dash"
      />
      {[
        [44, 156],
        [132, 100],
        [246, 74],
      ].map(([cx, cy], i) => (
        <g key={cx}>
          <path
            d={`M${cx} ${cy - 24} a 8.5 8.5 0 1 1 0.01 0 z`}
            fill={i === 1 ? 'rgb(184 243 92 / 0.3)' : FILL}
            stroke={i === 1 ? ACCENT : 'rgb(255 255 255 / 0.35)'}
            strokeWidth="1"
          />
          <circle cx={cx} cy={cy - 24} r="3" fill={i === 1 ? '#b8f35c' : 'rgb(255 255 255 / 0.5)'} />
          <line x1={cx} y1={cy - 15} x2={cx} y2={cy} stroke="rgb(255 255 255 / 0.28)" />
        </g>
      ))}
      <g fill={FILL_SOFT} stroke={LINE} strokeWidth="1">
        <rect x="196" y="126" width="24" height="20" rx="2" />
        <rect x="228" y="146" width="26" height="22" rx="2" />
        <rect x="266" y="120" width="20" height="18" rx="2" />
        <rect x="76" y="126" width="18" height="16" rx="2" />
      </g>
    </>
  )
}

/** 04 — Reading platform: dua halaman, kolom teks, dan penanda progres baca. */
function Reader() {
  return (
    <>
      <Frame />
      <g>
        <rect x="46" y="30" width="108" height="140" rx="5" fill={FILL_SOFT} stroke={LINE} />
        <rect x="166" y="30" width="108" height="140" rx="5" fill={FILL_SOFT} stroke={LINE} />
        <line x1="160" y1="34" x2="160" y2="166" stroke={LINE} />
      </g>
      <g fill="rgb(255 255 255 / 0.22)">
        {[50, 62, 74, 86, 98, 110, 122].map((y) => (
          <rect key={`l${y}`} x="60" y={y} width={y % 36 === 2 ? 62 : 80} height="4" rx="2" />
        ))}
      </g>
      <g fill="rgb(255 255 255 / 0.16)">
        {[50, 62, 74, 86, 98].map((y) => (
          <rect key={`r${y}`} x="180" y={y} width={y % 24 === 2 ? 58 : 80} height="4" rx="2" />
        ))}
      </g>
      <rect x="180" y="112" width="80" height="52" rx="4" fill={ACCENT_SOFT} stroke="rgb(184 243 92 / 0.35)" />
      <rect x="60" y="140" width="46" height="10" rx="5" fill="rgb(184 243 92 / 0.55)" />
      {/* Bilah progres baca. */}
      <rect x="46" y="180" width="228" height="3" rx="1.5" fill="rgb(255 255 255 / 0.1)" />
      <rect x="46" y="180" width="128" height="3" rx="1.5" fill="#b8f35c" className="motif-pulse" />
    </>
  )
}

/** 05 — SIMRS: papan antrean pasien + status layanan. */
function Hospital() {
  const rows = [
    [40, 'rgb(184 243 92 / 0.55)'],
    [74, 'rgb(255 255 255 / 0.16)'],
    [108, 'rgb(255 255 255 / 0.16)'],
    [142, 'rgb(255 255 255 / 0.16)'],
  ]
  return (
    <>
      <Frame />
      {rows.map(([y, color], i) => (
        <g key={y}>
          <rect x="40" y={y} width="240" height="26" rx="4" fill={i === 0 ? ACCENT_SOFT : FILL_SOFT} stroke={i === 0 ? 'rgb(184 243 92 / 0.35)' : LINE} />
          <circle cx="58" cy={y + 13} r="6" fill="rgb(255 255 255 / 0.18)" />
          <rect x="72" y={y + 9} width="54" height="4" rx="2" fill="rgb(255 255 255 / 0.3)" />
          <rect x="72" y={y + 17} width="32" height="3" rx="1.5" fill="rgb(255 255 255 / 0.16)" />
          <rect x="196" y={y + 9} width="26" height="8" rx="4" fill={color} />
          <rect x="230" y={y + 9} width="38" height="8" rx="4" fill="rgb(255 255 255 / 0.1)" />
        </g>
      ))}
      {/* Garis waktu layanan di tepi kanan. */}
      <line x1="300" y1="40" x2="300" y2="168" stroke={LINE} strokeDasharray="3 4" />
      <circle cx="300" cy="53" r="4" fill="#b8f35c" className="motif-pulse" />
    </>
  )
}

/** 06 — ERP: matriks modul dengan keterkaitan antar modul. */
function ErpGrid() {
  const cells = []
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 4; c++) {
      cells.push([56 + c * 56, 52 + r * 44])
    }
  }
  return (
    <>
      <Frame />
      <g stroke="rgb(255 255 255 / 0.1)" strokeWidth="1">
        <line x1="84" y1="72" x2="140" y2="72" />
        <line x1="140" y1="72" x2="196" y2="72" />
        <line x1="140" y1="72" x2="140" y2="116" />
        <line x1="140" y1="116" x2="252" y2="116" />
        <line x1="196" y1="72" x2="196" y2="160" />
      </g>
      {cells.map(([x, y], i) => (
        <g key={`${x}-${y}`}>
          <rect
            x={x - 14}
            y={y - 11}
            width="28"
            height="22"
            rx="3"
            fill={i === 5 ? ACCENT_SOFT : FILL_SOFT}
            stroke={i === 5 ? 'rgb(184 243 92 / 0.5)' : LINE}
          />
          <rect x={x - 8} y={y - 3} width="16" height="3" rx="1.5" fill="rgb(255 255 255 / 0.28)" />
          <rect x={x - 8} y={y + 3} width="10" height="2.5" rx="1.25" fill="rgb(255 255 255 / 0.14)" />
        </g>
      ))}
      <circle cx="140" cy="116" r="4" fill="#b8f35c" className="motif-pulse" />
    </>
  )
}

/** 07 — POS: struk dengan barcode dan baris item. */
function Receipt() {
  return (
    <>
      <Frame />
      <g>
        <path
          d="M104 24 H216 V176 H104 Z"
          fill={FILL_SOFT}
          stroke={LINE}
        />
        {/* Tepi struk bergerigi di bawah. */}
        <path
          d="M104 176 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 l8 -8 l8 8 V176 Z"
          fill={FILL_SOFT}
          stroke={LINE}
          strokeWidth="1"
        />
        <rect x="120" y="38" width="60" height="5" rx="2.5" fill="rgb(255 255 255 / 0.32)" />
        {[56, 70, 84, 98].map((y, i) => (
          <g key={y}>
            <rect x="120" y={y} width={46 + i * 4} height="4" rx="2" fill="rgb(255 255 255 / 0.18)" />
            <rect x="186" y={y} width="14" height="4" rx="2" fill="rgb(255 255 255 / 0.26)" />
          </g>
        ))}
        <line x1="120" y1="116" x2="200" y2="116" stroke="rgb(255 255 255 / 0.2)" strokeDasharray="3 3" />
        <rect x="120" y="126" width="30" height="5" rx="2.5" fill={ACCENT} />
        <rect x="178" y="126" width="22" height="5" rx="2.5" fill="rgb(184 243 92 / 0.5)" />
        {/* Barcode. */}
        <g fill="rgb(255 255 255 / 0.5)">
          {[0, 5, 9, 15, 20, 26, 30, 37, 42, 48, 53, 59, 64, 70, 75].map((dx, i) => (
            <rect key={dx} x={120 + dx} y="148" width={i % 3 === 0 ? 2.5 : 1.5} height="18" />
          ))}
        </g>
      </g>
      {/* Pemindai: garis hijau yang menyapu barcode. */}
      <rect x="112" y="156" width="96" height="2" rx="1" fill="#b8f35c" className="motif-sweep" />
    </>
  )
}

/** 08 — AI video: linimasa klip vertikal + gelombang audio. */
function VideoTimeline() {
  const bars = [10, 18, 30, 22, 38, 16, 28, 34, 20, 12, 26, 32, 18, 24, 36, 14, 22, 30, 16, 26]
  return (
    <>
      <Frame />
      {/* Tiga klip vertikal hasil potongan. */}
      {[
        [52, ACCENT_FILL],
        [120, 'rgb(255 255 255 / 0.14)'],
        [188, 'rgb(255 255 255 / 0.1)'],
      ].map(([x, color], i) => (
        <g key={x}>
          <rect x={x} y="34" width="52" height="92" rx="4" fill={color} stroke={LINE} />
          <rect x={x + 8} y="44" width="36" height="3" rx="1.5" fill="rgb(255 255 255 / 0.3)" />
          <rect x={x + 8} y="112" width="22" height="3" rx="1.5" fill="rgb(255 255 255 / 0.22)" />
          {i === 0 && <circle cx={x + 26} cy="80" r="9" fill="rgb(10 12 16 / 0.6)" stroke="#b8f35c" strokeWidth="1.5" />}
          {i === 0 && <path d={`M${x + 23} 75 L${x + 32} 80 L${x + 23} 85 Z`} fill="#b8f35c" />}
        </g>
      ))}
      {/* Linimasa. */}
      <line x1="40" y1="142" x2="280" y2="142" stroke={LINE} />
      <rect x="52" y="140" width="52" height="4" rx="2" fill="rgb(184 243 92 / 0.5)" />
      <rect x="120" y="140" width="52" height="4" rx="2" fill="rgb(255 255 255 / 0.14)" />
      <rect x="188" y="140" width="52" height="4" rx="2" fill="rgb(255 255 255 / 0.1)" />
      <line x1="104" y1="132" x2="104" y2="152" stroke="#b8f35c" strokeWidth="2" className="motif-pulse" />
      {/* Gelombang audio. */}
      <g fill="rgb(255 255 255 / 0.2)">
        {bars.map((h, i) => (
          <rect key={i} x={52 + i * 11.4} y={178 - h / 2} width="4" height={h} rx="2" />
        ))}
      </g>
    </>
  )
}

/** 09 — Job tracker: papan kanban tiga kolom dengan kartu lamaran. */
function Kanban() {
  const cols = [
    { x: 40, cards: [42, 74, 106] },
    { x: 124, cards: [42, 74] },
    { x: 208, cards: [42, 74, 106, 138] },
  ]
  return (
    <>
      <Frame />
      {cols.map((col, ci) => (
        <g key={col.x}>
          <rect x={col.x} y="30" width="72" height="146" rx="5" fill={FILL_SOFT} stroke={LINE} />
          <rect x={col.x + 8} y="38" width="34" height="4" rx="2" fill="rgb(255 255 255 / 0.26)" />
          <circle cx={col.x + 60} cy="40" r="3" fill={ci === 2 ? '#b8f35c' : 'rgb(255 255 255 / 0.25)'} />
          {col.cards.map((y, i) => (
            <g key={y}>
              <rect
                x={col.x + 8}
                y={y}
                width="56"
                height="24"
                rx="3"
                fill={ci === 2 && i === 0 ? ACCENT_SOFT : 'rgb(255 255 255 / 0.07)'}
                stroke={ci === 2 && i === 0 ? 'rgb(184 243 92 / 0.4)' : LINE}
              />
              <rect x={col.x + 14} y={y + 7} width="30" height="3" rx="1.5" fill="rgb(255 255 255 / 0.28)" />
              <rect x={col.x + 14} y={y + 14} width="18" height="2.5" rx="1.25" fill="rgb(255 255 255 / 0.14)" />
            </g>
          ))}
        </g>
      ))}
    </>
  )
}

/** Urutan motif; dipakai sebagai cadangan bila slug belum dipetakan. */
const FALLBACK = [Crypto, Iot, MapRoute, Reader, Hospital, ErpGrid, Receipt, VideoTimeline, Kanban]

/** Peta slug → motif. Slug tak dikenal memakai urutan `index`. */
const BY_SLUG = {
  'crypto-market-dashboard': Crypto,
  'platform-dashboard-iot': Iot,
  'website-oleh-oleh-banyumas': MapRoute,
  'kirea-reading-platform': Reader,
  simrs: Hospital,
  'erp-medium': ErpGrid,
  'pos-web': Receipt,
  'clipper-ai': VideoTimeline,
  'job-tracker': Kanban,
}

/**
 * Komponen motif siap pakai: membungkus diagram dalam <svg> 320×200.
 * Semua motif menggambar geometri, jadi cukup satu bingkai bersama.
 */
export function MotifSvg({ children, className = '' }) {
  return (
    <svg
      viewBox="0 0 320 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={`h-full w-full ${className}`}
    >
      {children}
    </svg>
  )
}

/** Motif untuk sebuah proyek: cocokkan slug, jika tidak ada pakai urutan kartu. */
export function getMotif(project, index) {
  const Inner = BY_SLUG[project?.slug] ?? FALLBACK[index % FALLBACK.length]
  // Dibungkus sekali di sini agar tiap motif tidak perlu mengulang elemen <svg>.
  return function Motif() {
    return (
      <MotifSvg>
        <Inner />
      </MotifSvg>
    )
  }
}
