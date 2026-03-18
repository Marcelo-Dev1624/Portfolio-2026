import { useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useNavBehavior } from '../hooks/useNavBehavior'

const NAV_ITEMS = [
  { id: 'Home',     label: 'Home',     icon: 'fa-solid fa-house',           path: '/' },
  { id: 'About',    label: 'About',    icon: 'fa-regular fa-address-card',   path: '/' },
  { id: 'Projects', label: 'Projects', icon: 'fa-solid fa-code',             path: '/' },
  { id: 'Contact',  label: 'Contact',  icon: 'fa-regular fa-envelope',       path: '/contact' },
]

export default function Navbar() {
  const { isScrolled, isMenuOpen, isMenuClosing, activeSection, toggleMenu, handleMenuItemClick } =
    useNavBehavior()

  const indicatorRef = useRef(null)
  const menuListRef  = useRef(null)
  const navigate     = useNavigate()
  const location     = useLocation()

  // Slide the active indicator under the correct menu item
  useEffect(() => {
    const activeEl  = menuListRef.current?.querySelector('.menu-item.active')
    const indicator = indicatorRef.current
    const menu      = menuListRef.current
    if (!activeEl || !indicator || !menu) return
    const rect     = activeEl.getBoundingClientRect()
    const menuRect = menu.getBoundingClientRect()
    indicator.style.left  = `${rect.left - menuRect.left}px`
    indicator.style.width = `${rect.width}px`
  }, [activeSection, isMenuOpen])

  const handleClick = (item) => {
    handleMenuItemClick(item.id)

    if (item.id === 'Contact') {
      navigate('/contact')
      return
    }

    // For all main-page sections: go to / then scroll
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollTo(item.id), 120)
    } else {
      scrollTo(item.id)
    }
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav>
      <div className={`inner-nav${isScrolled ? ' scrolled' : ''}`}>

        {/* Logo */}
        <a className="nav-logo" onClick={() => handleClick(NAV_ITEMS[0])} style={{ cursor: 'pointer' }}>
          <img src="/images/logo_completo_blanco.png" alt="MarceloDev" />
        </a>

        {/* Hamburger */}
        <button
          id="navToggler"
          className={`nav-toggler${isMenuOpen ? ' opened' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Menu */}
        <div className={`nav-menu${isMenuOpen ? ' opened' : ''}${isMenuClosing ? ' closing' : ''}`}>
          <ul className="menu" ref={menuListRef}>
            {NAV_ITEMS.map((item, i) => (
              <li key={item.id} className={isMenuOpen ? 'show' : ''} style={{ transitionDelay: `${(i + 1) * 0.1}s` }}>
                <a
                  className={`menu-item${activeSection === item.id ? ' active' : ''}`}
                  data-section-id={item.id}
                  onClick={() => handleClick(item)}
                  style={{ cursor: 'pointer' }}
                >
                  <i className={`${item.icon} mx-2`} />
                  {item.label}
                </a>
              </li>
            ))}
            <span className="menuActiveIndicator" ref={indicatorRef} />
          </ul>
        </div>

      </div>
    </nav>
  )
}
