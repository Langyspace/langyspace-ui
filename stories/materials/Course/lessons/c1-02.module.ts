import data from './c1-02.json'
import type { PreparedCourseData } from '../Course.types'
import type { CourseLessonData } from '../Course.types'
import a0 from '../assets/audio/C102-FS81.0.mp3'
import a1 from '../assets/audio/C102-FS81.1.mp3'
import a2 from '../assets/audio/C102-FS81.2.mp3'
import a3 from '../assets/audio/C102-FS81.3.mp3'
import a4 from '../assets/audio/C102-FS81.4.mp3'
import a5 from '../assets/audio/C102-FS81.5.mp3'
import a6 from '../assets/audio/C102-D81.1.mp3'
import a7 from '../assets/audio/C102-D81.2.mp3'
import a8 from '../assets/audio/C102-D81.3.mp3'
import a9 from '../assets/audio/C102-D81.4.mp3'
import a10 from '../assets/audio/C102-D81.5.mp3'
import a11 from '../assets/audio/C102-D81.6.mp3'
import a12 from '../assets/audio/C102-D81.7.mp3'
import a13 from '../assets/audio/C102-D81.8.mp3'
import a14 from '../assets/audio/C102-D81.9.mp3'
import a15 from '../assets/audio/C102-D81.10.mp3'
import a16 from '../assets/audio/C102-D81.11.mp3'
import a17 from '../assets/audio/C102-D81.12.mp3'
import a18 from '../assets/audio/C102-L81.1.mp3'
import i0 from '../assets/c1-02-vocabulary81.webp'
const prepared: PreparedCourseData = {
  data: data as CourseLessonData,
  recordings: [
    {
      id: 'C102-FS81.0',
      text: 'an assumption. We should make the assumption explicit.',
      src: a0,
    },
    {
      id: 'C102-FS81.1',
      text: 'a warning sign. A warning sign is useful only if someone can act.',
      src: a1,
    },
    {
      id: 'C102-FS81.2',
      text: 'a contingency plan. The contingency plan needs a decision owner.',
      src: a2,
    },
    {
      id: 'C102-FS81.3',
      text: 'an oversight. The missing check may have been an oversight.',
      src: a3,
    },
    {
      id: 'C102-FS81.4',
      text: 'a root cause. One symptom does not establish the root cause.',
      src: a4,
    },
    {
      id: 'C102-FS81.5',
      text: 'a lesson learned. A lesson learned should lead to a testable action.',
      src: a5,
    },
    {
      id: 'C102-D81.1',
      text: 'Had we known the sound test hadn’t happened, we could have held the doors for a few minutes.',
      src: a6,
    },
    {
      id: 'C102-D81.2',
      text: 'Possibly, but did anyone have that information before the guests arrived?',
      src: a7,
    },
    {
      id: 'C102-D81.3',
      text: 'The timeline only says the test wasn’t completed. It doesn’t say who knew.',
      src: a8,
    },
    {
      id: 'C102-D81.4',
      text: 'Then I’d avoid calling it an ignored warning until we check the message record.',
      src: a9,
    },
    {
      id: 'C102-D81.5',
      text: 'Fair. We do know the event started twelve minutes late and some guests arrived before opening.',
      src: a10,
    },
    {
      id: 'C102-D81.6',
      text: 'Those are outcomes, not necessarily the root cause of each other.',
      src: a11,
    },
    {
      id: 'C102-D81.7',
      text: 'What would distinguish a planning problem from a communication problem?',
      src: a12,
    },
    {
      id: 'C102-D81.8',
      text: 'Whether there was time for the test, and whether an actionable warning reached a responsible person.',
      src: a13,
    },
    {
      id: 'C102-D81.9',
      text: 'So we need to check both instead of choosing the most convenient explanation.',
      src: a14,
    },
    {
      id: 'C102-D81.10',
      text: 'Exactly. An earlier checkpoint might help, but only if someone owns the decision it triggers.',
      src: a15,
    },
    {
      id: 'C102-D81.11',
      text: 'If we do this again, I’d name that person and define when they can delay opening.',
      src: a16,
    },
    {
      id: 'C102-D81.12',
      text: 'That’s a specific prevention we can test, while keeping the causal claim provisional.',
      src: a17,
    },
    {
      id: 'C102-L81.1',
      text: 'Hi, Ana. I found the missing message record. A warning that the sound test was incomplete was sent before the planned opening time, but it went to a shared group without a named person responsible for responding. There’s no acknowledgement in the record. That makes a communication failure more plausible than simply saying nobody noticed a problem. It still doesn’t establish whether enough testing time had been scheduled, or whether a recipient read the warning and chose not to act. Could you revise the review to reflect that distinction? I’d like one preventive action linked to what we can actually establish, rather than a general instruction to be more careful. If you use “Had we known”, please make clear whose knowledge you mean.',
      src: a18,
    },
  ],
  images: { 'c1-02-vocabulary81': i0 },
}
export default prepared
