import quiz92_course_b1_03_q05 from '../assets/quiz-audio/7ca6d046c3ef1327787e83372f29e77994fdc51f4a6b51330aaa359ceeaaf5b3.mp3'
import quiz92_course_b1_03_q04 from '../assets/quiz-audio/3e14033579bb6ae20a97c31fafc77ce0d594e3dde080657b889832e559255232.mp3'
import quiz92_course_b1_03_q02 from '../assets/quiz-audio/27c6e9b3f65fb54105a076c3626f6318aef1a8646c59522396832996dc95be0e.mp3'
import quiz92_course_b1_03_q01 from '../assets/quiz-audio/6bb0d93bbea9dd4229ec33f53908897e7dd756406d43325618c4925e71150a03.mp3'
import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/08c4cfbaa72e0467bde2ae566920145e364597c6ab2ad01c24d993fd1aff88eb.mp3'
import quizNarration2 from '../assets/quiz-audio/891661ac59c3c105bdd8b005aac38014cc15c75746c500943be7f6972083e358.mp3'
import quizNarration3 from '../assets/quiz-audio/4719dd7d96d984d6989385fa1e2b542ed34f4181635cf52694155946b66bb61d.mp3'
import quizNarration5 from '../assets/quiz-audio/3cd08f7f3cc79c593139a4dab6d5b48ccdd138bf2ac274ca3fc4cc42cc666523.mp3'
import quizNarration6 from '../assets/quiz-audio/2303745d2dc8fba8ea6101b3c85994c60cba110ada80d8c087ae4e1865cc92f9.mp3'
import quizNarration7 from '../assets/quiz-audio/45d2d4cd15d285611b265f1df493b03eafa6709d68ab2b234b4f40f87ce5f24f.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './b1-03.json'
import asset0 from '../../Course/assets/audio/B103-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B103-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B103-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B103-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B103-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B103-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B103-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B103-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-b1-03-q01.prompt',
      text: 'Complete the sentence. The show had blank',
      src: quiz92_course_b1_03_q01,
    },
    {
      id: 'course-b1-03-q01.completion',
      text: 'The show had started',
      src: quizNarration1,
    },
    {
      id: 'course-b1-03-q02.prompt',
      text: 'Is this sentence correct? She had forgotten her wristband',
      src: quiz92_course_b1_03_q02,
    },
    {
      id: 'course-b1-03-q02.completion',
      text: 'She had forgotten her wristband',
      src: quizNarration2,
    },
    {
      id: 'course-b1-03-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-03-q03.completion',
      text: 'They hadn’t checked the time',
      src: quizNarration3,
    },
    {
      id: 'course-b1-03-q04.prompt',
      text: 'Complete the sentence. blank left before you arrived?',
      src: quiz92_course_b1_03_q04,
    },
    {
      id: 'course-b1-03-q04.completion',
      text: 'Had they left before you arrived?',
      src: quizNarration5,
    },
    {
      id: 'course-b1-03-q05.prompt',
      text: 'Is this sentence correct? By the time we arrived, the show has begun',
      src: quiz92_course_b1_03_q05,
    },
    {
      id: 'course-b1-03-q05.completion',
      text: 'By the time we arrived, the show had begun',
      src: quizNarration6,
    },
    {
      id: 'course-b1-03-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b1-03-q06.completion',
      text: 'I had written down the wrong date',
      src: quizNarration7,
    },
    {
      id: 'b1-03.shadowing.01',
      text: 'Did you enjoy the show, or was the whole evening difficult?',
      src: asset0,
    },
    {
      id: 'b1-03.shadowing.02',
      text: 'The show was great, but it had already started when we arrived.',
      src: asset1,
    },
    {
      id: 'b1-03.shadowing.03',
      text: 'What time did you get there?',
      src: asset2,
    },
    {
      id: 'b1-03.shadowing.04',
      text: 'At eight twenty. We’d left late, and I’d forgotten my wristband at home.',
      src: asset3,
    },
    {
      id: 'b1-03.shadowing.05',
      text: 'Oh no. Couldn’t you just show your ticket?',
      src: asset4,
    },
    {
      id: 'b1-03.shadowing.06',
      text: 'The person at the entrance sent us to the help desk. We missed the opening act.',
      src: asset5,
    },
    {
      id: 'b1-03.shadowing.07',
      text: 'At least you got in eventually. What would you check next time?',
      src: asset6,
    },
    {
      id: 'b1-03.shadowing.08',
      text: 'I’d check the ticket and wristband before leaving, and allow more time.',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
