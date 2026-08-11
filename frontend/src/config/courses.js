import hiphop01 from '../assets/cards/hiphop/hiphop-1.png'
import hiphop02 from '../assets/cards/hiphop/hiphop-2.jpg'
import hiphop03 from '../assets/cards/hiphop/hiphop-3.jpg'
import contemporary01 from '../assets/cards/contemporary/contemporary-1.jpg'
import contemporary02 from '../assets/cards/contemporary/contemporary-2.jpg'
import contemporary03 from '../assets/cards/contemporary/contemporary-3.jpg'
import bollywood01 from '../assets/cards/bollywood/bollywood-1.jpg'
import bollywood02 from '../assets/cards/bollywood/bollywood-2.jpg'

export const DEFAULT_HIGHLIGHTS_TITLE = "What you'll learn"

export const COURSES = [
  {
    id: 1,
    name: 'Hip Hop',
    shortDescription: 'High-energy urban dance style with modern beats',
    longDescription: 'High-energy urban dance classes built around modern beats and street culture. Learn foundational grooves, popping and locking basics, and freestyle confidence in a fun and energetic space. No prior dance experience needed — just bring your energy and love for the music.',
    highlightsTitle: "Styles you'll learn",
    highlights: [
      '⁠Breaking (Breakdance)','Popping', 'Locking', 'House Dance','Krumping',
      'Waacking','⁠Voguing'
    ],
    images: [hiphop01, hiphop02, hiphop03]
  },
  {
    id: 2,
    name: 'Contemporary',
    shortDescription: 'Expressive fluid movements with emotional connection',
    longDescription: 'Contemporary dance blends classical technique with modern, expressive movement. Classes focus on fluidity, breath, and emotional storytelling while building body awareness, control, and artistry. Perfect for dancers who want to move with freedom, depth, and grace.',
    highlightsTitle: "What you'll learn",
    highlights: [
      'Classical technique blended with modern movement',
      'Fluidity, breath, and emotional storytelling',
      'Body awareness, control, and artistry',
      'Suitable for dancers at any level'
    ],
    images: [contemporary01, contemporary02, contemporary03]
  },
  {
    id: 3,
    name: 'Bollywood',
    shortDescription: 'Traditional Indian film dance with vibrant choreography',
    longDescription: 'Step into the colorful world of Bollywood dance — a vibrant fusion of traditional Indian dance and modern film choreography. Learn expressive expressions, rhythmic footwork, and full-fledged routines that bring the energy of Indian cinema to life. Fun for all ages and levels.',
    highlightsTitle: "What you'll learn",
    highlights: [
      'Vibrant fusion of traditional Indian and film dance',
      'Expressive expressions and rhythmic footwork',
      'Full-fledged routines from Indian cinema',
      'Fun for all ages and levels'
    ],
    images: [bollywood01, bollywood02]
  }
]
