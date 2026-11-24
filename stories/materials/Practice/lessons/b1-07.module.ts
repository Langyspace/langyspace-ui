import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/aa9102252d5605ef639fef31e46e22f7cd3ce7215b1924fff1ae462ec0356429.mp3'
import quizNarration2 from '../assets/quiz-audio/4395f2337063711a02e9ca5d9b3af3a728d0f793dfcad498564205213edcb5cc.mp3'
import quizNarration3 from '../assets/quiz-audio/16f94d5c5a2a53de43270c0d82d863a38f06137f55e22861fe21b77750315c17.mp3'
import quizNarration4 from '../assets/quiz-audio/5d51e36685e5683c970a8d67007d9c31b15e0a5a49681b3bfa5f6f2e504f503f.mp3'
import quizNarration5 from '../assets/quiz-audio/2aa0e2b73dca4c6bca62131e7263dfdb4b8565f268b01ad00e2e0e20037efe5a.mp3'
import quizNarration6 from '../assets/quiz-audio/8163e1e934bf1c84cee80fb2dda3334b9159eb446e921764ae240d8cf4174d7f.mp3'
import quizNarration7 from '../assets/quiz-audio/c1656aed63494912144ddbae3ec52013b499d9ccc93059b4b891006309484cf1.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './b1-07.json'
import asset0 from '../../Course/assets/audio/B107-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B107-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B107-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B107-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B107-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B107-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B107-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B107-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-b1-07-q01.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-07-q01.completion',
      text: 'I should have booked earlier',
      src: quizNarration1,
    },
    {
      id: 'course-b1-07-q02.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-07-q02.completion',
      text: 'We shouldn’t have chosen that connection',
      src: quizNarration2,
    },
    {
      id: 'course-b1-07-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-07-q03.completion',
      text: 'She should have taken the direct flight',
      src: quizNarration3,
    },
    {
      id: 'course-b1-07-q04.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-07-q04.completion',
      text: 'We could have allowed more time',
      src: quizNarration4,
    },
    {
      id: 'course-b1-07-q05.prompt',
      text: 'Choose the correct question',
      src: quizNarration5,
    },
    {
      id: 'course-b1-07-q05.completion',
      text: 'What could we have done differently?',
      src: quizNarration6,
    },
    {
      id: 'course-b1-07-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-07-q06.completion',
      text: 'Next time, I’d compare arrival times',
      src: quizNarration7,
    },
    {
      id: 'b1-07.shadowing.01',
      text: 'Did you make the connection? You only had thirty-five minutes.',
      src: asset0,
    },
    {
      id: 'b1-07.shadowing.02',
      text: 'No. The first flight was fifty minutes late, so I missed it.',
      src: asset1,
    },
    {
      id: 'b1-07.shadowing.03',
      text: 'That’s frustrating. Was there a direct flight when you booked?',
      src: asset2,
    },
    {
      id: 'b1-07.shadowing.04',
      text: 'Yes, but it cost more. I should have allowed more time between flights.',
      src: asset3,
    },
    {
      id: 'b1-07.shadowing.05',
      text: 'You couldn’t have known about the delay, though. What can you do now?',
      src: asset4,
    },
    {
      id: 'b1-07.shadowing.06',
      text: 'I’m waiting for the desk to confirm another flight.',
      src: asset5,
    },
    {
      id: 'b1-07.shadowing.07',
      text: 'I’d also check what your travel insurance covers, without assuming it pays for everything.',
      src: asset6,
    },
    {
      id: 'b1-07.shadowing.08',
      text: 'I will. Next time I’d compare the arrival time as well as the price.',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
