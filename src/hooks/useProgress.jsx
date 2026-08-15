import { useCallback, useEffect, useState } from 'react'
import useAuth from './useAuth'

function storageKey(uid) {
  return `kotoba_progress_${uid}`
}

// Tracks which vocabulary word IDs a signed-in user has marked as learned.
// Stored in localStorage keyed by the user's Firebase UID, so progress is
// tied to their account and persists across visits on the same browser.
export default function useProgress() {
  const { user } = useAuth()
  const [completed, setCompleted] = useState(new Set())

  useEffect(() => {
    if (!user) {
      setCompleted(new Set())
      return
    }
    try {
      const raw = localStorage.getItem(storageKey(user.uid))
      setCompleted(new Set(raw ? JSON.parse(raw) : []))
    } catch {
      setCompleted(new Set())
    }
  }, [user])

  const persist = useCallback(
    (nextSet) => {
      if (!user) return
      try {
        localStorage.setItem(storageKey(user.uid), JSON.stringify(Array.from(nextSet)))
      } catch {
        // localStorage unavailable (private browsing, quota, etc.) — fail silently
      }
    },
    [user]
  )

  const toggleWord = useCallback(
    (wordId) => {
      setCompleted((prev) => {
        const next = new Set(prev)
        if (next.has(wordId)) next.delete(wordId)
        else next.add(wordId)
        persist(next)
        return next
      })
    },
    [persist]
  )

  const isCompleted = useCallback((wordId) => completed.has(wordId), [completed])

  return { completed, toggleWord, isCompleted, completedCount: completed.size }
}
