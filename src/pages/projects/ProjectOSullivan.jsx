import { Trans, useTranslation } from 'react-i18next'
import ProjectDetailLayout from '../ProjectDetailLayout'

const technologies = [
  { src: '/images/technologies/react.png', alt: 'React' },
  { src: '/images/technologies/nodejs.png', alt: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', alt: 'Express' },
  { src: '/images/technologies/mongo.png', alt: 'MongoDB' },
  { src: '/images/technologies/tailwind.png', alt: 'Tailwind CSS' },
]

export default function ProjectOSullivan() {
  const { t } = useTranslation()
  return (
    <ProjectDetailLayout title={t('projects.osullivan.title')} technologies={technologies}>
      <div className="image-and-description">
        <img src="/images/projects-covers/osullivan.png" alt={t('projects.osullivan.title')} />
        <div className="line-vertical"></div>
        <div className="text-body">
          <h1 className="header-text-4">{t('projects.osullivan.detail.heading1')}</h1>
          <p className="mv-text">
            <Trans i18nKey="projects.osullivan.detail.body1" components={{ accent: <span className="accent" /> }} />
          </p>
        </div>
      </div>

      <div className="description-and-video">
        <div className="text-body">
          <h1 className="header-text-4">{t('projects.osullivan.detail.heading2')}</h1>
          <p className="mv-text">
            <Trans i18nKey="projects.osullivan.detail.body2" components={{ accent: <span className="accent" /> }} />
          </p>

          <div className="mt-8 text-center">
            <a
              href="https://osullivanculinary.com"
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
  )
}
