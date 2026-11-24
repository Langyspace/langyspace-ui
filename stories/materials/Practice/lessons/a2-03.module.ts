import type { PreparedPractice } from '../Practice.types'
import data from './a2-03.json'
import asset0 from '../../Course/assets/audio/A203-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A203-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A203-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A203-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A203-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A203-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A203-D81.7.mp3'
import asset7 from '../../Course/assets/audio/A203-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a2-03.shadowing.01',
      text: 'You’re here! Are you all right?',
      src: asset0,
    },
    {
      id: 'a2-03.shadowing.02',
      text: 'Yes, sorry I’m late. I was waiting for the bus when it started raining.',
      src: asset1,
    },
    {
      id: 'a2-03.shadowing.03',
      text: 'Oh no! Did you have an umbrella?',
      src: asset2,
    },
    {
      id: 'a2-03.shadowing.04',
      text: 'No. I went into a shop, and then I missed the bus.',
      src: asset3,
    },
    {
      id: 'a2-03.shadowing.05',
      text: 'What did you do after that?',
      src: asset4,
    },
    {
      id: 'a2-03.shadowing.06',
      text: 'I took the next bus, but it was very slow.',
      src: asset5,
    },
    {
      id: 'a2-03.shadowing.07',
      text: 'Don’t worry. We can still have lunch.',
      src: asset6,
    },
    {
      id: 'a2-03.shadowing.08',
      text: 'Thanks for waiting. Next time I’ll leave earlier!',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
