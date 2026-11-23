import data from './b1-11.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B111-FS81.0.mp3'
import a1 from '../assets/audio/B111-FS81.1.mp3'
import a2 from '../assets/audio/B111-FS81.2.mp3'
import a3 from '../assets/audio/B111-FS81.3.mp3'
import a4 from '../assets/audio/B111-FS81.4.mp3'
import a5 from '../assets/audio/B111-FS81.5.mp3'
import a6 from '../assets/audio/B111-D81.1.mp3'
import a7 from '../assets/audio/B111-D81.2.mp3'
import a8 from '../assets/audio/B111-D81.3.mp3'
import a9 from '../assets/audio/B111-D81.4.mp3'
import a10 from '../assets/audio/B111-D81.5.mp3'
import a11 from '../assets/audio/B111-D81.6.mp3'
import a12 from '../assets/audio/B111-D81.7.mp3'
import a13 from '../assets/audio/B111-D81.8.mp3'
import a14 from '../assets/audio/B111-L81.1.mp3'
import i0 from '../assets/b1-11-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B111-FS81.0',
      text: 'a guest. Nina is a guest at the party.',
      src: a0,
    },
    {
      id: 'B111-FS81.1',
      text: 'a host. Alex is the host in the green shirt.',
      src: a1,
    },
    {
      id: 'B111-FS81.2',
      text: 'a couple. A couple is dancing near the table.',
      src: a2,
    },
    {
      id: 'B111-FS81.3',
      text: 'a speech. Let’s wait until the speech finishes.',
      src: a3,
    },
    {
      id: 'B111-FS81.4',
      text: 'a dance floor. The drinks table is beside the dance floor.',
      src: a4,
    },
    {
      id: 'B111-FS81.5',
      text: 'a celebration. It’s a celebration with friends.',
      src: a5,
    },
    {
      id: 'B111-D81.1',
      text: 'Who’s the woman who’s dancing with Leo?',
      src: a6,
    },
    {
      id: 'B111-D81.2',
      text: 'That’s Nina. She helped organise the party.',
      src: a7,
    },
    {
      id: 'B111-D81.3',
      text: 'Is she the person who organised the music?',
      src: a8,
    },
    {
      id: 'B111-D81.4',
      text: 'Yes. And the person in the green shirt by the table is Alex, the host.',
      src: a9,
    },
    {
      id: 'B111-D81.5',
      text: 'I’d like to thank Alex. Which table do you mean?',
      src: a10,
    },
    {
      id: 'B111-D81.6',
      text: 'The table where the drinks are. It’s next to the dance floor.',
      src: a11,
    },
    {
      id: 'B111-D81.7',
      text: 'Great. Could you introduce us? I don’t want to interrupt the speech.',
      src: a12,
    },
    {
      id: 'B111-D81.8',
      text: 'Of course. Let’s wait until it finishes, then I’ll take you over.',
      src: a13,
    },
    {
      id: 'B111-L81.1',
      text: 'Hi, Ana. Before you introduce me at our example celebration, could you help me find Alex? Alex is the host, the person in the green shirt standing by the drinks table. I don’t mean Nina, who organised the music and is near the dance floor. The speech is almost finished, so we can go over afterwards. Please introduce me using the facts on Alex’s card rather than guessing a job or a family relationship.',
      src: a14,
    },
  ],
  images: { 'b1-11-vocabulary81': i0 },
}
export default prepared
