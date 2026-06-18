import React, { useEffect, useState } from 'react'
import axios from 'axios'
import foundationCourseImage from '../assets/cards/foundation-course.png'
import technicalCourseImage from '../assets/cards/Intermediate-course.png'
import advancedCourseImage from '../assets/cards/advanced-course.png'

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

const DiplomaIllustration = ({ title }) => {
  const illustrations = {
    'Foundation Course': (
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
        <defs>
          <linearGradient id="foundation" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#ff6f61', stopOpacity: 0.2}} />
            <stop offset="100%" style={{stopColor: '#ffb347', stopOpacity: 0.05}} />
          </linearGradient>
        </defs>
        <rect width="160" height="160" fill="url(#foundation)" rx="8"/>
        <text x="80" y="80" fontSize="42" fontWeight="700" textAnchor="middle" fill="#ff6f61">🎧</text>
        <text x="80" y="130" fontSize="12" fontWeight="600" textAnchor="middle" fill="rgba(255,255,255,0.75)">HIP HOP</text>
      </svg>
    ),
    'Technical Diploma': (
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
        <defs>
          <linearGradient id="technical" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#3a86ff', stopOpacity: 0.2}} />
            <stop offset="100%" style={{stopColor: '#8338ec', stopOpacity: 0.05}} />
          </linearGradient>
        </defs>
        <rect width="160" height="160" fill="url(#technical)" rx="8"/>
        <text x="80" y="80" fontSize="42" fontWeight="700" textAnchor="middle" fill="#3a86ff">🧠</text>
        <text x="80" y="130" fontSize="12" fontWeight="600" textAnchor="middle" fill="rgba(255,255,255,0.75)">TECHNIQUE</text>
      </svg>
    ),
    'Instructor Diploma': (
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
        <defs>
          <linearGradient id="instructor" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#ff006e', stopOpacity: 0.2}} />
            <stop offset="100%" style={{stopColor: '#8338ec', stopOpacity: 0.05}} />
          </linearGradient>
        </defs>
        <rect width="160" height="160" fill="url(#instructor)" rx="8"/>
        <text x="80" y="80" fontSize="42" fontWeight="700" textAnchor="middle" fill="#8338ec">📚</text>
        <text x="80" y="130" fontSize="12" fontWeight="600" textAnchor="middle" fill="rgba(255,255,255,0.75)">TEACHING</text>
      </svg>
    ),
    'default': (
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
        <defs>
          <linearGradient id="diplomaDefault" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.15}} />
            <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.05}} />
          </linearGradient>
        </defs>
        <rect width="160" height="160" fill="url(#diplomaDefault)" rx="8"/>
        <text x="80" y="90" fontSize="48" fontWeight="bold" textAnchor="middle" fill="#ffffff">✨</text>
      </svg>
    )
  }
  return illustrations[title] || illustrations['default']
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

      {/* Diploma Certification Course section */}
      <div style={{marginTop: '4rem', textAlign: 'center'}}>
        <h2 className="text-gradient" style={{fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 900, marginBottom: '1.5rem'}}>Diploma Certification Course</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem'}}>
          {[
            {
              title: 'Foundation Course',
              description: 'In this foundational course, you’ll dive into the vibrant world of Hip-Hop culture and dance. We’ll cover the basics, from the history of Hip-Hop to understanding its cultural significance. Get ready to groove as you learn fundamental dance moves and techniques. And don’t forget the theory exam—it’s not just about the moves, but also about understanding the roots of this dynamic dance form.',
              icon: '🎓',
              image: foundationCourseImage
            },
            {
              title: 'Intermediate Course',
              description: 'Now it’s time to take your Hip-Hop journey to the next level. In Level 2, we’ll explore the diverse styles within Hip-Hop, including breaking, locking, popping, and the energetic house culture. Get ready to break it down, lock it up, pop and flow as you master the distinct elements of each style. This level is all about expanding your repertoire and becoming a well-rounded Hip-Hop dancer.',
              icon: '🎓',
              image: technicalCourseImage
            },
            {
              title: 'Advanced Course',
              description: 'This level delves into the finer aspects of dance, focusing on creativity, choreography, and self-expression. Develop your skills in body control, enhance your mindset, and explore the depths of musicality. This level challenges you with tasks that push your boundaries, fostering innovation and individuality in your dance. By the end, you’ll not only be a skilled dancer but a true artist in the world of Hip-Hop.',
              icon: '🎓',
              image: advancedCourseImage
            }
          ].map((item, idx) => (
            <div key={idx} className="card" style={{padding: '2rem', minHeight: '320px', display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between', background: 'rgba(255,255,255,0.04)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <div style={{fontSize: '2rem'}}>{item.icon}</div>
                <h3 style={{fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#fff'}}>{item.title}</h3>
              </div>
              {item.image && (
                <div style={{height: '180px', borderRadius: '0.75rem', overflow: 'hidden', background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))', border: '1px solid rgba(255,255,255,0.08)'}}>
                  <img src={item.image} alt={`${item.title} illustration`} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                </div>
              )}
              <p style={{color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.75}}>{item.description}</p>
              <span style={{fontSize: '0.875rem', color: 'var(--color-text-muted)'}}>Certified curriculum with completion badge</span>
            </div>
          ))}
        </div>
      </div>

      {/* Brochure download section */}
      <div style={{marginTop: '3rem', padding: '2.5rem 2rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '1rem', border: '1px solid rgba(255, 255, 255, 0.08)', textAlign: 'center'}}>
        <p style={{margin: '0 0 0.75rem', color: 'var(--color-text-muted)', fontSize: '0.95rem'}}>Want a printable overview of our complete program, schedules, and pricing?</p>
        <h3 style={{margin: 0, fontSize: 'clamp(1.5rem, 2.2vw, 2rem)', fontWeight: 800, color: '#ffffff'}}>Download the K-Unit Dance School Brochure</h3>
        <p style={{margin: '1rem auto 0', maxWidth: '720px', color: 'rgba(255,255,255,0.75)'}}>Get the full course roadmap, certification details, and enrollment benefits in one polished PDF.</p>
        <a
          href="/brochure/K-Unit Dance School Brochure.pdf"
          download
          style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginTop: '1.5rem', padding: '0.95rem 1.75rem', borderRadius: '999px', background: 'linear-gradient(135deg, #ff006e, #8338ec)', color: '#fff', fontWeight: 700, textDecoration: 'none', boxShadow: '0 18px 50px rgba(255, 0, 110, 0.18)'}}
        >
          Download Brochure
        </a>
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

