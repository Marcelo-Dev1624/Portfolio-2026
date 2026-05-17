import { Trans, useTranslation } from 'react-i18next'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function HomeSection() {
  const ref = useScrollAnimation()
  const { t } = useTranslation()

  return (
    <section ref={ref} className="section elements-animation-hidden" id="Home">
      <div className="home-elements lg:mt-16">
        <div className="home-elements-content">
          <h1 className="header-text-1">
            {t('home.greeting')}
            <br />
            <Trans i18nKey="home.name" components={{ accent: <span className="accent" /> }} />
          </h1>
          <div className="feature-box home-feature-location glassmorphism">
            <i className="fa-solid fa-location-dot" />
            <p>{t('home.location')}</p>
          </div>
        </div>
        <img src="/images/memoji.png" alt="Marcelo memoji" />
      </div>

      {/* Animated floating background circles */}
      <div className="bg-area-index">
        <ul className="bg-circles">
          {[...Array(10)].map((_, i) => <li key={i} />)}
        </ul>
      </div>
    </section>
  )
}
