import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Courses(){
  const [courses, setCourses] = useState([])

  useEffect(()=>{
    axios.get('/api/courses')
      .then(r => setCourses(r.data || []))
      .catch(()=>{
        // fallback sample courses
        setCourses([
          {id:1,name:'Hip Hop',ageGroup:'10-18',timing:'6pm - 7pm',fee:20},
          {id:2,name:'Contemporary',ageGroup:'12-25',timing:'7pm - 8pm',fee:25}
        ])
      })
  },[])

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map(c => (
        <div key={c.id} className="p-4 bg-gray-800 rounded-lg">
          <div className="h-36 bg-gray-700 rounded-md flex items-center justify-center">[Image]</div>
          <h3 className="mt-3 text-lg text-purple-300">{c.name}</h3>
          <p className="text-sm text-gray-300">{c.description || ''}</p>
          <div className="mt-2 text-sm text-gray-400">Age: {c.ageGroup} • {c.timing}</div>
          <div className="mt-3 font-bold text-pink-400">Fee: ${c.fee}</div>
        </div>
      ))}
    </div>
  )
}

