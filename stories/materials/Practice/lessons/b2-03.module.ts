import type { PreparedPractice } from '../Practice.types'
import data from './b2-03.json'
import asset0 from '../assets/audio/4dfa87608c9055ef66a4769174bd00ce52d45935f7c62c958d42aac40776ee8a.mp3'
import asset1 from '../assets/audio/0ada508c0ca93ef77eed3f5e9273f40023423740b8e9a4a99b4710a61bd12cc1.mp3'
import asset2 from '../assets/audio/622100b161100a922efec9620445e16d92747358f7cfdde8e31f03a29d07a281.mp3'
import asset3 from '../assets/audio/af6265f0656f065116a28e5101fd8257e4d102b309c3b89e59a6c7c52595239e.mp3'
import asset4 from '../assets/audio/90daed853e72e69d8a6db7730fc2298025f3b187f9ed3c0f5d3fe5947a38ad72.mp3'
import asset5 from '../assets/audio/a61fbfff7e79c280eb8b9b0c0f20cede7f0b91c03380c9b9393d5f7cf3f02be4.mp3'
import asset6 from '../assets/audio/f3893b2628a73e55c1acb6e088e808f5d73891cb62f0c2421819ad8cfd84b685.mp3'
import asset7 from '../assets/audio/87e6cbc7781f18882053c0681446ca570a2e8f6a7a838d89e68882554ceb014e.mp3'
import asset8 from '../assets/audio/59391e9f9038bf03392cdc1a297b22c857da807b5da6837f488595903135fa96.mp3'
import asset9 from '../assets/audio/3e087d249b0a0ddcb4e97bc8f06a2ac7812dfc527a1e86310eeff992b03957f0.mp3'
import asset10 from '../assets/audio/ff18db97e7eecbc0aa765561d364ce1ebc91837cc4ab174f4a7fffc328b5904e.mp3'
import asset11 from '../assets/audio/f81e42f9e3d13347bb50971b0c832f8f8b130d52a403832a64654cd979eeb0d6.mp3'
import asset12 from '../../Course/assets/audio/B203-V81.0.mp3'
import asset13 from '../../Course/assets/audio/B203-FE81.0.mp3'
import asset14 from '../../Course/assets/audio/B203-V81.1.mp3'
import asset15 from '../../Course/assets/audio/B203-FE81.1.mp3'
import asset16 from '../../Course/assets/audio/B203-V81.2.mp3'
import asset17 from '../../Course/assets/audio/B203-FE81.2.mp3'
import asset18 from '../../Course/assets/audio/B203-V81.3.mp3'
import asset19 from '../../Course/assets/audio/B203-FE81.3.mp3'
import asset20 from '../../Course/assets/audio/B203-V81.4.mp3'
import asset21 from '../../Course/assets/audio/B203-FE81.4.mp3'
import asset22 from '../../Course/assets/audio/B203-V81.5.mp3'
import asset23 from '../../Course/assets/audio/B203-FE81.5.mp3'
import asset24 from '../assets/characters/evelyn-carter.webp'
import asset25 from '../assets/characters/owen-harris.webp'
import asset26 from '../../Course/assets/b2-03-vocabulary81.webp'
import expanded124Asset0 from '../assets/flashcards124/7e278892cf445783c3fc38dd8aaccff9b7bec2360ffe7601e9190a1ff27cc034.mp3'
import expanded124Asset1 from '../assets/flashcards124/d8ae4d4c0cb2ce1462adf87c508f05eeae48396aedf1b702a6a13cb3e6ab6d3c.mp3'
import expanded124Asset2 from '../assets/flashcards124/c7ee87777c5d49c4fc9ca21668df068ede9fd1e37e5ba299042951beebcabc9e.mp3'
import expanded124Asset3 from '../assets/flashcards124/90ecc9d633caa9ad5e9862eca2c3afc221107bf078c2c03e1e9c5d758bbc1e56.mp3'
import expanded124Asset4 from '../assets/flashcards124/227e3a5d19b51c966c44f6645869e7a7dbc74a705af27524115cdf4da1b43e22.mp3'
import expanded124Asset5 from '../assets/flashcards124/cb6d9b8b637e637c7f310012cb04b3973c17e904a5d6069fe5039dd27438c8ec.mp3'
import expanded124Asset6 from '../assets/flashcards124/f5ecff96fbb2d3c9445fef0edd12900ba69cc2179471d9792be2d5c7398c91d6.mp3'
import expanded124Asset7 from '../assets/flashcards124/7ef473ade8d98fa88b63460eab5dc1616b03424290dd62050ba001b636530fcc.mp3'
import expanded124Asset8 from '../assets/flashcards124/39cddd063b8c6e1b627073cd193e57e3cc2b7dd073537b91e2321148239e4f56.mp3'
import expanded124Asset9 from '../assets/flashcards124/3c11938d4e8f490a12ec2ef51f7e2a016dc388358a3c407af7da18ac7672a6b8.mp3'
import expanded124Asset10 from '../assets/flashcards124/d9ee458c82b524c1beace1b1e6adb5ef41f8ad7c48cb44f6510e8975fad98cb6.mp3'
import expanded124Asset11 from '../assets/flashcards124/0b94f68855d78a4d4268547d2e46acbc6cfd3f05ea41280f65526dae2f60f305.mp3'
import expanded124Asset12 from '../assets/flashcards124/ec8f230067f84fd2dd38dee368b192b63abd496f860e86f2380a2f6f985b5dc7.mp3'
import expanded124Asset13 from '../assets/flashcards124/5c85e3faa8974dfda6ea8a7fc0d9126bd7f538ec03ee8f839826a547f4c4914e.mp3'
import expanded124Asset14 from '../assets/flashcards124/60740f0e20ac164673eded06e1b7e15c966c6d6315a2157ad965ebada9c6cdab.mp3'
import expanded124Asset15 from '../assets/flashcards124/fceb562f7ef857931ef70d1000f2420d24c7e46528b0b3908c2753d24e39baf9.mp3'
import expanded124Asset16 from '../assets/flashcards124/96684b02d691043218642c4eb03cde78294983fe1d36977170d5655b38f9a921.mp3'
import expanded124Asset17 from '../assets/flashcards124/6e87f887705f2baef59f32a194eeaf558de14639f800792817b7a949f6a555e7.mp3'
import expanded124Asset18 from '../assets/flashcards124/106abccd7f7f6e8dc94995fc415e255c861c5936fc621ab8c6e315cc0f48b751.mp3'
import expanded124Asset19 from '../assets/flashcards124/47d8b1308d78b147bd81fe02909bb29efac19e88d4b4ef3dd1d58a289610e31c.webp'
import expanded124Asset20 from '../assets/flashcards124/82ad3983780cd59c5bdb8376c0690d0c34a001b4af1391e02f561847d21feca9.webp'
import expanded124Asset21 from '../assets/flashcards124/7432e9d9d31ef5bce3c8344028154fe4aa9d144d9b02234b80fa6469afa98950.webp'
import expanded124Asset22 from '../assets/flashcards124/94bc97a6de0a0e0b46fe8f73be7b171572e3153ebe6d56bf5da5a2c854ff0552.webp'
import expanded124Asset23 from '../assets/flashcards124/4ee65c2f7d887bdc2b0a4a8bc1634311c12f99f3a3f001d9f75d36300793bac2.webp'
import expanded124Asset24 from '../assets/flashcards124/0c36eb20b300ad81daf62af4ede5b14d6bada254453e6cbf6805ebaef92796c7.webp'
import expanded124Asset25 from '../assets/flashcards124/93945c0d43bcf9c7230f42f186d98211f7ff1fee888007d56b40c7f43e396183.webp'
import expanded124Asset26 from '../assets/flashcards124/7cf6caad8ed25f7eda6a66c0c44ee1432263dad859fa1242d081187252c29282.webp'
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
      id: 'deck-b2-software-development-vocabulary-assumption.front',
      text: 'assumption. The estimate relies on the assumption that the API contract will not change.',
      src: expanded124Asset4,
    },
    {
      id: 'C102-FS81.5',
      text: 'a lesson learned. A lesson learned should lead to a testable action.',
      src: expanded124Asset5,
    },
    {
      id: 'C102-FS81.2',
      text: 'a contingency plan. The contingency plan needs a decision owner.',
      src: expanded124Asset6,
    },
    {
      id: 'course-c1-07-outcome.front',
      text: 'an outcome',
      src: expanded124Asset7,
    },
    {
      id: 'course-c1-07-outcome.back',
      text: 'Separate an intended outcome from a confirmed decision.',
      src: expanded124Asset8,
    },
    {
      id: 'course-b2-11-benefit.front',
      text: 'a benefit',
      src: expanded124Asset9,
    },
    {
      id: 'course-b2-11-benefit.back',
      text: 'A possible benefit is more useful live time.',
      src: expanded124Asset10,
    },
    {
      id: 'course-b2-11-drawback.front',
      text: 'a drawback',
      src: expanded124Asset11,
    },
    {
      id: 'course-b2-11-drawback.back',
      text: 'A drawback is that updates may not be read.',
      src: expanded124Asset12,
    },
    {
      id: 'course-b2-11-alternative.front',
      text: 'an alternative',
      src: expanded124Asset13,
    },
    {
      id: 'course-b2-11-alternative.back',
      text: 'What alternative would preserve the purpose?',
      src: expanded124Asset14,
    },
    {
      id: 'course-b2-11-compromise.front',
      text: 'a compromise',
      src: expanded124Asset15,
    },
    {
      id: 'course-b2-11-compromise.back',
      text: 'The compromise keeps a short live discussion.',
      src: expanded124Asset16,
    },
    {
      id: 'deck-b2-business-decision.front',
      text: 'decision. We need to make a decision today.',
      src: expanded124Asset17,
    },
    {
      id: 'deck-b2-business-risk.front',
      text: 'risk. There is a risk of delay.',
      src: expanded124Asset18,
    },
    {
      id: 'b2-03.shadowing.01',
      text: 'Do you ever wonder what life would be like if you’d stayed?',
      src: asset0,
    },
    {
      id: 'b2-03.shadowing.02',
      text: 'Sometimes. If I hadn’t moved to Toronto, I’d probably still be doing the same job',
      src: asset1,
    },
    {
      id: 'b2-03.shadowing.03',
      text: 'Would that have been a bad thing?',
      src: asset2,
    },
    {
      id: 'b2-03.shadowing.04',
      text: 'Not necessarily, but I wouldn’t know how much I enjoy working abroad',
      src: asset3,
    },
    {
      id: 'b2-03.shadowing.05',
      text: 'So moving was a turning point?',
      src: asset4,
    },
    {
      id: 'b2-03.shadowing.06',
      text: 'Definitely. If I hadn’t taken that chance, I wouldn’t feel this confident now',
      src: asset5,
    },
    {
      id: 'b2-03.shadowing.07',
      text: 'Was it easy from the start?',
      src: asset6,
    },
    {
      id: 'b2-03.shadowing.08',
      text: 'Not at all. I missed home and almost gave up',
      src: asset7,
    },
    { id: 'b2-03.shadowing.09', text: 'What made you stay?', src: asset8 },
    {
      id: 'b2-03.shadowing.10',
      text: 'I got an opportunity to work with a really supportive team',
      src: asset9,
    },
    {
      id: 'b2-03.shadowing.11',
      text: 'It sounds as though the difficult part led to something good',
      src: asset10,
    },
    {
      id: 'b2-03.shadowing.12',
      text: 'It did. I can see that now, even if I couldn’t see it at the time',
      src: asset11,
    },
    {
      id: 'course-b2-03-turning-point.front',
      text: 'a turning point',
      src: asset12,
    },
    {
      id: 'course-b2-03-turning-point.back',
      text: 'The course became a turning point.',
      src: asset13,
    },
    {
      id: 'course-b2-03-take-a-chance.front',
      text: 'take a chance',
      src: asset14,
    },
    {
      id: 'course-b2-03-take-a-chance.back',
      text: 'They decided to take a chance on it.',
      src: asset15,
    },
    {
      id: 'course-b2-03-miss-an-opportunity.front',
      text: 'miss an opportunity',
      src: asset16,
    },
    {
      id: 'course-b2-03-miss-an-opportunity.back',
      text: 'Missing one opportunity doesn’t close every path.',
      src: asset17,
    },
    {
      id: 'course-b2-03-consequence.front',
      text: 'a consequence',
      src: asset18,
    },
    {
      id: 'course-b2-03-consequence.back',
      text: 'The collaboration was an unexpected consequence.',
      src: asset19,
    },
    { id: 'course-b2-03-setback.front', text: 'a setback', src: asset20 },
    {
      id: 'course-b2-03-setback.back',
      text: 'A setback may change the route.',
      src: asset21,
    },
    {
      id: 'course-b2-03-fresh-start.front',
      text: 'a fresh start',
      src: asset22,
    },
    {
      id: 'course-b2-03-fresh-start.back',
      text: 'The move offered a fresh start.',
      src: asset23,
    },
  ],
  images: {
    '/flashcards/course-practice/expanded124/47d8b1308d78b147bd81fe02909bb29efac19e88d4b4ef3dd1d58a289610e31c.webp':
      expanded124Asset19,
    '/flashcards-transparent/b2/business/priority/image.webp':
      expanded124Asset20,
    '/flashcards/b2/software-development-vocabulary/assumption/image.webp':
      expanded124Asset21,
    '/flashcards/course-practice/expanded124/94bc97a6de0a0e0b46fe8f73be7b171572e3153ebe6d56bf5da5a2c854ff0552.webp':
      expanded124Asset22,
    '/flashcards-transparent/course-images/4ee65c2f7d887bdc2b0a4a8bc1634311c12f99f3a3f001d9f75d36300793bac2/image.webp':
      expanded124Asset23,
    '/flashcards-transparent/course-images/0c36eb20b300ad81daf62af4ede5b14d6bada254453e6cbf6805ebaef92796c7/image.webp':
      expanded124Asset24,
    '/flashcards-transparent/b2/business/decision/image.webp':
      expanded124Asset25,
    '/flashcards-transparent/b2/business/risk/image.webp': expanded124Asset26,
    '/flashcards/course-characters/evelyn-carter/image.webp': asset24,
    '/flashcards/course-characters/owen-harris/image.webp': asset25,
    '/flashcards-transparent/course-images/b1347b85db089ab5cf7769b1a69c035121ad5fe63cb1fa5d8c5ca9cb64048712/image.webp':
      asset26,
  },
}
export default prepared
