import type { PreparedPractice } from '../Practice.types'
import data from './a2-05.json'
import asset0 from '../../Course/assets/audio/A205-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A205-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A205-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A205-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A205-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A205-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A205-D81.7.mp3'
import asset7 from '../../Course/assets/audio/A205-D81.8.mp3'
import asset8 from '../../Course/assets/audio/A205-V81.0.mp3'
import asset9 from '../../Course/assets/audio/A205-FE81.0.mp3'
import asset10 from '../../Course/assets/audio/A205-V81.1.mp3'
import asset11 from '../../Course/assets/audio/A205-FE81.1.mp3'
import asset12 from '../../Course/assets/audio/A205-V81.2.mp3'
import asset13 from '../../Course/assets/audio/A205-FE81.2.mp3'
import asset14 from '../../Course/assets/audio/A205-V81.3.mp3'
import asset15 from '../../Course/assets/audio/A205-FE81.3.mp3'
import asset16 from '../../Course/assets/audio/A205-V81.4.mp3'
import asset17 from '../../Course/assets/audio/A205-FE81.4.mp3'
import asset18 from '../../Course/assets/audio/A205-V81.5.mp3'
import asset19 from '../../Course/assets/audio/A205-FE81.5.mp3'
import asset20 from '../assets/characters/kim.webp'
import asset21 from '../assets/characters/ana.webp'
import asset22 from '../../Course/assets/a2-05-vocabulary81.webp'
import expanded124Asset0 from '../assets/flashcards124/42f08fb261b6cf93a915a3b74877d2a8becaecda99d6e6a395fbfa1188965867.mp3'
import expanded124Asset1 from '../assets/flashcards124/b71119ccaf1aa74e265fbd5dade64bfdc6547cbd35628dfb1ddd884707b6277b.mp3'
import expanded124Asset2 from '../assets/flashcards124/a84bf757a2e0f190f5d000cd0427ef46bd75bbf81bcedec1ca25219d35faa4cc.mp3'
import expanded124Asset3 from '../assets/flashcards124/b1c2296e09993080a80d169dc443a0525cd29e845d7c394541ecfd90e56304b0.mp3'
import expanded124Asset4 from '../assets/flashcards124/84694888c2989e84b2cb046ead99b70265276c05457b7a0d510e3b385037b9ec.mp3'
import expanded124Asset5 from '../assets/flashcards124/36e1150b9b0cbc872396b6aba26e0287645ad2b72d7041d90b46790838de85e2.mp3'
import expanded124Asset6 from '../assets/flashcards124/b4ef68201e6a66979b935330e44124f76707d4e4de2d1bd461729aad5fac6e4d.mp3'
import expanded124Asset7 from '../assets/flashcards124/a708baa1e180674ca65e05038cf10f98ee79eb00a9775f5f63d6766ef4f94270.mp3'
import expanded124Asset8 from '../assets/flashcards124/71eafd96d3094bc7e974c271e6882377fc463d81a171bef025ce65c646aef909.mp3'
import expanded124Asset9 from '../assets/flashcards124/232f91bd1c9f76245501e25b102c8e16b187ac1171a8b31743d34509697040e9.mp3'
import expanded124Asset10 from '../assets/flashcards124/057fc760e5fb09f8c959767a208df196a17a2056c169c254667198db3a37130f.mp3'
import expanded124Asset11 from '../assets/flashcards124/718118b45219ecffc27bf271edaa01661ae5954408b3d124e4ee656eeb5da73e.mp3'
import expanded124Asset12 from '../assets/flashcards124/db8285800810a1640b72b958b1019765aa6d73d2937cd793343da38388691326.mp3'
import expanded124Asset13 from '../assets/flashcards124/bc46b6472089557e46589b01582591e5d48102ce990e3d9e6f52b1715b232201.mp3'
import expanded124Asset14 from '../assets/flashcards124/0a521ba51c60a1dd92a1b418720a3c15486eca6fb1cc9a16fc8e67bad31d59f4.mp3'
import expanded124Asset15 from '../assets/flashcards124/b3172a8bf3c64ef9c1f5860928c7d523a212982674ab3af1761a648aa32412a6.mp3'
import expanded124Asset16 from '../assets/flashcards124/772c54a9d2837a9159beadbc78c227133acf97abb7e47c564e0dada3320d7664.mp3'
import expanded124Asset17 from '../assets/flashcards124/f6d3a88d46389654e353f5b24d53545712b46c77c9a2cf8e6de01dafa5a9f5b8.mp3'
import expanded124Asset18 from '../assets/flashcards124/fe92bd38e9a3ec6abab8529d6729c4fc5f446551a578d304d3ce272f09be8642.webp'
import expanded124Asset19 from '../assets/flashcards124/466b3fd6972d03b44eaa367d6da8d46e7891715768d684662b71adc29b682708.webp'
import expanded124Asset20 from '../assets/flashcards124/dbb55b20ab904d0ee3f79114b81061ee1ed3a5aa655a6bd0c8b9d2db272048a0.webp'
import expanded124Asset21 from '../assets/flashcards124/5dc5c4e59242b995aa827b663a866f1038952919488701a9afb472c20d15aab1.webp'
import expanded124Asset22 from '../assets/flashcards124/ec8870e174f8c0cf76e0b43dc42b125c505719b80cdb25a68894eebb98b5ad48.webp'
import expanded124Asset23 from '../assets/flashcards124/f49a13879e1dfce624219edd5fbcbbc1ed45b51b1cc6d92593efb59cff7b174c.webp'
import expanded124Asset24 from '../assets/flashcards124/b764a475a00af94153afac55cce3969e8d473564565dafa3f9380e9386e05b96.webp'
import expanded124Asset25 from '../assets/flashcards124/55bbb3a8a72f66e7b896235bcbe130a6b49e4b8b8295145d4fb69a6ceb9a2aef.webp'
import expanded124Asset26 from '../assets/flashcards124/b746b1a23759110d8e260c2c224ff7d2b6876a46ebd154317e8ad941105e5163.webp'
import expanded124Asset27 from '../assets/flashcards124/13217f065a472290acf7c87a6d57e667f42917dc7a5aa2249341f6581ab2631e.webp'
import expanded124Asset28 from '../assets/flashcards124/c2df6f087f1d64a76ccdc264c268a3ddfac5a2a43b890c5b7311e472bf5258c1.webp'
import expanded124Asset29 from '../assets/flashcards124/bedf7066bb99b2081415f676f223fc2f7bedaa014facc22c62bcf3328b47c9af.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'deck-a1-verbs-help.front',
      text: 'help. She helps her friend.',
      src: expanded124Asset0,
    },
    {
      id: 'deck-a1-verbs-bring.front',
      text: 'bring. She brings a bag.',
      src: expanded124Asset1,
    },
    {
      id: 'deck-a1-verbs-put.front',
      text: 'put. I put the book on the table.',
      src: expanded124Asset2,
    },
    {
      id: 'deck-a1-verbs-push.front',
      text: 'push. He pushes the box.',
      src: expanded124Asset3,
    },
    {
      id: 'deck-a1-verbs-pull.front',
      text: 'pull. She pulls the rope.',
      src: expanded124Asset4,
    },
    {
      id: 'deck-a1-verbs-give.front',
      text: 'give. He gives a gift.',
      src: expanded124Asset5,
    },
    {
      id: 'deck-a1-verbs-fix.front',
      text: 'fix. He fixes a toy.',
      src: expanded124Asset6,
    },
    {
      id: 'deck-a1-verbs-clean.front',
      text: 'clean. She cleans the room.',
      src: expanded124Asset7,
    },
    {
      id: 'deck-a1-verbs-build.front',
      text: 'build. They build a house.',
      src: expanded124Asset8,
    },
    {
      id: 'deck-a1-verbs-choose.front',
      text: 'choose. I choose a book.',
      src: expanded124Asset9,
    },
    {
      id: 'flashcard124-a-desk.front',
      text: 'a desk',
      src: expanded124Asset10,
    },
    {
      id: 'flashcard124-a-desk.back',
      text: 'The book is on the desk',
      src: expanded124Asset11,
    },
    {
      id: 'course-a1-06-table.front',
      text: 'a table',
      src: expanded124Asset12,
    },
    {
      id: 'course-a1-06-table.back',
      text: 'The dog is next to the table',
      src: expanded124Asset13,
    },
    { id: 'course-a1-06-sofa.front', text: 'a sofa', src: expanded124Asset14 },
    {
      id: 'course-a1-06-sofa.back',
      text: 'The cat is on the sofa',
      src: expanded124Asset15,
    },
    {
      id: 'flashcard124-a-window.front',
      text: 'a window',
      src: expanded124Asset16,
    },
    {
      id: 'flashcard124-a-window.back',
      text: 'The bird is near the window',
      src: expanded124Asset17,
    },
    {
      id: 'a2-05.shadowing.01',
      text: 'Those boxes look heavy. Do you need a hand?',
      src: asset0,
    },
    {
      id: 'a2-05.shadowing.02',
      text: 'Yes, please. I can’t carry this one and open the door.',
      src: asset1,
    },
    {
      id: 'a2-05.shadowing.03',
      text: 'I’ll open the door. Then I’ll carry the smaller box.',
      src: asset2,
    },
    {
      id: 'a2-05.shadowing.04',
      text: 'Thank you! I’m going to put everything in the living room.',
      src: asset3,
    },
    {
      id: 'a2-05.shadowing.05',
      text: 'Are you going to paint the walls today?',
      src: asset4,
    },
    {
      id: 'a2-05.shadowing.06',
      text: 'No, that’s the plan for tomorrow. Today I just want to unpack.',
      src: asset5,
    },
    {
      id: 'a2-05.shadowing.07',
      text: 'All right. I’ll move this chair so we have more space.',
      src: asset6,
    },
    {
      id: 'a2-05.shadowing.08',
      text: 'That would be great. We can have coffee when we finish.',
      src: asset7,
    },
    { id: 'course-a2-05-carry-a-box.front', text: 'carry a box', src: asset8 },
    {
      id: 'course-a2-05-carry-a-box.back',
      text: 'I’ll carry the smaller box.',
      src: asset9,
    },
    {
      id: 'course-a2-05-open-the-door.front',
      text: 'open the door',
      src: asset10,
    },
    {
      id: 'course-a2-05-open-the-door.back',
      text: 'Can you open the door?',
      src: asset11,
    },
    {
      id: 'course-a2-05-take-the-stairs.front',
      text: 'take the stairs',
      src: asset12,
    },
    {
      id: 'course-a2-05-take-the-stairs.back',
      text: 'We have to take the stairs.',
      src: asset13,
    },
    {
      id: 'course-a2-05-move-a-chair.front',
      text: 'move a chair',
      src: asset14,
    },
    {
      id: 'course-a2-05-move-a-chair.back',
      text: 'I’ll move this chair.',
      src: asset15,
    },
    {
      id: 'course-a2-05-paint-a-wall.front',
      text: 'paint a wall',
      src: asset16,
    },
    {
      id: 'course-a2-05-paint-a-wall.back',
      text: 'I’m going to paint a wall tomorrow.',
      src: asset17,
    },
    {
      id: 'course-a2-05-unpack-a-bag.front',
      text: 'unpack a bag',
      src: asset18,
    },
    {
      id: 'course-a2-05-unpack-a-bag.back',
      text: 'I want to unpack my bags today.',
      src: asset19,
    },
  ],
  images: {
    '/flashcards-transparent/a1/verbs/help/image.webp': expanded124Asset18,
    '/flashcards-transparent/a1/verbs/bring/image.webp': expanded124Asset19,
    '/flashcards-transparent/a1/verbs/put/image.webp': expanded124Asset20,
    '/flashcards-transparent/a1/verbs/push/image.webp': expanded124Asset21,
    '/flashcards-transparent/a1/verbs/pull/image.webp': expanded124Asset22,
    '/flashcards-transparent/a1/verbs/give/image.webp': expanded124Asset23,
    '/flashcards-transparent/a1/verbs/fix/image.webp': expanded124Asset24,
    '/flashcards-transparent/a1/verbs/clean/image.webp': expanded124Asset25,
    '/flashcards-transparent/a1/verbs/build/image.webp': expanded124Asset26,
    '/flashcards-transparent/a1/verbs/choose/image.webp': expanded124Asset27,
    '/flashcards-transparent/course-images/c2df6f087f1d64a76ccdc264c268a3ddfac5a2a43b890c5b7311e472bf5258c1/image.webp':
      expanded124Asset28,
    '/flashcards-transparent/course-images/bedf7066bb99b2081415f676f223fc2f7bedaa014facc22c62bcf3328b47c9af/image.webp':
      expanded124Asset29,
    '/flashcards/course-characters/kim/image.webp': asset20,
    '/flashcards/course-characters/ana/image.webp': asset21,
    '/flashcards-transparent/course-images/5fe4647889363593398e497d76579ea980337c9c9c8a3db06c98e9940b7490bc/image.webp':
      asset22,
  },
}
export default prepared
