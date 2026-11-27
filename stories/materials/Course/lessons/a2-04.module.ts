import contextual161 from '../assets/a2-04-vocabulary161.webp'
import data from './a2-04.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A204-FS81.0.mp3'
import a1 from '../assets/audio/A204-FS81.1.mp3'
import a2 from '../assets/audio/A204-FS81.2.mp3'
import a3 from '../assets/audio/A204-FS81.3.mp3'
import a4 from '../assets/audio/A204-FS81.4.mp3'
import a5 from '../assets/audio/A204-FS81.5.mp3'
import a6 from '../assets/audio/A204-D81.1.mp3'
import a7 from '../assets/audio/A204-D81.2.mp3'
import a8 from '../assets/audio/A204-D81.3.mp3'
import a9 from '../assets/audio/A204-D81.4.mp3'
import a10 from '../assets/audio/A204-D81.5.mp3'
import a11 from '../assets/audio/A204-D81.6.mp3'
import a12 from '../assets/audio/A204-D81.7.mp3'
import a13 from '../assets/audio/A204-D81.8.mp3'
import a14 from '../assets/audio/A204-L81.1.mp3'
import i0 from '../assets/a2-04-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'A204-FS81.0',
      text: 'a food festival. There’s a food festival this weekend.',
      src: a0,
    },
    {
      id: 'A204-FS81.1',
      text: 'a concert. We’re going to a concert on Friday.',
      src: a1,
    },
    {
      id: 'A204-FS81.2',
      text: 'a barbecue. Would you like to come to a barbecue?',
      src: a2,
    },
    {
      id: 'A204-FS81.3',
      text: 'a birthday party. I’m going to a birthday party tonight.',
      src: a3,
    },
    {
      id: 'A204-FS81.4',
      text: 'a yoga class. My yoga class is at two.',
      src: a4,
    },
    {
      id: 'A204-FS81.5',
      text: 'a picnic. How about a picnic on Sunday?',
      src: a5,
    },
    {
      id: 'A204-D81.1',
      text: 'Are you doing anything on Saturday? There’s a food festival.',
      src: a6,
    },
    {
      id: 'A204-D81.2',
      text: 'I’m going to a yoga class at two. What time is the festival?',
      src: a7,
    },
    {
      id: 'A204-D81.3',
      text: 'It’s open all afternoon, and on Sunday morning too.',
      src: a8,
    },
    {
      id: 'A204-D81.4',
      text: 'Sunday is better for me. I’m free at ten.',
      src: a9,
    },
    {
      id: 'A204-D81.5',
      text: 'Great! Shall we meet at the entrance?',
      src: a10,
    },
    {
      id: 'A204-D81.6',
      text: 'Yes. I’m going to try something new this time.',
      src: a11,
    },
    {
      id: 'A204-D81.7',
      text: 'Me too. I’ll check the opening time tonight.',
      src: a12,
    },
    {
      id: 'A204-D81.8',
      text: 'Thanks. Send me a message when you know.',
      src: a13,
    },
    {
      id: 'A204-L81.1',
      text: 'Hi, Ana! I checked the food festival. It opens at eleven on Sunday, not ten. Would eleven thirty work for you? We could meet at the main entrance and have lunch there. I’m still free in the afternoon. If Sunday is difficult, the festival is also open on Saturday until six. What do you think?',
      src: a14,
    },
  ],
  images: {
    'a2-04-vocabulary161': contextual161,
    'a2-04-vocabulary81': i0,
  },
}
export default prepared
