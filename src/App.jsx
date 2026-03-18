import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectCOC from './pages/projects/ProjectCOC'
import ProjectAQL from './pages/projects/ProjectAQL'
import ProjectCalorieCalculator from './pages/projects/ProjectCalorieCalculator'
import ProjectAestheticClock from './pages/projects/ProjectAestheticClock'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/coc" element={<ProjectCOC />} />
      <Route path="/projects/aql" element={<ProjectAQL />} />
      <Route path="/projects/calorie-calculator" element={<ProjectCalorieCalculator />} />
      <Route path="/projects/aesthetic-clock" element={<ProjectAestheticClock />} />
    </Routes>
  )
}
