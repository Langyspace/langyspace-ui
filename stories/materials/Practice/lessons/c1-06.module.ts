import type { PreparedPractice } from '../Practice.types'
import data from './c1-06.json'
import asset0 from '../../Course/assets/audio/C106-D81.1.mp3'
import asset1 from '../../Course/assets/audio/C106-D81.2.mp3'
import asset2 from '../../Course/assets/audio/C106-D81.3.mp3'
import asset3 from '../../Course/assets/audio/C106-D81.4.mp3'
import asset4 from '../../Course/assets/audio/C106-D81.5.mp3'
import asset5 from '../../Course/assets/audio/C106-D81.6.mp3'
import asset6 from '../../Course/assets/audio/C106-D81.7.mp3'
import asset7 from '../../Course/assets/audio/C106-D81.8.mp3'
import asset8 from '../../Course/assets/audio/C106-D81.9.mp3'
import asset9 from '../../Course/assets/audio/C106-D81.10.mp3'
import asset10 from '../../Course/assets/audio/C106-D81.11.mp3'
import asset11 from '../../Course/assets/audio/C106-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'c1-06.shadowing.01',
      text: 'Which course seems a better fit for the person in this brief?',
      src: asset0,
    },
    {
      id: 'c1-06.shadowing.02',
      text: 'A costs less and finishes sooner, but the more I consider the timetable, the more important flexibility seems.',
      src: asset1,
    },
    {
      id: 'c1-06.shadowing.03',
      text: 'Are we treating flexibility as a preference or a fixed requirement?',
      src: asset2,
    },
    {
      id: 'c1-06.shadowing.04',
      text: 'A preference at the moment. The person can usually attend Wednesday evenings.',
      src: asset3,
    },
    {
      id: 'c1-06.shadowing.05',
      text: 'Then B’s higher price needs a reason beyond being described as flexible.',
      src: asset4,
    },
    {
      id: 'c1-06.shadowing.06',
      text: 'True. It has independent work and a Friday check-in, but we haven’t confirmed the feedback format.',
      src: asset5,
    },
    {
      id: 'c1-06.shadowing.07',
      text: 'What would make you reconsider A?',
      src: asset6,
    },
    {
      id: 'c1-06.shadowing.08',
      text: 'A timetable change, or evidence that feedback can’t address the person’s project.',
      src: asset7,
    },
    {
      id: 'c1-06.shadowing.09',
      text: 'So the lower price matters, but it isn’t the whole decision.',
      src: asset8,
    },
    {
      id: 'c1-06.shadowing.10',
      text: 'Exactly. The more directly the work applies to the project, the more useful the course becomes.',
      src: asset9,
    },
    {
      id: 'c1-06.shadowing.11',
      text: 'I’d recommend A provisionally, then verify the two uncertain details.',
      src: asset10,
    },
    {
      id: 'c1-06.shadowing.12',
      text: 'And I’d say what could reverse that recommendation, so it doesn’t sound unconditional.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
