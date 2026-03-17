import React, { useState, useRef } from 'react'
import { projects, categories } from '../../data/projects'
import { Briefcase, Sparkles, Target, Globe, Palette, Zap, Code2, Code, ChevronLeft, ChevronRight } from 'lucide-react'
import ProjectCard from '../ui/ProjectCard'
import FadeIn from '../animation/FadeIn'

const Projects = () => {

  const [activeCategory, setActiveCategory] = useState('All')
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  const filteredProjects = activeCategory === 'All'
    ? projects : projects.filter(project => project.category === activeCategory)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setCurrentIndex(0)
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0, behavior: 'smooth'
      })
    }
  }

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
    const maxIndex = Math.max(0, filteredProjects.length - 3)
    const newIndex = Math.min(currentIndex + 1, maxIndex)
    scrollToIndex(newIndex)
  }

  const prevSlide = () => {
    const newIndex = Math.max(currentIndex - 1, 0)
    scrollToIndex(newIndex)
  }
  const categoryIcons = {
    'All': Target,
    'Frontend': Code,
    'Backend': Code2,
    'Full Stack': Zap,
  }
  return (
    <section id="projects" className='relative py-20 bg-black overflow-hidden'>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <Briefcase className='w-6 h-6 text-primary' />
              <span className="test-lg text-primary font-medium">My Work</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto ">Showcasing my best work and achievments</p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((category) => (
              <button key={category}
                onClick={() => handleCategoryChange(category)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                  ? 'text-white'
                  : 'text-white/50 hover:text-white'
                  }`}>
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${activeCategory === category
                  ? 'bg-primary/10 opacity-100'
                  : 'bg-white/10 border border-white/0 group-hover:bg-white/10'
                  }`} />

                <div className="relative flex items-center gap-2" >{React.createElement(categoryIcons[category], { className: "" })}
                  <span className="text-sm">{category}</span>
                </div>
                {activeCategory === category && (
                  <div className="absolute inset-0 rounded-full bg-primary blur-xl opacity-50 -z-10" />
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="relative">
            <div ref={scrollContainerRef} className="overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar">
              <div className="flex gap-6 pb-4">{filteredProjects.map((project, index) => (
                <div
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] shrink-0 snap-start"
                  key={project.id}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
              </div>
            </div>

            {filteredProjects.length > 3 && (
              <>
                <button onClick={prevSlide} className='flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10' disabled={currentIndex === 0} aria-label='Previoius Projects'>
                  <ChevronLeft className='w-6 h-6 text-primary ' />
                </button>
                <button
                  onClick={nextSlide}
                  className='flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10'
                  disabled={currentIndex >= filteredProjects.length - 3}
                  aria-label='Next Projects'
                >
                  <ChevronRight className='w-6 h-6 text-primary' />
                </button>
              </>
            )}

            {filteredProjects.length > 3 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {Array.from({ length: Math.max(0, filteredProjects.length - 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`transition-all duration-300 rounded-full ${index === currentIndex
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

export default Projects