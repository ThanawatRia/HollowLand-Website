'use client'

import { useEffect, useRef } from 'react'

export default function FairyDustEffect() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createForestDust = (x: number, y: number) => {
      const dust = document.createElement('div')
      dust.className = 'fairy-dust'
      
      // Random position around mouse cursor
      const randomX = x + (Math.random() - 0.5) * 30
      const randomY = y + (Math.random() - 0.5) * 30
      
      dust.style.left = randomX + 'px'
      dust.style.top = randomY + 'px'
      
      // Random size and enhanced glow
      const size = Math.random() * 5 + 2
      dust.style.width = size + 'px'
      dust.style.height = size + 'px'
      
      // Forest magical palette colors
      const colors = [
        '#4CAF50', // Forest green
        '#8BC34A', // Nature green
        '#66BB6A', // Light green
        '#388E3C', // Dark green
        '#8D6E63', // Nature brown
        '#5D4037', // Earth brown
        '#42A5F5'  // Mystic blue
      ]
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      
      dust.style.background = `radial-gradient(circle, ${randomColor}, rgba(76, 175, 80, 0.4), transparent)`
      dust.style.boxShadow = `
        0 0 8px ${randomColor},
        0 0 16px rgba(76, 175, 80, 0.6),
        0 0 24px rgba(139, 195, 74, 0.4)
      `
      
      container.appendChild(dust)
      
      // Remove particle after animation
      setTimeout(() => {
        if (dust.parentNode) {
          dust.parentNode.removeChild(dust)
        }
      }, 4000)
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Create dust less frequently to avoid performance issues
      if (Math.random() < 0.3) {
        createForestDust(e.clientX, e.clientY)
      }
    }

    const handleHollowHover = (element: Element) => {
      let interval: NodeJS.Timeout
      
      const startDust = () => {
        interval = setInterval(() => {
          const rect = element.getBoundingClientRect()
          const x = rect.left + Math.random() * rect.width
          const y = rect.top + Math.random() * rect.height
          createForestDust(x, y)
        }, 150)
      }
      
      const stopDust = () => {
        if (interval) clearInterval(interval)
      }
      
      element.addEventListener('mouseenter', startDust)
      element.addEventListener('mouseleave', stopDust)
    }

    // Add mouse move listener
    document.addEventListener('mousemove', handleMouseMove)
    
    // Add hover listeners to hollow-hover elements
    const hollowElements = document.querySelectorAll('.hollow-hover')
    hollowElements.forEach(handleHollowHover)
    
    // Easter egg: Press 'F' for Forest magic burst
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'f') {
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2
        
        // Create forest magical burst pattern
        for (let ring = 0; ring < 3; ring++) {
          const particlesInRing = 12 + (ring * 6)
          const radius = 80 + (ring * 60)
          
          for (let i = 0; i < particlesInRing; i++) {
            setTimeout(() => {
              const angle = (Math.PI * 2 * i) / particlesInRing
              const x = centerX + Math.cos(angle) * radius
              const y = centerY + Math.sin(angle) * radius
              createForestDust(x, y)
            }, ring * 200 + i * 30)
          }
        }
        
        // Show a brief message
        const message = document.createElement('div')
        message.innerHTML = '🌿 Forest Magic Awakened! 🍃'
        message.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-sriracha);
          font-size: 1.5rem;
          color: #4CAF50;
          text-shadow: 0 0 20px #4CAF50, 0 0 40px #8BC34A;
          z-index: 10000;
          pointer-events: none;
          animation: magicMessage 3s ease-out forwards;
        `
        
        document.body.appendChild(message)
        setTimeout(() => {
          if (message.parentNode) {
            message.parentNode.removeChild(message)
          }
        }, 3000)
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <div id="fairy-dust-container" ref={containerRef} />
      <style jsx global>{`
        @keyframes magicMessage {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
          20% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          80% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
        }
      `}</style>
    </>
  )
} 