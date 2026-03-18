import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import MobileLogo from '../components/MobileLogo'

export default function ProjectDetailLayout({ title, technologies, children }) {
  return (
    <>
      <MobileLogo />

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
        <div className="header">
          <h1 className="header-text-3">{title}</h1>
          <div className="technologies-block">
            {technologies.map((tech) => (
              <img key={tech.alt} src={tech.src} alt={tech.alt} />
            ))}
          </div>
        </div>
        <div className="project-body">{children}</div>
      </div>

      <Footer />
    </>
  )
}