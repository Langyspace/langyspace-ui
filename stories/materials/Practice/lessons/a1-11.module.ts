import type { PreparedPractice } from '../Practice.types'
import data from './a1-11.json'
import asset0 from '../../Course/assets/audio/A111-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A111-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A111-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A111-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A111-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A111-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A111-V81.0.mp3'
import asset7 from '../../Course/assets/audio/A111-FE81.0.mp3'
import asset8 from '../../Course/assets/audio/A111-V81.1.mp3'
import asset9 from '../../Course/assets/audio/A111-FE81.1.mp3'
import asset10 from '../../Course/assets/audio/A111-V81.2.mp3'
import asset11 from '../../Course/assets/audio/A111-FE81.2.mp3'
import asset12 from '../../Course/assets/audio/A111-V81.3.mp3'
import asset13 from '../../Course/assets/audio/A111-FE81.3.mp3'
import asset14 from '../../Course/assets/audio/A111-V81.4.mp3'
import asset15 from '../../Course/assets/audio/A111-FE81.4.mp3'
import asset16 from '../../Course/assets/audio/A111-V81.5.mp3'
import asset17 from '../../Course/assets/audio/A111-FE81.5.mp3'
import asset18 from '../assets/characters/kim.webp'
import asset19 from '../assets/characters/ana.webp'
import asset20 from '../../Course/assets/a1-11-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    { id: 'a1-11.shadowing.01', text: 'Can I help you?', src: asset0 },
    {
      id: 'a1-11.shadowing.02',
      text: 'Yes. I’d like this blue T-shirt in medium.',
      src: asset1,
    },
    {
      id: 'a1-11.shadowing.03',
      text: 'Sorry, we have blue in large, or green in medium.',
      src: asset2,
    },
    {
      id: 'a1-11.shadowing.04',
      text: 'Can I see the green one, please?',
      src: asset3,
    },
    {
      id: 'a1-11.shadowing.05',
      text: 'Here you are. It’s twelve dollars.',
      src: asset4,
    },
    {
      id: 'a1-11.shadowing.06',
      text: 'That’s good. This one, please.',
      src: asset5,
    },
    { id: 'course-a1-11-t-shirt.front', text: 'T-shirt', src: asset6 },
    {
      id: 'course-a1-11-t-shirt.back',
      text: 'This T-shirt is green.',
      src: asset7,
    },
    { id: 'course-a1-11-shoes.front', text: 'shoes', src: asset8 },
    {
      id: 'course-a1-11-shoes.back',
      text: 'These shoes are small.',
      src: asset9,
    },
    { id: 'course-a1-11-jacket.front', text: 'jacket', src: asset10 },
    {
      id: 'course-a1-11-jacket.back',
      text: 'That jacket is blue.',
      src: asset11,
    },
    { id: 'course-a1-11-bag.front', text: 'bag', src: asset12 },
    {
      id: 'course-a1-11-bag.back',
      text: 'How much is this bag?',
      src: asset13,
    },
    { id: 'course-a1-11-glasses.front', text: 'glasses', src: asset14 },
    {
      id: 'course-a1-11-glasses.back',
      text: 'I like those glasses.',
      src: asset15,
    },
    { id: 'course-a1-11-dress.front', text: 'dress', src: asset16 },
    {
      id: 'course-a1-11-dress.back',
      text: 'Can I see this dress?',
      src: asset17,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset18,
    '/flashcards/course-characters/ana/image.webp': asset19,
    '/flashcards-transparent/course-images/cc8b090ec2a7d9c3fd5d6ed68d3f2a9e899e96a93b2a7e558d6ac40504bf2716/image.webp':
      asset20,
  },
}
export default prepared
