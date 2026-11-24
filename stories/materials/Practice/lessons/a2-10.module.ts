import quiz92_course_a2_10_q05 from '../assets/quiz-audio/00e9c70412b4e67933d409a8183c15e792e62105cb07abdb15d4f8528839570f.mp3'
import quiz92_course_a2_10_q04 from '../assets/quiz-audio/fb5c0a945969bb18cc765a5b0e9fe65a229d214ecf1942f394178771ebff2ee6.mp3'
import quiz92_course_a2_10_q02 from '../assets/quiz-audio/6a3e7f04d09035151f1c7502c780c1fc42950cb46c30ed24065a2abd0aa15810.mp3'
import quiz92_course_a2_10_q01 from '../assets/quiz-audio/3442d8ad59a7e396557c848133f53c38e2db1f9e99043139fe1a95e3615f1b92.mp3'
import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/834c226572f0a12eb7518243ab2bda176f3143128fc3f85cf2a9ca7dc05695b0.mp3'
import quizNarration2 from '../assets/quiz-audio/8753b8644ce1ba263447fd0bfddec427e9965a6201c84b44a80c2b1392e21ebd.mp3'
import quizNarration3 from '../assets/quiz-audio/4fed516ad12617dee90ce1d45a3f44167306614d559da7ce77937f1d68fbbfbf.mp3'
import quizNarration4 from '../assets/quiz-audio/c05747853685f53cfd88a5f45852be6cdf679ff5e818be55108378f8da8f2a9f.mp3'
import quizNarration5 from '../assets/quiz-audio/d868a93dcd3cce5122f9ea08edf3065c75206fe2ffa2b6ccd26295993cc41b49.mp3'
import quizNarration6 from '../assets/quiz-audio/469eee3e3c82d55a3b4e91b517f15d66e243bce122c947408b0b4f9e233c2ea7.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './a2-10.json'
import asset0 from '../../Course/assets/audio/A210-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A210-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A210-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A210-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A210-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A210-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A210-D81.7.mp3'
import asset7 from '../../Course/assets/audio/A210-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-a2-10-q01.prompt',
      text: 'Complete the sentence. This hotel is cheaper blank that one',
      src: quiz92_course_a2_10_q01,
    },
    {
      id: 'course-a2-10-q01.completion',
      text: 'This hotel is cheaper than that one',
      src: quizNarration1,
    },
    {
      id: 'course-a2-10-q02.prompt',
      text: 'Is this sentence correct? This room is more comfortable',
      src: quiz92_course_a2_10_q02,
    },
    {
      id: 'course-a2-10-q02.completion',
      text: 'This room is more comfortable',
      src: quizNarration2,
    },
    {
      id: 'course-a2-10-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-10-q03.completion',
      text: 'The hotel is too far away',
      src: quizNarration3,
    },
    {
      id: 'course-a2-10-q04.prompt',
      text: 'Complete the sentence. This room is blank',
      src: quiz92_course_a2_10_q04,
    },
    {
      id: 'course-a2-10-q04.completion',
      text: 'This room is quiet enough',
      src: quizNarration4,
    },
    {
      id: 'course-a2-10-q05.prompt',
      text: 'Is this sentence correct? There are enough space',
      src: quiz92_course_a2_10_q05,
    },
    {
      id: 'course-a2-10-q05.completion',
      text: 'There is enough space',
      src: quizNarration5,
    },
    {
      id: 'course-a2-10-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-10-q06.completion',
      text: 'This room is smaller than ours',
      src: quizNarration6,
    },
    {
      id: 'a2-10.shadowing.01',
      text: 'Which apartment do you think is better for our trip?',
      src: asset0,
    },
    {
      id: 'a2-10.shadowing.02',
      text: 'A is more expensive, but it has two beds.',
      src: asset1,
    },
    {
      id: 'a2-10.shadowing.03',
      text: 'B is cheaper. Is one bed enough for two friends?',
      src: asset2,
    },
    {
      id: 'a2-10.shadowing.04',
      text: 'Not for me. I’d like my own bed, and A is closer to the centre.',
      src: asset3,
    },
    {
      id: 'a2-10.shadowing.05',
      text: 'That’s true. B is a twenty-minute walk away.',
      src: asset4,
    },
    {
      id: 'a2-10.shadowing.06',
      text: 'For this short trip, that’s too far for me. What matters most to you?',
      src: asset5,
    },
    {
      id: 'a2-10.shadowing.07',
      text: 'The price, but I can pay more if we both have a bed.',
      src: asset6,
    },
    {
      id: 'a2-10.shadowing.08',
      text: 'Then let’s choose A and check whether it’s quiet at night.',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
