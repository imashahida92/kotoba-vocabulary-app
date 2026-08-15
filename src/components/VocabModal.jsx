import { FiX } from 'react-icons/fi'

export default function VocabModal({ item, onClose }) {
  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-sumi/70 p-5"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-[2rem] border-2 border-gold/40 bg-washi p-8 shadow-2xl"
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="font-jp text-4xl font-bold text-ai">{item.word}</p>
            <p className="mt-1 text-sm text-sumi/50">{item.pronunciation}</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-2 text-sumi/60 hover:bg-sumi/10">
            <FiX size={22} />
          </button>
        </div>

        <p className="mt-4 text-lg font-semibold text-shu">{item.meaning}</p>

        <div className="mt-5">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">When to say it</p>
          <p className="mt-1 text-sm leading-relaxed text-sumi/80">{item.when_to_say}</p>
        </div>

        <div className="mt-5 rounded-xl bg-ai/5 p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-ai">Example</p>
          <p className="mt-1 text-sm leading-relaxed text-sumi/80">{item.example}</p>
        </div>
      </div>
    </div>
  )
}
