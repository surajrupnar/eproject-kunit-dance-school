import React from 'react'

export default function Profile(){
  const pdfPath = '/profile/Karan-Protfolio.pdf'

  return (
    <div style={{maxWidth: 1100, margin: '0 auto'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, marginBottom: '1rem'}}>Profile</h1>

      <div style={{marginTop: '1rem'}}>
        <iframe src={pdfPath} title="Karan Profile" style={{width:'100%', height:'90vh', border:'none', minHeight: '760px'}} />
      </div>

      <div style={{marginTop:'0.5rem'}}>
        <a href={pdfPath} target="_blank" rel="noreferrer">Open in new tab / Download PDF</a>
      </div>
    </div>
  )
}
