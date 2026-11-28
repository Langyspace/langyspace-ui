import contextual161 from '../assets/a2-09-vocabulary161.webp'
import data from './a2-09.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A209-FS81.0.mp3'
import a1 from '../assets/audio/A209-FS81.1.mp3'
import a2 from '../assets/audio/A209-FS81.2.mp3'
import a3 from '../assets/audio/A209-FS81.3.mp3'
import a4 from '../assets/audio/A209-FS81.4.mp3'
import a5 from '../assets/audio/A209-FS81.5.mp3'
import a6 from '../assets/audio/A209-D81.1.mp3'
import a7 from '../assets/audio/A209-D81.2.mp3'
import a8 from '../assets/audio/A209-D81.3.mp3'
import a9 from '../assets/audio/A209-D81.4.mp3'
import a10 from '../assets/audio/A209-D81.5.mp3'
import a11 from '../assets/audio/A209-D81.6.mp3'
import a12 from '../assets/audio/A209-D81.7.mp3'
import a13 from '../assets/audio/A209-D81.8.mp3'
import a14 from '../assets/audio/A209-L81.1.mp3'
import i0 from '../assets/a2-09-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'A209-FS81.0',
      text: 'move to a new city. She moved to a new city in 2023.',
      src: a0,
    },
    {
      id: 'A209-FS81.1',
      text: 'start a job. He started a job last month.',
      src: a1,
    },
    {
      id: 'A209-FS81.2',
      text: 'finish a course. I’ve finished an online course.',
      src: a2,
    },
    {
      id: 'A209-FS81.3',
      text: 'get married. They got married in June.',
      src: a3,
    },
    {
      id: 'A209-FS81.4',
      text: 'have a baby. My friend had a baby last year.',
      src: a4,
    },
    {
      id: 'A209-FS81.5',
      text: 'take up a hobby. I’ve taken up a new hobby.',
      src: a5,
    },
    {
      id: 'A209-D81.1',
      text: 'Long time no see! Are you still living in the same city?',
      src: a6,
    },
    { id: 'A209-D81.2', text: 'No, I moved to Porto in 2023.', src: a7 },
    { id: 'A209-D81.3', text: 'How long have you lived there?', src: a8 },
    {
      id: 'A209-D81.4',
      text: 'Since 2023. I really like it, and I’ve made some good friends.',
      src: a9,
    },
    {
      id: 'A209-D81.5',
      text: 'That’s great. Have you taken up any new hobbies?',
      src: a10,
    },
    {
      id: 'A209-D81.6',
      text: 'Yes, I started a photography group in 2025.',
      src: a11,
    },
    { id: 'A209-D81.7', text: 'Do you still go every week?', src: a12 },
    {
      id: 'A209-D81.8',
      text: 'I do. We meet on Sundays. What’s changed in your life?',
      src: a13,
    },
    {
      id: 'A209-L81.1',
      text: 'Hi, Ana! Here’s the update for our fictional profile. I moved to Porto in 2023, and I’ve lived here since then. I started the photography group in 2025, and I still go on Sundays. I haven’t changed jobs, but I’ve finished an online course. I’m really enjoying the city now. What would you like to ask about my new routine?',
      src: a14,
    },
  ],
  images: {
    'a2-09-vocabulary161': contextual161,
    'a2-09-vocabulary81': i0,
  },
}
export default prepared
