import type { PreparedPractice } from '../Practice.types'
import data from './b1-12.json'
import asset0 from '../../Course/assets/audio/B112-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B112-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B112-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B112-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B112-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B112-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B112-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B112-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b1-12.shadowing.01',
      text: 'Do you work better at home or in an office?',
      src: asset0,
    },
    {
      id: 'b1-12.shadowing.02',
      text: 'At home, usually, because I can concentrate without interruptions.',
      src: asset1,
    },
    {
      id: 'b1-12.shadowing.03',
      text: 'I understand that. However, I miss the quick conversations with the team.',
      src: asset2,
    },
    {
      id: 'b1-12.shadowing.04',
      text: 'Me too. Although I prefer home, I wouldn’t want to work alone all week.',
      src: asset3,
    },
    {
      id: 'b1-12.shadowing.05',
      text: 'Would a hybrid routine solve that?',
      src: asset4,
    },
    {
      id: 'b1-12.shadowing.06',
      text: 'It could, if we agree on the office days. Otherwise we might all come in separately.',
      src: asset5,
    },
    {
      id: 'b1-12.shadowing.07',
      text: 'Good point. We could have two shared team days and keep the rest flexible.',
      src: asset6,
    },
    {
      id: 'b1-12.shadowing.08',
      text: 'That’s worth trying. Let’s check whether it gives us enough quiet time too.',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
