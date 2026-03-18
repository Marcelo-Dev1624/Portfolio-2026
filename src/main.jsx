import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'  // <- agregar
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />  {/* <- agregar */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)