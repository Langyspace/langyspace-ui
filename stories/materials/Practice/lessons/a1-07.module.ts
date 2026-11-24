import type { PreparedPractice } from '../Practice.types'
import data from './a1-07.json'
import asset0 from '../../Course/assets/audio/A107-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A107-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A107-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A107-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A107-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A107-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A107-V81.0.mp3'
import asset7 from '../../Course/assets/audio/A107-FE81.0.mp3'
import asset8 from '../../Course/assets/audio/A107-V81.1.mp3'
import asset9 from '../../Course/assets/audio/A107-FE81.1.mp3'
import asset10 from '../../Course/assets/audio/A107-V81.2.mp3'
import asset11 from '../../Course/assets/audio/A107-FE81.2.mp3'
import asset12 from '../../Course/assets/audio/A107-V81.3.mp3'
import asset13 from '../../Course/assets/audio/A107-FE81.3.mp3'
import asset14 from '../../Course/assets/audio/A107-V81.4.mp3'
import asset15 from '../../Course/assets/audio/A107-FE81.4.mp3'
import asset16 from '../../Course/assets/audio/A107-V81.5.mp3'
import asset17 from '../../Course/assets/audio/A107-FE81.5.mp3'
import asset18 from '../assets/characters/kim.webp'
import asset19 from '../assets/characters/ana.webp'
import asset20 from '../../Course/assets/a1-07-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a1-07.shadowing.01',
      text: 'Welcome! Where are you staying?',
      src: asset0,
    },
    {
      id: 'a1-07.shadowing.02',
      text: 'I’m staying at the Park Hotel.',
      src: asset1,
    },
    {
      id: 'a1-07.shadowing.03',
      text: 'And how long are you staying?',
      src: asset2,
    },
    {
      id: 'a1-07.shadowing.04',
      text: 'For three days. Where is gate six?',
      src: asset3,
    },
    {
      id: 'a1-07.shadowing.05',
      text: 'It’s on the left, next to the café.',
      src: asset4,
    },
    {
      id: 'a1-07.shadowing.06',
      text: 'Thank you. Can you say that again, please?',
      src: asset5,
    },
    { id: 'course-a1-07-passport.front', text: 'passport', src: asset6 },
    {
      id: 'course-a1-07-passport.back',
      text: 'Keep your passport with you.',
      src: asset7,
    },
    { id: 'course-a1-07-suitcase.front', text: 'suitcase', src: asset8 },
    {
      id: 'course-a1-07-suitcase.back',
      text: 'This is my suitcase.',
      src: asset9,
    },
    { id: 'course-a1-07-plane.front', text: 'plane', src: asset10 },
    {
      id: 'course-a1-07-plane.back',
      text: 'The plane is over there.',
      src: asset11,
    },
    { id: 'course-a1-07-taxi.front', text: 'taxi', src: asset12 },
    {
      id: 'course-a1-07-taxi.back',
      text: 'I need a taxi to the hotel.',
      src: asset13,
    },
    { id: 'course-a1-07-bus.front', text: 'bus', src: asset14 },
    { id: 'course-a1-07-bus.back', text: 'The bus is outside.', src: asset15 },
    { id: 'course-a1-07-gate.front', text: 'gate', src: asset16 },
    {
      id: 'course-a1-07-gate.back',
      text: 'Our gate is next to the café.',
      src: asset17,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset18,
    '/flashcards/course-characters/ana/image.webp': asset19,
    '/flashcards-transparent/course-images/ba4b102f2462e545c3a5e2d70bb9e3e8ca43107afd31e87eb4264ebce0a560d8/image.webp':
      asset20,
  },
}
export default prepared
