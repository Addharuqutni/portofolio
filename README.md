# Portofolio — Addharuqutni Azzyumardi Nawasharif

Website portofolio pribadi **Full Stack Developer**, dibangun dengan **React 19 + Vite + Tailwind CSS v4**.
Siap di-deploy gratis ke **Vercel**.

---

## ✨ Fitur

- Desain dark minimalis dengan tipografi presisi (Inter + JetBrains Mono)
- Konten sepenuhnya data-driven — ubah teks di satu tempat, UI ikut berubah
- Ikon teknologi resmi dari Devicon + Lucide React
- Tombol salin email dengan notifikasi toast (pakai Clipboard API + fallback)
- Responsif penuh: mobile, tablet, desktop
- Skor Lighthouse tinggi (tanpa framework CSS runtime, aset di-bundle)

---

## 🚀 Menjalankan Secara Lokal

Prasyarat: **Node.js 20+** dan npm.

```bash
npm install     # pasang dependensi
npm run dev     # jalankan dev server → http://localhost:5173
npm run build   # build produksi ke folder dist/
npm run preview # pratinjau hasil build produksi
```

---

## ☁️ Deploy ke Vercel (Gratis)

### Opsi A — Lewat Dashboard (paling mudah)

1. Push proyek ini ke repository GitHub:

   ```bash
   git add .
   git commit -m "feat: portfolio React + Vite"
   git branch -M main
   git remote add origin https://github.com/Addharuqutni/portfolio.git
   git push -u origin main
   ```

2. Buka [vercel.com/new](https://vercel.com/new) → login dengan GitHub.
3. **Import** repository `portfolio`.
4. Vercel mendeteksi Vite otomatis. Pastikan nilainya:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Klik **Deploy**. Situs akan live di `https://<nama-proyek>.vercel.app`.
6. Setiap `git push` ke `main` otomatis ter-deploy ulang.

### Opsi B — Lewat CLI

```bash
npm i -g vercel
vercel          # deploy preview
vercel --prod   # deploy produksi
```

> File `vercel.json` sudah disertakan, jadi konfigurasi build terisi otomatis.

### Custom Domain

Dashboard Vercel → project → **Settings → Domains** → tambahkan domain Anda,
lalu arahkan DNS sesuai instruksi (biasanya `CNAME → cname.vercel-dns.com`).

---

## 📁 Struktur Proyek

```
portfolio/
├── index.html              # HTML entry (meta, fonts, Devicon CDN)
├── vercel.json             # Konfigurasi deploy Vercel
├── vite.config.js          # Plugin React + Tailwind
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # Bootstrap React
    ├── App.jsx             # Susunan seksi halaman
    ├── index.css           # Tailwind v4 + tema & scrollbar kustom
    ├── data/
    │   └── portfolio.js    # ⭐ SEMUA KONTEN DI SINI
    ├── hooks/
    │   ├── useClipboard.js # Salin ke clipboard + fallback
    │   ├── useToast.js     # State notifikasi toast
    │   └── useScrollEffects.js # Seksi aktif + scroll reveal
    ├── context/
    │   └── ToastContext.jsx
    └── components/
        ├── Header.jsx      # Navigasi sticky + indikator seksi aktif + skip link
        ├── Hero.jsx        # Seksi pembuka + aksi cepat
        ├── Skills.jsx      # 02. Keahlian teknis
        ├── Experience.jsx  # 03. Pengalaman kerja (timeline)
        ├── Projects.jsx    # 01. Proyek pilihan
        ├── Education.jsx   # 04. Pendidikan & sertifikasi
        ├── Contact.jsx     # 05. Kontak
        ├── Footer.jsx
        ├── SectionHeading.jsx
        ├── TechIcon.jsx    # Render ikon Devicon / Lucide
        └── Toast.jsx
```

---

## ✏️ Cara Mengubah Konten

Semua teks, tautan, pengalaman, dan proyek berada di **`src/data/portfolio.js`**.
Contoh mengganti email dan menambah proyek:

```js
export const profile = {
  // ...
  email: 'email-baru@example.com',
  github: 'https://github.com/username',
}

export const projects = [
  // ...
  {
    title: 'Nama Proyek Baru',
    stack: 'React • Node.js • PostgreSQL',
    badge: 'Web App',
    description: 'Deskripsi singkat proyek.',
    tags: ['REST API', 'Auth', 'Realtime'],
  },
]
```

Untuk menambah seksi baru: buat komponen di `src/components/`, lalu daftarkan di `src/App.jsx`.

---

## 🛠️ Teknologi

| Bagian      | Stack                                     |
| ----------- | ----------------------------------------- |
| UI          | React 19, Lucide React                    |
| Build Tool  | Vite 8                                    |
| Styling     | Tailwind CSS v4 (`@tailwindcss/vite`)     |
| Ikon Teknis | Devicon (CDN)                             |
| Font        | Inter & JetBrains Mono (Google Fonts)     |
| Hosting     | Vercel (static site, gratis)              |

---

## 📄 Lisensi

© 2026 Addharuqutni Azzyumardi Nawasharif. Banyumas, Jawa Tengah.
