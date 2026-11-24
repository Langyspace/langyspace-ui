import type { PreparedPractice } from '../Practice.types'
import data from './b2-08.json'
import asset0 from '../../Course/assets/audio/B208-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B208-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B208-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B208-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B208-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B208-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B208-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B208-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B208-D81.9.mp3'
import asset9 from '../../Course/assets/audio/B208-D81.10.mp3'
import asset10 from '../../Course/assets/audio/B208-D81.11.mp3'
import asset11 from '../../Course/assets/audio/B208-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b2-08.shadowing.01',
      text: 'Which apartment would you recommend for this brief?',
      src: asset0,
    },
    {
      id: 'b2-08.shadowing.02',
      text: 'The person who works from home needs a usable work area, but location matters too.',
      src: asset1,
    },
    {
      id: 'b2-08.shadowing.03',
      text: 'A is near the metro. B has more space, although it’s further away.',
      src: asset2,
    },
    {
      id: 'b2-08.shadowing.04',
      text: 'And C, which has a balcony, is between them in terms of distance.',
      src: asset3,
    },
    {
      id: 'b2-08.shadowing.05',
      text: 'Is the balcony essential or just attractive?',
      src: asset4,
    },
    {
      id: 'b2-08.shadowing.06',
      text: 'Attractive. The fixed requirements are a work area and a total budget under a thousand.',
      src: asset5,
    },
    {
      id: 'b2-08.shadowing.07',
      text: 'Do all the listings include the maintenance fee?',
      src: asset6,
    },
    {
      id: 'b2-08.shadowing.08',
      text: 'A and B state a total. C’s listing doesn’t confirm the fee.',
      src: asset7,
    },
    {
      id: 'b2-08.shadowing.09',
      text: 'Then we shouldn’t compare the advertised rents as if they were the full costs.',
      src: asset8,
    },
    {
      id: 'b2-08.shadowing.10',
      text: 'Agreed. I’d arrange a viewing of A and ask C’s landlord about the missing fee.',
      src: asset9,
    },
    {
      id: 'b2-08.shadowing.11',
      text: 'Would B still be an alternative if the commute were manageable?',
      src: asset10,
    },
    {
      id: 'b2-08.shadowing.12',
      text: 'Yes. It offers more space, which could matter more than being right by the metro.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
