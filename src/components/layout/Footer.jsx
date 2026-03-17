import React from 'react'
import { Mail, MapPin, Phone, Copyright, Heart, Github, Linkedin, Instagram, Twitter } from 'lucide-react'
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../utils/constants'
import { scrollToSection } from '@/src/hooks/useScrSpy'
import FadeIn from '../animation/FadeIn'

const Footer = () => {

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
  };

  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10"> 
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 opacity-30 rounded-full blur-3xl" />
      </div>

      <div className="relative py-14 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          <FadeIn delay={0}>
            <div className=" ">
              <h3 className="text-3xl font-bold bg-linear-to-r from-primary/70 via-primary to-primary/80 bg-clip-text text-transparent mb-4">{PERSONAL_INFO.name}</h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">{PERSONAL_INFO.tagline}</p>
              <div className="space-y-3">
                <a href={`mailto:${PERSONAL_INFO.email}`}
                 className="group flex items-center gap-3 p-3 bg-white/10 border border-white/30 rounded-2xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <Mail className='w-6 h-6 text-primary' />
                  </div>
                  <span className='text-white/70 text-sm group-hover:text-white transform-colors'>
                    {PERSONAL_INFO.email}
                  </span>
                </a>
                <div className="flex items-center gap-3 p-3 bg-white/10 border border-white/30 rounded-xl ">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <span className='text-white/70 text-sm group-hover:text-white transform-colors'>
                    {PERSONAL_INFO.location}
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 border border-white/30 rounded-xl ">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <span className='text-white/70 text-sm group-hover:text-white transform-colors'>
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="">
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button onClick={() => scrollToSection(link.id)} className='group flex items-center gap-2 text-white/50 hover:text-primary transition-all duration-300 '>
                      <div className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-primary transition-all duration-300" />
                      <span className='text-sm'>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="">
              <h4 className="text-white text-lg font-semibold mb-6">Connect with Me</h4>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, aliquid?</p>
              <div className="flex flex-wrap gap-3">
                {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                  const Icon = socialIcons[platform]
                  return Icon ? (
                    <a href={url} key={platform} target='_blank' className='group relative p-4 bg-white/10 rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 ' rel='noopener norepeffer' aria-label={`Connect on${platform}`}>
                      <Icon className="w-6 h-6 text-primary group-hover:text-white/50 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/30 group-hover:from-primary/20 group-hover:to-primary/40 rounded-xl transition-all duration-300 pointer-events-none " />
                    </a>
                  ) : null
                })}
              </div>
            </div>
          </FadeIn>

        </div>

        <FadeIn delay={300}>
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/50 flex gap-2 "><Copyright className='w-6 h-6 text-primary' /> {new Date().getFullYear()} {PERSONAL_INFO.name}. All Right Reserved</p>
              <p className="flex items-center gap-2 text-white/50 ">Built with <Heart className="w-6 h-6 text-primary" /> using Next.js with Tailwind CSS</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}

export default Footer

// import React from 'react'

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer