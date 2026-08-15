import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Kotoba | Page Not Found'
  }, [])

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <span className="font-jp text-8xl font-bold text-shu">迷</span>
      <p className="mt-2 text-sm uppercase tracking-widest text-sumi/50">mayou — to lose your way</p>
      <h1 className="mt-6 font-display text-4xl font-bold text-ai">404 — Page Not Found</h1>
      <p className="mt-3 text-sumi/60">
        Looks like this word isn't in our dictionary. Let's get you back on the path.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-ai px-8 py-3 font-semibold text-washi transition hover:bg-aiDark"
      >
        Back to Home
      </Link>
    </div>
  )
}
