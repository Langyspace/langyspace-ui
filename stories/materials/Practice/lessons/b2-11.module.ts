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
import expanded124Asset0 from '../assets/flashcards124/7e278892cf445783c3fc38dd8aaccff9b7bec2360ffe7601e9190a1ff27cc034.mp3'
import expanded124Asset1 from '../assets/flashcards124/d8ae4d4c0cb2ce1462adf87c508f05eeae48396aedf1b702a6a13cb3e6ab6d3c.mp3'
import expanded124Asset2 from '../assets/flashcards124/c7ee87777c5d49c4fc9ca21668df068ede9fd1e37e5ba299042951beebcabc9e.mp3'
import expanded124Asset3 from '../assets/flashcards124/90ecc9d633caa9ad5e9862eca2c3afc221107bf078c2c03e1e9c5d758bbc1e56.mp3'
import expanded124Asset4 from '../assets/flashcards124/8c5c880df32300533f7fd1c12f94275b8fb09389cf64145523fdb8c7978b3477.mp3'
import expanded124Asset5 from '../assets/flashcards124/1344a0ee45472bac1e2bf4c4b0590a9d379730e35f4e2d93c8df18265a46e4aa.mp3'
import expanded124Asset6 from '../assets/flashcards124/7ef473ade8d98fa88b63460eab5dc1616b03424290dd62050ba001b636530fcc.mp3'
import expanded124Asset7 from '../assets/flashcards124/39cddd063b8c6e1b627073cd193e57e3cc2b7dd073537b91e2321148239e4f56.mp3'
import expanded124Asset8 from '../assets/flashcards124/544aaaba25c44db1fdd827361eaf1a777dff8c95ef514868f138e7e0ab9a1c6a.mp3'
import expanded124Asset9 from '../assets/flashcards124/8e90f4953e13efa750c336227a7a47093db6c9b49463423a84a9691ef062a7ef.mp3'
import expanded124Asset10 from '../assets/flashcards124/011a6d93bbe9a32723a7b6cfd0ef492da0fdbaac8bef64f91b3e4480cfffb35e.mp3'
import expanded124Asset11 from '../assets/flashcards124/e7a9add162903dc40ecc7819500332edf2dad97233552a4858e1d7fc66d6a505.mp3'
import expanded124Asset12 from '../assets/flashcards124/ad2e3c7d8519afea52e7140f9e15b2640f66e38fe621c524c47d317ddaeba7fc.mp3'
import expanded124Asset13 from '../assets/flashcards124/ab321c80a759a5f571f1ced7a35470a29151aac5d0a7425cad58f404b8f0fcfa.mp3'
import expanded124Asset14 from '../assets/flashcards124/0cdb0cb261095fb77493d22a3260d0961adfa3e5ab383aa3f5f4a24a75670a25.mp3'
import expanded124Asset15 from '../assets/flashcards124/9d9484e2d52f379d44202df235154bdebb6bb5967ac51c48074890d273712afa.mp3'
import expanded124Asset16 from '../assets/flashcards124/c000c683e8b7a58f971ca72a87b376e218053145187425aa6a65907569a6b6bf.mp3'
import expanded124Asset17 from '../assets/flashcards124/3faa88106d20dee30e00597879fac1a416715d0a16934ebd128b0a6f711dbe09.mp3'
import expanded124Asset18 from '../assets/flashcards124/5b5f2c823ecc9eb5e0a9ccf18924afc4c4df3c9b04a306fa98ff49ca6344fe38.mp3'
import expanded124Asset19 from '../assets/flashcards124/47d8b1308d78b147bd81fe02909bb29efac19e88d4b4ef3dd1d58a289610e31c.webp'
import expanded124Asset20 from '../assets/flashcards124/82ad3983780cd59c5bdb8376c0690d0c34a001b4af1391e02f561847d21feca9.webp'
import expanded124Asset21 from '../assets/flashcards124/4ee65c2f7d887bdc2b0a4a8bc1634311c12f99f3a3f001d9f75d36300793bac2.webp'
import expanded124Asset22 from '../assets/flashcards124/ace14dfd4188ad115348d3cbb6f31103b7f412e5981ad55f0d5fa14eac948d6f.webp'
import expanded124Asset23 from '../assets/flashcards124/87c382f072ed1fb19aa4ee86097801903ae06d61aa46f2a7fb2fae2dffe8c877.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'C106-FS81.0',
      text: 'a trade-off. This is a trade-off between cost and flexibility.',
      src: expanded124Asset0,
    },
    {
      id: 'deck-b2-business-priority.front',
      text: 'priority. This project is our top priority.',
      src: expanded124Asset1,
    },
    {
      id: 'C106-FS81.4',
      text: 'a deal-breaker. A fixed timetable conflict could be a deal-breaker.',
      src: expanded124Asset2,
    },
    {
      id: 'C106-FS81.5',
      text: 'reconsider a decision. We should reconsider the decision when the conditions change.',
      src: expanded124Asset3,
    },
    {
      id: 'course-c1-07-constraint.front',
      text: 'a constraint',
      src: expanded124Asset4,
    },
    {
      id: 'course-c1-07-constraint.back',
      text: 'The budget is a constraint.',
      src: expanded124Asset5,
    },
    {
      id: 'course-c1-07-outcome.front',
      text: 'an outcome',
      src: expanded124Asset6,
    },
    {
      id: 'course-c1-07-outcome.back',
      text: 'Separate an intended outcome from a confirmed decision.',
      src: expanded124Asset7,
    },
    {
      id: 'course-c1-07-action-point.front',
      text: 'an action point',
      src: expanded124Asset8,
    },
    {
      id: 'course-c1-07-action-point.back',
      text: 'Each action point needs a recipient.',
      src: expanded124Asset9,
    },
    {
      id: 'course-c1-07-supporting-detail.front',
      text: 'a supporting detail',
      src: expanded124Asset10,
    },
    {
      id: 'course-c1-07-supporting-detail.back',
      text: 'Keep the supporting detail that explains the decision.',
      src: expanded124Asset11,
    },
    {
      id: 'course-c1-07-executive-summary.front',
      text: 'an executive summary',
      src: expanded124Asset12,
    },
    {
      id: 'course-c1-07-executive-summary.back',
      text: 'An executive summary should preserve the uncertainty.',
      src: expanded124Asset13,
    },
    {
      id: 'C108-FS81.2',
      text: 'a counterproposal. The counterproposal keeps regular contact.',
      src: expanded124Asset14,
    },
    {
      id: 'C108-FS81.3',
      text: 'a feasible option. We need a feasible option, not a vague agreement.',
      src: expanded124Asset15,
    },
    {
      id: 'C108-FS81.4',
      text: 'a shared interest. Useful contact is the shared interest.',
      src: expanded124Asset16,
    },
    {
      id: 'C108-FS81.5',
      text: 'a sticking point. Notice remains the sticking point.',
      src: expanded124Asset17,
    },
    {
      id: 'C112-FS81.4',
      text: 'a fallback option. A fallback option must be usable in practice.',
      src: expanded124Asset18,
    },
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
    '/flashcards/course-practice/expanded124/47d8b1308d78b147bd81fe02909bb29efac19e88d4b4ef3dd1d58a289610e31c.webp':
      expanded124Asset19,
    '/flashcards-transparent/b2/business/priority/image.webp':
      expanded124Asset20,
    '/flashcards-transparent/course-images/4ee65c2f7d887bdc2b0a4a8bc1634311c12f99f3a3f001d9f75d36300793bac2/image.webp':
      expanded124Asset21,
    '/flashcards/course-practice/expanded124/ace14dfd4188ad115348d3cbb6f31103b7f412e5981ad55f0d5fa14eac948d6f.webp':
      expanded124Asset22,
    '/flashcards/course-practice/expanded124/87c382f072ed1fb19aa4ee86097801903ae06d61aa46f2a7fb2fae2dffe8c877.webp':
      expanded124Asset23,
    '/flashcards/course-characters/kim/image.webp': asset24,
    '/flashcards/course-characters/ana/image.webp': asset25,
    '/flashcards-transparent/course-images/0c36eb20b300ad81daf62af4ede5b14d6bada254453e6cbf6805ebaef92796c7/image.webp':
      asset26,
  },
}
export default prepared
