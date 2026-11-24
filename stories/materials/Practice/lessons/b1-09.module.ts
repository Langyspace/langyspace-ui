import type { PreparedPractice } from '../Practice.types'
import data from './b1-09.json'
import asset0 from '../../Course/assets/audio/B109-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B109-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B109-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B109-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B109-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B109-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B109-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B109-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B109-V81.0.mp3'
import asset9 from '../../Course/assets/audio/B109-FE81.0.mp3'
import asset10 from '../../Course/assets/audio/B109-V81.1.mp3'
import asset11 from '../../Course/assets/audio/B109-FE81.1.mp3'
import asset12 from '../../Course/assets/audio/B109-V81.2.mp3'
import asset13 from '../../Course/assets/audio/B109-FE81.2.mp3'
import asset14 from '../../Course/assets/audio/B109-V81.3.mp3'
import asset15 from '../../Course/assets/audio/B109-FE81.3.mp3'
import asset16 from '../../Course/assets/audio/B109-V81.4.mp3'
import asset17 from '../../Course/assets/audio/B109-FE81.4.mp3'
import asset18 from '../../Course/assets/audio/B109-V81.5.mp3'
import asset19 from '../../Course/assets/audio/B109-FE81.5.mp3'
import asset20 from '../assets/characters/kim.webp'
import asset21 from '../assets/characters/ana.webp'
import asset22 from '../../Course/assets/b1-09-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b1-09.shadowing.01',
      text: 'What happened? You look worried.',
      src: asset0,
    },
    {
      id: 'b1-09.shadowing.02',
      text: 'My bike was taken from the rack near the station. I last saw it at six.',
      src: asset1,
    },
    { id: 'b1-09.shadowing.03', text: 'Have you reported it?', src: asset2 },
    {
      id: 'b1-09.shadowing.04',
      text: 'Yes. They asked for a description and the serial number.',
      src: asset3,
    },
    {
      id: 'b1-09.shadowing.05',
      text: 'How can they identify it?',
      src: asset4,
    },
    {
      id: 'b1-09.shadowing.06',
      text: 'It’s blue, with a black basket and a yellow sticker on the frame.',
      src: asset5,
    },
    {
      id: 'b1-09.shadowing.07',
      text: 'Has anything been found yet?',
      src: asset6,
    },
    {
      id: 'b1-09.shadowing.08',
      text: 'Not yet. A similar bike was seen nearby, but nobody has checked the number.',
      src: asset7,
    },
    {
      id: 'course-b1-09-bicycle-lock.front',
      text: 'a bicycle lock',
      src: asset8,
    },
    {
      id: 'course-b1-09-bicycle-lock.back',
      text: 'The bicycle lock was beside the rack.',
      src: asset9,
    },
    {
      id: 'course-b1-09-serial-number.front',
      text: 'a serial number',
      src: asset10,
    },
    {
      id: 'course-b1-09-serial-number.back',
      text: 'The serial number hasn’t been checked.',
      src: asset11,
    },
    { id: 'course-b1-09-helmet.front', text: 'a helmet', src: asset12 },
    {
      id: 'course-b1-09-helmet.back',
      text: 'The helmet is still at home.',
      src: asset13,
    },
    { id: 'course-b1-09-bike-rack.front', text: 'a bike rack', src: asset14 },
    {
      id: 'course-b1-09-bike-rack.back',
      text: 'The bike was taken from the bike rack.',
      src: asset15,
    },
    { id: 'course-b1-09-report.front', text: 'a report', src: asset16 },
    {
      id: 'course-b1-09-report.back',
      text: 'An update has been added to the report.',
      src: asset17,
    },
    {
      id: 'course-b1-09-lost-property.front',
      text: 'lost property',
      src: asset18,
    },
    {
      id: 'course-b1-09-lost-property.back',
      text: 'Ask at lost property before assuming it was stolen.',
      src: asset19,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset20,
    '/flashcards/course-characters/ana/image.webp': asset21,
    '/flashcards-transparent/course-images/117b5924965ff82abeb8eddedfc33818ffd105ad60437af7bcde5a4743ce0f37/image.webp':
      asset22,
  },
}
export default prepared
