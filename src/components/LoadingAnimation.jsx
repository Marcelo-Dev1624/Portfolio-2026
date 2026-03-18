import { useLoadingAnimation } from '../hooks/useLoadingAnimation'

export default function LoadingAnimation() {
  const phase = useLoadingAnimation()

  if (phase === 'done') return null

  return (
    <div
      id="onload-animation"
      className={phase === 'fadeout' ? 'onload' : ''}
    >
      <img
        src="/images/isotipo_blanco.png"
        id="animation-logo-white"
        className={
          phase === 'white' ? 'fadeIn'
          : phase === 'green' || phase === 'fadeout' ? 'fadeOut'
          : ''
        }
        alt="MarceloDev logo white"
      />
      <img
        src="/images/isotipo-verde.png"
        id="animation-logo-green"
        className={
          phase === 'green' ? 'fadeIn'
          : phase === 'fadeout' ? 'fadeOut'
          : ''
        }
        alt="MarceloDev logo green"
      />
    </div>
  )
}