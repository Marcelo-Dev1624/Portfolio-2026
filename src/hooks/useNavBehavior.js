import { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Replaces navBehavior.js
 * Handles scrolled state, active section tracking, and mobile menu toggle.
 */
export function useNavBehavior() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuClosing, setIsMenuClosing] = useState(false)
  const [activeSection, setActiveSection] = useState(
    () => localStorage.getItem('activeSectionId') || 'Home'
  )
  const location = useLocation()

  const updateActiveSection = useCallback(() => {
    const sections = document.querySelectorAll('.section')
    const currentScroll = window.scrollY
    sections.forEach((section) => {
      const top = section.offsetTop - window.innerHeight / 2
      const bottom = section.offsetTop + section.offsetHeight - window.innerHeight / 2
      if (currentScroll >= top && currentScroll < bottom) {
        setActiveSection(section.id)
        localStorage.setItem('activeSectionId', section.id)
      }
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
      updateActiveSection()
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', updateActiveSection)
    document.addEventListener('DOMContentLoaded', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [updateActiveSection])

  // Reset active section when route changes
  useEffect(() => {
    if (location.pathname === '/contact') setActiveSection('Contact')
    else if (location.pathname === '/projects') setActiveSection('Projects')
    else if (location.pathname === '/') {
      const stored = localStorage.getItem('activeSectionId')
      setActiveSection(stored || 'Home')
    }
  }, [location.pathname])

  const handleMenuItemClick = useCallback((sectionId) => {
    setActiveSection(sectionId)
    localStorage.setItem('activeSectionId', sectionId)
    // Close mobile menu
    setIsMenuClosing(true)
    setIsMenuOpen(false)
    setTimeout(() => setIsMenuClosing(false), 600)
  }, [])

  const toggleMenu = useCallback(() => {
    if (!isMenuOpen) {
      setIsMenuOpen(true)
      setIsMenuClosing(false)
    } else {
      setIsMenuClosing(true)
      setIsMenuOpen(false)
      setTimeout(() => setIsMenuClosing(false), 600)
    }
  }, [isMenuOpen])

  return {
    isScrolled,
    isMenuOpen,
    isMenuClosing,
    activeSection,
    toggleMenu,
    handleMenuItemClick,
  }
}
