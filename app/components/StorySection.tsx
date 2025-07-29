'use client'

import { useState, useEffect } from 'react'

export default function StorySection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const storySlides = [
    {
      image: '/Story/3.png',
      title: 'The Story of Hollow Land',
      description: 'A magical realm where fairies and humans coexist in harmony'
    },
    {
      image: '/Story/4.png',
      title: 'Ancient Market Square',
      description: 'Where merchants trade magical artifacts and fairy crafts'
    },
    {
      image: '/Story/5.png',
      title: 'Mystical Gardens',
      description: 'Lush gardens where fairies tend to enchanted flowers'
    },
    {
      image: '/Story/6.png',
      title: 'Fairy Academy',
      description: 'Where young fairies learn the ancient arts of magic'
    },
    {
      image: '/Story/7.png',
      title: 'Crystal Palace',
      description: 'The grand palace where the fairy council meets'
    },
    {
      image: '/Story/8.png',
      title: 'Moonlit Plaza',
      description: 'Where celebrations and magical festivals take place'
    }
  ]

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % storySlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, storySlides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % storySlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + storySlides.length) % storySlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section id="story" className="story-section">
      <div className="container">
        <h2 className="section-title fairy-glow">The Enchanted Tale of Hollow Land</h2>
        <p className="section-subtitle">Journey through the mystical chapters of our fairy realm</p>
        
        {/* Story Carousel */}
        <div className="story-carousel">
          <div className="carousel-container">
            {/* Current Slide */}
            <div className="carousel-slide active">
              <div className="slide-image">
                <img 
                  src={storySlides[currentSlide].image}
                  alt={storySlides[currentSlide].title}
                  className="slide-img"
                  onLoad={() => console.log(`Image loaded: ${storySlides[currentSlide].image}`)}
                  onError={(e) => {
                    console.error(`Image failed to load: ${storySlides[currentSlide].image}`);
                    e.currentTarget.style.backgroundColor = '#2a2a2a';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.display = 'flex';
                    e.currentTarget.style.alignItems = 'center';
                    e.currentTarget.style.justifyContent = 'center';
                    e.currentTarget.innerHTML = `<div style="text-align: center;"><h3>${storySlides[currentSlide].title}</h3><p>${storySlides[currentSlide].description}</p></div>`;
                  }}
                />
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button className="carousel-nav prev" onClick={prevSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button className="carousel-nav next" onClick={nextSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="carousel-dots">
              {storySlides.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Story Call to Action */}
        <div className="story-cta">
          <div className="cta-content">
            <h3>Begin Your Fairy Tale</h3>
            <p>Join the magical community of Hollow Land and create your own legendary story</p>
            <button className="story-cta-button fairy-hover">
              Choose Your Fairy ✨
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 