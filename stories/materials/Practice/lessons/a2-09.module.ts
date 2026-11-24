import type { PreparedPractice } from '../Practice.types'
import data from './a2-09.json'
import asset0 from '../../Course/assets/audio/A209-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A209-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A209-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A209-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A209-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A209-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A209-D81.7.mp3'
import asset7 from '../../Course/assets/audio/A209-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a2-09.shadowing.01',
      text: 'Long time no see! Are you still living in the same city?',
      src: asset0,
    },
    {
      id: 'a2-09.shadowing.02',
      text: 'No, I moved to Porto in 2023.',
      src: asset1,
    },
    {
      id: 'a2-09.shadowing.03',
      text: 'How long have you lived there?',
      src: asset2,
    },
    {
      id: 'a2-09.shadowing.04',
      text: 'Since 2023. I really like it, and I’ve made some good friends.',
      src: asset3,
    },
    {
      id: 'a2-09.shadowing.05',
      text: 'That’s great. Have you taken up any new hobbies?',
      src: asset4,
    },
    {
      id: 'a2-09.shadowing.06',
      text: 'Yes, I started a photography group in 2025.',
      src: asset5,
    },
    {
      id: 'a2-09.shadowing.07',
      text: 'Do you still go every week?',
      src: asset6,
    },
    {
      id: 'a2-09.shadowing.08',
      text: 'I do. We meet on Sundays. What’s changed in your life?',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
