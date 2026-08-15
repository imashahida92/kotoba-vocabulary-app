import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { FiMail, FiUser, FiEdit2 } from 'react-icons/fi'

export default function MyProfile() {
  const { user } = useAuth()

  useEffect(() => {
    document.title = 'Kotoba | My Profile'
  }, [])

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
    </div>
  )
}
