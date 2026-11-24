import type { PreparedPractice } from '../Practice.types'
import data from './a1-10.json'
import asset0 from '../../Course/assets/audio/A110-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A110-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A110-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A110-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A110-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A110-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A110-V81.0.mp3'
import asset7 from '../../Course/assets/audio/A110-FE81.0.mp3'
import asset8 from '../../Course/assets/audio/A110-V81.1.mp3'
import asset9 from '../../Course/assets/audio/A110-FE81.1.mp3'
import asset10 from '../../Course/assets/audio/A110-V81.2.mp3'
import asset11 from '../../Course/assets/audio/A110-FE81.2.mp3'
import asset12 from '../../Course/assets/audio/A110-V81.3.mp3'
import asset13 from '../../Course/assets/audio/A110-FE81.3.mp3'
import asset14 from '../../Course/assets/audio/A110-V81.4.mp3'
import asset15 from '../../Course/assets/audio/A110-FE81.4.mp3'
import asset16 from '../../Course/assets/audio/A110-V81.5.mp3'
import asset17 from '../../Course/assets/audio/A110-FE81.5.mp3'
import asset18 from '../assets/characters/kim.webp'
import asset19 from '../assets/characters/ana.webp'
import asset20 from '../../Course/assets/a1-10-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a1-10.shadowing.01',
      text: 'Hello! What would you like?',
      src: asset0,
    },
    {
      id: 'a1-10.shadowing.02',
      text: 'I’d like some tea and a piece of cake, please.',
      src: asset1,
    },
    {
      id: 'a1-10.shadowing.03',
      text: 'Of course. Would you like milk in your tea?',
      src: asset2,
    },
    {
      id: 'a1-10.shadowing.04',
      text: 'No milk, thank you. How much is it?',
      src: asset3,
    },
    {
      id: 'a1-10.shadowing.05',
      text: 'It’s six dollars. You can pay here.',
      src: asset4,
    },
    { id: 'a1-10.shadowing.06', text: 'Here you are. Thank you!', src: asset5 },
    { id: 'course-a1-10-coffee.front', text: 'coffee', src: asset6 },
    {
      id: 'course-a1-10-coffee.back',
      text: 'I’d like a coffee, please.',
      src: asset7,
    },
    { id: 'course-a1-10-tea.front', text: 'tea', src: asset8 },
    { id: 'course-a1-10-tea.back', text: 'Can I have some tea?', src: asset9 },
    { id: 'course-a1-10-water.front', text: 'water', src: asset10 },
    {
      id: 'course-a1-10-water.back',
      text: 'Some water, please.',
      src: asset11,
    },
    { id: 'course-a1-10-juice.front', text: 'juice', src: asset12 },
    {
      id: 'course-a1-10-juice.back',
      text: 'I’d like an orange juice.',
      src: asset13,
    },
    { id: 'course-a1-10-sandwich.front', text: 'sandwich', src: asset14 },
    {
      id: 'course-a1-10-sandwich.back',
      text: 'This sandwich is for my friend.',
      src: asset15,
    },
    { id: 'course-a1-10-cake.front', text: 'cake', src: asset16 },
    {
      id: 'course-a1-10-cake.back',
      text: 'Can I have a piece of cake?',
      src: asset17,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset18,
    '/flashcards/course-characters/ana/image.webp': asset19,
    '/flashcards-transparent/course-images/6743ae700ffe0ccd739e19e24d7a081c1586ebbed8bed441a7c7cf7cbefc15f4/image.webp':
      asset20,
  },
}
export default prepared
