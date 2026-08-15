import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import useAuth from '../hooks/useAuth'

export default function UpdateProfile() {
  const { user, updateUserProfile, setUser } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState(user?.displayName || '')
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '')

  useEffect(() => {
    document.title = 'Kotoba | Update Profile'
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUserProfile({ displayName: name, photoURL })
      .then(() => {
        setUser((prev) => ({ ...prev, displayName: name, photoURL }))
        toast.success('Profile updated!')
        navigate('/my-profile')
      })
      .catch(() => toast.error('Could not update your profile. Please try again.'))
  }

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-5 py-16">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-ai">Update Profile</h1>
        <p className="mt-2 text-sm text-sumi/60">Keep your name and photo up to date.</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-[2rem] border border-ai/10 bg-white/70 p-8 shadow-sm">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-sumi/70">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-ai/20 bg-washi px-4 py-3 outline-none focus:border-ai"
          />
        </div>

        <div>
          <label htmlFor="photoURL" className="text-sm font-semibold text-sumi/70">Photo URL</label>
          <input
            id="photoURL"
            type="url"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="mt-1 w-full rounded-xl border border-ai/20 bg-washi px-4 py-3 outline-none focus:border-ai"
          />
        </div>

        <button type="submit" className="w-full rounded-full bg-ai py-3 font-semibold text-washi transition hover:bg-aiDark">
          Update Information
        </button>
      </form>
    </div>
  )
}
