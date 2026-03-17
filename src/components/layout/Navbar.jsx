"use client"
import React, { useState, useEffect } from 'react'
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants'
import { useScrSpy, scrollToSection } from '../../hooks/useScrSpy'
import { Code, Menu, X } from 'lucide-react'


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const activeSection = useScrSpy(NAV_LINKS.map(link => link.id))

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
        className={`fixed top-0 left-0 right-0 z-100 w-full h-20 transition-all duration-300 ${isScrolled
          ? 'bg-black/30 backdrop-blur-lg' : 'bg-transparent'}`} style={{ transform: 'translate3d(0, 0, 0)' }}
      >

        <div className="max-w-[1320px]  mx-auto px-5 py-5">
          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">
              <Code className="w-6 h-6 text-primary" />
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='text-2xl font-bold bg-linear-to-r from-primary via-primary/50 to-primary/30 text-transparent bg-clip-text  hover:opacity-80 transition-opacity'
                aria-label='home'
              >
                {PERSONAL_INFO.name}
              </button>
            </div>
            <nav className="items-center gap-7 hidden md:flex">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`test-base font-medium transition-all duration-300 ${activeSection === link.id
                    ? 'text-white'
                    : 'text-whit/70 hover:text-white'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                className='px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white hover:bg-white/90 transition-all duration-300'>
                Download Resume
              </button>
            </div>
            <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-4 text-white hover:text-white/30 transition-colors'
            aria-label='menu'
            aria-expanded={isMenuOpen}>
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden duration-300 transition-all overflow-hidden ${ isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0' }`}>
          <div className='Bg-black/90 backdrop-blur-lg border-t border-white/20 px-5 py-6 space-y-3'>
            {NAV_LINKS.map((link) => (
              <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium duration-300 transition-all 
              ${activeSection === link.id 
              ? 'text-white bg-white/30' 
              : 'text-white/70 hover:text-white hover:bg-white/70'}`}
              >
                {link.label}
              </button>
))}
              <button
              onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
              className="w-full px-6 py-3 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white duration-300 hover:bg-white/70 transition-all mt-2 "
              >
                Download Resume
              </button>
            
           </div> 
        </div>
      </nav>



    </>
  )
}

export default Navbar
