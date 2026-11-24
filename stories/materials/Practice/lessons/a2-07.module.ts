import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/58bf6a9667062f5d881d0327b7095fecd6ccf459427569aef126b581d1d92937.mp3'
import quizNarration2 from '../assets/quiz-audio/5e9a638db005879a9ed9e1b7d45092b6a5039ada72e8c77faa30065c0a4fea2d.mp3'
import quizNarration3 from '../assets/quiz-audio/92bc887c31c1fb3eaca2bfd94c4b965446c21a60b820c7cb7199f1125d48412e.mp3'
import quizNarration4 from '../assets/quiz-audio/2aa0e2b73dca4c6bca62131e7263dfdb4b8565f268b01ad00e2e0e20037efe5a.mp3'
import quizNarration5 from '../assets/quiz-audio/0425250a4c354135e2cd5afbf9e559eaa9ffb6b33610be20789f03bb14fdf99b.mp3'
import quizNarration6 from '../assets/quiz-audio/347aaf390af7dcd6e1e68c860c29777d85a5813b724a56360e653834f4b1c94a.mp3'
import quizNarration7 from '../assets/quiz-audio/ae598e52c541326bb73dcbfae42e5b07fbd9c9190c88bef5a222fd61a38558f5.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './a2-07.json'
import asset0 from '../../Course/assets/audio/A207-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A207-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A207-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A207-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A207-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A207-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A207-D81.7.mp3'
import asset7 from '../../Course/assets/audio/A207-D81.8.mp3'
import asset8 from '../assets/characters/kim.webp'
import asset9 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-a2-07-q01.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-07-q01.completion',
      text: 'She has to book the grill',
      src: quizNarration1,
    },
    {
      id: 'course-a2-07-q02.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-07-q02.completion',
      text: 'We don’t have to bring chairs',
      src: quizNarration2,
    },
    {
      id: 'course-a2-07-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-07-q03.completion',
      text: 'You mustn’t use the pool at night',
      src: quizNarration3,
    },
    {
      id: 'course-a2-07-q04.prompt',
      text: 'Choose the correct question',
      src: quizNarration4,
    },
    {
      id: 'course-a2-07-q04.completion',
      text: 'Does she have to book it?',
      src: quizNarration5,
    },
    {
      id: 'course-a2-07-q05.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-07-q05.completion',
      text: 'They have to leave by ten',
      src: quizNarration6,
    },
    {
      id: 'course-a2-07-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-07-q06.completion',
      text: 'He doesn’t have to clean the pool',
      src: quizNarration7,
    },
    {
      id: 'a2-07.shadowing.01',
      text: 'I’m new here. Do I have to book the grill?',
      src: asset0,
    },
    {
      id: 'a2-07.shadowing.02',
      text: 'Yes, you have to book it at reception. It’s free.',
      src: asset1,
    },
    {
      id: 'a2-07.shadowing.03',
      text: 'Can we use the pool after dinner?',
      src: asset2,
    },
    {
      id: 'a2-07.shadowing.04',
      text: 'Until eight. You mustn’t use it after that.',
      src: asset3,
    },
    {
      id: 'a2-07.shadowing.05',
      text: 'All right. Do I have to bring my own chairs?',
      src: asset4,
    },
    {
      id: 'a2-07.shadowing.06',
      text: 'No, you don’t have to. There are six chairs by the grill.',
      src: asset5,
    },
    {
      id: 'a2-07.shadowing.07',
      text: 'Great. One more thing: can I take my bike in the lift?',
      src: asset6,
    },
    {
      id: 'a2-07.shadowing.08',
      text: 'Sorry, you can’t. Please leave it in the garage.',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset8,
    '/flashcards/course-characters/ana/image.webp': asset9,
  },
}
export default prepared
