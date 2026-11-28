import data from './b2-04.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B204-FS81.0.mp3'
import a1 from '../assets/audio/B204-FS81.1.mp3'
import a2 from '../assets/audio/B204-FS81.2.mp3'
import a3 from '../assets/audio/B204-FS81.3.mp3'
import a4 from '../assets/audio/B204-FS81.4.mp3'
import a5 from '../assets/audio/B204-FS81.5.mp3'
import a6 from '../assets/audio/B204-D81.1.mp3'
import a7 from '../assets/audio/B204-D81.2.mp3'
import a8 from '../assets/audio/B204-D81.3.mp3'
import a9 from '../assets/audio/B204-D81.4.mp3'
import a10 from '../assets/audio/B204-D81.5.mp3'
import a11 from '../assets/audio/B204-D81.6.mp3'
import a12 from '../assets/audio/B204-D81.7.mp3'
import a13 from '../assets/audio/B204-D81.8.mp3'
import a14 from '../assets/audio/B204-D81.9.mp3'
import a15 from '../assets/audio/B204-D81.10.mp3'
import a16 from '../assets/audio/B204-D81.11.mp3'
import a17 from '../assets/audio/B204-D81.12.mp3'
import a18 from '../assets/audio/B204-L81.1.mp3'
import i0 from '../assets/b2-04-vocabulary173.webp'
import evidence123 from '../assets/b2-04-flat-evidence123.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    { id: 'B204-FS81.0', text: 'a clue. A clue is not always proof.', src: a0 },
    {
      id: 'B204-FS81.1',
      text: 'a footprint. A footprint may support more than one story.',
      src: a1,
    },
    {
      id: 'B204-FS81.2',
      text: 'a receipt. We don’t know who left the receipt.',
      src: a2,
    },
    {
      id: 'B204-FS81.3',
      text: 'a spare key. The neighbour had a spare key.',
      src: a3,
    },
    {
      id: 'B204-FS81.4',
      text: 'a security camera. Check the security camera only if needed.',
      src: a4,
    },
    {
      id: 'B204-FS81.5',
      text: 'an explanation. An explanation should fit the evidence.',
      src: a5,
    },
    {
      id: 'B204-D81.1',
      text: 'Someone must have been here. The plant has been moved.',
      src: a6,
    },
    {
      id: 'B204-D81.2',
      text: 'Maybe, but let’s check the record before deciding who it was.',
      src: a7,
    },
    {
      id: 'B204-D81.3',
      text: 'A spare key was used at five. There’s also a receipt from five twenty.',
      src: a8,
    },
    {
      id: 'B204-D81.4',
      text: 'That suggests a visit, but the receipt might have been left by someone else earlier.',
      src: a9,
    },
    {
      id: 'B204-D81.5',
      text: 'Could someone have come through the window?',
      src: a10,
    },
    {
      id: 'B204-D81.6',
      text: 'It’s closed now. That doesn’t prove it was closed the whole afternoon.',
      src: a11,
    },
    {
      id: 'B204-D81.7',
      text: 'Good point. We shouldn’t treat a current state as a complete history.',
      src: a12,
    },
    { id: 'B204-D81.8', text: 'Who had permission to use the key?', src: a13 },
    {
      id: 'B204-D81.9',
      text: 'The neighbour was going to water the plants, but I don’t know whether she came.',
      src: a14,
    },
    {
      id: 'B204-D81.10',
      text: 'Then I’d ask her first. The camera record could be another check if needed.',
      src: a15,
    },
    {
      id: 'B204-D81.11',
      text: 'So our strongest explanation is a permitted visit, not a confirmed identity yet.',
      src: a16,
    },
    {
      id: 'B204-D81.12',
      text: 'Exactly. We can update that conclusion when we have more than a clue.',
      src: a17,
    },
    {
      id: 'B204-L81.1',
      text: 'Hi, Ana. The neighbour has confirmed that she used the spare key at five to water the plants. She says she moved the plant away from the closed window before leaving. That supports the explanation of an authorised visit. She doesn’t recognise the receipt from five twenty, though, so we still don’t know who left it or when it came into the flat. Could you update the explanation without making the receipt fit by inventing another visit? We have confirmation for the key and the plant, but only an unresolved clue for the receipt.',
      src: a18,
    },
  ],
  images: { 'b2-04-flat-evidence123': evidence123, 'b2-04-vocabulary173': i0 },
}
export default prepared
