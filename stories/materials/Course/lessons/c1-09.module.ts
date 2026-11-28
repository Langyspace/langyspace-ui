import data from './c1-09.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/C109-FS81.0.mp3'
import a1 from '../assets/audio/C109-FS81.1.mp3'
import a2 from '../assets/audio/C109-FS81.2.mp3'
import a3 from '../assets/audio/C109-FS81.3.mp3'
import a4 from '../assets/audio/C109-FS81.4.mp3'
import a5 from '../assets/audio/C109-FS81.5.mp3'
import a6 from '../assets/audio/C109-D81.1.mp3'
import a7 from '../assets/audio/C109-D81.2.mp3'
import a8 from '../assets/audio/C109-D81.3.mp3'
import a9 from '../assets/audio/C109-D81.4.mp3'
import a10 from '../assets/audio/C109-D81.5.mp3'
import a11 from '../assets/audio/C109-D81.6.mp3'
import a12 from '../assets/audio/C109-D81.7.mp3'
import a13 from '../assets/audio/C109-D81.8.mp3'
import a14 from '../assets/audio/C109-D81.9.mp3'
import a15 from '../assets/audio/C109-D81.10.mp3'
import a16 from '../assets/audio/C109-D81.11.mp3'
import a17 from '../assets/audio/C109-D81.12.mp3'
import a18 from '../assets/audio/C109-L81.1.mp3'
import i0 from '../assets/c1-09-vocabulary173.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'C109-FS81.0',
      text: 'a trend. Three observations suggest a trend, not a certainty.',
      src: a0,
    },
    {
      id: 'C109-FS81.1',
      text: 'a projection. The projection depends on stated assumptions.',
      src: a1,
    },
    {
      id: 'C109-FS81.2',
      text: 'a likely outcome. A likely outcome is not a guaranteed one.',
      src: a2,
    },
    {
      id: 'C109-FS81.3',
      text: 'a worst-case scenario. A worst-case scenario should be labelled as a scenario.',
      src: a3,
    },
    {
      id: 'C109-FS81.4',
      text: 'an early sign. This could be an early sign of a gap.',
      src: a4,
    },
    {
      id: 'C109-FS81.5',
      text: 'a contributing factor. Service timing is a contributing factor.',
      src: a5,
    },
    {
      id: 'C109-D81.1',
      text: 'Demand has risen for three months. It’s bound to get worse, isn’t it?',
      src: a6,
    },
    {
      id: 'C109-D81.2',
      text: 'The figures suggest growth, but “bound to” is stronger than these three observations justify.',
      src: a7,
    },
    {
      id: 'C109-D81.3',
      text: 'What would be a more defensible claim?',
      src: a8,
    },
    {
      id: 'C109-D81.4',
      text: 'Demand is likely to rise if the same conditions continue. We should state that condition.',
      src: a9,
    },
    {
      id: 'C109-D81.5',
      text: 'The proposal says extra transport is set to start next month.',
      src: a10,
    },
    {
      id: 'C109-D81.6',
      text: 'Is that a confirmed service plan, or just an assumption in the projection?',
      src: a11,
    },
    {
      id: 'C109-D81.7',
      text: 'The plan is confirmed, but the capacity estimate assumes it covers the period of highest demand.',
      src: a12,
    },
    {
      id: 'C109-D81.8',
      text: 'Then timing matters as much as the headline number.',
      src: a13,
    },
    {
      id: 'C109-D81.9',
      text: 'We were going to recommend no further action because the extra service looked sufficient.',
      src: a14,
    },
    {
      id: 'C109-D81.10',
      text: 'I’d qualify that until we check the coverage. More total capacity may still leave a local gap.',
      src: a15,
    },
    {
      id: 'C109-D81.11',
      text: 'Would monitoring the next month be too passive?',
      src: a16,
    },
    {
      id: 'C109-D81.12',
      text: 'Not if we also check the affected time slot and define when we’ll change the plan.',
      src: a17,
    },
    {
      id: 'C109-L81.1',
      text: 'Hi, Ana. There’s a limitation in the transport projection. The extra service is confirmed, but it only runs in the morning peak. The demand we’re discussing includes afternoon trips as well. So the added total capacity cannot automatically be treated as coverage for every part of the day. That doesn’t prove demand will keep rising at the same rate, or that the whole plan will fail. It does mean we should qualify the assumption that the extra service removes the problem. Could you revise the recommendation with that distinction? A useful next step would identify what afternoon information is needed and what observation would trigger another decision, rather than simply moving from “everything is solved” to “it’s bound to get worse”.',
      src: a18,
    },
  ],
  images: { 'c1-09-vocabulary173': i0 },
}
export default prepared
