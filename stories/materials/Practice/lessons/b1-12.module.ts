import quiz92_course_b1_12_q05 from '../assets/quiz-audio/65463651e41b2bf4594b376f1e2aad1934db1e64de2c508d1422b065a508ae06.mp3'
import quiz92_course_b1_12_q04 from '../assets/quiz-audio/1d8c9e368195061c03fb3e0c3b18660a098e99945145329e5b99604fa25bd236.mp3'
import quiz92_course_b1_12_q02 from '../assets/quiz-audio/43168670eec5c4dce594c51d0cc92e5e2c287ed7d40f875f48ec2bbb2b8dac09.mp3'
import quiz92_course_b1_12_q01 from '../assets/quiz-audio/3b240e764fb8b5da4cdcef7f682f02bedaf784893121b4b10ebbbe4cdc47e075.mp3'
import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/fef2bea7f2a5acb9a99c8654277bc48973a35572d0d70657468086890d552c23.mp3'
import quizNarration2 from '../assets/quiz-audio/3fcfe8b5e12881e94e2ffa2dced036bdc5836351e5bf1320e2b439df3d496e2b.mp3'
import quizNarration3 from '../assets/quiz-audio/37d8637242a4923794d2a9ea0039f68e635997b553038fcae028d2edea4ee1dd.mp3'
import quizNarration4 from '../assets/quiz-audio/ae70003e862ceae3dc222e955e1cf69ae5b5278d0f690ceaf9f757ebad817e71.mp3'
import quizNarration5 from '../assets/quiz-audio/e43d30731250c71d7f5ad5dbf832fda5cf085d64c9dfb8ce4cae9f52fdb92b3c.mp3'
import quizNarration6 from '../assets/quiz-audio/c0e9b9f6391f134a5f824bed808a306ab5dae0ef6c8dcd20f6ad7f78d2cb3403.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './b1-12.json'
import asset0 from '../../Course/assets/audio/B112-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B112-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B112-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B112-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B112-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B112-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B112-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B112-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-b1-12-q01.prompt',
      text: 'Complete the sentence. I stay home blank it’s quiet',
      src: quiz92_course_b1_12_q01,
    },
    {
      id: 'course-b1-12-q01.completion',
      text: 'I stay home because it’s quiet',
      src: quizNarration1,
    },
    {
      id: 'course-b1-12-q02.prompt',
      text: 'Is this sentence correct? I arrived late because the traffic',
      src: quiz92_course_b1_12_q02,
    },
    {
      id: 'course-b1-12-q02.completion',
      text: 'I arrived late because of the traffic',
      src: quizNarration2,
    },
    {
      id: 'course-b1-12-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-12-q03.completion',
      text: 'Although I prefer home, I value team contact',
      src: quizNarration3,
    },
    {
      id: 'course-b1-12-q04.prompt',
      text: 'Complete the sentence. The train was late, blank I missed the meeting',
      src: quiz92_course_b1_12_q04,
    },
    {
      id: 'course-b1-12-q04.completion',
      text: 'The train was late, so I missed the meeting',
      src: quizNarration4,
    },
    {
      id: 'course-b1-12-q05.prompt',
      text: 'Is this sentence correct? The office is busy. However, I work well there',
      src: quiz92_course_b1_12_q05,
    },
    {
      id: 'course-b1-12-q05.completion',
      text: 'The office is busy. However, I work well there',
      src: quizNarration5,
    },
    {
      id: 'course-b1-12-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-12-q06.completion',
      text: 'I stayed home because of the noise',
      src: quizNarration6,
    },
    {
      id: 'b1-12.shadowing.01',
      text: 'Do you work better at home or in an office?',
      src: asset0,
    },
    {
      id: 'b1-12.shadowing.02',
      text: 'At home, usually, because I can concentrate without interruptions.',
      src: asset1,
    },
    {
      id: 'b1-12.shadowing.03',
      text: 'I understand that. However, I miss the quick conversations with the team.',
      src: asset2,
    },
    {
      id: 'b1-12.shadowing.04',
      text: 'Me too. Although I prefer home, I wouldn’t want to work alone all week.',
      src: asset3,
    },
    {
      id: 'b1-12.shadowing.05',
      text: 'Would a hybrid routine solve that?',
      src: asset4,
    },
    {
      id: 'b1-12.shadowing.06',
      text: 'It could, if we agree on the office days. Otherwise we might all come in separately.',
      src: asset5,
    },
    {
      id: 'b1-12.shadowing.07',
      text: 'Good point. We could have two shared team days and keep the rest flexible.',
      src: asset6,
    },
    {
      id: 'b1-12.shadowing.08',
      text: 'That’s worth trying. Let’s check whether it gives us enough quiet time too.',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
