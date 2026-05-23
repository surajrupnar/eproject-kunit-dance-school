import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Features from './pages/Features'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Announcements from './components/Announcements'
import WhatsAppWidget from './components/WhatsAppWidget'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-pink-400">K Unit Dance School</Link>
        <div className="space-x-4">
          <Link to="/features" className="text-blue-300">Features</Link>
          <Link to="/courses" className="text-purple-300">Courses</Link>
          <Link to="/testimonials" className="text-pink-300">Testimonials</Link>
          <Link to="/contact" className="text-green-300">Contact</Link>
        </div>
      </nav>

      <Announcements />

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>

      <WhatsAppWidget phoneNumber="+919665532331" />

      <footer className="p-6 text-center text-sm text-gray-400">© K Unit Dance School</footer>
    </div>
  )
}

