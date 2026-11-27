import contextual161 from '../assets/a2-07-vocabulary161.webp'
import data from './a2-07.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A207-FS81.0.mp3'
import a1 from '../assets/audio/A207-FS81.1.mp3'
import a2 from '../assets/audio/A207-FS81.2.mp3'
import a3 from '../assets/audio/A207-FS81.3.mp3'
import a4 from '../assets/audio/A207-FS81.4.mp3'
import a5 from '../assets/audio/A207-FS81.5.mp3'
import a6 from '../assets/audio/A207-D81.1.mp3'
import a7 from '../assets/audio/A207-D81.2.mp3'
import a8 from '../assets/audio/A207-D81.3.mp3'
import a9 from '../assets/audio/A207-D81.4.mp3'
import a10 from '../assets/audio/A207-D81.5.mp3'
import a11 from '../assets/audio/A207-D81.6.mp3'
import a12 from '../assets/audio/A207-D81.7.mp3'
import a13 from '../assets/audio/A207-D81.8.mp3'
import a14 from '../assets/audio/A207-L81.1.mp3'
import i0 from '../assets/a2-07-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    { id: 'A207-FS81.0', text: 'building. I’m new to this building.', src: a0 },
    { id: 'A207-FS81.1', text: 'pool. The pool closes at eight.', src: a1 },
    {
      id: 'A207-FS81.2',
      text: 'garage. Leave your bike in the garage.',
      src: a2,
    },
    { id: 'A207-FS81.3', text: 'grill. Do I have to book the grill?', src: a3 },
    {
      id: 'A207-FS81.4',
      text: 'trash. Please take the trash downstairs.',
      src: a4,
    },
    {
      id: 'A207-FS81.5',
      text: 'bike. You can’t take a bike in the lift.',
      src: a5,
    },
    {
      id: 'A207-D81.1',
      text: 'I’m new here. Do I have to book the grill?',
      src: a6,
    },
    {
      id: 'A207-D81.2',
      text: 'Yes, you have to book it at reception. It’s free.',
      src: a7,
    },
    { id: 'A207-D81.3', text: 'Can we use the pool after dinner?', src: a8 },
    {
      id: 'A207-D81.4',
      text: 'Until eight. You mustn’t use it after that.',
      src: a9,
    },
    {
      id: 'A207-D81.5',
      text: 'All right. Do I have to bring my own chairs?',
      src: a10,
    },
    {
      id: 'A207-D81.6',
      text: 'No, you don’t have to. There are six chairs by the grill.',
      src: a11,
    },
    {
      id: 'A207-D81.7',
      text: 'Great. One more thing: can I take my bike in the lift?',
      src: a12,
    },
    {
      id: 'A207-D81.8',
      text: 'Sorry, you can’t. Please leave it in the garage.',
      src: a13,
    },
    {
      id: 'A207-L81.1',
      text: 'Hi, Ana! There’s a temporary change this weekend. The pool closes at six, not eight, because of cleaning. The grill booking is still fine, and you can use the chairs. If your friends want to swim, they should come before six. Could you tell them about the earlier closing time? Everything goes back to normal on Monday.',
      src: a14,
    },
  ],
  images: {
    'a2-07-vocabulary161': contextual161,
    'a2-07-vocabulary81': i0,
  },
}
export default prepared
