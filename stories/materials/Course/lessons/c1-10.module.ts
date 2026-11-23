import data from './c1-10.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/C110-FS81.0.mp3'
import a1 from '../assets/audio/C110-FS81.1.mp3'
import a2 from '../assets/audio/C110-FS81.2.mp3'
import a3 from '../assets/audio/C110-FS81.3.mp3'
import a4 from '../assets/audio/C110-FS81.4.mp3'
import a5 from '../assets/audio/C110-FS81.5.mp3'
import a6 from '../assets/audio/C110-D81.1.mp3'
import a7 from '../assets/audio/C110-D81.2.mp3'
import a8 from '../assets/audio/C110-D81.3.mp3'
import a9 from '../assets/audio/C110-D81.4.mp3'
import a10 from '../assets/audio/C110-D81.5.mp3'
import a11 from '../assets/audio/C110-D81.6.mp3'
import a12 from '../assets/audio/C110-D81.7.mp3'
import a13 from '../assets/audio/C110-D81.8.mp3'
import a14 from '../assets/audio/C110-D81.9.mp3'
import a15 from '../assets/audio/C110-D81.10.mp3'
import a16 from '../assets/audio/C110-D81.11.mp3'
import a17 from '../assets/audio/C110-D81.12.mp3'
import a18 from '../assets/audio/C110-L81.1.mp3'
import i0 from '../assets/c1-10-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'C110-FS81.0',
      text: 'an update. The update keeps the time and room unchanged.',
      src: a0,
    },
    {
      id: 'C110-FS81.1',
      text: 'a recipient. Choose the tone for the recipient.',
      src: a1,
    },
    {
      id: 'C110-FS81.2',
      text: 'a tone. A formal tone is not automatically clearer.',
      src: a2,
    },
    {
      id: 'C110-FS81.3',
      text: 'an acknowledgement. An acknowledgement is not an attendance commitment.',
      src: a3,
    },
    {
      id: 'C110-FS81.4',
      text: 'a call to action. The call to action needs a deadline.',
      src: a4,
    },
    {
      id: 'C110-FS81.5',
      text: 'a follow-up. A follow-up should address the missing answer.',
      src: a5,
    },
    {
      id: 'C110-D81.1',
      text: 'Who is this update for, and what do they need to do?',
      src: a6,
    },
    {
      id: 'C110-D81.2',
      text: 'One version is for a client, another for a friend. Both need to confirm attendance.',
      src: a7,
    },
    {
      id: 'C110-D81.3',
      text: 'What are the facts that must stay the same?',
      src: a8,
    },
    {
      id: 'C110-D81.4',
      text: 'The event moves from Friday the fourth to Monday the seventh of December. Time and room stay the same.',
      src: a9,
    },
    {
      id: 'C110-D81.5',
      text: 'And the response deadline? “Tomorrow” could become unclear if the message is read late.',
      src: a10,
    },
    {
      id: 'C110-D81.6',
      text: 'Then I’d write Friday the fourth at five, rather than rely on the sending date.',
      src: a11,
    },
    {
      id: 'C110-D81.7',
      text: 'Would a more formal opening make the client version more proficient?',
      src: a12,
    },
    {
      id: 'C110-D81.8',
      text: 'Not automatically. “I’m writing to let you know” is useful if the purpose is still easy to find.',
      src: a13,
    },
    { id: 'C110-D81.9', text: 'And for the friend?', src: a14 },
    {
      id: 'C110-D81.10',
      text: '“Quick update: it’s Monday now. Same time and room. Can you confirm by Friday at five?”',
      src: a15,
    },
    {
      id: 'C110-D81.11',
      text: 'That’s shorter, but it still keeps the action and deadline.',
      src: a16,
    },
    {
      id: 'C110-D81.12',
      text: 'Exactly. Changing the register shouldn’t change the commitment we ask for.',
      src: a17,
    },
    {
      id: 'C110-L81.1',
      text: 'Hi, Ana. I’ve read the event update, but I’m not sure what you need from me. When you say “please acknowledge”, do you only want me to confirm I’ve seen the message, or do you need to know whether I can attend on Monday? I can send either, but they aren’t the same commitment. Could you also give the response deadline as a day and time rather than “tomorrow”? I sometimes read messages after the day they were sent. The new date, same ten o’clock start and room two are clear. It’s the requested action that needs clarification, so there’s no need to rewrite every factual detail or make the wording more elaborate.',
      src: a18,
    },
  ],
  images: { 'c1-10-vocabulary81': i0 },
}
export default prepared
