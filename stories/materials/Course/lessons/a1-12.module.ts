import data from './a1-12.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A112-FS81.0.mp3'
import a1 from '../assets/audio/A112-FS81.1.mp3'
import a2 from '../assets/audio/A112-FS81.2.mp3'
import a3 from '../assets/audio/A112-FS81.3.mp3'
import a4 from '../assets/audio/A112-FS81.4.mp3'
import a5 from '../assets/audio/A112-FS81.5.mp3'
import a6 from '../assets/audio/A112-D81.1.mp3'
import a7 from '../assets/audio/A112-D81.2.mp3'
import a8 from '../assets/audio/A112-D81.3.mp3'
import a9 from '../assets/audio/A112-D81.4.mp3'
import a10 from '../assets/audio/A112-D81.5.mp3'
import a11 from '../assets/audio/A112-D81.6.mp3'
import a12 from '../assets/audio/A112-L81.1.mp3'
import i0 from '../assets/a1-12-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    { id: 'A112-FS81.0', text: 'sunny. It’s sunny at the park.', src: a0 },
    { id: 'A112-FS81.1', text: 'rainy. It’s rainy today.', src: a1 },
    { id: 'A112-FS81.2', text: 'cloudy. It’s cloudy this morning.', src: a2 },
    { id: 'A112-FS81.3', text: 'windy. It’s windy outside.', src: a3 },
    { id: 'A112-FS81.4', text: 'train. We can take the train.', src: a4 },
    { id: 'A112-FS81.5', text: 'ticket. Bring your ticket.', src: a5 },
    {
      id: 'A112-D81.1',
      text: 'It’s sunny today. Let’s go to the park.',
      src: a6,
    },
    { id: 'A112-D81.2', text: 'Good idea! What time can we meet?', src: a7 },
    {
      id: 'A112-D81.3',
      text: 'At ten, near the station. Is that OK?',
      src: a8,
    },
    { id: 'A112-D81.4', text: 'Yes. Is there a café in the park?', src: a9 },
    {
      id: 'A112-D81.5',
      text: 'There is. We can have lunch there. Bring your ticket.',
      src: a10,
    },
    {
      id: 'A112-D81.6',
      text: 'Great. I’ll see you near the station at ten.',
      src: a11,
    },
    {
      id: 'A112-L81.1',
      text: 'Hi, Ana! It’s raining near the park now. Let’s go to the museum today. Meet me at the museum entrance at ten, not at the station. We can take the bus. Bring your ticket. There’s a café inside. See you at ten!',
      src: a12,
    },
  ],
  images: { 'a1-12-vocabulary81': i0 },
}
export default prepared
