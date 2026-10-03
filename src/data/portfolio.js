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

/** Route halaman. Dipakai Header, Projects, dan App. */
export const routes = {
  home: '/',
  projects: '/proyek',
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

/**
 * Visual kartu proyek (lihat src/components/ProjectVisual.jsx):
 * - `slug`  → nama file gambar di src/assets/covers/, mis. 'crypto-market-dashboard.webp'.
 *             Cukup taruh filenya; tidak perlu mengubah baris ini.
 * - `cover` → path eksplisit di /public atau URL eksternal. Menang atas `slug`.
 *             Proyek dengan screenshot di README repo memakai URL raw.githubusercontent.com.
 * Bila keduanya kosong atau gambarnya gagal dimuat, motif SVG bawaan yang dipakai.
 *
 * - `featured` → true = tampil di seksi Proyek beranda. Semua proyek tampil di /proyek.
 * - `repo` / `demo` → tautan kode sumber dan situs live; null bila tidak ada.
 */
export const projects = [
  {
    title: 'Crypto Market Dashboard',
    stack: 'Next.js • TypeScript • Tailwind • Zustand',
    badge: 'Real-Time',
    slug: 'crypto-market-dashboard',
    cover: null,
    featured: true,
    repo: 'https://github.com/Addharuqutni/crypto-dashboard',
    demo: null, // ponytail: URL Vercel 404 saat dicek 2026-10-03; isi lagi bila deploy hidup
    description:
      'Platform analitik pasar kripto dengan pembaruan latensi rendah. Mengintegrasikan streaming WebSocket Binance Futures untuk live order book depth dan candlestick interaktif. Dilengkapi watchlist, kalkulasi indikator teknikal otomatis, serta bot alert Telegram.',
    tags: ['WebSocket Streaming', 'Orderbook Depth', 'Telegram Bot'],
  },
  {
    title: 'Platform Dashboard IoT',
    stack: 'Laravel • MySQL • JavaScript • REST API',
    badge: 'Monitoring',
    slug: 'platform-dashboard-iot',
    cover: null,
    featured: true,
    repo: 'https://github.com/Addharuqutni/iot-dashboard',
    demo: null,
    description:
      'Sistem monitoring terpusat untuk mikrokontroler. Menyediakan endpoint REST API terenkripsi untuk mengumpulkan telemetri sensor secara kontinu, visualisasi grafik heartbeat status perangkat, serta sistem peringatan ambang batas otomatis.',
    tags: ['REST API Ingestion', 'Heartbeat Check', 'Automated Alert'],
  },
  {
    title: 'Website Oleh-Oleh Khas Banyumas',
    stack: 'Laravel • MySQL • Leaflet.js • Bootstrap',
    badge: 'GIS & E-Commerce',
    slug: 'website-oleh-oleh-banyumas',
    cover: null,
    featured: true,
    repo: 'https://github.com/Addharuqutni/oleh2banyumas',
    demo: null, // ponytail: domain tidak bisa di-resolve saat dicek 2026-10-03
    description:
      'Platform katalog UMKM dan e-commerce daerah yang mengintegrasikan pemetaan lokasi toko interaktif via Leaflet.js dan OpenStreetMap. Dikembangkan dengan metodologi Agile Scrum sprint dua mingguan.',
    tags: ['Leaflet.js Map', 'Store Locator', 'Agile Scrum'],
  },
  {
    title: 'KIREA Reading Platform UI/UX',
    stack: 'Figma • Design Thinking • Prototyping',
    badge: 'Case Study',
    slug: 'kirea-reading-platform',
    cover: null,
    featured: true,
    repo: null,
    demo: null,
    description:
      'Eksplorasi antarmuka untuk platform baca digital berbasis web. Menerapkan tahapan Design Thinking untuk memecahkan kenyamanan membaca pengguna di perangkat digital serta penyusunan design system komponen berulang.',
    tags: ['Design System', 'Information Architecture', 'Interactive Flow'],
  },
  {
    title: 'SIMRS — Sistem Informasi Rumah Sakit',
    stack: 'React 19 • TypeScript • Express • PostgreSQL',
    badge: 'Healthcare',
    slug: 'simrs',
    cover: 'https://raw.githubusercontent.com/Addharuqutni/SIMRS_D/main/docs/screenshots/02-dashboard.png',
    featured: false,
    repo: 'https://github.com/Addharuqutni/SIMRS_D',
    demo: null,
    description:
      'Sistem informasi manajemen rumah sakit full-stack TypeScript: pendaftaran dan antrean, rawat jalan, IGD, rawat inap, rekam medis elektronik, laboratorium, radiologi, farmasi, hingga keuangan. Logika bisnis dipisah per modul domain, termasuk integrasi VClaim BPJS untuk penerbitan SEP dan klaim, serta penagihan yang dicatat tepat saat layanan diberikan.',
    tags: ['Rekam Medis Elektronik', 'Integrasi VClaim BPJS', 'Stok Farmasi FEFO'],
  },
  {
    title: 'ERP Medium',
    stack: 'Laravel 13 • Inertia.js • Vue 3 • TypeScript',
    badge: 'Enterprise',
    slug: 'erp-medium',
    cover: 'https://raw.githubusercontent.com/Addharuqutni/erp_medium/main/docs/screenshots/dashboard.png',
    featured: false,
    repo: 'https://github.com/Addharuqutni/erp_medium',
    demo: null,
    description:
      'ERP modular monolith untuk bisnis skala menengah: master data, inventori, pembelian, penjualan, akuntansi, HR & payroll, CRM, manufaktur, hingga BI. Modul diaktifkan bertahap sesuai kebutuhan, dengan RBAC granular, workflow approval, audit trail, serta dukungan multi-perusahaan, multi-cabang, dan multi-mata uang.',
    tags: ['Modular Monolith', 'RBAC & Audit Trail', 'Multi-Company'],
  },
  {
    title: 'POS-Web — Aplikasi Kasir',
    stack: 'React 19 • Fastify • Drizzle ORM • PostgreSQL',
    badge: 'Retail',
    slug: 'pos-web',
    cover: 'https://raw.githubusercontent.com/Addharuqutni/pos_small/main/docs/screenshots/cashier-pos.png',
    featured: false,
    repo: 'https://github.com/Addharuqutni/pos_small',
    demo: null,
    description:
      'Aplikasi kasir (Point-of-Sale) berbasis web untuk toko ritel dengan peran kasir, admin, dan owner. Mendukung pemindai barcode kamera, promo, pembayaran tunai/QRIS/transfer, buka-tutup shift dengan rekonsiliasi kas, struk termal, serta laporan penjualan dan laba yang dapat diekspor ke CSV dan PDF.',
    tags: ['Barcode Scanner', 'Rekonsiliasi Shift', 'Laporan CSV/PDF'],
  },
  {
    title: 'ClipperAI',
    stack: 'Next.js • FastAPI • faster-whisper • MediaPipe',
    badge: 'AI Video',
    slug: 'clipper-ai',
    cover: 'https://raw.githubusercontent.com/Addharuqutni/clipper/main/docs/assets/screenshots/dashboard.webp',
    featured: false,
    repo: 'https://github.com/Addharuqutni/clipper',
    demo: null,
    description:
      'Mengubah video panjang dari YouTube atau berkas lokal menjadi klip vertikal 9:16 dengan subtitle karaoke. AI memilih momen terbaik dari transkrip, wajah pembicara dijaga di tengah bingkai, dan seluruh proses berjalan lokal di Windows dengan dukungan berbagai penyedia AI (BYOK).',
    tags: ['Transkripsi Lokal', 'Pemilihan Momen AI', 'Auto-Reframe 9:16'],
  },
  {
    title: 'Gudang Internal System',
    stack: 'React • NestJS • Drizzle ORM • PostgreSQL',
    badge: 'Operasional',
    slug: 'gudang-internal',
    cover: null,
    featured: false,
    repo: 'https://github.com/Addharuqutni/operasional-gudang',
    demo: null,
    description:
      'Sistem operasional gudang berbasis peran (super admin, produksi, gudang, distribusi). Dilengkapi dokumentasi API OpenAPI/Swagger, tracing request-id, guard RBAC, rate limiting, serta skrip pentest dasar sebagai quality gate keamanan.',
    tags: ['RBAC Multi-Peran', 'OpenAPI/Swagger', 'Security Pentest'],
  },
  {
    title: 'Job Scraper & Application Tracker',
    stack: 'React • Express • TypeScript • Puppeteer',
    badge: 'Automation',
    slug: 'job-tracker',
    cover: 'https://raw.githubusercontent.com/Addharuqutni/jobs-tracker/main/docs/image/qa-dashboard-desktop.png',
    featured: false,
    repo: 'https://github.com/Addharuqutni/jobs-tracker',
    demo: null,
    description:
      'Otomatisasi pencarian lowongan dari lima portal (JobStreet, LinkedIn, Kalibrr, Glints, Dealls) ke satu dasbor, ditambah pelacak lamaran berbentuk Kanban. Scraper Cheerio dengan fallback Puppeteer, deduplikasi tiga lapis hingga fuzzy match, penjadwalan otomatis, dan analitik lamaran.',
    tags: ['Multi-Source Scraper', 'Fuzzy Deduplication', 'Kanban Tracker'],
  },
  {
    title: 'Crypto AI Agent',
    stack: 'Python • ccxt • WebSocket • Telegram Bot',
    badge: 'Trading Agent',
    slug: 'crypto-ai-agent',
    cover: null,
    featured: false,
    repo: 'https://github.com/Addharuqutni/crypto-ai-agent',
    demo: null,
    description:
      'Agent Python yang memantau harga kripto dan menyusun analisis teknikal otomatis: EMA, RSI, MACD, ATR, ADX, Fibonacci, hingga struktur pasar seperti support/resistance dan liquidity sweep. Memindai pair bervolume tertinggi, mendeteksi sinyal, menyusun rencana risiko, dan mengirim alert Telegram.',
    tags: ['Analisis Teknikal', 'Market Structure', 'Alert Telegram'],
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
