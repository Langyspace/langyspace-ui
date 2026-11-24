import type { PreparedPractice } from '../Practice.types'
import data from './a2-07.json'
import asset0 from '../../Course/assets/audio/A207-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A207-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A207-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A207-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A207-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A207-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A207-D81.7.mp3'
import asset7 from '../../Course/assets/audio/A207-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a2-07.shadowing.01',
      text: 'I’m new here. Do I have to book the grill?',
      src: asset0,
    },
    {
      id: 'a2-07.shadowing.02',
      text: 'Yes, you have to book it at reception. It’s free.',
      src: asset1,
    },
    {
      id: 'a2-07.shadowing.03',
      text: 'Can we use the pool after dinner?',
      src: asset2,
    },
    {
      id: 'a2-07.shadowing.04',
      text: 'Until eight. You mustn’t use it after that.',
      src: asset3,
    },
    {
      id: 'a2-07.shadowing.05',
      text: 'All right. Do I have to bring my own chairs?',
      src: asset4,
    },
    {
      id: 'a2-07.shadowing.06',
      text: 'No, you don’t have to. There are six chairs by the grill.',
      src: asset5,
    },
    {
      id: 'a2-07.shadowing.07',
      text: 'Great. One more thing: can I take my bike in the lift?',
      src: asset6,
    },
    {
      id: 'a2-07.shadowing.08',
      text: 'Sorry, you can’t. Please leave it in the garage.',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
