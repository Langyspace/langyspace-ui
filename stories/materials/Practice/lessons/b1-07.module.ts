import quiz92_course_b1_07_q05 from '../assets/quiz-audio/6617535c4e8e94b8483ec46b82520be235ea400a5ba0923f88eacdf2d5a12fe4.mp3'
import quiz92_course_b1_07_q04 from '../assets/quiz-audio/c84681bb7d9d8f0aa1ff70e23adb63b5da4ce4c9ba8840c6335b7375e6217570.mp3'
import quiz92_course_b1_07_q02 from '../assets/quiz-audio/3ccfe508cb05e51a2349ebd9542d6b45aabdb6088afa79ce0f2830b97236d5e5.mp3'
import quiz92_course_b1_07_q01 from '../assets/quiz-audio/b24e440ecdf34b0f1c5b2ba0a20a564df1e9d0cc17cbec31b2427f839f2bd505.mp3'
import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/aa9102252d5605ef639fef31e46e22f7cd3ce7215b1924fff1ae462ec0356429.mp3'
import quizNarration2 from '../assets/quiz-audio/4395f2337063711a02e9ca5d9b3af3a728d0f793dfcad498564205213edcb5cc.mp3'
import quizNarration3 from '../assets/quiz-audio/16f94d5c5a2a53de43270c0d82d863a38f06137f55e22861fe21b77750315c17.mp3'
import quizNarration4 from '../assets/quiz-audio/5d51e36685e5683c970a8d67007d9c31b15e0a5a49681b3bfa5f6f2e504f503f.mp3'
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
      text: 'Complete the sentence. I should have blank earlier',
      src: quiz92_course_b1_07_q01,
    },
    {
      id: 'course-b1-07-q01.completion',
      text: 'I should have booked earlier',
      src: quizNarration1,
    },
    {
      id: 'course-b1-07-q02.prompt',
      text: 'Is this sentence correct? We shouldn’t have chosen that connection',
      src: quiz92_course_b1_07_q02,
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
      text: 'Complete the sentence. We could have blank more time',
      src: quiz92_course_b1_07_q04,
    },
    {
      id: 'course-b1-07-q04.completion',
      text: 'We could have allowed more time',
      src: quizNarration4,
    },
    {
      id: 'course-b1-07-q05.prompt',
      text: 'Is this sentence correct? What could we had done differently?',
      src: quiz92_course_b1_07_q05,
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
