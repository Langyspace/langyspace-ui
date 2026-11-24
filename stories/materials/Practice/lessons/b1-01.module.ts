import type { PreparedPractice } from '../Practice.types'
import data from './b1-01.json'
import asset0 from '../../Course/assets/audio/legacy-B101-D.1.mp3'
import asset1 from '../../Course/assets/audio/legacy-B101-D.2.mp3'
import asset2 from '../../Course/assets/audio/legacy-B101-D.3.mp3'
import asset3 from '../../Course/assets/audio/legacy-B101-D.4.mp3'
import asset4 from '../../Course/assets/audio/legacy-B101-D.5.mp3'
import asset5 from '../../Course/assets/audio/legacy-B101-D.6.mp3'
import asset6 from '../../Course/assets/audio/legacy-B101-D.7.mp3'
import asset7 from '../../Course/assets/audio/legacy-B101-D.8.mp3'
import asset8 from '../../Course/assets/audio/legacy-B101-D.9.mp3'
import asset9 from '../../Course/assets/audio/legacy-B101-D.10.mp3'
import asset10 from '../../Course/assets/audio/legacy-B101-D.11.mp3'
import asset11 from '../assets/characters/kim.webp'
import asset12 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b1-01.shadowing.01',
      text: 'Hi, Ana! I’m back! Wow… your living room is blue!',
      src: asset0,
    },
    {
      id: 'b1-01.shadowing.02',
      text: 'Welcome back! Yeah, I’ve been painting all week.',
      src: asset1,
    },
    {
      id: 'b1-01.shadowing.03',
      text: 'It’s great! Have you finished?',
      src: asset2,
    },
    {
      id: 'b1-01.shadowing.04',
      text: 'Almost. I’ve painted both rooms, the living room and the kitchen. The bedroom is next.',
      src: asset3,
    },
    {
      id: 'b1-01.shadowing.05',
      text: 'And your shoes! Have you been running?',
      src: asset4,
    },
    {
      id: 'b1-01.shadowing.06',
      text: 'Yes! I’ve been running every morning for two weeks.',
      src: asset5,
    },
    {
      id: 'b1-01.shadowing.07',
      text: 'Every morning? Wow. And there’s a cake on the table. You’ve even been baking!',
      src: asset6,
    },
    {
      id: 'b1-01.shadowing.08',
      text: 'Ha! Yes. I’ve baked three cakes this week. Anyway, how was Korea?',
      src: asset7,
    },
    {
      id: 'b1-01.shadowing.09',
      text: 'Great! I visited my family and ate a lot. But I have jet lag. I’ve been sleeping all day!',
      src: asset8,
    },
    {
      id: 'b1-01.shadowing.10',
      text: 'Oh no! You seem tired. Here, have some cake.',
      src: asset9,
    },
    {
      id: 'b1-01.shadowing.11',
      text: 'Of course! I always say yes to cake.',
      src: asset10,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset11,
    '/flashcards/course-characters/ana/image.webp': asset12,
  },
}
export default prepared
