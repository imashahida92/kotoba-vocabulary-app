import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const videos = [
  { id: 'w7uJ5-fSJKg', title: 'Hiragana in 1 Hour' },
  { id: 'V6oXo0jqcy4', title: 'Learn Katakana Fast' },
  { id: '8QjkCT3ZOJ8', title: 'Basic Japanese Greetings' },
  { id: '5RTgHVeM6Sc', title: 'Japanese Numbers 1-100' },
  { id: 'IIxvQNBNoyE', title: 'Essential Japanese Phrases' },
  { id: 'nrsyayZjA3g', title: 'Japanese Grammar Basics' },
  { id: '3wt8-8fzKtY', title: 'Common Japanese Verbs' },
  { id: '5v2ZEuXtCsA', title: 'Everyday Conversation Practice' },
]

export default function Tutorials() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Kotoba | Tutorials'
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="text-center">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-shu">Video Library</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ai">Tutorials</h1>
        <p className="mx-auto mt-3 max-w-xl text-sumi/60">
          Reinforce every lesson with hand-picked videos on pronunciation, grammar and conversation.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <div key={v.id} className="overflow-hidden rounded-2xl border border-ai/10 bg-white/70 shadow-sm">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="p-4 font-semibold text-sumi">{v.title}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <button
          onClick={() => navigate('/lets-learn')}
          className="rounded-full bg-shu px-8 py-3 font-semibold text-washi transition hover:bg-shuDark"
        >
          Learn Vocabularies
        </button>
      </div>
    </div>
  )
}
