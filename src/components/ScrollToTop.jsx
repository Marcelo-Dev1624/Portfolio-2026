import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Manual scroll restoration.
 *
 * Browser-native scroll restoration is unreliable here because content
 * (cube background, images, fonts) loads asynchronously and shifts layout
 * after the browser has already restored a stale scrollY value — landing
 * the user at a random position.
 *
 * Strategy:
 *   - Disable native `history.scrollRestoration`.
 *   - Save scrollY per-pathname into sessionStorage on every scroll (rAF-throttled).
 *   - On mount/route-change: route change → scroll to top.
 *                            reload (initial mount) → restore last scrollY for
 *                            this pathname after the next paint.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  const isFirstMount = useRef(true)

  // Disable native scroll restoration once
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  // Save scrollY on scroll, keyed by pathname
  useEffect(() => {
    const key = `scroll:${pathname}`
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        sessionStorage.setItem(key, String(window.scrollY))
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    // Save right before reload/close too — covers cases scroll listener missed
    const onBeforeUnload = () => {
      sessionStorage.setItem(key, String(window.scrollY))
    }
    window.addEventListener('beforeunload', onBeforeUnload)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('beforeunload', onBeforeUnload)
    }
  }, [pathname])

  // Handle mount + pathname changes
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false
      const saved = sessionStorage.getItem(`scroll:${pathname}`)
      const targetY = saved ? parseInt(saved, 10) : 0
      if (targetY === 0) return

      // Wait until content has had a chance to render and layout has settled,
      // then restore. Two rAFs covers the typical post-mount paint cycle.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: targetY, behavior: 'instant' })
        })
      })
      return
    }
    // Route change → top
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
