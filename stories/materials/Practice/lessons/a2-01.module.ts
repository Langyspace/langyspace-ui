import type { PreparedPractice } from '../Practice.types'
import data from './a2-01.json'
import asset0 from '../../Course/assets/audio/legacy-A201-a201.dialogue.anna-ben.01.mp3'
import asset1 from '../../Course/assets/audio/legacy-A201-a201.dialogue.anna-ben.02.mp3'
import asset2 from '../../Course/assets/audio/legacy-A201-a201.dialogue.anna-ben.03.mp3'
import asset3 from '../../Course/assets/audio/legacy-A201-a201.dialogue.anna-ben.04.mp3'
import asset4 from '../../Course/assets/audio/legacy-A201-a201.dialogue.anna-ben.05.mp3'
import asset5 from '../../Course/assets/audio/legacy-A201-a201.dialogue.anna-ben.06.mp3'
import asset6 from '../assets/characters/anna.webp'
import asset7 from '../assets/characters/ben.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    { id: 'a2-01.shadowing.01', text: 'Hey! What are you doing?', src: asset0 },
    {
      id: 'a2-01.shadowing.02',
      text: "I'm cooking dinner. What about you?",
      src: asset1,
    },
    { id: 'a2-01.shadowing.03', text: "I'm watching a movie.", src: asset2 },
    {
      id: 'a2-01.shadowing.04',
      text: 'Nice! Do you usually watch movies at night?',
      src: asset3,
    },
    {
      id: 'a2-01.shadowing.05',
      text: 'Yes, but I usually read before bed. Do you cook every day?',
      src: asset4,
    },
    {
      id: 'a2-01.shadowing.06',
      text: "Not really. I usually order food, but today I'm making pasta.",
      src: asset5,
    },
  ],
  images: {
    '/flashcards/course-characters/anna/image.webp': asset6,
    '/flashcards/course-characters/ben/image.webp': asset7,
  },
}
export default prepared
