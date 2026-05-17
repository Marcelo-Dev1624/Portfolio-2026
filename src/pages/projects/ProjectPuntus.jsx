import { Trans, useTranslation } from 'react-i18next'
import ProjectDetailLayout from '../ProjectDetailLayout'

const technologies = [
  { src: '/images/technologies/nextjs-icon.svg', alt: 'Next.js' },
  { src: '/images/technologies/NestJS.svg', alt: 'NestJS' },
  { src: '/images/technologies/Typescript_logo_2020.png', alt: 'TypeScript' },
  { src: '/images/technologies/postgresql.png', alt: 'PostgreSQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', alt: 'Prisma' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', alt: 'Redis' },
  { src: '/images/technologies/tailwind.png', alt: 'Tailwind CSS' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', alt: 'Docker' },
]

export default function ProjectPuntus() {
  const { t } = useTranslation()
  return (
    <ProjectDetailLayout title={t('projects.puntus.title')} technologies={technologies}>
      <div className="image-and-description">
        <img src="/images/projects-covers/puntus-org.jpg" alt={t('projects.puntus.title')} />
        <div className="line-vertical"></div>
        <div className="text-body">
          <h1 className="header-text-4">{t('projects.puntus.detail.heading1')}</h1>
          <p className="mv-text">
            <Trans i18nKey="projects.puntus.detail.body1" components={{ accent: <span className="accent" /> }} />
          </p>
        </div>
      </div>

      <div className="description-and-video">
        <div className="text-body">
          <h1 className="header-text-4">{t('projects.puntus.detail.heading2')}</h1>
          <p className="mv-text">
            <Trans i18nKey="projects.puntus.detail.body2" components={{ accent: <span className="accent" /> }} />
          </p>

          <div className="mt-8 text-center">
            <a
              href="https://puntus.net"
              target="_blank"
              rel="noreferrer"
              className="btn glassmorphism accent outlined-accent mv-h3 px-8"
            >
              <i className="fas fa-external-link-alt mr-2"></i>{t('projectDetail.visitPuntus')}
            </a>
          </div>
        </div>
      </div>
    </ProjectDetailLayout>
  )
}
