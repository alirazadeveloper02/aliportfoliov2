"use client"
import React from 'react'
import Navbar from '@/src/components/layout/Navbar'
import Hero from '@/src/components/sections/Hero'
import About from '@/src/components/sections/About'
import Skills from '@/src/components/sections/Skills'
import Projects from '@/src/components/sections/Projects'
import Testinomials from '@/src/components/sections/Testinomials'
import Services from '@/src/components/sections/Services'
import Contact from '@/src/components/sections/Contact'
import Footer from '@/src/components/layout/Footer'

const page = () => {
  return (
    <div className="min-h-screen bg-black ">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testinomials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default page