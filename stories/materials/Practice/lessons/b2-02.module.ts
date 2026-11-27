import quiz92_course_b2_02_q05 from '../assets/quiz-audio/c09622146c739998f435e9367587b02cffacba02085399d4166631297a537a50.mp3'
import quiz92_course_b2_02_q04 from '../assets/quiz-audio/0c7aef2fa67d35695d212c9719a7ad293a71f9d69714cc76e4210420157ead9b.mp3'
import quiz92_course_b2_02_q02 from '../assets/quiz-audio/fdf9fec5e5a7a3485899906738fd5cd058aa5717fa21a4d15ccf8b5c60dc868f.mp3'
import quiz92_course_b2_02_q01 from '../assets/quiz-audio/4b695029347305ccd59b805b69f6c5e9ccb77aafed93fa72ccc120072bdabb8c.mp3'
import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/16f5479e815f669ac33224f38c027dd25c21303687da1d3421fad6077ac9735c.mp3'
import quizNarration2 from '../assets/quiz-audio/2774b93069c3c2a669e718efe513dfb23775e25092af938b9543ad6b96d6cf3b.mp3'
import quizNarration3 from '../assets/quiz-audio/896315bef32e5e5ea78fcf9bd8f0729cc3d65d9e3321622c4a53e90883458eba.mp3'
import quizNarration5 from '../assets/quiz-audio/5928f01c6836a6deb901dc16cf8e4890acef05bf361a321a5bff0ac39c041f8c.mp3'
import quizNarration6 from '../assets/quiz-audio/5c030ff71ec0d3e1531a95acb9020756a868da4667cc13ba319c2434708738bc.mp3'
import quizNarration7 from '../assets/quiz-audio/aaec274c2c848fcabbf62f339504e152acde17fbde68a89e9a91f6f16b4df616.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './b2-02.json'
import asset0 from '../../Course/assets/audio/B202-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B202-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B202-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B202-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B202-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B202-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B202-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B202-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B202-D81.9.mp3'
import asset9 from '../../Course/assets/audio/B202-D81.10.mp3'
import asset10 from '../../Course/assets/audio/B202-D81.11.mp3'
import asset11 from '../../Course/assets/audio/B202-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-b2-02-q01.prompt',
      text: 'Complete the sentence. I’ll have blank by Friday',
      src: quiz92_course_b2_02_q01,
    },
    {
      id: 'course-b2-02-q01.completion',
      text: 'I’ll have finished by Friday',
      src: quizNarration1,
    },
    {
      id: 'course-b2-02-q02.prompt',
      text: 'Is this sentence correct? At ten, I’ll be hand over the packs',
      src: quiz92_course_b2_02_q02,
    },
    {
      id: 'course-b2-02-q02.completion',
      text: 'At ten, I’ll be handing over the packs',
      src: quizNarration2,
    },
    {
      id: 'course-b2-02-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b2-02-q03.completion',
      text: 'We won’t have completed it by noon',
      src: quizNarration3,
    },
    {
      id: 'course-b2-02-q04.prompt',
      text: 'Complete the sentence. Will blank checked everything by then?',
      src: quiz92_course_b2_02_q04,
    },
    {
      id: 'course-b2-02-q04.completion',
      text: 'Will you have checked everything by then?',
      src: quizNarration5,
    },
    {
      id: 'course-b2-02-q05.prompt',
      text: 'Is this sentence correct? We’ll finish provided the brief stays the same',
      src: quiz92_course_b2_02_q05,
    },
    {
      id: 'course-b2-02-q05.completion',
      text: 'We’ll finish provided the brief stays the same',
      src: quizNarration6,
    },
    {
      id: 'course-b2-02-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b2-02-q06.completion',
      text: 'We’ll be ready as long as the client approves it',
      src: quizNarration7,
    },
    {
      id: 'b2-02.shadowing.01',
      text: 'Can we promise the event pack will be ready by Friday morning?',
      src: asset0,
    },
    {
      id: 'b2-02.shadowing.02',
      text: 'The draft will be ready on Tuesday, but we need the review before making that promise.',
      src: asset1,
    },
    {
      id: 'b2-02.shadowing.03',
      text: 'The review is booked for Wednesday. How long will the final changes take?',
      src: asset2,
    },
    {
      id: 'b2-02.shadowing.04',
      text: 'About one working day after the comments arrive, provided the brief doesn’t change.',
      src: asset3,
    },
    {
      id: 'b2-02.shadowing.05',
      text: 'So by Thursday evening you’ll have finished the main version?',
      src: asset4,
    },
    {
      id: 'b2-02.shadowing.06',
      text: 'That’s the plan. On Friday morning I’ll be checking the printed copies.',
      src: asset5,
    },
    {
      id: 'b2-02.shadowing.07',
      text: 'What will you be doing when the volunteers arrive at ten?',
      src: asset6,
    },
    {
      id: 'b2-02.shadowing.08',
      text: 'I’ll be handing over the packs. Someone else needs to welcome the guests.',
      src: asset7,
    },
    {
      id: 'b2-02.shadowing.09',
      text: 'I can do that. What would put the handover at risk?',
      src: asset8,
    },
    {
      id: 'b2-02.shadowing.10',
      text: 'A late review or a new section. We should flag either as soon as it happens.',
      src: asset9,
    },
    {
      id: 'b2-02.shadowing.11',
      text: 'Agreed. Let’s confirm the review, then communicate the deadline with that condition.',
      src: asset10,
    },
    {
      id: 'b2-02.shadowing.12',
      text: 'And keep a short progress update, so nobody assumes a draft is the final version.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
