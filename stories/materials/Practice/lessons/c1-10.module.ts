import type { PreparedPractice } from '../Practice.types'
import data from './c1-10.json'
import asset0 from '../../Course/assets/audio/C110-D81.1.mp3'
import asset1 from '../../Course/assets/audio/C110-D81.2.mp3'
import asset2 from '../../Course/assets/audio/C110-D81.3.mp3'
import asset3 from '../../Course/assets/audio/C110-D81.4.mp3'
import asset4 from '../../Course/assets/audio/C110-D81.5.mp3'
import asset5 from '../../Course/assets/audio/C110-D81.6.mp3'
import asset6 from '../../Course/assets/audio/C110-D81.7.mp3'
import asset7 from '../../Course/assets/audio/C110-D81.8.mp3'
import asset8 from '../../Course/assets/audio/C110-D81.9.mp3'
import asset9 from '../../Course/assets/audio/C110-D81.10.mp3'
import asset10 from '../../Course/assets/audio/C110-D81.11.mp3'
import asset11 from '../../Course/assets/audio/C110-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'c1-10.shadowing.01',
      text: 'Who is this update for, and what do they need to do?',
      src: asset0,
    },
    {
      id: 'c1-10.shadowing.02',
      text: 'One version is for a client, another for a friend. Both need to confirm attendance.',
      src: asset1,
    },
    {
      id: 'c1-10.shadowing.03',
      text: 'What are the facts that must stay the same?',
      src: asset2,
    },
    {
      id: 'c1-10.shadowing.04',
      text: 'The event moves from Friday the fourth to Monday the seventh of December. Time and room stay the same.',
      src: asset3,
    },
    {
      id: 'c1-10.shadowing.05',
      text: 'And the response deadline? “Tomorrow” could become unclear if the message is read late.',
      src: asset4,
    },
    {
      id: 'c1-10.shadowing.06',
      text: 'Then I’d write Friday the fourth at five, rather than rely on the sending date.',
      src: asset5,
    },
    {
      id: 'c1-10.shadowing.07',
      text: 'Would a more formal opening make the client version more proficient?',
      src: asset6,
    },
    {
      id: 'c1-10.shadowing.08',
      text: 'Not automatically. “I’m writing to let you know” is useful if the purpose is still easy to find.',
      src: asset7,
    },
    { id: 'c1-10.shadowing.09', text: 'And for the friend?', src: asset8 },
    {
      id: 'c1-10.shadowing.10',
      text: '“Quick update: it’s Monday now. Same time and room. Can you confirm by Friday at five?”',
      src: asset9,
    },
    {
      id: 'c1-10.shadowing.11',
      text: 'That’s shorter, but it still keeps the action and deadline.',
      src: asset10,
    },
    {
      id: 'c1-10.shadowing.12',
      text: 'Exactly. Changing the register shouldn’t change the commitment we ask for.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
