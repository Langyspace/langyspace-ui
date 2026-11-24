import type { PreparedPractice } from '../Practice.types'
import data from './c1-09.json'
import asset0 from '../../Course/assets/audio/C109-D81.1.mp3'
import asset1 from '../../Course/assets/audio/C109-D81.2.mp3'
import asset2 from '../../Course/assets/audio/C109-D81.3.mp3'
import asset3 from '../../Course/assets/audio/C109-D81.4.mp3'
import asset4 from '../../Course/assets/audio/C109-D81.5.mp3'
import asset5 from '../../Course/assets/audio/C109-D81.6.mp3'
import asset6 from '../../Course/assets/audio/C109-D81.7.mp3'
import asset7 from '../../Course/assets/audio/C109-D81.8.mp3'
import asset8 from '../../Course/assets/audio/C109-D81.9.mp3'
import asset9 from '../../Course/assets/audio/C109-D81.10.mp3'
import asset10 from '../../Course/assets/audio/C109-D81.11.mp3'
import asset11 from '../../Course/assets/audio/C109-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'c1-09.shadowing.01',
      text: 'Demand has risen for three months. It’s bound to get worse, isn’t it?',
      src: asset0,
    },
    {
      id: 'c1-09.shadowing.02',
      text: 'The figures suggest growth, but “bound to” is stronger than these three observations justify.',
      src: asset1,
    },
    {
      id: 'c1-09.shadowing.03',
      text: 'What would be a more defensible claim?',
      src: asset2,
    },
    {
      id: 'c1-09.shadowing.04',
      text: 'Demand is likely to rise if the same conditions continue. We should state that condition.',
      src: asset3,
    },
    {
      id: 'c1-09.shadowing.05',
      text: 'The proposal says extra transport is set to start next month.',
      src: asset4,
    },
    {
      id: 'c1-09.shadowing.06',
      text: 'Is that a confirmed service plan, or just an assumption in the projection?',
      src: asset5,
    },
    {
      id: 'c1-09.shadowing.07',
      text: 'The plan is confirmed, but the capacity estimate assumes it covers the period of highest demand.',
      src: asset6,
    },
    {
      id: 'c1-09.shadowing.08',
      text: 'Then timing matters as much as the headline number.',
      src: asset7,
    },
    {
      id: 'c1-09.shadowing.09',
      text: 'We were going to recommend no further action because the extra service looked sufficient.',
      src: asset8,
    },
    {
      id: 'c1-09.shadowing.10',
      text: 'I’d qualify that until we check the coverage. More total capacity may still leave a local gap.',
      src: asset9,
    },
    {
      id: 'c1-09.shadowing.11',
      text: 'Would monitoring the next month be too passive?',
      src: asset10,
    },
    {
      id: 'c1-09.shadowing.12',
      text: 'Not if we also check the affected time slot and define when we’ll change the plan.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
