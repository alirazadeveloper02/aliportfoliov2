"use client"; // <-- Must be first line in the file
import React, { useState } from 'react'
import { ChevronDown, Star } from 'lucide-react'
import { PERSONAL_INFO, HOME_STATS } from '../../utils/constants'
import { scrollToSection } from '../../hooks/useScrSpy'
import RadGradBg from '../background/RadGradBg'
import FadeIn from '../animation/FadeIn'
import { SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss, SiMongodb, SiTypescript, SiPython } from 'react-icons/si'


const Hero = () => {
  return (
    <section id="home" className='relative min-h-screen bg-black flex items-center overflow-hidden'>
      <RadGradBg variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
          {/* Left Column */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-[18px] py-[11px] mb-4 bg-linear-to-r from-primary/30 via-primary/20 to-primary/30 border border-primary/30 rounded-full">
                <Star className='w-4 h-4 fill-white text-white' />
                <span className='text-xs md:text-sm tracking-[2px]  text-white '>
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-normal mb-3 leading-tight'>
                Next.JS Developer Portfolio
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className='text-lg text-white/90 max-w-[550px] mb-6 '>
                Building modern web applications with React, Next.js, and Tailwind CSS. Explore my projects and skills in full stack development.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection('contact')}
                className='inline-flex items-center gap-1 mb-8 group'>
                <div className="relative z-10 bg-white text-black rounded-[17px] px-[20px] py-[10px] text-base font-medium border border-white hover:scale-95">
                  Get in Touch
                </div>
              </button>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-full">
                {HOME_STATS.map((stat, index) => (
                  <div key={index} className="text-left border-r border-white/70 pr-10 last:border-r-0">
                    <p className="text-lg mb-3 text-white leading-snug">
                      {stat.label}
                    </p>
                    <div className="text-xl font-normal text-primary mb-[8px] font-mono">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={200}>
            <div className='relative'>
              <div className='relative overflow-hidden rounded-2xl max-w-[500px] ml-auto group'>
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className='absolute inset-[-2px] bg-linear-to-r from-primary/30 via-primary/30 to-primary/30 animate-spin-slow rounded-2xl'></div>
                </div>
                <div className="relative rounded-2xl overflow-hidden m-[2px] h-[calc(100%-2px)]">
                  <img src="/images/my-image.jpeg" alt="Developer" className='w-full h-full object-cover' />
                </div>
                <div className="absolute bottom-5 left-5 z-20">
                  <FadeIn delay={500}>
                    <div className="flex items-center gap-4 bg-black/50 backdrop-blur-sm px-6 py-3 border border-white/30 rounded-full">
                      <div className="w-6 h-6 flex items-center justify-center hover:scale-100 transition-transform duration-300">
                        <SiReact className='w-full h-full text-primary' />
                      </div>
                      <div className="w-6 h-6 items-center justify-center hover:scale-100 transition-transform duration-300">
                        <SiMongodb className='w-full h-full text-primary' />
                      </div>
                      <div className="w-6 h-6 items-center justify-center hover:scale-100 transition-transform duration-300">
                        <SiNodedotjs className='w-full h-full text-primary' />
                      </div>
                      <div className="w-6 h-6 items-center justify-center hover:scale-100 transition-transform duration-300">
                        <SiExpress className='w-full h-full text-primary' />
                      </div>
                      <div className="w-6 h-6 items-center justify-center hover:scale-100 transition-transform duration-300">
                        <SiTailwindcss className='w-full h-full text-primary' />
                      </div>
                      <div className="w-6 h-6 items-center justify-center hover:scale-100 transition-transform duration-300">
                        <SiTypescript className='w-full h-full text-primary' />
                      </div>
                      <div className="w-6 h-6 items-center justify-center hover:scale-100 transition-transform duration-300">
                        <SiPython className='w-full h-full text-primary' />
                      </div>

                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <button onClick={() => scrollToSection('about')}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
        <ChevronDown className='w-9 h-9 text-primary' />
      </button>

    </section >
  )
}

export default Hero