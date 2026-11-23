import data from './a1-07.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A107-FS81.0.mp3'
import a1 from '../assets/audio/A107-FS81.1.mp3'
import a2 from '../assets/audio/A107-FS81.2.mp3'
import a3 from '../assets/audio/A107-FS81.3.mp3'
import a4 from '../assets/audio/A107-FS81.4.mp3'
import a5 from '../assets/audio/A107-FS81.5.mp3'
import a6 from '../assets/audio/A107-D81.1.mp3'
import a7 from '../assets/audio/A107-D81.2.mp3'
import a8 from '../assets/audio/A107-D81.3.mp3'
import a9 from '../assets/audio/A107-D81.4.mp3'
import a10 from '../assets/audio/A107-D81.5.mp3'
import a11 from '../assets/audio/A107-D81.6.mp3'
import a12 from '../assets/audio/A107-L81.1.mp3'
import i0 from '../assets/a1-07-cover81.webp'
import i1 from '../assets/a1-07-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'A107-FS81.0',
      text: 'passport. Keep your passport with you.',
      src: a0,
    },
    { id: 'A107-FS81.1', text: 'suitcase. This is my suitcase.', src: a1 },
    { id: 'A107-FS81.2', text: 'plane. The plane is over there.', src: a2 },
    { id: 'A107-FS81.3', text: 'taxi. I need a taxi to the hotel.', src: a3 },
    { id: 'A107-FS81.4', text: 'bus. The bus is outside.', src: a4 },
    { id: 'A107-FS81.5', text: 'gate. Our gate is next to the café.', src: a5 },
    { id: 'A107-D81.1', text: 'Welcome! Where are you staying?', src: a6 },
    { id: 'A107-D81.2', text: 'I’m staying at the Park Hotel.', src: a7 },
    { id: 'A107-D81.3', text: 'And how long are you staying?', src: a8 },
    { id: 'A107-D81.4', text: 'For three days. Where is gate six?', src: a9 },
    { id: 'A107-D81.5', text: 'It’s on the left, next to the café.', src: a10 },
    {
      id: 'A107-D81.6',
      text: 'Thank you. Can you say that again, please?',
      src: a11,
    },
    {
      id: 'A107-L81.1',
      text: 'Hi, Ana! Your gate is different now. Please go to gate eight, not gate six. It’s next to the café. You have time for some water. Keep your passport with you. I’m near the gate. See you there!',
      src: a12,
    },
  ],
  images: { 'a1-07-cover81': i0, 'a1-07-vocabulary81': i1 },
}
export default prepared
