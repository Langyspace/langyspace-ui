import data from './c1-03.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/C103-FS81.0.mp3'
import a1 from '../assets/audio/C103-FS81.1.mp3'
import a2 from '../assets/audio/C103-FS81.2.mp3'
import a3 from '../assets/audio/C103-FS81.3.mp3'
import a4 from '../assets/audio/C103-FS81.4.mp3'
import a5 from '../assets/audio/C103-FS81.5.mp3'
import a6 from '../assets/audio/C103-D81.1.mp3'
import a7 from '../assets/audio/C103-D81.2.mp3'
import a8 from '../assets/audio/C103-D81.3.mp3'
import a9 from '../assets/audio/C103-D81.4.mp3'
import a10 from '../assets/audio/C103-D81.5.mp3'
import a11 from '../assets/audio/C103-D81.6.mp3'
import a12 from '../assets/audio/C103-D81.7.mp3'
import a13 from '../assets/audio/C103-D81.8.mp3'
import a14 from '../assets/audio/C103-D81.9.mp3'
import a15 from '../assets/audio/C103-D81.10.mp3'
import a16 from '../assets/audio/C103-D81.11.mp3'
import a17 from '../assets/audio/C103-D81.12.mp3'
import a18 from '../assets/audio/C103-L81.1.mp3'
import i0 from '../assets/c1-03-vocabulary173.webp'
import w141clip0 from '../assets/audio/C103-W141.1.mp3'
import w141clip1 from '../assets/audio/C103-W141.2.mp3'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'C103-W141.1',
      text: 'Hi, Ana. The source has clarified the café notice. The dining area is closing for renovation, and delivery will continue, but a reopening date has not been set. The earlier post’s claim of permanent closure is not supported by the official notice. Could you revise the update with that attribution intact?',
      src: w141clip0,
    },
    {
      id: 'C103-W141.2',
      text: 'Please don’t replace the false certainty with a confident reopening date. If people need to plan a visit, the useful next step is to check the café’s own updates rather than repeat the same unverified post. We can explain what the notice confirms and what it leaves open without implying that every part of the original rumour has been investigated independently.',
      src: w141clip1,
    },
    {
      id: 'C103-FS81.0',
      text: 'reportedly. Reportedly does not identify a source by itself.',
      src: a0,
    },
    {
      id: 'C103-FS81.1',
      text: 'an allegation. An allegation should not become a fact in the summary.',
      src: a1,
    },
    {
      id: 'C103-FS81.2',
      text: 'a reliable source. Check whether this is a reliable source for the particular claim.',
      src: a2,
    },
    {
      id: 'C103-FS81.3',
      text: 'an unconfirmed report. This is still an unconfirmed report.',
      src: a3,
    },
    {
      id: 'C103-FS81.4',
      text: 'an official statement. The official statement has a narrower scope.',
      src: a4,
    },
    {
      id: 'C103-FS81.5',
      text: 'verify a claim. We need to verify the claim before sharing it.',
      src: a5,
    },
    {
      id: 'C103-D81.1',
      text: 'This post says the café is closing permanently. Would you share it?',
      src: a6,
    },
    {
      id: 'C103-D81.2',
      text: 'Not as it stands. It doesn’t identify the source of that claim.',
      src: a7,
    },
    {
      id: 'C103-D81.3',
      text: 'The café is said to be closing, then? That sounds more cautious.',
      src: a8,
    },
    {
      id: 'C103-D81.4',
      text: 'Grammatically, yes, but it still passes on the claim without telling us who said it.',
      src: a9,
    },
    {
      id: 'C103-D81.5',
      text: 'The official notice says the dining area will close for renovation while delivery continues.',
      src: a10,
    },
    {
      id: 'C103-D81.6',
      text: 'That confirms a temporary change in service, not the permanent end of the business.',
      src: a11,
    },
    { id: 'C103-D81.7', text: 'Does it give a reopening date?', src: a12 },
    {
      id: 'C103-D81.8',
      text: 'Not in this excerpt. We should check rather than turn an expectation into a date.',
      src: a13,
    },
    {
      id: 'C103-D81.9',
      text: 'So I could say, according to the café’s notice, the dining area is closing for renovation.',
      src: a14,
    },
    {
      id: 'C103-D81.10',
      text: 'Yes, and keep the delivery detail because it changes what readers need to do.',
      src: a15,
    },
    {
      id: 'C103-D81.11',
      text: 'I’d also correct the permanent-closure claim if I’d already shared it.',
      src: a16,
    },
    {
      id: 'C103-D81.12',
      text: 'Exactly. Cautious wording doesn’t remove the responsibility to check and correct.',
      src: a17,
    },
    {
      id: 'C103-L81.1',
      text: 'Hi, Ana. The source has clarified the café notice. The dining area is closing for renovation, and delivery will continue, but a reopening date has not been set. The earlier post’s claim of permanent closure is not supported by the official notice. Could you revise the update with that attribution intact? Please don’t replace the false certainty with a confident reopening date. If people need to plan a visit, the useful next step is to check the café’s own updates rather than repeat the same unverified post. We can explain what the notice confirms and what it leaves open without implying that every part of the original rumour has been investigated independently.',
      src: a18,
    },
  ],
  images: { 'c1-03-vocabulary173': i0 },
}
export default prepared
