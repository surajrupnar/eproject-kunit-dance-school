import React, { useState } from 'react'
import axios from 'axios'

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',phone:'',message:''})
  const [status, setStatus] = useState(null)
  const [focused, setFocused] = useState(null)

  function submit(e){
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('validation')
      return
    }
    // Prepare WhatsApp link using provided phone number (or fallback to business number)
    const rawPhone = (form.phone || '').toString()
    let digits = rawPhone.replace(/\D/g, '')
    if (digits.length === 0) {
      // fallback business number (country code +91)
      digits = '919665532331'
    } else if (digits.length === 10) {
      // assume local 10-digit number, prefix India country code
      digits = '91' + digits
    }

    const message = `New contact message from ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\n\nMessage:\n${form.message}`
    const waUrl = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`

    // Open WhatsApp in new tab for the user to send
    try {
      window.open(waUrl, '_blank')
    } catch (err) {
      console.warn('Could not open WhatsApp URL', err)
    }

    // Still post to API (if available) for records
    axios.post('/api/inquiries', form)
      .then(()=> {
        setStatus('sent')
        setForm({name:'',email:'',phone:'',message:''})
        setTimeout(() => setStatus(null), 5000)
      })
      .catch(()=> {
        setStatus('error')
        setTimeout(() => setStatus(null), 5000)
      })
  }

  const inputStyle = (field) => ({
    width: '100%',
    padding: '0.875rem 1rem',
    borderRadius: '0.5rem',
    border: `2px solid ${focused === field ? 'rgba(255, 0, 110, 0.5)' : 'rgba(255, 0, 110, 0.1)'}`,
    background: 'rgba(45, 27, 71, 0.6)',
    color: 'var(--color-text)',
    fontSize: '1rem',
    transition: 'all 200ms ease-out',
    boxShadow: focused === field ? '0 0 12px rgba(255, 0, 110, 0.2)' : 'none',
    '::placeholder': {
      color: 'var(--color-text-subtle)'
    }
  })

  return (
    <div style={{maxWidth: '1280px', margin: '0 auto', width: '100%'}}>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem'}}>
        {/* Contact Info */}
        <div>
          <h1 className="text-gradient" style={{fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '900', marginBottom: '1.5rem'}}>
            Get in Touch
          </h1>
          <p style={{fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6'}}>
            Have questions about our courses? Want to join K Unit Dance School? Reach out to us and we'll help you get started on your dance journey!
          </p>

          {/* Contact details */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem'}}>
            <div className="card" style={{padding: '1.5rem'}}>
              <div style={{fontSize: '1.75rem', marginBottom: '0.75rem'}}>📍</div>
              <h3 style={{fontWeight: '700', marginBottom: '0.5rem'}}>Location</h3>
              <p style={{fontSize: '0.95rem', color: 'var(--color-text-subtle)'}}>K Unit Dance School Studio, Block No. 47,Nandhi Bazar, near water tank, Koyna Colony, Gandhinagar, Maharashtra 416119</p>
            </div>
            
            <div className="card" style={{padding: '1.5rem'}}>
              <div style={{fontSize: '1.75rem', marginBottom: '0.75rem'}}>📞</div>
              <h3 style={{fontWeight: '700', marginBottom: '0.5rem'}}>Phone</h3>
              <p style={{fontSize: '0.95rem', color: 'var(--color-text-subtle)'}}>+91 96655 32331</p>
            </div>

            <div className="card" style={{padding: '1.5rem'}}>
              <div style={{fontSize: '1.75rem', marginBottom: '0.75rem'}}>📧</div>
              <h3 style={{fontWeight: '700', marginBottom: '0.5rem'}}>Email</h3>
              <p style={{fontSize: '0.95rem', color: 'var(--color-text-subtle)'}}>info@kunitdance.com</p>
            </div>

            <div className="card" style={{padding: '1.5rem'}}>
              <div style={{fontSize: '1.75rem', marginBottom: '0.75rem'}}>🕒</div>
              <h3 style={{fontWeight: '700', marginBottom: '0.5rem'}}>Hours</h3>
              <p style={{fontSize: '0.95rem', color: 'var(--color-text-subtle)'}}>Mon - Sun: 4 PM - 9 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="card" style={{padding: '2rem', borderRadius: '1rem'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem', background: 'linear-gradient(90deg, #ff006e, #8338ec)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
              Send us a Message
            </h2>

            <form style={{display: 'flex', flexDirection: 'column', gap: '1.25rem'}} onSubmit={submit}>
              {/* Name */}
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-text-muted)'}}>Full Name *</label>
                <input
                  required
                  value={form.name}
                  onChange={e=>setForm({...form,name:e.target.value})}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  placeholder="Your name"
                  style={inputStyle('name')}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-text-muted)'}}>Email Address *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={e=>setForm({...form,email:e.target.value})}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder="your@email.com"
                  style={inputStyle('email')}
                />
              </div>

              {/* Phone */}
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-text-muted)'}}>Phone Number</label>
                <input
                  value={form.phone}
                  onChange={e=>setForm({...form,phone:e.target.value})}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused(null)}
                  placeholder="+91 XXXXX XXXXX"
                  style={inputStyle('phone')}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600', color: 'var(--color-text-muted)'}}>Message *</label>
                <textarea
                  required
                  value={form.message}
                  onChange={e=>setForm({...form,message:e.target.value})}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell us about your interest in dance..."
                  style={{
                    ...inputStyle('message'),
                    minHeight: '120px',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Status Messages */}
              {status === 'sent' && (
                <div style={{
                  padding: '1rem',
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: '0.5rem',
                  color: '#22c55e',
                  fontSize: '0.95rem',
                  textAlign: 'center'
                }}>
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div style={{
                  padding: '1rem',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '0.5rem',
                  color: '#ef4444',
                  fontSize: '0.95rem',
                  textAlign: 'center'
                }}>
                  ✕ Submission failed. Please try again later.
                </div>
              )}
              {status === 'validation' && (
                <div style={{
                  padding: '1rem',
                  background: 'rgba(249, 115, 22, 0.1)',
                  border: '1px solid rgba(249, 115, 22, 0.3)',
                  borderRadius: '0.5rem',
                  color: '#f97316',
                  fontSize: '0.95rem',
                  textAlign: 'center'
                }}>
                  ⚠ Please fill in all required fields.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="btn-primary"
                style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginTop: '0.5rem',
                  border: 'none'
                }}
              >
                Send Message 📨
              </button>

              <p style={{fontSize: '0.75rem', color: 'var(--color-text-subtle)', textAlign: 'center', marginTop: '0.5rem'}}>
                We'll respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

