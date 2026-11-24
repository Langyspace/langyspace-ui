import quiz92_course_a2_09_q05 from '../assets/quiz-audio/f0a42f85384199bd813a73d1514312cfcf87d6974f0871cf027aee8f2f4990bd.mp3'
import quiz92_course_a2_09_q04 from '../assets/quiz-audio/55c6ae04d1f9cdbdfad1f652ac98369262856d60249c53bb1021c13a0847ea3b.mp3'
import quiz92_course_a2_09_q02 from '../assets/quiz-audio/db8b320e87dac6d1d3f11f0fe66ef16dbb37760bd939c038778cb4b186ba1ca3.mp3'
import quiz92_course_a2_09_q01 from '../assets/quiz-audio/bd354a67ac9df6026c99944304ab9baa19455b09dfe0f4f2c5bc46142792ec24.mp3'
import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/cfdc76cfb242e29d22d7645dba8f4541df979c4b82c22654e698f1f7f4fda9fb.mp3'
import quizNarration2 from '../assets/quiz-audio/fa4437cd1bfebb3063c11944756dec987d8634f318957cfe2e17dedebc8e55cc.mp3'
import quizNarration3 from '../assets/quiz-audio/2aa0e2b73dca4c6bca62131e7263dfdb4b8565f268b01ad00e2e0e20037efe5a.mp3'
import quizNarration4 from '../assets/quiz-audio/13466172f953ac2ecd9ef769067d0ae268a7e023adf4e6c4801db7461efdbe1e.mp3'
import quizNarration5 from '../assets/quiz-audio/e5b60b0498a694601d73d9d4fd143adb6e6a4e7cd35be8a4c87dd32471e3a3fa.mp3'
import quizNarration6 from '../assets/quiz-audio/b51076069e367b5e107e65627dd247fc9690ddfcbfbb167d0d8c0d2a50b36857.mp3'
import quizNarration7 from '../assets/quiz-audio/86ea10bfe809869caa199eaeb609492dd5b1f5936582d359f9662c33e071496f.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './a2-09.json'
import asset0 from '../../Course/assets/audio/A209-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A209-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A209-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A209-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A209-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A209-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A209-D81.7.mp3'
import asset7 from '../../Course/assets/audio/A209-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-a2-09-q01.prompt',
      text: 'Complete the sentence. I’ve lived here blank 2022',
      src: quiz92_course_a2_09_q01,
    },
    {
      id: 'course-a2-09-q01.completion',
      text: 'I’ve lived here since 2022',
      src: quizNarration1,
    },
    {
      id: 'course-a2-09-q02.prompt',
      text: 'Is this sentence correct? She’s worked here since three years',
      src: quiz92_course_a2_09_q02,
    },
    {
      id: 'course-a2-09-q02.completion',
      text: 'She’s worked here for three years',
      src: quizNarration2,
    },
    {
      id: 'course-a2-09-q03.prompt',
      text: 'Choose the correct question',
      src: quizNarration3,
    },
    {
      id: 'course-a2-09-q03.completion',
      text: 'How long have you lived here?',
      src: quizNarration4,
    },
    {
      id: 'course-a2-09-q04.prompt',
      text: 'Complete the sentence. When did you blank here?',
      src: quiz92_course_a2_09_q04,
    },
    {
      id: 'course-a2-09-q04.completion',
      text: 'When did you move here?',
      src: quizNarration5,
    },
    {
      id: 'course-a2-09-q05.prompt',
      text: 'Is this sentence correct? I moved here in 2022',
      src: quiz92_course_a2_09_q05,
    },
    {
      id: 'course-a2-09-q05.completion',
      text: 'I moved here in 2022',
      src: quizNarration6,
    },
    {
      id: 'course-a2-09-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-09-q06.completion',
      text: 'We have been neighbours since May',
      src: quizNarration7,
    },
    {
      id: 'a2-09.shadowing.01',
      text: 'Long time no see! Are you still living in the same city?',
      src: asset0,
    },
    {
      id: 'a2-09.shadowing.02',
      text: 'No, I moved to Porto in 2023.',
      src: asset1,
    },
    {
      id: 'a2-09.shadowing.03',
      text: 'How long have you lived there?',
      src: asset2,
    },
    {
      id: 'a2-09.shadowing.04',
      text: 'Since 2023. I really like it, and I’ve made some good friends.',
      src: asset3,
    },
    {
      id: 'a2-09.shadowing.05',
      text: 'That’s great. Have you taken up any new hobbies?',
      src: asset4,
    },
    {
      id: 'a2-09.shadowing.06',
      text: 'Yes, I started a photography group in 2025.',
      src: asset5,
    },
    {
      id: 'a2-09.shadowing.07',
      text: 'Do you still go every week?',
      src: asset6,
    },
    {
      id: 'a2-09.shadowing.08',
      text: 'I do. We meet on Sundays. What’s changed in your life?',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
