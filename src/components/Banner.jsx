import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    kanji: '学',
    reading: 'manabu — to learn',
    title: 'Learn Japanese, one word at a time',
    text: 'Bite-sized lessons built around real vocabulary, real pronunciation, and real usage.',
    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1600&auto=format&fit=crop',
  },
  {
    kanji: '話',
    reading: 'hanasu — to speak',
    title: 'Hear every word, out loud',
    text: 'Tap any card to listen to native pronunciation and train your ear from lesson one.',
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    kanji: '道',
    reading: 'michi — the path',
    title: 'A clear path through 100+ lessons',
    text: 'From first greetings to nature and etiquette — structured lessons that build on each other.',
    img: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Banner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500)
    return () => clearInterval(t)
  }, [])

  const slide = slides[index]

  return (
    <section className="relative overflow-hidden bg-sumi">
      <div className="absolute inset-0">
        <img
          src={slide.img}
          alt=""
          className="h-full w-full object-cover opacity-30 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sumi via-sumi/70 to-sumi/40" />
      </div>

      <div className="relative mx-auto flex min-h-[560px] max-w-6xl flex-col items-center justify-center px-5 py-24 text-center text-washi">
        <span className="font-jp text-7xl font-bold text-gold md:text-8xl" aria-hidden="true">{slide.kanji}</span>
        <p className="mt-2 font-display text-sm uppercase tracking-[0.3em] text-washi/60">{slide.reading}</p>
        <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
          {slide.title}
        </h1>
        <p className="mt-5 max-w-xl text-washi/70">{slide.text}</p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link to="/lets-learn" className="rounded-full bg-shu px-8 py-3 font-semibold tracking-wide text-washi transition hover:bg-shuDark">
            Start Learning
          </Link>
          <Link to="/about-us" className="rounded-full border border-washi/30 px-8 py-3 font-semibold tracking-wide text-washi transition hover:border-gold hover:text-gold">
            Learn More
          </Link>
        </div>

        <div className="mt-10 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-gold' : 'w-2 bg-washi/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
