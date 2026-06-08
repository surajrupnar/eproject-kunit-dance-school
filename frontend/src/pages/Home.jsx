import React from 'react'
import { useNavigate } from 'react-router-dom'

const DancerSVG = () => (
  <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
    {/* Background gradient */}
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: 'rgba(131, 56, 236, 0.2)', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: 'rgba(58, 134, 255, 0.2)', stopOpacity: 1}} />
      </linearGradient>
      <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor: '#fdbcb4', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#f8a98d', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    
    <rect width="200" height="300" fill="url(#bgGrad)"/>
    
    {/* Head */}
    <circle cx="100" cy="60" r="20" fill="url(#skinGrad)"/>
    
    {/* Torso */}
    <path d="M 85 80 Q 100 85 115 80 L 120 130 Q 100 135 80 130 Z" fill="url(#skinGrad)"/>
    
    {/* Left arm raised */}
    <g style={{animation: 'dance-shadow-1 3s ease-in-out infinite'}}>
      <line x1="85" y1="85" x2="50" y2="50" stroke="url(#skinGrad)" strokeWidth="8" strokeLinecap="round"/>
    </g>
    
    {/* Right arm */}
    <line x1="115" y1="85" x2="140" y2="110" stroke="url(#skinGrad)" strokeWidth="8" strokeLinecap="round"/>
    
    {/* Left leg */}
    <g style={{animation: 'dance-shadow-2 4s ease-in-out infinite'}}>
      <line x1="90" y1="130" x2="85" y2="190" stroke="url(#skinGrad)" strokeWidth="8" strokeLinecap="round"/>
    </g>
    
    {/* Right leg */}
    <g style={{animation: 'dance-shadow-3 3.5s ease-in-out infinite'}}>
      <line x1="110" y1="130" x2="120" y2="190" stroke="url(#skinGrad)" strokeWidth="8" strokeLinecap="round"/>
    </g>
    
    {/* Accent circle */}
    <circle cx="100" cy="200" r="40" fill="none" stroke="rgba(255, 0, 110, 0.3)" strokeWidth="2" style={{animation: 'pulse-glow 2s ease-in-out infinite'}}/>
  </svg>
)

export default function Home(){
  const nav = useNavigate()
  
  return (
    <section style={{borderRadius: '1rem', padding: '2rem', maxWidth: '1280px', margin: '0 auto'}}>
      <div className="hero-bg" style={{borderRadius: '1rem', padding: '3rem 2rem', position: 'relative', zIndex: 1}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center'}}>
          {/* Text content */}
          <div style={{zIndex: 2, position: 'relative'}}>
            <h1 className="text-gradient" style={{fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '900', lineHeight: '1.2', marginBottom: '1.5rem', textShadow: '0 4px 12px rgba(255, 0, 110, 0.2)'}}>
              Move. Shine. Perform.
            </h1>
            <p style={{fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6', maxWidth: '500px'}}>
              K Unit Dance School — professional instructors, high-energy choreography, and stage-ready training for all ages. Join us and discover the dancer within.
            </p>
            <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <button 
                onClick={()=>nav('/courses')} 
                className="btn-primary"
                style={{fontSize: '1rem', fontWeight: '600'}}
              >
                Explore Courses →
              </button>
              <button 
                onClick={()=>nav('/contact')} 
                style={{
                  background: 'transparent',
                  border: '2px solid var(--color-accent)',
                  color: 'var(--color-accent)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 300ms ease-out'
                }}
                onMouseEnter={e => {
                  e.target.style.background = 'rgba(255, 0, 110, 0.1)'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.target.style.background = 'transparent'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Visual element */}
          <div style={{
            height: '350px', 
            borderRadius: '1rem',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(45, 27, 71, 0.6), rgba(26, 8, 48, 0.6))',
            border: '1px solid rgba(255, 0, 110, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2
          }}>
            <div style={{width: '80%', height: '80%'}}>
              <DancerSVG />
            </div>
          </div>
        </div>
      </div>

      {/* Quick highlights */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem'}}>
        {[
          { icon: '👨‍🏫', title: 'Expert Trainers', desc: 'Industry professionals' },
          { icon: '🎵', title: 'Diverse Styles', desc: 'Hip Hop, Contemporary, Bollywood & more' },
          { icon: '🏆', title: 'Performance Ready', desc: 'Recitals & competitions' },
          { icon: '🎯', title: 'All Ages', desc: 'From kids to adults' }
        ].map((item, idx) => (
          <div key={idx} className="card" style={{textAlign: 'center', padding: '2rem 1.5rem'}}>
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{item.icon}</div>
            <h3 style={{fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--color-accent)'}}>{item.title}</h3>
            <p style={{fontSize: '0.875rem', color: 'var(--color-text-subtle)'}}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

