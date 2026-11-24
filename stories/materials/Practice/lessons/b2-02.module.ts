import type { PreparedPractice } from '../Practice.types'
import data from './b2-02.json'
import asset0 from '../../Course/assets/audio/B202-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B202-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B202-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B202-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B202-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B202-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B202-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B202-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B202-D81.9.mp3'
import asset9 from '../../Course/assets/audio/B202-D81.10.mp3'
import asset10 from '../../Course/assets/audio/B202-D81.11.mp3'
import asset11 from '../../Course/assets/audio/B202-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b2-02.shadowing.01',
      text: 'Can we promise the event pack will be ready by Friday morning?',
      src: asset0,
    },
    {
      id: 'b2-02.shadowing.02',
      text: 'The draft will be ready on Tuesday, but we need the review before making that promise.',
      src: asset1,
    },
    {
      id: 'b2-02.shadowing.03',
      text: 'The review is booked for Wednesday. How long will the final changes take?',
      src: asset2,
    },
    {
      id: 'b2-02.shadowing.04',
      text: 'About one working day after the comments arrive, provided the brief doesn’t change.',
      src: asset3,
    },
    {
      id: 'b2-02.shadowing.05',
      text: 'So by Thursday evening you’ll have finished the main version?',
      src: asset4,
    },
    {
      id: 'b2-02.shadowing.06',
      text: 'That’s the plan. On Friday morning I’ll be checking the printed copies.',
      src: asset5,
    },
    {
      id: 'b2-02.shadowing.07',
      text: 'What will you be doing when the volunteers arrive at ten?',
      src: asset6,
    },
    {
      id: 'b2-02.shadowing.08',
      text: 'I’ll be handing over the packs. Someone else needs to welcome the guests.',
      src: asset7,
    },
    {
      id: 'b2-02.shadowing.09',
      text: 'I can do that. What would put the handover at risk?',
      src: asset8,
    },
    {
      id: 'b2-02.shadowing.10',
      text: 'A late review or a new section. We should flag either as soon as it happens.',
      src: asset9,
    },
    {
      id: 'b2-02.shadowing.11',
      text: 'Agreed. Let’s confirm the review, then communicate the deadline with that condition.',
      src: asset10,
    },
    {
      id: 'b2-02.shadowing.12',
      text: 'And keep a short progress update, so nobody assumes a draft is the final version.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
