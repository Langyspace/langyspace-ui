import data from './b1-04.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B104-FS81.0.mp3'
import a1 from '../assets/audio/B104-FS81.1.mp3'
import a2 from '../assets/audio/B104-FS81.2.mp3'
import a3 from '../assets/audio/B104-FS81.3.mp3'
import a4 from '../assets/audio/B104-FS81.4.mp3'
import a5 from '../assets/audio/B104-FS81.5.mp3'
import a6 from '../assets/audio/B104-D81.1.mp3'
import a7 from '../assets/audio/B104-D81.2.mp3'
import a8 from '../assets/audio/B104-D81.3.mp3'
import a9 from '../assets/audio/B104-D81.4.mp3'
import a10 from '../assets/audio/B104-D81.5.mp3'
import a11 from '../assets/audio/B104-D81.6.mp3'
import a12 from '../assets/audio/B104-D81.7.mp3'
import a13 from '../assets/audio/B104-D81.8.mp3'
import a14 from '../assets/audio/B104-L81.1.mp3'
import i0 from '../assets/b1-04-vocabulary173.webp'
import evidence123 from '../assets/b1-04-lost-property123.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B104-FS81.0',
      text: 'a backpack. Someone left a backpack by the table.',
      src: a0,
    },
    {
      id: 'B104-FS81.1',
      text: 'a receipt. The receipt may be from another day.',
      src: a1,
    },
    {
      id: 'B104-FS81.2',
      text: 'a charger. A charger alone doesn’t identify the owner.',
      src: a2,
    },
    {
      id: 'B104-FS81.3',
      text: 'a notebook. The notebook has a silver star.',
      src: a3,
    },
    {
      id: 'B104-FS81.4',
      text: 'a boarding pass. We can see a boarding pass in the pocket.',
      src: a4,
    },
    {
      id: 'B104-FS81.5',
      text: 'a key ring. The key ring looks like a red fish.',
      src: a5,
    },
    {
      id: 'B104-D81.1',
      text: 'Someone has left a backpack by our table. Should we take it to reception?',
      src: a6,
    },
    {
      id: 'B104-D81.2',
      text: 'Yes. There’s a boarding pass visible in the open pocket. The owner might be travelling.',
      src: a7,
    },
    {
      id: 'B104-D81.3',
      text: 'Maybe, but it could be an old pass. We don’t know the date.',
      src: a8,
    },
    {
      id: 'B104-D81.4',
      text: 'True. There’s also a charger and a black notebook.',
      src: a9,
    },
    {
      id: 'B104-D81.5',
      text: 'Those are common things. What detail could help reception identify it?',
      src: a10,
    },
    {
      id: 'B104-D81.6',
      text: 'The notebook has a silver star, and the key ring is a red fish.',
      src: a11,
    },
    {
      id: 'B104-D81.7',
      text: 'That’s more useful. Let’s let the caller describe those before we suggest them.',
      src: a12,
    },
    {
      id: 'B104-D81.8',
      text: 'Agreed. We can make a guess, but we shouldn’t hand it over without checking.',
      src: a13,
    },
    {
      id: 'B104-L81.1',
      text: 'Hi, Ana. Reception has spoken to a caller about the backpack. The caller described a black notebook with a silver star and a red fish key ring, without being told those details first. Both descriptions match the objects in our example. That makes the claim more plausible, but reception still needs to follow its collection procedure. Could you explain why the matching details are stronger evidence than simply having a charger, and say what still needs to be checked?',
      src: a14,
    },
  ],
  images: { 'b1-04-lost-property123': evidence123, 'b1-04-vocabulary173': i0 },
}
export default prepared
