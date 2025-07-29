'use client'

import { useEffect, useRef, useState } from 'react'

interface AudioPlayerProps {
  isPlaying: boolean
  onToggle: () => void
}

export default function AudioPlayer({ isPlaying, onToggle }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const [currentVolume, setCurrentVolume] = useState(0)
  const [audioState, setAudioState] = useState('loading')
  const [hasStarted, setHasStarted] = useState(false)

  // Simple and reliable play function
  const playAudio = async () => {
    const audio = audioRef.current
    if (!audio) return false

    try {
      console.log('🎵 Playing audio...')
      audio.currentTime = 0
      audio.volume = 0.5
      audio.muted = false
      
      await audio.play()
      
      setCurrentVolume(0.5)
      setAudioState('playing')
      setAudioError(false)
      setHasStarted(true)
      console.log('✅ Audio playing successfully!')
      return true
    } catch (error) {
      console.log('❌ Audio play failed:', error)
      setAudioError(true)
      setAudioState('error')
      return false
    }
  }

  // Auto-start on ANY user interaction
  useEffect(() => {
    if (hasStarted) return

    const startAudio = () => {
      if (!hasStarted) {
        console.log('👆 User interaction detected - starting audio')
        playAudio()
      }
    }

    // Listen for ANY interaction
    const events = [
      'mousedown', 'mouseup', 'click', 
      'keydown', 'keyup', 'touchstart', 
      'touchend', 'mousemove', 'scroll',
      'focus', 'blur'
    ]

    events.forEach(event => {
      document.addEventListener(event, startAudio, { once: true, passive: true })
    })

    // Also try on page load after a delay
    const timer = setTimeout(() => {
      if (!hasStarted) {
        console.log('⏰ Timer trigger - attempting audio start')
        playAudio()
      }
    }, 2000)

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, startAudio)
      })
      clearTimeout(timer)
    }
  }, [hasStarted])

  // Regular audio event handlers
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadedData = () => {
      console.log('📁 Audio file loaded')
      setIsLoaded(true)
      setAudioError(false)
      setAudioState('loaded')
    }

    const handleCanPlay = () => {
      console.log('▶️ Audio can play')
      setAudioState('ready')
    }

    const handlePlay = () => {
      console.log('🎵 Audio play event')
      setAudioState('playing')
      setAudioError(false)
      setHasStarted(true)
    }

    const handlePause = () => {
      console.log('⏸️ Audio paused')
      setAudioState('paused')
    }

    const handleError = (e: Event) => {
      console.error('❌ Audio error:', e)
      setAudioError(true)
      setAudioState('error')
    }

    const handleVolumeChange = () => {
      setCurrentVolume(audio.volume)
    }

    const handleEnded = () => {
      console.log('🔄 Audio ended, restarting...')
      audio.currentTime = 0
      if (isPlaying && hasStarted) {
        playAudio()
      }
    }

    // Add event listeners
    audio.addEventListener('loadeddata', handleLoadedData)
    audio.addEventListener('canplay', handleCanPlay)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('error', handleError)
    audio.addEventListener('volumechange', handleVolumeChange)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('loadeddata', handleLoadedData)
      audio.removeEventListener('canplay', handleCanPlay)
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('error', handleError)
      audio.removeEventListener('volumechange', handleVolumeChange)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [isPlaying, hasStarted])

  // Monitor state and control playback
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying && hasStarted && audioState !== 'playing') {
      console.log('🔄 Should be playing - restarting')
      playAudio()
    } else if (!isPlaying && audioState === 'playing') {
      console.log('⏸️ Pausing audio')
      audio.pause()
      setAudioState('paused')
    }
  }, [isPlaying, audioState, hasStarted])

  return (
    <>
      {/* Invisible trigger overlay */}
      {!hasStarted && (
        <div
          onClick={() => playAudio()}
          onMouseMove={() => playAudio()}
          onTouchStart={() => playAudio()}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            pointerEvents: 'none',
            background: 'transparent'
          }}
        />
      )}

      <audio 
        ref={audioRef}
        preload="auto"
        loop
        playsInline
        controls={process.env.NODE_ENV === 'development'}
        style={{
          display: process.env.NODE_ENV === 'development' ? 'block' : 'none',
          position: 'fixed',
          bottom: '10px',
          left: '10px',
          zIndex: 9999
        }}
      >
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
        <source src="/audio/background-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Debug overlay */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{
          position: 'fixed',
          top: '100px',
          right: '10px',
          background: hasStarted && audioState === 'playing' ? 'rgba(0,150,0,0.9)' : audioError ? 'rgba(150,0,0,0.9)' : 'rgba(100,100,0,0.9)',
          color: 'white',
          padding: '15px',
          borderRadius: '8px',
          fontSize: '12px',
          zIndex: 9999,
          fontFamily: 'monospace',
          minWidth: '200px',
          border: hasStarted && audioState === 'playing' ? '2px solid #00ff00' : audioError ? '2px solid #ff0000' : '2px solid #ffff00'
        }}>
          <div style={{ fontWeight: 'bold', marginBottom: '10px', color: hasStarted && audioState === 'playing' ? '#00ff00' : audioError ? '#ff6666' : '#ffff00' }}>
            {hasStarted && audioState === 'playing' ? '🎵 AUDIO PLAYING!' : audioError ? '❌ AUDIO ERROR' : '⏳ WAITING FOR INTERACTION'}
          </div>
          <div>🎛️ State: <span style={{color: audioState === 'playing' ? '#00ff00' : audioState === 'error' ? '#ff6666' : '#fff'}}>{audioState}</span></div>
          <div>📊 Volume: {Math.round(currentVolume * 100)}%</div>
          <div>🚀 Started: {hasStarted ? 'Yes' : 'No'}</div>
          <div>📁 Loaded: {isLoaded ? 'Yes' : 'No'}</div>
          <div>❌ Error: {audioError ? 'Yes' : 'No'}</div>
          
          <div style={{ marginTop: '10px', fontSize: '10px', opacity: 0.9, color: hasStarted ? '#88ff88' : '#ffff88' }}>
            {hasStarted ? '✅ Audio active!' : '👆 Move mouse or click anywhere'}
          </div>
          
          {/* Manual control buttons */}
          <div style={{ marginTop: '10px' }}>
            <button 
              onClick={() => playAudio()}
              style={{
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                margin: '2px',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '10px'
              }}
            >
              Start Audio
            </button>
            <button 
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.volume = 0.5
                  setCurrentVolume(0.5)
                }
              }}
              style={{
                background: '#2196F3',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                margin: '2px',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '10px'
              }}
            >
              Set Volume
            </button>
          </div>
        </div>
      )}
    </>
  )
}