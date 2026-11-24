import type { PreparedPractice } from '../Practice.types'
import data from './b2-07.json'
import asset0 from '../../Course/assets/audio/B207-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B207-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B207-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B207-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B207-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B207-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B207-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B207-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B207-D81.9.mp3'
import asset9 from '../../Course/assets/audio/B207-D81.10.mp3'
import asset10 from '../../Course/assets/audio/B207-D81.11.mp3'
import asset11 from '../../Course/assets/audio/B207-D81.12.mp3'
import asset12 from '../../Course/assets/audio/B207-V81.0.mp3'
import asset13 from '../../Course/assets/audio/B207-FE81.0.mp3'
import asset14 from '../../Course/assets/audio/B207-V81.1.mp3'
import asset15 from '../../Course/assets/audio/B207-FE81.1.mp3'
import asset16 from '../../Course/assets/audio/B207-V81.2.mp3'
import asset17 from '../../Course/assets/audio/B207-FE81.2.mp3'
import asset18 from '../../Course/assets/audio/B207-V81.3.mp3'
import asset19 from '../../Course/assets/audio/B207-FE81.3.mp3'
import asset20 from '../../Course/assets/audio/B207-V81.4.mp3'
import asset21 from '../../Course/assets/audio/B207-FE81.4.mp3'
import asset22 from '../../Course/assets/audio/B207-V81.5.mp3'
import asset23 from '../../Course/assets/audio/B207-FE81.5.mp3'
import asset24 from '../assets/characters/kim.webp'
import asset25 from '../assets/characters/ana.webp'
import asset26 from '../../Course/assets/b2-07-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b2-07.shadowing.01',
      text: 'How did the dinner planning go? Did everyone agree?',
      src: asset0,
    },
    {
      id: 'b2-07.shadowing.02',
      text: 'Not on everything. One person suggested having dinner on Saturday.',
      src: asset1,
    },
    {
      id: 'b2-07.shadowing.03',
      text: 'And someone promised to book the table?',
      src: asset2,
    },
    {
      id: 'b2-07.shadowing.04',
      text: 'Yes, the host promised to book after checking the group’s availability.',
      src: asset3,
    },
    {
      id: 'b2-07.shadowing.05',
      text: 'I heard that everyone agreed to pay in advance.',
      src: asset4,
    },
    {
      id: 'b2-07.shadowing.06',
      text: 'That’s not accurate. One guest refused to pay before seeing the cancellation conditions.',
      src: asset5,
    },
    {
      id: 'b2-07.shadowing.07',
      text: 'So suggesting dinner wasn’t the same as committing to the deposit.',
      src: asset6,
    },
    {
      id: 'b2-07.shadowing.08',
      text: 'Exactly. The person who suggested it also said the date was open to discussion.',
      src: asset7,
    },
    {
      id: 'b2-07.shadowing.09',
      text: 'Did anybody admit that the first summary was wrong?',
      src: asset8,
    },
    {
      id: 'b2-07.shadowing.10',
      text: 'The host did. They offered to send a corrected summary to the group.',
      src: asset9,
    },
    {
      id: 'b2-07.shadowing.11',
      text: 'That should help. We need to preserve what people actually intended.',
      src: asset10,
    },
    {
      id: 'b2-07.shadowing.12',
      text: 'Yes: a suggestion, a conditional promise and a refusal are three different things.',
      src: asset11,
    },
    { id: 'course-b2-07-insist-on.front', text: 'insist on', src: asset12 },
    {
      id: 'course-b2-07-insist-on.back',
      text: 'She didn’t insist on that date.',
      src: asset13,
    },
    { id: 'course-b2-07-refuse-to.front', text: 'refuse to', src: asset14 },
    {
      id: 'course-b2-07-refuse-to.back',
      text: 'One guest refused to pay yet.',
      src: asset15,
    },
    { id: 'course-b2-07-admit-that.front', text: 'admit that', src: asset16 },
    {
      id: 'course-b2-07-admit-that.back',
      text: 'The host admitted that the summary was wrong.',
      src: asset17,
    },
    { id: 'course-b2-07-deny-doing.front', text: 'deny doing', src: asset18 },
    {
      id: 'course-b2-07-deny-doing.back',
      text: 'She denied promising advance payment.',
      src: asset19,
    },
    {
      id: 'course-b2-07-suggest-doing.front',
      text: 'suggest doing',
      src: asset20,
    },
    {
      id: 'course-b2-07-suggest-doing.back',
      text: 'They suggested meeting on Saturday.',
      src: asset21,
    },
    { id: 'course-b2-07-promise-to.front', text: 'promise to', src: asset22 },
    {
      id: 'course-b2-07-promise-to.back',
      text: 'The host promised to check availability.',
      src: asset23,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset24,
    '/flashcards/course-characters/ana/image.webp': asset25,
    '/flashcards-transparent/course-images/f0b4fbb9d552d245b886d4d407259fa71c85fdfa3ee62b13bd7b30ae4128b0b0/image.webp':
      asset26,
  },
}
export default prepared
