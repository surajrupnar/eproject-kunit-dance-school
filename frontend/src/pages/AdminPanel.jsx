import React, { useState, useEffect } from 'react'

const ADMIN_CREDS = {
  username: 'admin',
  password: 'KUnit@2024'
}

export default function AdminPanel() {
  const [authenticated, setAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [expiryDays, setExpiryDays] = useState(7)
  const [emoji, setEmoji] = useState('📣')
  const [saved, setSaved] = useState(false)
  const [currentBroadcast, setCurrentBroadcast] = useState(null)

  useEffect(() => {
    if (authenticated) {
      loadCurrentBroadcast()
    }
  }, [authenticated])

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === ADMIN_CREDS.username && password === ADMIN_CREDS.password) {
      setAuthenticated(true)
      setUsername('')
      setPassword('')
    } else {
      alert('Invalid credentials')
    }
  }

  const loadCurrentBroadcast = () => {
    const stored = localStorage.getItem('broadcast_message')
    if (stored) {
      const data = JSON.parse(stored)
      if (new Date(data.expiry) > new Date()) {
        setCurrentBroadcast(data)
        setMessage(data.message)
        setEmoji(data.emoji)
      } else {
        localStorage.removeItem('broadcast_message')
        setCurrentBroadcast(null)
      }
    }
  }

  const handlePublish = (e) => {
    e.preventDefault()
    if (!message.trim()) {
      alert('Please enter a message')
      return
    }

    const expiry = new Date()
    expiry.setDate(expiry.getDate() + parseInt(expiryDays))

    const broadcastData = {
      message,
      emoji,
      published: new Date().toISOString(),
      expiry: expiry.toISOString(),
      expiryDays
    }

    localStorage.setItem('broadcast_message', JSON.stringify(broadcastData))
    setCurrentBroadcast(broadcastData)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleDelete = () => {
    if (window.confirm('Delete this broadcast message?')) {
      localStorage.removeItem('broadcast_message')
      setCurrentBroadcast(null)
      setMessage('')
      setEmoji('📣')
    }
  }

  if (!authenticated) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'var(--color-paper)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}>
        <div className="card" style={{
          maxWidth: '400px',
          width: '100%',
          padding: '2rem',
          borderRadius: '1rem'
        }}>
          <h1 className="text-gradient" style={{
            fontSize: '2rem',
            fontWeight: '900',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Admin Panel
          </h1>
          
          <form onSubmit={handleLogin} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem', color: 'var(--color-text-muted)'}}>
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter username"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  border: '2px solid rgba(255, 0, 110, 0.2)',
                  background: 'rgba(45, 27, 71, 0.6)',
                  color: 'var(--color-text)',
                  fontSize: '1rem',
                  transition: 'all 200ms ease-out'
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(255, 0, 110, 0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255, 0, 110, 0.2)'}
              />
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem', color: 'var(--color-text-muted)'}}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  border: '2px solid rgba(255, 0, 110, 0.2)',
                  background: 'rgba(45, 27, 71, 0.6)',
                  color: 'var(--color-text)',
                  fontSize: '1rem',
                  transition: 'all 200ms ease-out'
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(255, 0, 110, 0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255, 0, 110, 0.2)'}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{width: '100%', marginTop: '1rem', border: 'none'}}
            >
              Login to Admin Panel
            </button>
          </form>

          <div style={{marginTop: '1.5rem', padding: '1rem', background: 'rgba(58, 134, 255, 0.1)', borderRadius: '0.5rem', fontSize: '0.75rem', color: 'var(--color-text-subtle)', textAlign: 'center'}}>
            Demo credentials available in component config
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-paper)',
      padding: '2rem 1rem'
    }}>
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
          <h1 className="text-gradient" style={{fontSize: '2rem', fontWeight: '900'}}>
            Broadcast Manager
          </h1>
          <button
            onClick={() => setAuthenticated(false)}
            style={{
              background: 'transparent',
              border: '2px solid var(--color-accent)',
              color: 'var(--color-accent)',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.875rem'
            }}
          >
            Logout
          </button>
        </div>

        <div className="card" style={{padding: '2rem', marginBottom: '2rem', borderRadius: '1rem'}}>
          <h2 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--color-accent)'}}>
            Publish New Broadcast
          </h2>

          <form onSubmit={handlePublish} style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem', color: 'var(--color-text-muted)'}}>
                Emoji Icon
              </label>
              <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
                {['📣', '🎉', '⚡', '🔥', '💫', '🌟', '✨', '🎊'].map(e => (
                  <button
                    key={e}
                    type="button"
                    onClick={() => setEmoji(e)}
                    style={{
                      fontSize: '1.5rem',
                      padding: '0.5rem 0.75rem',
                      border: emoji === e ? '2px solid var(--color-accent)' : '2px solid rgba(255, 0, 110, 0.2)',
                      background: 'transparent',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      transition: 'all 200ms ease-out'
                    }}
                  >
                    {e}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem', color: 'var(--color-text-muted)'}}>
                Message Title
              </label>
              <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="e.g., Summer Dance Intensive Registration Open!"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  border: '2px solid rgba(255, 0, 110, 0.2)',
                  background: 'rgba(45, 27, 71, 0.6)',
                  color: 'var(--color-text)',
                  fontSize: '1rem',
                  transition: 'all 200ms ease-out'
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(255, 0, 110, 0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255, 0, 110, 0.2)'}
              />
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.875rem', color: 'var(--color-text-muted)'}}>
                Expiry (Days)
              </label>
              <select
                value={expiryDays}
                onChange={e => setExpiryDays(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  border: '2px solid rgba(255, 0, 110, 0.2)',
                  background: 'rgba(45, 27, 71, 0.6)',
                  color: 'var(--color-text)',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
              >
                <option value="1">1 Day</option>
                <option value="3">3 Days</option>
                <option value="7">7 Days (Default)</option>
                <option value="14">2 Weeks</option>
                <option value="30">1 Month</option>
              </select>
            </div>

            {saved && (
              <div style={{
                padding: '1rem',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '0.5rem',
                color: '#22c55e',
                textAlign: 'center',
                fontWeight: '600'
              }}>
                ✓ Broadcast published successfully!
              </div>
            )}

            <button
              type="submit"
              className="btn-primary"
              style={{width: '100%', border: 'none'}}
            >
              Publish Broadcast
            </button>
          </form>
        </div>

        {currentBroadcast && (
          <div className="card" style={{padding: '2rem', borderRadius: '1rem'}}>
            <h2 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--color-accent)'}}>
              Currently Active
            </h2>
            
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(131, 56, 236, 0.1))',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              marginBottom: '1rem',
              border: '1px solid rgba(255, 0, 110, 0.2)'
            }}>
              <div style={{fontSize: '2rem', marginBottom: '0.75rem'}}>
                {currentBroadcast.emoji}
              </div>
              <div style={{fontSize: '1.125rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '0.5rem'}}>
                {currentBroadcast.message}
              </div>
              <div style={{fontSize: '0.875rem', color: 'var(--color-text-subtle)'}}>
                Published: {new Date(currentBroadcast.published).toLocaleString()}
              </div>
              <div style={{fontSize: '0.875rem', color: 'var(--color-text-subtle)'}}>
                Expires: {new Date(currentBroadcast.expiry).toLocaleString()}
              </div>
            </div>

            <button
              onClick={handleDelete}
              style={{
                width: '100%',
                padding: '0.75rem 1.5rem',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '2px solid rgba(239, 68, 68, 0.3)',
                color: '#ef4444',
                borderRadius: '0.5rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 200ms ease-out'
              }}
              onMouseEnter={e => {
                e.target.style.background = 'rgba(239, 68, 68, 0.2)'
              }}
              onMouseLeave={e => {
                e.target.style.background = 'rgba(239, 68, 68, 0.1)'
              }}
            >
              Delete Broadcast
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
