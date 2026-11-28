import data from './a1-08.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A108-FS81.0.mp3'
import a1 from '../assets/audio/A108-FS81.1.mp3'
import a2 from '../assets/audio/A108-FS81.2.mp3'
import a3 from '../assets/audio/A108-FS81.3.mp3'
import a4 from '../assets/audio/A108-FS81.4.mp3'
import a5 from '../assets/audio/A108-FS81.5.mp3'
import a6 from '../assets/audio/A108-D81.1.mp3'
import a7 from '../assets/audio/A108-D81.2.mp3'
import a8 from '../assets/audio/A108-D81.3.mp3'
import a9 from '../assets/audio/A108-D81.4.mp3'
import a10 from '../assets/audio/A108-D81.5.mp3'
import a11 from '../assets/audio/A108-D81.6.mp3'
import a12 from '../assets/audio/A108-L81.1.mp3'
import i0 from '../assets/a1-08-vocabulary173.webp'
import evidence123 from '../assets/a1-08-hotel-problems123.webp'
import w141clip0 from '../assets/audio/A108-W141.1.mp3'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'A108-W141.1',
      text: 'Hello, Ana. This is reception. Someone can come to your room at seven this evening, not six. We have two towels for you here. You can collect them now, or we can bring them at seven. Please tell us what you need. Thank you!',
      src: w141clip0,
    },
    { id: 'A108-FS81.0', text: 'room. My room is on the left.', src: a0 },
    { id: 'A108-FS81.1', text: 'key. Can I have my key, please?', src: a1 },
    { id: 'A108-FS81.2', text: 'shower. The shower doesn’t work.', src: a2 },
    { id: 'A108-FS81.3', text: 'light. Can you check the light?', src: a3 },
    { id: 'A108-FS81.4', text: 'towel. I need a clean towel.', src: a4 },
    { id: 'A108-FS81.5', text: 'reception. Please call reception.', src: a5 },
    { id: 'A108-D81.1', text: 'Good evening. How can I help?', src: a6 },
    {
      id: 'A108-D81.2',
      text: 'I’m in room 204. The shower doesn’t work.',
      src: a7,
    },
    { id: 'A108-D81.3', text: 'I’m sorry. Do you need a towel?', src: a8 },
    { id: 'A108-D81.4', text: 'Yes, please. Can I have two towels?', src: a9 },
    {
      id: 'A108-D81.5',
      text: 'Of course. Someone can come at six. Is that OK?',
      src: a10,
    },
    { id: 'A108-D81.6', text: 'Yes, thank you. I’ll be here.', src: a11 },
    {
      id: 'A108-L81.1',
      text: 'Hello, Ana. This is reception. Someone can come to your room at seven this evening, not six. We have two towels for you here. You can collect them now, or we can bring them at seven. Please tell us what you need. Thank you!',
      src: a12,
    },
  ],
  images: { 'a1-08-hotel-problems123': evidence123, 'a1-08-vocabulary173': i0 },
}
export default prepared
