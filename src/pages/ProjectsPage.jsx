import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import { allProjects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <section
        className="section px-4 pt-20 xl:pt-44 flex-col justify-center items-center"
        id="Projects"
      >
        <h1 className="header-text-2 accent">¡Take a look at my work!</h1>

        {allProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <Footer />
    </>
  )
}
