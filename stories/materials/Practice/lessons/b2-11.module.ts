import type { PreparedPractice } from '../Practice.types'
import data from './b2-11.json'
import asset0 from '../../Course/assets/audio/B211-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B211-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B211-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B211-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B211-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B211-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B211-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B211-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B211-D81.9.mp3'
import asset9 from '../../Course/assets/audio/B211-D81.10.mp3'
import asset10 from '../../Course/assets/audio/B211-D81.11.mp3'
import asset11 from '../../Course/assets/audio/B211-D81.12.mp3'
import asset12 from '../../Course/assets/audio/B211-V81.0.mp3'
import asset13 from '../../Course/assets/audio/B211-FE81.0.mp3'
import asset14 from '../../Course/assets/audio/B211-V81.1.mp3'
import asset15 from '../../Course/assets/audio/B211-FE81.1.mp3'
import asset16 from '../../Course/assets/audio/B211-V81.2.mp3'
import asset17 from '../../Course/assets/audio/B211-FE81.2.mp3'
import asset18 from '../../Course/assets/audio/B211-V81.3.mp3'
import asset19 from '../../Course/assets/audio/B211-FE81.3.mp3'
import asset20 from '../../Course/assets/audio/B211-V81.4.mp3'
import asset21 from '../../Course/assets/audio/B211-FE81.4.mp3'
import asset22 from '../../Course/assets/audio/B211-V81.5.mp3'
import asset23 from '../../Course/assets/audio/B211-FE81.5.mp3'
import asset24 from '../assets/characters/kim.webp'
import asset25 from '../assets/characters/ana.webp'
import asset26 from '../../Course/assets/b2-11-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b2-11.shadowing.01',
      text: 'What change would you propose for our weekly study-group meeting?',
      src: asset0,
    },
    {
      id: 'b2-11.shadowing.02',
      text: 'I’d replace the sixty-minute status round with a short written update.',
      src: asset1,
    },
    {
      id: 'b2-11.shadowing.03',
      text: 'What problem would that solve?',
      src: asset2,
    },
    {
      id: 'b2-11.shadowing.04',
      text: 'People repeat information we could read. We need the live time for questions.',
      src: asset3,
    },
    {
      id: 'b2-11.shadowing.05',
      text: 'I can see the benefit. My concern is that some people won’t read the update.',
      src: asset4,
    },
    {
      id: 'b2-11.shadowing.06',
      text: 'That’s a fair point. Having said that, a longer meeting doesn’t guarantee attention either.',
      src: asset5,
    },
    {
      id: 'b2-11.shadowing.07',
      text: 'True. Could the update be short enough to read before a ten-minute discussion?',
      src: asset6,
    },
    {
      id: 'b2-11.shadowing.08',
      text: 'Yes. We could use three headings and keep the live slot for unresolved questions.',
      src: asset7,
    },
    {
      id: 'b2-11.shadowing.09',
      text: 'What about someone who thinks of a question afterwards?',
      src: asset8,
    },
    {
      id: 'b2-11.shadowing.10',
      text: 'We’d need a place to ask asynchronously, and someone responsible for replies.',
      src: asset9,
    },
    {
      id: 'b2-11.shadowing.11',
      text: 'Then I’d support a trial, provided we check whether questions actually get answered.',
      src: asset10,
    },
    {
      id: 'b2-11.shadowing.12',
      text: 'Agreed. In short, less reporting aloud, but a clearer way to get help.',
      src: asset11,
    },
    { id: 'course-b2-11-proposal.front', text: 'a proposal', src: asset12 },
    {
      id: 'course-b2-11-proposal.back',
      text: 'The proposal changes the status round.',
      src: asset13,
    },
    { id: 'course-b2-11-benefit.front', text: 'a benefit', src: asset14 },
    {
      id: 'course-b2-11-benefit.back',
      text: 'A possible benefit is more useful live time.',
      src: asset15,
    },
    { id: 'course-b2-11-drawback.front', text: 'a drawback', src: asset16 },
    {
      id: 'course-b2-11-drawback.back',
      text: 'A drawback is that updates may not be read.',
      src: asset17,
    },
    { id: 'course-b2-11-concern.front', text: 'a concern', src: asset18 },
    {
      id: 'course-b2-11-concern.back',
      text: 'We need to understand the concern.',
      src: asset19,
    },
    {
      id: 'course-b2-11-alternative.front',
      text: 'an alternative',
      src: asset20,
    },
    {
      id: 'course-b2-11-alternative.back',
      text: 'What alternative would preserve the purpose?',
      src: asset21,
    },
    { id: 'course-b2-11-compromise.front', text: 'a compromise', src: asset22 },
    {
      id: 'course-b2-11-compromise.back',
      text: 'The compromise keeps a short live discussion.',
      src: asset23,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset24,
    '/flashcards/course-characters/ana/image.webp': asset25,
    '/flashcards-transparent/course-images/0c36eb20b300ad81daf62af4ede5b14d6bada254453e6cbf6805ebaef92796c7/image.webp':
      asset26,
  },
}
export default prepared
