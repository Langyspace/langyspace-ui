import type { PreparedPractice } from '../Practice.types'
import data from './b1-10.json'
import asset0 from '../../Course/assets/audio/B110-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B110-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B110-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B110-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B110-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B110-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B110-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B110-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b1-10.shadowing.01',
      text: 'Could you tell me where the guided tour starts?',
      src: asset0,
    },
    {
      id: 'b1-10.shadowing.02',
      text: 'At the reception desk at ten. The talk is later, at eleven thirty.',
      src: asset1,
    },
    {
      id: 'b1-10.shadowing.03',
      text: 'Do you know if the tour is included in the entrance fee?',
      src: asset2,
    },
    {
      id: 'b1-10.shadowing.04',
      text: 'The standard tour is included. The special workshop costs extra.',
      src: asset3,
    },
    {
      id: 'b1-10.shadowing.05',
      text: 'Thanks. Could you tell me where I can leave my bag?',
      src: asset4,
    },
    {
      id: 'b1-10.shadowing.06',
      text: 'There’s a cloakroom on the ground floor, beside the information point.',
      src: asset5,
    },
    {
      id: 'b1-10.shadowing.07',
      text: 'And is the talk still in room two?',
      src: asset6,
    },
    {
      id: 'b1-10.shadowing.08',
      text: 'That’s what the timetable says. Please check the board before you go.',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
