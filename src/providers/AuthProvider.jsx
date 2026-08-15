import { useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from '../firebase/firebase.config'
import AuthContext from '../contexts/AuthContext'

const googleProvider = new GoogleAuthProvider()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const googleLogin = () => signInWithPopup(auth, googleProvider)

  const logoutUser = () => signOut(auth)

  const resetPassword = (email) => sendPasswordResetEmail(auth, email)

  const updateUserProfile = (updates) => updateProfile(auth.currentUser, updates)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const authInfo = {
    user,
    loading,
    setUser,
    registerUser,
    loginUser,
    googleLogin,
    logoutUser,
    resetPassword,
    updateUserProfile,
  }

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}
