import data from './c1-06.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/C106-FS81.0.mp3'
import a1 from '../assets/audio/C106-FS81.1.mp3'
import a2 from '../assets/audio/C106-FS81.2.mp3'
import a3 from '../assets/audio/C106-FS81.3.mp3'
import a4 from '../assets/audio/C106-FS81.4.mp3'
import a5 from '../assets/audio/C106-FS81.5.mp3'
import a6 from '../assets/audio/C106-D81.1.mp3'
import a7 from '../assets/audio/C106-D81.2.mp3'
import a8 from '../assets/audio/C106-D81.3.mp3'
import a9 from '../assets/audio/C106-D81.4.mp3'
import a10 from '../assets/audio/C106-D81.5.mp3'
import a11 from '../assets/audio/C106-D81.6.mp3'
import a12 from '../assets/audio/C106-D81.7.mp3'
import a13 from '../assets/audio/C106-D81.8.mp3'
import a14 from '../assets/audio/C106-D81.9.mp3'
import a15 from '../assets/audio/C106-D81.10.mp3'
import a16 from '../assets/audio/C106-D81.11.mp3'
import a17 from '../assets/audio/C106-D81.12.mp3'
import a18 from '../assets/audio/C106-L81.1.mp3'
import i0 from '../assets/c1-06-vocabulary173.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'C106-FS81.0',
      text: 'a trade-off. This is a trade-off between cost and flexibility.',
      src: a0,
    },
    {
      id: 'C106-FS81.1',
      text: 'a priority. Attendance may become the main priority.',
      src: a1,
    },
    {
      id: 'C106-FS81.2',
      text: 'a long-term benefit. The long-term benefit depends on applying the skills.',
      src: a2,
    },
    {
      id: 'C106-FS81.3',
      text: 'a short-term cost. The higher fee is a short-term cost.',
      src: a3,
    },
    {
      id: 'C106-FS81.4',
      text: 'a deal-breaker. A fixed timetable conflict could be a deal-breaker.',
      src: a4,
    },
    {
      id: 'C106-FS81.5',
      text: 'reconsider a decision. We should reconsider the decision when the conditions change.',
      src: a5,
    },
    {
      id: 'C106-D81.1',
      text: 'Which course seems a better fit for the person in this brief?',
      src: a6,
    },
    {
      id: 'C106-D81.2',
      text: 'A costs less and finishes sooner, but the more I consider the timetable, the more important flexibility seems.',
      src: a7,
    },
    {
      id: 'C106-D81.3',
      text: 'Are we treating flexibility as a preference or a fixed requirement?',
      src: a8,
    },
    {
      id: 'C106-D81.4',
      text: 'A preference at the moment. The person can usually attend Wednesday evenings.',
      src: a9,
    },
    {
      id: 'C106-D81.5',
      text: 'Then B’s higher price needs a reason beyond being described as flexible.',
      src: a10,
    },
    {
      id: 'C106-D81.6',
      text: 'True. It has independent work and a Friday check-in, but we haven’t confirmed the feedback format.',
      src: a11,
    },
    { id: 'C106-D81.7', text: 'What would make you reconsider A?', src: a12 },
    {
      id: 'C106-D81.8',
      text: 'A timetable change, or evidence that feedback can’t address the person’s project.',
      src: a13,
    },
    {
      id: 'C106-D81.9',
      text: 'So the lower price matters, but it isn’t the whole decision.',
      src: a14,
    },
    {
      id: 'C106-D81.10',
      text: 'Exactly. The more directly the work applies to the project, the more useful the course becomes.',
      src: a15,
    },
    {
      id: 'C106-D81.11',
      text: 'I’d recommend A provisionally, then verify the two uncertain details.',
      src: a16,
    },
    {
      id: 'C106-D81.12',
      text: 'And I’d say what could reverse that recommendation, so it doesn’t sound unconditional.',
      src: a17,
    },
    {
      id: 'C106-L81.1',
      text: 'Hi, Ana. Course A has changed its live session from Wednesday to Tuesday, still seven to nine. The person on our brief has a regular Tuesday commitment and cannot attend live then. The provider also says the practical feedback is only given during that live class, not on a recording afterwards. The price and eight-week length are unchanged. This turns attendance from a flexible preference into a serious constraint. Course B’s Friday check-in still fits, but we should confirm whether its feedback covers the person’s project before accepting the higher cost. Could you explain how the balance has changed rather than simply saying the more expensive course is now better? There may also be a later run of A worth asking about.',
      src: a18,
    },
  ],
  images: { 'c1-06-vocabulary173': i0 },
}
export default prepared
