import data from './c1-08.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/C108-FS81.0.mp3'
import a1 from '../assets/audio/C108-FS81.1.mp3'
import a2 from '../assets/audio/C108-FS81.2.mp3'
import a3 from '../assets/audio/C108-FS81.3.mp3'
import a4 from '../assets/audio/C108-FS81.4.mp3'
import a5 from '../assets/audio/C108-FS81.5.mp3'
import a6 from '../assets/audio/C108-D81.1.mp3'
import a7 from '../assets/audio/C108-D81.2.mp3'
import a8 from '../assets/audio/C108-D81.3.mp3'
import a9 from '../assets/audio/C108-D81.4.mp3'
import a10 from '../assets/audio/C108-D81.5.mp3'
import a11 from '../assets/audio/C108-D81.6.mp3'
import a12 from '../assets/audio/C108-D81.7.mp3'
import a13 from '../assets/audio/C108-D81.8.mp3'
import a14 from '../assets/audio/C108-D81.9.mp3'
import a15 from '../assets/audio/C108-D81.10.mp3'
import a16 from '../assets/audio/C108-D81.11.mp3'
import a17 from '../assets/audio/C108-D81.12.mp3'
import a18 from '../assets/audio/C108-L81.1.mp3'
import i0 from '../assets/c1-08-vocabulary173.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'C108-FS81.0',
      text: 'a non-negotiable. Seven days’ notice is a non-negotiable for this person.',
      src: a0,
    },
    {
      id: 'C108-FS81.1',
      text: 'a concession. Reducing frequency is one concession.',
      src: a1,
    },
    {
      id: 'C108-FS81.2',
      text: 'a counterproposal. The counterproposal keeps regular contact.',
      src: a2,
    },
    {
      id: 'C108-FS81.3',
      text: 'a feasible option. We need a feasible option, not a vague agreement.',
      src: a3,
    },
    {
      id: 'C108-FS81.4',
      text: 'a shared interest. Useful contact is the shared interest.',
      src: a4,
    },
    {
      id: 'C108-FS81.5',
      text: 'a sticking point. Notice remains the sticking point.',
      src: a5,
    },
    {
      id: 'C108-D81.1',
      text: 'How do you feel about moving our group sessions to four evenings a month?',
      src: a6,
    },
    {
      id: 'C108-D81.2',
      text: 'I can see the value of more regular contact. Even so, four evenings would be difficult for me.',
      src: a7,
    },
    {
      id: 'C108-D81.3',
      text: 'Is the number of sessions the main problem, or the notice?',
      src: a8,
    },
    {
      id: 'C108-D81.4',
      text: 'Both. I can commit to two, and I need seven days’ notice to arrange things.',
      src: a9,
    },
    {
      id: 'C108-D81.5',
      text: 'The proposal only gives forty-eight hours. Could you accept that occasionally?',
      src: a10,
    },
    {
      id: 'C108-D81.6',
      text: 'Much as I’d like to be flexible, I can’t promise attendance at that notice.',
      src: a11,
    },
    {
      id: 'C108-D81.7',
      text: 'What alternative would still give the group useful contact?',
      src: a12,
    },
    {
      id: 'C108-D81.8',
      text: 'Two planned live sessions, with short updates between them.',
      src: a13,
    },
    {
      id: 'C108-D81.9',
      text: 'Would you agree to a four-week trial before reviewing it?',
      src: a14,
    },
    {
      id: 'C108-D81.10',
      text: 'Yes, provided the dates are agreed a week ahead. The trial shouldn’t erase that limit.',
      src: a15,
    },
    {
      id: 'C108-D81.11',
      text: 'Then the shared interest is regular contact; frequency and notice are the variables.',
      src: a16,
    },
    {
      id: 'C108-D81.12',
      text: 'Exactly. We can make a concession without implying that every condition is negotiable.',
      src: a17,
    },
    {
      id: 'C108-L81.1',
      text: 'Hi, Ana. I’ve thought about the group-session proposal. I can accept two live sessions a month instead of four, and I’m happy to try short written updates between them. I still need the dates confirmed at least seven days ahead; reducing the frequency doesn’t remove that planning need. Could we treat the two-session arrangement as a four-week trial and review whether the updates cover the gaps? We seem to agree on regular contact and a trial. The sticking point is not willingness to participate, but the notice required to make participation feasible. Please could you confirm that part explicitly before we tell the group the whole proposal has been accepted?',
      src: a18,
    },
  ],
  images: { 'c1-08-vocabulary173': i0 },
}
export default prepared
