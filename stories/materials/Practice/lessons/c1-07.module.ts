import type { PreparedPractice } from '../Practice.types'
import data from './c1-07.json'
import asset0 from '../../Course/assets/audio/C107-D81.1.mp3'
import asset1 from '../../Course/assets/audio/C107-D81.2.mp3'
import asset2 from '../../Course/assets/audio/C107-D81.3.mp3'
import asset3 from '../../Course/assets/audio/C107-D81.4.mp3'
import asset4 from '../../Course/assets/audio/C107-D81.5.mp3'
import asset5 from '../../Course/assets/audio/C107-D81.6.mp3'
import asset6 from '../../Course/assets/audio/C107-D81.7.mp3'
import asset7 from '../../Course/assets/audio/C107-D81.8.mp3'
import asset8 from '../../Course/assets/audio/C107-D81.9.mp3'
import asset9 from '../../Course/assets/audio/C107-D81.10.mp3'
import asset10 from '../../Course/assets/audio/C107-D81.11.mp3'
import asset11 from '../../Course/assets/audio/C107-D81.12.mp3'
import asset12 from '../../Course/assets/audio/C107-V81.0.mp3'
import asset13 from '../../Course/assets/audio/C107-FE81.0.mp3'
import asset14 from '../../Course/assets/audio/C107-V81.1.mp3'
import asset15 from '../../Course/assets/audio/C107-FE81.1.mp3'
import asset16 from '../../Course/assets/audio/C107-V81.2.mp3'
import asset17 from '../../Course/assets/audio/C107-FE81.2.mp3'
import asset18 from '../../Course/assets/audio/C107-V81.3.mp3'
import asset19 from '../../Course/assets/audio/C107-FE81.3.mp3'
import asset20 from '../../Course/assets/audio/C107-V81.4.mp3'
import asset21 from '../../Course/assets/audio/C107-FE81.4.mp3'
import asset22 from '../../Course/assets/audio/C107-V81.5.mp3'
import asset23 from '../../Course/assets/audio/C107-FE81.5.mp3'
import asset24 from '../assets/characters/kim.webp'
import asset25 from '../assets/characters/ana.webp'
import asset26 from '../../Course/assets/c1-07-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'c1-07.shadowing.01',
      text: 'Having talked to the team, what would you tell someone who missed the meeting?',
      src: asset0,
    },
    {
      id: 'c1-07.shadowing.02',
      text: 'The key point is that the event is being postponed, because the current quote exceeds the budget.',
      src: asset1,
    },
    {
      id: 'c1-07.shadowing.03',
      text: 'Would you start with every number from the discussion?',
      src: asset2,
    },
    {
      id: 'c1-07.shadowing.04',
      text: 'Not for everyone. The funding decision-maker needs the cost comparison; the rota organiser needs the date.',
      src: asset3,
    },
    {
      id: 'c1-07.shadowing.05',
      text: 'But the new date hasn’t been confirmed yet.',
      src: asset4,
    },
    {
      id: 'c1-07.shadowing.06',
      text: 'Exactly. Given that constraint, I’d mark it as pending rather than ask people to rearrange everything.',
      src: asset5,
    },
    {
      id: 'c1-07.shadowing.07',
      text: 'What can you leave out without changing the meaning?',
      src: asset6,
    },
    {
      id: 'c1-07.shadowing.08',
      text: 'The colour discussion and the sequence of suggestions. Neither changes the decision now.',
      src: asset7,
    },
    {
      id: 'c1-07.shadowing.09',
      text: 'What action does the funding person need to take?',
      src: asset8,
    },
    {
      id: 'c1-07.shadowing.10',
      text: 'Review the lower quote once the supplier’s date is confirmed.',
      src: asset9,
    },
    { id: 'c1-07.shadowing.11', text: 'And the rota organiser?', src: asset10 },
    {
      id: 'c1-07.shadowing.12',
      text: 'Wait for that confirmation, then check availability. Same facts, a different first question.',
      src: asset11,
    },
    {
      id: 'course-c1-07-key-takeaway.front',
      text: 'a key takeaway',
      src: asset12,
    },
    {
      id: 'course-c1-07-key-takeaway.back',
      text: 'The key takeaway is the postponement.',
      src: asset13,
    },
    { id: 'course-c1-07-constraint.front', text: 'a constraint', src: asset14 },
    {
      id: 'course-c1-07-constraint.back',
      text: 'The budget is a constraint.',
      src: asset15,
    },
    { id: 'course-c1-07-outcome.front', text: 'an outcome', src: asset16 },
    {
      id: 'course-c1-07-outcome.back',
      text: 'Separate an intended outcome from a confirmed decision.',
      src: asset17,
    },
    {
      id: 'course-c1-07-action-point.front',
      text: 'an action point',
      src: asset18,
    },
    {
      id: 'course-c1-07-action-point.back',
      text: 'Each action point needs a recipient.',
      src: asset19,
    },
    {
      id: 'course-c1-07-supporting-detail.front',
      text: 'a supporting detail',
      src: asset20,
    },
    {
      id: 'course-c1-07-supporting-detail.back',
      text: 'Keep the supporting detail that explains the decision.',
      src: asset21,
    },
    {
      id: 'course-c1-07-executive-summary.front',
      text: 'an executive summary',
      src: asset22,
    },
    {
      id: 'course-c1-07-executive-summary.back',
      text: 'An executive summary should preserve the uncertainty.',
      src: asset23,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset24,
    '/flashcards/course-characters/ana/image.webp': asset25,
    '/flashcards-transparent/course-images/4ee65c2f7d887bdc2b0a4a8bc1634311c12f99f3a3f001d9f75d36300793bac2/image.webp':
      asset26,
  },
}
export default prepared
