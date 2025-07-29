'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'

export default function UserProfile() {
  const { data: session, status } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (status === 'loading') {
    return (
      <div className="user-profile-loading">
        <div className="loading-spinner">⏳</div>
      </div>
    )
  }

  if (!session) {
    return (
      <button
        onClick={() => signIn('discord')}
        className="login-button nature-hover"
      >
        <span className="discord-icon">💬</span>
        เข้าสู่ระบบ
      </button>
    )
  }

  return (
    <div className="user-profile-container">
      <button
        className="user-avatar-button nature-hover"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img
          src={session.user?.image || '/default-avatar.png'}
          alt={session.user?.name || 'User'}
          className="user-avatar"
        />
        <span className="user-name">{session.user?.name}</span>
        <span className="dropdown-arrow">▼</span>
      </button>

      {isMenuOpen && (
        <div className="user-dropdown">
          <div className="user-info">
            <img
              src={session.user?.image || '/default-avatar.png'}
              alt={session.user?.name || 'User'}
              className="user-avatar-large"
            />
            <div className="user-details">
              <h4>{session.user?.name}</h4>
              <p>{session.user?.email}</p>
            </div>
          </div>
          <hr className="dropdown-divider" />
          <button
            onClick={() => {
              setIsMenuOpen(false)
              signOut()
            }}
            className="logout-button nature-hover"
          >
            <span>🚪</span>
            ออกจากระบบ
          </button>
        </div>
      )}
    </div>
  )
} 