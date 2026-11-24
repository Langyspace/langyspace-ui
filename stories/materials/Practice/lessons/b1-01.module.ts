import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/d554d01106779ca1dc2781164a567653d3b123e2377c5168658ebd1bb12414b4.mp3'
import quizNarration2 from '../assets/quiz-audio/b7e317628dff6ba2ab939ffb40ffd1de032287c883f8cb5853d34dafc5bfc247.mp3'
import quizNarration3 from '../assets/quiz-audio/15075b302c6a2fa16587f05af7476cb9bba5d3bb19f837f67db4b4d5a2c40cf0.mp3'
import quizNarration4 from '../assets/quiz-audio/2aa0e2b73dca4c6bca62131e7263dfdb4b8565f268b01ad00e2e0e20037efe5a.mp3'
import quizNarration5 from '../assets/quiz-audio/72c0175e419d07bdf974e95c99d7d5445cb7f2e64b8e14192164aad7357a862c.mp3'
import quizNarration6 from '../assets/quiz-audio/e4621b6756090ec38752d6fceec04a8c98010f87da63c376cd673b5bc2389d85.mp3'
import quizNarration7 from '../assets/quiz-audio/26d132e0f95bc198b939af8af312a7fd92143f57caf24e160bb84a82e1cdca27.mp3'
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
      id: 'course-b1-01-q01.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-01-q01.completion',
      text: 'I’ve been painting',
      src: quizNarration1,
    },
    {
      id: 'course-b1-01-q02.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-01-q02.completion',
      text: 'She has been cycling to work',
      src: quizNarration2,
    },
    {
      id: 'course-b1-01-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-01-q03.completion',
      text: 'I’ve sent all three emails',
      src: quizNarration3,
    },
    {
      id: 'course-b1-01-q04.prompt',
      text: 'Choose the correct question',
      src: quizNarration4,
    },
    {
      id: 'course-b1-01-q04.completion',
      text: 'How long have you been baking?',
      src: quizNarration5,
    },
    {
      id: 'course-b1-01-q05.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-01-q05.completion',
      text: 'He’s been working here for a month',
      src: quizNarration6,
    },
    {
      id: 'course-b1-01-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-01-q06.completion',
      text: 'I’ve finished the room, but I’m still painting the hall',
      src: quizNarration7,
    },
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
