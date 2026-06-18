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

export default function App(){
  return (
    <div style={{background: 'var(--color-paper)', color: 'var(--color-text)', minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <nav style={{padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem'}}>
        <Link to="/" style={{fontSize: '1.75rem', fontWeight: '900', textDecoration: 'none', color: 'var(--color-accent)'}}>
          🕺 K Unit Dance
        </Link>
        <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center'}}>
          <Link to="/features" style={{textDecoration: 'none', color: 'var(--color-text-muted)', fontWeight: '500', transition: 'color 200ms', cursor: 'pointer'}} onMouseEnter={e => e.target.style.color = 'var(--color-accent)'} onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}>Features</Link>
          <Link to="/courses" style={{textDecoration: 'none', color: 'var(--color-text-muted)', fontWeight: '500', transition: 'color 200ms', cursor: 'pointer'}} onMouseEnter={e => e.target.style.color = 'var(--color-accent-secondary)'} onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}>Courses</Link>
          <Link to="/testimonials" style={{textDecoration: 'none', color: 'var(--color-text-muted)', fontWeight: '500', transition: 'color 200ms', cursor: 'pointer'}} onMouseEnter={e => e.target.style.color = 'var(--color-accent-tertiary)'} onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}>Testimonials</Link>
          <Link to="/contact" style={{textDecoration: 'none', color: 'var(--color-text-muted)', fontWeight: '500', transition: 'color 200ms', cursor: 'pointer'}} onMouseEnter={e => e.target.style.color = 'var(--color-accent)'} onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}>Contact</Link>
          <Link to="/portfolio" style={{textDecoration: 'none', color: 'var(--color-text-muted)', fontWeight: '500', transition: 'color 200ms', cursor: 'pointer'}} onMouseEnter={e => e.target.style.color = 'var(--color-accent-secondary)'} onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}>Portfolio</Link>
          <Link to="/profile" style={{textDecoration: 'none', color: 'var(--color-text-muted)', fontWeight: '500', transition: 'color 200ms', cursor: 'pointer'}} onMouseEnter={e => e.target.style.color = 'var(--color-accent)'} onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}>Profile</Link>
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

