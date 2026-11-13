import { Fragment } from 'react'
import { MapPin } from 'lucide-react'
import { profile } from '../data/portfolio.js'
import OrbitGraphic from './OrbitGraphic.jsx'

/** Nama dipecah per kata agar bisa naik berurutan (lihat .word-rise). */
const nameWords = profile.name.split(' ')

/** Seksi pembuka: status, nama, dan value proposition. */
export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative pt-10 sm:pt-16">
      {/* Dua kolom mulai lg: teks di kiri, panggung visual di kanan. Sebelumnya seluruh
          dekorasi diposisikan absolut terhadap section sehingga menabrak teks di lebar
          tertentu; kini semuanya terkurung di dalam panggung berukuran sendiri. */}
      <div className="hero-parallax grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="space-y-8 lg:col-span-7">
          <div className="space-y-6">
            <div className="animate-enter flex flex-wrap items-center gap-x-4 gap-y-2" style={{ '--enter-delay': '120ms' }}>
              <p className="text-lg font-semibold uppercase tracking-[0.08em] text-accent sm:text-xl">{profile.role}</p>
              <span className="inline-flex items-center gap-1.5 text-[13px] text-muted">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {profile.location}
              </span>
            </div>
            <h1
              id="hero-title"
              className="flex max-w-[19ch] flex-wrap gap-x-[0.24em] gap-y-1 font-display text-[2.6rem] font-bold leading-[0.98] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.5rem] xl:text-[5.25rem]"
            >
              {nameWords.map((word, i) => (
                // Spasi tetap ditulis sebagai text node: flex mengabaikannya untuk tata letak,
                // tapi teks tetap utuh saat dibaca pembaca layar atau disalin.
                <Fragment key={`${word}-${i}`}>
                  <span className="word-rise" style={{ '--word-delay': `${180 + i * 90}ms` }}>
                    {word}
                  </span>
                  {i < nameWords.length - 1 ? ' ' : null}
                </Fragment>
              ))}
            </h1>
          </div>

          {/* max-w-2xl (42rem) → ukuran baris ~72ch pada 18px, masuk rentang baca 65–75ch. */}
          <div className="animate-enter border-t border-line pt-6" style={{ '--enter-delay': '520ms' }}>
            <p className="max-w-2xl text-base leading-relaxed text-pretty text-body sm:text-lg">
              {profile.summary}
            </p>
          </div>
        </div>

        {/* Panggung visual: kotak aspect-square, semua dekorasi menempati dirinya sendiri. */}
        <div aria-hidden="true" className="relative hidden lg:col-span-5 lg:block">
          <div className="relative mx-auto aspect-square w-full max-w-[22rem] xl:max-w-[26rem]">
            <span className="spin-ring absolute inset-0 opacity-70" />
            <OrbitGraphic className="absolute inset-[12%] h-[76%] w-[76%] opacity-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
