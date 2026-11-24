import data from './b1-09.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B109-FS81.0.mp3'
import a1 from '../assets/audio/B109-FS81.1.mp3'
import a2 from '../assets/audio/B109-FS81.2.mp3'
import a3 from '../assets/audio/B109-FS81.3.mp3'
import a4 from '../assets/audio/B109-FS81.4.mp3'
import a5 from '../assets/audio/B109-FS81.5.mp3'
import a6 from '../assets/audio/B109-D81.1.mp3'
import a7 from '../assets/audio/B109-D81.2.mp3'
import a8 from '../assets/audio/B109-D81.3.mp3'
import a9 from '../assets/audio/B109-D81.4.mp3'
import a10 from '../assets/audio/B109-D81.5.mp3'
import a11 from '../assets/audio/B109-D81.6.mp3'
import a12 from '../assets/audio/B109-D81.7.mp3'
import a13 from '../assets/audio/B109-D81.8.mp3'
import a14 from '../assets/audio/B109-L81.1.mp3'
import i0 from '../assets/b1-09-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B109-FS81.0',
      text: 'a bicycle lock. The bicycle lock was beside the rack.',
      src: a0,
    },
    {
      id: 'B109-FS81.1',
      text: 'a serial number. The serial number hasn’t been checked.',
      src: a1,
    },
    {
      id: 'B109-FS81.2',
      text: 'a helmet. The helmet is still at home.',
      src: a2,
    },
    {
      id: 'B109-FS81.3',
      text: 'a bike rack. The bike was taken from the bike rack.',
      src: a3,
    },
    {
      id: 'B109-FS81.4',
      text: 'a report. An update has been added to the report.',
      src: a4,
    },
    {
      id: 'B109-FS81.5',
      text: 'lost property. Ask at lost property before assuming it was stolen.',
      src: a5,
    },
    { id: 'B109-D81.1', text: 'What happened? You look worried.', src: a6 },
    {
      id: 'B109-D81.2',
      text: 'My bike was taken from the rack near the station. I last saw it at six.',
      src: a7,
    },
    { id: 'B109-D81.3', text: 'Have you reported it?', src: a8 },
    {
      id: 'B109-D81.4',
      text: 'Yes. They asked for a description and the serial number.',
      src: a9,
    },
    { id: 'B109-D81.5', text: 'How can they identify it?', src: a10 },
    {
      id: 'B109-D81.6',
      text: 'It’s blue, with a black basket and a yellow sticker on the frame.',
      src: a11,
    },
    { id: 'B109-D81.7', text: 'Has anything been found yet?', src: a12 },
    {
      id: 'B109-D81.8',
      text: 'Not yet. A similar bike was seen nearby, but nobody has checked the number.',
      src: a13,
    },
    {
      id: 'B109-L81.1',
      text: 'Hi, Ana. There’s an update about the bicycle report. A blue bike with a black basket has been found near the station. The yellow sticker hasn’t been confirmed, and the serial number hasn’t been checked yet. It may be the missing bike, but it hasn’t been identified as yours. Reception will contact you when the identifying details have been compared. Could you tell the other person what has actually been confirmed, and what you still need to ask?',
      src: a14,
    },
  ],
  images: { 'b1-09-vocabulary81': i0 },
}
export default prepared
