import React from 'react'
import { useScrRev } from '../../hooks/useScrRev' 
import fadeIn from './FadeIn'
import { Sliders } from 'lucide-react'

import { ReactNode } from "react";

const ScrRev = ( children, animation = 'fadeUp', delay = 0, duration = 500 ) => {
    const { ref, isVisible } = useScrRev({ threshold: 0.1 })
    const animationClasses = {
        fadeUp: 'opacity-0 translate-y-10',
        fadeIn: 'opacity-0',
        slideLeft: 'opacity-0 translate-x-10',
        SlideRight: 'opacity-0 -translate-y-10',
        scaleIn: 'opacity-0 scale-95'
    }
    const visibleClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100'
    return (
        <div
        ref={ref}
        className={`transition-all ease-out ${isVisible ? visibleClasses : 'animationClasses[animation]'}`}
        style={{
            transitionDuration: `${duration}ms`,
            transitionDelay: `${delay}ms`
        }}
        >
            {children}
        </div>
    )

    }


export default ScrRev