import data from './b2-05.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B205-FS81.0.mp3'
import a1 from '../assets/audio/B205-FS81.1.mp3'
import a2 from '../assets/audio/B205-FS81.2.mp3'
import a3 from '../assets/audio/B205-FS81.3.mp3'
import a4 from '../assets/audio/B205-FS81.4.mp3'
import a5 from '../assets/audio/B205-FS81.5.mp3'
import a6 from '../assets/audio/B205-D81.1.mp3'
import a7 from '../assets/audio/B205-D81.2.mp3'
import a8 from '../assets/audio/B205-D81.3.mp3'
import a9 from '../assets/audio/B205-D81.4.mp3'
import a10 from '../assets/audio/B205-D81.5.mp3'
import a11 from '../assets/audio/B205-D81.6.mp3'
import a12 from '../assets/audio/B205-D81.7.mp3'
import a13 from '../assets/audio/B205-D81.8.mp3'
import a14 from '../assets/audio/B205-D81.9.mp3'
import a15 from '../assets/audio/B205-D81.10.mp3'
import a16 from '../assets/audio/B205-D81.11.mp3'
import a17 from '../assets/audio/B205-D81.12.mp3'
import a18 from '../assets/audio/B205-L81.1.mp3'
import i0 from '../assets/b2-05-vocabulary81.webp'
import w141clip0 from '../assets/audio/B205-W141.1.mp3'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B205-W141.1',
      text: 'Hi, Ana. Reception checked the booking and agrees that breakfast was already included in the room price. They can return the twenty-dollar breakfast charge if we provide the receipt reference; it may take three business days. The fifty-dollar deposit is different. It will be assessed after the room check at departure, so it hasn’t been approved for return yet. Could you explain which amount we can request now and which condition still applies to the deposit? We don’t need to give any bank details in this practice conversation.',
      src: w141clip0,
    },
    {
      id: 'B205-FS81.0',
      text: 'a deposit. The deposit has a separate condition.',
      src: a0,
    },
    {
      id: 'B205-FS81.1',
      text: 'an extra charge. There’s an extra charge for breakfast.',
      src: a1,
    },
    {
      id: 'B205-FS81.2',
      text: 'a cancellation fee. Check whether a cancellation fee applies.',
      src: a2,
    },
    {
      id: 'B205-FS81.3',
      text: 'a refund. We can request a refund for the duplicate charge.',
      src: a3,
    },
    {
      id: 'B205-FS81.4',
      text: 'an advance payment. The advance payment was optional.',
      src: a4,
    },
    {
      id: 'B205-FS81.5',
      text: 'an included service. Breakfast was an included service.',
      src: a5,
    },
    {
      id: 'B205-D81.1',
      text: 'Why is the total higher than the booking confirmation?',
      src: a6,
    },
    {
      id: 'B205-D81.2',
      text: 'The receipt includes twenty dollars for breakfast, plus a fifty-dollar deposit.',
      src: a7,
    },
    {
      id: 'B205-D81.3',
      text: 'I thought breakfast was included in the room price.',
      src: a8,
    },
    {
      id: 'B205-D81.4',
      text: 'It was. We needn’t have paid for the same breakfast again.',
      src: a9,
    },
    { id: 'B205-D81.5', text: 'Is the deposit another mistake?', src: a10 },
    {
      id: 'B205-D81.6',
      text: 'Not according to the conditions. It’s returned after the room check, if there’s no damage.',
      src: a11,
    },
    {
      id: 'B205-D81.7',
      text: 'So we should keep the two amounts separate when we ask.',
      src: a12,
    },
    {
      id: 'B205-D81.8',
      text: 'Exactly. We can show the confirmation and request the breakfast charge back.',
      src: a13,
    },
    {
      id: 'B205-D81.9',
      text: 'Did we need to pay the full room price in advance?',
      src: a14,
    },
    {
      id: 'B205-D81.10',
      text: 'No. We chose to, but the confirmation allowed payment at arrival.',
      src: a15,
    },
    {
      id: 'B205-D81.11',
      text: 'That’s different from saying the room itself was free.',
      src: a16,
    },
    {
      id: 'B205-D81.12',
      text: 'Yes. The issue is one duplicate service, not every payment on the receipt.',
      src: a17,
    },
    {
      id: 'B205-L81.1',
      text: 'Hi, Ana. Reception checked the booking and agrees that breakfast was already included in the room price. They can return the twenty-dollar breakfast charge if we provide the receipt reference; it may take three business days. The fifty-dollar deposit is different. It will be assessed after the room check at departure, so it hasn’t been approved for return yet. Could you explain which amount we can request now and which condition still applies to the deposit? We don’t need to give any bank details in this practice conversation.',
      src: a18,
    },
  ],
  images: { 'b2-05-vocabulary81': i0 },
}
export default prepared
