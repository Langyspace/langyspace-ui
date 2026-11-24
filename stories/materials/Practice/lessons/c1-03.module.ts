import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/f55763e4c1f5645dfa80b9e437ddcd6cd35f6f3fd3b3bdda4f437a6b099017a0.mp3'
import quizNarration2 from '../assets/quiz-audio/329d285f24d5c13cf3a7ab35411086e7209807df354dd56b11779c8b618a56b4.mp3'
import quizNarration3 from '../assets/quiz-audio/2c35af5d04d94bb7a60795d79aef2c16551f8542f11d407237dfc6ef68ec2b98.mp3'
import quizNarration4 from '../assets/quiz-audio/a914e7dca25c54a953ffebcee3ae16517e9b285a676577e4cc1e9d8c9312c8c2.mp3'
import quizNarration5 from '../assets/quiz-audio/23b7e03671abff2b0c19a7cc559eb43a619f168b6733143f7665ff66155cc2b4.mp3'
import quizNarration6 from '../assets/quiz-audio/16b054cfd7005ae219e4d17696fbca6f51a52e6433755fa6ed45fe3a1ace3f2f.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './c1-03.json'
import asset0 from '../../Course/assets/audio/C103-D81.1.mp3'
import asset1 from '../../Course/assets/audio/C103-D81.2.mp3'
import asset2 from '../../Course/assets/audio/C103-D81.3.mp3'
import asset3 from '../../Course/assets/audio/C103-D81.4.mp3'
import asset4 from '../../Course/assets/audio/C103-D81.5.mp3'
import asset5 from '../../Course/assets/audio/C103-D81.6.mp3'
import asset6 from '../../Course/assets/audio/C103-D81.7.mp3'
import asset7 from '../../Course/assets/audio/C103-D81.8.mp3'
import asset8 from '../../Course/assets/audio/C103-D81.9.mp3'
import asset9 from '../../Course/assets/audio/C103-D81.10.mp3'
import asset10 from '../../Course/assets/audio/C103-D81.11.mp3'
import asset11 from '../../Course/assets/audio/C103-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-c1-03-q01.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-c1-03-q01.completion',
      text: 'The café is said to be closing',
      src: quizNarration1,
    },
    {
      id: 'course-c1-03-q02.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-c1-03-q02.completion',
      text: 'The café is thought to have closed',
      src: quizNarration2,
    },
    {
      id: 'course-c1-03-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-c1-03-q03.completion',
      text: 'It is reported that the dining area will close',
      src: quizNarration3,
    },
    {
      id: 'course-c1-03-q04.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-c1-03-q04.completion',
      text: 'According to the notice, the café is being renovated',
      src: quizNarration4,
    },
    {
      id: 'course-c1-03-q05.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-c1-03-q05.completion',
      text: 'The building is reported to have been sold',
      src: quizNarration5,
    },
    {
      id: 'course-c1-03-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-c1-03-q06.completion',
      text: 'The figures are thought to be incomplete',
      src: quizNarration6,
    },
    {
      id: 'c1-03.shadowing.01',
      text: 'This post says the café is closing permanently. Would you share it?',
      src: asset0,
    },
    {
      id: 'c1-03.shadowing.02',
      text: 'Not as it stands. It doesn’t identify the source of that claim.',
      src: asset1,
    },
    {
      id: 'c1-03.shadowing.03',
      text: 'The café is said to be closing, then? That sounds more cautious.',
      src: asset2,
    },
    {
      id: 'c1-03.shadowing.04',
      text: 'Grammatically, yes, but it still passes on the claim without telling us who said it.',
      src: asset3,
    },
    {
      id: 'c1-03.shadowing.05',
      text: 'The official notice says the dining area will close for renovation while delivery continues.',
      src: asset4,
    },
    {
      id: 'c1-03.shadowing.06',
      text: 'That confirms a temporary change in service, not the permanent end of the business.',
      src: asset5,
    },
    {
      id: 'c1-03.shadowing.07',
      text: 'Does it give a reopening date?',
      src: asset6,
    },
    {
      id: 'c1-03.shadowing.08',
      text: 'Not in this excerpt. We should check rather than turn an expectation into a date.',
      src: asset7,
    },
    {
      id: 'c1-03.shadowing.09',
      text: 'So I could say, according to the café’s notice, the dining area is closing for renovation.',
      src: asset8,
    },
    {
      id: 'c1-03.shadowing.10',
      text: 'Yes, and keep the delivery detail because it changes what readers need to do.',
      src: asset9,
    },
    {
      id: 'c1-03.shadowing.11',
      text: 'I’d also correct the permanent-closure claim if I’d already shared it.',
      src: asset10,
    },
    {
      id: 'c1-03.shadowing.12',
      text: 'Exactly. Cautious wording doesn’t remove the responsibility to check and correct.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
