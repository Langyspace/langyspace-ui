import quiz92_course_b2_10_q05 from '../assets/quiz-audio/6102e3cbe3e2e5aec4e703871d20280ee0c1abb43e8f1c1f491a566cc64fefaf.mp3'
import quiz92_course_b2_10_q04 from '../assets/quiz-audio/8aba022265a22550f76f6d228c0775db7041d7e21098a1d26b8d649bf1ad2569.mp3'
import quiz92_course_b2_10_q02 from '../assets/quiz-audio/79ee0bfe0b64a375ae0addd2893636b2ebdb543db1ff857304bd14b91922329b.mp3'
import quiz92_course_b2_10_q01 from '../assets/quiz-audio/101583ec9fee34f0425729d144849bf7bb8f025c902b31b5b8a36f575a13dc69.mp3'
import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/a6d97d826a6de98211a130aa5614e689baa5f5c4c6c1b945dbc145e38a8b2bbc.mp3'
import quizNarration2 from '../assets/quiz-audio/da4fd3a32371ab74e600ece00331ee2049ef005ffa24fe6ec553124301043b26.mp3'
import quizNarration3 from '../assets/quiz-audio/1737bef5f44222d6afcf29fba89ff6ad90e26e2c83682f4479d11100cc9d1258.mp3'
import quizNarration4 from '../assets/quiz-audio/6def1d9743fb5f40e9cf25ad16acc1e7603a5519f45d3312aee83dc3d8581488.mp3'
import quizNarration5 from '../assets/quiz-audio/a3ec49c4d17f9ba78662c81a77d477d31411a8628e212829a39975480b9f0b7f.mp3'
import quizNarration6 from '../assets/quiz-audio/0b7683c1e5584154c49366ce76875b0d8c0c629cc4a7cafda197365cfb714ac1.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './b2-10.json'
import asset0 from '../../Course/assets/audio/B210-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B210-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B210-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B210-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B210-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B210-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B210-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B210-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B210-D81.9.mp3'
import asset9 from '../../Course/assets/audio/B210-D81.10.mp3'
import asset10 from '../../Course/assets/audio/B210-D81.11.mp3'
import asset11 from '../../Course/assets/audio/B210-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-b2-10-q01.prompt',
      text: 'Complete the sentence. blank I need is a quiet room',
      src: quiz92_course_b2_10_q01,
    },
    {
      id: 'course-b2-10-q01.completion',
      text: 'What I need is a quiet room',
      src: quizNarration1,
    },
    {
      id: 'course-b2-10-q02.prompt',
      text: 'Is this sentence correct? It was the lift what woke me',
      src: quiz92_course_b2_10_q02,
    },
    {
      id: 'course-b2-10-q02.completion',
      text: 'It was the lift that woke me',
      src: quizNarration2,
    },
    {
      id: 'course-b2-10-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b2-10-q03.completion',
      text: 'I did ask for a change',
      src: quizNarration3,
    },
    {
      id: 'course-b2-10-q04.prompt',
      text: 'Complete the sentence. What disturbed me blank the noise',
      src: quiz92_course_b2_10_q04,
    },
    {
      id: 'course-b2-10-q04.completion',
      text: 'What disturbed me was the noise',
      src: quizNarration4,
    },
    {
      id: 'course-b2-10-q05.prompt',
      text: 'Is this sentence correct? She did explain the problem at reception',
      src: quiz92_course_b2_10_q05,
    },
    {
      id: 'course-b2-10-q05.completion',
      text: 'She did explain the problem at reception',
      src: quizNarration5,
    },
    {
      id: 'course-b2-10-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b2-10-q06.completion',
      text: 'It was the noise that kept me awake',
      src: quizNarration6,
    },
    {
      id: 'b2-10.shadowing.01',
      text: 'I’m sorry, but the room next to the lift is too noisy for me to sleep.',
      src: asset0,
    },
    {
      id: 'b2-10.shadowing.02',
      text: 'I’m sorry for the disturbance. We can offer earplugs.',
      src: asset1,
    },
    {
      id: 'b2-10.shadowing.03',
      text: 'Thank you, but what I need is a quiet room. I have an early presentation.',
      src: asset2,
    },
    {
      id: 'b2-10.shadowing.04',
      text: 'I understand. Is the problem mainly the lift or the street outside?',
      src: asset3,
    },
    {
      id: 'b2-10.shadowing.05',
      text: 'It was the lift that woke me repeatedly. The street isn’t the main issue.',
      src: asset4,
    },
    {
      id: 'b2-10.shadowing.06',
      text: 'That helps us find a suitable alternative. Have you already asked for a change?',
      src: asset5,
    },
    {
      id: 'b2-10.shadowing.07',
      text: 'I did ask this afternoon, but I haven’t had a confirmed option yet.',
      src: asset6,
    },
    {
      id: 'b2-10.shadowing.08',
      text: 'I can check another room, though it may not be available immediately.',
      src: asset7,
    },
    {
      id: 'b2-10.shadowing.09',
      text: 'Could you tell me when it would be ready and whether it’s away from the lift?',
      src: asset8,
    },
    {
      id: 'b2-10.shadowing.10',
      text: 'Yes. I’ll confirm those details before asking you to move.',
      src: asset9,
    },
    {
      id: 'b2-10.shadowing.11',
      text: 'I appreciate that. A different room only helps if it solves the noise problem.',
      src: asset10,
    },
    {
      id: 'b2-10.shadowing.12',
      text: 'Agreed. I’ll come back with a specific offer rather than another general apology.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
