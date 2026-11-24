import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/c141e2ab61218ac1ec0d00582899d8f7e1994e54e5e132e76b7cf4750f49375b.mp3'
import quizNarration2 from '../assets/quiz-audio/61a658a3cfed101112eaed0c4dab7f5ff2bc32e772f22ef02415eb7ec4575e77.mp3'
import quizNarration3 from '../assets/quiz-audio/2aa0e2b73dca4c6bca62131e7263dfdb4b8565f268b01ad00e2e0e20037efe5a.mp3'
import quizNarration4 from '../assets/quiz-audio/47dbdd1b845d472c49783393beedf74560afcc021bfe49fd4932c3cd650737a9.mp3'
import quizNarration5 from '../assets/quiz-audio/dac79f63a70b5e369996fc8947160d55ee43bfdebcab3ce41bd4fe81a3c1f274.mp3'
import quizNarration6 from '../assets/quiz-audio/31fb3d2c95967c3ee6ef5599437f0ded4c4cfe2c7afaf28e3077f6517e309ff9.mp3'
import quizNarration7 from '../assets/quiz-audio/ff0936f03f78ff9e4e656001cb21e610366b9a9a9ea3605a9787cc2b70ae8724.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './a2-04.json'
import asset0 from '../assets/audio/a0ec586fde27fef1a2552cba79ef9141c8d7758c558436b8a427cbfc5125fbaa.mp3'
import asset1 from '../assets/audio/6efd78dd6ef221156b8ed155e507ca9a5b2d8b43500d91cc9709dc977a0ec990.mp3'
import asset2 from '../assets/audio/2e3376b1e7eb9d82c137cb0645fb1cef22d5639dd8c6b323ccf2090c9e7da47d.mp3'
import asset3 from '../assets/audio/7a9c9abaee96e471092dc7940192d0bcc585adb71e320aa737126672ccb90480.mp3'
import asset4 from '../assets/audio/4ad4245105b2b275d2fcd0c24c8d3ff14a8c9bee6302cb17f6cc37acaad4fb02.mp3'
import asset5 from '../assets/audio/c93d34403630d3cac9bf221169f911ce3599e26378e0250b4bd76ca9b3388007.mp3'
import asset6 from '../assets/audio/0dad2beb3a86ec433ccffde8b27df04f4b0716c238e779101ecd1c5d8a93e3b3.mp3'
import asset7 from '../assets/audio/6ced32bf487b29e65805221fa00ef1395c8159fda04284fe5ed524a4710ca2e2.mp3'
import asset8 from '../assets/characters/evelyn-carter.webp'
import asset9 from '../assets/characters/owen-harris.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-a2-04-q01.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-04-q01.completion',
      text: 'I’m meeting Kim on Saturday',
      src: quizNarration1,
    },
    {
      id: 'course-a2-04-q02.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-04-q02.completion',
      text: 'I’m going to try yoga',
      src: quizNarration2,
    },
    {
      id: 'course-a2-04-q03.prompt',
      text: 'Choose the correct question',
      src: quizNarration3,
    },
    {
      id: 'course-a2-04-q03.completion',
      text: 'Are you going to the concert?',
      src: quizNarration4,
    },
    {
      id: 'course-a2-04-q04.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-04-q04.completion',
      text: 'She isn’t going to join us',
      src: quizNarration5,
    },
    {
      id: 'course-a2-04-q05.prompt',
      text: 'Choose the correct question',
      src: quizNarration3,
    },
    {
      id: 'course-a2-04-q05.completion',
      text: 'What are you going to do on Sunday?',
      src: quizNarration6,
    },
    {
      id: 'course-a2-04-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-04-q06.completion',
      text: 'I’d love to come, but I’m busy',
      src: quizNarration7,
    },
    {
      id: 'a2-04.shadowing.01',
      text: 'Are you doing anything on Saturday?',
      src: asset0,
    },
    {
      id: 'a2-04.shadowing.02',
      text: 'I’m meeting a friend in the morning',
      src: asset1,
    },
    {
      id: 'a2-04.shadowing.03',
      text: 'I’m going to visit the food festival. Want to come?',
      src: asset2,
    },
    {
      id: 'a2-04.shadowing.04',
      text: 'That sounds good. What time are you going?',
      src: asset3,
    },
    {
      id: 'a2-04.shadowing.05',
      text: 'Around two. We can meet by the entrance',
      src: asset4,
    },
    {
      id: 'a2-04.shadowing.06',
      text: 'Great. I’m going to get lunch there',
      src: asset5,
    },
    {
      id: 'a2-04.shadowing.07',
      text: 'Me too. Shall we meet at half past one?',
      src: asset6,
    },
    {
      id: 'a2-04.shadowing.08',
      text: 'Yes. Half past one is perfect',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/evelyn-carter/image.webp': asset8,
    '/flashcards/course-characters/owen-harris/image.webp': asset9,
  },
}
export default prepared
