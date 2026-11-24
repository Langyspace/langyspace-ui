import type { PreparedPractice } from '../Practice.types'
import data from './b2-05.json'
import asset0 from '../../Course/assets/audio/B205-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B205-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B205-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B205-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B205-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B205-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B205-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B205-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B205-D81.9.mp3'
import asset9 from '../../Course/assets/audio/B205-D81.10.mp3'
import asset10 from '../../Course/assets/audio/B205-D81.11.mp3'
import asset11 from '../../Course/assets/audio/B205-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b2-05.shadowing.01',
      text: 'Why is the total higher than the booking confirmation?',
      src: asset0,
    },
    {
      id: 'b2-05.shadowing.02',
      text: 'The receipt includes twenty dollars for breakfast, plus a fifty-dollar deposit.',
      src: asset1,
    },
    {
      id: 'b2-05.shadowing.03',
      text: 'I thought breakfast was included in the room price.',
      src: asset2,
    },
    {
      id: 'b2-05.shadowing.04',
      text: 'It was. We needn’t have paid for the same breakfast again.',
      src: asset3,
    },
    {
      id: 'b2-05.shadowing.05',
      text: 'Is the deposit another mistake?',
      src: asset4,
    },
    {
      id: 'b2-05.shadowing.06',
      text: 'Not according to the conditions. It’s returned after the room check, if there’s no damage.',
      src: asset5,
    },
    {
      id: 'b2-05.shadowing.07',
      text: 'So we should keep the two amounts separate when we ask.',
      src: asset6,
    },
    {
      id: 'b2-05.shadowing.08',
      text: 'Exactly. We can show the confirmation and request the breakfast charge back.',
      src: asset7,
    },
    {
      id: 'b2-05.shadowing.09',
      text: 'Did we need to pay the full room price in advance?',
      src: asset8,
    },
    {
      id: 'b2-05.shadowing.10',
      text: 'No. We chose to, but the confirmation allowed payment at arrival.',
      src: asset9,
    },
    {
      id: 'b2-05.shadowing.11',
      text: 'That’s different from saying the room itself was free.',
      src: asset10,
    },
    {
      id: 'b2-05.shadowing.12',
      text: 'Yes. The issue is one duplicate service, not every payment on the receipt.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
