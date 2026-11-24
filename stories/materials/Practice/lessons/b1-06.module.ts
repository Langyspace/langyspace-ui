import type { PreparedPractice } from '../Practice.types'
import data from './b1-06.json'
import asset0 from '../../Course/assets/audio/B106-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B106-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B106-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B106-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B106-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B106-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B106-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B106-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B106-V81.0.mp3'
import asset9 from '../../Course/assets/audio/B106-FE81.0.mp3'
import asset10 from '../../Course/assets/audio/B106-V81.1.mp3'
import asset11 from '../../Course/assets/audio/B106-FE81.1.mp3'
import asset12 from '../../Course/assets/audio/B106-V81.2.mp3'
import asset13 from '../../Course/assets/audio/B106-FE81.2.mp3'
import asset14 from '../../Course/assets/audio/B106-V81.3.mp3'
import asset15 from '../../Course/assets/audio/B106-FE81.3.mp3'
import asset16 from '../../Course/assets/audio/B106-V81.4.mp3'
import asset17 from '../../Course/assets/audio/B106-FE81.4.mp3'
import asset18 from '../../Course/assets/audio/B106-V81.5.mp3'
import asset19 from '../../Course/assets/audio/B106-FE81.5.mp3'
import asset20 from '../assets/characters/kim.webp'
import asset21 from '../assets/characters/ana.webp'
import asset22 from '../../Course/assets/b1-06-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b1-06.shadowing.01',
      text: 'If you took the new job, what would change most?',
      src: asset0,
    },
    {
      id: 'b1-06.shadowing.02',
      text: 'I’d have more flexibility, but a longer commute.',
      src: asset1,
    },
    {
      id: 'b1-06.shadowing.03',
      text: 'Would the longer journey be a problem every day?',
      src: asset2,
    },
    {
      id: 'b1-06.shadowing.04',
      text: 'Only on three days. I could work from home twice a week.',
      src: asset3,
    },
    {
      id: 'b1-06.shadowing.05',
      text: 'What would matter more to you: the journey or choosing your hours?',
      src: asset4,
    },
    {
      id: 'b1-06.shadowing.06',
      text: 'I’m not sure yet. I’d like time for a course in the afternoon.',
      src: asset5,
    },
    {
      id: 'b1-06.shadowing.07',
      text: 'Then I’d ask whether the flexible hours really include afternoons.',
      src: asset6,
    },
    {
      id: 'b1-06.shadowing.08',
      text: 'Good idea. If they didn’t, the offer would be much less useful.',
      src: asset7,
    },
    { id: 'course-b1-06-job-offer.front', text: 'a job offer', src: asset8 },
    {
      id: 'course-b1-06-job-offer.back',
      text: 'I’d compare both job offers first.',
      src: asset9,
    },
    { id: 'course-b1-06-salary.front', text: 'a salary', src: asset10 },
    {
      id: 'course-b1-06-salary.back',
      text: 'The salary is the same in both offers.',
      src: asset11,
    },
    { id: 'course-b1-06-commute.front', text: 'a commute', src: asset12 },
    {
      id: 'course-b1-06-commute.back',
      text: 'A longer commute would affect my routine.',
      src: asset13,
    },
    {
      id: 'course-b1-06-working-hours.front',
      text: 'working hours',
      src: asset14,
    },
    {
      id: 'course-b1-06-working-hours.back',
      text: 'I’d ask about flexible working hours.',
      src: asset15,
    },
    { id: 'course-b1-06-relocate.front', text: 'relocate', src: asset16 },
    {
      id: 'course-b1-06-relocate.back',
      text: 'Would you relocate for the job?',
      src: asset17,
    },
    {
      id: 'course-b1-06-career-opportunity.front',
      text: 'a career opportunity',
      src: asset18,
    },
    {
      id: 'course-b1-06-career-opportunity.back',
      text: 'It could be a useful career opportunity.',
      src: asset19,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset20,
    '/flashcards/course-characters/ana/image.webp': asset21,
    '/flashcards-transparent/course-images/def0a3f277bbb12f7bb170bce8dd53102e838d9872422689d0fa6b84e67cc515/image.webp':
      asset22,
  },
}
export default prepared
