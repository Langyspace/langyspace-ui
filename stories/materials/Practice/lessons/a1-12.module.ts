import quiz92_course_a1_12_q05 from '../assets/quiz-audio/b9b4321eca43e18c23af7260b45337a888b8095b26aece1da29eace7b36b501e.mp3'
import quiz92_course_a1_12_q04 from '../assets/quiz-audio/0b90fa42a3eafee592e6a72e4537acce68c3f969603d966357499601bdfae535.mp3'
import quiz92_course_a1_12_q02 from '../assets/quiz-audio/405b5e773797f65a7bacd5688676c0ab8e0cbb98a464f5e56d08942f55513b7f.mp3'
import quiz92_course_a1_12_q01 from '../assets/quiz-audio/1bc71afbff931afd9e226e0044f403b4753cfad33133ce190a064b05262d803a.mp3'
import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/56e3ff7b43f8a009a25b30c6487a08ae2e2c53c648d092c6df2df25cd7bdef11.mp3'
import quizNarration2 from '../assets/quiz-audio/dc5c826b6f66053f90b14fd899065933ac32448403cb0ddc168afe918eb5c266.mp3'
import quizNarration3 from '../assets/quiz-audio/9257f2006378889b2459385426e1df2bbdaf3ccb1b854ae45920ca7a271a073f.mp3'
import quizNarration4 from '../assets/quiz-audio/cbab8946cf371c485a34d68d7cad9f4e9db13a16bec74f4d28f81537e96fed5c.mp3'
import quizNarration5 from '../assets/quiz-audio/a0c0460b798dc2bcad099fe98f07d398244b841c064586b7d1ebb06b985a05e1.mp3'
import quizNarration6 from '../assets/quiz-audio/b931249b7b19e3ac59be35e34d18f3e855e2c0ceab2a7a45c0da308bc3c04196.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './a1-12.json'
import asset0 from '../assets/audio/1352c9a8f91a3cbc07f350677255cac974883f58d20ac775d9bcb41c0dd09a9a.mp3'
import asset1 from '../assets/audio/a8d8a82269ba4019c85fd7272134bfa8fed001862c90e8f8eb70a626433379d9.mp3'
import asset2 from '../assets/audio/31ee0c79178c6245487c7c23e3c8e22e0cc384a193b25d9a1618e5945ddd8846.mp3'
import asset3 from '../assets/audio/a7f6c2c307727afb6a300ce8dcabeb4d09a8114fcd5120096a7b423214f18078.mp3'
import asset4 from '../assets/audio/fdb34a35ef2bc1885e90858fe976c62caf0ecba8fcbdc12c5cf34f27c94afae8.mp3'
import asset5 from '../assets/audio/4fff1e09bcc8e9a2bd79b6fef9c0f57de80607a9b48f9766519dad6ea4a360d4.mp3'
import asset6 from '../assets/characters/niamh-murphy.webp'
import asset7 from '../assets/characters/cian-walsh.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-a1-12-q01.prompt',
      text: 'Complete the sentence. Let’s blank to the park',
      src: quiz92_course_a1_12_q01,
    },
    {
      id: 'course-a1-12-q01.completion',
      text: 'Let’s go to the park',
      src: quizNarration1,
    },
    {
      id: 'course-a1-12-q02.prompt',
      text: 'Is this sentence correct? It’s sunny today',
      src: quiz92_course_a1_12_q02,
    },
    {
      id: 'course-a1-12-q02.completion',
      text: 'It’s sunny today',
      src: quizNarration2,
    },
    {
      id: 'course-a1-12-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a1-12-q03.completion',
      text: 'Let’s meet at ten',
      src: quizNarration3,
    },
    {
      id: 'course-a1-12-q04.prompt',
      text: 'Complete the sentence. Let’s meet blank nine',
      src: quiz92_course_a1_12_q04,
    },
    {
      id: 'course-a1-12-q04.completion',
      text: 'Let’s meet at nine',
      src: quizNarration4,
    },
    {
      id: 'course-a1-12-q05.prompt',
      text: 'Is this sentence correct? Let’s meet to the station',
      src: quiz92_course_a1_12_q05,
    },
    {
      id: 'course-a1-12-q05.completion',
      text: 'Let’s meet at the station',
      src: quizNarration5,
    },
    {
      id: 'course-a1-12-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a1-12-q06.completion',
      text: 'It’s rainy today',
      src: quizNarration6,
    },
    {
      id: 'a1-12.shadowing.01',
      text: 'It’s sunny today. Let’s go to the park',
      src: asset0,
    },
    {
      id: 'a1-12.shadowing.02',
      text: 'Good idea. Can we take the train?',
      src: asset1,
    },
    {
      id: 'a1-12.shadowing.03',
      text: 'Yes. Two tickets are six euros',
      src: asset2,
    },
    {
      id: 'a1-12.shadowing.04',
      text: 'Great. Do you have water?',
      src: asset3,
    },
    {
      id: 'a1-12.shadowing.05',
      text: 'Yes. I have water and two sandwiches',
      src: asset4,
    },
    { id: 'a1-12.shadowing.06', text: 'Perfect. Let’s go', src: asset5 },
  ],
  images: {
    '/flashcards/course-characters/niamh-murphy/image.webp': asset6,
    '/flashcards/course-characters/cian-walsh/image.webp': asset7,
  },
}
export default prepared
