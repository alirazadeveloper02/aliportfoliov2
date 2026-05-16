import React from 'react'
import { skills } from '../../data/skills'
import { Code2, Cloud, Network, Smartphone, Sparkles } from 'lucide-react'
import {
    SiCss,
    SiExpress,
    SiFigma,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
    SiWordpress,
} from 'react-icons/si'
import FadeIn from '../animation/FadeIn'
const Skills = () => {
    const skillIconMap = {
        HTML5: SiHtml5,
        CSS3: SiCss,
        JavaScript: SiJavascript,
        ReactJS: SiReact,
        NextJS: SiNextdotjs,
        TypeScript: SiTypescript,
        Redux: SiRedux,
        'Tailwind CSS': SiTailwindcss,
        'Node.js': SiNodedotjs,
        'Express.js': SiExpress,
        MongoDB: SiMongodb,
        'REST APIs': Network,
        'Git & GitHub': SiGithub,
        'Responsive Design': Smartphone,
        Figma: SiFigma,
        AWS: Cloud,
        WordPress: SiWordpress,
    }

    const skillCategories = {
        'Frontend Development': [
            skills.find(s => s.name === 'HTML5'),
            skills.find(s => s.name === 'CSS3'),
            skills.find(s => s.name === 'JavaScript'),
            skills.find(s => s.name === 'ReactJS'),
            skills.find(s => s.name === 'NextJS'),
            skills.find(s => s.name === 'TypeScript'),
            skills.find(s => s.name === 'Redux'),
            skills.find(s => s.name === 'Tailwind CSS'),
        ].filter(Boolean),
        'Backend Development & APIs': [
            skills.find(s => s.name === 'Node.js'),
            skills.find(s => s.name === 'Express.js'),
            skills.find(s => s.name === 'MongoDB'),
            skills.find(s => s.name === 'REST APIs'),
        ].filter(Boolean),
        'Tools & Other Technologies': [
            skills.find(s => s.name === 'Git & GitHub'),
            skills.find(s => s.name === 'Responsive Design'),
            skills.find(s => s.name === 'Figma'),
            skills.find(s => s.name === 'AWS'),
            skills.find(s => s.name === 'WordPress'),
        ].filter(Boolean),
    }

    const getproficiencyLevel = (level) => {
        const levels = {
            'Beginner': 65,
            'Intermediate': 75,
            'Advance': 85,
            'Expert': 95,
        }
        return levels[level] || 50
    }

    const getLevelColor = (level) => {
        const colors = {
            'Beginner': 'text-[#8dff69] bg-[#8dff69]/30 border-[#8dff69]/50',
            'Intermediate': 'text-cyan-400 bg-cyan-500/30 border-cyan-500/50',
            'Advance': 'text-emerald-400 bg-emerald-500/30 border-emerald-500/50',
            'Expert': 'text-red-400 bg-red-500/30 border-red-500/50',
        }
        return colors[level] || 'text-gray-400 bg-gray-500/30 border-gray-500/50'
    }
    return (
        <section id="skills" className='relative py-20 bg-black overflow-hidden'>
            <div className="absolute inset-0 overflow-hidden">
                <div className='absolute top-1/4 left-0 w-96 h-96 bg-primary-10 rounded-full blur-3xl  opacity-50' />
                <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-primary-10 rounded-full blur-3xl  opacity-50' />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn delay={100}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-4 rounded-full">
                            <Sparkles className='w-6 h-6 fill-primary text-primary' />
                            <span className=''>My Expertise</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl text-white font-normal mb-4">
                            Skills & Technologies
                        </h2>
                        <p className="text-lg text-white max-w-2xl mx-auto">A comprehensive overview of my technical skills and proficiensy level</p>
                    </div>
                </FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
                        <FadeIn key={category} delay={categoryIndex * 100}>
                            <div className="relative bg-white/10 border border-white/20 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-6 pb-4  border-b border-white/10">
                                    <div className="w-2 h-8 bg-linear-to-b from-primary/30 to-primary/10 rounded-full"></div>
                                    <h3 className="text-xl font-medium text-white">{category}</h3>
                                </div>
                                <div className="space-y-6">
                                    {categorySkills.map((skill, skillIndex) => {
                                        const IconComponent = skillIconMap[skill.name] || Code2
                                        const proficiency = getproficiencyLevel(skill.level)
                                        return (
                                            <div key={skill.id || skillIndex} className="space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 bg-white/10 rounded-lg">
                                                            <IconComponent className="w-6 h-6 text-primary " />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-medium text-white">
                                                                {skill.name}
                                                            </div>
                                                            <div className="text-sm text-white/50">
                                                                {skill.experience}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className={`text-xs p-2 rounded-full border ${getLevelColor(skill.level)}`}>{skill.level}</span>
                                                </div>

                                                <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                                                    <div className="absolute top-0 left-0 h-full bg-linear-to-r from-primary/10 to-primary/70 rounded-full transition-all duration-1000 ease-in-out"
                                                        style={{ width: `${proficiency}%` }}></div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/20 group-hover:from-primary/10 group-hover:to-primary/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                            </div>



                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills