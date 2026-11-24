import type { PreparedPractice } from '../Practice.types'
import data from './b1-03.json'
import asset0 from '../../Course/assets/audio/B103-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B103-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B103-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B103-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B103-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B103-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B103-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B103-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b1-03.shadowing.01',
      text: 'Did you enjoy the show, or was the whole evening difficult?',
      src: asset0,
    },
    {
      id: 'b1-03.shadowing.02',
      text: 'The show was great, but it had already started when we arrived.',
      src: asset1,
    },
    {
      id: 'b1-03.shadowing.03',
      text: 'What time did you get there?',
      src: asset2,
    },
    {
      id: 'b1-03.shadowing.04',
      text: 'At eight twenty. We’d left late, and I’d forgotten my wristband at home.',
      src: asset3,
    },
    {
      id: 'b1-03.shadowing.05',
      text: 'Oh no. Couldn’t you just show your ticket?',
      src: asset4,
    },
    {
      id: 'b1-03.shadowing.06',
      text: 'The person at the entrance sent us to the help desk. We missed the opening act.',
      src: asset5,
    },
    {
      id: 'b1-03.shadowing.07',
      text: 'At least you got in eventually. What would you check next time?',
      src: asset6,
    },
    {
      id: 'b1-03.shadowing.08',
      text: 'I’d check the ticket and wristband before leaving, and allow more time.',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
