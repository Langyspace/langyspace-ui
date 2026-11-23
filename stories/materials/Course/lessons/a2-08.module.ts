import data from './a2-08.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/A208-FS81.0.mp3'
import a1 from '../assets/audio/A208-FS81.1.mp3'
import a2 from '../assets/audio/A208-FS81.2.mp3'
import a3 from '../assets/audio/A208-FS81.3.mp3'
import a4 from '../assets/audio/A208-FS81.4.mp3'
import a5 from '../assets/audio/A208-FS81.5.mp3'
import a6 from '../assets/audio/A208-D81.1.mp3'
import a7 from '../assets/audio/A208-D81.2.mp3'
import a8 from '../assets/audio/A208-D81.3.mp3'
import a9 from '../assets/audio/A208-D81.4.mp3'
import a10 from '../assets/audio/A208-D81.5.mp3'
import a11 from '../assets/audio/A208-D81.6.mp3'
import a12 from '../assets/audio/A208-D81.7.mp3'
import a13 from '../assets/audio/A208-D81.8.mp3'
import a14 from '../assets/audio/A208-L81.1.mp3'
import i0 from '../assets/a2-08-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'A208-FS81.0',
      text: 'take a tram. Have you ever taken a tram?',
      src: a0,
    },
    {
      id: 'A208-FS81.1',
      text: 'visit a castle. I visited a castle last year.',
      src: a1,
    },
    {
      id: 'A208-FS81.2',
      text: 'try a pastel de nata. You should try a pastel de nata.',
      src: a2,
    },
    {
      id: 'A208-FS81.3',
      text: 'see the tiles. We saw beautiful tiles in the city.',
      src: a3,
    },
    {
      id: 'A208-FS81.4',
      text: 'watch the sunset. I’d like to watch the sunset.',
      src: a4,
    },
    {
      id: 'A208-FS81.5',
      text: 'visit the aquarium. I haven’t visited the aquarium yet.',
      src: a5,
    },
    {
      id: 'A208-D81.1',
      text: 'Have you ever been to Lisbon? I’m looking for ideas.',
      src: a6,
    },
    {
      id: 'A208-D81.2',
      text: 'Yes, I went last year. I took a tram and visited a castle.',
      src: a7,
    },
    { id: 'A208-D81.3', text: 'Which did you enjoy more?', src: a8 },
    {
      id: 'A208-D81.4',
      text: 'The castle. The view was beautiful, but there were a lot of people.',
      src: a9,
    },
    { id: 'A208-D81.5', text: 'Have you ever visited the aquarium?', src: a10 },
    {
      id: 'A208-D81.6',
      text: 'No, I haven’t. I’d like to go next time.',
      src: a11,
    },
    {
      id: 'A208-D81.7',
      text: 'Me too. I love watching the fish. We could go together.',
      src: a12,
    },
    {
      id: 'A208-D81.8',
      text: 'Good idea. And you should try a pastel de nata while you’re there.',
      src: a13,
    },
    {
      id: 'A208-L81.1',
      text: 'Hi, Ana! A quick update from Lisbon. I’ve tried a pastel de nata now, and I loved it. I had one at a small café this morning. I haven’t visited the aquarium yet. I’m thinking of going tomorrow, but I haven’t booked a ticket. Have you ever been? I’d love to know what you thought of it before I decide.',
      src: a14,
    },
  ],
  images: { 'a2-08-vocabulary81': i0 },
}
export default prepared
