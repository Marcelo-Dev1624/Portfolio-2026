import { Trans, useTranslation } from 'react-i18next'
import ProjectDetailLayout from '../ProjectDetailLayout'
import SEO from '../../components/SEO'

const stripHtml = (s) => s.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 200)

const technologies = [
  { src: '/images/technologies/react.png', alt: 'React' },
  { src: '/images/technologies/bootstrap.png', alt: 'Bootstrap' },
  { src: '/images/technologies/js.png', alt: 'JavaScript' },
]

export default function ProjectCalorieCalculator() {
  const { t } = useTranslation()
  return (
    <>
      <SEO
        title={t('projects.calorie-calculator.title')}
        description={stripHtml(t('projects.calorie-calculator.cardDescription'))}
        path="/projects/calorie-calculator"
        image="/images/projects-covers/Calorie_Calculator.png"
        type="article"
      />
    <ProjectDetailLayout title={t('projects.calorie-calculator.title')} technologies={technologies}>
      <div className="image-and-description">
        <img src="/images/projects-covers/Calorie_Calculator.png" alt={t('projects.calorie-calculator.title')} />
        <div className="line-vertical"></div>
        <div className="text-body">
          <h1 className="header-text-4">{t('projects.calorie-calculator.detail.heading1')}</h1>
          <p className="mv-text">
            <Trans i18nKey="projects.calorie-calculator.detail.body1" components={{ accent: <span className="accent" /> }} />
          </p>
        </div>
      </div>

      <div className="description-and-video">
        <div className="text-body">
          <h1 className="header-text-4">{t('projects.calorie-calculator.detail.heading2')}</h1>
          <p className="mv-text">
            <Trans i18nKey="projects.calorie-calculator.detail.body2" components={{ accent: <span className="accent" /> }} />
          </p>

          <div className="mt-8 text-center">
            <a
              href="https://marcelodev.net/calorie-calculator"
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
