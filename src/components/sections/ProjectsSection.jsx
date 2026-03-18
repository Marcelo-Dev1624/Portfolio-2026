import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import ProjectCard from '../ProjectCard'
import { featuredProjects } from '../../data/projects'

export default function ProjectsSection() {
  const ref = useScrollAnimation()

  return (
    <section
      ref={ref}
      className="section elements-animation-hidden px-4 py-10 flex-col justify-center items-center"
      id="Projects"
    >
      <h1 className="header-text-2 accent">¡Featured Projects!</h1>

      {featuredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}

      <Link
        to="/projects"
        id="more-projects-btn"
        className="btn accent glassmorphism rounded outlined-accent my-12"
      >
        See more
      </Link>
    </section>
  )
}
