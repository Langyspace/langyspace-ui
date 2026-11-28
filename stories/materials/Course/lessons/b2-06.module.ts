import data from './b2-06.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B206-FS81.0.mp3'
import a1 from '../assets/audio/B206-FS81.1.mp3'
import a2 from '../assets/audio/B206-FS81.2.mp3'
import a3 from '../assets/audio/B206-FS81.3.mp3'
import a4 from '../assets/audio/B206-FS81.4.mp3'
import a5 from '../assets/audio/B206-FS81.5.mp3'
import a6 from '../assets/audio/B206-D81.1.mp3'
import a7 from '../assets/audio/B206-D81.2.mp3'
import a8 from '../assets/audio/B206-D81.3.mp3'
import a9 from '../assets/audio/B206-D81.4.mp3'
import a10 from '../assets/audio/B206-D81.5.mp3'
import a11 from '../assets/audio/B206-D81.6.mp3'
import a12 from '../assets/audio/B206-D81.7.mp3'
import a13 from '../assets/audio/B206-D81.8.mp3'
import a14 from '../assets/audio/B206-D81.9.mp3'
import a15 from '../assets/audio/B206-D81.10.mp3'
import a16 from '../assets/audio/B206-D81.11.mp3'
import a17 from '../assets/audio/B206-D81.12.mp3'
import a18 from '../assets/audio/B206-L81.1.mp3'
import i0 from '../assets/b2-06-vocabulary173.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B206-FS81.0',
      text: 'get a screen fixed. I need to get my screen fixed.',
      src: a0,
    },
    {
      id: 'B206-FS81.1',
      text: 'have a jacket altered. She wants to have her jacket altered.',
      src: a1,
    },
    {
      id: 'B206-FS81.2',
      text: 'get a haircut. I’m going to get a haircut.',
      src: a2,
    },
    {
      id: 'B206-FS81.3',
      text: 'a repair shop. The repair shop will confirm the status.',
      src: a3,
    },
    {
      id: 'B206-FS81.4',
      text: 'a quote. The quote is eighty dollars.',
      src: a4,
    },
    {
      id: 'B206-FS81.5',
      text: 'a collection date. The collection date is still an estimate.',
      src: a5,
    },
    {
      id: 'B206-D81.1',
      text: 'I need to get my phone screen fixed before I travel on Friday.',
      src: a6,
    },
    {
      id: 'B206-D81.2',
      text: 'The quote is eighty dollars. Collection is planned for Friday at five.',
      src: a7,
    },
    {
      id: 'B206-D81.3',
      text: 'Is that a confirmed completion time or an estimate?',
      src: a8,
    },
    {
      id: 'B206-D81.4',
      text: 'An estimate until we check the replacement part. We’ll confirm tomorrow.',
      src: a9,
    },
    {
      id: 'B206-D81.5',
      text: 'Thanks. I don’t want to assume it’s ready just because the part has arrived.',
      src: a10,
    },
    {
      id: 'B206-D81.6',
      text: 'Of course. First the screen is fitted, then the phone is tested.',
      src: a11,
    },
    {
      id: 'B206-D81.7',
      text: 'Could you contact me before five if there’s a delay?',
      src: a12,
    },
    {
      id: 'B206-D81.8',
      text: 'Yes. We’ll tell you what has been done and what is still pending.',
      src: a13,
    },
    {
      id: 'B206-D81.9',
      text: 'Would you have a temporary phone if I need it for the trip?',
      src: a14,
    },
    {
      id: 'B206-D81.10',
      text: 'We can check availability, but I can’t promise one today.',
      src: a15,
    },
    {
      id: 'B206-D81.11',
      text: 'That’s fine. Please keep the repair deadline and the loan separate in the confirmation.',
      src: a16,
    },
    {
      id: 'B206-D81.12',
      text: 'I will. We’ll confirm both rather than leaving you to guess.',
      src: a17,
    },
    {
      id: 'B206-L81.1',
      text: 'Hi, Ana. The new screen has been fitted, but the phone is still being tested. The shop now expects collection on Saturday at five, one day later than planned. They do have a temporary phone available from Friday at four, free of charge, to be returned when you collect yours. That may cover the trip, but you’d need to check that it supports what you need and arrange your own account access. Could you respond to the shop, confirm the revised collection time and ask one relevant question about the temporary phone? The repair quote remains eighty dollars.',
      src: a18,
    },
  ],
  images: { 'b2-06-vocabulary173': i0 },
}
export default prepared
