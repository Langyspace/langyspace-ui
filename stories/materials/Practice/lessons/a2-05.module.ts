import type { PreparedPractice } from '../Practice.types'
import data from './a2-05.json'
import asset0 from '../../Course/assets/audio/A205-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A205-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A205-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A205-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A205-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A205-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A205-D81.7.mp3'
import asset7 from '../../Course/assets/audio/A205-D81.8.mp3'
import asset8 from '../../Course/assets/audio/A205-V81.0.mp3'
import asset9 from '../../Course/assets/audio/A205-FE81.0.mp3'
import asset10 from '../../Course/assets/audio/A205-V81.1.mp3'
import asset11 from '../../Course/assets/audio/A205-FE81.1.mp3'
import asset12 from '../../Course/assets/audio/A205-V81.2.mp3'
import asset13 from '../../Course/assets/audio/A205-FE81.2.mp3'
import asset14 from '../../Course/assets/audio/A205-V81.3.mp3'
import asset15 from '../../Course/assets/audio/A205-FE81.3.mp3'
import asset16 from '../../Course/assets/audio/A205-V81.4.mp3'
import asset17 from '../../Course/assets/audio/A205-FE81.4.mp3'
import asset18 from '../../Course/assets/audio/A205-V81.5.mp3'
import asset19 from '../../Course/assets/audio/A205-FE81.5.mp3'
import asset20 from '../assets/characters/kim.webp'
import asset21 from '../assets/characters/ana.webp'
import asset22 from '../../Course/assets/a2-05-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a2-05.shadowing.01',
      text: 'Those boxes look heavy. Do you need a hand?',
      src: asset0,
    },
    {
      id: 'a2-05.shadowing.02',
      text: 'Yes, please. I can’t carry this one and open the door.',
      src: asset1,
    },
    {
      id: 'a2-05.shadowing.03',
      text: 'I’ll open the door. Then I’ll carry the smaller box.',
      src: asset2,
    },
    {
      id: 'a2-05.shadowing.04',
      text: 'Thank you! I’m going to put everything in the living room.',
      src: asset3,
    },
    {
      id: 'a2-05.shadowing.05',
      text: 'Are you going to paint the walls today?',
      src: asset4,
    },
    {
      id: 'a2-05.shadowing.06',
      text: 'No, that’s the plan for tomorrow. Today I just want to unpack.',
      src: asset5,
    },
    {
      id: 'a2-05.shadowing.07',
      text: 'All right. I’ll move this chair so we have more space.',
      src: asset6,
    },
    {
      id: 'a2-05.shadowing.08',
      text: 'That would be great. We can have coffee when we finish.',
      src: asset7,
    },
    { id: 'course-a2-05-carry-a-box.front', text: 'carry a box', src: asset8 },
    {
      id: 'course-a2-05-carry-a-box.back',
      text: 'I’ll carry the smaller box.',
      src: asset9,
    },
    {
      id: 'course-a2-05-open-the-door.front',
      text: 'open the door',
      src: asset10,
    },
    {
      id: 'course-a2-05-open-the-door.back',
      text: 'Can you open the door?',
      src: asset11,
    },
    {
      id: 'course-a2-05-take-the-stairs.front',
      text: 'take the stairs',
      src: asset12,
    },
    {
      id: 'course-a2-05-take-the-stairs.back',
      text: 'We have to take the stairs.',
      src: asset13,
    },
    {
      id: 'course-a2-05-move-a-chair.front',
      text: 'move a chair',
      src: asset14,
    },
    {
      id: 'course-a2-05-move-a-chair.back',
      text: 'I’ll move this chair.',
      src: asset15,
    },
    {
      id: 'course-a2-05-paint-a-wall.front',
      text: 'paint a wall',
      src: asset16,
    },
    {
      id: 'course-a2-05-paint-a-wall.back',
      text: 'I’m going to paint a wall tomorrow.',
      src: asset17,
    },
    {
      id: 'course-a2-05-unpack-a-bag.front',
      text: 'unpack a bag',
      src: asset18,
    },
    {
      id: 'course-a2-05-unpack-a-bag.back',
      text: 'I want to unpack my bags today.',
      src: asset19,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset20,
    '/flashcards/course-characters/ana/image.webp': asset21,
    '/flashcards-transparent/course-images/5fe4647889363593398e497d76579ea980337c9c9c8a3db06c98e9940b7490bc/image.webp':
      asset22,
  },
}
export default prepared
