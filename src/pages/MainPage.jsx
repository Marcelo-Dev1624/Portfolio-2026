import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoadingAnimation from '../components/LoadingAnimation'
import MobileLogo from '../components/MobileLogo'
import HomeSection from '../components/sections/HomeSection'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import SEO from '../components/SEO'

export default function MainPage() {
  const { i18n } = useTranslation()
  const isEs = i18n.language?.startsWith('es')
  const title = isEs
    ? 'Marcelo Villalobos — Ingeniero de Software Full-Stack'
    : 'Marcelo Villalobos — Full-Stack Software Engineer'
  const description = isEs
    ? 'Ingeniero de Software Full-Stack desde Costa Rica. Co-fundador de Puntus. Construyendo aplicaciones web de producción end-to-end — React, Next.js, NestJS, Node.js, PostgreSQL, MongoDB.'
    : 'Full-Stack Software Engineer based in Costa Rica. Co-founder of Puntus. Building production web applications end-to-end — React, Next.js, NestJS, Node.js, PostgreSQL, MongoDB.'

  return (
    <>
      <SEO title={title} description={description} path="/" noSuffix />
      <LoadingAnimation />
      <Navbar />
      <MobileLogo />
      <div className="sections-mv-container">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </div>
      <Footer />
    </>
  )
}
