import React from 'react'

export default function Features(){
  const features = [
    {
      icon: '👨‍🏫',
      title: 'Professional Instructors',
      desc: 'Industry-experienced choreographers and teachers with years of performance background.',
      details: ['International experience', 'Certified trainers', 'Continuous learning']
    },
    {
      icon: '🏢',
      title: 'State-of-the-art Studio',
      desc: 'Spacious studios with proper lighting, sound system, and mirrored walls for perfect training.',
      details: ['Modern equipment', 'Climate controlled', 'Safe & clean space']
    },
    {
      icon: '🎨',
      title: 'Diverse Dance Styles',
      desc: 'Learn from the hottest dance trends: Hip Hop, Contemporary, Bollywood, Salsa and more.',
      details: ['Multiple genres', 'Fusion classes', 'Trending choreography']
    },
    {
      icon: '🏆',
      title: 'Performance Opportunities',
      desc: 'Regular recitals, stage performances, and competition preparation to showcase your talent.',
      details: ['Annual recitals', 'Competition prep', 'Social events']
    },
    {
      icon: '👥',
      title: 'Supportive Community',
      desc: 'Join a vibrant community of dancers where everyone celebrates and supports each other.',
      details: ['Group performances', 'Peer mentorship', 'Social gatherings']
    },
    {
      icon: '📱',
      title: 'Flexible Scheduling',
      desc: 'Classes available for all ages and skill levels, with flexible timing options.',
      details: ['Multiple batches', 'All skill levels', 'Makeup classes available']
    }
  ]

  return (
    <div style={{maxWidth: '1280px', margin: '0 auto', width: '100%'}}>
      <div style={{marginBottom: '3rem', textAlign: 'center'}}>
        <h1 className="text-gradient" style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', marginBottom: '1rem'}}>
          Why Choose K Unit?
        </h1>
        <p style={{fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto'}}>
          We're committed to providing the best dance training experience with world-class facilities and expert guidance
        </p>
      </div>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem'}}>
        {features.map((f, idx) => (
          <div key={f.title} className="card dance-shadow-2" style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '1rem'
          }}>
            {/* Background accent */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              background: `rgba(${idx % 3 === 0 ? '255, 0, 110' : idx % 3 === 1 ? '131, 56, 236' : '58, 134, 255'}, 0.05)`,
              borderRadius: '50%',
              pointerEvents: 'none'
            }}/>

            {/* Content */}
            <div style={{position: 'relative', zIndex: 1}}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                animation: 'float-up 3s ease-in-out infinite'
              }}>
                {f.icon}
              </div>
              
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '0.75rem',
                background: idx % 3 === 0 ? 'linear-gradient(90deg, #ff006e, #ff7a9d)' : idx % 3 === 1 ? 'linear-gradient(90deg, #8338ec, #b188ff)' : 'linear-gradient(90deg, #3a86ff, #7bb3ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {f.title}
              </h3>
              
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--color-text-muted)',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {f.desc}
              </p>

              {/* Details list */}
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                fontSize: '0.875rem',
                color: 'var(--color-text-subtle)'
              }}>
                {f.details.map((detail, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: idx % 3 === 0 ? '#ff006e' : idx % 3 === 1 ? '#8338ec' : '#3a86ff'
                    }}/>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Stats section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.08), rgba(131, 56, 236, 0.08))',
        borderRadius: '1rem',
        border: '1px solid rgba(255, 0, 110, 0.1)',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{fontSize: '1.75rem', fontWeight: '700', marginBottom: '2rem'}}>Our Track Record</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem'}}>
          {[
            { number: '500+', label: 'Happy Students' },
            { number: '50+', label: 'Dance Shows' },
            { number: '10+', label: 'Years Experience' },
            { number: '100%', label: 'Student Satisfaction' }
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-gradient" style={{fontSize: '2.5rem', fontWeight: '900', marginBottom: '0.5rem'}}>
                {stat.number}
              </div>
              <div style={{fontSize: '0.95rem', color: 'var(--color-text-muted)'}}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

