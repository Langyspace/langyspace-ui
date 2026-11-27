import contextual161 from '../assets/c1-04-vocabulary161.webp'
import data from './c1-04.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/C104-FS81.0.mp3'
import a1 from '../assets/audio/C104-FS81.1.mp3'
import a2 from '../assets/audio/C104-FS81.2.mp3'
import a3 from '../assets/audio/C104-FS81.3.mp3'
import a4 from '../assets/audio/C104-FS81.4.mp3'
import a5 from '../assets/audio/C104-FS81.5.mp3'
import a6 from '../assets/audio/C104-D81.1.mp3'
import a7 from '../assets/audio/C104-D81.2.mp3'
import a8 from '../assets/audio/C104-D81.3.mp3'
import a9 from '../assets/audio/C104-D81.4.mp3'
import a10 from '../assets/audio/C104-D81.5.mp3'
import a11 from '../assets/audio/C104-D81.6.mp3'
import a12 from '../assets/audio/C104-D81.7.mp3'
import a13 from '../assets/audio/C104-D81.8.mp3'
import a14 from '../assets/audio/C104-D81.9.mp3'
import a15 from '../assets/audio/C104-D81.10.mp3'
import a16 from '../assets/audio/C104-D81.11.mp3'
import a17 from '../assets/audio/C104-D81.12.mp3'
import a18 from '../assets/audio/C104-L81.1.mp3'
import i0 from '../assets/c1-04-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'C104-FS81.0',
      text: 'set a boundary. A clear request can help set a boundary.',
      src: a0,
    },
    {
      id: 'C104-FS81.1',
      text: 'bring something up. Bring it up before resentment grows.',
      src: a1,
    },
    {
      id: 'C104-FS81.2',
      text: 'a shared space. We both use the shared space.',
      src: a2,
    },
    {
      id: 'C104-FS81.3',
      text: 'an expectation. The expectation needs to be explicit.',
      src: a3,
    },
    {
      id: 'C104-FS81.4',
      text: 'a compromise. A compromise should protect both needs.',
      src: a4,
    },
    {
      id: 'C104-FS81.5',
      text: 'a recurring issue. The late calls have become a recurring issue.',
      src: a5,
    },
    {
      id: 'C104-D81.1',
      text: 'Could we bring up the late calls before it becomes a recurring argument?',
      src: a6,
    },
    {
      id: 'C104-D81.2',
      text: 'Yes. I’ve been finding it difficult to concentrate when calls carry through the shared room.',
      src: a7,
    },
    {
      id: 'C104-D81.3',
      text: 'I understand. I’m calling family in another time zone, so an earlier slot is difficult.',
      src: a8,
    },
    {
      id: 'C104-D81.4',
      text: 'Would you mind using the smaller room and headphones after nine?',
      src: a9,
    },
    {
      id: 'C104-D81.5',
      text: 'I can do that, but I wouldn’t want to promise there will never be an urgent call.',
      src: a10,
    },
    {
      id: 'C104-D81.6',
      text: 'That’s reasonable. I’d rather you let me know when there’s an exception than leave me guessing.',
      src: a11,
    },
    {
      id: 'C104-D81.7',
      text: 'Could we agree a regular quiet period, with a brief message if something unusual happens?',
      src: a12,
    },
    {
      id: 'C104-D81.8',
      text: 'Yes. The main issue for me is predictable concentration time, not controlling who you speak to.',
      src: a13,
    },
    {
      id: 'C104-D81.9',
      text: 'Then perhaps we can protect that time and still make the family call possible.',
      src: a14,
    },
    {
      id: 'C104-D81.10',
      text: 'What period would be workable for you?',
      src: a15,
    },
    {
      id: 'C104-D81.11',
      text: 'I’ll check the family’s availability before committing to a precise end time.',
      src: a16,
    },
    {
      id: 'C104-D81.12',
      text: 'Thanks. Let’s confirm the arrangement rather than assume a polite response means full agreement.',
      src: a17,
    },
    {
      id: 'C104-L81.1',
      text: 'Hi, Ana. I can make the regular family call before ten thirty, using the smaller room and headphones. I’m willing to keep the shared room quiet after nine, provided we allow a brief exception for an urgent call and I message you if that happens. I’m not asking for unlimited late calls; I just don’t want us to treat an emergency as a broken routine agreement. Could you tell me whether that protects the concentration time you need? If the sound still carries, we can review the room arrangement rather than turn it into a judgement about either person’s consideration for others.',
      src: a18,
    },
  ],
  images: {
    'c1-04-vocabulary161': contextual161,
    'c1-04-vocabulary81': i0,
  },
}
export default prepared
