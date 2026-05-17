import { useLoadingAnimation } from '../hooks/useLoadingAnimation'

export default function LoadingAnimation() {
  const phase = useLoadingAnimation()

  if (phase === 'done') return null

  return (
    <div
      id="onload-animation"
      className={phase === 'fadeout' ? 'onload' : ''}
      aria-hidden="true"
    >
      <img
        src="/images/isotipo_blanco.png"
        id="animation-logo-white"
        className={phase === 'white' ? 'is-visible' : ''}
        alt=""
      />
      <img
        src="/images/isotipo-verde.png"
        id="animation-logo-green"
        className={phase === 'green' || phase === 'fadeout' ? 'is-visible' : ''}
        alt=""
      />
    </div>
  )
}
