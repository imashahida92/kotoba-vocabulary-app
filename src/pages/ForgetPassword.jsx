import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import useAuth from '../hooks/useAuth'

export default function ForgetPassword() {
  const { resetPassword } = useAuth()
  const location = useLocation()
  const [email, setEmail] = useState(location.state?.email || '')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = 'Kotoba | Reset Password'
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    resetPassword(email)
      .then(() => {
        setSent(true)
        toast.success('Password reset email sent!')
        window.open('https://mail.google.com', '_blank')
      })
      .catch(() => {
        toast.error('Could not send reset email. Check the address and try again.')
      })
  }

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-5 py-16">
      <div className="text-center">
        <span className="hanko mx-auto h-14 w-14 text-xl">鍵</span>
        <h1 className="mt-4 font-display text-3xl font-bold text-ai">Reset Your Password</h1>
        <p className="mt-2 text-sm text-sumi/60">
          Enter your email and we'll send a link to reset your password.
        </p>
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

        <button type="submit" className="w-full rounded-full bg-shu py-3 font-semibold text-washi transition hover:bg-shuDark">
          Send Reset Link
        </button>

        {sent && (
          <p className="rounded-lg bg-matcha/10 px-3 py-2 text-sm text-matcha">
            Check your inbox for the reset link, then log in with your new password.
          </p>
        )}
      </form>

      <p className="mt-6 text-center text-sm text-sumi/60">
        Remembered it after all?{' '}
        <Link to="/login" className="font-semibold text-shu hover:underline">Back to Login</Link>
      </p>
    </div>
  )
}
