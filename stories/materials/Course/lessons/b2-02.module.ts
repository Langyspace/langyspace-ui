import data from './b2-02.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B202-FS81.0.mp3'
import a1 from '../assets/audio/B202-FS81.1.mp3'
import a2 from '../assets/audio/B202-FS81.2.mp3'
import a3 from '../assets/audio/B202-FS81.3.mp3'
import a4 from '../assets/audio/B202-FS81.4.mp3'
import a5 from '../assets/audio/B202-FS81.5.mp3'
import a6 from '../assets/audio/B202-D81.1.mp3'
import a7 from '../assets/audio/B202-D81.2.mp3'
import a8 from '../assets/audio/B202-D81.3.mp3'
import a9 from '../assets/audio/B202-D81.4.mp3'
import a10 from '../assets/audio/B202-D81.5.mp3'
import a11 from '../assets/audio/B202-D81.6.mp3'
import a12 from '../assets/audio/B202-D81.7.mp3'
import a13 from '../assets/audio/B202-D81.8.mp3'
import a14 from '../assets/audio/B202-D81.9.mp3'
import a15 from '../assets/audio/B202-D81.10.mp3'
import a16 from '../assets/audio/B202-D81.11.mp3'
import a17 from '../assets/audio/B202-D81.12.mp3'
import a18 from '../assets/audio/B202-L81.1.mp3'
import i0 from '../assets/b2-02-vocabulary173.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B202-FS81.0',
      text: 'a deadline. We shouldn’t promise a deadline before checking dependencies.',
      src: a0,
    },
    {
      id: 'B202-FS81.1',
      text: 'a progress update. Please send a short progress update.',
      src: a1,
    },
    {
      id: 'B202-FS81.2',
      text: 'a draft. The draft is ready for review.',
      src: a2,
    },
    {
      id: 'B202-FS81.3',
      text: 'a final version. This is not the final version yet.',
      src: a3,
    },
    {
      id: 'B202-FS81.4',
      text: 'a delay. A review delay affects the next task.',
      src: a4,
    },
    {
      id: 'B202-FS81.5',
      text: 'a handover. We need to agree a staged handover.',
      src: a5,
    },
    {
      id: 'B202-D81.1',
      text: 'Can we promise the event pack will be ready by Friday morning?',
      src: a6,
    },
    {
      id: 'B202-D81.2',
      text: 'The draft will be ready on Tuesday, but we need the review before making that promise.',
      src: a7,
    },
    {
      id: 'B202-D81.3',
      text: 'The review is booked for Wednesday. How long will the final changes take?',
      src: a8,
    },
    {
      id: 'B202-D81.4',
      text: 'About one working day after the comments arrive, provided the brief doesn’t change.',
      src: a9,
    },
    {
      id: 'B202-D81.5',
      text: 'So by Thursday evening you’ll have finished the main version?',
      src: a10,
    },
    {
      id: 'B202-D81.6',
      text: 'That’s the plan. On Friday morning I’ll be checking the printed copies.',
      src: a11,
    },
    {
      id: 'B202-D81.7',
      text: 'What will you be doing when the volunteers arrive at ten?',
      src: a12,
    },
    {
      id: 'B202-D81.8',
      text: 'I’ll be handing over the packs. Someone else needs to welcome the guests.',
      src: a13,
    },
    {
      id: 'B202-D81.9',
      text: 'I can do that. What would put the handover at risk?',
      src: a14,
    },
    {
      id: 'B202-D81.10',
      text: 'A late review or a new section. We should flag either as soon as it happens.',
      src: a15,
    },
    {
      id: 'B202-D81.11',
      text: 'Agreed. Let’s confirm the review, then communicate the deadline with that condition.',
      src: a16,
    },
    {
      id: 'B202-D81.12',
      text: 'And keep a short progress update, so nobody assumes a draft is the final version.',
      src: a17,
    },
    {
      id: 'B202-L81.1',
      text: 'Hi, Ana. The draft is ready, but the review has moved from Wednesday to Thursday afternoon. The final changes still need roughly one working day after we receive the comments. That means we shouldn’t promise the final pack for Friday morning. We can have a short welcome sheet ready by ten, while the full pack is still being checked. Could you ask whether that would cover the volunteers’ immediate needs? If it does, we can agree a later handover for the complete version rather than quietly sending an unchecked draft. We also need to make clear that a new section would require another estimate.',
      src: a18,
    },
  ],
  images: { 'b2-02-vocabulary173': i0 },
}
export default prepared
