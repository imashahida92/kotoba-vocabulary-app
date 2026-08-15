import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import LoadingSpinner from '../components/LoadingSpinner'

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  // While Firebase is still restoring the session on reload, show a spinner
  // instead of bouncing a logged-in user out to the login page.
  if (loading) return <LoadingSpinner />

  if (user) return children

  return <Navigate to="/login" state={{ from: location }} replace />
}
