import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/8468233f8fad27f7bfba5bb60e57341842cb9d005c40c6e7a25d044f2607baec.mp3'
import quizNarration2 from '../assets/quiz-audio/f274021c12d8c1ce015b908c24f6d3819638017570b7ddb65404051e2ce61f77.mp3'
import quizNarration3 from '../assets/quiz-audio/a95e43c0d3056d55d6ffcc39e87ef00ec04353ba3401ff8d67375bca5b408b78.mp3'
import quizNarration4 from '../assets/quiz-audio/ced54048931bb89ece8d62959b9df41520e9304a92dec18374f66ae50751675a.mp3'
import quizNarration5 from '../assets/quiz-audio/abc13e57dc1be0465a42d077afe1ca598772ae44df864f1567679ecae52346f1.mp3'
import quizNarration6 from '../assets/quiz-audio/e87b084481821af2d7a90fe3419814919632364c387b9f4021ddd3428d5ad123.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './a2-12.json'
import asset0 from '../assets/audio/23b6302120e5a3a9883a776d4e59952e138d6d7cee874a8a22ac83d94f638f71.mp3'
import asset1 from '../assets/audio/5a4680a59431f6a908dda0b6d685eea88b9db0faa64e6d23afb646807b6338d0.mp3'
import asset2 from '../assets/audio/e21a2d0284055a79975923f6cc575172699f17fe17909b171747786f06b918a7.mp3'
import asset3 from '../assets/audio/da121299fcf4ac4762b1769facdd769c6cbb7d872b8f9aba3d16d4049d2ad205.mp3'
import asset4 from '../assets/audio/08df3b71e1b2f0a548f42e5f1265a4b51df982ba7fcc24e5bb7591a11cfecdd7.mp3'
import asset5 from '../assets/audio/f27daaa37a40728a7eaee47c6fbbe8f44548cc040e4d64e1558b54b043a49ef9.mp3'
import asset6 from '../assets/audio/2db401d963503d4c6c78cf0b11fd4d26258c34b8b24bb1880aba270c902158e1.mp3'
import asset7 from '../assets/audio/af3088ead1fbfed81259715f9881b1890617275f23966d03f510e6f2e5b12890.mp3'
import asset8 from '../assets/characters/niamh-murphy.webp'
import asset9 from '../assets/characters/cian-walsh.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-a2-12-q01.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-12-q01.completion',
      text: 'How about meeting on Friday?',
      src: quizNarration1,
    },
    {
      id: 'course-a2-12-q02.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-12-q02.completion',
      text: 'Why don’t we book a table?',
      src: quizNarration2,
    },
    {
      id: 'course-a2-12-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-12-q03.completion',
      text: 'Let’s check the time first',
      src: quizNarration3,
    },
    {
      id: 'course-a2-12-q04.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-12-q04.completion',
      text: 'That sounds good',
      src: quizNarration4,
    },
    {
      id: 'course-a2-12-q05.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-12-q05.completion',
      text: 'I’d love to join you',
      src: quizNarration5,
    },
    {
      id: 'course-a2-12-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-12-q06.completion',
      text: 'How about dinner on Saturday?',
      src: quizNarration6,
    },
    {
      id: 'a2-12.shadowing.01',
      text: 'Would you like to have dinner on Friday?',
      src: asset0,
    },
    {
      id: 'a2-12.shadowing.02',
      text: 'I’d love to, but I’m working until eight',
      src: asset1,
    },
    {
      id: 'a2-12.shadowing.03',
      text: 'How about Saturday, then?',
      src: asset2,
    },
    {
      id: 'a2-12.shadowing.04',
      text: 'Saturday works. Why don’t we try the new Italian place?',
      src: asset3,
    },
    {
      id: 'a2-12.shadowing.05',
      text: 'Good idea. Shall we book a table for seven?',
      src: asset4,
    },
    {
      id: 'a2-12.shadowing.06',
      text: 'Seven is a bit early. How about half past seven?',
      src: asset5,
    },
    {
      id: 'a2-12.shadowing.07',
      text: 'Perfect. I can book it this afternoon',
      src: asset6,
    },
    {
      id: 'a2-12.shadowing.08',
      text: 'Thanks. I’ll send you the address',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/niamh-murphy/image.webp': asset8,
    '/flashcards/course-characters/cian-walsh/image.webp': asset9,
  },
}
export default prepared
