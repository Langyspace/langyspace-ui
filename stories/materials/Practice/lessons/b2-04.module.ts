import type { PreparedPractice } from '../Practice.types'
import data from './b2-04.json'
import asset0 from '../../Course/assets/audio/B204-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B204-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B204-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B204-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B204-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B204-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B204-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B204-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B204-D81.9.mp3'
import asset9 from '../../Course/assets/audio/B204-D81.10.mp3'
import asset10 from '../../Course/assets/audio/B204-D81.11.mp3'
import asset11 from '../../Course/assets/audio/B204-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b2-04.shadowing.01',
      text: 'Someone must have been here. The plant has been moved.',
      src: asset0,
    },
    {
      id: 'b2-04.shadowing.02',
      text: 'Maybe, but let’s check the record before deciding who it was.',
      src: asset1,
    },
    {
      id: 'b2-04.shadowing.03',
      text: 'A spare key was used at five. There’s also a receipt from five twenty.',
      src: asset2,
    },
    {
      id: 'b2-04.shadowing.04',
      text: 'That suggests a visit, but the receipt might have been left by someone else earlier.',
      src: asset3,
    },
    {
      id: 'b2-04.shadowing.05',
      text: 'Could someone have come through the window?',
      src: asset4,
    },
    {
      id: 'b2-04.shadowing.06',
      text: 'It’s closed now. That doesn’t prove it was closed the whole afternoon.',
      src: asset5,
    },
    {
      id: 'b2-04.shadowing.07',
      text: 'Good point. We shouldn’t treat a current state as a complete history.',
      src: asset6,
    },
    {
      id: 'b2-04.shadowing.08',
      text: 'Who had permission to use the key?',
      src: asset7,
    },
    {
      id: 'b2-04.shadowing.09',
      text: 'The neighbour was going to water the plants, but I don’t know whether she came.',
      src: asset8,
    },
    {
      id: 'b2-04.shadowing.10',
      text: 'Then I’d ask her first. The camera record could be another check if needed.',
      src: asset9,
    },
    {
      id: 'b2-04.shadowing.11',
      text: 'So our strongest explanation is a permitted visit, not a confirmed identity yet.',
      src: asset10,
    },
    {
      id: 'b2-04.shadowing.12',
      text: 'Exactly. We can update that conclusion when we have more than a clue.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
