import portfolio01 from '../assets/protfolio/portfolio-page-01.jpg'
import portfolio02 from '../assets/protfolio/portfolio-page-02.jpg'
import portfolio03 from '../assets/protfolio/portfolio-page-03.jpg'
import portfolio04 from '../assets/protfolio/portfolio-page-04.jpg'
import portfolio05 from '../assets/protfolio/portfolio-page-05.jpg'
import portfolio06 from '../assets/protfolio/portfolio-page-06.jpg'
import portfolio07 from '../assets/protfolio/portfolio-page-07.jpg'
import portfolio08 from '../assets/protfolio/portfolio-page-08.jpg'

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
    images: [portfolio01, portfolio02, portfolio03]
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
    images: [portfolio04, portfolio05, portfolio06]
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
    images: [portfolio07, portfolio08, portfolio01]
  }
]
