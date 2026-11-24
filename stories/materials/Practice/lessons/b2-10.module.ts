import type { PreparedPractice } from '../Practice.types'
import data from './b2-10.json'
import asset0 from '../../Course/assets/audio/B210-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B210-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B210-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B210-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B210-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B210-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B210-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B210-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B210-D81.9.mp3'
import asset9 from '../../Course/assets/audio/B210-D81.10.mp3'
import asset10 from '../../Course/assets/audio/B210-D81.11.mp3'
import asset11 from '../../Course/assets/audio/B210-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b2-10.shadowing.01',
      text: 'I’m sorry, but the room next to the lift is too noisy for me to sleep.',
      src: asset0,
    },
    {
      id: 'b2-10.shadowing.02',
      text: 'I’m sorry for the disturbance. We can offer earplugs.',
      src: asset1,
    },
    {
      id: 'b2-10.shadowing.03',
      text: 'Thank you, but what I need is a quiet room. I have an early presentation.',
      src: asset2,
    },
    {
      id: 'b2-10.shadowing.04',
      text: 'I understand. Is the problem mainly the lift or the street outside?',
      src: asset3,
    },
    {
      id: 'b2-10.shadowing.05',
      text: 'It was the lift that woke me repeatedly. The street isn’t the main issue.',
      src: asset4,
    },
    {
      id: 'b2-10.shadowing.06',
      text: 'That helps us find a suitable alternative. Have you already asked for a change?',
      src: asset5,
    },
    {
      id: 'b2-10.shadowing.07',
      text: 'I did ask this afternoon, but I haven’t had a confirmed option yet.',
      src: asset6,
    },
    {
      id: 'b2-10.shadowing.08',
      text: 'I can check another room, though it may not be available immediately.',
      src: asset7,
    },
    {
      id: 'b2-10.shadowing.09',
      text: 'Could you tell me when it would be ready and whether it’s away from the lift?',
      src: asset8,
    },
    {
      id: 'b2-10.shadowing.10',
      text: 'Yes. I’ll confirm those details before asking you to move.',
      src: asset9,
    },
    {
      id: 'b2-10.shadowing.11',
      text: 'I appreciate that. A different room only helps if it solves the noise problem.',
      src: asset10,
    },
    {
      id: 'b2-10.shadowing.12',
      text: 'Agreed. I’ll come back with a specific offer rather than another general apology.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
