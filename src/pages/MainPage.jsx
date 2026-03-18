import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoadingAnimation from '../components/LoadingAnimation'
import HomeSection from '../components/sections/HomeSection'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection'

export default function MainPage() {
  return (
    <>
      <LoadingAnimation />
      <Navbar />
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
