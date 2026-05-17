import { useState, useEffect } from 'react'

const STORAGE_KEY = 'portfolioIntroLastSeen'
const RESET_INTERVAL_MS = 30 * 24 * 60 * 60 * 1000 // 30 days

/**
 * Brand intro overlay (white logo → green logo → fade out).
 * Shown on the very first visit AND any visit after a 30-day gap, so
 * returning users get instant content but long-absent ones get a fresh
 * "welcome back" brand moment. Total runtime when shown: ~1.5s.
 */
function shouldShowIntro() {
  if (typeof window === 'undefined') return false
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) return true
  const lastSeen = parseInt(raw, 10)
  if (Number.isNaN(lastSeen)) return true
  return Date.now() - lastSeen > RESET_INTERVAL_MS
}

export function useLoadingAnimation() {
  const [phase, setPhase] = useState(() => (shouldShowIntro() ? 'initial' : 'done'))

  useEffect(() => {
    // Within 30 days — never seen mode, skip overlay entirely
    if (phase === 'done') {
      document.documentElement.classList.remove('loading')
      return
    }

    document.documentElement.classList.add('loading')

    const t1 = setTimeout(() => setPhase('white'), 100)
    const t2 = setTimeout(() => setPhase('green'), 600)
    const t3 = setTimeout(() => setPhase('fadeout'), 1100)
    const t4 = setTimeout(() => {
      setPhase('done')
      document.documentElement.classList.remove('loading')
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()))
    }, 1500)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return phase
}
