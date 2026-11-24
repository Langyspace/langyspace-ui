import quizNarration0 from '../assets/quiz-audio/2aa0e2b73dca4c6bca62131e7263dfdb4b8565f268b01ad00e2e0e20037efe5a.mp3'
import quizNarration1 from '../assets/quiz-audio/d33d9b8c06d8412f08d22b19583c6e28c850eb5826b0e133db847cf8e5642911.mp3'
import quizNarration2 from '../assets/quiz-audio/b4017fe6f8f240a531771c2714a5c9d7ffe7603bd00381ffb8935c7ad4aa0d66.mp3'
import quizNarration3 from '../assets/quiz-audio/3a5a4a915be53173653e5915ee83e28dd9677844f06e47c3a636a2c6f8a5cc5f.mp3'
import quizNarration4 from '../assets/quiz-audio/bfca3a428210d04b931b5931f75d3994d434c07a26d0a982342d440961b2d77d.mp3'
import quizNarration5 from '../assets/quiz-audio/79162bd1d19b5c73a57558a9a4f2a5c8d636daf5ad241e65a3346148d4c03ebd.mp3'
import quizNarration6 from '../assets/quiz-audio/fbc9991eccc0b7d6d60ff1ac6297ddb20ff000b168036bc3cfe99c7a08c77f74.mp3'
import quizNarration7 from '../assets/quiz-audio/2b557d2a8ffa0e8bf8af15c31eeb9e703eec603fb0d9b2d24039b9d4a6600add.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './b1-10.json'
import asset0 from '../../Course/assets/audio/B110-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B110-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B110-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B110-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B110-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B110-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B110-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B110-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-b1-10-q01.prompt',
      text: 'Choose the correct question',
      src: quizNarration0,
    },
    {
      id: 'course-b1-10-q01.completion',
      text: 'Could you tell me where the exit is?',
      src: quizNarration1,
    },
    {
      id: 'course-b1-10-q02.prompt',
      text: 'Choose the correct question',
      src: quizNarration0,
    },
    {
      id: 'course-b1-10-q02.completion',
      text: 'Do you know if the tour is included?',
      src: quizNarration2,
    },
    {
      id: 'course-b1-10-q03.prompt',
      text: 'Choose the correct question',
      src: quizNarration0,
    },
    {
      id: 'course-b1-10-q03.completion',
      text: 'Do you know when the museum closes?',
      src: quizNarration3,
    },
    {
      id: 'course-b1-10-q04.prompt',
      text: 'Choose the correct direct question',
      src: quizNarration4,
    },
    {
      id: 'course-b1-10-q04.completion',
      text: 'Where is the cloakroom?',
      src: quizNarration5,
    },
    {
      id: 'course-b1-10-q05.prompt',
      text: 'Choose the correct question',
      src: quizNarration0,
    },
    {
      id: 'course-b1-10-q05.completion',
      text: 'Could you tell me where I can leave my bag?',
      src: quizNarration6,
    },
    {
      id: 'course-b1-10-q06.prompt',
      text: 'Choose the correct question',
      src: quizNarration0,
    },
    {
      id: 'course-b1-10-q06.completion',
      text: 'Do you know if tickets are available?',
      src: quizNarration7,
    },
    {
      id: 'b1-10.shadowing.01',
      text: 'Could you tell me where the guided tour starts?',
      src: asset0,
    },
    {
      id: 'b1-10.shadowing.02',
      text: 'At the reception desk at ten. The talk is later, at eleven thirty.',
      src: asset1,
    },
    {
      id: 'b1-10.shadowing.03',
      text: 'Do you know if the tour is included in the entrance fee?',
      src: asset2,
    },
    {
      id: 'b1-10.shadowing.04',
      text: 'The standard tour is included. The special workshop costs extra.',
      src: asset3,
    },
    {
      id: 'b1-10.shadowing.05',
      text: 'Thanks. Could you tell me where I can leave my bag?',
      src: asset4,
    },
    {
      id: 'b1-10.shadowing.06',
      text: 'There’s a cloakroom on the ground floor, beside the information point.',
      src: asset5,
    },
    {
      id: 'b1-10.shadowing.07',
      text: 'And is the talk still in room two?',
      src: asset6,
    },
    {
      id: 'b1-10.shadowing.08',
      text: 'That’s what the timetable says. Please check the board before you go.',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
