import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import LessonCard from '../components/LessonCard'
import ProgressBar from '../components/ProgressBar'
import VideoEmbed from '../components/VideoEmbed'
import useAuth from '../hooks/useAuth'
import useProgress from '../hooks/useProgress'
import lessonsMeta from '../data/lessonsMeta.json'
import vocabulary from '../data/vocabulary.json'

export default function LetsLearn() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const { isCompleted, completedCount } = useProgress()

  useEffect(() => {
    document.title = 'Kotoba | Let\u2019s Learn'
  }, [])

  const grouped = useMemo(() => {
    const map = new Map()
    for (const lesson of lessonsMeta) {
      if (!map.has(lesson.category)) map.set(lesson.category, [])
      map.get(lesson.category).push(lesson)
    }
    return Array.from(map.entries())
  }, [])

  // words per lesson, for computing each lesson card's completion badge
  const wordsByLesson = useMemo(() => {
    const map = new Map()
    for (const w of vocabulary) {
      if (!map.has(w.lesson_no)) map.set(w.lesson_no, [])
      map.get(w.lesson_no).push(w)
    }
    return map
  }, [])

  const lessonPercent = (lessonNo) => {
    const words = wordsByLesson.get(lessonNo) || []
    if (words.length === 0) return 0
    const done = words.filter((w) => isCompleted(w.id)).length
    return Math.round((done / words.length) * 100)
  }

  const overallPercent = vocabulary.length
    ? Math.round((completedCount / vocabulary.length) * 100)
    : 0

  const handleViewMore = () => {
    if (user) {
      navigate('/tutorials')
    } else {
      toast.info('Please log in to view all tutorials.')
      navigate('/login', { state: { from: { pathname: '/tutorials' } } })
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="text-center">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-shu">Let's Learn</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ai">Choose a Lesson</h1>
        <p className="mx-auto mt-4 max-w-xl text-sumi/60">
          {lessonsMeta.length} lessons across {grouped.length} themes — from first greetings all the way
          to polite expressions. Log in and tap a card to start collecting vocabulary.
        </p>
      </div>

      {user && (
        <div className="mx-auto mt-8 max-w-md">
          <ProgressBar
            percent={overallPercent}
            label={`Overall progress — ${completedCount} / ${vocabulary.length} words learned`}
          />
        </div>
      )}

      <div className="mt-14 space-y-14">
        {grouped.map(([category, lessons]) => (
          <section key={category}>
            <div className="mb-5 flex items-center gap-4">
              <h2 className="font-display text-xl font-bold text-ai">{category}</h2>
              <span className="h-px flex-1 bg-ai/10" />
              <span className="text-xs uppercase tracking-widest text-sumi/40">
                {lessons.length} lesson{lessons.length > 1 ? 's' : ''}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {lessons.map((lesson) => (
                <LessonCard
                  key={lesson.lesson_no}
                  number={lesson.lesson_no}
                  title={lesson.title}
                  percent={user ? lessonPercent(lesson.lesson_no) : undefined}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-20 rounded-[2rem] bg-sumi p-8 text-washi md:p-12">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Tutorial</p>
        <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">Learn the Japanese Alphabet (Hiragana)</h2>
        <div className="mt-6 overflow-hidden rounded-2xl">
          <VideoEmbed id="pZ7tnNNfZro" title="Learn Hiragana - Japanese Alphabet" />
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={handleViewMore}
            className="rounded-full bg-shu px-8 py-3 font-semibold tracking-wide text-washi transition hover:bg-shuDark"
          >
            View More Tutorials
          </button>
        </div>
      </div>
    </div>
  )
}
