import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import VideoEmbed from '../components/VideoEmbed'

const videos = [
  { id: 'pZ7tnNNfZro', title: 'Learn Hiragana — Full Alphabet for Beginners' },
  { id: 'z4qh8BVrb3w', title: 'How to Write and Read All Hiragana (30 Minutes)' },
  { id: 'CqwE1F0XEL4', title: '25 Must-Know Japanese Greetings' },
  { id: 'bOUqVC4XkOY', title: 'How to Count in Japanese, 1–100' },
  { id: 'UneYOL0DQxk', title: 'は & です — Grammar for Absolute Beginners' },
  { id: 'hblln4roLGM', title: 'Top 30 Common Japanese Verbs' },
  { id: 'DiqA7fHShBU', title: '20 Daily Japanese Conversations' },
  { id: 'sbw5IDYyoF0', title: 'Japanese Grammar Basics, All in One Video' },
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
          Videos load only when you press play, so the page stays fast.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <div key={v.id} className="overflow-hidden rounded-2xl border border-ai/10 bg-white/70 p-3 shadow-sm">
            <div className="overflow-hidden rounded-xl">
              <VideoEmbed id={v.id} title={v.title} />
            </div>
            <p className="px-1 pt-3 font-semibold text-sumi">{v.title}</p>
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
