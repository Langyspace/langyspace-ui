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
import expanded124Asset0 from '../assets/flashcards124/155efcbe9bda1a0eba81ca8b64c3a19c6b5cb240948360fc6bd7fe85a49e8134.mp3'
import expanded124Asset1 from '../assets/flashcards124/d109d6c7c179f939e3b6159bf629b58f1410e1349bd932b27d486ed20a2edfff.mp3'
import expanded124Asset2 from '../assets/flashcards124/dd0edbf9a047b5b29d72d4c27128e82c427b114173d85ab552cb2b4759518506.mp3'
import expanded124Asset3 from '../assets/flashcards124/a760684d9b1ddf6661089ede30473d57538c723d5564e8ed8bd77b15f359d3d0.mp3'
import expanded124Asset4 from '../assets/flashcards124/a35b2fc61b58119cfa8d29ab5aaebabe385d06ea235b0da680015264eb25ed02.mp3'
import expanded124Asset5 from '../assets/flashcards124/4bcd25862013579ecb0c0022d8a101f822d1c4b21174cacb1c4d2c32911239f4.mp3'
import expanded124Asset6 from '../assets/flashcards124/85e878709010481a7c07d5779593dffc274445b6d72b6045eaf36f198d09c618.mp3'
import expanded124Asset7 from '../assets/flashcards124/c287832af6a67302a1acab768240aac9aa078c9ffb819c1f7e3cb2a4babad0c9.mp3'
import expanded124Asset8 from '../assets/flashcards124/67df5b18c771dc2a045a34f9c21e3a67a844691e0e0f5565364dbb954675c522.mp3'
import expanded124Asset9 from '../assets/flashcards124/b950f80948f20e11b51b3c0cfcbbe85b7c05c667f71bafb021aa9545e953dfad.mp3'
import expanded124Asset10 from '../assets/flashcards124/e01346798311ad9018f7c01449178858151f23228b65bd13667e5a7305b53945.mp3'
import expanded124Asset11 from '../assets/flashcards124/5b1c1a4521255f0bd321b02c925c003e9ebd6665a530ccbb609105b5e95dabca.mp3'
import expanded124Asset12 from '../assets/flashcards124/9f74ab5d6b04e2fcb8d6fcc8fb145603f4c58d9fa64d7422303143eb81112eaf.mp3'
import expanded124Asset13 from '../assets/flashcards124/997cf989e2a5b68f74e881eccd793bd6f9448b795e4a46ae034a5fb524bfb1cd.mp3'
import expanded124Asset14 from '../assets/flashcards124/c54e48947fce9a92e463b3b3bff7d28ad59ef0c9e5c78218d4dda8d85b3245b6.mp3'
import expanded124Asset15 from '../assets/flashcards124/83b86e55d86d0ac1a64fae0a6377d94016486aafaec1d839fbc8f57ece3ab0a6.mp3'
import expanded124Asset16 from '../assets/flashcards124/4b6c114f692e8293cbe06fa20cbc2b1ca7c0d76a3395cbde768a63fcf8348c3e.mp3'
import expanded124Asset17 from '../assets/flashcards124/502fb2fa60485c497ebb5a94318e99d297c5ba0824ed2f40943dcf6c21c2fdcf.mp3'
import expanded124Asset18 from '../assets/flashcards124/8e6dac9bc4df2493ff613b2c25715cc3ac698abc5accb54c58b1ca9337f41039.webp'
import expanded124Asset19 from '../assets/flashcards124/cc8b090ec2a7d9c3fd5d6ed68d3f2a9e899e96a93b2a7e558d6ac40504bf2716.webp'
import expanded124Asset20 from '../assets/flashcards124/0ee6ef2508bfc15b87bfd5f3eacb8d3cfc070f1d5f10d6c6b3933e44ba2c7101.webp'
import expanded124Asset21 from '../assets/flashcards124/2b7c5e6367c5eb5e2c406aab45cd9aa453e755a6c73918e2437a1a7d17404983.webp'
import expanded124Asset22 from '../assets/flashcards124/a4ac2a9a5da0fd7594dcf889a55b4c4bbf16cd310276af0c3ca197f56e74a1e2.webp'
import expanded124Asset23 from '../assets/flashcards124/aaab4b763fdd688379165eade808672223d2824d74b737afa8597aedcfc4c174.webp'
import expanded124Asset24 from '../assets/flashcards124/95cfbf4eb0ca501c0121e8c65732db8c51a853ac452bde0f6bee2a1c3fbbd035.webp'
import expanded124Asset25 from '../assets/flashcards124/d27d319990e57283bfd6007da68055a6a94f44d71bfeb0fa43543a862736fb5a.webp'
import expanded124Asset26 from '../assets/flashcards124/73e3151a63c074d3dc65065606e202ae0d024b8724b964a0404eec729171870b.webp'
import expanded124Asset27 from '../assets/flashcards124/d6a8f68cb918c1edd0e1aa34d60f6383a1a13f9b46a990d98a4c57db098a87b9.webp'
import expanded124Asset28 from '../assets/flashcards124/fa10abc5241b5ff90382f4752fcb8b506afdf3b7dd461db6763fa85c969a2c90.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'deck-a2-clothing-essentials-shirt.front',
      text: 'shirt. He wears a white shirt to work.',
      src: expanded124Asset0,
    },
    { id: 'course-a1-11-dress.front', text: 'dress', src: expanded124Asset1 },
    {
      id: 'course-a1-11-dress.back',
      text: 'Can I see this dress?',
      src: expanded124Asset2,
    },
    {
      id: 'deck-a2-clothing-essentials-suit.front',
      text: 'suit. He bought a new suit for the wedding.',
      src: expanded124Asset3,
    },
    {
      id: 'deck-a1-verbs-tie.front',
      text: 'tie. He ties his shoes.',
      src: expanded124Asset4,
    },
    {
      id: 'deck-a2-clothing-essentials-hat.front',
      text: 'hat. Wear a hat to protect yourself from the sun.',
      src: expanded124Asset5,
    },
    {
      id: 'course-a1-11-glasses.front',
      text: 'glasses',
      src: expanded124Asset6,
    },
    {
      id: 'course-a1-11-glasses.back',
      text: 'I like those glasses.',
      src: expanded124Asset7,
    },
    { id: 'course-a1-11-jacket.front', text: 'jacket', src: expanded124Asset8 },
    {
      id: 'course-a1-11-jacket.back',
      text: 'That jacket is blue.',
      src: expanded124Asset9,
    },
    {
      id: 'deck-a2-clothing-essentials-coat.front',
      text: 'coat. This coat is perfect for winter.',
      src: expanded124Asset10,
    },
    { id: 'course-a1-11-shoes.front', text: 'shoes', src: expanded124Asset11 },
    {
      id: 'course-a1-11-shoes.back',
      text: 'These shoes are small.',
      src: expanded124Asset12,
    },
    {
      id: 'deck-a2-clothing-essentials-skirt.front',
      text: 'skirt. This skirt has two large pockets.',
      src: expanded124Asset13,
    },
    {
      id: 'deck-a2-clothing-essentials-necklace.front',
      text: 'necklace. She wore a silver necklace.',
      src: expanded124Asset14,
    },
    {
      id: 'deck-a2-clothing-essentials-earrings.front',
      text: 'earrings. Her gold earrings are beautiful.',
      src: expanded124Asset15,
    },
    {
      id: 'deck-a1-verbs-smile.front',
      text: 'smile. He smiles at the camera.',
      src: expanded124Asset16,
    },
    {
      id: 'deck-a1-verbs-dance.front',
      text: 'dance. They dance at home.',
      src: expanded124Asset17,
    },
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
    '/flashcards/a2/clothing-essentials/shirt/image.webp': expanded124Asset18,
    '/flashcards-transparent/course-images/cc8b090ec2a7d9c3fd5d6ed68d3f2a9e899e96a93b2a7e558d6ac40504bf2716/image.webp':
      expanded124Asset19,
    '/flashcards/a2/clothing-essentials/suit/image.webp': expanded124Asset20,
    '/flashcards-transparent/a1/verbs/tie/image.webp': expanded124Asset21,
    '/flashcards/a2/clothing-essentials/hat/image.webp': expanded124Asset22,
    '/flashcards/a2/clothing-essentials/coat/image.webp': expanded124Asset23,
    '/flashcards/a2/clothing-essentials/skirt/image.webp': expanded124Asset24,
    '/flashcards/a2/clothing-essentials/necklace/image.webp':
      expanded124Asset25,
    '/flashcards/a2/clothing-essentials/earrings/image.webp':
      expanded124Asset26,
    '/flashcards-transparent/a1/verbs/smile/image.webp': expanded124Asset27,
    '/flashcards-transparent/a1/verbs/dance/image.webp': expanded124Asset28,
    '/flashcards/course-characters/zanele-dlamini/image.webp': asset20,
    '/flashcards/course-characters/theo-jacobs/image.webp': asset21,
    '/flashcards-transparent/course-images/946ca35107a8ef6e370c9fbc783b493b955ee84fb5f2e947dc471a9cd7736c3f/image.webp':
      asset22,
  },
}
export default prepared
