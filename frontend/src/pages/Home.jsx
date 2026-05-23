import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(){
  const nav = useNavigate()
  return (
    <section className="hero-bg rounded-lg p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-pink-400 leading-tight">Move. Shine. Perform.</h1>
          <p className="mt-4 text-gray-300">K Unit Dance School — professional instructors, high-energy choreography, and stage-ready training for all ages.</p>
          <div className="mt-6">
            <button onClick={()=>nav('/courses')} className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg">Explore Courses</button>
          </div>
        </div>

        <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-400">[Hero video/image placeholder]</div>
        </div>
      </div>
    </section>
  )
}

