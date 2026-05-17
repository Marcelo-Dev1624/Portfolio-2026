import { Trans, useTranslation } from 'react-i18next'
import ProjectDetailLayout from '../ProjectDetailLayout'

const technologies = [
  { src: '/images/technologies/java.png', alt: 'Java' },
  { src: '/images/technologies/mysql.png', alt: 'MySQL' },
]

export default function ProjectAQL() {
  const { t } = useTranslation()
  return (
    <ProjectDetailLayout title={t('projects.aql.title')} technologies={technologies}>
      <div className="image-and-description">
        <img src="/images/projects-covers/AQL.png" alt={t('projects.aql.title')} />
        <div className="line-vertical"></div>
        <div className="text-body">
          <h1 className="header-text-4">{t('projects.aql.detail.heading1')}</h1>
          <p className="mv-text">
            <Trans i18nKey="projects.aql.detail.body1" components={{ accent: <span className="accent" /> }} />
          </p>
        </div>
      </div>

      <div className="description-and-video">
        <div className="text-body">
          <h1 className="header-text-4">{t('projects.aql.detail.heading2')}</h1>
          <p className="mv-text">
            <Trans i18nKey="projects.aql.detail.body2" components={{ accent: <span className="accent" /> }} />
          </p>
        </div>
      </div>
    </ProjectDetailLayout>
  )
}
