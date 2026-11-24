import type { PreparedPractice } from '../Practice.types'
import data from './b1-04.json'
import asset0 from '../../Course/assets/audio/B104-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B104-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B104-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B104-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B104-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B104-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B104-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B104-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b1-04.shadowing.01',
      text: 'Someone has left a backpack by our table. Should we take it to reception?',
      src: asset0,
    },
    {
      id: 'b1-04.shadowing.02',
      text: 'Yes. There’s a boarding pass visible in the open pocket. The owner might be travelling.',
      src: asset1,
    },
    {
      id: 'b1-04.shadowing.03',
      text: 'Maybe, but it could be an old pass. We don’t know the date.',
      src: asset2,
    },
    {
      id: 'b1-04.shadowing.04',
      text: 'True. There’s also a charger and a black notebook.',
      src: asset3,
    },
    {
      id: 'b1-04.shadowing.05',
      text: 'Those are common things. What detail could help reception identify it?',
      src: asset4,
    },
    {
      id: 'b1-04.shadowing.06',
      text: 'The notebook has a silver star, and the key ring is a red fish.',
      src: asset5,
    },
    {
      id: 'b1-04.shadowing.07',
      text: 'That’s more useful. Let’s let the caller describe those before we suggest them.',
      src: asset6,
    },
    {
      id: 'b1-04.shadowing.08',
      text: 'Agreed. We can make a guess, but we shouldn’t hand it over without checking.',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
