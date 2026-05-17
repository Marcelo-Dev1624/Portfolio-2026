import { useState, useEffect, useCallback, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const COMPACT_DELAY = 2500 // ms of no-scroll before the nav collapses to logo-only

/**
 * Replaces navBehavior.js
 * Handles scrolled state, active section tracking, mobile menu toggle,
 * and auto-collapse behavior (compact mode after scroll inactivity).
 */
export function useNavBehavior() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCompact, setIsCompact] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuClosing, setIsMenuClosing] = useState(false)
  const [activeSection, setActiveSection] = useState(
    () => localStorage.getItem('activeSectionId') || 'Home'
  )
  const location = useLocation()
  const compactTimerRef = useRef(null)

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

  const scheduleCompact = useCallback(() => {
    if (compactTimerRef.current) clearTimeout(compactTimerRef.current)
    compactTimerRef.current = setTimeout(() => setIsCompact(true), COMPACT_DELAY)
  }, [])

  const cancelCompact = useCallback(() => {
    if (compactTimerRef.current) clearTimeout(compactTimerRef.current)
    setIsCompact(false)
  }, [])

  // Called when the user hovers the navbar — keep it expanded
  const handleNavMouseEnter = useCallback(() => cancelCompact(), [cancelCompact])
  // Called when the cursor leaves — restart the inactivity timer
  const handleNavMouseLeave = useCallback(() => scheduleCompact(), [scheduleCompact])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
      updateActiveSection()
      // Any scroll expands the nav and restarts the inactivity countdown
      cancelCompact()
      scheduleCompact()
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    document.addEventListener('DOMContentLoaded', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateActiveSection)
      if (compactTimerRef.current) clearTimeout(compactTimerRef.current)
    }
  }, [updateActiveSection, cancelCompact, scheduleCompact])

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
    isCompact,
    isMenuOpen,
    isMenuClosing,
    activeSection,
    toggleMenu,
    handleMenuItemClick,
    handleNavMouseEnter,
    handleNavMouseLeave,
  }
}
