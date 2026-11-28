import data from './b2-07.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B207-FS81.0.mp3'
import a1 from '../assets/audio/B207-FS81.1.mp3'
import a2 from '../assets/audio/B207-FS81.2.mp3'
import a3 from '../assets/audio/B207-FS81.3.mp3'
import a4 from '../assets/audio/B207-FS81.4.mp3'
import a5 from '../assets/audio/B207-FS81.5.mp3'
import a6 from '../assets/audio/B207-D81.1.mp3'
import a7 from '../assets/audio/B207-D81.2.mp3'
import a8 from '../assets/audio/B207-D81.3.mp3'
import a9 from '../assets/audio/B207-D81.4.mp3'
import a10 from '../assets/audio/B207-D81.5.mp3'
import a11 from '../assets/audio/B207-D81.6.mp3'
import a12 from '../assets/audio/B207-D81.7.mp3'
import a13 from '../assets/audio/B207-D81.8.mp3'
import a14 from '../assets/audio/B207-D81.9.mp3'
import a15 from '../assets/audio/B207-D81.10.mp3'
import a16 from '../assets/audio/B207-D81.11.mp3'
import a17 from '../assets/audio/B207-D81.12.mp3'
import a18 from '../assets/audio/B207-L81.1.mp3'
import i0 from '../assets/b2-07-vocabulary173.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B207-FS81.0',
      text: 'insist on. She didn’t insist on that date.',
      src: a0,
    },
    {
      id: 'B207-FS81.1',
      text: 'refuse to. One guest refused to pay yet.',
      src: a1,
    },
    {
      id: 'B207-FS81.2',
      text: 'admit that. The host admitted that the summary was wrong.',
      src: a2,
    },
    {
      id: 'B207-FS81.3',
      text: 'deny doing. She denied promising advance payment.',
      src: a3,
    },
    {
      id: 'B207-FS81.4',
      text: 'suggest doing. They suggested meeting on Saturday.',
      src: a4,
    },
    {
      id: 'B207-FS81.5',
      text: 'promise to. The host promised to check availability.',
      src: a5,
    },
    {
      id: 'B207-D81.1',
      text: 'How did the dinner planning go? Did everyone agree?',
      src: a6,
    },
    {
      id: 'B207-D81.2',
      text: 'Not on everything. One person suggested having dinner on Saturday.',
      src: a7,
    },
    {
      id: 'B207-D81.3',
      text: 'And someone promised to book the table?',
      src: a8,
    },
    {
      id: 'B207-D81.4',
      text: 'Yes, the host promised to book after checking the group’s availability.',
      src: a9,
    },
    {
      id: 'B207-D81.5',
      text: 'I heard that everyone agreed to pay in advance.',
      src: a10,
    },
    {
      id: 'B207-D81.6',
      text: 'That’s not accurate. One guest refused to pay before seeing the cancellation conditions.',
      src: a11,
    },
    {
      id: 'B207-D81.7',
      text: 'So suggesting dinner wasn’t the same as committing to the deposit.',
      src: a12,
    },
    {
      id: 'B207-D81.8',
      text: 'Exactly. The person who suggested it also said the date was open to discussion.',
      src: a13,
    },
    {
      id: 'B207-D81.9',
      text: 'Did anybody admit that the first summary was wrong?',
      src: a14,
    },
    {
      id: 'B207-D81.10',
      text: 'The host did. They offered to send a corrected summary to the group.',
      src: a15,
    },
    {
      id: 'B207-D81.11',
      text: 'That should help. We need to preserve what people actually intended.',
      src: a16,
    },
    {
      id: 'B207-D81.12',
      text: 'Yes: a suggestion, a conditional promise and a refusal are three different things.',
      src: a17,
    },
    {
      id: 'B207-L81.1',
      text: 'Hi, Ana. I want to clarify the dinner message. I suggested Saturday because it seemed convenient; I didn’t insist on that date or promise that everyone would pay in advance. I’m happy to consider another evening. The host said they would book only after checking availability, and one guest still wants to see the cancellation conditions before paying anything. Could you pass that on without making me sound more definite than I was? A useful summary would say what was suggested, what was actually promised and what is still unresolved.',
      src: a18,
    },
  ],
  images: { 'b2-07-vocabulary173': i0 },
}
export default prepared
