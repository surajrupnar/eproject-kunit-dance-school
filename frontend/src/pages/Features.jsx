import React from 'react'

export default function Features(){
  const features = [
    {title: 'Professional Instructors', desc: 'Industry-experienced choreographers and teachers.'},
    {title: 'State-of-the-art Studio', desc: 'Spacious studios with proper lighting and sound.'},
    {title: 'Diverse Dance Styles', desc: 'Hip Hop, Contemporary, Bollywood, Salsa and more.'},
    {title: 'Performance Opportunities', desc: 'Regular recitals and competition preparation.'}
  ]

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map(f=> (
        <div key={f.title} className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-xl text-pink-300">{f.title}</h3>
          <p className="mt-2 text-gray-300">{f.desc}</p>
        </div>
      ))}
    </div>
  )
}

