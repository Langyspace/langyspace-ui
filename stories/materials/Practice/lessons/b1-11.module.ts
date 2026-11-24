import type { PreparedPractice } from '../Practice.types'
import data from './b1-11.json'
import asset0 from '../assets/audio/e8fea4e7ca1b764ed5b66583089d0c397def065224e448ed9401af0d655f89a9.mp3'
import asset1 from '../assets/audio/fb99ce701a1a0a296f491deea032e00d3d6712776e15ed6ebb16de90b4bcdb15.mp3'
import asset2 from '../assets/audio/48dd61081c054bb643baec92fc9be321c1776ca8275380a0ccb1edb3757c1144.mp3'
import asset3 from '../assets/audio/2df72a339395d3a8dd4355284f59049f48b0636bafe159cce49a697032d64011.mp3'
import asset4 from '../assets/audio/178f3a19483b91f6a89ec452544e65572cd43b85860e01fe5673c748fe6c2b28.mp3'
import asset5 from '../assets/audio/f1655b4664c4a38aaef39196bd3a88523050dbe57e89f98d561dcd223bd7c5ae.mp3'
import asset6 from '../assets/audio/7be3f367fce9df133391173c0a55596e4c0552ae74c5a815acf8448f17ed7d07.mp3'
import asset7 from '../assets/audio/4755fe058c26784f50b68b09b232e927966fb0de08b795f841ab287411fc1e2f.mp3'
import asset8 from '../../Course/assets/audio/B111-V81.0.mp3'
import asset9 from '../../Course/assets/audio/B111-FE81.0.mp3'
import asset10 from '../../Course/assets/audio/B111-V81.1.mp3'
import asset11 from '../../Course/assets/audio/B111-FE81.1.mp3'
import asset12 from '../../Course/assets/audio/B111-V81.2.mp3'
import asset13 from '../../Course/assets/audio/B111-FE81.2.mp3'
import asset14 from '../../Course/assets/audio/B111-V81.3.mp3'
import asset15 from '../../Course/assets/audio/B111-FE81.3.mp3'
import asset16 from '../../Course/assets/audio/B111-V81.4.mp3'
import asset17 from '../../Course/assets/audio/B111-FE81.4.mp3'
import asset18 from '../../Course/assets/audio/B111-V81.5.mp3'
import asset19 from '../../Course/assets/audio/B111-FE81.5.mp3'
import asset20 from '../assets/characters/zanele-dlamini.webp'
import asset21 from '../assets/characters/theo-jacobs.webp'
import asset22 from '../../Course/assets/b1-11-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b1-11.shadowing.01',
      text: 'Who’s the woman standing by the speakers?',
      src: asset0,
    },
    {
      id: 'b1-11.shadowing.02',
      text: 'She’s the friend who organised the music',
      src: asset1,
    },
    {
      id: 'b1-11.shadowing.03',
      text: 'And the man with the green jacket?',
      src: asset2,
    },
    {
      id: 'b1-11.shadowing.04',
      text: 'He’s the guest who brought that amazing cake',
      src: asset3,
    },
    {
      id: 'b1-11.shadowing.05',
      text: 'Is this the café where the couple first met?',
      src: asset4,
    },
    {
      id: 'b1-11.shadowing.06',
      text: 'Yes. They wanted a place that was special to them',
      src: asset5,
    },
    {
      id: 'b1-11.shadowing.07',
      text: 'What a lovely idea. Shall we go and say hello?',
      src: asset6,
    },
    {
      id: 'b1-11.shadowing.08',
      text: 'Let’s do that. I’d like to thank them for inviting us',
      src: asset7,
    },
    { id: 'course-b1-11-guest.front', text: 'a guest', src: asset8 },
    {
      id: 'course-b1-11-guest.back',
      text: 'Nina is a guest at the party.',
      src: asset9,
    },
    { id: 'course-b1-11-host.front', text: 'a host', src: asset10 },
    {
      id: 'course-b1-11-host.back',
      text: 'Alex is the host in the green shirt.',
      src: asset11,
    },
    { id: 'course-b1-11-couple.front', text: 'a couple', src: asset12 },
    {
      id: 'course-b1-11-couple.back',
      text: 'A couple is dancing near the table.',
      src: asset13,
    },
    { id: 'course-b1-11-speech.front', text: 'a speech', src: asset14 },
    {
      id: 'course-b1-11-speech.back',
      text: 'Let’s wait until the speech finishes.',
      src: asset15,
    },
    {
      id: 'course-b1-11-dance-floor.front',
      text: 'a dance floor',
      src: asset16,
    },
    {
      id: 'course-b1-11-dance-floor.back',
      text: 'The drinks table is beside the dance floor.',
      src: asset17,
    },
    {
      id: 'course-b1-11-celebration.front',
      text: 'a celebration',
      src: asset18,
    },
    {
      id: 'course-b1-11-celebration.back',
      text: 'It’s a celebration with friends.',
      src: asset19,
    },
  ],
  images: {
    '/flashcards/course-characters/zanele-dlamini/image.webp': asset20,
    '/flashcards/course-characters/theo-jacobs/image.webp': asset21,
    '/flashcards-transparent/course-images/946ca35107a8ef6e370c9fbc783b493b955ee84fb5f2e947dc471a9cd7736c3f/image.webp':
      asset22,
  },
}
export default prepared
