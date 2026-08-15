import { FiVolume2, FiCheck } from 'react-icons/fi'

const difficultyStyles = {
  easy: 'bg-matcha/10 border-matcha text-matcha',
  medium: 'bg-gold/10 border-gold text-[#8a6b0f]',
  difficult: 'bg-shu/10 border-shu text-shu',
}

export default function VocabCard({ item, onWhenToSay, completed = false, onToggleComplete }) {
  const speak = () => {
    if (!('speechSynthesis' in window)) return
    const utter = new SpeechSynthesisUtterance(item.word)
    utter.lang = 'ja-JP'
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utter)
  }

  const style = difficultyStyles[item.difficulty] || difficultyStyles.easy

  return (
    <div
      className={`relative flex flex-col rounded-2xl border-2 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
        completed ? 'border-matcha bg-matcha/5 ring-2 ring-matcha/30' : style
      }`}
    >
      {completed && (
        <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-matcha text-washi shadow-md">
          <FiCheck size={16} />
        </span>
      )}

      <div className="flex items-start justify-between">
        <button
          onClick={speak}
          className="font-jp text-3xl font-bold text-sumi transition hover:text-shu"
          aria-label={`Pronounce ${item.word}`}
          title="Click to hear pronunciation"
        >
          {item.word}
        </button>
        <button onClick={speak} className="rounded-full border border-current p-2 text-current transition hover:bg-current hover:text-white" aria-label="Play pronunciation">
          <FiVolume2 />
        </button>
      </div>

      <p className="mt-2 font-display text-sm text-sumi/60">{item.pronunciation}</p>
      <p className="mt-3 text-lg font-semibold text-ai">{item.meaning}</p>

      <div className="mt-3 flex items-center gap-2 text-xs">
        <span className="rounded-full border border-current px-3 py-1 font-medium uppercase tracking-wide">{item.part_of_speech}</span>
        <span className="rounded-full border border-current px-3 py-1 font-medium uppercase tracking-wide">{item.difficulty}</span>
      </div>

      <div className="mt-5 flex gap-2">
        <button
          onClick={() => onWhenToSay(item)}
          className="flex-1 rounded-full bg-ai px-4 py-2 text-sm font-semibold text-washi transition hover:bg-aiDark"
        >
          When to Say
        </button>
        {onToggleComplete && (
          <button
            onClick={() => onToggleComplete(item.id)}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition ${
              completed
                ? 'bg-matcha text-washi hover:bg-matcha/80'
                : 'border border-matcha text-matcha hover:bg-matcha hover:text-washi'
            }`}
          >
            <FiCheck size={16} /> {completed ? 'Learned' : 'Mark Complete'}
          </button>
        )}
      </div>
    </div>
  )
}
