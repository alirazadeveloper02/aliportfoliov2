"use client"
import React, { useState } from 'react'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/src/utils/constants'
import { Mail, MapPin, Phone, Linkedin, Github, Instagram, Twitter, Send, MessageSquare } from 'lucide-react'
import FadeIn from '../animation/FadeIn'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic front-end validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields' })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' })
      return
    }

    setStatus({ type: 'info', message: 'Sending message...' })

    // Prepare data for Web3Forms
    const formBody = new FormData()
    formBody.append('name', formData.name)
    formBody.append('email', formData.email)
    formBody.append('message', formData.message)
    formBody.append('access_key', '5fdfcdbe-5708-4fae-a8d3-a49823068e37') // Your Web3Forms key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formBody,
      })
      const data = await response.json()
      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: 'Error sending message. Please try again later.' })
      }
    } catch (err) {
      console.error(err)
      setStatus({ type: 'error', message: 'Network error. Please try again later.' })
    }

    // Clear message after 5s
    setTimeout(() => setStatus({ type: '', message: '' }), 5000)
  }

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
  }

  return (
    <section id="contact" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 opacity-30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4'>
              <MessageSquare className='w-6 h-6 text-primary' />
              <span className="text-lg tracking-wider uppercase text-primary font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal max-w-xl mx-auto text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <FadeIn delay={100}>
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label htmlFor="name" className='block text-sm font-medium text-white/70 mb-2 ml-2'>Your Name</label>
                  <input
                    type="text"
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='Enter Your Name'
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all duration-300'
                  />
                </div>
                <div>
                  <label htmlFor="email" className='block text-sm font-medium text-white/70 mb-2 ml-2'>Your Email</label>
                  <input
                    type="email"
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder='Enter Your Email'
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all duration-300'
                  />
                </div>
                <div>
                  <label htmlFor="message" className='block text-sm font-medium text-white/70 mb-2 ml-2'>Your Message</label>
                  <textarea
                    id='message'
                    name='message'
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder='Enter Your Message'
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all duration-300 resize-none'
                  />
                </div>

                <button
                  type='submit'
                  className='w-full px-6 py-4 bg-linear-to-r from-primary/10 to-primary/30 text-white font-medium rounded-2xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-4'>
                  <span>Send Message</span>
                  <Send className='w-6 h-6 text-primary group-hover:translate-x-1 transition-transform duration-300' />
                </button>

                {status.message && (
                  <div className={`p-4 rounded-2xl ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/30 text-green-300' : status.type === 'error' ? 'bg-red-500/10 border border-red-500/30 text-red-300' : 'bg-white/10 text-white'}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </FadeIn>

          {/* Contact Info & Social */}
          <FadeIn delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
                <p className='text-white/50 leading-relaxed'>Feel free to reach out via email or follow me on social media.</p>
              </div>

              <div className="space-y-4">
                {/* Email */}
                <div className="group relative bg-white/10 border border-white/20 rounded-2xl p-5 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-linear-to-r from-primary/10 to-primary/20 border border-primary/50 rounded-full">
                      <Mail className='w-6 h-6 text-primary' />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white/50 mb-2">Email Address</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className='text-white hover:text-primary transition-colors font-medium'>
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="group relative bg-white/10 border border-white/20 rounded-2xl p-5 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-linear-to-r from-primary/10 to-primary/20 border border-primary/50 rounded-full">
                      <Phone className='w-6 h-6 text-primary' />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white/50 mb-2">Phone Number</p>
                      <p className="text-white font-medium">{PERSONAL_INFO.phone}</p>
                      
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="group relative bg-white/10 border border-white/20 rounded-2xl p-5 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-linear-to-r from-primary/10 to-primary/20 border border-primary/50 rounded-full">
                      <MapPin className='w-6 h-6 text-primary' />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white/50 mb-2">Location</p>
                      <p className="text-white font-medium">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-white/50 mb-4">Connect with Me</p>
                <div className="flex gap-4">
                  {Object.entries(SOCIAL_LINKS).slice(0, 4).map(([platform, url]) => {
                    const Icon = socialIcons[platform]
                    return Icon ? (
                      <a
                        href={url}
                        key={platform}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-4 bg-white/10 rounded-2xl border border-white/30 hover:bg-white/20 hover:text-white/50 hover:border-primary/50 hover:scale-110 transition-all duration-300'>
                        <Icon className="w-6 h-6 text-white/50 group-hover:text-primary transition-colors" />
                      </a>
                    ) : null
                  })}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default Contact