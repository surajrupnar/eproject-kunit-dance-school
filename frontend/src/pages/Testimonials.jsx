import React, { useState } from 'react'

const textTestimonials = [
  {
    name: 'Asha Kumar',
    role: 'Parent',
    age: '35',
    text: 'My son improved his confidence and technique within just 3 months. The instructors are amazing and really care about each student.',
    rating: 5
  },
  {
    name: 'Rajat Singh',
    role: 'Student',
    age: '16',
    text: 'Best place to learn contemporary and hip hop. The energy here is incredible, and I\'ve made friends for life.',
    rating: 5
  },
  {
    name: 'Priya Patel',
    role: 'Parent',
    age: '40',
    text: 'My daughter loves her Bollywood classes. She\'s performing on stage now and it\'s amazing to see her confidence grow.',
    rating: 5
  },
  {
    name: 'Vikram Sharma',
    role: 'Student',
    age: '20',
    text: 'The choreography is always fresh and exciting. I\'ve learned so much about different dance styles in just a year.',
    rating: 5
  }
]

const videoTestimonials = [
  {
    name: 'Karan Gaikwad',
    role: 'choreography by K-Unit-Dance-School',
    age: 'Age group 10-18',
    title: 'DANCE COVER VIDEO by K-UNIT-DANCE-SCHOOL',
    description: 'SHRI KRISHNNA | DANCE COVER VIDEO | K UNIT DANCE SCHOOL .',
    videoUrl: 'https://www.youtube.com/embed/5-QwyCSDkWM'
  },
  {
    name: 'Karan Gaikwad',
    role: 'choreography by K-Unit-Dance-School',
    age: 'Age group 18-25',
    title: 'TAMMA the (fearless brother) new action short film / by Karan Gaikwad',
    description: 'Choreography by K-Unit-Dance-School',
    videoUrl: 'https://www.youtube.com/embed/ichiKk0he4U'
  }
]

const youtubeTestimonials = [
  {
    name: 'Dance Studio Reviews',
    title: 'K Unit Dance School - Best Dance Studio in City',
    channel: 'Local Reviews Channel',
    link: 'https://www.youtube.com/watch?v=1sAcyoVxQEk',
    thumbnail: '🎬'
  },
  {
    name: 'Performance Highlights',
    title: 'K Unit Dance School Annual Recital 2024',
    channel: 'K Unit Official',
    link: 'https://www.youtube.com/watch?v=RGriGxFf_6o',
    thumbnail: '🎬'
  },
  {
    name: 'Workshops & Classes',
    title: 'Summer Dance Workshop - Behind the Scenes',
    channel: 'K Unit Dance School',
    link: 'https://www.youtube.com/watch?v=xix8_KFzrxE&pp=0gcJCT4LAYcqIYzv',
    thumbnail: '🎬'
  }
]

const instagramTestimonials = [
  {
    name: '@k_unit_dance_school__official',
    title: 'Amazing dance!',
    handle: '@k_unit_dance_school__official',
    link: 'https://www.instagram.com/k_unit_dance_school__official/reel/DZsVFKGMgm3/',
    likes: '7k+',
    emoji: '💃'
  },
  {
    name: '@hip_hop_vibes_',
    title: 'Living my best dance life at K Unit 🔥',
    handle: 'hip_hop_vibes_',
    link: 'https://www.instagram.com/p/DYtWP1fK0J7/',
    likes: '',
    emoji: '🕺'
  },
  {
    name: '@bollywood_dancer_official',
    title: 'Grateful for amazing instructors and friends ✨',
    handle: 'bollywood_dancer_official',
    link: 'https://www.instagram.com/p/DPwJREKCqVG/',
    likes: '',
    emoji: '💫'
  },
  {
    name: '@contemporary_soul',
    title: 'Dance is my therapy, K Unit is my home 🏠',
    handle: 'contemporary_soul',
    link: 'https://www.instagram.com/p/DO8Qj3zjC2r/',
    likes: '387',
    emoji: '🎭'
  }
]

