import data from './b1-05.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B105-FS81.0.mp3'
import a1 from '../assets/audio/B105-FS81.1.mp3'
import a2 from '../assets/audio/B105-FS81.2.mp3'
import a3 from '../assets/audio/B105-FS81.3.mp3'
import a4 from '../assets/audio/B105-FS81.4.mp3'
import a5 from '../assets/audio/B105-FS81.5.mp3'
import a6 from '../assets/audio/B105-D81.1.mp3'
import a7 from '../assets/audio/B105-D81.2.mp3'
import a8 from '../assets/audio/B105-D81.3.mp3'
import a9 from '../assets/audio/B105-D81.4.mp3'
import a10 from '../assets/audio/B105-D81.5.mp3'
import a11 from '../assets/audio/B105-D81.6.mp3'
import a12 from '../assets/audio/B105-D81.7.mp3'
import a13 from '../assets/audio/B105-D81.8.mp3'
import a14 from '../assets/audio/B105-L81.1.mp3'
import i0 from '../assets/b1-05-vocabulary81.webp'
import w141clip0 from '../assets/audio/B105-W141.1.mp3'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B105-W141.1',
      text: 'Hi, Ana. I’ve had another call about the repair. He said he couldn’t come on Thursday after all and would come on Friday at eleven instead. He still asked us to leave the spare key at reception. He also said the visit might take longer than an hour if the tap needs replacing. Could you pass that on to the building manager and check that the new time has been understood? The earlier Thursday booking should be removed from the diary.',
      src: w141clip0,
    },
    {
      id: 'B105-FS81.0',
      text: 'a leak. There’s a leak under the sink.',
      src: a0,
    },
    { id: 'B105-FS81.1', text: 'a tap. He needs to check the tap.', src: a1 },
    {
      id: 'B105-FS81.2',
      text: 'a repair. The repair may take an hour.',
      src: a2,
    },
    {
      id: 'B105-FS81.3',
      text: 'a spare key. Leave a spare key at reception.',
      src: a3,
    },
    {
      id: 'B105-FS81.4',
      text: 'an appointment. The appointment has changed to Friday.',
      src: a4,
    },
    {
      id: 'B105-FS81.5',
      text: 'a building manager. Please pass the message to the building manager.',
      src: a5,
    },
    {
      id: 'B105-D81.1',
      text: 'Did the repair person call about the leak?',
      src: a6,
    },
    {
      id: 'B105-D81.2',
      text: 'Yes. He said he’d come on Thursday at ten.',
      src: a7,
    },
    {
      id: 'B105-D81.3',
      text: 'Friday at ten? I’ll tell the building manager.',
      src: a8,
    },
    {
      id: 'B105-D81.4',
      text: 'Thursday, not Friday. He asked us to leave a spare key at reception.',
      src: a9,
    },
    {
      id: 'B105-D81.5',
      text: 'Thanks for checking. Did he say how long the repair would take?',
      src: a10,
    },
    {
      id: 'B105-D81.6',
      text: 'He said about an hour, but he’d need to see the tap first.',
      src: a11,
    },
    {
      id: 'B105-D81.7',
      text: 'All right. I’ll repeat that back: Thursday, ten, and a key at reception.',
      src: a12,
    },
    {
      id: 'B105-D81.8',
      text: 'Exactly. Please ask the manager to confirm that someone can let him in.',
      src: a13,
    },
    {
      id: 'B105-L81.1',
      text: 'Hi, Ana. I’ve had another call about the repair. He said he couldn’t come on Thursday after all and would come on Friday at eleven instead. He still asked us to leave the spare key at reception. He also said the visit might take longer than an hour if the tap needs replacing. Could you pass that on to the building manager and check that the new time has been understood? The earlier Thursday booking should be removed from the diary.',
      src: a14,
    },
  ],
  images: { 'b1-05-vocabulary81': i0 },
}
export default prepared
