# Gambar pratinjau proyek

Taruh gambar di folder ini, lalu jalankan `npm run dev` atau `npm run build`.
Tidak ada kode yang perlu diubah: gambar terdeteksi otomatis berdasarkan nama file.

## Nama file yang dikenali

| Proyek | Nama file |
|---|---|
| Crypto Market Dashboard | `crypto-market-dashboard.<ext>` |
| Platform Dashboard IoT | `platform-dashboard-iot.<ext>` |
| Website Oleh-Oleh Khas Banyumas | `website-oleh-oleh-banyumas.<ext>` |
| KIREA Reading Platform UI/UX | `kirea-reading-platform.<ext>` |
| SIMRS — Sistem Informasi Rumah Sakit | `simrs.<ext>` |
| ERP Medium | `erp-medium.<ext>` |
| POS-Web — Aplikasi Kasir | `pos-web.<ext>` |
| ClipperAI | `clipper-ai.<ext>` |
| Gudang Internal System | `gudang-internal.<ext>` |
| Job Scraper & Application Tracker | `job-tracker.<ext>` |
| Crypto AI Agent | `crypto-ai-agent.<ext>` |

Nama file dicocokkan dengan `slug` milik proyek di `src/data/portfolio.js` (huruf kecil,
tanpa peduli besar-kecil saat pencocokan). Ubah `slug` bila ingin nama file lain.

## Format

Ekstensi yang didukung: `avif`, `webp`, `png`, `jpg`, `jpeg`.
Bila ada beberapa format dengan slug sama, yang dipakai adalah yang paling efisien
(urutan prioritas: avif, webp, png, jpg, jpeg).

## Ukuran yang disarankan

- Rasio 16:10 (mis. 1280x800, 1600x1000).
- Lebar 1280px sudah cukup; kartu menampilkan maksimal sekitar 560px.
- Format WebP atau AVIF, target di bawah 200KB per gambar.
- Tangkapan layar dengan latar gelap paling menyatu dengan tema situs.

## Bila gambar belum ada

Motif SVG bawaan dipakai sebagai isi sementara, jadi kartu tidak pernah tampil kosong
atau menampilkan gambar rusak. Motif itu juga otomatis dipakai bila file gagal dimuat.
