import data from './b2-12.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/B212-FS81.0.mp3'
import a1 from '../assets/audio/B212-FS81.1.mp3'
import a2 from '../assets/audio/B212-FS81.2.mp3'
import a3 from '../assets/audio/B212-FS81.3.mp3'
import a4 from '../assets/audio/B212-FS81.4.mp3'
import a5 from '../assets/audio/B212-FS81.5.mp3'
import a6 from '../assets/audio/B212-D81.1.mp3'
import a7 from '../assets/audio/B212-D81.2.mp3'
import a8 from '../assets/audio/B212-D81.3.mp3'
import a9 from '../assets/audio/B212-D81.4.mp3'
import a10 from '../assets/audio/B212-D81.5.mp3'
import a11 from '../assets/audio/B212-D81.6.mp3'
import a12 from '../assets/audio/B212-D81.7.mp3'
import a13 from '../assets/audio/B212-D81.8.mp3'
import a14 from '../assets/audio/B212-D81.9.mp3'
import a15 from '../assets/audio/B212-D81.10.mp3'
import a16 from '../assets/audio/B212-D81.11.mp3'
import a17 from '../assets/audio/B212-D81.12.mp3'
import a18 from '../assets/audio/B212-L81.1.mp3'
import i0 from '../assets/b2-12-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'B212-FS81.0',
      text: 'a distraction. Social notifications are a distraction in this case.',
      src: a0,
    },
    {
      id: 'B212-FS81.1',
      text: 'an exception. An exception needs a workable process.',
      src: a1,
    },
    {
      id: 'B212-FS81.2',
      text: 'accessibility. Accessibility use supports participation.',
      src: a2,
    },
    {
      id: 'B212-FS81.3',
      text: 'screen time. Screen time alone doesn’t explain the purpose of use.',
      src: a3,
    },
    {
      id: 'B212-FS81.4',
      text: 'a restriction. The restriction should target the stated problem.',
      src: a4,
    },
    {
      id: 'B212-FS81.5',
      text: 'a shared responsibility. Clear expectations are a shared responsibility.',
      src: a5,
    },
    {
      id: 'B212-D81.1',
      text: 'What problem should a school phone policy actually solve?',
      src: a6,
    },
    {
      id: 'B212-D81.2',
      text: 'For this case, repeated social-message checking is interrupting lessons.',
      src: a7,
    },
    {
      id: 'B212-D81.3',
      text: 'Then a total ban might be simpler than many exceptions.',
      src: a8,
    },
    {
      id: 'B212-D81.4',
      text: 'Possibly, although some learners use a phone as an accessibility tool.',
      src: a9,
    },
    {
      id: 'B212-D81.5',
      text: 'Could the rule allow approved tools while restricting social notifications?',
      src: a10,
    },
    {
      id: 'B212-D81.6',
      text: 'That seems more targeted. We’d need a clear way to request an exception without public explanations.',
      src: a11,
    },
    {
      id: 'B212-D81.7',
      text: 'What about family contact during an emergency?',
      src: a12,
    },
    {
      id: 'B212-D81.8',
      text: 'A named contact route could help, but we shouldn’t assume the current office system is always fast enough.',
      src: a13,
    },
    {
      id: 'B212-D81.9',
      text: 'So the policy needs a rule, a reason and a workable exception process.',
      src: a14,
    },
    {
      id: 'B212-D81.10',
      text: 'Yes. Whereas distraction is the target, some phone use supports participation.',
      src: a15,
    },
    {
      id: 'B212-D81.11',
      text: 'I’d test the draft against concrete cases before saying it treats everyone fairly.',
      src: a16,
    },
    {
      id: 'B212-D81.12',
      text: 'Agreed. Despite the need for consistency, identical treatment isn’t always the right response.',
      src: a17,
    },
    {
      id: 'B212-L81.1',
      text: 'Hi, Ana. There’s a case our draft policy hasn’t addressed. A learner uses a phone to read material aloud and communicate when speaking is difficult. Asking for permission publicly every lesson would draw attention to private information and could delay participation. The learner isn’t asking to use social media. Could you reconsider how the exception works, rather than treating this as a choice between no rules and unlimited phone use? A private agreement, clear permitted use and a way to review problems might be worth discussing. The main classroom concern remains repeated social-message checking, so we still need a rule that addresses that specific problem.',
      src: a18,
    },
  ],
  images: { 'b2-12-vocabulary81': i0 },
}
export default prepared
