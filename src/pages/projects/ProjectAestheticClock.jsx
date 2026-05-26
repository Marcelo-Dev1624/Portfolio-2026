import { Trans, useTranslation } from 'react-i18next'
import ProjectDetailLayout from '../ProjectDetailLayout'
import SEO from '../../components/SEO'

const stripHtml = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 200)

const technologies = [
  { src: '/images/technologies/html.png', alt: 'HTML' },
  { src: '/images/technologies/css.png', alt: 'CSS' },
  { src: '/images/technologies/js.png', alt: 'JavaScript' },
]

export default function ProjectAestheticClock() {
  const { t } = useTranslation()
  return (
    <>
      <SEO
        title={t('projects.aesthetic-clock.title')}
        description={stripHtml(t('projects.aesthetic-clock.cardDescription'))}
        path="/projects/aesthetic-clock"
        image="/images/projects-covers/aesthethic-clock.png"
        type="article"
      />
    <ProjectDetailLayout title={t('projects.aesthetic-clock.title')} technologies={technologies}>
      <div className="image-and-description">
        <img src="/images/projects-covers/aesthethic-clock.png" alt={t('projects.aesthetic-clock.title')} />
        <div className="line-vertical"></div>
        <div className="text-body">
          <h1 className="header-text-4">{t('projects.aesthetic-clock.detail.heading1')}</h1>
          <p className="mv-text">
            <Trans i18nKey="projects.aesthetic-clock.detail.body1" components={{ accent: <span className="accent" /> }} />
          </p>
        </div>
      </div>

      <div className="description-and-video">
        <div className="text-body">
          <h1 className="header-text-4">{t('projects.aesthetic-clock.detail.heading2')}</h1>
          <p className="mv-text">
            <Trans i18nKey="projects.aesthetic-clock.detail.body2" components={{ accent: <span className="accent" /> }} />
          </p>

          <div className="mt-8 text-center">
            <a
              href="https://marcelodev.net/aesthetic-clock"
              target="_blank"
              rel="noreferrer"
              className="btn glassmorphism accent outlined-accent mv-h3 px-8"
            >
              <i className="fas fa-external-link-alt mr-2"></i>{t('projectDetail.visitLive')}
            </a>
          </div>
        </div>
      </div>
    </ProjectDetailLayout>
    </>
  )
}
