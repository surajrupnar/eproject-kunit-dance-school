import React, { useState, useEffect } from 'react'

const broadcastStyles = `
  @keyframes gradient-border-animate {
    0%, 100% {
      background-position: 0% center;
    }
    50% {
      background-position: 100% center;
    }
  }

  @keyframes pulse-broadcast {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-4px);
    }
  }

  .broadcast-container {
    padding: 1rem;
    background: rgba(0, 0, 0, 0.72);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 214, 0, 0.4);
    border-radius: 0.75rem;
    animation: gradient-border-animate 4s ease-in-out infinite;
    position: relative;
    overflow: hidden;
    margin: 1rem;
  }

  .broadcast-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      rgba(255, 214, 0, 0.08),
      rgba(255, 255, 255, 0.06),
      rgba(255, 214, 0, 0.08)
    );
    background-size: 200% 100%;
    animation: gradient-border-animate 4s ease-in-out infinite;
    pointer-events: none;
  }

  .broadcast-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .broadcast-message {
    flex: 1;
    min-width: 200px;
    animation: pulse-broadcast 2s ease-in-out infinite;
  }

  .broadcast-icon {
    font-size: 1.75rem;
    animation: float 3s ease-in-out infinite;
    flex-shrink: 0;
  }

  .broadcast-close {
    background: linear-gradient(135deg, #ffd600, #fff7b2);
    border: none;
    color: black;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 200ms ease-out;
    flex-shrink: 0;
  }

  .broadcast-close:hover {
    transform: scale(1.1) rotate(90deg);
    box-shadow: 0 0 16px rgba(255, 214, 0, 0.4);
  }

  @media (max-width: 640px) {
    .broadcast-container {
      padding: 0.875rem;
      border-width: 1.5px;
      margin: 0.75rem;
    }

    .broadcast-content {
      gap: 0.75rem;
      padding: 0 0.75rem;
    }

    .broadcast-icon {
      font-size: 1.25rem;
    }

    .broadcast-close {
      width: 28px;
      height: 28px;
      font-size: 1rem;
    }
  }
`

export default function BroadcastBanner() {
  const [visible, setVisible] = useState(true)
  const [broadcast, setBroadcast] = useState(null)

  useEffect(() => {
    loadBroadcast()
  }, [])

  const loadBroadcast = () => {
    const stored = localStorage.getItem('broadcast_message')
    if (stored) {
      try {
        const data = JSON.parse(stored)
        const now = new Date()
        const expiry = new Date(data.expiry)
        
        if (expiry > now) {
          setBroadcast(data)
        } else {
          localStorage.removeItem('broadcast_message')
          setBroadcast(null)
        }
      } catch (e) {
        console.error('Error parsing broadcast data:', e)
        setBroadcast(null)
      }
    }
  }

  if (!visible || !broadcast) return null

  return (
    <>
      <style>{broadcastStyles}</style>
      <div className="broadcast-container">
        <div className="broadcast-content">
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem', flex: 1}}>
            <div className="broadcast-icon">{broadcast.emoji}</div>
            <div className="broadcast-message">
              <div style={{
                fontSize: '1.05rem',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '0.25rem',
                background: 'linear-gradient(90deg, #ffd600, #fff7b2, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {broadcast.message}
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.5)'
              }}>
                Expires: {new Date(broadcast.expiry).toLocaleDateString()}
              </div>
            </div>
          </div>
          <button 
            className="broadcast-close"
            onClick={() => setVisible(false)}
            aria-label="Close broadcast"
          >
            ✕
          </button>
        </div>
      </div>
    </>
  )
}
