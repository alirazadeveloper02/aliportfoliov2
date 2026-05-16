import React from 'react'
const RadGradBg = ({ variant = 'hero', gradients = [] }) => {
  const variants = {
    hero:[
      {
        position: 'top-[8%] left-[8%] -translate-x-1/2 -translate-y-1/2',
        size: 'w-[980px] h-[980px]',
        colors: [
          { color:"rgba(141, 255, 105, 0.00)", stop: '0%' },
          { color:"rgba(141, 255, 105, 0.20)", stop: '28%' },
          { color:"rgba(141, 255, 105, 0.40)", stop: '42%' },
          { color:"rgba(141, 255, 105, 0.16)", stop: '58%' },
          { color:"rgba(141, 255, 105, 0.00)", stop: '100%' }
        ],
        blur : '18px',
        opacity: '0.58',
        animation: 'orbFloat 22s ease-in-out infinite alternate',
        tilt: '-18deg',
        zIndex: 1,
      },
      {
        position: 'top-[18%] right-[4%] translate-x-1/4 -translate-y-1/3',
        size: 'w-[760px] h-[760px]',
        colors: [
          { color:"rgba(255, 255, 255, 0.00)", stop: '0%' },
          { color:"rgba(141, 255, 105, 0.12)", stop: '24%' },
          { color:"rgba(141, 255, 105, 0.32)", stop: '40%' },
          { color:"rgba(141, 255, 105, 0.10)", stop: '58%' },
          { color:"rgba(255, 255, 255, 0.00)", stop: '100%' }
        ],
        blur : '28px',
        opacity: '0.42',
        animation: 'orbDrift 28s ease-in-out infinite alternate',
        tilt: '32deg',
        zIndex: 0,
      },
      {
        position: 'bottom-[10%] left-[52%] -translate-x-1/2 translate-y-1/3',
        size: 'w-[860px] h-[860px]',
        colors: [
          { color:"rgba(141, 255, 105, 0.00)", stop: '0%' },
          { color:"rgba(141, 255, 105, 0.14)", stop: '25%' },
          { color:"rgba(141, 255, 105, 0.34)", stop: '42%' },
          { color:"rgba(141, 255, 105, 0.12)", stop: '60%' },
          { color:"rgba(141, 255, 105, 0.00)", stop: '100%' }
        ],
        blur : '22px',
        opacity: '0.36',
        animation: 'orbFloatReverse 30s ease-in-out infinite alternate',
        tilt: '-28deg',
        zIndex: 0,
      },
      {
        position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        size: 'w-[1200px] h-[1200px]',
        colors: [
          { color:"rgba(141, 255, 105, 0.00)", stop: '0%' },
          { color:"rgba(12, 12, 12, 0.00)", stop: '55%' },
          { color:"rgba(0, 0, 0, 0.72)", stop: '88%' },
          { color:"rgba(0, 0, 0, 0.88)", stop: '100%' }
        ],
        blur : '0px',
        opacity: '1',
        animation: 'none',
        tilt: '0deg',
        zIndex: 2,
      },
    ],
    about:[
      {
        position: 'bottom-0 left-[75%]',
        size: 'w-[700px] h-[700px]',
        colors: [
          { color:"rgba(141, 255, 105, 0.25)", stop: '100%' },
          { color:"rgba(141, 255, 105, 0.45)", stop: '100%' },
          { color:"rgba(141, 255, 105, 0.5)", stop: '100%' },
          { color:"rgba(141, 255, 105, 0.45)", stop: '100%' },
          { color:"rgba(141, 255, 105, 0.25)", stop: '100%' }
        ],
        blur : '0px',
        opacity: '0.5'
      }
    ]
  }

  const activeGradients = variant === 'custom' ? gradients : variants[variant] || variants.hero
  const generateGradient = (colors) => {
    const colorStops = colors.map(( { color, stop }) => `${color} ${stop}`).join(', ')
    return `radial-gradient(circle at center, transparent 0%, transparent 30%, ${colorStops}, transparent 60%, transparent 100%)`
  }
  return (
    <>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {variant === 'hero' && (
          <>
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 50% 35%, rgba(141,255,150,0.12), rgba(141,255,150,0.05) 18%, rgba(0,0,0,0) 45%), linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0))',
              }}
            />
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(141,255,150,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(141,255,150,0.10) 1px, transparent 1px)',
                backgroundSize: '72px 72px',
                transform: 'perspective(1400px) rotateX(72deg) translateY(24%) scale(1.25)',
                transformOrigin: 'center bottom',
                maskImage:
                  'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.8) 18%, rgba(0,0,0,1) 48%, rgba(0,0,0,0.2) 88%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.8) 18%, rgba(0,0,0,1) 48%, rgba(0,0,0,0.2) 88%, transparent 100%)',
              }}
            />
          </>
        )}
        {activeGradients.map((gradient, index) => {
          const animation = gradient.animation || "gradientFloat 25s ease-in-out infinite alternate";

          return (
            <div
              key={index}
              className={`absolute ${gradient.position} ${gradient.size}`}
              style={{
                background: generateGradient(gradient.colors),
                filter: `blur(${gradient.blur})`,
                opacity: gradient.opacity,
                animation,
                borderRadius: '9999px',
                mixBlendMode: index === 3 ? 'normal' : 'screen',
                boxShadow: index === 3 ? 'none' : '0 0 140px rgba(141,255,150,0.12)',
                zIndex: gradient.zIndex ?? 0,
                willChange: "transform, opacity",
              }}
            />
          )
        })}
      </div>
    </>
  )
}

export default RadGradBg