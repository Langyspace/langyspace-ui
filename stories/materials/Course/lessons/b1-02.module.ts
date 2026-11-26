import data from './b1-02.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B102-FS81.0.mp3'
import a1 from '../assets/audio/B102-FS81.1.mp3'
import a2 from '../assets/audio/B102-FS81.2.mp3'
import a3 from '../assets/audio/B102-FS81.3.mp3'
import a4 from '../assets/audio/B102-FS81.4.mp3'
import a5 from '../assets/audio/B102-FS81.5.mp3'
import a6 from '../assets/audio/B102-D81.1.mp3'
import a7 from '../assets/audio/B102-D81.2.mp3'
import a8 from '../assets/audio/B102-D81.3.mp3'
import a9 from '../assets/audio/B102-D81.4.mp3'
import a10 from '../assets/audio/B102-D81.5.mp3'
import a11 from '../assets/audio/B102-D81.6.mp3'
import a12 from '../assets/audio/B102-D81.7.mp3'
import a13 from '../assets/audio/B102-D81.8.mp3'
import a14 from '../assets/audio/B102-L81.1.mp3'
import i0 from '../assets/b1-02-vocabulary81.webp'
import evidence123 from '../assets/b1-02-neighbourhood123.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B102-FS81.0',
      text: 'a cinema. There used to be a cinema on this corner.',
      src: a0,
    },
    {
      id: 'B102-FS81.1',
      text: 'a playground. The playground still has its old swings.',
      src: a1,
    },
    {
      id: 'B102-FS81.2',
      text: 'a corner shop. I used to buy bread at the corner shop.',
      src: a2,
    },
    {
      id: 'B102-FS81.3',
      text: 'a square. The factory was beside the square.',
      src: a3,
    },
    {
      id: 'B102-FS81.4',
      text: 'a factory. My neighbour used to work at the factory.',
      src: a4,
    },
    {
      id: 'B102-FS81.5',
      text: 'an apartment block. There’s an apartment block on the old site now.',
      src: a5,
    },
    {
      id: 'B102-D81.1',
      text: 'I haven’t been here for years. Wasn’t there a cinema on this corner?',
      src: a6,
    },
    {
      id: 'B102-D81.2',
      text: 'Yes, there used to be. It’s a pharmacy now.',
      src: a7,
    },
    {
      id: 'B102-D81.3',
      text: 'That’s a shame. Did you use to go there?',
      src: a8,
    },
    {
      id: 'B102-D81.4',
      text: 'Most Saturdays. The tickets were cheap, and I could walk home afterwards.',
      src: a9,
    },
    {
      id: 'B102-D81.5',
      text: 'At least the playground is still here. It looks much greener.',
      src: a10,
    },
    {
      id: 'B102-D81.6',
      text: 'It is. They’ve added trees, but they haven’t removed the old swings.',
      src: a11,
    },
    {
      id: 'B102-D81.7',
      text: 'Do you think the neighbourhood is better now?',
      src: a12,
    },
    {
      id: 'B102-D81.8',
      text: 'In some ways. There are more places to live, but I miss the small shops.',
      src: a13,
    },
    {
      id: 'B102-L81.1',
      text: 'Hi, Ana! I checked another change on our example map. There used to be a factory beside the square. It’s an apartment block now, with a small garden in front. The playground is still in the same place. A former resident told me he used to work at the factory, so he misses it, even though he likes the cleaner street. Would you show him what has changed and ask which part he remembers best?',
      src: a14,
    },
  ],
  images: { 'b1-02-neighbourhood123': evidence123, 'b1-02-vocabulary81': i0 },
}
export default prepared
