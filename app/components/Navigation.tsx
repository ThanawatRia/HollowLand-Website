'use client'

import { useEffect, useState } from 'react'
import UserProfile from './UserProfile'
import AudioPlayer from './AudioPlayer'
import Image from 'next/image'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')
  const [isAudioPlaying, setIsAudioPlaying] = useState(true) // เปลี่ยนเป็น true เพื่อเปิดเสียงไว้

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop - 80 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let current = ''
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || ''
        }
      })
      
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: 'home', label: 'หน้าแรก' },
    { href: 'story', label: 'เรื่องราว' },
    { href: 'houses', label: 'ตัวละคร' },
    { href: 'store', label: 'ร้านค้า' }
  ]

  return (
    <>
      <AudioPlayer isPlaying={isAudioPlaying} onToggle={toggleAudio} />
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={75} 
              height={75}
              priority
              style={{
                filter: 'drop-shadow(0 0 10px rgba(76, 175, 80, 0.6))',
                objectFit: 'contain',
                width: 'auto',
                height: '60px'
              }}
            />
          </div>
          <div className="nav-content">
            <ul className="nav-menu">
              {navItems.map(item => (
                <li key={item.href} className="nav-item">
                  <a
                    href={`#${item.href}`}
                    className={`nav-link hollow-hover ${activeSection === item.href ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="nav-controls">
              <button 
                className={`audio-toggle-button hollow-hover ${isAudioPlaying ? 'playing' : ''}`}
                onClick={toggleAudio}
                title={isAudioPlaying ? 'ปิดเสียงดนตรี' : 'เปิดเสียงดนตรี'}
              >
                {isAudioPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                  </svg>
                )}
              </button>
              <UserProfile />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
} 