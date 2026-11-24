import quiz92_course_b2_05_q05 from '../assets/quiz-audio/90bb4ca1b5de672e00f954de6054fc625c428cc99961b1152d0e839348e1c6fa.mp3'
import quiz92_course_b2_05_q04 from '../assets/quiz-audio/699c52db880c2a96f9df33f78c5d8d220a53754c862e8ec95c897d09ed639a18.mp3'
import quiz92_course_b2_05_q02 from '../assets/quiz-audio/8818f64d481c030b1e8f7b5a61f3d246d5003d7b1bc9bce4b6abed88e676730f.mp3'
import quiz92_course_b2_05_q01 from '../assets/quiz-audio/8e380d22496e1fa151f3f9551a954730c2b9f08d974e4998423dd615ab5396a3.mp3'
import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/bcad9ca2352548e9c4b4e0fa4c42404b4abfc16dd1ec1873dd80698e5a09e20b.mp3'
import quizNarration2 from '../assets/quiz-audio/b6ab0d208bb97144b94b71fcac3485b7ed383423530ad49c428c753d18b8989f.mp3'
import quizNarration3 from '../assets/quiz-audio/2aa0e2b73dca4c6bca62131e7263dfdb4b8565f268b01ad00e2e0e20037efe5a.mp3'
import quizNarration4 from '../assets/quiz-audio/324a516efd2d34c7c03d5e71e46eac4032850aa389a8be115c71b7b815e58634.mp3'
import quizNarration5 from '../assets/quiz-audio/6fc1f545721cd4b2224543104a5dbb11d2b355733c1ec018cacd458aea402704.mp3'
import quizNarration6 from '../assets/quiz-audio/2e99a254ae70e1cd95fbadb320c6939c2afa385af2a536f05e1c763c46a2631a.mp3'
import quizNarration7 from '../assets/quiz-audio/bf52685822ed07b13358b5c20db56c1c923477bb26e53a3748e84fc07faa51e9.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './b2-05.json'
import asset0 from '../../Course/assets/audio/B205-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B205-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B205-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B205-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B205-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B205-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B205-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B205-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B205-D81.9.mp3'
import asset9 from '../../Course/assets/audio/B205-D81.10.mp3'
import asset10 from '../../Course/assets/audio/B205-D81.11.mp3'
import asset11 from '../../Course/assets/audio/B205-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-b2-05-q01.prompt',
      text: 'Complete the sentence. We needn’t have blank twice',
      src: quiz92_course_b2_05_q01,
    },
    {
      id: 'course-b2-05-q01.completion',
      text: 'We needn’t have paid twice',
      src: quizNarration1,
    },
    {
      id: 'course-b2-05-q02.prompt',
      text: 'Is this sentence correct? We didn’t need to booked in advance',
      src: quiz92_course_b2_05_q02,
    },
    {
      id: 'course-b2-05-q02.completion',
      text: 'We didn’t need to book in advance',
      src: quizNarration2,
    },
    {
      id: 'course-b2-05-q03.prompt',
      text: 'Choose the correct question',
      src: quizNarration3,
    },
    {
      id: 'course-b2-05-q03.completion',
      text: 'Did you need to pay a deposit?',
      src: quizNarration4,
    },
    {
      id: 'course-b2-05-q04.prompt',
      text: 'Complete the sentence. I needn’t have blank breakfast',
      src: quiz92_course_b2_05_q04,
    },
    {
      id: 'course-b2-05-q04.completion',
      text: 'I needn’t have bought breakfast',
      src: quizNarration5,
    },
    {
      id: 'course-b2-05-q05.prompt',
      text: 'Is this sentence correct? We didn’t need to pay in advance, but we chose to',
      src: quiz92_course_b2_05_q05,
    },
    {
      id: 'course-b2-05-q05.completion',
      text: 'We didn’t need to pay in advance, but we chose to',
      src: quizNarration6,
    },
    {
      id: 'course-b2-05-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b2-05-q06.completion',
      text: 'She didn’t need to pay twice',
      src: quizNarration7,
    },
    {
      id: 'b2-05.shadowing.01',
      text: 'Why is the total higher than the booking confirmation?',
      src: asset0,
    },
    {
      id: 'b2-05.shadowing.02',
      text: 'The receipt includes twenty dollars for breakfast, plus a fifty-dollar deposit.',
      src: asset1,
    },
    {
      id: 'b2-05.shadowing.03',
      text: 'I thought breakfast was included in the room price.',
      src: asset2,
    },
    {
      id: 'b2-05.shadowing.04',
      text: 'It was. We needn’t have paid for the same breakfast again.',
      src: asset3,
    },
    {
      id: 'b2-05.shadowing.05',
      text: 'Is the deposit another mistake?',
      src: asset4,
    },
    {
      id: 'b2-05.shadowing.06',
      text: 'Not according to the conditions. It’s returned after the room check, if there’s no damage.',
      src: asset5,
    },
    {
      id: 'b2-05.shadowing.07',
      text: 'So we should keep the two amounts separate when we ask.',
      src: asset6,
    },
    {
      id: 'b2-05.shadowing.08',
      text: 'Exactly. We can show the confirmation and request the breakfast charge back.',
      src: asset7,
    },
    {
      id: 'b2-05.shadowing.09',
      text: 'Did we need to pay the full room price in advance?',
      src: asset8,
    },
    {
      id: 'b2-05.shadowing.10',
      text: 'No. We chose to, but the confirmation allowed payment at arrival.',
      src: asset9,
    },
    {
      id: 'b2-05.shadowing.11',
      text: 'That’s different from saying the room itself was free.',
      src: asset10,
    },
    {
      id: 'b2-05.shadowing.12',
      text: 'Yes. The issue is one duplicate service, not every payment on the receipt.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
