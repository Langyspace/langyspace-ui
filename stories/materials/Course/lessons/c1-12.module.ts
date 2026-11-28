import data from './c1-12.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/C112-FS81.0.mp3'
import a1 from '../assets/audio/C112-FS81.1.mp3'
import a2 from '../assets/audio/C112-FS81.2.mp3'
import a3 from '../assets/audio/C112-FS81.3.mp3'
import a4 from '../assets/audio/C112-FS81.4.mp3'
import a5 from '../assets/audio/C112-FS81.5.mp3'
import a6 from '../assets/audio/C112-D81.1.mp3'
import a7 from '../assets/audio/C112-D81.2.mp3'
import a8 from '../assets/audio/C112-D81.3.mp3'
import a9 from '../assets/audio/C112-D81.4.mp3'
import a10 from '../assets/audio/C112-D81.5.mp3'
import a11 from '../assets/audio/C112-D81.6.mp3'
import a12 from '../assets/audio/C112-D81.7.mp3'
import a13 from '../assets/audio/C112-D81.8.mp3'
import a14 from '../assets/audio/C112-D81.9.mp3'
import a15 from '../assets/audio/C112-D81.10.mp3'
import a16 from '../assets/audio/C112-D81.11.mp3'
import a17 from '../assets/audio/C112-D81.12.mp3'
import a18 from '../assets/audio/C112-L81.1.mp3'
import i0 from '../assets/c1-12-vocabulary173.webp'
import scene160 from '../assets/c1-12-scene160.png'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'C112-FS81.0',
      text: 'financial inclusion. Financial inclusion concerns who can actually participate.',
      src: a0,
    },
    {
      id: 'C112-FS81.1',
      text: 'privacy. The process should make privacy implications clear.',
      src: a1,
    },
    {
      id: 'C112-FS81.2',
      text: 'a transaction fee. Check whether a transaction fee changes.',
      src: a2,
    },
    {
      id: 'C112-FS81.3',
      text: 'digital access. Digital access can be temporarily lost.',
      src: a3,
    },
    {
      id: 'C112-FS81.4',
      text: 'a fallback option. A fallback option must be usable in practice.',
      src: a4,
    },
    {
      id: 'C112-FS81.5',
      text: 'an unintended consequence. A convenient policy can have an unintended consequence.',
      src: a5,
    },
    {
      id: 'C112-D81.1',
      text: 'What would make the digital-only proposal attractive to this venue?',
      src: a6,
    },
    {
      id: 'C112-D81.2',
      text: 'The manager wants a simpler checkout and less cash handling, but those are aims, not guaranteed outcomes.',
      src: a7,
    },
    { id: 'C112-D81.3', text: 'Whose needs might that overlook?', src: a8 },
    {
      id: 'C112-D81.4',
      text: 'People without reliable digital access, and anyone affected by a temporary failure.',
      src: a9,
    },
    {
      id: 'C112-D81.5',
      text: 'Would accepting cash solve every inclusion problem?',
      src: a10,
    },
    {
      id: 'C112-D81.6',
      text: 'No. It would provide one fallback, but accessibility, privacy and fees still need attention.',
      src: a11,
    },
    {
      id: 'C112-D81.7',
      text: 'How would you avoid treating the two sources as equally strong on every point?',
      src: a12,
    },
    {
      id: 'C112-D81.8',
      text: 'I’d attribute the operational aims to the manager and the access concerns to the community account.',
      src: a13,
    },
    {
      id: 'C112-D81.9',
      text: 'Then what recommendation could acknowledge both?',
      src: a14,
    },
    {
      id: 'C112-D81.10',
      text: 'I’d support a digital-first trial, provided there’s a clear fallback and a review of who is excluded.',
      src: a15,
    },
    {
      id: 'C112-D81.11',
      text: 'What evidence would make you change that recommendation?',
      src: a16,
    },
    {
      id: 'C112-D81.12',
      text: 'If the fallback is unusable in practice, or the costs fall unfairly on users, I’d revise it rather than defend the label.',
      src: a17,
    },
    {
      id: 'C112-L81.1',
      text: 'Hi, Ana. I wanted to add an experience to the payment-policy discussion. I normally pay by card, but last week my phone battery died while I was out. At the next place, the payment connection also stopped working for a while. I had some cash with me, but their digital-only process didn’t allow it, so I couldn’t complete the purchase then. I’m not saying that one incident proves digital payment is always unreliable. It does show that temporary loss of access can affect people who usually use it comfortably. Could your recommendation say what happens in that situation, including how staff explain the fallback without embarrassing the customer? I’d also want to know whether a transaction fee changes between the normal process and the fallback. A policy can aim for convenience while still making a specific plan for the moment the convenient route fails.',
      src: a18,
    },
  ],
  images: { 'c1-12-vocabulary173': i0, 'c1-12-scene160': scene160 },
}
export default prepared
