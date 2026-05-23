import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Announcements(){
  const [items, setItems] = useState([])

  useEffect(()=>{
    axios.get('/api/announcements')
      .then(r => setItems(r.data || []))
      .catch(()=>{})
  },[])

  if (!items.length) return null

  return (
    <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-blue-900 text-white p-3">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        <strong className="text-xl">Announcements:</strong>
        <div className="flex-1">
          {items.map(a => (
            <div key={a.id} className="py-1 border-b border-purple-700/40">
              <div className="text-sm opacity-90">{new Date(a.announcedAt).toLocaleString()}</div>
              <div className="font-medium">{a.message}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

