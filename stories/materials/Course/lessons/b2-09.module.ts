import data from './b2-09.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B209-FS81.0.mp3'
import a1 from '../assets/audio/B209-FS81.1.mp3'
import a2 from '../assets/audio/B209-FS81.2.mp3'
import a3 from '../assets/audio/B209-FS81.3.mp3'
import a4 from '../assets/audio/B209-FS81.4.mp3'
import a5 from '../assets/audio/B209-FS81.5.mp3'
import a6 from '../assets/audio/B209-D81.1.mp3'
import a7 from '../assets/audio/B209-D81.2.mp3'
import a8 from '../assets/audio/B209-D81.3.mp3'
import a9 from '../assets/audio/B209-D81.4.mp3'
import a10 from '../assets/audio/B209-D81.5.mp3'
import a11 from '../assets/audio/B209-D81.6.mp3'
import a12 from '../assets/audio/B209-D81.7.mp3'
import a13 from '../assets/audio/B209-D81.8.mp3'
import a14 from '../assets/audio/B209-D81.9.mp3'
import a15 from '../assets/audio/B209-D81.10.mp3'
import a16 from '../assets/audio/B209-D81.11.mp3'
import a17 from '../assets/audio/B209-D81.12.mp3'
import a18 from '../assets/audio/B209-L81.1.mp3'
import i0 from '../assets/b2-09-vocabulary81.webp'
import w141clip0 from '../assets/audio/B209-W141.1.mp3'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B209-W141.1',
      text: 'Hi, Ana. I’ve checked the flat. The door is locked, the stove is off, and the iron is unplugged. The window was open, so I’ve closed it as you asked. I haven’t watered the plants yet because you wanted to decide the timing first. Would you like me to water them today or come back on Saturday? I can do either. Please send that one instruction when you have a moment. Everything else on the list has been checked, so there’s no need to ask me to repeat the whole routine.',
      src: w141clip0,
    },
    {
      id: 'B209-FS81.0',
      text: 'lock the door. I don’t remember locking the door.',
      src: a0,
    },
    {
      id: 'B209-FS81.1',
      text: 'turn off the stove. I remember turning off the stove.',
      src: a1,
    },
    {
      id: 'B209-FS81.2',
      text: 'unplug the iron. Did you remember to unplug the iron?',
      src: a2,
    },
    {
      id: 'B209-FS81.3',
      text: 'close the window. Please close the window if it’s open.',
      src: a3,
    },
    {
      id: 'B209-FS81.4',
      text: 'water the plants. Wait before you water the plants.',
      src: a4,
    },
    {
      id: 'B209-FS81.5',
      text: 'leave a spare key. I left a spare key with a trusted friend.',
      src: a5,
    },
    {
      id: 'B209-D81.1',
      text: 'I’m on my way, but I don’t remember locking the door.',
      src: a6,
    },
    {
      id: 'B209-D81.2',
      text: 'You left a spare key with me. Would you like me to check?',
      src: a7,
    },
    {
      id: 'B209-D81.3',
      text: 'Yes, please. I remember turning off the stove, but I was distracted at the door.',
      src: a8,
    },
    {
      id: 'B209-D81.4',
      text: 'Did you remember to unplug the iron as well?',
      src: a9,
    },
    {
      id: 'B209-D81.5',
      text: 'I did. I can picture putting it away. The window is less clear in my memory.',
      src: a10,
    },
    {
      id: 'B209-D81.6',
      text: 'All right. I’ll check the door and window, rather than assuming they’re open.',
      src: a11,
    },
    {
      id: 'B209-D81.7',
      text: 'If the window is open, please close it. The plants can stay where they are.',
      src: a12,
    },
    {
      id: 'B209-D81.8',
      text: 'Do you want me to water them while I’m there?',
      src: a13,
    },
    {
      id: 'B209-D81.9',
      text: 'Let me think about the day first. I don’t want you to do it twice unnecessarily.',
      src: a14,
    },
    {
      id: 'B209-D81.10',
      text: 'I’ll send you a clear update after checking, and wait for that instruction.',
      src: a15,
    },
    {
      id: 'B209-D81.11',
      text: 'Thanks. Please say what you’ve checked, not just that everything looks fine.',
      src: a16,
    },
    {
      id: 'B209-D81.12',
      text: 'Of course. Then we’ll know what’s done and what still needs a decision.',
      src: a17,
    },
    {
      id: 'B209-L81.1',
      text: 'Hi, Ana. I’ve checked the flat. The door is locked, the stove is off, and the iron is unplugged. The window was open, so I’ve closed it as you asked. I haven’t watered the plants yet because you wanted to decide the timing first. Would you like me to water them today or come back on Saturday? I can do either. Please send that one instruction when you have a moment. Everything else on the list has been checked, so there’s no need to ask me to repeat the whole routine.',
      src: a18,
    },
  ],
  images: { 'b2-09-vocabulary81': i0 },
}
export default prepared
