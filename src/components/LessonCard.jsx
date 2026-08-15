import { Link } from 'react-router-dom'

export default function LessonCard({ number, title }) {
  return (
    <Link
      to={`/lessons/${number}`}
      className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-ai/10 bg-white/70 p-8 text-center transition hover:-translate-y-1 hover:border-shu hover:shadow-lg"
    >
      <span className="hanko h-14 w-14 text-xl transition group-hover:bg-shu group-hover:text-washi">
        {number}
      </span>
      <p className="font-display text-lg font-bold text-ai">Lesson {number}</p>
      <p className="text-xs uppercase tracking-widest text-sumi/50">{title}</p>
    </Link>
  )
}
