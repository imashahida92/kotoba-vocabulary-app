import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import useAuth from '../hooks/useAuth'
import SocialLogin from '../components/SocialLogin'

export default function Login() {
  const { loginUser } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'Kotoba | Login'
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    loginUser(email, password)
      .then(() => {
        toast.success('Welcome back!')
        navigate(from, { replace: true })
      })
      .catch(() => {
        setError('Incorrect email or password. Please try again.')
      })
  }

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-5 py-16">
      <div className="text-center">
        <span className="hanko mx-auto h-14 w-14 text-xl">語</span>
        <h1 className="mt-4 font-display text-3xl font-bold text-ai">Login to Kotoba</h1>
        <p className="mt-2 text-sm text-sumi/60">Continue your Japanese vocabulary journey.</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-[2rem] border border-ai/10 bg-white/70 p-8 shadow-sm">
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-sumi/70">Email</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-xl border border-ai/20 bg-washi px-4 py-3 outline-none focus:border-ai"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="text-sm font-semibold text-sumi/70">Password</label>
          <div className="relative mt-1">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-ai/20 bg-washi px-4 py-3 pr-11 outline-none focus:border-ai"
              placeholder="••••••••"
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
          <div className="mt-2 text-right">
            <Link
              to="/forget-password"
              state={{ email }}
              className="text-xs font-semibold text-shu hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        {error && <p className="rounded-lg bg-shu/10 px-3 py-2 text-sm text-shu">{error}</p>}

        <button type="submit" className="w-full rounded-full bg-ai py-3 font-semibold text-washi transition hover:bg-aiDark">
          Login
        </button>

        <div className="flex items-center gap-3 py-1 text-xs text-sumi/40">
          <span className="h-px flex-1 bg-ai/10" /> OR <span className="h-px flex-1 bg-ai/10" />
        </div>

        <SocialLogin />
      </form>

      <p className="mt-6 text-center text-sm text-sumi/60">
        New to Kotoba?{' '}
        <Link to="/register" className="font-semibold text-shu hover:underline">Create an account</Link>
      </p>
    </div>
  )
}
