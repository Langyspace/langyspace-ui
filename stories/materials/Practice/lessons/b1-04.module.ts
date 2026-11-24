import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/a3f34b14233e2b2625702d7820c07ea68f6076a67e9bf96d0856d461e0596351.mp3'
import quizNarration2 from '../assets/quiz-audio/d66b32af76d0a473a575bab9fe61e33c20fc281dd8e7a1cee8601cd2ee763f9e.mp3'
import quizNarration3 from '../assets/quiz-audio/d9729726fee1431ff7779962d6f4aff51d8b25cc9b2413bd28381ba022dae794.mp3'
import quizNarration4 from '../assets/quiz-audio/2aa0e2b73dca4c6bca62131e7263dfdb4b8565f268b01ad00e2e0e20037efe5a.mp3'
import quizNarration5 from '../assets/quiz-audio/b793d998886f3f63bb417f8cb782d3b96faac45b8e6e2d2c4cf28664ec83b05a.mp3'
import quizNarration6 from '../assets/quiz-audio/074851f0888bf3481a22b30f3985a54b54087a32d1ad1b506beafa1fdd3ea0b6.mp3'
import quizNarration7 from '../assets/quiz-audio/b9842cc84bbc78311eb944b3e8d456478f998f43fb0e30e703e7cd84a88785c1.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './b1-04.json'
import asset0 from '../../Course/assets/audio/B104-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B104-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B104-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B104-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B104-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B104-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B104-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B104-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-b1-04-q01.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-04-q01.completion',
      text: 'It must be Kim’s bag',
      src: quizNarration1,
    },
    {
      id: 'course-b1-04-q02.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-04-q02.completion',
      text: 'The pass might belong to Leo',
      src: quizNarration2,
    },
    {
      id: 'course-b1-04-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-04-q03.completion',
      text: 'It can’t be the bag she described',
      src: quizNarration3,
    },
    {
      id: 'course-b1-04-q04.prompt',
      text: 'Choose the correct question',
      src: quizNarration4,
    },
    {
      id: 'course-b1-04-q04.completion',
      text: 'Could this be your charger?',
      src: quizNarration5,
    },
    {
      id: 'course-b1-04-q05.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-04-q05.completion',
      text: 'The phone must need charging',
      src: quizNarration6,
    },
    {
      id: 'course-b1-04-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-04-q06.completion',
      text: 'The owner might be travelling',
      src: quizNarration7,
    },
    {
      id: 'b1-04.shadowing.01',
      text: 'Someone has left a backpack by our table. Should we take it to reception?',
      src: asset0,
    },
    {
      id: 'b1-04.shadowing.02',
      text: 'Yes. There’s a boarding pass visible in the open pocket. The owner might be travelling.',
      src: asset1,
    },
    {
      id: 'b1-04.shadowing.03',
      text: 'Maybe, but it could be an old pass. We don’t know the date.',
      src: asset2,
    },
    {
      id: 'b1-04.shadowing.04',
      text: 'True. There’s also a charger and a black notebook.',
      src: asset3,
    },
    {
      id: 'b1-04.shadowing.05',
      text: 'Those are common things. What detail could help reception identify it?',
      src: asset4,
    },
    {
      id: 'b1-04.shadowing.06',
      text: 'The notebook has a silver star, and the key ring is a red fish.',
      src: asset5,
    },
    {
      id: 'b1-04.shadowing.07',
      text: 'That’s more useful. Let’s let the caller describe those before we suggest them.',
      src: asset6,
    },
    {
      id: 'b1-04.shadowing.08',
      text: 'Agreed. We can make a guess, but we shouldn’t hand it over without checking.',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
