import type { PreparedPractice } from '../Practice.types'
import data from './a2-02.json'
import asset0 from '../../Course/assets/audio/A202-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A202-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A202-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A202-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A202-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A202-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A202-D81.7.mp3'
import asset7 from '../../Course/assets/audio/A202-D81.8.mp3'
import asset8 from '../../Course/assets/audio/A202-V81.0.mp3'
import asset9 from '../../Course/assets/audio/A202-FE81.0.mp3'
import asset10 from '../../Course/assets/audio/A202-V81.1.mp3'
import asset11 from '../../Course/assets/audio/A202-FE81.1.mp3'
import asset12 from '../../Course/assets/audio/A202-V81.2.mp3'
import asset13 from '../../Course/assets/audio/A202-FE81.2.mp3'
import asset14 from '../../Course/assets/audio/A202-V81.3.mp3'
import asset15 from '../../Course/assets/audio/A202-FE81.3.mp3'
import asset16 from '../../Course/assets/audio/A202-V81.4.mp3'
import asset17 from '../../Course/assets/audio/A202-FE81.4.mp3'
import asset18 from '../../Course/assets/audio/A202-V81.5.mp3'
import asset19 from '../../Course/assets/audio/A202-FE81.5.mp3'
import asset20 from '../assets/characters/kim.webp'
import asset21 from '../assets/characters/ana.webp'
import asset22 from '../../Course/assets/a2-02-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a2-02.shadowing.01',
      text: 'How was your weekend? Did you go anywhere?',
      src: asset0,
    },
    {
      id: 'a2-02.shadowing.02',
      text: 'Yes! I went to a market on Saturday and had coffee with a friend.',
      src: asset1,
    },
    {
      id: 'a2-02.shadowing.03',
      text: 'That sounds nice. Did you buy anything?',
      src: asset2,
    },
    {
      id: 'a2-02.shadowing.04',
      text: 'Just some fruit. Then we took photos by the river.',
      src: asset3,
    },
    {
      id: 'a2-02.shadowing.05',
      text: 'And what did you do on Sunday?',
      src: asset4,
    },
    {
      id: 'a2-02.shadowing.06',
      text: 'I stayed at home. I was tired, so I watched a film.',
      src: asset5,
    },
    {
      id: 'a2-02.shadowing.07',
      text: 'Was it good? I’m looking for something to watch.',
      src: asset6,
    },
    {
      id: 'a2-02.shadowing.08',
      text: 'It was really funny! What about you? How was your weekend?',
      src: asset7,
    },
    {
      id: 'course-a2-02-visited-a-museum.front',
      text: 'visited a museum',
      src: asset8,
    },
    {
      id: 'course-a2-02-visited-a-museum.back',
      text: 'I visited a museum on Sunday.',
      src: asset9,
    },
    {
      id: 'course-a2-02-went-to-a-market.front',
      text: 'went to a market',
      src: asset10,
    },
    {
      id: 'course-a2-02-went-to-a-market.back',
      text: 'We went to a market in the morning.',
      src: asset11,
    },
    { id: 'course-a2-02-had-coffee.front', text: 'had coffee', src: asset12 },
    {
      id: 'course-a2-02-had-coffee.back',
      text: 'I had coffee with a friend.',
      src: asset13,
    },
    { id: 'course-a2-02-took-photos.front', text: 'took photos', src: asset14 },
    {
      id: 'course-a2-02-took-photos.back',
      text: 'We took photos by the river.',
      src: asset15,
    },
    {
      id: 'course-a2-02-walked-on-the-beach.front',
      text: 'walked on the beach',
      src: asset16,
    },
    {
      id: 'course-a2-02-walked-on-the-beach.back',
      text: 'She walked on the beach for an hour.',
      src: asset17,
    },
    {
      id: 'course-a2-02-stayed-at-home.front',
      text: 'stayed at home',
      src: asset18,
    },
    {
      id: 'course-a2-02-stayed-at-home.back',
      text: 'I stayed at home and watched a film.',
      src: asset19,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset20,
    '/flashcards/course-characters/ana/image.webp': asset21,
    '/flashcards-transparent/course-images/01faec4807a65385bc18d25a97a19bfd785559d4aa92827da3d5d424211a1a1d/image.webp':
      asset22,
  },
}
export default prepared
