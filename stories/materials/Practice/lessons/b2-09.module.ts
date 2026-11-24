import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/d746c9e6e841670c5e9404807b20032d64d78974ce248e3c94fe7c44eae30fa3.mp3'
import quizNarration2 from '../assets/quiz-audio/e2c0b0a6bce52699b78f157affea91a7c9f80afeaa352cc5c45c98494cd402e8.mp3'
import quizNarration3 from '../assets/quiz-audio/8fb41ea0e5637ec9be8bf4f2253a7de47cf03f7dc9ea27f294c5e9d0cdafb415.mp3'
import quizNarration4 from '../assets/quiz-audio/e103ceeedbdc1b5e8d49e9fb3f595d1879c054da6b396ebfba24e01345921619.mp3'
import quizNarration5 from '../assets/quiz-audio/2aa0e2b73dca4c6bca62131e7263dfdb4b8565f268b01ad00e2e0e20037efe5a.mp3'
import quizNarration6 from '../assets/quiz-audio/5c4bf9451c07bd56aa36152c43fc701efd6f97ec50270a245e1503b6784cdc62.mp3'
import quizNarration7 from '../assets/quiz-audio/68aa79a00d7758108cbb75aaac4fc840099ec6a59193963de3352af13bb25230.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './b2-09.json'
import asset0 from '../assets/audio/2ffbf43cbdbd6ddf9c2bb2f44f6fd5a3a945401d3ed0ce83fb3061c5e92945c7.mp3'
import asset1 from '../assets/audio/a53728a2f27d162e095874007106ce306e656c3633e85523df3aca11af42928f.mp3'
import asset2 from '../assets/audio/edc93d2ae5cde7d27412b2fdab99728f0ab6ca5bd3c0f42c69a3a072b8076b7d.mp3'
import asset3 from '../assets/audio/0b90e092d36aa4a2468fd7bdfb0977e04403f9462d54ae361062082a53388e68.mp3'
import asset4 from '../assets/audio/9838ef3568cd55db6721efafd9afd5e785372cbd624bda5b50ce598b86d39a99.mp3'
import asset5 from '../assets/audio/f32713f5acaacc9cc4769fe506627413d4dfe6e246a43b9e04bc04d54db8063b.mp3'
import asset6 from '../assets/audio/de99c8f93c5df8b45f6376c314d9b943eda126a7da07e114c2c7b51536ea743d.mp3'
import asset7 from '../assets/audio/09c7148dda4a2112fb81e29cb6f3f3e792892579f6a69d82b2148671dc70cae7.mp3'
import asset8 from '../assets/audio/b6eeaf0456b7b2cf3cccee6ed61c74e713555c1b440b029ebc3f532766fd34af.mp3'
import asset9 from '../assets/audio/dab2a210aeebde827268c240dc029d05e31afaf9760a8b0b5473ed366d205dd2.mp3'
import asset10 from '../assets/audio/44568bd6a81c55bdd66086f13f6f2651b5a192f4d4235b114ab3bd48851bc0c1.mp3'
import asset11 from '../assets/audio/156ed9e38f319e5ce6b686808db3c8c5f038d8607615f48499b891b0d78fcf94.mp3'
import asset12 from '../assets/characters/priya-nair.webp'
import asset13 from '../assets/characters/arjun-mehta.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-b2-09-q01.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b2-09-q01.completion',
      text: 'I remember locking the door',
      src: quizNarration1,
    },
    {
      id: 'course-b2-09-q02.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b2-09-q02.completion',
      text: 'Remember to unplug the iron',
      src: quizNarration2,
    },
    {
      id: 'course-b2-09-q03.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b2-09-q03.completion',
      text: 'I forgot to close the window',
      src: quizNarration3,
    },
    {
      id: 'course-b2-09-q04.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b2-09-q04.completion',
      text: 'They remember shutting the windows',
      src: quizNarration4,
    },
    {
      id: 'course-b2-09-q05.prompt',
      text: 'Choose the correct question',
      src: quizNarration5,
    },
    {
      id: 'course-b2-09-q05.completion',
      text: 'Did you remember to lock the door?',
      src: quizNarration6,
    },
    {
      id: 'course-b2-09-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-b2-09-q06.completion',
      text: 'Don’t forget to take your keys',
      src: quizNarration7,
    },
    {
      id: 'b2-09.shadowing.01',
      text: 'I can’t remember locking the front door',
      src: asset0,
    },
    {
      id: 'b2-09.shadowing.02',
      text: 'I remember seeing you turn the key',
      src: asset1,
    },
    {
      id: 'b2-09.shadowing.03',
      text: 'That’s reassuring. Did you remember to turn off the stove?',
      src: asset2,
    },
    {
      id: 'b2-09.shadowing.04',
      text: 'Yes. I checked it just before we left',
      src: asset3,
    },
    {
      id: 'b2-09.shadowing.05',
      text: 'I remembered to close the window, but I forgot to water the plants',
      src: asset4,
    },
    {
      id: 'b2-09.shadowing.06',
      text: 'That can wait until we get back',
      src: asset5,
    },
    {
      id: 'b2-09.shadowing.07',
      text: 'I always seem to forget something when I’m in a hurry',
      src: asset6,
    },
    {
      id: 'b2-09.shadowing.08',
      text: 'Maybe try keeping a short checklist by the door',
      src: asset7,
    },
    {
      id: 'b2-09.shadowing.09',
      text: 'I tried making one on my phone, but I never looked at it',
      src: asset8,
    },
    {
      id: 'b2-09.shadowing.10',
      text: 'Then put it somewhere you’ll actually see it',
      src: asset9,
    },
    {
      id: 'b2-09.shadowing.11',
      text: 'Good idea. And next time I’ll leave a spare key with a friend',
      src: asset10,
    },
    {
      id: 'b2-09.shadowing.12',
      text: 'That would help. For now, we can enjoy the evening',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/priya-nair/image.webp': asset12,
    '/flashcards/course-characters/arjun-mehta/image.webp': asset13,
  },
}
export default prepared
