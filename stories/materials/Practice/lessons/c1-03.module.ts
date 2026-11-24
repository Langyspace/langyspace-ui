import type { PreparedPractice } from '../Practice.types'
import data from './c1-03.json'
import asset0 from '../../Course/assets/audio/C103-D81.1.mp3'
import asset1 from '../../Course/assets/audio/C103-D81.2.mp3'
import asset2 from '../../Course/assets/audio/C103-D81.3.mp3'
import asset3 from '../../Course/assets/audio/C103-D81.4.mp3'
import asset4 from '../../Course/assets/audio/C103-D81.5.mp3'
import asset5 from '../../Course/assets/audio/C103-D81.6.mp3'
import asset6 from '../../Course/assets/audio/C103-D81.7.mp3'
import asset7 from '../../Course/assets/audio/C103-D81.8.mp3'
import asset8 from '../../Course/assets/audio/C103-D81.9.mp3'
import asset9 from '../../Course/assets/audio/C103-D81.10.mp3'
import asset10 from '../../Course/assets/audio/C103-D81.11.mp3'
import asset11 from '../../Course/assets/audio/C103-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'c1-03.shadowing.01',
      text: 'This post says the café is closing permanently. Would you share it?',
      src: asset0,
    },
    {
      id: 'c1-03.shadowing.02',
      text: 'Not as it stands. It doesn’t identify the source of that claim.',
      src: asset1,
    },
    {
      id: 'c1-03.shadowing.03',
      text: 'The café is said to be closing, then? That sounds more cautious.',
      src: asset2,
    },
    {
      id: 'c1-03.shadowing.04',
      text: 'Grammatically, yes, but it still passes on the claim without telling us who said it.',
      src: asset3,
    },
    {
      id: 'c1-03.shadowing.05',
      text: 'The official notice says the dining area will close for renovation while delivery continues.',
      src: asset4,
    },
    {
      id: 'c1-03.shadowing.06',
      text: 'That confirms a temporary change in service, not the permanent end of the business.',
      src: asset5,
    },
    {
      id: 'c1-03.shadowing.07',
      text: 'Does it give a reopening date?',
      src: asset6,
    },
    {
      id: 'c1-03.shadowing.08',
      text: 'Not in this excerpt. We should check rather than turn an expectation into a date.',
      src: asset7,
    },
    {
      id: 'c1-03.shadowing.09',
      text: 'So I could say, according to the café’s notice, the dining area is closing for renovation.',
      src: asset8,
    },
    {
      id: 'c1-03.shadowing.10',
      text: 'Yes, and keep the delivery detail because it changes what readers need to do.',
      src: asset9,
    },
    {
      id: 'c1-03.shadowing.11',
      text: 'I’d also correct the permanent-closure claim if I’d already shared it.',
      src: asset10,
    },
    {
      id: 'c1-03.shadowing.12',
      text: 'Exactly. Cautious wording doesn’t remove the responsibility to check and correct.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
