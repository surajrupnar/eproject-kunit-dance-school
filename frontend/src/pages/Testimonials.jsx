import React from 'react'

const sample = [
  {name:'Asha', role:'Parent', text:'My son improved his confidence and technique.'},
  {name:'Rajat', role:'Student', text:'Best place to learn contemporary and hip hop.'}
]

export default function Testimonials(){
  return (
    <div className="max-w-4xl mx-auto grid gap-4">
      {sample.map((s,i)=> (
        <div key={i} className="p-4 bg-gray-800 rounded-lg">
          <div className="font-semibold text-pink-300">{s.name} <span className="text-sm text-gray-400">({s.role})</span></div>
          <div className="mt-2 text-gray-300">"{s.text}"</div>
        </div>
      ))}
    </div>
  )
}

