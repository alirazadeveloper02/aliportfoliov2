import React from 'react'
import { services } from '@/src/data/services'
import * as Icons from 'lucide-react'
import FadeIn from '../animation/FadeIn'

const Services = () => {
  return (
    <section id="services" className="relative py-10 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
      </div>
      <div className="" style={{
        backgroundimage: ` 
        linear-gradient(to right, white 1px, transparent 1px ),
        linear-gradient(to bottom, white 1px, transparent 1px )`
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-10">
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4'>
              <Icons.Wrench className='w-6 h-6 text-primary' />
              <span className="test-lg tracking-wider uppercase text-primary font-medium">What I Offer</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal max-w-xl mx-auto text-white mb-4">
              Built for Innovation, Design for Result
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda, velit impedit dolor quis aliquam hic modi autem tempore doloribus!
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {services.slice(0, 2).map((services, index) => {
            const IconComponent = Icons[services.icon] || Icons.Code2
            return (
              <FadeIn key={services.id}
                delay={100 + index * 100}>
                <div className="group relative bg-white/10 border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 h-full min-h-[280px] flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300 ">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                      {services.title}
                    </h3>
                    <p className='text-white/50 leading-relaxed'>
                      {services.description}
                    </p>

                  </div>
                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/10 group-hover:from-primary/10 group-hover:to-primary/30 rounded-3xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {services.slice(2).map((services, index) => {
            const IconComponent = Icons[services.icon] || Icons.Code2
            return (
              <FadeIn key={services.id} delay={300 + index * 100} >
                <div className="group relative bg-white/10 border border-white/10 rounded-2xl p-6 hover:border-primary transition-all duration-300 h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/30 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary/30 transition-colors duration-300">
                      {services.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
                      {services.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/30 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300">

                  </div>
                </div>
              </FadeIn>)
          })}
        </div>
      </div>
    </section>
  )
}

export default Services