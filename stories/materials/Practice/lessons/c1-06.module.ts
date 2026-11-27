import quiz92_course_c1_06_q05 from '../assets/quiz-audio/c9c870dd43d0ef3f3fadbd7630d9b7daf3743ab39d94c5b8b75bdb481cd17429.mp3'
import quiz92_course_c1_06_q04 from '../assets/quiz-audio/b390473bd48bd51975412b74459b7983b00efc31fcc4e2ec32cf5dabf4014efa.mp3'
import quiz92_course_c1_06_q02 from '../assets/quiz-audio/9f57b51505e4f3996a4ba6aca58aa2ca2987baac3257e3d8cfd5d6cbabffdec1.mp3'
import quiz92_course_c1_06_q01 from '../assets/quiz-audio/ab6e4714483f88c4b91090601ee77acaa880d9df24b03c8023af4f27b32d8bc5.mp3'
import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/ad4df1c8e4711b3fda0bf2f83bbb2bd675fdd922a4032f42a2cf619e31f29486.mp3'
import quizNarration2 from '../assets/quiz-audio/05114f07ad0814932d949994b0ea0c84ca920683d065d499b0bf6ba53c85f918.mp3'
import quizNarration3 from '../assets/quiz-audio/404c17b09fd5ff3c25050f394ca611dad562f6efefc2f11983267e5d175af55e.mp3'
import quizNarration4 from '../assets/quiz-audio/2079a84f86596cbc9d6ab8116f1ef569068c101d70a78722b6a66b72b0c43e53.mp3'
import quizNarration5 from '../assets/quiz-audio/11163b3c77be4d6847ad1ac9e7056b534004c080dc290f26398da1e66596ef2b.mp3'
import quizNarration6 from '../assets/quiz-audio/93f6135f6fe64346d74eeb061fe623e0bc81277b73e5229d8c3c3b4d2f2dee07.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './c1-06.json'
import asset0 from '../../Course/assets/audio/C106-D81.1.mp3'
import asset1 from '../../Course/assets/audio/C106-D81.2.mp3'
import asset2 from '../../Course/assets/audio/C106-D81.3.mp3'
import asset3 from '../../Course/assets/audio/C106-D81.4.mp3'
import asset4 from '../../Course/assets/audio/C106-D81.5.mp3'
import asset5 from '../../Course/assets/audio/C106-D81.6.mp3'
import asset6 from '../../Course/assets/audio/C106-D81.7.mp3'
import asset7 from '../../Course/assets/audio/C106-D81.8.mp3'
import asset8 from '../../Course/assets/audio/C106-D81.9.mp3'
import asset9 from '../../Course/assets/audio/C106-D81.10.mp3'
import asset10 from '../../Course/assets/audio/C106-D81.11.mp3'
import asset11 from '../../Course/assets/audio/C106-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-c1-06-q01.prompt',
      text: 'Complete the sentence. The more I blank less certain I feel',
      src: quiz92_course_c1_06_q01,
    },
    {
      id: 'course-c1-06-q01.completion',
      text: 'The more I read, the less certain I feel',
      src: quizNarration1,
    },
    {
      id: 'course-c1-06-q02.prompt',
      text: 'Is this sentence correct? The cheaper it is, the more attractive it seems',
      src: quiz92_course_c1_06_q02,
    },
    {
      id: 'course-c1-06-q02.completion',
      text: 'The cheaper it is, the more attractive it seems',
      src: quizNarration2,
    },
    {
      id: 'course-c1-06-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-c1-06-q03.completion',
      text: 'This course is considerably more expensive',
      src: quizNarration3,
    },
    {
      id: 'course-c1-06-q04.prompt',
      text: 'Complete the sentence. The timetable is blank more flexible',
      src: quiz92_course_c1_06_q04,
    },
    {
      id: 'course-c1-06-q04.completion',
      text: 'The timetable is much more flexible',
      src: quizNarration4,
    },
    {
      id: 'course-c1-06-q05.prompt',
      text: 'Is this sentence correct? The more flexible it is, the more easier planning becomes',
      src: quiz92_course_c1_06_q05,
    },
    {
      id: 'course-c1-06-q05.completion',
      text: 'The more flexible it is, the easier planning becomes',
      src: quizNarration5,
    },
    {
      id: 'course-c1-06-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-c1-06-q06.completion',
      text: 'I’d reconsider if the session conflicted with work',
      src: quizNarration6,
    },
    {
      id: 'c1-06.shadowing.01',
      text: 'Which course seems a better fit for the person in this brief?',
      src: asset0,
    },
    {
      id: 'c1-06.shadowing.02',
      text: 'A costs less and finishes sooner, but the more I consider the timetable, the more important flexibility seems.',
      src: asset1,
    },
    {
      id: 'c1-06.shadowing.03',
      text: 'Are we treating flexibility as a preference or a fixed requirement?',
      src: asset2,
    },
    {
      id: 'c1-06.shadowing.04',
      text: 'A preference at the moment. The person can usually attend Wednesday evenings.',
      src: asset3,
    },
    {
      id: 'c1-06.shadowing.05',
      text: 'Then B’s higher price needs a reason beyond being described as flexible.',
      src: asset4,
    },
    {
      id: 'c1-06.shadowing.06',
      text: 'True. It has independent work and a Friday check-in, but we haven’t confirmed the feedback format.',
      src: asset5,
    },
    {
      id: 'c1-06.shadowing.07',
      text: 'What would make you reconsider A?',
      src: asset6,
    },
    {
      id: 'c1-06.shadowing.08',
      text: 'A timetable change, or evidence that feedback can’t address the person’s project.',
      src: asset7,
    },
    {
      id: 'c1-06.shadowing.09',
      text: 'So the lower price matters, but it isn’t the whole decision.',
      src: asset8,
    },
    {
      id: 'c1-06.shadowing.10',
      text: 'Exactly. The more directly the work applies to the project, the more useful the course becomes.',
      src: asset9,
    },
    {
      id: 'c1-06.shadowing.11',
      text: 'I’d recommend A provisionally, then verify the two uncertain details.',
      src: asset10,
    },
    {
      id: 'c1-06.shadowing.12',
      text: 'And I’d say what could reverse that recommendation, so it doesn’t sound unconditional.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
