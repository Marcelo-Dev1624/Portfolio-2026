import { useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useNavBehavior } from '../hooks/useNavBehavior'

const NAV_ITEMS = [
  { id: 'Home',     labelKey: 'nav.home',     icon: 'fa-solid fa-house',          path: '/' },
  { id: 'About',    labelKey: 'nav.about',    icon: 'fa-regular fa-address-card', path: '/' },
  { id: 'Projects', labelKey: 'nav.projects', icon: 'fa-solid fa-code',           path: '/' },
  { id: 'Contact',  labelKey: 'nav.contact',  icon: 'fa-regular fa-envelope',     path: '/contact' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const {
    isScrolled,
    isCompact,
    activeSection,
    handleMenuItemClick,
    handleNavMouseEnter,
    handleNavMouseLeave,
  } = useNavBehavior()

  const indicatorRef = useRef(null)
  const menuListRef  = useRef(null)
  const navigate     = useNavigate()
  const location     = useLocation()

  useEffect(() => {
    const activeEl  = menuListRef.current?.querySelector('.menu-item.active')
    const indicator = indicatorRef.current
    const menu      = menuListRef.current
    if (!activeEl || !indicator || !menu) return
    const rect     = activeEl.getBoundingClientRect()
    const menuRect = menu.getBoundingClientRect()
    indicator.style.left  = `${rect.left - menuRect.left}px`
    indicator.style.width = `${rect.width}px`
  }, [activeSection])

  const handleClick = (item) => {
    handleMenuItemClick(item.id)
    if (item.id === 'Contact') {
      navigate('/contact')
      return
    }
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
    <>
      {/* Desktop navbar */}
      <div className="desktop-nav">
        <div
          className={`inner-nav${isScrolled ? ' scrolled' : ''}${isCompact ? ' compact' : ''}`}
          onMouseEnter={handleNavMouseEnter}
          onMouseLeave={handleNavMouseLeave}
        >
          <a className="nav-logo" onClick={() => handleClick(NAV_ITEMS[0])} style={{ cursor: 'pointer' }}>
            <img src="/images/logo_completo_blanco.png" alt="MarceloDev" />
          </a>
          <div className="nav-menu">
            <ul className="menu" ref={menuListRef}>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    className={`menu-item${activeSection === item.id ? ' active' : ''}`}
                    onClick={() => handleClick(item)}
                    style={{ cursor: 'pointer' }}
                  >
                    <i className={`${item.icon} mx-2`} />
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
              <span className="menuActiveIndicator" ref={indicatorRef} />
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <div className="mobile-bottom-nav">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            className={`bottom-nav-item${activeSection === item.id ? ' active' : ''}`}
            onClick={() => handleClick(item)}
          >
            <i className={item.icon} />
            <span>{t(item.labelKey)}</span>
          </a>
        ))}
      </div>
    </>
  )
}