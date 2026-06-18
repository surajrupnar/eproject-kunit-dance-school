import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Features from './pages/Features'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import AdminPanel from './pages/AdminPanel'
import Portfolio from './pages/Portfolio'
import Profile from './pages/Profile'
import Announcements from './components/Announcements'
import BroadcastBanner from './components/BroadcastBanner'
import WhatsAppWidget from './components/WhatsAppWidget'
import kUnitLogo from './assets/logo/kunit-home-logo.png'

export default function App(){
  const keyframes = `
    @keyframes dissolve {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }
  `;

  return (
    <div style={{background: 'var(--color-paper)', color: 'var(--color-text)', minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <style>{keyframes}</style>
      <nav style={{padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem'}}>
        <Link to="/" style={{textDecoration: 'none', color: 'var(--color-accent)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0rem', borderRadius: '0.75rem', background: 'transparent', border: 'none', marginRight: 'auto'}} aria-label="K Unit Dance">
          <img
            src={kUnitLogo}
            alt="K Unit Dance logo"
            style={{height: '3.5rem', width: '12.65rem', display: 'block', transition: 'transform 200ms ease, opacity 200ms ease', filter: 'brightness(0) invert(1)', animation: 'dissolve 3s ease-in-out infinite'}}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.opacity = '0.92' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1' }}
          />
        </Link>
        <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center'}}>
          <Link to="/features" style={{textDecoration: 'none', color: 'var(--color-text-muted)', fontWeight: '500', transition: 'color 200ms', cursor: 'pointer'}} onMouseEnter={e => e.target.style.color = 'var(--color-accent)'} onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}>Features</Link>
          <Link to="/courses" style={{textDecoration: 'none', color: 'var(--color-text-muted)', fontWeight: '500', transition: 'color 200ms', cursor: 'pointer'}} onMouseEnter={e => e.target.style.color = 'var(--color-accent-secondary)'} onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}>Courses</Link>
          <Link to="/testimonials" style={{textDecoration: 'none', color: 'var(--color-text-muted)', fontWeight: '500', transition: 'color 200ms', cursor: 'pointer'}} onMouseEnter={e => e.target.style.color = 'var(--color-accent-tertiary)'} onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}>Testimonials</Link>
          <Link to="/contact" style={{textDecoration: 'none', color: 'var(--color-text-muted)', fontWeight: '500', transition: 'color 200ms', cursor: 'pointer'}} onMouseEnter={e => e.target.style.color = 'var(--color-accent)'} onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}>Contact</Link>
          {/* <Link to="/portfolio" style={{textDecoration: 'none', color: 'var(--color-text-muted)', fontWeight: '500', transition: 'color 200ms', cursor: 'pointer'}} onMouseEnter={e => e.target.style.color = 'var(--color-accent-secondary)'} onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}>Portfolio</Link> */}
          <Link to="/profile" style={{textDecoration: 'none', color: 'var(--color-text-muted)', fontWeight: '500', transition: 'color 200ms', cursor: 'pointer'}} onMouseEnter={e => e.target.style.color = 'var(--color-accent)'} onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}>Portfolio</Link>
        </div>
      </nav>

      <Announcements />

      <BroadcastBanner />

      <main style={{flex: 1, padding: '2rem 1.5rem', maxWidth: '1280px', margin: '0 auto', width: '100%'}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/admin" element={<AdminPanel/>} />
        </Routes>
      </main>

      <WhatsAppWidget phoneNumber="+919665532331" />

      <footer style={{background: 'rgba(15, 3, 25, 0.8)', borderTop: '1px solid rgba(255, 0, 110, 0.1)', padding: '2rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-text-subtle)', marginTop: '3rem'}}>
        <div>© K Unit Dance School • Professional Dance Training</div>
        <div style={{marginTop: '0.5rem', fontSize: '0.75rem'}}>Move. Shine. Perform.</div>
      </footer>
    </div>
  )
}

