import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiHome } from 'react-icons/fi'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Kotoba | Page Not Found'
  }, [])

  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5 py-16">
      <svg
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -top-10 left-1/2 h-[480px] w-[480px] -translate-x-1/2 opacity-[0.06] md:h-[600px] md:w-[600px]"
        aria-hidden="true"
      >
        <path
          d="M40 110 L360 110 M60 80 L340 80 M100 110 L90 380 M300 110 L310 380 M40 150 L360 150"
          stroke="#22436B"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <span className="pointer-events-none absolute left-[8%] top-[18%] hidden font-jp text-6xl text-ai/5 md:block" aria-hidden="true">道</span>
      <span className="pointer-events-none absolute bottom-[14%] right-[10%] hidden font-jp text-7xl text-shu/5 md:block" aria-hidden="true">語</span>

      <div className="relative w-full max-w-lg rounded-[2.5rem] border border-gold/30 bg-white/80 px-8 py-14 text-center shadow-xl backdrop-blur-sm sm:px-14">
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 border-double border-shu">
          <span className="font-jp text-6xl font-bold text-shu">迷</span>
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-sumi/40">
          mayou &nbsp;—&nbsp; to lose your way
        </p>

        <div className="divider-torii mx-auto mt-6 w-20" />

        <h1 className="mt-6 font-display text-4xl font-bold text-ai sm:text-5xl">
          404
        </h1>
        <p className="mt-2 font-display text-lg font-semibold text-sumi/70">
          Page Not Found
        </p>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-sumi/60">
          Looks like this word isn't in our dictionary yet. The page you're looking
          for may have moved, or the address might be mistyped.
        </p>

        <Link
          to="/"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-shu px-8 py-3 font-semibold tracking-wide text-washi shadow-md transition hover:-translate-y-0.5 hover:bg-shuDark hover:shadow-lg"
        >
          <FiHome /> Back to Home
        </Link>
      </div>
    </div>
  )
}