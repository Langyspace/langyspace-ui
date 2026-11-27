import contextual161 from '../assets/a2-12-vocabulary161.webp'
import data from './a2-12.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A212-FS81.0.mp3'
import a1 from '../assets/audio/A212-FS81.1.mp3'
import a2 from '../assets/audio/A212-FS81.2.mp3'
import a3 from '../assets/audio/A212-FS81.3.mp3'
import a4 from '../assets/audio/A212-FS81.4.mp3'
import a5 from '../assets/audio/A212-FS81.5.mp3'
import a6 from '../assets/audio/A212-D81.1.mp3'
import a7 from '../assets/audio/A212-D81.2.mp3'
import a8 from '../assets/audio/A212-D81.3.mp3'
import a9 from '../assets/audio/A212-D81.4.mp3'
import a10 from '../assets/audio/A212-D81.5.mp3'
import a11 from '../assets/audio/A212-D81.6.mp3'
import a12 from '../assets/audio/A212-D81.7.mp3'
import a13 from '../assets/audio/A212-D81.8.mp3'
import a14 from '../assets/audio/A212-L81.1.mp3'
import i0 from '../assets/a2-12-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'A212-FS81.0',
      text: 'book a table. I’ll book a table for four.',
      src: a0,
    },
    {
      id: 'A212-FS81.1',
      text: 'send an invitation. Can you send the invitation?',
      src: a1,
    },
    {
      id: 'A212-FS81.2',
      text: 'bring a gift. Would you like to bring a gift?',
      src: a2,
    },
    {
      id: 'A212-FS81.3',
      text: 'split the bill. Let’s split the bill.',
      src: a3,
    },
    {
      id: 'A212-FS81.4',
      text: 'cancel a booking. We need to cancel the booking.',
      src: a4,
    },
    {
      id: 'A212-FS81.5',
      text: 'change the date. Could we change the date to Saturday?',
      src: a5,
    },
    {
      id: 'A212-D81.1',
      text: 'How about dinner on Friday? We could invite two friends.',
      src: a6,
    },
    {
      id: 'A212-D81.2',
      text: 'That sounds good. Why don’t we try the River Café?',
      src: a7,
    },
    {
      id: 'A212-D81.3',
      text: 'It’s cheaper, but there are steps at the entrance. Is that a problem?',
      src: a8,
    },
    {
      id: 'A212-D81.4',
      text: 'One friend needs step-free access. The Garden Table would be easier.',
      src: a9,
    },
    {
      id: 'A212-D81.5',
      text: 'Good point. Shall we book for seven?',
      src: a10,
    },
    {
      id: 'A212-D81.6',
      text: 'Yes. I’ll check everyone’s availability first.',
      src: a11,
    },
    {
      id: 'A212-D81.7',
      text: 'Thanks. I can book the table when they reply.',
      src: a12,
    },
    {
      id: 'A212-D81.8',
      text: 'Great. Let’s split the bill so it’s simple for everyone.',
      src: a13,
    },
    {
      id: 'A212-L81.1',
      text: 'Hi, Ana! I heard from our friends. One of them can’t come on Friday, but everyone is free on Saturday at eight. We still need step-free access, and twenty dollars each is OK. Could you change the date before you book? The Garden Table has a table on Saturday. Let me know what you decide, and I’ll send the invitation.',
      src: a14,
    },
  ],
  images: {
    'a2-12-vocabulary161': contextual161,
    'a2-12-vocabulary81': i0,
  },
}
export default prepared
