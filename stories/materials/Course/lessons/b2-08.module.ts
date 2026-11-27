import contextual161 from '../assets/b2-08-vocabulary161.webp'
import data from './b2-08.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B208-FS81.0.mp3'
import a1 from '../assets/audio/B208-FS81.1.mp3'
import a2 from '../assets/audio/B208-FS81.2.mp3'
import a3 from '../assets/audio/B208-FS81.3.mp3'
import a4 from '../assets/audio/B208-FS81.4.mp3'
import a5 from '../assets/audio/B208-FS81.5.mp3'
import a6 from '../assets/audio/B208-D81.1.mp3'
import a7 from '../assets/audio/B208-D81.2.mp3'
import a8 from '../assets/audio/B208-D81.3.mp3'
import a9 from '../assets/audio/B208-D81.4.mp3'
import a10 from '../assets/audio/B208-D81.5.mp3'
import a11 from '../assets/audio/B208-D81.6.mp3'
import a12 from '../assets/audio/B208-D81.7.mp3'
import a13 from '../assets/audio/B208-D81.8.mp3'
import a14 from '../assets/audio/B208-D81.9.mp3'
import a15 from '../assets/audio/B208-D81.10.mp3'
import a16 from '../assets/audio/B208-D81.11.mp3'
import a17 from '../assets/audio/B208-D81.12.mp3'
import a18 from '../assets/audio/B208-L81.1.mp3'
import i0 from '../assets/b2-08-vocabulary81.webp'
import evidence123 from '../assets/b2-08-apartments123.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B208-FS81.0',
      text: 'a balcony. The apartment has a balcony.',
      src: a0,
    },
    {
      id: 'B208-FS81.1',
      text: 'a viewing. I’d arrange a viewing before deciding.',
      src: a1,
    },
    {
      id: 'B208-FS81.2',
      text: 'a neighbourhood. The neighbourhood is close to the metro.',
      src: a2,
    },
    {
      id: 'B208-FS81.3',
      text: 'a listing. The listing doesn’t confirm the full cost.',
      src: a3,
    },
    {
      id: 'B208-FS81.4',
      text: 'a landlord. Ask the landlord about the fee.',
      src: a4,
    },
    {
      id: 'B208-FS81.5',
      text: 'a maintenance fee. The maintenance fee is added to the rent.',
      src: a5,
    },
    {
      id: 'B208-D81.1',
      text: 'Which apartment would you recommend for this brief?',
      src: a6,
    },
    {
      id: 'B208-D81.2',
      text: 'The person who works from home needs a usable work area, but location matters too.',
      src: a7,
    },
    {
      id: 'B208-D81.3',
      text: 'A is near the metro. B has more space, although it’s further away.',
      src: a8,
    },
    {
      id: 'B208-D81.4',
      text: 'And C, which has a balcony, is between them in terms of distance.',
      src: a9,
    },
    {
      id: 'B208-D81.5',
      text: 'Is the balcony essential or just attractive?',
      src: a10,
    },
    {
      id: 'B208-D81.6',
      text: 'Attractive. The fixed requirements are a work area and a total budget under a thousand.',
      src: a11,
    },
    {
      id: 'B208-D81.7',
      text: 'Do all the listings include the maintenance fee?',
      src: a12,
    },
    {
      id: 'B208-D81.8',
      text: 'A and B state a total. C’s listing doesn’t confirm the fee.',
      src: a13,
    },
    {
      id: 'B208-D81.9',
      text: 'Then we shouldn’t compare the advertised rents as if they were the full costs.',
      src: a14,
    },
    {
      id: 'B208-D81.10',
      text: 'Agreed. I’d arrange a viewing of A and ask C’s landlord about the missing fee.',
      src: a15,
    },
    {
      id: 'B208-D81.11',
      text: 'Would B still be an alternative if the commute were manageable?',
      src: a16,
    },
    {
      id: 'B208-D81.12',
      text: 'Yes. It offers more space, which could matter more than being right by the metro.',
      src: a17,
    },
    {
      id: 'B208-L81.1',
      text: 'Hi, Ana. The landlord has confirmed that apartment C has a maintenance fee of one hundred and fifty dollars a month, on top of the nine hundred and fifty rent. That takes the total to eleven hundred, above the profile’s firm thousand-dollar limit. The balcony is still appealing, but it doesn’t remove the budget constraint. A and B haven’t changed. Could you revise the recommendation, explain which detail changes it and ask which of the remaining trade-offs matters more? We still need to see whether the work corner in A is comfortable enough for two home-working days a week.',
      src: a18,
    },
  ],
  images: {
    'b2-08-vocabulary161': contextual161,
    'b2-08-apartments123': evidence123,
    'b2-08-vocabulary81': i0,
  },
}
export default prepared
