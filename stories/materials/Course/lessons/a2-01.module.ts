import data from './a2-01.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A201-FS81.0.mp3'
import a1 from '../assets/audio/A201-FS81.1.mp3'
import a2 from '../assets/audio/A201-FS81.2.mp3'
import a3 from '../assets/audio/A201-FS81.3.mp3'
import a4 from '../assets/audio/A201-FS81.4.mp3'
import a5 from '../assets/audio/A201-FS81.5.mp3'
import a6 from '../assets/audio/legacy-A201-a201.dialogue.anna-ben.01.mp3'
import a7 from '../assets/audio/legacy-A201-a201.dialogue.anna-ben.02.mp3'
import a8 from '../assets/audio/legacy-A201-a201.dialogue.anna-ben.03.mp3'
import a9 from '../assets/audio/legacy-A201-a201.dialogue.anna-ben.04.mp3'
import a10 from '../assets/audio/legacy-A201-a201.dialogue.anna-ben.05.mp3'
import a11 from '../assets/audio/legacy-A201-a201.dialogue.anna-ben.06.mp3'
import a12 from '../assets/audio/legacy-A201-a201.listening.anna.01.mp3'
import i0 from '../assets/a2-01-usually-today81.webp'
import i1 from '../assets/a2-01-vocabulary173.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'A201-FS81.0',
      text: 'make coffee. I’m making coffee right now.',
      src: a0,
    },
    {
      id: 'A201-FS81.1',
      text: 'cook lunch. They’re cooking lunch in the kitchen.',
      src: a1,
    },
    { id: 'A201-FS81.2', text: 'watch TV. My sister is watching TV.', src: a2 },
    {
      id: 'A201-FS81.3',
      text: 'listen to music. I’m listening to music at home.',
      src: a3,
    },
    {
      id: 'A201-FS81.4',
      text: 'work from home. She usually works from home on Fridays.',
      src: a4,
    },
    {
      id: 'A201-FS81.5',
      text: 'go for a walk. We’re going for a walk this afternoon.',
      src: a5,
    },
    {
      id: 'a201.dialogue.anna-ben.01',
      text: 'Hey! What are you doing?',
      src: a6,
    },
    {
      id: 'a201.dialogue.anna-ben.02',
      text: "I'm cooking dinner. What about you?",
      src: a7,
    },
    { id: 'a201.dialogue.anna-ben.03', text: "I'm watching a movie.", src: a8 },
    {
      id: 'a201.dialogue.anna-ben.04',
      text: 'Nice! Do you usually watch movies at night?',
      src: a9,
    },
    {
      id: 'a201.dialogue.anna-ben.05',
      text: 'Yes, but I usually read before bed. Do you cook every day?',
      src: a10,
    },
    {
      id: 'a201.dialogue.anna-ben.06',
      text: "Not really. I usually order food, but today I'm making pasta.",
      src: a11,
    },
    {
      id: 'a201.listening.anna.01',
      text: "Hey! What are you doing? I'm at home right now. I'm making some coffee and listening to music. I usually go to the gym in the morning, but today I'm just relaxing. My sister is watching TV, and my parents are cooking lunch. What about you? What are you doing today?",
      src: a12,
    },
  ],
  images: { 'a2-01-usually-today81': i0, 'a2-01-vocabulary173': i1 },
}
export default prepared
