import { Children } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import MobileLogo from '../components/MobileLogo'
import Reveal from '../components/Reveal'

export default function ProjectDetailLayout({ title, technologies, children }) {
  const blocks = Children.toArray(children)

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
        <Reveal className="header">
          <h1 className="header-text-3">{title}</h1>
          <div className="technologies-block">
            {technologies.map((tech) => (
              <img key={tech.alt} src={tech.src} alt={tech.alt} />
            ))}
          </div>
        </Reveal>
        <div className="project-body">
          {blocks.map((block, i) => (
            <Reveal key={i} index={i + 1}>
              {block}
            </Reveal>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}