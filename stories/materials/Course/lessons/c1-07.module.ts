import data from './c1-07.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/C107-FS81.0.mp3'
import a1 from '../assets/audio/C107-FS81.1.mp3'
import a2 from '../assets/audio/C107-FS81.2.mp3'
import a3 from '../assets/audio/C107-FS81.3.mp3'
import a4 from '../assets/audio/C107-FS81.4.mp3'
import a5 from '../assets/audio/C107-FS81.5.mp3'
import a6 from '../assets/audio/C107-D81.1.mp3'
import a7 from '../assets/audio/C107-D81.2.mp3'
import a8 from '../assets/audio/C107-D81.3.mp3'
import a9 from '../assets/audio/C107-D81.4.mp3'
import a10 from '../assets/audio/C107-D81.5.mp3'
import a11 from '../assets/audio/C107-D81.6.mp3'
import a12 from '../assets/audio/C107-D81.7.mp3'
import a13 from '../assets/audio/C107-D81.8.mp3'
import a14 from '../assets/audio/C107-D81.9.mp3'
import a15 from '../assets/audio/C107-D81.10.mp3'
import a16 from '../assets/audio/C107-D81.11.mp3'
import a17 from '../assets/audio/C107-D81.12.mp3'
import a18 from '../assets/audio/C107-L81.1.mp3'
import i0 from '../assets/c1-07-vocabulary173.webp'
import w141clip0 from '../assets/audio/C107-W141.1.mp3'
import w141clip1 from '../assets/audio/C107-W141.2.mp3'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'C107-W141.1',
      text: 'Hi, Ana. The supplier has confirmed that the lower quote of four thousand eight hundred is available on the thirteenth of December. The budget limit remains five thousand. That resolves the pending supplier date, but it doesn’t automatically confirm the team’s availability or authorise the spending. Could you update both briefings?',
      src: w141clip0,
    },
    {
      id: 'C107-W141.2',
      text: 'The funding person now has a costed option to review; the rota organiser can ask who is available for that date. Please preserve the distinction between a supplier confirmation and our own final event confirmation. We don’t need to repeat the colour discussion or every abandoned suggestion. A useful summary gives the decision, its reason and the next action for this particular recipient.',
      src: w141clip1,
    },
    {
      id: 'C107-FS81.0',
      text: 'a key takeaway. The key takeaway is the postponement.',
      src: a0,
    },
    {
      id: 'C107-FS81.1',
      text: 'a constraint. The budget is a constraint.',
      src: a1,
    },
    {
      id: 'C107-FS81.2',
      text: 'an outcome. Separate an intended outcome from a confirmed decision.',
      src: a2,
    },
    {
      id: 'C107-FS81.3',
      text: 'an action point. Each action point needs a recipient.',
      src: a3,
    },
    {
      id: 'C107-FS81.4',
      text: 'a supporting detail. Keep the supporting detail that explains the decision.',
      src: a4,
    },
    {
      id: 'C107-FS81.5',
      text: 'an executive summary. An executive summary should preserve the uncertainty.',
      src: a5,
    },
    {
      id: 'C107-D81.1',
      text: 'Having talked to the team, what would you tell someone who missed the meeting?',
      src: a6,
    },
    {
      id: 'C107-D81.2',
      text: 'The key point is that the event is being postponed, because the current quote exceeds the budget.',
      src: a7,
    },
    {
      id: 'C107-D81.3',
      text: 'Would you start with every number from the discussion?',
      src: a8,
    },
    {
      id: 'C107-D81.4',
      text: 'Not for everyone. The funding decision-maker needs the cost comparison; the rota organiser needs the date.',
      src: a9,
    },
    {
      id: 'C107-D81.5',
      text: 'But the new date hasn’t been confirmed yet.',
      src: a10,
    },
    {
      id: 'C107-D81.6',
      text: 'Exactly. Given that constraint, I’d mark it as pending rather than ask people to rearrange everything.',
      src: a11,
    },
    {
      id: 'C107-D81.7',
      text: 'What can you leave out without changing the meaning?',
      src: a12,
    },
    {
      id: 'C107-D81.8',
      text: 'The colour discussion and the sequence of suggestions. Neither changes the decision now.',
      src: a13,
    },
    {
      id: 'C107-D81.9',
      text: 'What action does the funding person need to take?',
      src: a14,
    },
    {
      id: 'C107-D81.10',
      text: 'Review the lower quote once the supplier’s date is confirmed.',
      src: a15,
    },
    { id: 'C107-D81.11', text: 'And the rota organiser?', src: a16 },
    {
      id: 'C107-D81.12',
      text: 'Wait for that confirmation, then check availability. Same facts, a different first question.',
      src: a17,
    },
    {
      id: 'C107-L81.1',
      text: 'Hi, Ana. The supplier has confirmed that the lower quote of four thousand eight hundred is available on the thirteenth of December. The budget limit remains five thousand. That resolves the pending supplier date, but it doesn’t automatically confirm the team’s availability or authorise the spending. Could you update both briefings? The funding person now has a costed option to review; the rota organiser can ask who is available for that date. Please preserve the distinction between a supplier confirmation and our own final event confirmation. We don’t need to repeat the colour discussion or every abandoned suggestion. A useful summary gives the decision, its reason and the next action for this particular recipient.',
      src: a18,
    },
  ],
  images: { 'c1-07-vocabulary173': i0 },
}
export default prepared
