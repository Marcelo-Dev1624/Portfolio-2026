import { Link } from 'react-router-dom'
import { Trans, useTranslation } from 'react-i18next'

/**
 * Reusable project card used in MainPage (featured) and ProjectsPage (all).
 * Title + description come from i18n under projects.<id>.{title,cardDescription}.
 */
export default function ProjectCard({ project }) {
  const { id, style, image, technologies, link, disabled } = project
  const { t } = useTranslation()

  return (
    <div className={`project mobile-style ${style}`}>
      <div className="project-image-container">
        <img src={image} alt={t(`projects.${id}.title`)} />
      </div>

      <div className="project-content glassmorphism">
        <div className="project-title">
          <h1 className="header-text-4">{t(`projects.${id}.title`)}</h1>
          <div className="technologies">
            {technologies.map((tech) => (
              <img key={tech.alt} src={tech.src} alt={tech.alt} />
            ))}
          </div>
        </div>

        <div className="project-body">
          <div className="project-text">
            <p className="mv-text">
              <Trans
                i18nKey={`projects.${id}.cardDescription`}
                components={{ accent: <span className="accent" /> }}
              />
            </p>
          </div>
          <div className="project-footer">
            {disabled ? (
              <button disabled className="btn disabled mobile-full outlined-accent mv-h3 px-16 accent">
                {t('projectsSection.comingSoon')}
              </button>
            ) : (
              <Link to={link} className="btn mobile-full outlined-accent mv-h3 px-16 accent">
                {t('projectsSection.viewMore')}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
