"use client";
import React, { useState, useRef, useEffect } from 'react'
import { Star, Quote, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import { testinomials } from '../../data/testinomials'
import RadGradBg from '../background/RadGradBg'
import FadeIn from '../animation/FadeIn'
import TestimonialCard from '../ui/TestimonialCard'
import { useScrSpy } from '../../hooks/useScrSpy'

const Testinomials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)
  const activeSection = useScrSpy(['testimonials'])
  const autoSlideIntervalRef = useRef(null)

  const scrollToIndex = (index) => {
    setCurrentIndex(index)
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.offsetWidth / 3
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      })
    }
  }

  const nextSlide = () => {
    const maxIndex = Math.max(0, testinomials.length - 3)
    const newIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1
    scrollToIndex(newIndex)
  }

  const prevSlide = () => {
    const maxIndex = Math.max(0, testinomials.length - 3)
    const newIndex = currentIndex - 1 < 0 ? maxIndex : currentIndex - 1
    scrollToIndex(newIndex)
  }

  // Auto-sliding when testimonials section is in view
  useEffect(() => {
    if (activeSection === 'testimonials') {
      autoSlideIntervalRef.current = setInterval(() => {
        nextSlide()
      }, 4000) // Auto-slide every 4 seconds
    } else {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current)
      }
    }

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current)
      }
    }
  }, [activeSection, currentIndex])

  return (
    <section id="testimonials" className="relative bg-black overflow-hidden py-20">
      <RadGradBg variant="testimonials" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Users className='w-6 h-6 fill-primary text-primary' />
              <span className="text-sm text-primary font-medium">
                Client Testimonials
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-white font-normal mb-4">
              What Clients Say
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Hear from clients and colleagues about their experience working with me
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="relative">
            <div ref={scrollContainerRef} className="overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar">
              <div className="flex gap-6 pb-4">
                {testinomials.map((testimonial, index) => (
                  <div
                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] shrink-0 snap-start"
                    key={testimonial.id}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {testinomials.length > 3 && (
              <>
                <button
                  onClick={prevSlide}
                  className='flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 z-10'
                  aria-label='Previous Testimonials'
                >
                  <ChevronLeft className='w-6 h-6 text-primary' />
                </button>
                <button
                  onClick={nextSlide}
                  className='flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 z-10'
                  aria-label='Next Testimonials'
                >
                  <ChevronRight className='w-6 h-6 text-primary' />
                </button>
              </>
            )}

            {testinomials.length > 3 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {Array.from({ length: Math.max(0, testinomials.length - 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? 'bg-primary w-6 h-2'
                        : 'bg-white/30 w-2 h-2 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default Testinomials