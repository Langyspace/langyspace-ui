import quiz92_course_b2_08_q05 from '../assets/quiz-audio/2a4797e6906fc9c5f916197cc15befeae7f69bb5d58bd23d976caa47398e23d1.mp3'
import quiz92_course_b2_08_q04 from '../assets/quiz-audio/8dfa15a78d90b0d50fb48e7b2035f474893b79d7f01321361ab40d4317c276ec.mp3'
import quiz92_course_b2_08_q02 from '../assets/quiz-audio/ca075fa8bfd1021438e0931e38bd87bf4d1ebaf71af7094295c95ad4acd8d5fe.mp3'
import quiz92_course_b2_08_q01 from '../assets/quiz-audio/6c706a1b15392ada38287403f6d8cf7c7ea5f984ae1e9bc8e922770af210dff2.mp3'
import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/5ec201d208b0846d211d9bc5115abd475983945dbbca61f5978a191d76873a14.mp3'
import quizNarration2 from '../assets/quiz-audio/4124ba54a4747c9fc2b41bcbecd15d3398345da73151714046f287e812190db8.mp3'
import quizNarration3 from '../assets/quiz-audio/5876ef674d975197a35ea3efad28063e77370add15288c8c6787900f29e6137d.mp3'
import quizNarration4 from '../assets/quiz-audio/0999f63961ed0afbaf1839bd1f50eff46e94178c8f3341cdb152e25d16e1f5f5.mp3'
import quizNarration5 from '../assets/quiz-audio/126a5982027de4ac82225aa89c5e0840d69367bbe0f22564da1764e121ca7edd.mp3'
import quizNarration6 from '../assets/quiz-audio/b416259d2e119c5f50e3b8c886423f2def2cf4e466053199919e52d661c622b9.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './b2-08.json'
import asset0 from '../../Course/assets/audio/B208-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B208-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B208-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B208-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B208-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B208-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B208-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B208-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B208-D81.9.mp3'
import asset9 from '../../Course/assets/audio/B208-D81.10.mp3'
import asset10 from '../../Course/assets/audio/B208-D81.11.mp3'
import asset11 from '../../Course/assets/audio/B208-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-b2-08-q01.prompt',
      text: 'Complete the sentence. The person blank lives here works from home',
      src: quiz92_course_b2_08_q01,
    },
    {
      id: 'course-b2-08-q01.completion',
      text: 'The person who lives here works from home',
      src: quizNarration1,
    },
    {
      id: 'course-b2-08-q02.prompt',
      text: 'Is this sentence correct? The flat that has a balcony is available',
      src: quiz92_course_b2_08_q02,
    },
    {
      id: 'course-b2-08-q02.completion',
      text: 'The flat that has a balcony is available',
      src: quizNarration2,
    },
    {
      id: 'course-b2-08-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b2-08-q03.completion',
      text: 'Flat C, which has a balcony, is available',
      src: quizNarration3,
    },
    {
      id: 'course-b2-08-q04.prompt',
      text: 'Complete the sentence. The flats that blank a study cost more',
      src: quiz92_course_b2_08_q04,
    },
    {
      id: 'course-b2-08-q04.completion',
      text: 'The flats that have a study cost more',
      src: quizNarration4,
    },
    {
      id: 'course-b2-08-q05.prompt',
      text: 'Is this sentence correct? The flat has a study, what makes working easier',
      src: quiz92_course_b2_08_q05,
    },
    {
      id: 'course-b2-08-q05.completion',
      text: 'The flat has a study, which makes working easier',
      src: quizNarration5,
    },
    {
      id: 'course-b2-08-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b2-08-q06.completion',
      text: 'Ana, who works from home, needs a study',
      src: quizNarration6,
    },
    {
      id: 'b2-08.shadowing.01',
      text: 'Which apartment would you recommend for this brief?',
      src: asset0,
    },
    {
      id: 'b2-08.shadowing.02',
      text: 'The person who works from home needs a usable work area, but location matters too.',
      src: asset1,
    },
    {
      id: 'b2-08.shadowing.03',
      text: 'A is near the metro. B has more space, although it’s further away.',
      src: asset2,
    },
    {
      id: 'b2-08.shadowing.04',
      text: 'And C, which has a balcony, is between them in terms of distance.',
      src: asset3,
    },
    {
      id: 'b2-08.shadowing.05',
      text: 'Is the balcony essential or just attractive?',
      src: asset4,
    },
    {
      id: 'b2-08.shadowing.06',
      text: 'Attractive. The fixed requirements are a work area and a total budget under a thousand.',
      src: asset5,
    },
    {
      id: 'b2-08.shadowing.07',
      text: 'Do all the listings include the maintenance fee?',
      src: asset6,
    },
    {
      id: 'b2-08.shadowing.08',
      text: 'A and B state a total. C’s listing doesn’t confirm the fee.',
      src: asset7,
    },
    {
      id: 'b2-08.shadowing.09',
      text: 'Then we shouldn’t compare the advertised rents as if they were the full costs.',
      src: asset8,
    },
    {
      id: 'b2-08.shadowing.10',
      text: 'Agreed. I’d arrange a viewing of A and ask C’s landlord about the missing fee.',
      src: asset9,
    },
    {
      id: 'b2-08.shadowing.11',
      text: 'Would B still be an alternative if the commute were manageable?',
      src: asset10,
    },
    {
      id: 'b2-08.shadowing.12',
      text: 'Yes. It offers more space, which could matter more than being right by the metro.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
