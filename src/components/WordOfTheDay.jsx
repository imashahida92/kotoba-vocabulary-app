import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FiVolume2 } from 'react-icons/fi'
import vocabulary from '../data/vocabulary.json'

export default function WordOfTheDay() {
  const word = useMemo(() => {
    const dayIndex = new Date().getDate() % vocabulary.length
    return vocabulary[dayIndex]
  }, [])

  const speak = () => {
    if (!('speechSynthesis' in window)) return
    const utter = new SpeechSynthesisUtterance(word.word)
    utter.lang = 'ja-JP'
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utter)
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-20" data-aos="fade-up">
      <p className="text-center font-display text-sm uppercase tracking-[0.3em] text-shu">Today's Word</p>
      <h2 className="mt-2 text-center font-display text-3xl font-bold text-ai">Word of the Day</h2>

      <div className="mx-auto mt-10 flex max-w-xl flex-col items-center rounded-[2rem] border border-gold/30 bg-white/70 p-10 text-center shadow-lg">
        <button
          onClick={speak}
          className="hanko h-24 w-24 border-4 text-4xl transition hover:scale-105"
          aria-label={`Pronounce ${word.word}`}
        >
          {word.word}
        </button>
        <p className="mt-5 font-display text-xl text-ai">{word.pronunciation}</p>
        <p className="mt-1 text-sumi/60">{word.meaning} · <span className="italic">{word.part_of_speech}</span></p>
        <button onClick={speak} className="mt-5 flex items-center gap-2 rounded-full border border-ai/20 px-5 py-2 text-sm font-medium text-ai transition hover:bg-ai hover:text-washi">
          <FiVolume2 /> Listen
        </button>
        <Link to={`/lessons/${word.lesson_no}`} className="mt-4 text-sm font-semibold text-shu hover:underline">
          Find it in Lesson {word.lesson_no} →
        </Link>
      </div>
    </section>
  )
}
