import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Announcements(){
  const [items, setItems] = useState([])
  const [expanded, setExpanded] = useState(false)

  useEffect(()=>{
    axios.get('/api/announcements')
      .then(r => setItems(r.data || []))
      .catch(()=>{})
  },[])

  if (!items.length) return null

  const displayItems = expanded ? items : items.slice(0, 1)

  return (
    <div style={{
      background: 'linear-gradient(90deg, rgba(255, 0, 110, 0.15) 0%, rgba(131, 56, 236, 0.15) 50%, rgba(58, 134, 255, 0.15) 100%)',
      borderBottom: '1px solid rgba(255, 0, 110, 0.2)',
      padding: '1rem',
      backdropFilter: 'blur(8px)',
      position: 'sticky',
      top: 0,
      zIndex: 40
    }}>
      <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: items.length > 0 && expanded ? '1rem' : '0'}}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff006e, #8338ec)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '0.875rem',
            animation: 'pulse-glow 2s ease-in-out infinite'
          }}>
            📢
          </span>
          <strong style={{fontSize: '0.95rem', color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
            Announcements
          </strong>
          {items.length > 1 && (
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                marginLeft: 'auto',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: 'var(--color-accent)',
                cursor: 'pointer',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.25rem',
                fontSize: '0.75rem',
                fontWeight: '600',
                transition: 'all 200ms ease-out'
              }}
              onMouseEnter={e => {
                e.target.style.background = 'rgba(255, 0, 110, 0.2)'
              }}
              onMouseLeave={e => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)'
              }}
            >
              {expanded ? '−' : '+'} {items.length}
            </button>
          )}
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
          {displayItems.map(a => (
            <div key={a.id} style={{
              paddingLeft: '2rem',
              paddingBottom: '0.75rem',
              borderLeft: '2px solid rgba(255, 0, 110, 0.3)',
              animation: 'float-up 3s ease-in-out infinite'
            }}>
              <div style={{fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)'}}>
                {new Date(a.announcedAt).toLocaleDateString()} · {new Date(a.announcedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
              <div style={{fontSize: '0.95rem', color: 'var(--color-text)', marginTop: '0.25rem', fontWeight: '500'}}>
                {a.message}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

