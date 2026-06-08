import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CourseIllustration = ({ type }) => {
  const illustrations = {
    'Hip Hop': (
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
        <defs>
          <linearGradient id="hipHop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#ff006e', stopOpacity: 0.2}} />
            <stop offset="100%" style={{stopColor: '#ff006e', stopOpacity: 0.05}} />
          </linearGradient>
        </defs>
        <rect width="160" height="160" fill="url(#hipHop)" rx="8"/>
        <text x="80" y="90" fontSize="48" fontWeight="bold" textAnchor="middle" fill="#ff006e">🎤</text>
        <text x="80" y="130" fontSize="12" fontWeight="600" textAnchor="middle" fill="rgba(255,255,255,0.6)">HIP HOP</text>
      </svg>
    ),
    'Contemporary': (
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
        <defs>
          <linearGradient id="contemp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#8338ec', stopOpacity: 0.2}} />
            <stop offset="100%" style={{stopColor: '#8338ec', stopOpacity: 0.05}} />
          </linearGradient>
        </defs>
        <rect width="160" height="160" fill="url(#contemp)" rx="8"/>
        <text x="80" y="90" fontSize="48" fontWeight="bold" textAnchor="middle" fill="#8338ec">🎭</text>
        <text x="80" y="130" fontSize="12" fontWeight="600" textAnchor="middle" fill="rgba(255,255,255,0.6)">CONTEMPORARY</text>
      </svg>
    ),
    'Bollywood': (
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
        <defs>
          <linearGradient id="bollywood" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#3a86ff', stopOpacity: 0.2}} />
            <stop offset="100%" style={{stopColor: '#3a86ff', stopOpacity: 0.05}} />
          </linearGradient>
        </defs>
        <rect width="160" height="160" fill="url(#bollywood)" rx="8"/>
        <text x="80" y="90" fontSize="48" fontWeight="bold" textAnchor="middle" fill="#3a86ff">💃</text>
        <text x="80" y="130" fontSize="12" fontWeight="600" textAnchor="middle" fill="rgba(255,255,255,0.6)">BOLLYWOOD</text>
      </svg>
    ),
    'Salsa': (
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
        <defs>
          <linearGradient id="salsa" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#ff006e', stopOpacity: 0.2}} />
            <stop offset="100%" style={{stopColor: '#8338ec', stopOpacity: 0.1}} />
          </linearGradient>
        </defs>
        <rect width="160" height="160" fill="url(#salsa)" rx="8"/>
        <text x="80" y="90" fontSize="48" fontWeight="bold" textAnchor="middle" fill="#ff006e">🎶</text>
        <text x="80" y="130" fontSize="12" fontWeight="600" textAnchor="middle" fill="rgba(255,255,255,0.6)">SALSA</text>
      </svg>
    ),
    'default': (
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
        <defs>
          <linearGradient id="default" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: 'rgba(255, 0, 110, 0.2)'}} />
            <stop offset="100%" style={{stopColor: 'rgba(131, 56, 236, 0.1)'}} />
          </linearGradient>
        </defs>
        <rect width="160" height="160" fill="url(#default)" rx="8"/>
        <text x="80" y="90" fontSize="48" fontWeight="bold" textAnchor="middle" fill="#ff006e">✨</text>
        <text x="80" y="130" fontSize="12" fontWeight="600" textAnchor="middle" fill="rgba(255,255,255,0.6)">DANCE</text>
      </svg>
    )
  }
  return illustrations[type] || illustrations['default']
}

export default function Courses(){
  const [courses, setCourses] = useState([])

  useEffect(()=>{
    axios.get('/api/courses')
      .then(r => setCourses(r.data || []))
      .catch(()=>{
        setCourses([
          {id:1, name:'Hip Hop', ageGroup:'10-18', timing:'6pm - 7pm', fee:20, description: 'High-energy urban dance style with modern beats'},
          {id:2, name:'Contemporary', ageGroup:'12-25', timing:'7pm - 8pm', fee:25, description: 'Expressive fluid movements with emotional connection'},
          {id:3, name:'Bollywood', ageGroup:'8-20', timing:'5pm - 6pm', fee:22, description: 'Traditional Indian film dance with vibrant choreography'},
          {id:4, name:'Salsa', ageGroup:'15+', timing:'8pm - 9pm', fee:25, description: 'Latin dance with rhythm and partner connection'}
        ])
      })
  },[])

  return (
    <div style={{maxWidth: '1280px', margin: '0 auto', width: '100%'}}>
      <div style={{marginBottom: '2rem'}}>
        <h1 className="text-gradient" style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', marginBottom: '0.5rem'}}>Our Courses</h1>
        <p style={{fontSize: '1rem', color: 'var(--color-text-muted)'}}>Choose from diverse dance styles taught by expert instructors</p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem'}}>
        {courses.map(c => (
          <div key={c.id} className="card dance-shadow-1" style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            cursor: 'pointer',
            borderRadius: '1rem'
          }}>
            {/* Course illustration */}
            <div style={{
              height: '160px',
              borderRadius: '0.75rem',
              marginBottom: '1.5rem',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, rgba(45, 27, 71, 0.4), rgba(26, 8, 48, 0.4))',
              border: '1px solid rgba(255, 0, 110, 0.1)'
            }}>
              <CourseIllustration type={c.name} />
            </div>

            {/* Course info */}
            <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #ff006e, #8338ec)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              {c.name}
            </h3>
            
            <p style={{fontSize: '0.875rem', color: 'var(--color-text-subtle)', marginBottom: '1rem', flex: 1}}>
              {c.description || 'Professional dance instruction for all levels'}
            </p>

            {/* Course details */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span>👥 Age: {c.ageGroup}</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span>⏰ Time: {c.timing}</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 0, 110, 0.1)'}}>
                <span style={{fontSize: '1.125rem', fontWeight: '700', color: 'var(--color-accent)'}}>₹{c.fee}/month</span>
              </div>
            </div>

            {/* Enroll button */}
            <button className="btn-primary" style={{width: '100%', border: 'none'}}>
              Enroll Now →
            </button>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div style={{
        marginTop: '4rem',
        padding: '3rem 2rem',
        background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(131, 56, 236, 0.1))',
        borderRadius: '1rem',
        border: '1px solid rgba(255, 0, 110, 0.2)',
        textAlign: 'center'
      }}>
        <h2 style={{fontSize: '1.75rem', fontWeight: '700', marginBottom: '1rem'}}>Can't find what you're looking for?</h2>
        <p style={{color: 'var(--color-text-muted)', marginBottom: '1.5rem'}}>Contact us for custom classes and private sessions</p>
        <button className="btn-primary">Get in Touch</button>
      </div>
    </div>
  )
}

