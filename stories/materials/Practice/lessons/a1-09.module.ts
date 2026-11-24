import type { PreparedPractice } from '../Practice.types'
import data from './a1-09.json'
import asset0 from '../../Course/assets/audio/A109-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A109-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A109-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A109-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A109-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A109-D81.6.mp3'
import asset6 from '../assets/characters/kim.webp'
import asset7 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a1-09.shadowing.01',
      text: 'Excuse me. Is there a café near the hotel?',
      src: asset0,
    },
    {
      id: 'a1-09.shadowing.02',
      text: 'Yes, there is. Go straight and turn right at the first street.',
      src: asset1,
    },
    {
      id: 'a1-09.shadowing.03',
      text: 'Is it next to the pharmacy?',
      src: asset2,
    },
    {
      id: 'a1-09.shadowing.04',
      text: 'Yes. The pharmacy is on the same street.',
      src: asset3,
    },
    {
      id: 'a1-09.shadowing.05',
      text: 'Great. And is there a park here?',
      src: asset4,
    },
    {
      id: 'a1-09.shadowing.06',
      text: 'Yes. Go straight and take the second right. The park is at the end.',
      src: asset5,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset6,
    '/flashcards/course-characters/ana/image.webp': asset7,
  },
}
export default prepared
