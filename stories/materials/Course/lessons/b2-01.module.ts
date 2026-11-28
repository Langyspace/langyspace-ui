import contextual161 from '../assets/b2-01-vocabulary161.webp'
import data from './b2-01.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B201-FS81.0.mp3'
import a1 from '../assets/audio/B201-FS81.1.mp3'
import a2 from '../assets/audio/B201-FS81.2.mp3'
import a3 from '../assets/audio/B201-FS81.3.mp3'
import a4 from '../assets/audio/B201-FS81.4.mp3'
import a5 from '../assets/audio/B201-FS81.5.mp3'
import a6 from '../assets/audio/B201-FS81.6.mp3'
import a7 from '../assets/audio/legacy-B201-D.1.mp3'
import a8 from '../assets/audio/legacy-B201-D.2.mp3'
import a9 from '../assets/audio/legacy-B201-D.3.mp3'
import a10 from '../assets/audio/legacy-B201-D.4.mp3'
import a11 from '../assets/audio/legacy-B201-D.5.mp3'
import a12 from '../assets/audio/legacy-B201-D.6.mp3'
import a13 from '../assets/audio/legacy-B201-D.7.mp3'
import a14 from '../assets/audio/legacy-B201-D.8.mp3'
import a15 from '../assets/audio/legacy-B201-D.9.mp3'
import a16 from '../assets/audio/legacy-B201-D.10.mp3'
import a17 from '../assets/audio/legacy-B201-D.11.mp3'
import a18 from '../assets/audio/legacy-B201-D.12.mp3'
import a19 from '../assets/audio/legacy-B201-b201-raj-message.mp3'
import i0 from '../assets/b2-01-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B201-FS81.0',
      text: 'run out of battery. My phone ran out of battery after I’d used it as a map.',
      src: a0,
    },
    {
      id: 'B201-FS81.1',
      text: 'get lost. I got lost on the way to the hotel.',
      src: a1,
    },
    {
      id: 'B201-FS81.2',
      text: 'borrow. Could I borrow your power bank?',
      src: a2,
    },
    {
      id: 'B201-FS81.3',
      text: 'lend. A woman lent me her power bank.',
      src: a3,
    },
    {
      id: 'B201-FS81.4',
      text: 'an address. The address was in Raj’s message.',
      src: a4,
    },
    {
      id: 'B201-FS81.5',
      text: 'by then. By then, they’d been waiting for an hour.',
      src: a5,
    },
    {
      id: 'B201-FS81.6',
      text: 'eventually. Eventually, I arrived at the restaurant.',
      src: a6,
    },
    { id: 'D.1', text: 'So, how was New York?', src: a7 },
    {
      id: 'D.2',
      text: 'Pretty good, but on the second day, my phone died at four in the afternoon.',
      src: a8,
    },
    { id: 'D.3', text: 'Oh no! Why?', src: a9 },
    {
      id: 'D.4',
      text: 'I’d been using it as a map all day, and I didn’t notice how low the battery was. And I’d left my charger at the hotel.',
      src: a10,
    },
    { id: 'D.5', text: 'Why didn’t you go back to the hotel?', src: a11 },
    {
      id: 'D.6',
      text: 'I tried, but I got lost. And the team dinner was at seven. The address was in a message from Raj!',
      src: a12,
    },
    { id: 'D.7', text: 'So what did you do?', src: a13 },
    {
      id: 'D.8',
      text: 'I asked a doorman for help, and he told me about a café. But there were no free outlets.',
      src: a14,
    },
    { id: 'D.9', text: 'Oh no. And then?', src: a15 },
    {
      id: 'D.10',
      text: 'I’d been waiting there alone for twenty minutes when a woman lent me her power bank. Luckily, I had my cable.',
      src: a16,
    },
    { id: 'D.11', text: 'So did you make it to the dinner?', src: a17 },
    {
      id: 'D.12',
      text: 'Eventually, yes. I caught a taxi and got there at eight. By then, they’d been waiting for an hour!',
      src: a18,
    },
    {
      id: 'b201-raj-message',
      text: 'Hi Ana, it’s Raj. It’s seven twenty. We’d been waiting for you at the door for fifteen minutes, so we got a table. I’ve called you three times, but no answer! Sarah thinks you got lost in Times Square. The food here is pretty good, so we ordered a pizza for you. You need a power bank, Ana! Call me when you get this, or just come straight to the restaurant, OK?',
      src: a19,
    },
  ],
  images: {
    'b2-01-vocabulary161': contextual161,
    'b2-01-vocabulary81': i0,
  },
}
export default prepared
