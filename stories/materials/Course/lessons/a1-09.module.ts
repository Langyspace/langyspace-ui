import data from './a1-09.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A109-D81.1.mp3'
import a1 from '../assets/audio/A109-D81.2.mp3'
import a2 from '../assets/audio/A109-D81.3.mp3'
import a3 from '../assets/audio/A109-D81.4.mp3'
import a4 from '../assets/audio/A109-D81.5.mp3'
import a5 from '../assets/audio/A109-D81.6.mp3'
import a6 from '../assets/audio/A109-L81.1.mp3'
import a7 from '../assets/audio/A109-FS81.0.mp3'
import a8 from '../assets/audio/A109-FS81.1.mp3'
import a9 from '../assets/audio/A109-FS81.2.mp3'
import a10 from '../assets/audio/A109-FS81.3.mp3'
import a11 from '../assets/audio/A109-FS81.4.mp3'
import a12 from '../assets/audio/A109-FS81.5.mp3'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'A109-D81.1',
      text: 'Excuse me. Is there a café near the hotel?',
      src: a0,
    },
    {
      id: 'A109-D81.2',
      text: 'Yes, there is. Go straight and turn right at the first street.',
      src: a1,
    },
    { id: 'A109-D81.3', text: 'Is it next to the pharmacy?', src: a2 },
    {
      id: 'A109-D81.4',
      text: 'Yes. The pharmacy is on the same street.',
      src: a3,
    },
    { id: 'A109-D81.5', text: 'Great. And is there a park here?', src: a4 },
    {
      id: 'A109-D81.6',
      text: 'Yes. Go straight and take the second right. The park is at the end.',
      src: a5,
    },
    {
      id: 'A109-L81.1',
      text: 'Hi, Ana! Let’s meet at the park, not the café. Start at the hotel and go straight. Turn right at the second street. The park is at the end, after the market. I’m near the trees. See you in ten minutes!',
      src: a6,
    },
    {
      id: 'A109-FS81.0',
      text: 'café. There’s a café near the hotel.',
      src: a7,
    },
    {
      id: 'A109-FS81.1',
      text: 'market. The market is on the second street.',
      src: a8,
    },
    {
      id: 'A109-FS81.2',
      text: 'pharmacy. The pharmacy is next to the café.',
      src: a9,
    },
    { id: 'A109-FS81.3', text: 'bank. Go straight to the bank.', src: a10 },
    { id: 'A109-FS81.4', text: 'park. Let’s meet at the park.', src: a11 },
    { id: 'A109-FS81.5', text: 'hotel. Start at the hotel.', src: a12 },
  ],
  images: {},
}
export default prepared
