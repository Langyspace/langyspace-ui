import data from './a2-02.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A202-FS81.0.mp3'
import a1 from '../assets/audio/A202-FS81.1.mp3'
import a2 from '../assets/audio/A202-FS81.2.mp3'
import a3 from '../assets/audio/A202-FS81.3.mp3'
import a4 from '../assets/audio/A202-FS81.4.mp3'
import a5 from '../assets/audio/A202-FS81.5.mp3'
import a6 from '../assets/audio/A202-D81.1.mp3'
import a7 from '../assets/audio/A202-D81.2.mp3'
import a8 from '../assets/audio/A202-D81.3.mp3'
import a9 from '../assets/audio/A202-D81.4.mp3'
import a10 from '../assets/audio/A202-D81.5.mp3'
import a11 from '../assets/audio/A202-D81.6.mp3'
import a12 from '../assets/audio/A202-D81.7.mp3'
import a13 from '../assets/audio/A202-D81.8.mp3'
import a14 from '../assets/audio/A202-L81.1.mp3'
import i0 from '../assets/a2-02-vocabulary81.webp'
import w141clip0 from '../assets/audio/A202-W141.1.mp3'
import w141clip1 from '../assets/audio/A202-W141.2.mp3'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'A202-W141.1',
      text: 'Hi, Ana! You asked about my Sunday. I didn’t visit the museum in the end. The weather was beautiful, so I went to the beach instead.',
      src: w141clip0,
    },
    {
      id: 'A202-W141.2',
      text: 'I walked for an hour and took some photos. Then I had lunch with a friend. It was a quiet afternoon, but I really enjoyed it. What did you do?',
      src: w141clip1,
    },
    {
      id: 'A202-FS81.0',
      text: 'visited a museum. I visited a museum on Sunday.',
      src: a0,
    },
    {
      id: 'A202-FS81.1',
      text: 'went to a market. We went to a market in the morning.',
      src: a1,
    },
    {
      id: 'A202-FS81.2',
      text: 'had coffee. I had coffee with a friend.',
      src: a2,
    },
    {
      id: 'A202-FS81.3',
      text: 'took photos. We took photos by the river.',
      src: a3,
    },
    {
      id: 'A202-FS81.4',
      text: 'walked on the beach. She walked on the beach for an hour.',
      src: a4,
    },
    {
      id: 'A202-FS81.5',
      text: 'stayed at home. I stayed at home and watched a film.',
      src: a5,
    },
    {
      id: 'A202-D81.1',
      text: 'How was your weekend? Did you go anywhere?',
      src: a6,
    },
    {
      id: 'A202-D81.2',
      text: 'Yes! I went to a market on Saturday and had coffee with a friend.',
      src: a7,
    },
    {
      id: 'A202-D81.3',
      text: 'That sounds nice. Did you buy anything?',
      src: a8,
    },
    {
      id: 'A202-D81.4',
      text: 'Just some fruit. Then we took photos by the river.',
      src: a9,
    },
    { id: 'A202-D81.5', text: 'And what did you do on Sunday?', src: a10 },
    {
      id: 'A202-D81.6',
      text: 'I stayed at home. I was tired, so I watched a film.',
      src: a11,
    },
    {
      id: 'A202-D81.7',
      text: 'Was it good? I’m looking for something to watch.',
      src: a12,
    },
    {
      id: 'A202-D81.8',
      text: 'It was really funny! What about you? How was your weekend?',
      src: a13,
    },
    {
      id: 'A202-L81.1',
      text: 'Hi, Ana! You asked about my Sunday. I didn’t visit the museum in the end. The weather was beautiful, so I went to the beach instead. I walked for an hour and took some photos. Then I had lunch with a friend. It was a quiet afternoon, but I really enjoyed it. What did you do?',
      src: a14,
    },
  ],
  images: { 'a2-02-vocabulary81': i0 },
}
export default prepared
