import data from './a1-10.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A110-FS81.0.mp3'
import a1 from '../assets/audio/A110-FS81.1.mp3'
import a2 from '../assets/audio/A110-FS81.2.mp3'
import a3 from '../assets/audio/A110-FS81.3.mp3'
import a4 from '../assets/audio/A110-FS81.4.mp3'
import a5 from '../assets/audio/A110-FS81.5.mp3'
import a6 from '../assets/audio/A110-D81.1.mp3'
import a7 from '../assets/audio/A110-D81.2.mp3'
import a8 from '../assets/audio/A110-D81.3.mp3'
import a9 from '../assets/audio/A110-D81.4.mp3'
import a10 from '../assets/audio/A110-D81.5.mp3'
import a11 from '../assets/audio/A110-D81.6.mp3'
import a12 from '../assets/audio/A110-L81.1.mp3'
import i0 from '../assets/a1-10-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    { id: 'A110-FS81.0', text: 'coffee. I’d like a coffee, please.', src: a0 },
    { id: 'A110-FS81.1', text: 'tea. Can I have some tea?', src: a1 },
    { id: 'A110-FS81.2', text: 'water. Some water, please.', src: a2 },
    { id: 'A110-FS81.3', text: 'juice. I’d like an orange juice.', src: a3 },
    {
      id: 'A110-FS81.4',
      text: 'sandwich. This sandwich is for my friend.',
      src: a4,
    },
    { id: 'A110-FS81.5', text: 'cake. Can I have a piece of cake?', src: a5 },
    { id: 'A110-D81.1', text: 'Hello! What would you like?', src: a6 },
    {
      id: 'A110-D81.2',
      text: 'I’d like some tea and a piece of cake, please.',
      src: a7,
    },
    {
      id: 'A110-D81.3',
      text: 'Of course. Would you like milk in your tea?',
      src: a8,
    },
    { id: 'A110-D81.4', text: 'No milk, thank you. How much is it?', src: a9 },
    { id: 'A110-D81.5', text: 'It’s six dollars. You can pay here.', src: a10 },
    { id: 'A110-D81.6', text: 'Here you are. Thank you!', src: a11 },
    {
      id: 'A110-L81.1',
      text: 'Hi, Ana! Can you order something for me? I’d like some tea and a piece of cake, please. No milk in the tea. I’m outside the café, near the door. I have six dollars. Thank you! I’ll see you in a minute.',
      src: a12,
    },
  ],
  images: { 'a1-10-vocabulary81': i0 },
}
export default prepared
