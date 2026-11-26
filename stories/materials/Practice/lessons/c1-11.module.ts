import type { PreparedPractice } from '../Practice.types'
import data from './c1-11.json'
import asset0 from '../../Course/assets/audio/C111-D81.1.mp3'
import asset1 from '../../Course/assets/audio/C111-D81.2.mp3'
import asset2 from '../../Course/assets/audio/C111-D81.3.mp3'
import asset3 from '../../Course/assets/audio/C111-D81.4.mp3'
import asset4 from '../../Course/assets/audio/C111-D81.5.mp3'
import asset5 from '../../Course/assets/audio/C111-D81.6.mp3'
import asset6 from '../../Course/assets/audio/C111-D81.7.mp3'
import asset7 from '../../Course/assets/audio/C111-D81.8.mp3'
import asset8 from '../../Course/assets/audio/C111-D81.9.mp3'
import asset9 from '../../Course/assets/audio/C111-D81.10.mp3'
import asset10 from '../../Course/assets/audio/C111-D81.11.mp3'
import asset11 from '../../Course/assets/audio/C111-D81.12.mp3'
import asset12 from '../../Course/assets/audio/C111-V81.0.mp3'
import asset13 from '../../Course/assets/audio/C111-FE81.0.mp3'
import asset14 from '../../Course/assets/audio/C111-V81.1.mp3'
import asset15 from '../../Course/assets/audio/C111-FE81.1.mp3'
import asset16 from '../../Course/assets/audio/C111-V81.2.mp3'
import asset17 from '../../Course/assets/audio/C111-FE81.2.mp3'
import asset18 from '../../Course/assets/audio/C111-V81.3.mp3'
import asset19 from '../../Course/assets/audio/C111-FE81.3.mp3'
import asset20 from '../../Course/assets/audio/C111-V81.4.mp3'
import asset21 from '../../Course/assets/audio/C111-FE81.4.mp3'
import asset22 from '../../Course/assets/audio/C111-V81.5.mp3'
import asset23 from '../../Course/assets/audio/C111-FE81.5.mp3'
import asset24 from '../assets/characters/kim.webp'
import asset25 from '../assets/characters/ana.webp'
import asset26 from '../../Course/assets/c1-11-vocabulary81.webp'
import expanded124Asset0 from '../assets/flashcards124/5e4c93f324f48e81824fefacca4fe4b28944b767c1f4bc62fc21614999286a7d.mp3'
import expanded124Asset1 from '../assets/flashcards124/a0a6748cd5f8029450e61d3e5eda456101fcda4c942ef76f73ccfef5df9dff51.mp3'
import expanded124Asset2 from '../assets/flashcards124/efb2bf57ae1eeccfb7544561a9c55496ac7a3039af1df0ecd2ba7ac3d0e57b0b.mp3'
import expanded124Asset3 from '../assets/flashcards124/5bca7f0ba227be6b3318e3c25d87162bb50ea0b209b99e101f5f35029a21e9de.mp3'
import expanded124Asset4 from '../assets/flashcards124/b083afc9864d9f98aebebdf3b8edfb2877bd87f7c8d37f11f24ccd59d23daca8.mp3'
import expanded124Asset5 from '../assets/flashcards124/6396b89a6676286e0e20a61adad994fa86be75dadcfb3979e795b226f19bbccf.mp3'
import expanded124Asset6 from '../assets/flashcards124/9bfba94eb6bd5bc126b0ed897f55916fe129b47e334d2583b16457a287d70212.mp3'
import expanded124Asset7 from '../assets/flashcards124/048166f02878facd74c10cb9aa94bf73dfbcc651d17f962071780b82b25af0f4.mp3'
import expanded124Asset8 from '../assets/flashcards124/3782f65a1d485687f333ebd012e64faba5bcef7e7b25f3dbad92f30e9aa1e252.mp3'
import expanded124Asset9 from '../assets/flashcards124/458467a65517c699e80692575cc0bbb8c2a2e99256b11bac841ea0d2d06f4158.mp3'
import expanded124Asset10 from '../assets/flashcards124/95dc04bd147a9a75b741ca7d41fb65a3d74f63a950dec78816a8b08bb0aafff2.mp3'
import expanded124Asset11 from '../assets/flashcards124/3b052f6e5059671b478ed492ea841f6b868e87cba0fa5d211fade81976eb100c.mp3'
import expanded124Asset12 from '../assets/flashcards124/c000c683e8b7a58f971ca72a87b376e218053145187425aa6a65907569a6b6bf.mp3'
import expanded124Asset13 from '../assets/flashcards124/3faa88106d20dee30e00597879fac1a416715d0a16934ebd128b0a6f711dbe09.mp3'
import expanded124Asset14 from '../assets/flashcards124/0cdb0cb261095fb77493d22a3260d0961adfa3e5ab383aa3f5f4a24a75670a25.mp3'
import expanded124Asset15 from '../assets/flashcards124/4bc2e814cd836fa86183f08bd1dcb616ebf7db8270f5183e0d5bb9c4f638b2a6.mp3'
import expanded124Asset16 from '../assets/flashcards124/011a6d93bbe9a32723a7b6cfd0ef492da0fdbaac8bef64f91b3e4480cfffb35e.mp3'
import expanded124Asset17 from '../assets/flashcards124/e7a9add162903dc40ecc7819500332edf2dad97233552a4858e1d7fc66d6a505.mp3'
import expanded124Asset18 from '../assets/flashcards124/5037f706134bf69ba6fb9977e35817287306ca8c912e6ce2fc3cd8c8d577b70e.webp'
import expanded124Asset19 from '../assets/flashcards124/ab56839474636e324af9a3a0c1d830d57340a74e5a61656ee025e82d74da4b27.webp'
import expanded124Asset20 from '../assets/flashcards124/491e9411ed01a85d5a63b172b44fa98b4d21a06607e76dcd1b99587e2f298768.webp'
import expanded124Asset21 from '../assets/flashcards124/ace14dfd4188ad115348d3cbb6f31103b7f412e5981ad55f0d5fa14eac948d6f.webp'
import expanded124Asset22 from '../assets/flashcards124/e9bfd85ea2a2e44d4f612fc8e0f56320789ff3227c56515855aec8e94f82bcc6.webp'
import expanded124Asset23 from '../assets/flashcards124/4ee65c2f7d887bdc2b0a4a8bc1634311c12f99f3a3f001d9f75d36300793bac2.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'C110-FS81.2',
      text: 'a tone. A formal tone is not automatically clearer.',
      src: expanded124Asset0,
    },
    {
      id: 'C110-FS81.1',
      text: 'a recipient. Choose the tone for the recipient.',
      src: expanded124Asset1,
    },
    {
      id: 'C110-FS81.3',
      text: 'an acknowledgement. An acknowledgement is not an attendance commitment.',
      src: expanded124Asset2,
    },
    {
      id: 'C103-FS81.2',
      text: 'a reliable source. Check whether this is a reliable source for the particular claim.',
      src: expanded124Asset3,
    },
    {
      id: 'C103-FS81.4',
      text: 'an official statement. The official statement has a narrower scope.',
      src: expanded124Asset4,
    },
    {
      id: 'C103-FS81.5',
      text: 'verify a claim. We need to verify the claim before sharing it.',
      src: expanded124Asset5,
    },
    {
      id: 'course-c1-04-expectation.front',
      text: 'an expectation',
      src: expanded124Asset6,
    },
    {
      id: 'course-c1-04-expectation.back',
      text: 'The expectation needs to be explicit.',
      src: expanded124Asset7,
    },
    {
      id: 'course-c1-04-bring-something-up.front',
      text: 'bring something up',
      src: expanded124Asset8,
    },
    {
      id: 'course-c1-04-bring-something-up.back',
      text: 'Bring it up before resentment grows.',
      src: expanded124Asset9,
    },
    {
      id: 'course-c1-04-recurring-issue.front',
      text: 'a recurring issue',
      src: expanded124Asset10,
    },
    {
      id: 'course-c1-04-recurring-issue.back',
      text: 'The late calls have become a recurring issue.',
      src: expanded124Asset11,
    },
    {
      id: 'C108-FS81.4',
      text: 'a shared interest. Useful contact is the shared interest.',
      src: expanded124Asset12,
    },
    {
      id: 'C108-FS81.5',
      text: 'a sticking point. Notice remains the sticking point.',
      src: expanded124Asset13,
    },
    {
      id: 'C108-FS81.2',
      text: 'a counterproposal. The counterproposal keeps regular contact.',
      src: expanded124Asset14,
    },
    {
      id: 'deck-b2-academy-rephrase.front',
      text: 'rephrase. Let me rephrase my answer.',
      src: expanded124Asset15,
    },
    {
      id: 'course-c1-07-supporting-detail.front',
      text: 'a supporting detail',
      src: expanded124Asset16,
    },
    {
      id: 'course-c1-07-supporting-detail.back',
      text: 'Keep the supporting detail that explains the decision.',
      src: expanded124Asset17,
    },
    {
      id: 'c1-11.shadowing.01',
      text: 'When you say we need a quick reply, do you mean a full answer today?',
      src: asset0,
    },
    {
      id: 'c1-11.shadowing.02',
      text: 'Not necessarily. I need to know the request has been received and when a checked answer will follow.',
      src: asset1,
    },
    {
      id: 'c1-11.shadowing.03',
      text: 'I’d taken quick to mean answering before checking the figures.',
      src: asset2,
    },
    {
      id: 'c1-11.shadowing.04',
      text: 'That would be risky. What I mean is quick acknowledgement, not instant certainty.',
      src: asset3,
    },
    {
      id: 'c1-11.shadowing.05',
      text: 'So, if I understand you correctly, verification can still take until tomorrow?',
      src: asset4,
    },
    {
      id: 'c1-11.shadowing.06',
      text: 'Yes, provided the sender gives a realistic time and updates us if it changes.',
      src: asset5,
    },
    {
      id: 'c1-11.shadowing.07',
      text: 'To put it another way, a message can be fast without pretending the answer is complete.',
      src: asset6,
    },
    {
      id: 'c1-11.shadowing.08',
      text: 'Exactly. A concrete example would be: “Received. I’ll check the figures and reply by four tomorrow.”',
      src: asset7,
    },
    {
      id: 'c1-11.shadowing.09',
      text: 'That also makes the next step easier to track than “verification of availability is ongoing”.',
      src: asset8,
    },
    {
      id: 'c1-11.shadowing.10',
      text: 'Yes. The noun phrase isn’t wrong, but it can hide who is doing what and when.',
      src: asset9,
    },
    {
      id: 'c1-11.shadowing.11',
      text: 'Then our common ground is an accurate answer with a visible response time.',
      src: asset10,
    },
    {
      id: 'c1-11.shadowing.12',
      text: 'And we should check that interpretation with the other person instead of announcing the disagreement is solved.',
      src: asset11,
    },
    {
      id: 'course-c1-11-in-other-words.front',
      text: 'in other words',
      src: asset12,
    },
    {
      id: 'course-c1-11-in-other-words.back',
      text: 'In other words, acknowledgement is not the final answer.',
      src: asset13,
    },
    {
      id: 'course-c1-11-what-i-mean-is.front',
      text: 'what I mean is',
      src: asset14,
    },
    {
      id: 'course-c1-11-what-i-mean-is.back',
      text: 'What I mean is a realistic response time.',
      src: asset15,
    },
    {
      id: 'course-c1-11-to-put-it-another-way.front',
      text: 'to put it another way',
      src: asset16,
    },
    {
      id: 'course-c1-11-to-put-it-another-way.back',
      text: 'To put it another way, imagine a short receipt message.',
      src: asset17,
    },
    {
      id: 'course-c1-11-misunderstanding.front',
      text: 'a misunderstanding',
      src: asset18,
    },
    {
      id: 'course-c1-11-misunderstanding.back',
      text: 'The misunderstanding concerns the meaning of quick.',
      src: asset19,
    },
    {
      id: 'course-c1-11-clarification.front',
      text: 'a clarification',
      src: asset20,
    },
    {
      id: 'course-c1-11-clarification.back',
      text: 'A clarification should make the action concrete.',
      src: asset21,
    },
    {
      id: 'course-c1-11-common-ground.front',
      text: 'common ground',
      src: asset22,
    },
    {
      id: 'course-c1-11-common-ground.back',
      text: 'Accuracy and predictability are common ground.',
      src: asset23,
    },
  ],
  images: {
    '/flashcards-transparent/course-practice/homework-media131/5037f706134bf69ba6fb9977e35817287306ca8c912e6ce2fc3cd8c8d577b70e/image.webp':
      expanded124Asset18,
    '/flashcards-transparent/course-practice/homework-media131/ab56839474636e324af9a3a0c1d830d57340a74e5a61656ee025e82d74da4b27/image.webp':
      expanded124Asset19,
    '/flashcards-transparent/course-images/491e9411ed01a85d5a63b172b44fa98b4d21a06607e76dcd1b99587e2f298768/image.webp':
      expanded124Asset20,
    '/flashcards-transparent/course-practice/homework-media131/ace14dfd4188ad115348d3cbb6f31103b7f412e5981ad55f0d5fa14eac948d6f/image.webp':
      expanded124Asset21,
    '/flashcards-transparent/b2/academy/rephrase/image.webp':
      expanded124Asset22,
    '/flashcards-transparent/course-images/4ee65c2f7d887bdc2b0a4a8bc1634311c12f99f3a3f001d9f75d36300793bac2/image.webp':
      expanded124Asset23,
    '/flashcards/course-characters/kim/image.webp': asset24,
    '/flashcards/course-characters/ana/image.webp': asset25,
    '/flashcards-transparent/course-images/e36eb40175cb97472e5df748c2d39bc60601186371a2d627a7a7e9449fa39d53/image.webp':
      asset26,
  },
}
export default prepared
