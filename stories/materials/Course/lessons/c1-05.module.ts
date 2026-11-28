import data from './c1-05.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/C105-FS81.0.mp3'
import a1 from '../assets/audio/C105-FS81.1.mp3'
import a2 from '../assets/audio/C105-FS81.2.mp3'
import a3 from '../assets/audio/C105-FS81.3.mp3'
import a4 from '../assets/audio/C105-FS81.4.mp3'
import a5 from '../assets/audio/C105-FS81.5.mp3'
import a6 from '../assets/audio/C105-D81.1.mp3'
import a7 from '../assets/audio/C105-D81.2.mp3'
import a8 from '../assets/audio/C105-D81.3.mp3'
import a9 from '../assets/audio/C105-D81.4.mp3'
import a10 from '../assets/audio/C105-D81.5.mp3'
import a11 from '../assets/audio/C105-D81.6.mp3'
import a12 from '../assets/audio/C105-D81.7.mp3'
import a13 from '../assets/audio/C105-D81.8.mp3'
import a14 from '../assets/audio/C105-D81.9.mp3'
import a15 from '../assets/audio/C105-D81.10.mp3'
import a16 from '../assets/audio/C105-D81.11.mp3'
import a17 from '../assets/audio/C105-D81.12.mp3'
import a18 from '../assets/audio/C105-L81.1.mp3'
import i0 from '../assets/c1-05-vocabulary173.webp'
import evidence123 from '../assets/c1-05-scarf-photo123.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'C105-FS81.0',
      text: 'at first. At first, I assumed it had disappeared on the train.',
      src: a0,
    },
    {
      id: 'C105-FS81.1',
      text: 'to my surprise. To my surprise, the photograph told another story.',
      src: a1,
    },
    {
      id: 'C105-FS81.2',
      text: 'as it turned out. As it turned out, it was still at the café.',
      src: a2,
    },
    {
      id: 'C105-FS81.3',
      text: 'a turning point. That earlier photograph was the turning point.',
      src: a3,
    },
    {
      id: 'C105-FS81.4',
      text: 'looking back. Looking back, I’d confused noticing with losing.',
      src: a4,
    },
    {
      id: 'C105-FS81.5',
      text: 'the last thing I expected. Finding it on that chair was the last thing I expected.',
      src: a5,
    },
    {
      id: 'C105-D81.1',
      text: 'You look relieved. Have you found the scarf you thought you’d lost?',
      src: a6,
    },
    {
      id: 'C105-D81.2',
      text: 'Not yet, but the café staff think they’ve seen it. I was convinced it had gone on the train.',
      src: a7,
    },
    {
      id: 'C105-D81.3',
      text: 'When did you actually notice it was missing?',
      src: a8,
    },
    {
      id: 'C105-D81.4',
      text: 'During the journey. Before that, I’d put on my coat and hurried from the café to the station.',
      src: a9,
    },
    {
      id: 'C105-D81.5',
      text: 'Could it have stayed on the café chair when you picked up the coat?',
      src: a10,
    },
    {
      id: 'C105-D81.6',
      text: 'That hadn’t occurred to me. I thought I remembered wearing it when I left, but I’m less sure now.',
      src: a11,
    },
    {
      id: 'C105-D81.7',
      text: 'Do you have a photograph from before you left? It might help distinguish a memory from an assumption.',
      src: a12,
    },
    {
      id: 'C105-D81.8',
      text: 'I do. I’ve sent it to the staff, and they’re checking the chair and the picture.',
      src: a13,
    },
    {
      id: 'C105-D81.9',
      text: 'What would that change about the story?',
      src: a14,
    },
    {
      id: 'C105-D81.10',
      text: 'If the scarf is in that earlier photo, I’ll know it didn’t disappear during the train journey.',
      src: a15,
    },
    {
      id: 'C105-D81.11',
      text: 'And you could explain why the ending surprised you without turning it into a theft story.',
      src: a16,
    },
    {
      id: 'C105-D81.12',
      text: 'Exactly. At first I confused where I noticed the loss with where I’d actually left it.',
      src: a17,
    },
    {
      id: 'C105-L81.1',
      text: 'Hi, Ana. I found the ending of the scarf story. The café staff discovered it on the chair where the traveller had left a coat earlier. A photograph taken before departure showed the scarf there already, so it hadn’t disappeared on the train at all. The staff kept it behind the counter, and the traveller collected it later. What made the ending surprising wasn’t a dramatic theft or a stranger’s secret plan. It was the discovery that the initial timeline was wrong. Could you retell it so I first understand the worried expectation, then see why that photograph changes the explanation? You can use a simple sentence for the revelation; an inverted phrase is only useful if it gives the moment the emphasis you want.',
      src: a18,
    },
  ],
  images: {
    'c1-05-scarf-photo123': evidence123,
    'c1-05-vocabulary173': i0,
  },
}
export default prepared
