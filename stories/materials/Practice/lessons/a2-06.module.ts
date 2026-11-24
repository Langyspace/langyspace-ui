import type { PreparedPractice } from '../Practice.types'
import data from './a2-06.json'
import asset0 from '../../Course/assets/audio/A206-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A206-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A206-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A206-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A206-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A206-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A206-D81.7.mp3'
import asset7 from '../../Course/assets/audio/A206-D81.8.mp3'
import asset8 from '../../Course/assets/audio/A206-V81.0.mp3'
import asset9 from '../../Course/assets/audio/A206-FE81.0.mp3'
import asset10 from '../../Course/assets/audio/A206-V81.1.mp3'
import asset11 from '../../Course/assets/audio/A206-FE81.1.mp3'
import asset12 from '../../Course/assets/audio/A206-V81.2.mp3'
import asset13 from '../../Course/assets/audio/A206-FE81.2.mp3'
import asset14 from '../../Course/assets/audio/A206-V81.3.mp3'
import asset15 from '../../Course/assets/audio/A206-FE81.3.mp3'
import asset16 from '../../Course/assets/audio/A206-V81.4.mp3'
import asset17 from '../../Course/assets/audio/A206-FE81.4.mp3'
import asset18 from '../../Course/assets/audio/A206-V81.5.mp3'
import asset19 from '../../Course/assets/audio/A206-FE81.5.mp3'
import asset20 from '../assets/characters/kim.webp'
import asset21 from '../assets/characters/ana.webp'
import asset22 from '../../Course/assets/a2-06-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a2-06.shadowing.01',
      text: 'Good afternoon. How can I help you?',
      src: asset0,
    },
    {
      id: 'a2-06.shadowing.02',
      text: 'My back hurts. I’d like to make an appointment.',
      src: asset1,
    },
    { id: 'a2-06.shadowing.03', text: 'When did it start?', src: asset2 },
    {
      id: 'a2-06.shadowing.04',
      text: 'Yesterday afternoon. Is there an appointment today?',
      src: asset3,
    },
    {
      id: 'a2-06.shadowing.05',
      text: 'There’s one at three at the Green Clinic.',
      src: asset4,
    },
    {
      id: 'a2-06.shadowing.06',
      text: 'Could you repeat the time, please?',
      src: asset5,
    },
    {
      id: 'a2-06.shadowing.07',
      text: 'Three o’clock. We’ll send you the address.',
      src: asset6,
    },
    {
      id: 'a2-06.shadowing.08',
      text: 'Thank you. I’ll check the message.',
      src: asset7,
    },
    { id: 'course-a2-06-headache.front', text: 'a headache', src: asset8 },
    {
      id: 'course-a2-06-headache.back',
      text: 'I have a headache.',
      src: asset9,
    },
    {
      id: 'course-a2-06-sore-throat.front',
      text: 'a sore throat',
      src: asset10,
    },
    {
      id: 'course-a2-06-sore-throat.back',
      text: 'My friend has a sore throat.',
      src: asset11,
    },
    { id: 'course-a2-06-fever.front', text: 'a fever', src: asset12 },
    {
      id: 'course-a2-06-fever.back',
      text: 'I have a fever today.',
      src: asset13,
    },
    { id: 'course-a2-06-cough.front', text: 'a cough', src: asset14 },
    {
      id: 'course-a2-06-cough.back',
      text: 'I’ve had a cough since yesterday.',
      src: asset15,
    },
    {
      id: 'course-a2-06-stomachache.front',
      text: 'a stomachache',
      src: asset16,
    },
    {
      id: 'course-a2-06-stomachache.back',
      text: 'She has a stomachache.',
      src: asset17,
    },
    { id: 'course-a2-06-backache.front', text: 'a backache', src: asset18 },
    {
      id: 'course-a2-06-backache.back',
      text: 'I’d like an appointment for my backache.',
      src: asset19,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset20,
    '/flashcards/course-characters/ana/image.webp': asset21,
    '/flashcards-transparent/course-images/f646113a119a25f70735ec059555a41749f87df586c82aba1e4d468f1c666137/image.webp':
      asset22,
  },
}
export default prepared
