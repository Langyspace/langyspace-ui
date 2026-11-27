import contextual161 from '../assets/b1-10-vocabulary161.webp'
import data from './b1-10.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B110-FS81.0.mp3'
import a1 from '../assets/audio/B110-FS81.1.mp3'
import a2 from '../assets/audio/B110-FS81.2.mp3'
import a3 from '../assets/audio/B110-FS81.3.mp3'
import a4 from '../assets/audio/B110-FS81.4.mp3'
import a5 from '../assets/audio/B110-FS81.5.mp3'
import a6 from '../assets/audio/B110-D81.1.mp3'
import a7 from '../assets/audio/B110-D81.2.mp3'
import a8 from '../assets/audio/B110-D81.3.mp3'
import a9 from '../assets/audio/B110-D81.4.mp3'
import a10 from '../assets/audio/B110-D81.5.mp3'
import a11 from '../assets/audio/B110-D81.6.mp3'
import a12 from '../assets/audio/B110-D81.7.mp3'
import a13 from '../assets/audio/B110-D81.8.mp3'
import a14 from '../assets/audio/B110-L81.1.mp3'
import i0 from '../assets/b1-10-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B110-FS81.0',
      text: 'a reception desk. The tour starts at the reception desk.',
      src: a0,
    },
    {
      id: 'B110-FS81.1',
      text: 'a cloakroom. Leave your bag in the cloakroom.',
      src: a1,
    },
    {
      id: 'B110-FS81.2',
      text: 'a timetable. Please check the timetable.',
      src: a2,
    },
    {
      id: 'B110-FS81.3',
      text: 'an entrance fee. Is the tour included in the entrance fee?',
      src: a3,
    },
    {
      id: 'B110-FS81.4',
      text: 'a guided tour. The guided tour starts at ten.',
      src: a4,
    },
    {
      id: 'B110-FS81.5',
      text: 'an information point. The cloakroom is beside the information point.',
      src: a5,
    },
    {
      id: 'B110-D81.1',
      text: 'Could you tell me where the guided tour starts?',
      src: a6,
    },
    {
      id: 'B110-D81.2',
      text: 'At the reception desk at ten. The talk is later, at eleven thirty.',
      src: a7,
    },
    {
      id: 'B110-D81.3',
      text: 'Do you know if the tour is included in the entrance fee?',
      src: a8,
    },
    {
      id: 'B110-D81.4',
      text: 'The standard tour is included. The special workshop costs extra.',
      src: a9,
    },
    {
      id: 'B110-D81.5',
      text: 'Thanks. Could you tell me where I can leave my bag?',
      src: a10,
    },
    {
      id: 'B110-D81.6',
      text: 'There’s a cloakroom on the ground floor, beside the information point.',
      src: a11,
    },
    { id: 'B110-D81.7', text: 'And is the talk still in room two?', src: a12 },
    {
      id: 'B110-D81.8',
      text: 'That’s what the timetable says. Please check the board before you go.',
      src: a13,
    },
    {
      id: 'B110-L81.1',
      text: 'Hi, Ana. There’s a room change for the eleven thirty talk. It’s now in room four, not room two. The ten o’clock tour still starts at reception. The message doesn’t say whether room four has step-free access, and one person in our group needs it. Could you check that before we leave the ground floor? The entrance fee still includes the standard tour; we haven’t booked the extra workshop.',
      src: a14,
    },
  ],
  images: {
    'b1-10-vocabulary161': contextual161,
    'b1-10-vocabulary81': i0,
  },
}
export default prepared
