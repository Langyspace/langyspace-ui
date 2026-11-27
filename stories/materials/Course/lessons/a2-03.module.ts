import data from './a2-03.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A203-FS81.0.mp3'
import a1 from '../assets/audio/A203-FS81.1.mp3'
import a2 from '../assets/audio/A203-FS81.2.mp3'
import a3 from '../assets/audio/A203-FS81.3.mp3'
import a4 from '../assets/audio/A203-FS81.4.mp3'
import a5 from '../assets/audio/A203-FS81.5.mp3'
import a6 from '../assets/audio/A203-D81.1.mp3'
import a7 from '../assets/audio/A203-D81.2.mp3'
import a8 from '../assets/audio/A203-D81.3.mp3'
import a9 from '../assets/audio/A203-D81.4.mp3'
import a10 from '../assets/audio/A203-D81.5.mp3'
import a11 from '../assets/audio/A203-D81.6.mp3'
import a12 from '../assets/audio/A203-D81.7.mp3'
import a13 from '../assets/audio/A203-D81.8.mp3'
import a14 from '../assets/audio/A203-L81.1.mp3'
import i0 from '../assets/a2-03-vocabulary160.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'A203-FS81.0',
      text: 'wait for the bus. I was waiting for the bus.',
      src: a0,
    },
    {
      id: 'A203-FS81.1',
      text: 'miss the bus. I missed the bus when I went into the shop.',
      src: a1,
    },
    {
      id: 'A203-FS81.2',
      text: 'drop a phone. She dropped her phone outside.',
      src: a2,
    },
    {
      id: 'A203-FS81.3',
      text: 'get stuck in traffic. He got stuck in traffic near the station.',
      src: a3,
    },
    {
      id: 'A203-FS81.4',
      text: 'start raining. It started raining at twelve.',
      src: a4,
    },
    {
      id: 'A203-FS81.5',
      text: 'arrive late. I arrived late for lunch.',
      src: a5,
    },
    { id: 'A203-D81.1', text: 'You’re here! Are you all right?', src: a6 },
    {
      id: 'A203-D81.2',
      text: 'Yes, sorry I’m late. I was waiting for the bus when it started raining.',
      src: a7,
    },
    { id: 'A203-D81.3', text: 'Oh no! Did you have an umbrella?', src: a8 },
    {
      id: 'A203-D81.4',
      text: 'No. I went into a shop, and then I missed the bus.',
      src: a9,
    },
    { id: 'A203-D81.5', text: 'What did you do after that?', src: a10 },
    {
      id: 'A203-D81.6',
      text: 'I took the next bus, but it was very slow.',
      src: a11,
    },
    {
      id: 'A203-D81.7',
      text: 'Don’t worry. We can still have lunch.',
      src: a12,
    },
    {
      id: 'A203-D81.8',
      text: 'Thanks for waiting. Next time I’ll leave earlier!',
      src: a13,
    },
    {
      id: 'A203-L81.1',
      text: 'Hi, Ana. Leo just called me. He was driving to the café when he got stuck in traffic. There’s a lot of traffic near the station, so he’s running late too. He thinks he can be here at one thirty. He’s fine, and he says we should order our food now. Shall we get a table?',
      src: a14,
    },
  ],
  images: { 'a2-03-vocabulary81': i0 },
}
export default prepared
