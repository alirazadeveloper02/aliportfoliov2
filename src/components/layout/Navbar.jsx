"use client"
import React, { useState, useEffect } from 'react'
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants'
import { useScrSpy, scrollToSection } from '../../hooks/useScrSpy'
import { Code, Menu, X } from 'lucide-react'


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useScrSpy(NAV_LINKS.map(link => link.id))
  const PRIMARY_LINK_IDS = ['home', 'about', 'projects', 'services', 'contact']
  const navLinks = NAV_LINKS.filter(link => PRIMARY_LINK_IDS.includes(link.id))

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full h-20 transition-all duration-300 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-sm`} style={{ transform: 'translate3d(0, 0, 0)' }}
      >

        <div className="max-w-[1280px] mx-auto px-5 ">
          <div className="flex items-center justify-between h-20">

            <div className="flex items-center gap-4">
              <button
                onClick={() => handleNavClick('home')}
                aria-label="home"
                className="flex items-center gap-3 group"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-br from-primary to-primary/70 shadow-md">
                  <Code className="w-5 h-5  text-white" />
                </span>
                <div className="hidden sm:flex flex-col leading-tight text-left">
                  <span className="text-2xl font-bold text-white">{PERSONAL_INFO.name}</span>
                  <span className="text-xs text-white/60">{PERSONAL_INFO.title}</span>
                </div>
              </button>
            </div>
            <nav className="items-center gap-7 hidden md:flex">
              {navLinks.map((link) => {
                if (link.id === 'about') {
                  return (
                    <div key={link.id} className="relative group">
                      <button
                        onClick={() => handleNavClick('about')}
                        className={`text-base md:text-lg font-medium transition-all duration-200 ${activeSection === 'about' ? 'text-primary' : 'text-white/70 hover:text-white/90 cursor-pointer'}`}>
                        {link.label}
                      </button>
                    </div>
                  )
                }
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-base md:text-lg font-medium transition-all duration-200 ${activeSection === link.id
                      ? 'text-primary' : 'text-white/70 hover:text-white/90 cursor-pointer'}`}
                  >
                    {link.label}
                  </button>
                )
              })}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('contact')}
                className='px-5 py-2 bg-primary text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 '>
                Get in Touch
              </button>
              <button
                onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                className='px-4 py-2 text-primary border border-primary/70 rounded-lg bg-transparent transition-all duration-200 hover:scale-95'>
                Download Resume
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden p-3 text-white/90 hover:text-white transition-colors rounded-md bg-white/5'
              aria-label='menu'
              aria-expanded={isMenuOpen}>
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden duration-300 transition-all overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className='bg-black/95 backdrop-blur-xl border-t border-white/10 px-5 py-4 space-y-3'>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium duration-200 transition-all ${activeSection === link.id
                    ? 'text-white bg-primary' : 'text-white/80 hover:text-white/95 hover:bg-white/5'}`}
              >
                {link.label}
              </button>
            ))}
            {/* ensure Skills is available on mobile */}
            

          </div>
        </div>
      </nav>



    </>
  )
}

export default Navbar
