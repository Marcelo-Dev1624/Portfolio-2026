import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import ProjectCard from '../ProjectCard'
import { featuredProjects } from '../../data/projects'

export default function ProjectsSection() {
  return (
    <section
      className="section px-4 py-10 flex-col justify-center items-center"
      id="Projects"
    >
      <Reveal as="h1" className="header-text-2 accent">¡Featured Projects!</Reveal>

      {featuredProjects.map((project, i) => (
        <Reveal key={project.id} index={i + 1} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <ProjectCard project={project} />
        </Reveal>
      ))}

      <Reveal index={featuredProjects.length + 1}>
        <Link
          to="/projects"
          id="more-projects-btn"
          className="btn accent glassmorphism rounded outlined-accent my-12"
        >
          See more
        </Link>
      </Reveal>
    </section>
  )
}
