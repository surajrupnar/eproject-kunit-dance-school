import React from 'react'

export default function Portfolio(){
  return (
    <div className="card hero-bg" style={{padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1 className="text-gradient" style={{fontSize: '1.75rem', margin: 0}}>Portfolio — Karan</h1>
        <a href="/resourese/Karan%20.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{textDecoration: 'none'}}>Open PDF</a>
      </div>

      <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
        <div style={{flex: '1 1 480px', minHeight: '60vh', borderRadius: '0.5rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)'}}>
          <iframe src="/resourese/Karan%20.pdf" title="Karan PDF" style={{width: '100%', height: '100%', minHeight: '60vh', border: 'none'}} />
        </div>

        <aside className="card" style={{width: '320px'}}>
          <h3 style={{marginTop: 0}}>About this portfolio</h3>
          <p style={{color: 'var(--color-text-muted)'}}>This page displays the original PDF. Use the viewer to browse pages; use the button to open or download the PDF.</p>

          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem'}}>
            <a href="/resourese/Karan%20.pdf#page=1" className="btn-primary" style={{textAlign: 'center', textDecoration: 'none'}}>Page 1</a>
            <a href="/resourese/Karan%20.pdf#page=2" className="btn-primary" style={{textAlign: 'center', textDecoration: 'none'}}>Page 2</a>
          </div>
        </aside>
      </div>
    </div>
  )
}
