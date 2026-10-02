/**
 * Sumber tunggal konten portofolio.
 * Ubah data di sini tanpa perlu menyentuh komponen UI.
 */

export const profile = {
  name: 'Addharuqutni Azzyumardi Nawasharif',
  shortName: 'addharuqutni',
  role: 'Full Stack Developer',
  location: 'Banyumas, ID',
  availability: 'Tersedia untuk Pekerjaan / Kontrak',
  headline: {
    lead: 'Full Stack Developer berfokus pada',
    highlight: 'sistem web performa tinggi',
    tail: ', arsitektur data real-time, dan implementasi antarmuka yang presisi.',
  },
  summary:
    'Lulusan S1 Teknik Informatika Universitas Telkom Purwokerto (IPK 3.81). Berpengalaman merancang REST API, pipeline streaming WebSocket latensi rendah, basis data relasional (PostgreSQL & MySQL), serta aplikasi web reaktif modern berbasis Next.js dan TypeScript.',
  email: 'addharuqutni@gmail.com',
  whatsapp: 'https://wa.me/6282134647990',
  github: 'https://github.com/Addharuqutni',
}

export const navLinks = [
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Pendidikan', href: '#pendidikan' },
  { label: 'Pengalaman', href: '#pengalaman' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Sertifikasi', href: '#sertifikasi' },
  { label: 'Kontak', href: '#kontak' },
]

/**
 * Ikon teknologi: `devicon` memakai SVG Devicon self-host di /public/icons,
 * `lucide` memakai nama ikon lucide-react.
 */
export const skillGroups = [
  {
    title: 'Frontend Engineering',
    meta: 'Client Side',
    skills: [
      { label: 'Next.js', icon: { type: 'devicon', name: 'nextjs-plain', invert: true } },
      { label: 'React', icon: { type: 'devicon', name: 'react-original' } },
      { label: 'TypeScript', icon: { type: 'devicon', name: 'typescript-plain' } },
      { label: 'Tailwind CSS', icon: { type: 'devicon', name: 'tailwindcss-original' } },
      { label: 'JavaScript', icon: { type: 'devicon', name: 'javascript-plain' } },
    ],
  },
  {
    title: 'Backend & Networking',
    meta: 'APIs & Services',
    skills: [
      { label: 'Node.js', icon: { type: 'devicon', name: 'nodejs-plain' } },
      { label: 'WebSocket', icon: { type: 'lucide', name: 'Radio', className: 'w-3.5 h-3.5 text-emerald-400' } },
      { label: 'REST API', icon: { type: 'lucide', name: 'Network', className: 'w-3.5 h-3.5 text-sky-400' } },
      { label: 'Laravel', icon: { type: 'devicon', name: 'laravel-original' } },
    ],
  },
  {
    title: 'Basis Data & ORM',
    meta: 'Persistence',
    skills: [
      { label: 'PostgreSQL', icon: { type: 'devicon', name: 'postgresql-plain' } },
      { label: 'MySQL', icon: { type: 'devicon', name: 'mysql-original' } },
      { label: 'Drizzle ORM', icon: { type: 'lucide', name: 'Database', className: 'w-3.5 h-3.5 text-amber-400' } },
    ],
  },
  {
    title: 'Tools & Lainnya',
    meta: 'Workflow & Design',
    skills: [
      { label: 'Docker', icon: { type: 'devicon', name: 'docker-plain' } },
      { label: 'Git', icon: { type: 'devicon', name: 'git-plain' } },
      { label: 'Figma', icon: { type: 'devicon', name: 'figma-original' } },
      { label: 'Python', icon: { type: 'devicon', name: 'python-plain' } },
      { label: 'Java', icon: { type: 'devicon', name: 'java-plain' } },
    ],
  },
]

export const experiences = [
  {
    role: 'UI/UX Designer — MSIB Kampus Merdeka',
    company: 'SKILVUL (PT. Impactbyte Teknologi Edukasi)',
    period: 'Agu 2023 — Des 2023',
    highlights: [
      'Mendesain user flow, wireframe, high-fidelity UI, dan prototype interaktif di Figma untuk aplikasi web & mobile.',
      'Menerapkan metodologi Design Thinking: identifikasi masalah pengguna, perumusan solusi, prototyping, hingga validasi.',
      'Menerjemahkan desain ke arsitektur component-based frontend untuk mempercepat implementasi tim engineer.',
    ],
  },
  {
    role: 'Web Developer — Magang',
    company: 'ID METAFORA',
    period: 'Des 2018 — Mar 2019',
    highlights: [
      'Mengembangkan website dinamis menggunakan arsitektur MVC berbasis CodeIgniter & Bootstrap.',
      'Merancang antarmuka e-commerce untuk mengoptimalkan navigasi dan kemudahan pengalaman bertransaksi pengguna.',
      'Mengelola proses data scraping dan restrukturisasi data untuk kebutuhan analisis bisnis internal.',
    ],
  },
]

export const projects = [
  {
    title: 'Crypto Market Dashboard',
    stack: 'Next.js • TypeScript • Tailwind • Zustand',
    badge: 'Real-Time',
    description:
      'Platform analitik pasar kripto dengan pembaruan latensi rendah. Mengintegrasikan streaming WebSocket Binance Futures untuk live order book depth dan candlestick interaktif. Dilengkapi watchlist, kalkulasi indikator teknikal otomatis, serta bot alert Telegram.',
    tags: ['WebSocket Streaming', 'Orderbook Depth', 'Telegram Bot'],
  },
  {
    title: 'Platform Dashboard IoT',
    stack: 'Laravel • MySQL • JavaScript • REST API',
    badge: 'Monitoring',
    description:
      'Sistem monitoring terpusat untuk mikrokontroler. Menyediakan endpoint REST API terenkripsi untuk mengumpulkan telemetri sensor secara kontinu, visualisasi grafik heartbeat status perangkat, serta sistem peringatan ambang batas otomatis.',
    tags: ['REST API Ingestion', 'Heartbeat Check', 'Automated Alert'],
  },
  {
    title: 'Website Oleh-Oleh Khas Banyumas',
    stack: 'Laravel • MySQL • Leaflet.js • Bootstrap',
    badge: 'GIS & E-Commerce',
    description:
      'Platform katalog UMKM dan e-commerce daerah yang mengintegrasikan pemetaan lokasi toko interaktif via Leaflet.js dan OpenStreetMap. Dikembangkan dengan metodologi Agile Scrum sprint dua mingguan.',
    tags: ['Leaflet.js Map', 'Store Locator', 'Agile Scrum'],
  },
  {
    title: 'KIREA Reading Platform UI/UX',
    stack: 'Figma • Design Thinking • Prototyping',
    badge: 'Case Study',
    description:
      'Eksplorasi antarmuka untuk platform baca digital berbasis web. Menerapkan tahapan Design Thinking untuk memecahkan kenyamanan membaca pengguna di perangkat digital serta penyusunan design system komponen berulang.',
    tags: ['Design System', 'Information Architecture', 'Interactive Flow'],
  },
]

export const education = [
  {
    period: '2021 — 2025',
    level: 'S1',
    highlight: 'IPK 3.81',
    title: 'Teknik Informatika',
    institution: 'Universitas Telkom Purwokerto',
    detail:
      'Pengembangan Perangkat Lunak, Pemrosesan Data, Keamanan Informasi, Jaringan Komputer, & Kecerdasan Buatan.',
  },
  {
    period: '2017 — 2020',
    level: 'SMK',
    title: 'Rekayasa Perangkat Lunak',
    institution: 'SMK Telkom Purwokerto',
    detail:
      'Pemrograman Berorientasi Objek (PBO), Basis Data, Web & Mobile, IoT, dan Komunikasi Digital.',
  },
]

export const certifications = [
  {
    title: 'Junior Web Developer',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    type: 'Sertifikasi Resmi',
    scope: 'Nasional',
    tone: 'emerald',
    detail:
      'Standar kompetensi pemrograman web terstruktur, implementasi logika backend, dan arsitektur basis data.',
  },
  {
    title: 'UI/UX Design',
    issuer: 'PT. Impactbyte Teknologi Edukasi (Skilvul)',
    type: 'MSIB Bersertifikat',
    scope: 'Industri',
    tone: 'sky',
    detail:
      'Penerapan Design Thinking, riset audiens, wireframing, high-fidelity UI, serta pengujian prototipe terstruktur.',
  },
]
