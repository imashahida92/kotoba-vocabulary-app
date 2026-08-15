import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import useAuth from '../hooks/useAuth'
import SocialLogin from '../components/SocialLogin'

export default function Register() {
  const { registerUser, updateUserProfile, setUser } = useAuth()
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'Kotoba | Register'
  }, [])

  const validatePassword = (password) => {
    if (password.length < 6) return 'Password must be at least 6 characters long.'
    if (!/[A-Z]/.test(password)) return 'Password must include an uppercase letter.'
    if (!/[a-z]/.test(password)) return 'Password must include a lowercase letter.'
    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const form = e.target
    const name = form.name.value
    const photoURL = form.photoURL.value
    const email = form.email.value
    const password = form.password.value

    const passwordError = validatePassword(password)
    if (passwordError) {
      setError(passwordError)
      return
    }

    registerUser(email, password)
      .then((result) => {
        return updateUserProfile({ displayName: name, photoURL: photoURL || undefined }).then(() => {
          setUser({ ...result.user, displayName: name, photoURL: photoURL || result.user.photoURL })
          toast.success('Account created! Welcome to Kotoba.')
          navigate('/')
        })
      })
      .catch((err) => {
        if (err.code === 'auth/email-already-in-use') {
          setError('This email is already registered. Try logging in instead.')
        } else {
          setError('Could not create your account. Please check your details and try again.')
        }
      })
  }

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-5 py-16">
      <div className="text-center">
        <span className="hanko mx-auto h-14 w-14 text-xl">語</span>
        <h1 className="mt-4 font-display text-3xl font-bold text-ai">Create Your Account</h1>
        <p className="mt-2 text-sm text-sumi/60">Start collecting Japanese vocabulary today.</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-[2rem] border border-ai/10 bg-white/70 p-8 shadow-sm">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-sumi/70">Name</label>
          <input id="name" name="name" type="text" required className="mt-1 w-full rounded-xl border border-ai/20 bg-washi px-4 py-3 outline-none focus:border-ai" placeholder="Your full name" />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-sumi/70">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-ai/20 bg-washi px-4 py-3 outline-none focus:border-ai" placeholder="you@example.com" />
        </div>

        <div>
          <label htmlFor="photoURL" className="text-sm font-semibold text-sumi/70">Photo URL</label>
          <input id="photoURL" name="photoURL" type="url" className="mt-1 w-full rounded-xl border border-ai/20 bg-washi px-4 py-3 outline-none focus:border-ai" placeholder="https://example.com/photo.jpg" />
        </div>

        <div>
          <label htmlFor="password" className="text-sm font-semibold text-sumi/70">Password</label>
          <div className="relative mt-1">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              className="w-full rounded-xl border border-ai/20 bg-washi px-4 py-3 pr-11 outline-none focus:border-ai"
              placeholder="At least 6 characters, Aa"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sumi/50"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <p className="mt-1 text-xs text-sumi/40">Must include an uppercase and lowercase letter, 6+ characters.</p>
        </div>

        {error && <p className="rounded-lg bg-shu/10 px-3 py-2 text-sm text-shu">{error}</p>}

        <button type="submit" className="w-full rounded-full bg-ai py-3 font-semibold text-washi transition hover:bg-aiDark">
          Register
        </button>

        <div className="flex items-center gap-3 py-1 text-xs text-sumi/40">
          <span className="h-px flex-1 bg-ai/10" /> OR <span className="h-px flex-1 bg-ai/10" />
        </div>

        <SocialLogin />
      </form>

      <p className="mt-6 text-center text-sm text-sumi/60">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-shu hover:underline">Login</Link>
      </p>
    </div>
  )
}
