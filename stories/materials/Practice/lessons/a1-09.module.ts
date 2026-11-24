import quiz92_course_a1_09_q05 from '../assets/quiz-audio/e37bcbd5e2bdcfd5c0fb06aa155ceb1b2649449795eeaa09b2d741fbbda148e2.mp3'
import quiz92_course_a1_09_q04 from '../assets/quiz-audio/9649258f78b4272cb78a51666f921254580fd8c673cc68c688580b3a5675c843.mp3'
import quiz92_course_a1_09_q02 from '../assets/quiz-audio/04ae51ff80014ebcc4fca2ae2e435db16ac623629517f1a6e7eb93d802758873.mp3'
import quiz92_course_a1_09_q01 from '../assets/quiz-audio/847007cf218424b020347a69cf513baae27e1f91c9dfdea88bf288237c94bd42.mp3'
import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/cb0b7d2a546a2ecb9bdd12292043e62c7b6a7531a0ecc22498fdfe681f0b3af5.mp3'
import quizNarration2 from '../assets/quiz-audio/4fcd952be42c3d51cbb8925584217b5e80f6d5eba27d2d1bb90072196a19d6ef.mp3'
import quizNarration3 from '../assets/quiz-audio/2aa0e2b73dca4c6bca62131e7263dfdb4b8565f268b01ad00e2e0e20037efe5a.mp3'
import quizNarration4 from '../assets/quiz-audio/53a4bec62821cf7b6a1f2ffe5935055278302452ddc93440aa4a640c7353bec6.mp3'
import quizNarration5 from '../assets/quiz-audio/e08479da6481517ee7747290b69626631f9ca4655693776f210bafba0ff7b412.mp3'
import quizNarration6 from '../assets/quiz-audio/4cdd45e3b75ba56fbcdb8705c5d91760647bef84ee54a4d5ddfd2c2a47f7f42a.mp3'
import quizNarration7 from '../assets/quiz-audio/f0482b56cde9b7544d6642fd23c10f4a5598765152dd7dc7c0e6966d49a8fec1.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './a1-09.json'
import asset0 from '../../Course/assets/audio/A109-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A109-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A109-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A109-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A109-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A109-D81.6.mp3'
import asset6 from '../assets/characters/kim.webp'
import asset7 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-a1-09-q01.prompt',
      text: 'Complete the sentence. There blank a café',
      src: quiz92_course_a1_09_q01,
    },
    {
      id: 'course-a1-09-q01.completion',
      text: 'There is a café',
      src: quizNarration1,
    },
    {
      id: 'course-a1-09-q02.prompt',
      text: 'Is this sentence correct? There is two banks',
      src: quiz92_course_a1_09_q02,
    },
    {
      id: 'course-a1-09-q02.completion',
      text: 'There are two banks',
      src: quizNarration2,
    },
    {
      id: 'course-a1-09-q03.prompt',
      text: 'Choose the correct question',
      src: quizNarration3,
    },
    {
      id: 'course-a1-09-q03.completion',
      text: 'Is there a pharmacy near here?',
      src: quizNarration4,
    },
    {
      id: 'course-a1-09-q04.prompt',
      text: 'Complete the sentence. blank there two cafés on this street?',
      src: quiz92_course_a1_09_q04,
    },
    {
      id: 'course-a1-09-q04.completion',
      text: 'Are there two cafés on this street?',
      src: quizNarration5,
    },
    {
      id: 'course-a1-09-q05.prompt',
      text: 'Is this sentence correct? Turn right at the bank',
      src: quiz92_course_a1_09_q05,
    },
    {
      id: 'course-a1-09-q05.completion',
      text: 'Turn right at the bank',
      src: quizNarration6,
    },
    {
      id: 'course-a1-09-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a1-09-q06.completion',
      text: 'There’s a park near the hotel',
      src: quizNarration7,
    },
    {
      id: 'a1-09.shadowing.01',
      text: 'Excuse me. Is there a café near the hotel?',
      src: asset0,
    },
    {
      id: 'a1-09.shadowing.02',
      text: 'Yes, there is. Go straight and turn right at the first street.',
      src: asset1,
    },
    {
      id: 'a1-09.shadowing.03',
      text: 'Is it next to the pharmacy?',
      src: asset2,
    },
    {
      id: 'a1-09.shadowing.04',
      text: 'Yes. The pharmacy is on the same street.',
      src: asset3,
    },
    {
      id: 'a1-09.shadowing.05',
      text: 'Great. And is there a park here?',
      src: asset4,
    },
    {
      id: 'a1-09.shadowing.06',
      text: 'Yes. Go straight and take the second right. The park is at the end.',
      src: asset5,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset6,
    '/flashcards/course-characters/ana/image.webp': asset7,
  },
}
export default prepared
