import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import vocabulary from '../data/vocabulary.json'
import VocabCard from '../components/VocabCard'
import VocabModal from '../components/VocabModal'
import { FiArrowLeft } from 'react-icons/fi'

export default function Lesson() {
  const { lesson_no } = useParams()
  const [activeWord, setActiveWord] = useState(null)

  const words = vocabulary.filter((w) => String(w.lesson_no) === String(lesson_no))

  useEffect(() => {
    document.title = `Kotoba | Lesson ${lesson_no}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [lesson_no])

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="text-center">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-shu">Lesson {lesson_no}</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ai">Vocabulary for Lesson {lesson_no}</h1>
        <p className="mx-auto mt-3 max-w-xl text-sumi/60">
          Tap a word to hear it spoken, or press "When to Say" for context and an example sentence.
        </p>
      </div>

      {words.length === 0 ? (
        <p className="mt-16 text-center text-sumi/60">No vocabulary found for this lesson yet.</p>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {words.map((item) => (
            <VocabCard key={item.id} item={item} onWhenToSay={setActiveWord} />
          ))}
        </div>
      )}

      <div className="mt-14 text-center">
        <Link
          to="/lets-learn"
          className="inline-flex items-center gap-2 rounded-full border border-ai/20 px-6 py-3 font-semibold text-ai transition hover:bg-ai hover:text-washi"
        >
          <FiArrowLeft /> Back to Lessons
        </Link>
      </div>

      <VocabModal item={activeWord} onClose={() => setActiveWord(null)} />
    </div>
  )
}
