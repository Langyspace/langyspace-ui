import quiz92_course_b2_04_q05 from '../assets/quiz-audio/0c3173cbe4a07efbc75c3f7e8c5fef91317f2ad435169b1b57f7497092aa667a.mp3'
import quiz92_course_b2_04_q04 from '../assets/quiz-audio/009644f5054e0ee5f028a7d46facd5068b24ba815ccf933f71505b6325370e7c.mp3'
import quiz92_course_b2_04_q02 from '../assets/quiz-audio/3f1a5a1c062460135fe91cf06d33b247d62ca04bba83718d01a070ccb4f1f16b.mp3'
import quiz92_course_b2_04_q01 from '../assets/quiz-audio/ce7b5699072623bea84bd4e19c8af7f989fb33c0016d2866ce5d944f8d886973.mp3'
import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/72aff75c0192b2377c212c674d4f86e7497a755452f650aaa5fbed7d923bd7b8.mp3'
import quizNarration2 from '../assets/quiz-audio/75149d627d955328bf34d2c8b1fc9b36bbbc784355a76e1bdbf5de05f5f81ed7.mp3'
import quizNarration3 from '../assets/quiz-audio/e0ff11d0077f6f7503b88136db69fb3d3e509e67a90f66edbd93abca4165df6f.mp3'
import quizNarration4 from '../assets/quiz-audio/f8cf51f70522c11ff75c327317e6cfe8ea4b42580a21985dd67cde952d590d63.mp3'
import quizNarration6 from '../assets/quiz-audio/5d9234c9695edeb31f535744d63edf3060e0ce2072261edd07429f7a41aa0a73.mp3'
import quizNarration7 from '../assets/quiz-audio/d686f7c5bcb56b6a18599d97a6e6762695ed3ddd80478c72637f0071b8d76a0d.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './b2-04.json'
import asset0 from '../../Course/assets/audio/B204-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B204-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B204-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B204-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B204-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B204-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B204-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B204-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B204-D81.9.mp3'
import asset9 from '../../Course/assets/audio/B204-D81.10.mp3'
import asset10 from '../../Course/assets/audio/B204-D81.11.mp3'
import asset11 from '../../Course/assets/audio/B204-D81.12.mp3'
import asset12 from '../assets/characters/kim.webp'
import asset13 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-b2-04-q01.prompt',
      text: 'Complete the sentence. Someone must have blank it',
      src: quiz92_course_b2_04_q01,
    },
    {
      id: 'course-b2-04-q01.completion',
      text: 'Someone must have moved it',
      src: quizNarration1,
    },
    {
      id: 'course-b2-04-q02.prompt',
      text: 'Is this sentence correct? The receipt might have been left earlier',
      src: quiz92_course_b2_04_q02,
    },
    {
      id: 'course-b2-04-q02.completion',
      text: 'The receipt might have been left earlier',
      src: quizNarration2,
    },
    {
      id: 'course-b2-04-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b2-04-q03.completion',
      text: 'She can’t have used that key',
      src: quizNarration3,
    },
    {
      id: 'course-b2-04-q04.prompt',
      text: 'Complete the sentence. They might have blank the spare key',
      src: quiz92_course_b2_04_q04,
    },
    {
      id: 'course-b2-04-q04.completion',
      text: 'They might have taken the spare key',
      src: quizNarration4,
    },
    {
      id: 'course-b2-04-q05.prompt',
      text: 'Is this sentence correct? Could someone had opened the window?',
      src: quiz92_course_b2_04_q05,
    },
    {
      id: 'course-b2-04-q05.completion',
      text: 'Could someone have opened the window?',
      src: quizNarration6,
    },
    {
      id: 'course-b2-04-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b2-04-q06.completion',
      text: 'The door must have been open',
      src: quizNarration7,
    },
    {
      id: 'b2-04.shadowing.01',
      text: 'Someone must have been here. The plant has been moved.',
      src: asset0,
    },
    {
      id: 'b2-04.shadowing.02',
      text: 'Maybe, but let’s check the record before deciding who it was.',
      src: asset1,
    },
    {
      id: 'b2-04.shadowing.03',
      text: 'A spare key was used at five. There’s also a receipt from five twenty.',
      src: asset2,
    },
    {
      id: 'b2-04.shadowing.04',
      text: 'That suggests a visit, but the receipt might have been left by someone else earlier.',
      src: asset3,
    },
    {
      id: 'b2-04.shadowing.05',
      text: 'Could someone have come through the window?',
      src: asset4,
    },
    {
      id: 'b2-04.shadowing.06',
      text: 'It’s closed now. That doesn’t prove it was closed the whole afternoon.',
      src: asset5,
    },
    {
      id: 'b2-04.shadowing.07',
      text: 'Good point. We shouldn’t treat a current state as a complete history.',
      src: asset6,
    },
    {
      id: 'b2-04.shadowing.08',
      text: 'Who had permission to use the key?',
      src: asset7,
    },
    {
      id: 'b2-04.shadowing.09',
      text: 'The neighbour was going to water the plants, but I don’t know whether she came.',
      src: asset8,
    },
    {
      id: 'b2-04.shadowing.10',
      text: 'Then I’d ask her first. The camera record could be another check if needed.',
      src: asset9,
    },
    {
      id: 'b2-04.shadowing.11',
      text: 'So our strongest explanation is a permitted visit, not a confirmed identity yet.',
      src: asset10,
    },
    {
      id: 'b2-04.shadowing.12',
      text: 'Exactly. We can update that conclusion when we have more than a clue.',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset12,
    '/flashcards/course-characters/ana/image.webp': asset13,
  },
}
export default prepared
