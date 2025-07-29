'use client'

import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import StorySection from './components/StorySection'
import HousesSection from './components/HousesSection'
import StoreSection from './components/StoreSection'
import Footer from './components/Footer'
import FairyDustEffect from './components/FairyDustEffect'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main>
      <FairyDustEffect />
      <Navigation />
      <HeroSection />
      <StorySection />
      <HousesSection />
      <StoreSection />
      <Footer />
    </main>
  )
} 