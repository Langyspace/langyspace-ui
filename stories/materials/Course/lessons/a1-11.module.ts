import data from './a1-11.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A111-FS81.0.mp3'
import a1 from '../assets/audio/A111-FS81.1.mp3'
import a2 from '../assets/audio/A111-FS81.2.mp3'
import a3 from '../assets/audio/A111-FS81.3.mp3'
import a4 from '../assets/audio/A111-FS81.4.mp3'
import a5 from '../assets/audio/A111-FS81.5.mp3'
import a6 from '../assets/audio/A111-D81.1.mp3'
import a7 from '../assets/audio/A111-D81.2.mp3'
import a8 from '../assets/audio/A111-D81.3.mp3'
import a9 from '../assets/audio/A111-D81.4.mp3'
import a10 from '../assets/audio/A111-D81.5.mp3'
import a11 from '../assets/audio/A111-D81.6.mp3'
import a12 from '../assets/audio/A111-L81.1.mp3'
import i0 from '../assets/a1-11-vocabulary81.webp'
import evidence123 from '../assets/a1-11-gift-options123.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    { id: 'A111-FS81.0', text: 'T-shirt. This T-shirt is green.', src: a0 },
    { id: 'A111-FS81.1', text: 'shoes. These shoes are small.', src: a1 },
    { id: 'A111-FS81.2', text: 'jacket. That jacket is blue.', src: a2 },
    { id: 'A111-FS81.3', text: 'bag. How much is this bag?', src: a3 },
    { id: 'A111-FS81.4', text: 'glasses. I like those glasses.', src: a4 },
    { id: 'A111-FS81.5', text: 'dress. Can I see this dress?', src: a5 },
    { id: 'A111-D81.1', text: 'Can I help you?', src: a6 },
    {
      id: 'A111-D81.2',
      text: 'Yes. I’d like this blue T-shirt in medium.',
      src: a7,
    },
    {
      id: 'A111-D81.3',
      text: 'Sorry, we have blue in large, or green in medium.',
      src: a8,
    },
    { id: 'A111-D81.4', text: 'Can I see the green one, please?', src: a9 },
    { id: 'A111-D81.5', text: 'Here you are. It’s twelve dollars.', src: a10 },
    { id: 'A111-D81.6', text: 'That’s good. This one, please.', src: a11 },
    {
      id: 'A111-L81.1',
      text: 'Hi, Ana! Thank you for looking for my gift. I like the green T-shirt. Medium is right for me. I don’t need a jacket. Twelve dollars is OK. Can you bring the T-shirt on Friday? We can meet at the café. Thank you!',
      src: a12,
    },
  ],
  images: { 'a1-11-gift-options123': evidence123, 'a1-11-vocabulary81': i0 },
}
export default prepared
