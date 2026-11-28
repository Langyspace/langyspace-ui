import contextual161 from '../assets/b1-07-vocabulary161.webp'
import data from './b1-07.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B107-FS81.0.mp3'
import a1 from '../assets/audio/B107-FS81.1.mp3'
import a2 from '../assets/audio/B107-FS81.2.mp3'
import a3 from '../assets/audio/B107-FS81.3.mp3'
import a4 from '../assets/audio/B107-FS81.4.mp3'
import a5 from '../assets/audio/B107-FS81.5.mp3'
import a6 from '../assets/audio/B107-D81.1.mp3'
import a7 from '../assets/audio/B107-D81.2.mp3'
import a8 from '../assets/audio/B107-D81.3.mp3'
import a9 from '../assets/audio/B107-D81.4.mp3'
import a10 from '../assets/audio/B107-D81.5.mp3'
import a11 from '../assets/audio/B107-D81.6.mp3'
import a12 from '../assets/audio/B107-D81.7.mp3'
import a13 from '../assets/audio/B107-D81.8.mp3'
import a14 from '../assets/audio/B107-L81.1.mp3'
import i0 from '../assets/b1-07-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B107-FS81.0',
      text: 'a direct flight. The direct flight cost more.',
      src: a0,
    },
    {
      id: 'B107-FS81.1',
      text: 'a connecting flight. We missed the connecting flight.',
      src: a1,
    },
    {
      id: 'B107-FS81.2',
      text: 'a delay. There was a fifty-minute delay.',
      src: a2,
    },
    {
      id: 'B107-FS81.3',
      text: 'a boarding gate. Check the boarding gate again.',
      src: a3,
    },
    {
      id: 'B107-FS81.4',
      text: 'a refund. A refund has not been confirmed.',
      src: a4,
    },
    {
      id: 'B107-FS81.5',
      text: 'travel insurance. We need to check the travel insurance.',
      src: a5,
    },
    {
      id: 'B107-D81.1',
      text: 'Did you make the connection? You only had thirty-five minutes.',
      src: a6,
    },
    {
      id: 'B107-D81.2',
      text: 'No. The first flight was fifty minutes late, so I missed it.',
      src: a7,
    },
    {
      id: 'B107-D81.3',
      text: 'That’s frustrating. Was there a direct flight when you booked?',
      src: a8,
    },
    {
      id: 'B107-D81.4',
      text: 'Yes, but it cost more. I should have allowed more time between flights.',
      src: a9,
    },
    {
      id: 'B107-D81.5',
      text: 'You couldn’t have known about the delay, though. What can you do now?',
      src: a10,
    },
    {
      id: 'B107-D81.6',
      text: 'I’m waiting for the desk to confirm another flight.',
      src: a11,
    },
    {
      id: 'B107-D81.7',
      text: 'I’d also check what your travel insurance covers, without assuming it pays for everything.',
      src: a12,
    },
    {
      id: 'B107-D81.8',
      text: 'I will. Next time I’d compare the arrival time as well as the price.',
      src: a13,
    },
    {
      id: 'B107-L81.1',
      text: 'Hi, Ana. There’s still a flight available this evening. It leaves at six and gets in at eight thirty, but the desk hasn’t confirmed a seat yet. The direct flight tomorrow morning would arrive at ten and costs more. The traveller needs to be there by nine tomorrow, so the evening option could work if a seat is confirmed. Could you explain the two choices and what must be checked? A refund and insurance payment have not been confirmed.',
      src: a14,
    },
  ],
  images: {
    'b1-07-vocabulary161': contextual161,
    'b1-07-vocabulary81': i0,
  },
}
export default prepared