export default function Testimonials(){
  const [activeTab, setActiveTab] = useState('text')

  const tabStyles = {
    container: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '2rem',
      borderBottom: '2px solid rgba(255, 0, 110, 0.1)',
      overflowX: 'auto',
      paddingBottom: '1rem'
    },
    tab: (isActive) => ({
      padding: '0.75rem 1.5rem',
      background: 'transparent',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
      borderBottom: isActive ? '3px solid var(--color-accent)' : 'none',
      transition: 'all 200ms ease-out',
      whiteSpace: 'nowrap'
    })
  }

  return (
    <div style={{maxWidth: '1280px', margin: '0 auto', width: '100%'}}>
      <div style={{marginBottom: '3rem', textAlign: 'center'}}>
        <h1 className="text-gradient" style={{fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', marginBottom: '1rem'}}>
          What Our Community Says
        </h1>
        <p style={{fontSize: '1.125rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto'}}>
          Hear from our students and parents about their amazing journey with K Unit Dance School
        </p>
      </div>

      {/* Tabs */}
      <div style={tabStyles.container}>
        {[
          { id: 'text', label: '💬 Text Testimonials', icon: '📝' },
          { id: 'video', label: '🎬 Video Testimonials', icon: '🎥' },
          { id: 'youtube', label: '▶️ YouTube Links', icon: '📹' },
          { id: 'instagram', label: '📸 Instagram', icon: '📷' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={tabStyles.tab(activeTab === tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Text Testimonials */}
      {activeTab === 'text' && (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
          {textTestimonials.map((t, idx) => (
            <div key={idx} className="card dance-shadow-3" style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '1rem'
            }}>
              <div style={{marginBottom: '1rem', fontSize: '1.25rem'}}>
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>

              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: 'var(--color-text-muted)',
                marginBottom: '1.5rem',
                flex: 1,
                fontStyle: 'italic',
                borderLeft: '3px solid rgba(255, 0, 110, 0.3)',
                paddingLeft: '1rem'
              }}>
                "{t.text}"
              </p>

              <div style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 0, 110, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${idx % 3 === 0 ? '#ff006e' : idx % 3 === 1 ? '#8338ec' : '#3a86ff'}, ${idx % 3 === 0 ? '#ff7a9d' : idx % 3 === 1 ? '#b188ff' : '#7bb3ff'})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.25rem'
                }}>
                  {t.name.charAt(0)}
                </div>

                <div>
                  <div style={{
                    fontWeight: '700',
                    color: 'var(--color-text)',
                    fontSize: '1rem'
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-subtle)'
                  }}>
                    {t.role} • {t.age} years old
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Video Testimonials */}
      {activeTab === 'video' && (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
          {videoTestimonials.map((v, idx) => (
            <div key={idx} className="card dance-shadow-1" style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '1rem',
              overflow: 'hidden'
            }}>
              <div style={{
                width: '100%',
                paddingBottom: '56.25%',
                position: 'relative',
                background: 'rgba(45, 27, 71, 0.4)',
                marginBottom: '1rem',
                overflow: 'hidden',
                borderRadius: '0.75rem'
              }}>
                <iframe
                  width="100%"
                  height="315"
                  src={v.videoUrl}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '0.75rem'
                  }}
                />
              </div>

              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                marginBottom: '0.5rem',
                background: 'linear-gradient(90deg, #ff006e, #8338ec)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {v.title}
              </h3>

              <p style={{
                fontSize: '0.95rem',
                color: 'var(--color-text-subtle)',
                marginBottom: '1rem',
                flex: 1
              }}>
                {v.description}
              </p>

              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255, 0, 110, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <div style={{fontSize: '1.5rem'}}>🎬</div>
                <div>
                  <div style={{fontWeight: '700', fontSize: '0.875rem', color: 'var(--color-text)'}}>
                    {v.name}
                  </div>
                  <div style={{fontSize: '0.75rem', color: 'var(--color-text-subtle)'}}>
                    {v.role} • {v.age} years old
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* YouTube Links */}
      {activeTab === 'youtube' && (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
          {youtubeTestimonials.map((y, idx) => (
            <a
              key={idx}
              href={y.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration: 'none'}}
            >
              <div className="card dance-shadow-2" style={{
                padding: '2rem',
                borderRadius: '1rem',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 200ms ease-out'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  {y.thumbnail}
                </div>

                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  color: 'var(--color-accent)',
                  flex: 1
                }}>
                  {y.title}
                </h3>

                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--color-text-subtle)',
                  marginBottom: '1rem'
                }}>
                  {y.name}
                </p>

                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 0, 110, 0.1)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{fontSize: '0.75rem', color: 'var(--color-text-subtle)'}}>
                    {y.channel}
                  </span>
                  <span style={{color: 'var(--color-accent)', fontWeight: '600'}}>
                    Watch ▶️
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Instagram Links */}
      {activeTab === 'instagram' && (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem'}}>
          {instagramTestimonials.map((i, idx) => (
            <a
              key={idx}
              href={i.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{textDecoration: 'none'}}
            >
              <div className="card dance-shadow-3" style={{
                padding: '1.5rem',
                borderRadius: '1rem',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.05), rgba(131, 56, 236, 0.05))',
                border: '1px solid rgba(255, 0, 110, 0.15)',
                transition: 'all 200ms ease-out'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = 'rgba(255, 0, 110, 0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255, 0, 110, 0.15)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  {i.emoji}
                </div>

                <p style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  color: 'var(--color-text)',
                  flex: 1,
                  minHeight: '50px'
                }}>
                  {i.title}
                </p>

                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 0, 110, 0.2)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-text)'}}>
                      @{i.handle}
                    </div>
                    <div style={{fontSize: '0.75rem', color: 'var(--color-text-subtle)', marginTop: '0.25rem'}}>
                      {i.likes} likes
                    </div>
                  </div>
                  <span style={{fontSize: '1.25rem', color: 'var(--color-accent)'}}>
                    📸
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* CTA Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(131, 56, 236, 0.1))',
        borderRadius: '1rem',
        border: '1px solid rgba(255, 0, 110, 0.2)',
        padding: '3rem 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem'}}>Join Our Dancing Family</h2>
        <p style={{color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.05rem'}}>
          Be part of a thriving community of dancers and create your own success story
        </p>
        <button className="btn-primary" style={{fontSize: '1rem', fontWeight: '600'}}>
          Start Your Journey Today 🕺
        </button>
      </div>
    </div>
  )
}

