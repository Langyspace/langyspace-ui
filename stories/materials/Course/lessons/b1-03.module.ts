import data from './b1-03.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B103-FS81.0.mp3'
import a1 from '../assets/audio/B103-FS81.1.mp3'
import a2 from '../assets/audio/B103-FS81.2.mp3'
import a3 from '../assets/audio/B103-FS81.3.mp3'
import a4 from '../assets/audio/B103-FS81.4.mp3'
import a5 from '../assets/audio/B103-FS81.5.mp3'
import a6 from '../assets/audio/B103-D81.1.mp3'
import a7 from '../assets/audio/B103-D81.2.mp3'
import a8 from '../assets/audio/B103-D81.3.mp3'
import a9 from '../assets/audio/B103-D81.4.mp3'
import a10 from '../assets/audio/B103-D81.5.mp3'
import a11 from '../assets/audio/B103-D81.6.mp3'
import a12 from '../assets/audio/B103-D81.7.mp3'
import a13 from '../assets/audio/B103-D81.8.mp3'
import a14 from '../assets/audio/B103-L81.1.mp3'
import i0 from '../assets/b1-03-vocabulary81.webp'
import w141clip0 from '../assets/audio/B103-W141.1.mp3'
import w141clip1 from '../assets/audio/B103-W141.2.mp3'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B103-W141.1',
      text: 'Hi, Ana. I’ve checked what happened at the entrance in our concert story. They couldn’t get in immediately because one person had left their wristband at home. The entrance was still open at eight twenty, so closing time wasn’t the problem.',
      src: w141clip0,
    },
    {
      id: 'B103-W141.2',
      text: 'The help desk could issue a replacement if they showed the digital ticket. They eventually got in, but the opening act had already finished. Could you explain the sequence to someone who thinks they were turned away because they arrived late?',
      src: w141clip1,
    },
    {
      id: 'B103-FS81.0',
      text: 'a ticket. Keep the digital ticket on your phone.',
      src: a0,
    },
    {
      id: 'B103-FS81.1',
      text: 'a wristband. She had left her wristband at home.',
      src: a1,
    },
    {
      id: 'B103-FS81.2',
      text: 'the entrance. The entrance was still open.',
      src: a2,
    },
    {
      id: 'B103-FS81.3',
      text: 'the queue. We joined the queue outside.',
      src: a3,
    },
    {
      id: 'B103-FS81.4',
      text: 'the venue. The venue was easy to find.',
      src: a4,
    },
    {
      id: 'B103-FS81.5',
      text: 'an opening act. We missed the opening act.',
      src: a5,
    },
    {
      id: 'B103-D81.1',
      text: 'Did you enjoy the show, or was the whole evening difficult?',
      src: a6,
    },
    {
      id: 'B103-D81.2',
      text: 'The show was great, but it had already started when we arrived.',
      src: a7,
    },
    { id: 'B103-D81.3', text: 'What time did you get there?', src: a8 },
    {
      id: 'B103-D81.4',
      text: 'At eight twenty. We’d left late, and I’d forgotten my wristband at home.',
      src: a9,
    },
    {
      id: 'B103-D81.5',
      text: 'Oh no. Couldn’t you just show your ticket?',
      src: a10,
    },
    {
      id: 'B103-D81.6',
      text: 'The person at the entrance sent us to the help desk. We missed the opening act.',
      src: a11,
    },
    {
      id: 'B103-D81.7',
      text: 'At least you got in eventually. What would you check next time?',
      src: a12,
    },
    {
      id: 'B103-D81.8',
      text: 'I’d check the ticket and wristband before leaving, and allow more time.',
      src: a13,
    },
    {
      id: 'B103-L81.1',
      text: 'Hi, Ana. I’ve checked what happened at the entrance in our concert story. They couldn’t get in immediately because one person had left their wristband at home. The entrance was still open at eight twenty, so closing time wasn’t the problem. The help desk could issue a replacement if they showed the digital ticket. They eventually got in, but the opening act had already finished. Could you explain the sequence to someone who thinks they were turned away because they arrived late?',
      src: a14,
    },
  ],
  images: { 'b1-03-vocabulary81': i0 },
}
export default prepared
