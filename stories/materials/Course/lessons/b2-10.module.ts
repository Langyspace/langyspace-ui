import contextual161 from '../assets/b2-10-vocabulary161.webp'
import data from './b2-10.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B210-FS81.0.mp3'
import a1 from '../assets/audio/B210-FS81.1.mp3'
import a2 from '../assets/audio/B210-FS81.2.mp3'
import a3 from '../assets/audio/B210-FS81.3.mp3'
import a4 from '../assets/audio/B210-FS81.4.mp3'
import a5 from '../assets/audio/B210-FS81.5.mp3'
import a6 from '../assets/audio/B210-D81.1.mp3'
import a7 from '../assets/audio/B210-D81.2.mp3'
import a8 from '../assets/audio/B210-D81.3.mp3'
import a9 from '../assets/audio/B210-D81.4.mp3'
import a10 from '../assets/audio/B210-D81.5.mp3'
import a11 from '../assets/audio/B210-D81.6.mp3'
import a12 from '../assets/audio/B210-D81.7.mp3'
import a13 from '../assets/audio/B210-D81.8.mp3'
import a14 from '../assets/audio/B210-D81.9.mp3'
import a15 from '../assets/audio/B210-D81.10.mp3'
import a16 from '../assets/audio/B210-D81.11.mp3'
import a17 from '../assets/audio/B210-D81.12.mp3'
import a18 from '../assets/audio/B210-L81.1.mp3'
import i0 from '../assets/b2-10-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B210-FS81.0',
      text: 'a disturbance. The lift caused a disturbance at night.',
      src: a0,
    },
    {
      id: 'B210-FS81.1',
      text: 'a complaint. The complaint explains the impact clearly.',
      src: a1,
    },
    {
      id: 'B210-FS81.2',
      text: 'a room change. A room change might solve the noise problem.',
      src: a2,
    },
    {
      id: 'B210-FS81.3',
      text: 'a refund. A refund alone may not meet the immediate need.',
      src: a3,
    },
    {
      id: 'B210-FS81.4',
      text: 'an inconvenience. Moving rooms is an inconvenience too.',
      src: a4,
    },
    {
      id: 'B210-FS81.5',
      text: 'a suitable alternative. We need a suitable alternative.',
      src: a5,
    },
    {
      id: 'B210-D81.1',
      text: 'I’m sorry, but the room next to the lift is too noisy for me to sleep.',
      src: a6,
    },
    {
      id: 'B210-D81.2',
      text: 'I’m sorry for the disturbance. We can offer earplugs.',
      src: a7,
    },
    {
      id: 'B210-D81.3',
      text: 'Thank you, but what I need is a quiet room. I have an early presentation.',
      src: a8,
    },
    {
      id: 'B210-D81.4',
      text: 'I understand. Is the problem mainly the lift or the street outside?',
      src: a9,
    },
    {
      id: 'B210-D81.5',
      text: 'It was the lift that woke me repeatedly. The street isn’t the main issue.',
      src: a10,
    },
    {
      id: 'B210-D81.6',
      text: 'That helps us find a suitable alternative. Have you already asked for a change?',
      src: a11,
    },
    {
      id: 'B210-D81.7',
      text: 'I did ask this afternoon, but I haven’t had a confirmed option yet.',
      src: a12,
    },
    {
      id: 'B210-D81.8',
      text: 'I can check another room, though it may not be available immediately.',
      src: a13,
    },
    {
      id: 'B210-D81.9',
      text: 'Could you tell me when it would be ready and whether it’s away from the lift?',
      src: a14,
    },
    {
      id: 'B210-D81.10',
      text: 'Yes. I’ll confirm those details before asking you to move.',
      src: a15,
    },
    {
      id: 'B210-D81.11',
      text: 'I appreciate that. A different room only helps if it solves the noise problem.',
      src: a16,
    },
    {
      id: 'B210-D81.12',
      text: 'Agreed. I’ll come back with a specific offer rather than another general apology.',
      src: a17,
    },
    {
      id: 'B210-L81.1',
      text: 'Hi, Ana. Reception has offered a room on the quiet side of the building, away from the lift. It will be ready at nine this evening. They can help move the bags, and there is no extra room charge. That addresses the location of the noise, but we still need to confirm whether any maintenance work is planned nearby tonight. You have an early presentation, so the timing matters too. Would you accept the offer, subject to that check, or ask for another arrangement? Could you make clear which part meets the need and which detail is still unresolved?',
      src: a18,
    },
  ],
  images: {
    'b2-10-vocabulary161': contextual161,
    'b2-10-vocabulary81': i0,
  },
}
export default prepared
