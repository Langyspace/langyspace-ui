import data from './b1-06.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B106-FS81.0.mp3'
import a1 from '../assets/audio/B106-FS81.1.mp3'
import a2 from '../assets/audio/B106-FS81.2.mp3'
import a3 from '../assets/audio/B106-FS81.3.mp3'
import a4 from '../assets/audio/B106-FS81.4.mp3'
import a5 from '../assets/audio/B106-FS81.5.mp3'
import a6 from '../assets/audio/B106-D81.1.mp3'
import a7 from '../assets/audio/B106-D81.2.mp3'
import a8 from '../assets/audio/B106-D81.3.mp3'
import a9 from '../assets/audio/B106-D81.4.mp3'
import a10 from '../assets/audio/B106-D81.5.mp3'
import a11 from '../assets/audio/B106-D81.6.mp3'
import a12 from '../assets/audio/B106-D81.7.mp3'
import a13 from '../assets/audio/B106-D81.8.mp3'
import a14 from '../assets/audio/B106-L81.1.mp3'
import i0 from '../assets/b1-06-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B106-FS81.0',
      text: 'a job offer. I’d compare both job offers first.',
      src: a0,
    },
    {
      id: 'B106-FS81.1',
      text: 'a salary. The salary is the same in both offers.',
      src: a1,
    },
    {
      id: 'B106-FS81.2',
      text: 'a commute. A longer commute would affect my routine.',
      src: a2,
    },
    {
      id: 'B106-FS81.3',
      text: 'working hours. I’d ask about flexible working hours.',
      src: a3,
    },
    {
      id: 'B106-FS81.4',
      text: 'relocate. Would you relocate for the job?',
      src: a4,
    },
    {
      id: 'B106-FS81.5',
      text: 'a career opportunity. It could be a useful career opportunity.',
      src: a5,
    },
    {
      id: 'B106-D81.1',
      text: 'If you took the new job, what would change most?',
      src: a6,
    },
    {
      id: 'B106-D81.2',
      text: 'I’d have more flexibility, but a longer commute.',
      src: a7,
    },
    {
      id: 'B106-D81.3',
      text: 'Would the longer journey be a problem every day?',
      src: a8,
    },
    {
      id: 'B106-D81.4',
      text: 'Only on three days. I could work from home twice a week.',
      src: a9,
    },
    {
      id: 'B106-D81.5',
      text: 'What would matter more to you: the journey or choosing your hours?',
      src: a10,
    },
    {
      id: 'B106-D81.6',
      text: 'I’m not sure yet. I’d like time for a course in the afternoon.',
      src: a11,
    },
    {
      id: 'B106-D81.7',
      text: 'Then I’d ask whether the flexible hours really include afternoons.',
      src: a12,
    },
    {
      id: 'B106-D81.8',
      text: 'Good idea. If they didn’t, the offer would be much less useful.',
      src: a13,
    },
    {
      id: 'B106-L81.1',
      text: 'Hi, Ana. I’m most concerned about having time for an afternoon course. A higher salary would be welcome, but it isn’t the main reason I’m thinking of changing jobs. I’d accept a longer commute on some days if the flexible hours were real. Before I choose offer B, could you help me decide what to ask the employer? They haven’t confirmed whether I can keep my afternoons free. I’d like to check that before accepting.',
      src: a14,
    },
  ],
  images: { 'b1-06-vocabulary81': i0 },
}
export default prepared
