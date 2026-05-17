import { useNavigate } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'
import Reveal from '../Reveal'

const STATS = [
  { value: '4+', labelKey: 'about.stats.years' },
  { value: '5+', labelKey: 'about.stats.projects' },
  { value: '5+', labelKey: 'about.stats.clients' },
]

export default function AboutSection() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <section className="section px-4" id="About">
      <div className="about-v2">

        {/* Photo */}
        <Reveal className="about-v2-photo">
          <div className="about-v2-photo-ring">
            <img src="/images/marcelo_2.jpg" alt="Marcelo Villalobos" />
          </div>
        </Reveal>

        {/* Content */}
        <div className="about-v2-content">
          <Reveal as="p" index={1} className="about-v2-tag accent">
            {t('about.tag')}
          </Reveal>

          <Reveal as="h1" index={2} className="header-text-3 secondary">
            <Trans i18nKey="about.title" components={{ accent: <span className="accent" /> }} />
          </Reveal>

          <Reveal as="p" index={3} className="mv-text about-v2-bio">
            <Trans i18nKey="about.bio" components={{ accent: <span className="accent" /> }} />
          </Reveal>

          {/* Stats */}
          <Reveal className="about-v2-stats" index={4}>
            {STATS.map((s) => (
              <div key={s.labelKey} className="about-v2-stat">
                <span className="about-v2-stat-value accent">{s.value}</span>
                <span className="about-v2-stat-label">{t(s.labelKey)}</span>
              </div>
            ))}
          </Reveal>

          <Reveal index={5}>
            <button
              onClick={() => navigate('/contact')}
              className="btn glassmorphism mv-h3 accent about-v2-btn"
            >
              {t('about.cta')}
            </button>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
