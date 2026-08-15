import { FcGoogle } from 'react-icons/fc'
import { useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import useAuth from '../hooks/useAuth'

export default function SocialLogin() {
  const { googleLogin } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success('Logged in with Google!')
        navigate(from, { replace: true })
      })
      .catch(() => toast.error('Google sign-in failed. Please try again.'))
  }

  return (
    <button
      type="button"
      onClick={handleGoogle}
      className="flex w-full items-center justify-center gap-3 rounded-full border border-ai/20 bg-white px-6 py-3 font-semibold text-sumi transition hover:border-ai hover:shadow-md"
    >
      <FcGoogle size={22} /> Continue with Google
    </button>
  )
}
