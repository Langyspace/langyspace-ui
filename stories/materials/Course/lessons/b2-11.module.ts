import data from './b2-11.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B211-FS81.0.mp3'
import a1 from '../assets/audio/B211-FS81.1.mp3'
import a2 from '../assets/audio/B211-FS81.2.mp3'
import a3 from '../assets/audio/B211-FS81.3.mp3'
import a4 from '../assets/audio/B211-FS81.4.mp3'
import a5 from '../assets/audio/B211-FS81.5.mp3'
import a6 from '../assets/audio/B211-D81.1.mp3'
import a7 from '../assets/audio/B211-D81.2.mp3'
import a8 from '../assets/audio/B211-D81.3.mp3'
import a9 from '../assets/audio/B211-D81.4.mp3'
import a10 from '../assets/audio/B211-D81.5.mp3'
import a11 from '../assets/audio/B211-D81.6.mp3'
import a12 from '../assets/audio/B211-D81.7.mp3'
import a13 from '../assets/audio/B211-D81.8.mp3'
import a14 from '../assets/audio/B211-D81.9.mp3'
import a15 from '../assets/audio/B211-D81.10.mp3'
import a16 from '../assets/audio/B211-D81.11.mp3'
import a17 from '../assets/audio/B211-D81.12.mp3'
import a18 from '../assets/audio/B211-L81.1.mp3'
import i0 from '../assets/b2-11-vocabulary173.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B211-FS81.0',
      text: 'a proposal. The proposal changes the status round.',
      src: a0,
    },
    {
      id: 'B211-FS81.1',
      text: 'a benefit. A possible benefit is more useful live time.',
      src: a1,
    },
    {
      id: 'B211-FS81.2',
      text: 'a drawback. A drawback is that updates may not be read.',
      src: a2,
    },
    {
      id: 'B211-FS81.3',
      text: 'a concern. We need to understand the concern.',
      src: a3,
    },
    {
      id: 'B211-FS81.4',
      text: 'an alternative. What alternative would preserve the purpose?',
      src: a4,
    },
    {
      id: 'B211-FS81.5',
      text: 'a compromise. The compromise keeps a short live discussion.',
      src: a5,
    },
    {
      id: 'B211-D81.1',
      text: 'What change would you propose for our weekly study-group meeting?',
      src: a6,
    },
    {
      id: 'B211-D81.2',
      text: 'I’d replace the sixty-minute status round with a short written update.',
      src: a7,
    },
    { id: 'B211-D81.3', text: 'What problem would that solve?', src: a8 },
    {
      id: 'B211-D81.4',
      text: 'People repeat information we could read. We need the live time for questions.',
      src: a9,
    },
    {
      id: 'B211-D81.5',
      text: 'I can see the benefit. My concern is that some people won’t read the update.',
      src: a10,
    },
    {
      id: 'B211-D81.6',
      text: 'That’s a fair point. Having said that, a longer meeting doesn’t guarantee attention either.',
      src: a11,
    },
    {
      id: 'B211-D81.7',
      text: 'True. Could the update be short enough to read before a ten-minute discussion?',
      src: a12,
    },
    {
      id: 'B211-D81.8',
      text: 'Yes. We could use three headings and keep the live slot for unresolved questions.',
      src: a13,
    },
    {
      id: 'B211-D81.9',
      text: 'What about someone who thinks of a question afterwards?',
      src: a14,
    },
    {
      id: 'B211-D81.10',
      text: 'We’d need a place to ask asynchronously, and someone responsible for replies.',
      src: a15,
    },
    {
      id: 'B211-D81.11',
      text: 'Then I’d support a trial, provided we check whether questions actually get answered.',
      src: a16,
    },
    {
      id: 'B211-D81.12',
      text: 'Agreed. In short, less reporting aloud, but a clearer way to get help.',
      src: a17,
    },
    {
      id: 'B211-L81.1',
      text: 'Hi, Ana. One group member likes the shorter meeting but is worried about asking questions after the live discussion. They can’t always join at the same time, and they don’t want their questions to disappear in a long message thread. They suggest a separate question channel, with a named person checking it each study day. Could you revise the proposal without bringing back the full sixty-minute status round? Keep its purpose—more useful time—and explain what you would change so people can still get an answer. We should agree how to review the trial before calling it a success.',
      src: a18,
    },
  ],
  images: { 'b2-11-vocabulary173': i0 },
}
export default prepared
