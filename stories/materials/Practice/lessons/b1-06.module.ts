import type { PreparedPractice } from '../Practice.types'
import data from './b1-06.json'
import asset0 from '../../Course/assets/audio/B106-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B106-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B106-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B106-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B106-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B106-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B106-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B106-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B106-V81.0.mp3'
import asset9 from '../../Course/assets/audio/B106-FE81.0.mp3'
import asset10 from '../../Course/assets/audio/B106-V81.1.mp3'
import asset11 from '../../Course/assets/audio/B106-FE81.1.mp3'
import asset12 from '../../Course/assets/audio/B106-V81.2.mp3'
import asset13 from '../../Course/assets/audio/B106-FE81.2.mp3'
import asset14 from '../../Course/assets/audio/B106-V81.3.mp3'
import asset15 from '../../Course/assets/audio/B106-FE81.3.mp3'
import asset16 from '../../Course/assets/audio/B106-V81.4.mp3'
import asset17 from '../../Course/assets/audio/B106-FE81.4.mp3'
import asset18 from '../../Course/assets/audio/B106-V81.5.mp3'
import asset19 from '../../Course/assets/audio/B106-FE81.5.mp3'
import asset20 from '../assets/characters/kim.webp'
import asset21 from '../assets/characters/ana.webp'
import asset22 from '../../Course/assets/b1-06-vocabulary81.webp'
import expanded124Asset0 from '../assets/flashcards124/7826aa8defecd4b9c721c31ac7507bf3363ae629c92c406da2378fabda4e8855.mp3'
import expanded124Asset1 from '../assets/flashcards124/b84c8e5ac7ef2639caaf28976dac9f313a4068de56a0a3f730d1fed01886af99.mp3'
import expanded124Asset2 from '../assets/flashcards124/719c5a3fc807bf2d6d14468d31b05e6e1139c8ef23677aa7bfc859822038a9aa.mp3'
import expanded124Asset3 from '../assets/flashcards124/c3d334db30cad88171c17c60791653af8438a0e372d316cba813327eb12e2780.mp3'
import expanded124Asset4 from '../assets/flashcards124/975d642b61eb8657482b71b09efe7eb2bc241025bdfa76672f602e3722f9dc96.mp3'
import expanded124Asset5 from '../assets/flashcards124/f5a18ed75c48f731e80df367171a4e054a1fc75d764f213c102c88647715ec57.mp3'
import expanded124Asset6 from '../assets/flashcards124/1943c28eb9a32aab0edcb069a9cc50ebed13628f3e1dd44d957c3ccc028a1fdc.mp3'
import expanded124Asset7 from '../assets/flashcards124/f7b698a5bb7e6ef76c9594071e22d6f847760fe22ae50a3c694f5656d609bd27.mp3'
import expanded124Asset8 from '../assets/flashcards124/b3354349f64319b3ad3a75f632c86e26d347d3b02e7defe8faeca2c256f1d1bd.mp3'
import expanded124Asset9 from '../assets/flashcards124/a44a9594bb9aeb7db1a74c86b7e8059572d7e7e34ec4309f28733d1d9e50c233.mp3'
import expanded124Asset10 from '../assets/flashcards124/c58978bdea19b39cf8304335e0a2acbaecd09c82d82b7aed2875bf60ca73d719.mp3'
import expanded124Asset11 from '../assets/flashcards124/8f5dd63067d3ab8d169b4c4e403de58a8146ab0cabc02ec984fd3ae918e81ef3.mp3'
import expanded124Asset12 from '../assets/flashcards124/ad2684a3f3100bcc8d759b87db79dc14d5fb1bcdb275715c802bf4c9725fb7a2.mp3'
import expanded124Asset13 from '../assets/flashcards124/864db4d3415370f1becd2c8a568b058cc5e18fdd71ba28b35da28b867c4b1a68.mp3'
import expanded124Asset14 from '../assets/flashcards124/53a7b6689e6c1576e7e824258663a8d970a4e93f2a95b8e9b21c9fef2d7430de.webp'
import expanded124Asset15 from '../assets/flashcards124/9ed4d237f8d7f65b9c174fb2fa2a462c1f2fe8dea0f37e7b185b6e4387b0ad08.webp'
import expanded124Asset16 from '../assets/flashcards124/68683f31ea5de5c9a571b753a542c3205b3d928592dc4b102a7ac370f657151b.webp'
import expanded124Asset17 from '../assets/flashcards124/ffd963385c984fa9ee3703d1546c3d695ce77a697fc77f3c61f86e5e2d409e5b.webp'
import expanded124Asset18 from '../assets/flashcards124/e12bbe1b62cab3acb40ed0d803fc16a80c746351a006f4e5bd8d14e236c19b2c.webp'
import expanded124Asset19 from '../assets/flashcards124/ae3c5119e406129592440f7f5c6ce91cc3801c90ae2e9ee49618cb2be3de2b3e.webp'
import expanded124Asset20 from '../assets/flashcards124/3052e13dd04c081d4896cd1d0e561fe8ef0b30adb7b25da3d689e1ce1d2a3be7.webp'
import expanded124Asset21 from '../assets/flashcards124/ee6e02669009305ba5417074eff86474626e1bcb071e9acb1aad2dddf798ec42.webp'
import expanded124Asset22 from '../assets/flashcards124/0c9028a02ec0783387080bfd19af072eea9e76a3e4c4131745b61a7b5efabfed.webp'
import expanded124Asset23 from '../assets/flashcards124/8a71fc76f318d517f72afeb523e439d0b06de316fb840eedabdc28306e146753.webp'
import expanded124Asset24 from '../assets/flashcards124/378cba11f265c6112f265fddc2e371e0b4178a55db0d9a143b835e1ddd0822e4.webp'
import expanded124Asset25 from '../assets/flashcards124/d6f80fedb0db97e399b4b5ef82fa17343992df8cf5bf07a20561fc29678e0564.webp'
import expanded124Asset26 from '../assets/flashcards124/47c6dde4ce643d7edad449ddb28219220592f43db6dba295f2e7663c93b6d8b2.webp'
import expanded124Asset27 from '../assets/flashcards124/c91905694e2f76585addfad9c3049491b054df0ce83300c592aa41a36fb82b97.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'deck-b2-business-contract.front',
      text: 'contract. I need to review the contract.',
      src: expanded124Asset0,
    },
    {
      id: 'deck-b2-business-benefits.front',
      text: 'benefits. The company offers good benefits.',
      src: expanded124Asset1,
    },
    {
      id: 'deck-b2-business-annual-leave.front',
      text: 'annual leave. He took annual leave in July.',
      src: expanded124Asset2,
    },
    {
      id: 'deck-b2-business-remote-work.front',
      text: 'remote work. Remote work is common in this company.',
      src: expanded124Asset3,
    },
    {
      id: 'deck-b2-business-hybrid-work.front',
      text: 'hybrid work. We follow a hybrid work model.',
      src: expanded124Asset4,
    },
    {
      id: 'deck-b2-academy-workload.front',
      text: 'workload. The workload is heavier than I expected.',
      src: expanded124Asset5,
    },
    {
      id: 'deck-b2-business-promotion.front',
      text: 'promotion. She got a promotion last month.',
      src: expanded124Asset6,
    },
    {
      id: 'deck-b2-business-training.front',
      text: 'training. The new employees need training.',
      src: expanded124Asset7,
    },
    {
      id: 'deck-b2-business-time-off.front',
      text: 'time off. I need to request some time off.',
      src: expanded124Asset8,
    },
    {
      id: 'deck-b2-academy-schedule.front',
      text: 'schedule. My study schedule includes breaks.',
      src: expanded124Asset9,
    },
    {
      id: 'deck-b2-business-budget.front',
      text: 'budget. The budget is limited.',
      src: expanded124Asset10,
    },
    {
      id: 'deck-b2-business-responsibility.front',
      text: 'responsibility. This is part of my responsibility.',
      src: expanded124Asset11,
    },
    {
      id: 'deck-b2-business-team-member.front',
      text: 'team member. Each team member has a clear role.',
      src: expanded124Asset12,
    },
    {
      id: 'deck-b2-business-role.front',
      text: 'role. What is your role in the company?',
      src: expanded124Asset13,
    },
    {
      id: 'b1-06.shadowing.01',
      text: 'If you took the new job, what would change most?',
      src: asset0,
    },
    {
      id: 'b1-06.shadowing.02',
      text: 'I’d have more flexibility, but a longer commute.',
      src: asset1,
    },
    {
      id: 'b1-06.shadowing.03',
      text: 'Would the longer journey be a problem every day?',
      src: asset2,
    },
    {
      id: 'b1-06.shadowing.04',
      text: 'Only on three days. I could work from home twice a week.',
      src: asset3,
    },
    {
      id: 'b1-06.shadowing.05',
      text: 'What would matter more to you: the journey or choosing your hours?',
      src: asset4,
    },
    {
      id: 'b1-06.shadowing.06',
      text: 'I’m not sure yet. I’d like time for a course in the afternoon.',
      src: asset5,
    },
    {
      id: 'b1-06.shadowing.07',
      text: 'Then I’d ask whether the flexible hours really include afternoons.',
      src: asset6,
    },
    {
      id: 'b1-06.shadowing.08',
      text: 'Good idea. If they didn’t, the offer would be much less useful.',
      src: asset7,
    },
    { id: 'course-b1-06-job-offer.front', text: 'a job offer', src: asset8 },
    {
      id: 'course-b1-06-job-offer.back',
      text: 'I’d compare both job offers first.',
      src: asset9,
    },
    { id: 'course-b1-06-salary.front', text: 'a salary', src: asset10 },
    {
      id: 'course-b1-06-salary.back',
      text: 'The salary is the same in both offers.',
      src: asset11,
    },
    { id: 'course-b1-06-commute.front', text: 'a commute', src: asset12 },
    {
      id: 'course-b1-06-commute.back',
      text: 'A longer commute would affect my routine.',
      src: asset13,
    },
    {
      id: 'course-b1-06-working-hours.front',
      text: 'working hours',
      src: asset14,
    },
    {
      id: 'course-b1-06-working-hours.back',
      text: 'I’d ask about flexible working hours.',
      src: asset15,
    },
    { id: 'course-b1-06-relocate.front', text: 'relocate', src: asset16 },
    {
      id: 'course-b1-06-relocate.back',
      text: 'Would you relocate for the job?',
      src: asset17,
    },
    {
      id: 'course-b1-06-career-opportunity.front',
      text: 'a career opportunity',
      src: asset18,
    },
    {
      id: 'course-b1-06-career-opportunity.back',
      text: 'It could be a useful career opportunity.',
      src: asset19,
    },
  ],
  images: {
    '/flashcards-transparent/b2/business/contract/image.webp':
      expanded124Asset14,
    '/flashcards-transparent/b2/business/benefits/image.webp':
      expanded124Asset15,
    '/flashcards-transparent/b2/business/annual-leave/image.webp':
      expanded124Asset16,
    '/flashcards-transparent/b2/business/remote-work/image.webp':
      expanded124Asset17,
    '/flashcards-transparent/b2/business/hybrid-work/image.webp':
      expanded124Asset18,
    '/flashcards-transparent/b2/academy/workload/image.webp':
      expanded124Asset19,
    '/flashcards-transparent/b2/business/promotion/image.webp':
      expanded124Asset20,
    '/flashcards-transparent/b2/business/training/image.webp':
      expanded124Asset21,
    '/flashcards-transparent/b2/business/time-off/image.webp':
      expanded124Asset22,
    '/flashcards-transparent/b2/academy/schedule/image.webp':
      expanded124Asset23,
    '/flashcards-transparent/b2/business/budget/image.webp': expanded124Asset24,
    '/flashcards-transparent/b2/business/responsibility/image.webp':
      expanded124Asset25,
    '/flashcards-transparent/b2/business/team-member/image.webp':
      expanded124Asset26,
    '/flashcards-transparent/b2/business/role/image.webp': expanded124Asset27,
    '/flashcards/course-characters/kim/image.webp': asset20,
    '/flashcards/course-characters/ana/image.webp': asset21,
    '/flashcards-transparent/course-images/def0a3f277bbb12f7bb170bce8dd53102e838d9872422689d0fa6b84e67cc515/image.webp':
      asset22,
  },
}
export default prepared
