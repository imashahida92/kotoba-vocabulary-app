import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useProgress from '../hooks/useProgress'
import ProgressBar from '../components/ProgressBar'
import vocabulary from '../data/vocabulary.json'
import lessonsMeta from '../data/lessonsMeta.json'
import { FiMail, FiUser, FiEdit2 } from 'react-icons/fi'

export default function MyProfile() {
  const { user } = useAuth()
  const { isCompleted, completedCount } = useProgress()

  useEffect(() => {
    document.title = 'Kotoba | My Profile'
  }, [])

  const overallPercent = vocabulary.length
    ? Math.round((completedCount / vocabulary.length) * 100)
    : 0

  const lessonsFinished = useMemo(() => {
    const byLesson = new Map()
    for (const w of vocabulary) {
      if (!byLesson.has(w.lesson_no)) byLesson.set(w.lesson_no, [])
      byLesson.get(w.lesson_no).push(w)
    }
    let finished = 0
    for (const words of byLesson.values()) {
      if (words.every((w) => isCompleted(w.id))) finished += 1
    }
    return finished
  }, [isCompleted])

  return (
    <div className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="text-center font-display text-3xl font-bold text-ai">
        Welcome, {user?.displayName || 'Learner'}!
      </h1>
      <p className="mt-2 text-center text-sumi/60">Here is everything we know about your Kotoba account.</p>

      <div className="mt-10 rounded-[2rem] border border-gold/30 bg-white/70 p-10 text-center shadow-sm">
        <img
          src={user?.photoURL || `https://api.dicebear.com/7.x/thumbs/svg?seed=${user?.uid}`}
          alt={user?.displayName || 'Profile'}
          className="mx-auto h-28 w-28 rounded-full border-4 border-ai object-cover"
        />

        <div className="mt-8 space-y-4 text-left">
          <div className="flex items-center gap-3 rounded-xl bg-washi px-4 py-3">
            <FiUser className="text-ai" />
            <div>
              <p className="text-xs uppercase tracking-widest text-sumi/40">Name</p>
              <p className="font-semibold text-sumi">{user?.displayName || 'Not set'}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-washi px-4 py-3">
            <FiMail className="text-ai" />
            <div>
              <p className="text-xs uppercase tracking-widest text-sumi/40">Email</p>
              <p className="font-semibold text-sumi">{user?.email}</p>
            </div>
          </div>
        </div>

        <Link
          to="/update-profile"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-shu px-8 py-3 font-semibold text-washi transition hover:bg-shuDark"
        >
          <FiEdit2 /> Update Profile
        </Link>
      </div>

      <div className="mt-8 rounded-[2rem] border border-ai/10 bg-white/70 p-8 shadow-sm">
        <h2 className="font-display text-xl font-bold text-ai">Your Learning Progress</h2>
        <p className="mt-1 text-sm text-sumi/60">
          Tracked from the "Mark Complete" button on each vocabulary card.
        </p>

        <div className="mt-6">
          <ProgressBar percent={overallPercent} label={`${completedCount} / ${vocabulary.length} words learned`} />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-washi p-4 text-center">
            <p className="font-display text-2xl font-bold text-shu">{lessonsFinished}</p>
            <p className="text-xs uppercase tracking-widest text-sumi/50">lessons fully completed</p>
          </div>
          <div className="rounded-2xl bg-washi p-4 text-center">
            <p className="font-display text-2xl font-bold text-shu">{lessonsMeta.length - lessonsFinished}</p>
            <p className="text-xs uppercase tracking-widest text-sumi/50">lessons remaining</p>
          </div>
        </div>

        <Link
          to="/lets-learn"
          className="mt-6 block text-center text-sm font-semibold text-shu hover:underline"
        >
          Continue learning →
        </Link>
      </div>
    </div>
  )
}
