import data from './a2-06.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A206-FS81.0.mp3'
import a1 from '../assets/audio/A206-FS81.1.mp3'
import a2 from '../assets/audio/A206-FS81.2.mp3'
import a3 from '../assets/audio/A206-FS81.3.mp3'
import a4 from '../assets/audio/A206-FS81.4.mp3'
import a5 from '../assets/audio/A206-FS81.5.mp3'
import a6 from '../assets/audio/A206-D81.1.mp3'
import a7 from '../assets/audio/A206-D81.2.mp3'
import a8 from '../assets/audio/A206-D81.3.mp3'
import a9 from '../assets/audio/A206-D81.4.mp3'
import a10 from '../assets/audio/A206-D81.5.mp3'
import a11 from '../assets/audio/A206-D81.6.mp3'
import a12 from '../assets/audio/A206-D81.7.mp3'
import a13 from '../assets/audio/A206-D81.8.mp3'
import a14 from '../assets/audio/A206-L81.1.mp3'
import i0 from '../assets/a2-06-vocabulary81.webp'
import w141clip0 from '../assets/audio/A206-W141.1.mp3'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'A206-W141.1',
      text: 'Hello, Ana. This is a message about your appointment at the Green Clinic. The time is now four o’clock this afternoon, not three. The address is the same. Please come to reception ten minutes before your appointment. You don’t need to reply if four is OK. If you need another time, please call reception. Thank you.',
      src: w141clip0,
    },
    { id: 'A206-FS81.0', text: 'a headache. I have a headache.', src: a0 },
    {
      id: 'A206-FS81.1',
      text: 'a sore throat. My friend has a sore throat.',
      src: a1,
    },
    { id: 'A206-FS81.2', text: 'a fever. I have a fever today.', src: a2 },
    {
      id: 'A206-FS81.3',
      text: 'a cough. I’ve had a cough since yesterday.',
      src: a3,
    },
    {
      id: 'A206-FS81.4',
      text: 'a stomachache. She has a stomachache.',
      src: a4,
    },
    {
      id: 'A206-FS81.5',
      text: 'a backache. I’d like an appointment for my backache.',
      src: a5,
    },
    { id: 'A206-D81.1', text: 'Good afternoon. How can I help you?', src: a6 },
    {
      id: 'A206-D81.2',
      text: 'My back hurts. I’d like to make an appointment.',
      src: a7,
    },
    { id: 'A206-D81.3', text: 'When did it start?', src: a8 },
    {
      id: 'A206-D81.4',
      text: 'Yesterday afternoon. Is there an appointment today?',
      src: a9,
    },
    {
      id: 'A206-D81.5',
      text: 'There’s one at three at the Green Clinic.',
      src: a10,
    },
    { id: 'A206-D81.6', text: 'Could you repeat the time, please?', src: a11 },
    {
      id: 'A206-D81.7',
      text: 'Three o’clock. We’ll send you the address.',
      src: a12,
    },
    { id: 'A206-D81.8', text: 'Thank you. I’ll check the message.', src: a13 },
    {
      id: 'A206-L81.1',
      text: 'Hello, Ana. This is a message about your appointment at the Green Clinic. The time is now four o’clock this afternoon, not three. The address is the same. Please come to reception ten minutes before your appointment. You don’t need to reply if four is OK. If you need another time, please call reception. Thank you.',
      src: a14,
    },
  ],
  images: { 'a2-06-vocabulary81': i0 },
}
export default prepared
