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
import expanded124Asset0 from '../assets/flashcards124/4d75ea22267a8805844a6855aeec4321613090abefb16aa3873e3c8109ab12f9.mp3'
import expanded124Asset1 from '../assets/flashcards124/a0a6748cd5f8029450e61d3e5eda456101fcda4c942ef76f73ccfef5df9dff51.mp3'
import expanded124Asset2 from '../assets/flashcards124/5e4c93f324f48e81824fefacca4fe4b28944b767c1f4bc62fc21614999286a7d.mp3'
import expanded124Asset3 from '../assets/flashcards124/efb2bf57ae1eeccfb7544561a9c55496ac7a3039af1df0ecd2ba7ac3d0e57b0b.mp3'
import expanded124Asset4 from '../assets/flashcards124/1cbc9e440eccd4205fd480849a3bea0fe442b74ba89aaa0ea1b06b5e6fcbdea2.mp3'
import expanded124Asset5 from '../assets/flashcards124/66c6d434643739dd3d79867e30786d8ec601911d3a6a53242d7a979480ec1d51.mp3'
import expanded124Asset6 from '../assets/flashcards124/5bca7f0ba227be6b3318e3c25d87162bb50ea0b209b99e101f5f35029a21e9de.mp3'
import expanded124Asset7 from '../assets/flashcards124/b083afc9864d9f98aebebdf3b8edfb2877bd87f7c8d37f11f24ccd59d23daca8.mp3'
import expanded124Asset8 from '../assets/flashcards124/6396b89a6676286e0e20a61adad994fa86be75dadcfb3979e795b226f19bbccf.mp3'
import expanded124Asset9 from '../assets/flashcards124/7e278892cf445783c3fc38dd8aaccff9b7bec2360ffe7601e9190a1ff27cc034.mp3'
import expanded124Asset10 from '../assets/flashcards124/d8ae4d4c0cb2ce1462adf87c508f05eeae48396aedf1b702a6a13cb3e6ab6d3c.mp3'
import expanded124Asset11 from '../assets/flashcards124/227e3a5d19b51c966c44f6645869e7a7dbc74a705af27524115cdf4da1b43e22.mp3'
import expanded124Asset12 from '../assets/flashcards124/8417aaadd041e84e9055508bac0e1d452bc9dc9f4aeca5248f3423ad348c885a.mp3'
import expanded124Asset13 from '../assets/flashcards124/161d54f1b77dc273bd66930f432304fb6cf477524360cd8befc09f61b6a74a3a.mp3'
import expanded124Asset14 from '../assets/flashcards124/1f0a9b43b16e3dc808801d5c1d9fa0b884ec83a163c101fde6625d80081e8dd5.webp'
import expanded124Asset15 from '../assets/flashcards124/5037f706134bf69ba6fb9977e35817287306ca8c912e6ce2fc3cd8c8d577b70e.webp'
import expanded124Asset16 from '../assets/flashcards124/ab56839474636e324af9a3a0c1d830d57340a74e5a61656ee025e82d74da4b27.webp'
import expanded124Asset17 from '../assets/flashcards124/47d8b1308d78b147bd81fe02909bb29efac19e88d4b4ef3dd1d58a289610e31c.webp'
import expanded124Asset18 from '../assets/flashcards124/82ad3983780cd59c5bdb8376c0690d0c34a001b4af1391e02f561847d21feca9.webp'
import expanded124Asset19 from '../assets/flashcards124/7432e9d9d31ef5bce3c8344028154fe4aa9d144d9b02234b80fa6469afa98950.webp'
import expanded124Asset20 from '../assets/flashcards124/94bc97a6de0a0e0b46fe8f73be7b171572e3153ebe6d56bf5da5a2c854ff0552.webp'
import expanded124Asset21 from '../assets/flashcards124/f63451846301546345841ba8ec2c418ed74e426f1f911ccf9ab66b97e1d37403.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'deck-b2-business-update.front',
      text: 'update. Can you send me an update?',
      src: expanded124Asset0,
    },
    {
      id: 'C110-FS81.1',
      text: 'a recipient. Choose the tone for the recipient.',
      src: expanded124Asset1,
    },
    {
      id: 'C110-FS81.2',
      text: 'a tone. A formal tone is not automatically clearer.',
      src: expanded124Asset2,
    },
    {
      id: 'C110-FS81.3',
      text: 'an acknowledgement. An acknowledgement is not an attendance commitment.',
      src: expanded124Asset3,
    },
    {
      id: 'C110-FS81.4',
      text: 'a call to action. The call to action needs a deadline.',
      src: expanded124Asset4,
    },
    {
      id: 'C110-FS81.5',
      text: 'a follow-up. A follow-up should address the missing answer.',
      src: expanded124Asset5,
    },
    {
      id: 'C103-FS81.2',
      text: 'a reliable source. Check whether this is a reliable source for the particular claim.',
      src: expanded124Asset6,
    },
    {
      id: 'C103-FS81.4',
      text: 'an official statement. The official statement has a narrower scope.',
      src: expanded124Asset7,
    },
    {
      id: 'C103-FS81.5',
      text: 'verify a claim. We need to verify the claim before sharing it.',
      src: expanded124Asset8,
    },
    {
      id: 'C106-FS81.0',
      text: 'a trade-off. This is a trade-off between cost and flexibility.',
      src: expanded124Asset9,
    },
    {
      id: 'deck-b2-business-priority.front',
      text: 'priority. This project is our top priority.',
      src: expanded124Asset10,
    },
    {
      id: 'deck-b2-software-development-vocabulary-assumption.front',
      text: 'assumption. The estimate relies on the assumption that the API contract will not change.',
      src: expanded124Asset11,
    },
    {
      id: 'C102-FS81.4',
      text: 'a root cause. One symptom does not establish the root cause.',
      src: expanded124Asset12,
    },
    {
      id: 'B202-FS81.5',
      text: 'a handover. We need to agree a staged handover.',
      src: expanded124Asset13,
    },
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
    '/flashcards-transparent/b2/business/update/image.webp': expanded124Asset14,
    '/flashcards-transparent/course-practice/homework-media131/5037f706134bf69ba6fb9977e35817287306ca8c912e6ce2fc3cd8c8d577b70e/image.webp':
      expanded124Asset15,
    '/flashcards-transparent/course-practice/homework-media131/ab56839474636e324af9a3a0c1d830d57340a74e5a61656ee025e82d74da4b27/image.webp':
      expanded124Asset16,
    '/flashcards-transparent/course-practice/homework-media131/47d8b1308d78b147bd81fe02909bb29efac19e88d4b4ef3dd1d58a289610e31c/image.webp':
      expanded124Asset17,
    '/flashcards-transparent/b2/business/priority/image.webp':
      expanded124Asset18,
    '/flashcards/b2/software-development-vocabulary/assumption/image.webp':
      expanded124Asset19,
    '/flashcards-transparent/course-practice/homework-media131/94bc97a6de0a0e0b46fe8f73be7b171572e3153ebe6d56bf5da5a2c854ff0552/image.webp':
      expanded124Asset20,
    '/flashcards-transparent/course-practice/homework-media131/f63451846301546345841ba8ec2c418ed74e426f1f911ccf9ab66b97e1d37403/image.webp':
      expanded124Asset21,
    '/flashcards/course-characters/kim/image.webp': asset24,
    '/flashcards/course-characters/ana/image.webp': asset25,
    '/flashcards-transparent/course-images/4ee65c2f7d887bdc2b0a4a8bc1634311c12f99f3a3f001d9f75d36300793bac2/image.webp':
      asset26,
  },
}
export default prepared
