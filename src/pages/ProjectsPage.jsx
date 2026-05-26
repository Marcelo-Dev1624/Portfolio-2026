import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileLogo from '../components/MobileLogo'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import SEO from '../components/SEO'
import { featuredProjects, earlyProjects } from '../data/projects'

export default function ProjectsPage() {
  const { t, i18n } = useTranslation()
  const isEs = i18n.language?.startsWith('es')
  const title = isEs ? 'Proyectos' : 'Projects'
  const description = isEs
    ? 'Proyectos de Marcelo Villalobos: Puntus (SaaS de lealtad), O\'Sullivan Culinary (plataforma de cursos), proyectos para IDS, y más.'
    : 'Projects by Marcelo Villalobos: Puntus (SaaS loyalty platform), O\'Sullivan Culinary (course platform), IDS internal tools, and more.'

  return (
    <>
      <SEO title={title} description={description} path="/projects" />
      <Navbar />
      <MobileLogo />

      <section
        className="section px-4 pt-20 xl:pt-44 flex-col justify-center items-center"
        id="Projects"
      >
        <Reveal eager as="h1" className="header-text-2 accent">{t('projectsSection.allTitle')}</Reveal>

        {featuredProjects.map((project, i) => (
          <Reveal eager key={project.id} index={i + 1} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <ProjectCard project={project} />
          </Reveal>
        ))}

        {/* Early Work divider + section */}
        <Reveal eager className="early-work-divider">
          <span className="early-work-line" />
          <div className="early-work-heading">
            <h2 className="header-text-3 accent">{t('projectsSection.earlyTitle')}</h2>
            <p className="mv-text early-work-subtitle">{t('projectsSection.earlySubtitle')}</p>
          </div>
          <span className="early-work-line" />
        </Reveal>

        {earlyProjects.map((project, i) => (
          <Reveal
            eager
            key={project.id}
            index={i + 1}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </section>

      <Footer />
    </>
  )
}
