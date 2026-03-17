import React from 'react'
import { Star, Quote } from 'lucide-react'

const TestimonialCard = ({ testimonial }) => {
  const { name, position, company, message, rating } = testimonial

  return (
    <div className="group relative bg-white/10 border border-white/10 rounded-2xl overflow-hidden hover:bg-primary/10 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <div className="w-full h-full bg-linear-to-br from-primary/20 to-primary/10 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary font-bold text-2xl">
                {name.charAt(0)}
              </span>
            </div>
            <Quote className="w-8 h-8 text-primary/60 mx-auto" />
          </div>
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-primary text-sm font-medium mb-1">
            {position}
          </p>
          <p className="text-white/60 text-sm mb-3">
            {company}
          </p>
          <p className="text-white/80 text-sm leading-relaxed line-clamp-4">
            "{message}"
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard