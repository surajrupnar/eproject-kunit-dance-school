import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import bgImage1 from '../assets/background/background-4.png'
import bgImage2 from '../assets/background/backgroup.jpg'
import bgImage3 from '../assets/background/image.png'
import bgImage4 from '../assets/background/background-3.png'


const HeroArtwork = () => (
  <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
    <defs>
      <linearGradient id="heroGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff006e" stopOpacity="0.65" />
        <stop offset="45%" stopColor="#8338ec" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#3a86ff" stopOpacity="0.55" />
      </linearGradient>
      <filter id="blurGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="30" />
      </filter>
    </defs>

    <rect width="1200" height="800" fill="rgba(10, 5, 20, 0.65)" />

    <circle cx="260" cy="220" r="200" fill="rgba(255, 0, 110, 0.25)" filter="url(#blurGlow)" />
    <circle cx="900" cy="180" r="170" fill="rgba(58, 134, 255, 0.2)" filter="url(#blurGlow)" />
    <circle cx="720" cy="520" r="240" fill="rgba(131, 56, 236, 0.22)" filter="url(#blurGlow)" />

    <path d="M 240 620 C 320 520 420 500 520 540 C 590 570 640 650 720 655 C 780 658 840 625 890 565"
      fill="none"
      stroke="url(#heroGlow)"
      strokeWidth="16"
      strokeLinecap="round"
      opacity="0.85"
    />

    <path d="M 420 160 C 500 80 620 120 700 210 C 760 270 840 285 920 260"
      fill="none"
      stroke="rgba(255,255,255,0.12)"
      strokeWidth="24"
      strokeLinecap="round"
      opacity="0.6"
    />

    <path d="M 350 380 C 390 300 500 280 560 340 C 620 400 730 370 810 420"
      fill="none"
      stroke="rgba(255,255,255,0.14)"
      strokeWidth="20"
      strokeLinecap="round"
      opacity="0.55"
    />

    <path d="M 170 500 C 280 420 360 430 480 500 C 550 540 660 520 750 600"
      fill="none"
      stroke="rgba(255, 255, 255, 0.18)"
      strokeWidth="12"
      strokeLinecap="round"
      opacity="0.75"
    />
  </svg>
)

export default function Home(){
  const nav = useNavigate()
  const selectedBgImage = useMemo(() => {
    const images = [bgImage1, bgImage2, bgImage3, bgImage4]
    return images[Math.floor(Math.random() * images.length)]
  }, [])

  const keyframes = `
    @keyframes heroImageFloat {
      0%, 100% {
        transform: scale(1.0) translate(0, 0);
        opacity: 0.88;
      }
      50% {
        transform: scale(1.15) translate(-8px, -6px);
        opacity: 0.96;
      }
    }
  `;

  return (
    <section style={{position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 0}}>
      <style>{keyframes}</style>
      <div className="hero-bg" style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 1, width: '100%', height: '100%'}}>
        <div style={{position: 'absolute', inset: 0, backgroundImage: `url(${selectedBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 0.24, animation: 'heroImageFloat 14s ease-in-out infinite', filter: 'brightness(0.65) saturate(1.05)', pointerEvents: 'none'}} />
        <div style={{position: 'absolute', inset: 0, background: 'rgba(7, 5, 18, 0.3)', pointerEvents: 'none'}} />
      </div>

      <div style={{position: 'relative', zIndex: 2, width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '4rem 1.5rem'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '2.5rem', padding: '3rem 2rem', borderRadius: '2rem', background: 'rgba(9, 5, 22, 0.84)', boxShadow: '0 30px 90px rgba(0, 0, 0, 0.35)', border: '1px solid rgba(255, 255, 255, 0.06)'}}>
          <div style={{display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(255, 255, 255, 0.08)', padding: '0.75rem 1.25rem', borderRadius: '999px', color: '#fff', fontWeight: 700, letterSpacing: '0.02em', fontSize: '0.95rem', width: 'fit-content'}}>
            ISO 9001:2015 Certified | Maharashtra Ratna Awarded Dance School
          </div>

          <div style={{display: 'grid', gap: '1.25rem'}}>
            <h1 style={{fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.02, fontWeight: 900, letterSpacing: '-0.05em', margin: 0, color: '#ffffff', textTransform: 'uppercase'}}>
              Dance <span style={{color: '#ff006e'}}>For</span> Your <span style={{color: '#ff006e'}}>Soul</span>
            </h1>

            <div style={{maxWidth: '760px', display: 'grid', gap: '1rem'}}>
              <p style={{fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.86)'}}>
                Unleash your inner groove, ignite the dance floor, and step into a journey of self-expression like never before.
              </p>
              <p style={{fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.72)'}}>
                At K-Unit Dance School, we’re not just teaching dance — we are the heartbeat of the Hip-hop movement, turning raw passion into powerful skill.
              </p>
            </div>
          </div>

          <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center'}}>
            <button
              onClick={() => nav('/contact')}
              className="btn-primary"
              style={{fontSize: '1rem', padding: '1rem 2rem', minWidth: '220px'}}
            >
              Admissions Open — Get Enrolled Today
            </button>
            <button
              onClick={() => nav('/courses')}
              style={{
                background: 'transparent',
                color: '#fff',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                padding: '1rem 2rem',
                borderRadius: '1rem',
                cursor: 'pointer',
                transition: 'all 200ms ease'
              }}
              onMouseEnter={e => {
                e.target.style.background = 'rgba(255, 255, 255, 0.08)'
                e.target.style.borderColor = 'rgba(255, 0, 110, 0.35)'
              }}
              onMouseLeave={e => {
                e.target.style.background = 'transparent'
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.18)'
              }}
            >
              View Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

