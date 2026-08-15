import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import LessonCard from '../components/LessonCard'
import useAuth from '../hooks/useAuth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const lessonTitles = [
  'Greetings', 'Numbers', 'Family', 'Food & Drink', 'Time & Days',
  'Travel', 'Everyday Verbs', 'Feelings', 'Shopping', 'Closing Phrases',
]

export default function LetsLearn() {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Kotoba | Let\u2019s Learn'
  }, [])

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
          Ten themed lessons, six words each. Log in and tap a card to start collecting vocabulary.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
        {lessonTitles.map((title, i) => (
          <LessonCard key={i + 1} number={i + 1} title={title} />
        ))}
      </div>

      <div className="mt-20 rounded-[2rem] bg-sumi p-8 text-washi md:p-12">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Tutorial</p>
        <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">Learn the Japanese Alphabet (Hiragana)</h2>
        <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/w7uJ5-fSJKg"
            title="Learn Hiragana - Japanese Alphabet"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
