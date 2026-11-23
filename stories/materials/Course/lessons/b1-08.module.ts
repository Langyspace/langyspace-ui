import data from './b1-08.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B108-FS81.0.mp3'
import a1 from '../assets/audio/B108-FS81.1.mp3'
import a2 from '../assets/audio/B108-FS81.2.mp3'
import a3 from '../assets/audio/B108-FS81.3.mp3'
import a4 from '../assets/audio/B108-FS81.4.mp3'
import a5 from '../assets/audio/B108-FS81.5.mp3'
import a6 from '../assets/audio/B108-D81.1.mp3'
import a7 from '../assets/audio/B108-D81.2.mp3'
import a8 from '../assets/audio/B108-D81.3.mp3'
import a9 from '../assets/audio/B108-D81.4.mp3'
import a10 from '../assets/audio/B108-D81.5.mp3'
import a11 from '../assets/audio/B108-D81.6.mp3'
import a12 from '../assets/audio/B108-D81.7.mp3'
import a13 from '../assets/audio/B108-D81.8.mp3'
import a14 from '../assets/audio/B108-L81.1.mp3'
import i0 from '../assets/b1-08-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B108-FS81.0',
      text: 'settle in. It takes time to settle in.',
      src: a0,
    },
    { id: 'B108-FS81.1', text: 'commute. My commute is easier now.', src: a1 },
    {
      id: 'B108-FS81.2',
      text: 'dress in layers. I’m getting used to dressing in layers.',
      src: a2,
    },
    {
      id: 'B108-FS81.3',
      text: 'feel homesick. It’s normal to feel homesick sometimes.',
      src: a3,
    },
    {
      id: 'B108-FS81.4',
      text: 'make friends. The weekly group helped me make friends.',
      src: a4,
    },
    {
      id: 'B108-FS81.5',
      text: 'adjust your routine. You may need to adjust your routine.',
      src: a5,
    },
    {
      id: 'B108-D81.1',
      text: 'How are you settling in? Is the new routine getting easier?',
      src: a6,
    },
    {
      id: 'B108-D81.2',
      text: 'Some parts are. I’m used to taking the bus now, but the cold still surprises me.',
      src: a7,
    },
    {
      id: 'B108-D81.3',
      text: 'Did you use to drive everywhere before the move?',
      src: a8,
    },
    {
      id: 'B108-D81.4',
      text: 'I did. At first I missed the last bus twice because I didn’t check the timetable.',
      src: a9,
    },
    { id: 'B108-D81.5', text: 'What helped you get used to it?', src: a10 },
    {
      id: 'B108-D81.6',
      text: 'Planning the journey before leaving. I’m still getting used to dressing in layers, though.',
      src: a11,
    },
    {
      id: 'B108-D81.7',
      text: 'And have you had time to make friends?',
      src: a12,
    },
    {
      id: 'B108-D81.8',
      text: 'A little. I’ve joined a weekly group, and that makes the place feel less unfamiliar.',
      src: a13,
    },
    {
      id: 'B108-L81.1',
      text: 'Hi, Ana. Taking the bus is much easier now. I’m used to checking the timetable before I leave, so I haven’t missed the last bus again. The cold is still difficult, especially deciding what to wear when the weather changes during the day. I’ve joined a weekly group, but I sometimes feel homesick in the evenings. It isn’t all wonderful or all terrible! What helped you get used to a different routine? I’d really like to hear your experience.',
      src: a14,
    },
  ],
  images: { 'b1-08-vocabulary81': i0 },
}
export default prepared
