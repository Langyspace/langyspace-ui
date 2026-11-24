import quizNarration0 from '../assets/quiz-audio/3e3ed981c802330ac617bcbbcef7bec970758577c2be17cf5da06bdbbaa7c1bd.mp3'
import quizNarration1 from '../assets/quiz-audio/4caac02f64412371da694554b853d6967e21a6a46d7c9470b79f9ef41b474c3f.mp3'
import quizNarration2 from '../assets/quiz-audio/ecf3a88d6b055f7aacb68d976126d6c3436d0a1b5e9b78197929c4b7b8c1b063.mp3'
import quizNarration3 from '../assets/quiz-audio/2aa0e2b73dca4c6bca62131e7263dfdb4b8565f268b01ad00e2e0e20037efe5a.mp3'
import quizNarration4 from '../assets/quiz-audio/9844306a02189d6870e6e27dbe7c005f79ee3e5c4d0708c3eb0f34d0f0d2c7b0.mp3'
import quizNarration5 from '../assets/quiz-audio/f70ee40f6e33acbd68e5ec4077247e8459c6c8f98eca19414d5fa2d356a1a4c3.mp3'
import quizNarration6 from '../assets/quiz-audio/0d7c9103300a3f5e348fdc9e8f14958fe48aae60f3263ca9aa7e54dd4daac20a.mp3'
import quizNarration7 from '../assets/quiz-audio/7cc97bc0a6147fd38417cca2c0ef0a210706c787db047d1e5b25a739aca0a206.mp3'
import type { PreparedPractice } from '../Practice.types'
import data from './a2-01.json'
import asset0 from '../../Course/assets/audio/legacy-A201-a201.dialogue.anna-ben.01.mp3'
import asset1 from '../../Course/assets/audio/legacy-A201-a201.dialogue.anna-ben.02.mp3'
import asset2 from '../../Course/assets/audio/legacy-A201-a201.dialogue.anna-ben.03.mp3'
import asset3 from '../../Course/assets/audio/legacy-A201-a201.dialogue.anna-ben.04.mp3'
import asset4 from '../../Course/assets/audio/legacy-A201-a201.dialogue.anna-ben.05.mp3'
import asset5 from '../../Course/assets/audio/legacy-A201-a201.dialogue.anna-ben.06.mp3'
import asset6 from '../assets/characters/anna.webp'
import asset7 from '../assets/characters/ben.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-a2-01-q01.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-01-q01.completion',
      text: 'She’s making coffee',
      src: quizNarration1,
    },
    {
      id: 'course-a2-01-q02.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-01-q02.completion',
      text: 'She usually works from home',
      src: quizNarration2,
    },
    {
      id: 'course-a2-01-q03.prompt',
      text: 'Choose the correct question',
      src: quizNarration3,
    },
    {
      id: 'course-a2-01-q03.completion',
      text: 'What do you usually cook?',
      src: quizNarration4,
    },
    {
      id: 'course-a2-01-q04.prompt',
      text: 'Choose the correct question',
      src: quizNarration3,
    },
    {
      id: 'course-a2-01-q04.completion',
      text: 'What are you cooking?',
      src: quizNarration5,
    },
    {
      id: 'course-a2-01-q05.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-01-q05.completion',
      text: 'He doesn’t watch TV in the morning',
      src: quizNarration6,
    },
    {
      id: 'course-a2-01-q06.prompt',
      text: 'Choose the correct sentence',
      src: quizNarration0,
    },
    {
      id: 'course-a2-01-q06.completion',
      text: 'They aren’t working today',
      src: quizNarration7,
    },
    { id: 'a2-01.shadowing.01', text: 'Hey! What are you doing?', src: asset0 },
    {
      id: 'a2-01.shadowing.02',
      text: "I'm cooking dinner. What about you?",
      src: asset1,
    },
    { id: 'a2-01.shadowing.03', text: "I'm watching a movie.", src: asset2 },
    {
      id: 'a2-01.shadowing.04',
      text: 'Nice! Do you usually watch movies at night?',
      src: asset3,
    },
    {
      id: 'a2-01.shadowing.05',
      text: 'Yes, but I usually read before bed. Do you cook every day?',
      src: asset4,
    },
    {
      id: 'a2-01.shadowing.06',
      text: "Not really. I usually order food, but today I'm making pasta.",
      src: asset5,
    },
  ],
  images: {
    '/flashcards/course-characters/anna/image.webp': asset6,
    '/flashcards/course-characters/ben/image.webp': asset7,
  },
}
export default prepared
