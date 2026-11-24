import type { PreparedPractice } from '../Practice.types'
import data from './a2-10.json'
import asset0 from '../../Course/assets/audio/A210-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A210-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A210-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A210-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A210-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A210-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A210-D81.7.mp3'
import asset7 from '../../Course/assets/audio/A210-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a2-10.shadowing.01',
      text: 'Which apartment do you think is better for our trip?',
      src: asset0,
    },
    {
      id: 'a2-10.shadowing.02',
      text: 'A is more expensive, but it has two beds.',
      src: asset1,
    },
    {
      id: 'a2-10.shadowing.03',
      text: 'B is cheaper. Is one bed enough for two friends?',
      src: asset2,
    },
    {
      id: 'a2-10.shadowing.04',
      text: 'Not for me. I’d like my own bed, and A is closer to the centre.',
      src: asset3,
    },
    {
      id: 'a2-10.shadowing.05',
      text: 'That’s true. B is a twenty-minute walk away.',
      src: asset4,
    },
    {
      id: 'a2-10.shadowing.06',
      text: 'For this short trip, that’s too far for me. What matters most to you?',
      src: asset5,
    },
    {
      id: 'a2-10.shadowing.07',
      text: 'The price, but I can pay more if we both have a bed.',
      src: asset6,
    },
    {
      id: 'a2-10.shadowing.08',
      text: 'Then let’s choose A and check whether it’s quiet at night.',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
