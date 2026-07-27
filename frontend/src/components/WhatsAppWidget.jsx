import React from 'react'
import { WHATSAPP_CLEAN_NUMBER, WHATSAPP_DEFAULT_MESSAGE_ENCODED } from '../constants'

export default function WhatsAppWidget({ phoneNumber = WHATSAPP_CLEAN_NUMBER }){
  const clean = (phoneNumber || '').replace(/[^0-9]/g, '')
  const text = WHATSAPP_DEFAULT_MESSAGE_ENCODED
  // Use the api.whatsapp.com URL format which includes explicit phone and extra params
  const href = `https://api.whatsapp.com/send/?phone=${clean}&text=${text}&type=phone_number&app_absent=0`

  const openChat = (e) => {
    // open externally in a new tab/window to support web and desktop clients
    e.preventDefault()
    window.open(href, '_blank', 'noopener')
  }

  return (
    <a href={href} onClick={openChat} className="fixed right-4 bottom-4 bg-green-500 p-4 rounded-full shadow-lg flex items-center justify-center" aria-label="Contact K Unit on WhatsApp">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.85 11.85 0 0012.03.5C6.07.5 1.46 5.11 1.46 11.07c0 1.95.5 3.86 1.46 5.56L.5 23.5l6.02-2.01c1.64.9 3.53 1.39 5.51 1.39 5.96 0 10.57-4.61 10.57-10.57 0-3.01-1.17-5.82-3.09-7.83zM12.03 21.5c-1.7 0-3.37-.45-4.82-1.3l-.34-.2-3.58 1.2 1.22-3.5-.21-.36A8.4 8.4 0 013.46 11.07c0-4.67 3.8-8.47 8.57-8.47 4.77 0 8.57 3.8 8.57 8.47 0 4.67-3.8 8.47-8.57 8.47z"/></svg>
    </a>
  )
}

