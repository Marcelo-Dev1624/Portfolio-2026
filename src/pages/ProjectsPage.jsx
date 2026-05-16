import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileLogo from '../components/MobileLogo'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { allProjects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <MobileLogo />

      <section
        className="section px-4 pt-20 xl:pt-44 flex-col justify-center items-center"
        id="Projects"
      >
        <Reveal as="h1" className="header-text-2 accent">¡Take a look at my work!</Reveal>

        {allProjects.map((project, i) => (
          <Reveal key={project.id} index={i + 1} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </section>

      <Footer />
    </>
  )
}