import contextual161 from '../assets/a2-10-vocabulary161.webp'
import data from './a2-10.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A210-FS81.0.mp3'
import a1 from '../assets/audio/A210-FS81.1.mp3'
import a2 from '../assets/audio/A210-FS81.2.mp3'
import a3 from '../assets/audio/A210-FS81.3.mp3'
import a4 from '../assets/audio/A210-FS81.4.mp3'
import a5 from '../assets/audio/A210-FS81.5.mp3'
import a6 from '../assets/audio/A210-D81.1.mp3'
import a7 from '../assets/audio/A210-D81.2.mp3'
import a8 from '../assets/audio/A210-D81.3.mp3'
import a9 from '../assets/audio/A210-D81.4.mp3'
import a10 from '../assets/audio/A210-D81.5.mp3'
import a11 from '../assets/audio/A210-D81.6.mp3'
import a12 from '../assets/audio/A210-D81.7.mp3'
import a13 from '../assets/audio/A210-D81.8.mp3'
import a14 from '../assets/audio/A210-L81.1.mp3'
import i0 from '../assets/a2-10-vocabulary81.webp'
import w141photo from '../assets/a2-10-cover81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'A210-FS81.0',
      text: 'cheap. This room is cheap for the area.',
      src: a0,
    },
    {
      id: 'A210-FS81.1',
      text: 'expensive. That apartment is more expensive.',
      src: a1,
    },
    {
      id: 'A210-FS81.2',
      text: 'spacious. The living room is spacious.',
      src: a2,
    },
    {
      id: 'A210-FS81.3',
      text: 'small. This bedroom is too small for two beds.',
      src: a3,
    },
    { id: 'A210-FS81.4', text: 'quiet. We’d like a quiet room.', src: a4 },
    {
      id: 'A210-FS81.5',
      text: 'noisy. The street is noisy at night.',
      src: a5,
    },
    {
      id: 'A210-D81.1',
      text: 'Which apartment do you think is better for our trip?',
      src: a6,
    },
    {
      id: 'A210-D81.2',
      text: 'A is more expensive, but it has two beds.',
      src: a7,
    },
    {
      id: 'A210-D81.3',
      text: 'B is cheaper. Is one bed enough for two friends?',
      src: a8,
    },
    {
      id: 'A210-D81.4',
      text: 'Not for me. I’d like my own bed, and A is closer to the centre.',
      src: a9,
    },
    {
      id: 'A210-D81.5',
      text: 'That’s true. B is a twenty-minute walk away.',
      src: a10,
    },
    {
      id: 'A210-D81.6',
      text: 'For this short trip, that’s too far for me. What matters most to you?',
      src: a11,
    },
    {
      id: 'A210-D81.7',
      text: 'The price, but I can pay more if we both have a bed.',
      src: a12,
    },
    {
      id: 'A210-D81.8',
      text: 'Then let’s choose A and check whether it’s quiet at night.',
      src: a13,
    },
    {
      id: 'A210-L81.1',
      text: 'Hi, Ana! I asked about apartment A. There’s a busy road outside, and it can be noisy at night. The price, two beds and distance are the same. Apartment B is on a quiet street. I still want my own bed, but I also need to sleep well. Does this change your choice? We could ask A about a quieter room before we book.',
      src: a14,
    },
  ],
  images: {
    'a2-10-vocabulary161': contextual161,
    'a2-10-cover81': w141photo,
    'a2-10-vocabulary81': i0,
  },
}
export default prepared
