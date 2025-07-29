'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const heroHeight = hero.offsetHeight
      
      // Only apply parallax when hero section is visible
      if (scrolled < heroHeight) {
        const parallaxSpeed = 0.3
        
        // Parallax for forest elements
        const forestElements = hero.querySelectorAll('.forest-element')
        forestElements.forEach((element, index) => {
          const speed = 0.1 + (index * 0.03)
          ;(element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Banner Background */}
      <div className="hero-banner">
        <Image 
          src="/banner.png" 
          alt="Forest Banner" 
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center center',
            filter: 'brightness(0.8) saturate(1.1)'
          }}
          priority
        />
        <div className="banner-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="floating-logo">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={1000} 
            height={1000}
            priority
            style={{
              filter: 'drop-shadow(0 0 25px rgba(76, 175, 80, 0.9)) drop-shadow(0 0 50px rgba(139, 195, 74, 0.7))',
              animation: 'logoFloat 3s ease-in-out infinite',
              objectFit: 'contain',
              width: '100%',
              height: '300px',
              maxWidth: '600px'
            }}
          />
        </div>
        <h1 className="hero-title hollow-glow">Welcome to Hollow Land</h1>
        <p className="hero-subtitle">ดินแดนมหัศจรรย์แห่งป่าลึกลับ FiveM Roleplay</p>
        <p className="hero-description">
          ก้าวเข้าสู่โลกแห่งป่าเวทมนตร์ที่เต็มไปด้วยความลึกลับและการผจญภัย 
          สร้างตำนานของคุณเองในดินแดนป่าใหญ่ที่งดงามและลึกลับ
          พบกับประสบการณ์ Roleplay ที่เชื่อมโยงกับธรรมชาติ
        </p>
        <div className="hero-buttons" style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          marginTop: '1rem',
          width: '100%',
          maxWidth: '500px'
        }}>
          <button 
            className="cta-button hollow-hover" 
            onClick={() => scrollToSection('story')}
          >
            เริ่มต้นการผจญภัย 🌿
          </button>
          <a 
            href="https://discord.gg/EJnTzJKPH6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button hollow-hover"
            style={{ 
              textDecoration: 'none',
              background: 'linear-gradient(45deg, var(--forest-green), var(--nature-brown))',
              color: 'white',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            เข้าร่วม Discord 💬
          </a>
        </div>
      </div>
      
      {/* Forest Elements */}
      <div className="hero-background">
        <div className="forest-element floating-leaf leaf-1">🍃</div>
        <div className="forest-element floating-leaf leaf-2">🍀</div>
        <div className="forest-element floating-leaf leaf-3">🌿</div>
        <div className="forest-element magical-particle particle-1"></div>
        <div className="forest-element magical-particle particle-2"></div>
        <div className="forest-element magical-particle particle-3"></div>
      </div>
    </section>
  )
} 