import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import useAuth from '../hooks/useAuth'
import { toast } from 'react-toastify'

const navLinkClass = ({ isActive }) =>
  `relative px-3 py-2 text-sm font-medium tracking-wide transition-colors ${
    isActive ? 'text-shu' : 'text-sumi/80 hover:text-ai'
  }`

export default function Header() {
  const { user, logoutUser } = useAuth()
  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    logoutUser()
      .then(() => toast.success('You have been logged out.'))
      .catch(() => toast.error('Something went wrong logging out.'))
  }

  const links = (
    <>
      <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>Home</NavLink>
      <NavLink to="/lets-learn" className={navLinkClass} onClick={() => setOpen(false)}>Start Learning</NavLink>
      <NavLink to="/alphabet" className={navLinkClass} onClick={() => setOpen(false)}>Alphabet</NavLink>
      <NavLink to="/tutorials" className={navLinkClass} onClick={() => setOpen(false)}>Tutorials</NavLink>
      <NavLink to="/about-us" className={navLinkClass} onClick={() => setOpen(false)}>About Us</NavLink>
      {user && (
        <NavLink to="/my-profile" className={navLinkClass} onClick={() => setOpen(false)}>My Profile</NavLink>
      )}
    </>
  )

  return (
    <header className="sticky top-0 z-50 border-b border-ai/10 bg-washi/90 backdrop-blur">
      {user && (
        <div className="bg-ai py-1 text-center text-xs font-medium tracking-wide text-washi">
          ようこそ — Welcome back, {user.displayName || user.email}
        </div>
      )}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="hanko h-11 w-11 text-lg">語</span>
          <span className="font-display text-2xl font-bold text-ai">Kotoba<span className="text-shu">.</span></span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">{links}</nav>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <img
                src={user.photoURL || 'https://api.dicebear.com/7.x/thumbs/svg?seed=' + user.uid}
                alt={user.displayName || 'User avatar'}
                title={user.displayName || user.email}
                className="h-10 w-10 rounded-full border-2 border-ai object-cover"
              />
              <button
                onClick={handleLogout}
                className="rounded-full bg-shu px-5 py-2 text-sm font-semibold text-washi transition hover:bg-shuDark"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-full bg-ai px-5 py-2 text-sm font-semibold text-washi transition hover:bg-aiDark"
            >
              Login
            </Link>
          )}
        </div>

        <button className="text-2xl text-ai md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-ai/10 bg-washi px-5 py-4 md:hidden">
          {links}
          <div className="mt-3 flex items-center gap-3">
            {user ? (
              <>
                <img
                  src={user.photoURL || 'https://api.dicebear.com/7.x/thumbs/svg?seed=' + user.uid}
                  alt={user.displayName || 'User avatar'}
                  className="h-9 w-9 rounded-full border-2 border-ai object-cover"
                />
                <button onClick={handleLogout} className="rounded-full bg-shu px-4 py-2 text-sm font-semibold text-washi">
                  Log Out
                </button>
              </>
            ) : (
              <Link to="/login" onClick={() => setOpen(false)} className="rounded-full bg-ai px-4 py-2 text-sm font-semibold text-washi">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
