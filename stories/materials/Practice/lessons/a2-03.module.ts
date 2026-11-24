import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/dfa78331c7e9fc637468ea04948e36b1f43dd2b916e60f3ef225794e2251193e.mp3'
import quizNarration2 from '../assets/quiz-audio/0eeb00e2cf5d57ab4a43fc2d7a2695c22f905bc0fbfa09083d82f164b7522db1.mp3'
import quizNarration3 from '../assets/quiz-audio/2aa0e2b73dca4c6bca62131e7263dfdb4b8565f268b01ad00e2e0e20037efe5a.mp3'
import quizNarration4 from '../assets/quiz-audio/d0cd725b8001c828f4cbbf21caf55f95283b3852617426be93fc3a75eef932f1.mp3'
import quizNarration5 from '../assets/quiz-audio/04694c599982f2052a400a723ae8b2c79400c0842c4d86cc9818235647e973da.mp3'
import quizNarration6 from '../assets/quiz-audio/52d8e741a1ab3f976c565a7be84733dd7ed66f0dfdd8f03bddd11c5f09412f24.mp3'
import quizNarration7 from '../assets/quiz-audio/fde31a112ba445c11e13627aa644ae3216f9aaf70e41471da516f859e0541006.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './a2-03.json'
import asset0 from '../../Course/assets/audio/A203-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A203-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A203-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A203-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A203-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A203-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A203-D81.7.mp3'
import asset7 from '../../Course/assets/audio/A203-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-a2-03-q01.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-03-q01.completion',
      text: 'I was waiting for the bus',
      src: quizNarration1,
    },
    {
      id: 'course-a2-03-q02.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-03-q02.completion',
      text: 'They were waiting outside',
      src: quizNarration2,
    },
    {
      id: 'course-a2-03-q03.prompt',
      text: 'Choose the correct question',
      src: quizNarration3,
    },
    {
      id: 'course-a2-03-q03.completion',
      text: 'What were you doing?',
      src: quizNarration4,
    },
    {
      id: 'course-a2-03-q04.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-03-q04.completion',
      text: 'I was waiting when it started raining',
      src: quizNarration5,
    },
    {
      id: 'course-a2-03-q05.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-03-q05.completion',
      text: 'She wasn’t driving when I called',
      src: quizNarration6,
    },
    {
      id: 'course-a2-03-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-03-q06.completion',
      text: 'We were walking when the rain started',
      src: quizNarration7,
    },
    {
      id: 'a2-03.shadowing.01',
      text: 'You’re here! Are you all right?',
      src: asset0,
    },
    {
      id: 'a2-03.shadowing.02',
      text: 'Yes, sorry I’m late. I was waiting for the bus when it started raining.',
      src: asset1,
    },
    {
      id: 'a2-03.shadowing.03',
      text: 'Oh no! Did you have an umbrella?',
      src: asset2,
    },
    {
      id: 'a2-03.shadowing.04',
      text: 'No. I went into a shop, and then I missed the bus.',
      src: asset3,
    },
    {
      id: 'a2-03.shadowing.05',
      text: 'What did you do after that?',
      src: asset4,
    },
    {
      id: 'a2-03.shadowing.06',
      text: 'I took the next bus, but it was very slow.',
      src: asset5,
    },
    {
      id: 'a2-03.shadowing.07',
      text: 'Don’t worry. We can still have lunch.',
      src: asset6,
    },
    {
      id: 'a2-03.shadowing.08',
      text: 'Thanks for waiting. Next time I’ll leave earlier!',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
