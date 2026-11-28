import data from './a2-05.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A205-FS81.0.mp3'
import a1 from '../assets/audio/A205-FS81.1.mp3'
import a2 from '../assets/audio/A205-FS81.2.mp3'
import a3 from '../assets/audio/A205-FS81.3.mp3'
import a4 from '../assets/audio/A205-FS81.4.mp3'
import a5 from '../assets/audio/A205-FS81.5.mp3'
import a6 from '../assets/audio/A205-D81.1.mp3'
import a7 from '../assets/audio/A205-D81.2.mp3'
import a8 from '../assets/audio/A205-D81.3.mp3'
import a9 from '../assets/audio/A205-D81.4.mp3'
import a10 from '../assets/audio/A205-D81.5.mp3'
import a11 from '../assets/audio/A205-D81.6.mp3'
import a12 from '../assets/audio/A205-D81.7.mp3'
import a13 from '../assets/audio/A205-D81.8.mp3'
import a14 from '../assets/audio/A205-L81.1.mp3'
import i0 from '../assets/a2-05-vocabulary173.webp'
import w141clip0 from '../assets/audio/A205-W141.1.mp3'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'A205-W141.1',
      text: 'Hi, Ana! A quick update about the move: the lift isn’t working this afternoon. We have to take the stairs. The heavy box can stay downstairs for now, but I need help carrying the small bags. Could you come at three? I’m still going to paint tomorrow, so there’s no need to bring paint today. Thank you!',
      src: w141clip0,
    },
    {
      id: 'A205-FS81.0',
      text: 'carry a box. I’ll carry the smaller box.',
      src: a0,
    },
    {
      id: 'A205-FS81.1',
      text: 'open the door. Can you open the door?',
      src: a1,
    },
    {
      id: 'A205-FS81.2',
      text: 'take the stairs. We have to take the stairs.',
      src: a2,
    },
    { id: 'A205-FS81.3', text: 'move a chair. I’ll move this chair.', src: a3 },
    {
      id: 'A205-FS81.4',
      text: 'paint a wall. I’m going to paint a wall tomorrow.',
      src: a4,
    },
    {
      id: 'A205-FS81.5',
      text: 'unpack a bag. I want to unpack my bags today.',
      src: a5,
    },
    {
      id: 'A205-D81.1',
      text: 'Those boxes look heavy. Do you need a hand?',
      src: a6,
    },
    {
      id: 'A205-D81.2',
      text: 'Yes, please. I can’t carry this one and open the door.',
      src: a7,
    },
    {
      id: 'A205-D81.3',
      text: 'I’ll open the door. Then I’ll carry the smaller box.',
      src: a8,
    },
    {
      id: 'A205-D81.4',
      text: 'Thank you! I’m going to put everything in the living room.',
      src: a9,
    },
    {
      id: 'A205-D81.5',
      text: 'Are you going to paint the walls today?',
      src: a10,
    },
    {
      id: 'A205-D81.6',
      text: 'No, that’s the plan for tomorrow. Today I just want to unpack.',
      src: a11,
    },
    {
      id: 'A205-D81.7',
      text: 'All right. I’ll move this chair so we have more space.',
      src: a12,
    },
    {
      id: 'A205-D81.8',
      text: 'That would be great. We can have coffee when we finish.',
      src: a13,
    },
    {
      id: 'A205-L81.1',
      text: 'Hi, Ana! A quick update about the move: the lift isn’t working this afternoon. We have to take the stairs. The heavy box can stay downstairs for now, but I need help carrying the small bags. Could you come at three? I’m still going to paint tomorrow, so there’s no need to bring paint today. Thank you!',
      src: a14,
    },
  ],
  images: { 'a2-05-vocabulary173': i0 },
}
export default prepared
