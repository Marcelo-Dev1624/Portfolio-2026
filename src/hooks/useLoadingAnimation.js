import { useState, useEffect } from 'react'

export function useLoadingAnimation() {
  const [phase, setPhase] = useState('initial')

  useEffect(() => {
    document.documentElement.classList.add('loading')

    const t1 = setTimeout(() => setPhase('white'), 800)       // logo blanco aparece
    const t2 = setTimeout(() => setPhase('green'), 2200)      // swap a logo verde
    const t3 = setTimeout(() => setPhase('fadeout'), 3200)    // overlay empieza a salir
    const t4 = setTimeout(() => {                             // overlay sale del DOM
      setPhase('done')
      document.documentElement.classList.remove('loading')
    }, 4500)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [])

  return phase
}