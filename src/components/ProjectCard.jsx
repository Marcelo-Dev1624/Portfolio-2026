import { Link } from 'react-router-dom'

/**
 * Reusable project card used in MainPage (featured) and ProjectsPage (all).
 * Receives a project object from data/projects.jsx
 */
export default function ProjectCard({ project }) {
  const { title, style, image, technologies, description, link, disabled } = project

  return (
    <div className={`project mobile-style ${style}`}>
      <div className="project-image-container">
        <img src={image} alt={title} />
      </div>

      <div className="project-content glassmorphism">
        <div className="project-title">
          <h1 className="header-text-4">{title}</h1>
          <div className="technologies">
            {technologies.map((tech) => (
              <img key={tech.alt} src={tech.src} alt={tech.alt} />
            ))}
          </div>
        </div>

        <div className="project-body">
          <div className="project-text">
            <p className="mv-text">{description}</p>
          </div>
          <div className="project-footer">
            {disabled ? (
              <button disabled className="btn disabled mobile-full outlined-accent mv-h3 px-16 accent">
                Coming soon
              </button>
            ) : (
              <Link to={link} className="btn mobile-full outlined-accent mv-h3 px-16 accent">
                View more
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
