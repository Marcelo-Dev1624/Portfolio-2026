import { Trans, useTranslation } from 'react-i18next'

export default function HomeSection() {
  const { t } = useTranslation()

  return (
    <section className="section hero-entry" id="Home">
      <div className="home-elements lg:mt-16">
        <div className="home-elements-content">
          <h1 className="header-text-1 hero-title">
            <span className="hero-title-line">{t('home.greeting')}</span>
            <br />
            <span className="hero-title-line hero-title-line--delayed">
              <Trans i18nKey="home.name" components={{ accent: <span className="accent" /> }} />
            </span>
          </h1>
          <div className="feature-box home-feature-location glassmorphism hero-location">
            <i className="fa-solid fa-location-dot" />
            <p>{t('home.location')}</p>
          </div>
        </div>
        <img src="/images/memoji.png" alt="Marcelo memoji" className="hero-memoji" />
      </div>
    </section>
  )
}
