import { useEffect, useRef } from 'react'

const LOADING_DURATION = 4500

export function useScrollAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observe = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('elements-animation-show')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.05 }
      )
      observer.observe(el)
      return observer
    }

    // Si la página acaba de cargar, esperamos a que termine la animación
    const elapsed = performance.now()
    const remaining = Math.max(0, LOADING_DURATION - elapsed)

    let observer
    const timer = setTimeout(() => {
      observer = observe()
    }, remaining)

    return () => {
      clearTimeout(timer)
      observer?.disconnect()
    }
  }, [])

  return ref
}