import data from './b1-01.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import reading145 from '../assets/audio/B101-R145.1.mp3'
import a0 from '../assets/audio/B101-FS81.0.mp3'
import a1 from '../assets/audio/B101-FS81.1.mp3'
import a2 from '../assets/audio/B101-FS81.2.mp3'
import a3 from '../assets/audio/B101-FS81.3.mp3'
import a4 from '../assets/audio/B101-FS81.4.mp3'
import a5 from '../assets/audio/B101-FS81.5.mp3'
import a6 from '../assets/audio/legacy-B101-D.1.mp3'
import a7 from '../assets/audio/legacy-B101-D.2.mp3'
import a8 from '../assets/audio/legacy-B101-D.3.mp3'
import a9 from '../assets/audio/legacy-B101-D.4.mp3'
import a10 from '../assets/audio/legacy-B101-D.5.mp3'
import a11 from '../assets/audio/legacy-B101-D.6.mp3'
import a12 from '../assets/audio/legacy-B101-D.7.mp3'
import a13 from '../assets/audio/legacy-B101-D.8.mp3'
import a14 from '../assets/audio/legacy-B101-D.9.mp3'
import a15 from '../assets/audio/legacy-B101-D.10.mp3'
import a16 from '../assets/audio/legacy-B101-D.11.mp3'
import a17 from '../assets/audio/B101-L81.1.mp3'
import i0 from '../assets/b1-01-vocabulary81.webp'
import workOut136 from '../assets/b1-01-work-out136.webp'
import decorateRoom143 from '../assets/b1-01-decorate-room143-v2.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B101-R145.1',
      text: 'Kim has just come back from visiting her family in Korea. Tomorrow, she’s coming over for coffee. I’ve been painting my flat all week, so I have a lot to show her. I’ve finished the living room and the kitchen, but I haven’t started the bedroom yet.\n\nI’ve also been running every morning for two weeks. Getting up early was hard at first, but now I enjoy it. In the evenings, I’ve been baking. I’ve made three cakes this week, and I’m saving a slice for Kim.\n\nIt’s been a productive week, but I haven’t had much time for myself. This weekend, I want to take a break from painting and catch up with my friend.',
      src: reading145,
    },
    {
      id: 'B101-FS81.0',
      text: 'work overtime. I’ve been working overtime this week.',
      src: a0,
    },
    {
      id: 'B101-FS81.1',
      text: 'catch up. Let’s catch up over coffee.',
      src: a1,
    },
    {
      id: 'B101-FS81.2',
      text: 'take a break. I need to take a break from painting.',
      src: a2,
    },
    {
      id: 'B101-FS81.3',
      text: 'work out. I’ve been working out in the mornings.',
      src: a3,
    },
    {
      id: 'B101-FS81.4',
      text: 'decorate a room. She’s been decorating a room all week.',
      src: a4,
    },
    {
      id: 'B101-FS81.5',
      text: 'have time for yourself. Have you had time for yourself lately?',
      src: a5,
    },
    {
      id: 'D.1',
      text: 'Hi, Ana! I’m back! Wow… your living room is blue!',
      src: a6,
    },
    {
      id: 'D.2',
      text: 'Welcome back! Yeah, I’ve been painting all week.',
      src: a7,
    },
    { id: 'D.3', text: 'It’s great! Have you finished?', src: a8 },
    {
      id: 'D.4',
      text: 'Almost. I’ve painted both rooms, the living room and the kitchen. The bedroom is next.',
      src: a9,
    },
    { id: 'D.5', text: 'And your shoes! Have you been running?', src: a10 },
    {
      id: 'D.6',
      text: 'Yes! I’ve been running every morning for two weeks.',
      src: a11,
    },
    {
      id: 'D.7',
      text: 'Every morning? Wow. And there’s a cake on the table. You’ve even been baking!',
      src: a12,
    },
    {
      id: 'D.8',
      text: 'Ha! Yes. I’ve baked three cakes this week. Anyway, how was Korea?',
      src: a13,
    },
    {
      id: 'D.9',
      text: 'Great! I visited my family and ate a lot. But I have jet lag. I’ve been sleeping all day!',
      src: a14,
    },
    {
      id: 'D.10',
      text: 'Oh no! You seem tired. Here, have some cake.',
      src: a15,
    },
    { id: 'D.11', text: 'Of course! I always say yes to cake.', src: a16 },
    {
      id: 'B101-L81.1',
      text: 'Hi, Ana! It’s Leo. We’ve finished the invitations for the party, so that’s one thing off the list. We’ve also seen eleven possible places now, but we haven’t chosen one yet. We’ve been visiting places every weekend for three weeks, and it’s taking longer than I expected. Carla wants space for dancing, while I’d be happy with a barbecue in the park. Could you help us think about what matters most before we book another visit? The invitations are ready, but the venue decision is still open.',
      src: a17,
    },
  ],
  images: {
    'b1-01-vocabulary81': i0,
    'b1-01-work-out136': workOut136,
    'b1-01-decorate-room143-v2': decorateRoom143,
  },
}
export default prepared
