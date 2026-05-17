import { useLayoutEffect, useRef } from 'react'

/**
 * Render-aware scroll reveal.
 *
 * Default behavior:
 *  - If the element is already in (or above) the viewport at mount time,
 *    it is shown instantly — no fade, no stagger delay — because the user
 *    is looking right at it.
 *  - If the element is below the fold, it's hidden until it enters the
 *    viewport via scroll, where it then plays the fade+slide+scale reveal.
 *
 * Pass `{ eager: true }` to force the entry animation even for elements
 * already in viewport. Useful for short pages (like /contact) that don't
 * have any below-the-fold content — without eager, everything would just
 * snap into place with no animation at all.
 *
 * `useLayoutEffect` runs before the browser's first paint, so in-viewport
 * elements never flicker through the hidden state.
 */
export function useScrollAnimation({ eager = false } = {}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    // Eager mode: always play the entry animation on mount. We schedule
    // the show-class addition on the next animation frame so the browser
    // first paints the hidden state, then transitions to the show state.
    if (eager) {
      const raf = requestAnimationFrame(() => {
        el.classList.add('elements-animation-show')
      })
      return () => cancelAnimationFrame(raf)
    }

    const rect = el.getBoundingClientRect()
    const alreadyVisible = rect.top < window.innerHeight

    if (alreadyVisible) {
      // Skip the animation entirely: disable transition so the show state
      // is applied instantly, then restore transition for any future change.
      el.style.transition = 'none'
      el.style.transitionDelay = '0ms'
      el.classList.add('elements-animation-show')
      // Force reflow so the inline transition: none takes effect before we clear it
      void el.offsetHeight
      el.style.transition = ''
      return
    }

    // Below the fold — wait for the user to scroll to it
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Clear the stagger delay so the element reveals immediately on scroll
            entry.target.style.transitionDelay = '0ms'
            entry.target.classList.add('elements-animation-show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05 }
    )
    observer.observe(el)

    return () => observer.disconnect()
  }, [eager])

  return ref
}
