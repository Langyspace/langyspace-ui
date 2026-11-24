import data from './c1-11.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/C111-FS81.0.mp3'
import a1 from '../assets/audio/C111-FS81.1.mp3'
import a2 from '../assets/audio/C111-FS81.2.mp3'
import a3 from '../assets/audio/C111-FS81.3.mp3'
import a4 from '../assets/audio/C111-FS81.4.mp3'
import a5 from '../assets/audio/C111-FS81.5.mp3'
import a6 from '../assets/audio/C111-D81.1.mp3'
import a7 from '../assets/audio/C111-D81.2.mp3'
import a8 from '../assets/audio/C111-D81.3.mp3'
import a9 from '../assets/audio/C111-D81.4.mp3'
import a10 from '../assets/audio/C111-D81.5.mp3'
import a11 from '../assets/audio/C111-D81.6.mp3'
import a12 from '../assets/audio/C111-D81.7.mp3'
import a13 from '../assets/audio/C111-D81.8.mp3'
import a14 from '../assets/audio/C111-D81.9.mp3'
import a15 from '../assets/audio/C111-D81.10.mp3'
import a16 from '../assets/audio/C111-D81.11.mp3'
import a17 from '../assets/audio/C111-D81.12.mp3'
import a18 from '../assets/audio/C111-L81.1.mp3'
import i0 from '../assets/c1-11-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'C111-FS81.0',
      text: 'in other words. In other words, acknowledgement is not the final answer.',
      src: a0,
    },
    {
      id: 'C111-FS81.1',
      text: 'what I mean is. What I mean is a realistic response time.',
      src: a1,
    },
    {
      id: 'C111-FS81.2',
      text: 'to put it another way. To put it another way, imagine a short receipt message.',
      src: a2,
    },
    {
      id: 'C111-FS81.3',
      text: 'a misunderstanding. The misunderstanding concerns the meaning of quick.',
      src: a3,
    },
    {
      id: 'C111-FS81.4',
      text: 'a clarification. A clarification should make the action concrete.',
      src: a4,
    },
    {
      id: 'C111-FS81.5',
      text: 'common ground. Accuracy and predictability are common ground.',
      src: a5,
    },
    {
      id: 'C111-D81.1',
      text: 'When you say we need a quick reply, do you mean a full answer today?',
      src: a6,
    },
    {
      id: 'C111-D81.2',
      text: 'Not necessarily. I need to know the request has been received and when a checked answer will follow.',
      src: a7,
    },
    {
      id: 'C111-D81.3',
      text: 'I’d taken quick to mean answering before checking the figures.',
      src: a8,
    },
    {
      id: 'C111-D81.4',
      text: 'That would be risky. What I mean is quick acknowledgement, not instant certainty.',
      src: a9,
    },
    {
      id: 'C111-D81.5',
      text: 'So, if I understand you correctly, verification can still take until tomorrow?',
      src: a10,
    },
    {
      id: 'C111-D81.6',
      text: 'Yes, provided the sender gives a realistic time and updates us if it changes.',
      src: a11,
    },
    {
      id: 'C111-D81.7',
      text: 'To put it another way, a message can be fast without pretending the answer is complete.',
      src: a12,
    },
    {
      id: 'C111-D81.8',
      text: 'Exactly. A concrete example would be: “Received. I’ll check the figures and reply by four tomorrow.”',
      src: a13,
    },
    {
      id: 'C111-D81.9',
      text: 'That also makes the next step easier to track than “verification of availability is ongoing”.',
      src: a14,
    },
    {
      id: 'C111-D81.10',
      text: 'Yes. The noun phrase isn’t wrong, but it can hide who is doing what and when.',
      src: a15,
    },
    {
      id: 'C111-D81.11',
      text: 'Then our common ground is an accurate answer with a visible response time.',
      src: a16,
    },
    {
      id: 'C111-D81.12',
      text: 'And we should check that interpretation with the other person instead of announcing the disagreement is solved.',
      src: a17,
    },
    {
      id: 'C111-L81.1',
      text: 'Hi, Ana. I think my request for a quick reply has been misunderstood. I wasn’t asking for the checked figures today. I was asking for a prompt acknowledgement and a realistic time for the complete answer. If verification takes until four tomorrow, please say that. What’s difficult is silence, followed by a rushed answer that looks final but hasn’t been checked. Could you explain both positions again so they can see the common ground? One person is protecting accuracy; the other is trying to plan around a response. A useful reformulation should make those needs visible and give an example, rather than repeat the word quick more loudly. Please check that they agree with your summary before treating it as their settled position.',
      src: a18,
    },
  ],
  images: { 'c1-11-vocabulary81': i0 },
}
export default prepared
