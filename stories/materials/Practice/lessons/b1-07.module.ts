import type { PreparedPractice } from '../Practice.types'
import data from './b1-07.json'
import asset0 from '../../Course/assets/audio/B107-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B107-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B107-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B107-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B107-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B107-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B107-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B107-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b1-07.shadowing.01',
      text: 'Did you make the connection? You only had thirty-five minutes.',
      src: asset0,
    },
    {
      id: 'b1-07.shadowing.02',
      text: 'No. The first flight was fifty minutes late, so I missed it.',
      src: asset1,
    },
    {
      id: 'b1-07.shadowing.03',
      text: 'That’s frustrating. Was there a direct flight when you booked?',
      src: asset2,
    },
    {
      id: 'b1-07.shadowing.04',
      text: 'Yes, but it cost more. I should have allowed more time between flights.',
      src: asset3,
    },
    {
      id: 'b1-07.shadowing.05',
      text: 'You couldn’t have known about the delay, though. What can you do now?',
      src: asset4,
    },
    {
      id: 'b1-07.shadowing.06',
      text: 'I’m waiting for the desk to confirm another flight.',
      src: asset5,
    },
    {
      id: 'b1-07.shadowing.07',
      text: 'I’d also check what your travel insurance covers, without assuming it pays for everything.',
      src: asset6,
    },
    {
      id: 'b1-07.shadowing.08',
      text: 'I will. Next time I’d compare the arrival time as well as the price.',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
