import data from './b2-03.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B203-FS81.0.mp3'
import a1 from '../assets/audio/B203-FS81.1.mp3'
import a2 from '../assets/audio/B203-FS81.2.mp3'
import a3 from '../assets/audio/B203-FS81.3.mp3'
import a4 from '../assets/audio/B203-FS81.4.mp3'
import a5 from '../assets/audio/B203-FS81.5.mp3'
import a6 from '../assets/audio/B203-D81.1.mp3'
import a7 from '../assets/audio/B203-D81.2.mp3'
import a8 from '../assets/audio/B203-D81.3.mp3'
import a9 from '../assets/audio/B203-D81.4.mp3'
import a10 from '../assets/audio/B203-D81.5.mp3'
import a11 from '../assets/audio/B203-D81.6.mp3'
import a12 from '../assets/audio/B203-D81.7.mp3'
import a13 from '../assets/audio/B203-D81.8.mp3'
import a14 from '../assets/audio/B203-D81.9.mp3'
import a15 from '../assets/audio/B203-D81.10.mp3'
import a16 from '../assets/audio/B203-D81.11.mp3'
import a17 from '../assets/audio/B203-D81.12.mp3'
import a18 from '../assets/audio/B203-L81.1.mp3'
import i0 from '../assets/b2-03-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B203-FS81.0',
      text: 'a turning point. The course became a turning point.',
      src: a0,
    },
    {
      id: 'B203-FS81.1',
      text: 'take a chance. They decided to take a chance on it.',
      src: a1,
    },
    {
      id: 'B203-FS81.2',
      text: 'miss an opportunity. Missing one opportunity doesn’t close every path.',
      src: a2,
    },
    {
      id: 'B203-FS81.3',
      text: 'a consequence. The collaboration was an unexpected consequence.',
      src: a3,
    },
    {
      id: 'B203-FS81.4',
      text: 'a setback. A setback may change the route.',
      src: a4,
    },
    {
      id: 'B203-FS81.5',
      text: 'a fresh start. The move offered a fresh start.',
      src: a5,
    },
    {
      id: 'B203-D81.1',
      text: 'In this story, what made the short course in Toronto a turning point?',
      src: a6,
    },
    {
      id: 'B203-D81.2',
      text: 'The person took a chance on a practical course and now feels confident leading small projects.',
      src: a7,
    },
    {
      id: 'B203-D81.3',
      text: 'So if they hadn’t taken the course, they wouldn’t be doing that now?',
      src: a8,
    },
    {
      id: 'B203-D81.4',
      text: 'They might be less confident, but we can’t know that they’d never have learned another way.',
      src: a9,
    },
    {
      id: 'B203-D81.5',
      text: 'That’s fair. What actually happened after the course?',
      src: a10,
    },
    {
      id: 'B203-D81.6',
      text: 'They used the new skills on a community project and met a future collaborator.',
      src: a11,
    },
    {
      id: 'B203-D81.7',
      text: 'Was meeting that person part of the original plan?',
      src: a12,
    },
    {
      id: 'B203-D81.8',
      text: 'Not at all. That was an unexpected consequence, not a promised outcome.',
      src: a13,
    },
    {
      id: 'B203-D81.9',
      text: 'What would be different now if that meeting hadn’t happened?',
      src: a14,
    },
    {
      id: 'B203-D81.10',
      text: 'The collaboration might not exist, although they could still have developed the skills.',
      src: a15,
    },
    {
      id: 'B203-D81.11',
      text: 'So the experience matters, but there isn’t only one possible path.',
      src: a16,
    },
    {
      id: 'B203-D81.12',
      text: 'Exactly. I’d separate the facts from what we imagine about the alternative.',
      src: a17,
    },
    {
      id: 'B203-L81.1',
      text: 'Hi, Ana. There’s one more detail about that short course. The unexpected benefit wasn’t a job offer. The person met someone who later invited them to help with a community project. They still collaborate now, and that work has made it easier to explain their skills to other people. If they hadn’t gone to Toronto, that particular collaboration might not exist today. But it would be too strong to say they’d have no opportunities at all. Could you explain the present consequence and then describe a plausible alternative, making clear which part is a fact and which part is only a possibility?',
      src: a18,
    },
  ],
  images: { 'b2-03-vocabulary81': i0 },
}
export default prepared
