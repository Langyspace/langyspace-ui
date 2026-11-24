import quiz92_course_b1_05_q05 from '../assets/quiz-audio/5a8793e074c441d44272e7f8ac4bd2d26cbe02b0f39c89c61521f4207478551c.mp3'
import quiz92_course_b1_05_q04 from '../assets/quiz-audio/4f7410af8bbe42c99d5dadbba60bf739ff7f08d97cb83b7301345febfe69b37a.mp3'
import quiz92_course_b1_05_q02 from '../assets/quiz-audio/0a26e8e6a1cdf89644b40faa06859f56de12ca9d048147bf935f552a15115811.mp3'
import quiz92_course_b1_05_q01 from '../assets/quiz-audio/76e08a5e90be6d6b3045a1ca36700cda5c3b0a0762091b9ff02e59a41f558d7a.mp3'
import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/15ddfdabf713da4d17e47ea60ff130dc566590d02f568b8042c2c84e0270d1df.mp3'
import quizNarration2 from '../assets/quiz-audio/8601b49066a4c0f77890209a3f48e77497fa3b970f1f35b8d764768367ceaec7.mp3'
import quizNarration3 from '../assets/quiz-audio/2503be56a0a207fd3d63544ad8d200f062a4690c65d50cf06877a0aaf0ae04df.mp3'
import quizNarration4 from '../assets/quiz-audio/d3fc625cec9a7dac85040b1c22f0b13e72400b9dc1d1e243ed544da1dbad07b0.mp3'
import quizNarration5 from '../assets/quiz-audio/1f9ae8148f31231c2d593a839f81e58d64709087e21e62fdf7b7da11dbf21db7.mp3'
import quizNarration6 from '../assets/quiz-audio/3d03cb0d45e73776101cbbefb79621088ce1a9a36f992dde8acd006dc4fb8801.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './b1-05.json'
import asset0 from '../assets/audio/35cd8918a1ea6d67f1a9feb6be38b621b23c21754852f038b3ed7859c956326a.mp3'
import asset1 from '../assets/audio/20bba570b20cc5650b57d5a5c938ed363a747b209e7aa32e07e5af9796cf030b.mp3'
import asset2 from '../assets/audio/6184c2d01286fbe6929023382a377db6ebde08049cd9897a1b6ce24d9ed1c8fd.mp3'
import asset3 from '../assets/audio/cd3b7393a41d8bff5f7b3e416adfce9351082fdd08d57fe56c475ba30b54ded8.mp3'
import asset4 from '../assets/audio/66fbbfba63b51ce0608be1e9b9d5db5fcf7550276df01ddfee8cb8c350f318dc.mp3'
import asset5 from '../assets/audio/4d69c3b0fb2cfc746429d06f4195cc96846fda6058882495dcc6e3e17aaf0def.mp3'
import asset6 from '../assets/audio/565d5781843d4db8f82c041f47bf0f6d3680131ad8b7a82fc6a49c22ff806c8b.mp3'
import asset7 from '../assets/audio/64f2e798fe86c135be7dde08edc7c0331efc42e578ec908750c2fccd3ea4e9a7.mp3'
import asset8 from '../assets/characters/priya-nair.webp'
import asset9 from '../assets/characters/arjun-mehta.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-b1-05-q01.prompt',
      text: 'Complete the sentence. He blank me the time',
      src: quiz92_course_b1_05_q01,
    },
    {
      id: 'course-b1-05-q01.completion',
      text: 'He told me the time',
      src: quizNarration1,
    },
    {
      id: 'course-b1-05-q02.prompt',
      text: 'Is this sentence correct? She said she was busy',
      src: quiz92_course_b1_05_q02,
    },
    {
      id: 'course-b1-05-q02.completion',
      text: 'She said she was busy',
      src: quizNarration2,
    },
    {
      id: 'course-b1-05-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-05-q03.completion',
      text: 'He asked us to leave a key',
      src: quizNarration3,
    },
    {
      id: 'course-b1-05-q04.prompt',
      text: 'Complete the sentence. She asked me blank early',
      src: quiz92_course_b1_05_q04,
    },
    {
      id: 'course-b1-05-q04.completion',
      text: 'She asked me not to call early',
      src: quizNarration4,
    },
    {
      id: 'course-b1-05-q05.prompt',
      text: 'Is this sentence correct? He said he would came on Thursday',
      src: quiz92_course_b1_05_q05,
    },
    {
      id: 'course-b1-05-q05.completion',
      text: 'He said he would come on Thursday',
      src: quizNarration5,
    },
    {
      id: 'course-b1-05-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-05-q06.completion',
      text: 'Kim told Ana that she needed a key',
      src: quizNarration6,
    },
    {
      id: 'b1-05.shadowing.01',
      text: 'I spoke to the building manager about the leak',
      src: asset0,
    },
    { id: 'b1-05.shadowing.02', text: 'Good. What did he say?', src: asset1 },
    {
      id: 'b1-05.shadowing.03',
      text: 'He said the plumber would come on Thursday morning',
      src: asset2,
    },
    { id: 'b1-05.shadowing.04', text: 'Did he say what time?', src: asset3 },
    {
      id: 'b1-05.shadowing.05',
      text: 'Yes. He told me the appointment was between nine and eleven',
      src: asset4,
    },
    {
      id: 'b1-05.shadowing.06',
      text: 'I’ll be at work. Did he ask us to leave a spare key?',
      src: asset5,
    },
    {
      id: 'b1-05.shadowing.07',
      text: 'He did. He asked us to leave it at reception',
      src: asset6,
    },
    {
      id: 'b1-05.shadowing.08',
      text: 'Okay. I’ll do that before I leave',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/priya-nair/image.webp': asset8,
    '/flashcards/course-characters/arjun-mehta/image.webp': asset9,
  },
}
export default prepared
