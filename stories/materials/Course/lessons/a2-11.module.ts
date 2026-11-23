import data from './a2-11.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A211-FS81.0.mp3'
import a1 from '../assets/audio/A211-FS81.1.mp3'
import a2 from '../assets/audio/A211-FS81.2.mp3'
import a3 from '../assets/audio/A211-FS81.3.mp3'
import a4 from '../assets/audio/A211-FS81.4.mp3'
import a5 from '../assets/audio/A211-FS81.5.mp3'
import a6 from '../assets/audio/A211-D81.1.mp3'
import a7 from '../assets/audio/A211-D81.2.mp3'
import a8 from '../assets/audio/A211-D81.3.mp3'
import a9 from '../assets/audio/A211-D81.4.mp3'
import a10 from '../assets/audio/A211-D81.5.mp3'
import a11 from '../assets/audio/A211-D81.6.mp3'
import a12 from '../assets/audio/A211-D81.7.mp3'
import a13 from '../assets/audio/A211-D81.8.mp3'
import a14 from '../assets/audio/A211-L81.1.mp3'
import i0 from '../assets/a2-11-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'A211-FS81.0',
      text: 'a hike. We’re planning a hike on Sunday.',
      src: a0,
    },
    {
      id: 'A211-FS81.1',
      text: 'a trail. This trail goes through the trees.',
      src: a1,
    },
    {
      id: 'A211-FS81.2',
      text: 'a museum. We’ll go to a museum if it rains.',
      src: a2,
    },
    { id: 'A211-FS81.3', text: 'a raincoat. I’ll bring a raincoat.', src: a3 },
    {
      id: 'A211-FS81.4',
      text: 'a forecast. Let’s check the forecast.',
      src: a4,
    },
    {
      id: 'A211-FS81.5',
      text: 'a backup plan. The museum is our backup plan.',
      src: a5,
    },
    { id: 'A211-D81.1', text: 'Shall we go on a hike on Sunday?', src: a6 },
    {
      id: 'A211-D81.2',
      text: 'I’d like that. What does the forecast say?',
      src: a7,
    },
    {
      id: 'A211-D81.3',
      text: 'It might rain. If it rains, we’ll go to the museum instead.',
      src: a8,
    },
    { id: 'A211-D81.4', text: 'Good plan. What time is the bus?', src: a9 },
    {
      id: 'A211-D81.5',
      text: 'At nine. If we miss it, we can take the next one at nine thirty.',
      src: a10,
    },
    {
      id: 'A211-D81.6',
      text: 'All right. I’ll bring a raincoat. What about lunch?',
      src: a11,
    },
    {
      id: 'A211-D81.7',
      text: 'If we go to the museum, we’ll eat at the café inside.',
      src: a12,
    },
    {
      id: 'A211-D81.8',
      text: 'Great. Let’s check the weather again before we leave.',
      src: a13,
    },
    {
      id: 'A211-L81.1',
      text: 'Hi, Ana! The forecast says it will rain on Sunday morning. Let’s use our backup plan. If it rains, we’ll go straight to the museum, and we’ll have lunch inside. We can still take the nine o’clock bus. If that bus is late, let’s wait for the nine thirty one rather than walk in the rain. Does that work for you?',
      src: a14,
    },
  ],
  images: { 'a2-11-vocabulary81': i0 },
}
export default prepared
