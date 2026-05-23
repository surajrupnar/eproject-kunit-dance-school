import React, { useState } from 'react'
import axios from 'axios'

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',phone:'',message:''})
  const [status, setStatus] = useState(null)

  function submit(e){
    e.preventDefault()
    axios.post('/api/inquiries', form)
      .then(()=> setStatus('sent'))
      .catch(()=> setStatus('error'))
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-800 rounded-lg">
      <h2 className="text-2xl text-pink-300">Contact Us</h2>
      <form className="mt-4 space-y-3" onSubmit={submit}>
        <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" className="w-full p-2 rounded bg-gray-700" />
        <input required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="w-full p-2 rounded bg-gray-700" />
        <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone" className="w-full p-2 rounded bg-gray-700" />
        <textarea required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Message" className="w-full p-2 rounded bg-gray-700" />
        <div>
          <button className="px-4 py-2 bg-pink-500 rounded">Send Message</button>
        </div>
      </form>
      {status === 'sent' && <div className="mt-3 text-green-400">Thank you! We'll get back to you soon.</div>}
      {status === 'error' && <div className="mt-3 text-red-400">Submission failed. Please try again later.</div>}
    </div>
  )
}

