import type { PreparedPractice } from '../Practice.types'
import data from './a2-11.json'
import asset0 from '../../Course/assets/audio/A211-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A211-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A211-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A211-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A211-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A211-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A211-D81.7.mp3'
import asset7 from '../../Course/assets/audio/A211-D81.8.mp3'
import asset8 from '../../Course/assets/audio/A211-V81.0.mp3'
import asset9 from '../../Course/assets/audio/A211-FE81.0.mp3'
import asset10 from '../../Course/assets/audio/A211-V81.1.mp3'
import asset11 from '../../Course/assets/audio/A211-FE81.1.mp3'
import asset12 from '../../Course/assets/audio/A211-V81.2.mp3'
import asset13 from '../../Course/assets/audio/A211-FE81.2.mp3'
import asset14 from '../../Course/assets/audio/A211-V81.3.mp3'
import asset15 from '../../Course/assets/audio/A211-FE81.3.mp3'
import asset16 from '../../Course/assets/audio/A211-V81.4.mp3'
import asset17 from '../../Course/assets/audio/A211-FE81.4.mp3'
import asset18 from '../../Course/assets/audio/A211-V81.5.mp3'
import asset19 from '../../Course/assets/audio/A211-FE81.5.mp3'
import asset20 from '../assets/characters/kim.webp'
import asset21 from '../assets/characters/ana.webp'
import asset22 from '../../Course/assets/a2-11-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a2-11.shadowing.01',
      text: 'Shall we go on a hike on Sunday?',
      src: asset0,
    },
    {
      id: 'a2-11.shadowing.02',
      text: 'I’d like that. What does the forecast say?',
      src: asset1,
    },
    {
      id: 'a2-11.shadowing.03',
      text: 'It might rain. If it rains, we’ll go to the museum instead.',
      src: asset2,
    },
    {
      id: 'a2-11.shadowing.04',
      text: 'Good plan. What time is the bus?',
      src: asset3,
    },
    {
      id: 'a2-11.shadowing.05',
      text: 'At nine. If we miss it, we can take the next one at nine thirty.',
      src: asset4,
    },
    {
      id: 'a2-11.shadowing.06',
      text: 'All right. I’ll bring a raincoat. What about lunch?',
      src: asset5,
    },
    {
      id: 'a2-11.shadowing.07',
      text: 'If we go to the museum, we’ll eat at the café inside.',
      src: asset6,
    },
    {
      id: 'a2-11.shadowing.08',
      text: 'Great. Let’s check the weather again before we leave.',
      src: asset7,
    },
    { id: 'course-a2-11-hike.front', text: 'a hike', src: asset8 },
    {
      id: 'course-a2-11-hike.back',
      text: 'We’re planning a hike on Sunday.',
      src: asset9,
    },
    { id: 'course-a2-11-trail.front', text: 'a trail', src: asset10 },
    {
      id: 'course-a2-11-trail.back',
      text: 'This trail goes through the trees.',
      src: asset11,
    },
    { id: 'course-a2-11-museum.front', text: 'a museum', src: asset12 },
    {
      id: 'course-a2-11-museum.back',
      text: 'We’ll go to a museum if it rains.',
      src: asset13,
    },
    { id: 'course-a2-11-raincoat.front', text: 'a raincoat', src: asset14 },
    {
      id: 'course-a2-11-raincoat.back',
      text: 'I’ll bring a raincoat.',
      src: asset15,
    },
    { id: 'course-a2-11-forecast.front', text: 'a forecast', src: asset16 },
    {
      id: 'course-a2-11-forecast.back',
      text: 'Let’s check the forecast.',
      src: asset17,
    },
    {
      id: 'course-a2-11-backup-plan.front',
      text: 'a backup plan',
      src: asset18,
    },
    {
      id: 'course-a2-11-backup-plan.back',
      text: 'The museum is our backup plan.',
      src: asset19,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset20,
    '/flashcards/course-characters/ana/image.webp': asset21,
    '/flashcards-transparent/course-images/80081312d320aa4209466a8619a3303a5c709133048f04f5ad85447687c8edd9/image.webp':
      asset22,
  },
}
export default prepared
