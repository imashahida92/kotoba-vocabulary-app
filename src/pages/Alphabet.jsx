import { useEffect, useState } from 'react'
import alphabet from '../data/alphabet.json'
import VideoEmbed from '../components/VideoEmbed'

function CharButton({ char, romaji }) {
  const speak = () => {
    if (!('speechSynthesis' in window)) return
    const utter = new SpeechSynthesisUtterance(char)
    utter.lang = 'ja-JP'
    utter.rate = 0.85
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utter)
  }

  return (
    <button
      onClick={speak}
      className="group flex flex-col items-center justify-center gap-1 rounded-2xl border border-ai/10 bg-white/70 py-4 transition hover:-translate-y-1 hover:border-shu hover:shadow-lg"
      aria-label={`Hear the sound for ${char}, romanized as ${romaji}`}
      title="Click to hear the sound"
    >
      <span className="font-jp text-3xl font-bold text-sumi transition group-hover:text-shu">{char}</span>
      <span className="text-xs font-semibold uppercase tracking-widest text-ai/60">{romaji}</span>
    </button>
  )
}

export default function Alphabet() {
  const [tab, setTab] = useState('hiragana')

  useEffect(() => {
    document.title = 'Kotoba | Alphabet'
  }, [])

  const rows = alphabet[tab]

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="text-center">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-shu">文字 — Characters</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-ai">The Japanese Alphabet</h1>
        <p className="mx-auto mt-3 max-w-xl text-sumi/60">
          Japanese uses two phonetic alphabets, hiragana and katakana, each with the same 46 sounds.
          Tap any character to hear how it's pronounced.
        </p>
      </div>

      <div className="mx-auto mt-8 flex w-fit rounded-full border border-ai/20 bg-white/70 p-1">
        <button
          onClick={() => setTab('hiragana')}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
            tab === 'hiragana' ? 'bg-ai text-washi' : 'text-ai/70 hover:text-ai'
          }`}
        >
          Hiragana ひらがな
        </button>
        <button
          onClick={() => setTab('katakana')}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
            tab === 'katakana' ? 'bg-ai text-washi' : 'text-ai/70 hover:text-ai'
          }`}
        >
          Katakana カタカナ
        </button>
      </div>

      <div className="mt-12 space-y-8">
        {rows.map((row) => (
          <div key={row.row} className="grid grid-cols-3 gap-3 sm:grid-cols-5">
            {row.chars.map((c) => (
              <CharButton key={c.char} char={c.char} romaji={c.romaji} />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-20 rounded-[2rem] bg-sumi p-8 text-washi md:p-12">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Watch &amp; Practice</p>
        <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
          {tab === 'hiragana' ? 'Full Hiragana Video Walkthrough' : 'Full Katakana Video Walkthrough'}
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl">
          {tab === 'hiragana' ? (
            <VideoEmbed id="pZ7tnNNfZro" title="Learn Hiragana - Japanese Alphabet" />
          ) : (
            <VideoEmbed id="vEnQtNcR4iA" title="Learn Katakana - Japanese Alphabet" />
          )}
        </div>
      </div>
    </div>
  )
}
