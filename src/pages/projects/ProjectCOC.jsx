import { Trans, useTranslation } from 'react-i18next'
import ProjectDetailLayout from '../ProjectDetailLayout'

const technologies = [
  { src: '/images/technologies/java.png', alt: 'Java' },
  { src: '/images/technologies/mysql.png', alt: 'MySQL' },
  { src: '/images/technologies/mongo.png', alt: 'MongoDB' },
]

export default function ProjectCOC() {
  const { t } = useTranslation()
  return (
    <ProjectDetailLayout title={t('projects.coc.title')} technologies={technologies}>
      <div className="image-and-description">
        <img src="/images/projects-covers/IDS.png" alt={t('projects.coc.title')} />
        <div className="line-vertical"></div>
        <div className="text-body">
          <h1 className="header-text-4">{t('projects.coc.detail.heading1')}</h1>
          <p className="mv-text">
            <Trans i18nKey="projects.coc.detail.body1" components={{ accent: <span className="accent" /> }} />
          </p>
        </div>
      </div>

      <div className="description-and-video">
        <div className="text-body">
          <h1 className="header-text-4">{t('projects.coc.detail.heading2')}</h1>
          <p className="mv-text">
            <Trans i18nKey="projects.coc.detail.body2" components={{ accent: <span className="accent" /> }} />
          </p>
        </div>
        <iframe
          className="project-video"
          src="https://www.youtube.com/embed/F39hUFckLeE?si=cdehciAtfCLp60Pq&start=1"
          title={t('projects.coc.title')}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </ProjectDetailLayout>
  )
}
