import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import './i18n' // initialize i18next before any component renders

// Styles — imported individually so Vite's HMR can reload each file in isolation
// Base
import './styles/base/variables.css'
import './styles/base/reset.css'
import './styles/base/typography.css'
import './styles/base/utilities.css'
// Components
import './styles/components/buttons.css'
import './styles/components/navigation.css'
import './styles/components/forms.css'
import './styles/components/lang-switcher.css'
import './styles/components/cube-background.css'
// Layout
import './styles/layout/footer.css'
// Pages
import './styles/pages/home.css'
import './styles/pages/about.css'
import './styles/pages/projects.css'
import './styles/pages/contact.css'
import './styles/pages/project-detailed.css'
// Animations
import './styles/animations/loading.css'
import './styles/animations/keyframes.css'
// Responsive — must come AFTER components/pages so media queries override correctly
import './styles/responsive/mobile.css'
import './styles/responsive/tablet.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)