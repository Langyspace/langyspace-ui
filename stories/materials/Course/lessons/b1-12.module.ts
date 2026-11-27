import data from './b1-12.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B112-FS81.0.mp3'
import a1 from '../assets/audio/B112-FS81.1.mp3'
import a2 from '../assets/audio/B112-FS81.2.mp3'
import a3 from '../assets/audio/B112-FS81.3.mp3'
import a4 from '../assets/audio/B112-FS81.4.mp3'
import a5 from '../assets/audio/B112-FS81.5.mp3'
import a6 from '../assets/audio/B112-D81.1.mp3'
import a7 from '../assets/audio/B112-D81.2.mp3'
import a8 from '../assets/audio/B112-D81.3.mp3'
import a9 from '../assets/audio/B112-D81.4.mp3'
import a10 from '../assets/audio/B112-D81.5.mp3'
import a11 from '../assets/audio/B112-D81.6.mp3'
import a12 from '../assets/audio/B112-D81.7.mp3'
import a13 from '../assets/audio/B112-D81.8.mp3'
import a14 from '../assets/audio/B112-L81.1.mp3'
import i0 from '../assets/b1-12-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B112-FS81.0',
      text: 'a commute. A long commute changes the working day.',
      src: a0,
    },
    {
      id: 'B112-FS81.1',
      text: 'a distraction. Noise can be a distraction.',
      src: a1,
    },
    {
      id: 'B112-FS81.2',
      text: 'a flexible schedule. A flexible schedule needs clear expectations.',
      src: a2,
    },
    {
      id: 'B112-FS81.3',
      text: 'teamwork. Regular contact can support teamwork.',
      src: a3,
    },
    {
      id: 'B112-FS81.4',
      text: 'a workspace. I need a quiet workspace for this task.',
      src: a4,
    },
    {
      id: 'B112-FS81.5',
      text: 'a work-life balance. A predictable routine helps my work-life balance.',
      src: a5,
    },
    {
      id: 'B112-D81.1',
      text: 'Do you work better at home or in an office?',
      src: a6,
    },
    {
      id: 'B112-D81.2',
      text: 'At home, usually, because I can concentrate without interruptions.',
      src: a7,
    },
    {
      id: 'B112-D81.3',
      text: 'I understand that. However, I miss the quick conversations with the team.',
      src: a8,
    },
    {
      id: 'B112-D81.4',
      text: 'Me too. Although I prefer home, I wouldn’t want to work alone all week.',
      src: a9,
    },
    { id: 'B112-D81.5', text: 'Would a hybrid routine solve that?', src: a10 },
    {
      id: 'B112-D81.6',
      text: 'It could, if we agree on the office days. Otherwise we might all come in separately.',
      src: a11,
    },
    {
      id: 'B112-D81.7',
      text: 'Good point. We could have two shared team days and keep the rest flexible.',
      src: a12,
    },
    {
      id: 'B112-D81.8',
      text: 'That’s worth trying. Let’s check whether it gives us enough quiet time too.',
      src: a13,
    },
    {
      id: 'B112-L81.1',
      text: 'Hi, Ana. Working at home helps me concentrate, and two office days make it easier to speak to the team. However, the office days have been changing at short notice, so planning childcare and travel has become difficult. I don’t want to stop seeing colleagues. I’d like to keep the benefit but make the schedule more predictable. What would you suggest I ask the team to agree on? I don’t think one routine has to be best for everyone.',
      src: a14,
    },
  ],
  images: { 'b1-12-vocabulary81': i0 },
}
export default prepared
