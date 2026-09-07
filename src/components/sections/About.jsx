import React, { useState } from 'react'
import RadGradBg from '../background/RadGradBg'
import { Download, Code2, Sparkles, Code } from 'lucide-react'
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiExpress, SiTailwindcss, SiTypescript, SiPostgresql, SiNodedotjs, SiMongodb, SiPython } from 'react-icons/si'
import { PERSONAL_INFO, ABOUT_STATS } from '../../utils/constants'
import FadeIn from '../animation/FadeIn'

const About = () => {
  const skills = [
    { name: 'HTML5', icon: SiHtml5, color: '#61dafb' },
    { name: 'CSS3', icon: SiCss, color: '#47a248' },
    { name: 'JavaScript', icon: SiJavascript, color: '#0a0a0a' },
    { name: 'React.js', icon: SiReact, color: '#61dafb' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#3178c6' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#61dafb' },
    { name: 'Express.js', icon: SiExpress, color: '#47a248' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#0a0a0a' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#3178c6' },
    { name: 'Python', icon: SiPython, color: '#3178c6' },
  ]
  return (
    <>
      <section id="about" className="relative bg-black overflow-hidden py-10">
        <RadGradBg variant="about" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Left Column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <FadeIn delay={50}>
                  <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 bg-primary/10 rounder-full w-fit">
                    <Code2 className='w-6 h-6 text-primary fill-primary' />
                    <span className="text-sm text-primary font-medium">
                      Full Stack Developer
                    </span>
                    <Sparkles className='w-6 h-6 text-primary fill-primary' />
                  </div>
                </FadeIn>
                <FadeIn delay={100}>
                  <h2 className="text-4xl lg:text-5xl font-normal leading-tight text-white">
                    Crafting Digital Experience that Matter
                  </h2>
                </FadeIn>
                <FadeIn delay={200}>
                  <div className="flex flex-col gap-4">
                    {PERSONAL_INFO.bio.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-base text-white/70 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={300}>
                <div className="grid grid-cols-3 gap-8">
                  {ABOUT_STATS.map((stat, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-4 top-0 w-2 h-full bg-linear-to-b from-primary via-primary/50 to-primary/30 rounded-full"></div>
                      <div className="text-3xl font-normal mb-2 font-mono text-white">
                        {stat.value}
                      </div>
                      <p className='text-sm text-white/70 leading-snug'>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            {/* Right Column */}
            <FadeIn delay={200}>
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2 relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relattive bg-white/10 border border-white/20 rounded-2xl p-6 transition-all duration-300">
                    <div className="flex items-start gap-4 ">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Code className='w-6 h-6 fill-primary text-primary' />
                      </div>
                      <div className="flex-1">
                        <h3 className='text-lg font-semibold text-white mb-2'>Expertise</h3>
                        <p className="text-sm text-white/70 leading-relaxed">
                          I specialize in building scalable web applications using modern technologies. My expertise includes:
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relattive bg-white/10 border border-white/20 rounded-2xl p-6 transition-all duration-300">
                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                      <Sparkles className='w-6 h-6 fill-primary text-primary' />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">Clean Code</h3>
                    <p className="text-sm text-white/70 leading-relaxed">Writing maintainable and well-structured code.</p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relattive bg-white/10 border border-white/20 rounded-2xl p-6 transition-all duration-300">
                    <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4">
                      <Download className='w-6 h-6 fill-primary text-primary' />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">Performance</h3>
                    <p className="text-sm text-white/70 leading-relaxed">Optimizing web applications for speed and efficiency.</p>
                  </div>
                </div>
                <div className="col-span-2 relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relattive bg-white/10 border border-white/20 rounded-2xl p-6 transition-all duration-300">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div className="">
                        <div className="text-2xl font-bold text-primary mb-2">100%</div>
                        <div className="text-xs text-white/70">Client Satisfaction</div>
                      </div>
                      <div className="">
                        <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-xs text-white/70">Support Available</div>
                      </div>
                      <div className="">
                        <div className="text-2xl font-bold text-primary mb-2">Fast</div>
                        <div className="text-xs text-white/70">Delivery Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={400}>
            <div className="flex flex-col gap-8 items-center">
              <div className="text-center">
                <h2 className="text-4xl lg:text-5xl font-normal leading-tight text-white">
                  Tech Stack & Expertise
                </h2>
                <p className="text-sm text-white/70">
                  I have experience with a wide range of technologies and tools, including:
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-3xl">
                {skills.map((skill, index) => (
                  <div key={index} className="group relative bg-white/10 hover:bg-white/20 border border-white/10  hover:border-primary/50 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 h-30 transition-all duration-300 hover:scale-105">
                    <skill.icon className='text-3xl text-primary' />
                    <div className="text-sm text-white/70 font-medium text-center">
                      {skill.name}
                    </div>
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/20  group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </>
  )
}

export default About
