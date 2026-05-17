import { Children } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'
import MobileLogo from '../components/MobileLogo'
import Reveal from '../components/Reveal'

export default function ProjectDetailLayout({ title, technologies, children }) {
  const { t } = useTranslation()
  const blocks = Children.toArray(children)

  return (
    <>
      {/* alwaysVisible: keep the floating brand island on desktop too,
          so the project detail navigation matches the mobile layout */}
      <MobileLogo alwaysVisible />

      <div className="navbar">
        <div className="inner-navbar">
          <div className="close-btn">
            <Link to="/projects" aria-label={t('projectDetail.close')} title={t('projectDetail.close')}>
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="project-detailed">
        <Reveal eager className="header">
          <h1 className="header-text-3">{title}</h1>
          <div className="technologies-block">
            {technologies.map((tech) => (
              <img key={tech.alt} src={tech.src} alt={tech.alt} />
            ))}
          </div>
        </Reveal>
        <div className="project-body">
          {blocks.map((block, i) => (
            <Reveal eager key={i} index={i + 1}>
              {block}
            </Reveal>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}