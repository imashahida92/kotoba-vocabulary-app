import { Link } from 'react-router-dom'

export default function LessonCard({ number, title, percent }) {
  const hasProgress = typeof percent === 'number'
  const done = hasProgress && percent === 100

  return (
    <Link
      to={`/lessons/${number}`}
      className={`group relative flex flex-col items-center justify-center gap-3 rounded-2xl border bg-white/70 p-8 text-center transition hover:-translate-y-1 hover:border-shu hover:shadow-lg ${
        done ? 'border-matcha' : 'border-ai/10'
      }`}
    >
      {hasProgress && percent > 0 && (
        <span
          className={`absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold ${
            done ? 'bg-matcha text-washi' : 'bg-gold/20 text-[#8a6b0f]'
          }`}
        >
          {percent}%
        </span>
      )}
      <span className="hanko h-14 w-14 text-xl transition group-hover:bg-shu group-hover:text-washi">
        {number}
      </span>
      <p className="font-display text-lg font-bold text-ai">Lesson {number}</p>
      <p className="line-clamp-2 text-xs uppercase tracking-widest text-sumi/50">{title}</p>
    </Link>
  )
}
