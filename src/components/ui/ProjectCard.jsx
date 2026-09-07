import React from 'react'
import { ExternalLink, Github, } from 'lucide-react'

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, demoUrl, githubUrl } = project


  return (
    <div className="group relative bg-white/10 border border-white/10 rounded-2xl overflow-hidden hover:bg-primary1/10 transition-all divide-gray-300">
      <div className="relative h-64 overflow-hidden">
        <img src={image} className='w-full h-full object-cover transition-transform duration-600 group-hover:scale-110 ' alt={title} />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 " />
        <div className="absolute bottom-4 right-4 flex items-center gap-3">
          {demoUrl && (
            <a href={demoUrl} target='_blank' rel='noopener noreferrer' title='View Demo' className='p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-90'>
              <ExternalLink className='w-6 h-6 text-primary' />
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target='_blank' rel='noopener noreferrer' title='View Code' className='p-3 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110'>
              <Github className='w-6 h-6 text-primary' />
            </a>
          )}
        </div>
        <div className="absolute top-4 left-4`">
          <span className="px-3 py-2 text-xs font-medium text-white bg-black/50 backdrop-blur-md border border-white/30 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary/50 transition-colors duration-300  ">
            {title}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 ">
          {technologies.map((tech, index) => (
            <span className="px-3 py-2 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg hover:bg-primary/20 transition-all duration-300" key={index}>
              {tech}
            </span>
          ))}
        </div>



      </div>
    </div>
  )
}

export default ProjectCard