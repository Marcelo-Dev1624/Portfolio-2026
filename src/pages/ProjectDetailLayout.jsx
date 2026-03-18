import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

/**
 * Reusable layout for project detail pages.
 * Replaces the custom navbar + project-detailed structure from the HTML pages.
 */
export default function ProjectDetailLayout({ title, technologies, children }) {
  return (
    <>
      {/* Minimal navbar for project pages */}
      <div className="navbar">
        <div className="inner-navbar">
          <div className="logo">
            <Link to="/">
              <img src="/images/isotipo_blanco.png" alt="MarceloDev logo" />
            </Link>
          </div>
          <div className="close-btn">
            <Link to="/projects">+</Link>
          </div>
        </div>
      </div>

      <div className="project-detailed">
        {/* Header */}
        <div className="header">
          <h1 className="header-text-3">{title}</h1>
          <div className="technologies-block">
            {technologies.map((tech) => (
              <img key={tech.alt} src={tech.src} alt={tech.alt} />
            ))}
          </div>
        </div>

        {/* Body content injected by each project page */}
        <div className="project-body">{children}</div>
      </div>

      <Footer />
    </>
  )
}
