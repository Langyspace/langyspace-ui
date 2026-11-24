import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/8565916b4aec93b9f5a71d94576c1ea47f8bed4c1b64fb838f0f89cf3dbcf559.mp3'
import quizNarration2 from '../assets/quiz-audio/ad8d8260abeed7a297e715ee5053150caa8be25a3128419d8630183a70b0db19.mp3'
import quizNarration3 from '../assets/quiz-audio/25f0fb95ffbec03305fbf107305bc2b985ba4f0c42cb65fe302d15a7101581a6.mp3'
import quizNarration4 from '../assets/quiz-audio/c783c9afc3430d2904ae14272847f12c25b8f8f9f309afed4b0560c909f3c15e.mp3'
import quizNarration5 from '../assets/quiz-audio/65e216a20e7d4087cfe0f2f449b42cdd3f1111c1c82ee2070d812654b6cd2b26.mp3'
import quizNarration6 from '../assets/quiz-audio/3ad6e4fde31012a458863c04b700cec9210c930eb294d1da584a7b07b58953fe.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './c1-09.json'
import asset0 from '../../Course/assets/audio/C109-D81.1.mp3'
import asset1 from '../../Course/assets/audio/C109-D81.2.mp3'
import asset2 from '../../Course/assets/audio/C109-D81.3.mp3'
import asset3 from '../../Course/assets/audio/C109-D81.4.mp3'
import asset4 from '../../Course/assets/audio/C109-D81.5.mp3'
import asset5 from '../../Course/assets/audio/C109-D81.6.mp3'
import asset6 from '../../Course/assets/audio/C109-D81.7.mp3'
import asset7 from '../../Course/assets/audio/C109-D81.8.mp3'
import asset8 from '../../Course/assets/audio/C109-D81.9.mp3'
import asset9 from '../../Course/assets/audio/C109-D81.10.mp3'
import asset10 from '../../Course/assets/audio/C109-D81.11.mp3'
import asset11 from '../../Course/assets/audio/C109-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-c1-09-q01.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-c1-09-q01.completion',
      text: 'Demand is bound to rise',
      src: quizNarration1,
    },
    {
      id: 'course-c1-09-q02.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-c1-09-q02.completion',
      text: 'Demand is likely to increase',
      src: quizNarration2,
    },
    {
      id: 'course-c1-09-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-c1-09-q03.completion',
      text: 'These figures are unlikely to improve',
      src: quizNarration3,
    },
    {
      id: 'course-c1-09-q04.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-c1-09-q04.completion',
      text: 'The service is set to start next month',
      src: quizNarration4,
    },
    {
      id: 'course-c1-09-q05.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-c1-09-q05.completion',
      text: 'We were going to recommend no action',
      src: quizNarration5,
    },
    {
      id: 'course-c1-09-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-c1-09-q06.completion',
      text: 'It is likely that demand will rise',
      src: quizNarration6,
    },
    {
      id: 'c1-09.shadowing.01',
      text: 'Demand has risen for three months. It’s bound to get worse, isn’t it?',
      src: asset0,
    },
    {
      id: 'c1-09.shadowing.02',
      text: 'The figures suggest growth, but “bound to” is stronger than these three observations justify.',
      src: asset1,
    },
    {
      id: 'c1-09.shadowing.03',
      text: 'What would be a more defensible claim?',
      src: asset2,
    },
    {
      id: 'c1-09.shadowing.04',
      text: 'Demand is likely to rise if the same conditions continue. We should state that condition.',
      src: asset3,
    },
    {
      id: 'c1-09.shadowing.05',
      text: 'The proposal says extra transport is set to start next month.',
      src: asset4,
    },
    {
      id: 'c1-09.shadowing.06',
      text: 'Is that a confirmed service plan, or just an assumption in the projection?',
      src: asset5,
    },
    {
      id: 'c1-09.shadowing.07',
      text: 'The plan is confirmed, but the capacity estimate assumes it covers the period of highest demand.',
      src: asset6,
    },
    {
      id: 'c1-09.shadowing.08',
      text: 'Then timing matters as much as the headline number.',
      src: asset7,
    },
    {
      id: 'c1-09.shadowing.09',
      text: 'We were going to recommend no further action because the extra service looked sufficient.',
      src: asset8,
    },
    {
      id: 'c1-09.shadowing.10',
      text: 'I’d qualify that until we check the coverage. More total capacity may still leave a local gap.',
      src: asset9,
    },
    {
      id: 'c1-09.shadowing.11',
      text: 'Would monitoring the next month be too passive?',
      src: asset10,
    },
    {
      id: 'c1-09.shadowing.12',
      text: 'Not if we also check the affected time slot and define when we’ll change the plan.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
