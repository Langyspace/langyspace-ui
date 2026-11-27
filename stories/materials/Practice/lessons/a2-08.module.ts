import type { PreparedPractice } from '../Practice.types'
import data from './a2-08.json'
import asset0 from '../assets/audio/0314975da11907a1c9eef0685a9c87019f990f44829e7bceeff074aaed7efa0c.mp3'
import asset1 from '../assets/audio/a776ead09f61fc868074219b05d8392bfd2bdcfb47e15c44d46c692ef276b4c5.mp3'
import asset2 from '../assets/audio/1b7d395e28ab2fb5042ed1cea1a65171a7ab79fbcd4c8f4ffa5a48a910755420.mp3'
import asset3 from '../assets/audio/62c1139777db50df7968b2baaaa14a2783ef222b25278b713c3899a15a7283bf.mp3'
import asset4 from '../assets/audio/b0cb0d47d03dbe3feff02191e271f68bce57771919cb3f865c817be7ed34cf9a.mp3'
import asset5 from '../assets/audio/e81e03dda7b2c6f37e1561dbe995d4680a1c5a614e3681aa067759cb3c8f436a.mp3'
import asset6 from '../assets/audio/a034eeafefc8ef47096a4585cfc6084d9c14a5205c3cc47415b205a186258876.mp3'
import asset7 from '../assets/audio/de70def84a7c116fba7a1c2e69b0a65c6f52dcb2c5c15b55be4696b2c8ce7f9e.mp3'
import asset8 from '../../Course/assets/audio/A208-V81.0.mp3'
import asset9 from '../../Course/assets/audio/A208-FE81.0.mp3'
import asset10 from '../../Course/assets/audio/A208-V81.1.mp3'
import asset11 from '../../Course/assets/audio/A208-FE81.1.mp3'
import asset12 from '../../Course/assets/audio/A208-V81.2.mp3'
import asset13 from '../../Course/assets/audio/A208-FE81.2.mp3'
import asset14 from '../../Course/assets/audio/A208-V81.3.mp3'
import asset15 from '../../Course/assets/audio/A208-FE81.3.mp3'
import asset16 from '../../Course/assets/audio/A208-V81.4.mp3'
import asset17 from '../../Course/assets/audio/A208-FE81.4.mp3'
import asset18 from '../../Course/assets/audio/A208-V81.5.mp3'
import asset19 from '../../Course/assets/audio/A208-FE81.5.mp3'
import asset20 from '../assets/characters/ruby-bennett.webp'
import asset21 from '../assets/characters/noah-ellis.webp'
import asset22 from '../../Course/assets/a2-08-vocabulary81.webp'
import expanded124Asset0 from '../assets/flashcards124/9546b6a8fe0e44c25924c767064a87229297670b38c2864a5216433cee7ec8d2.mp3'
import expanded124Asset1 from '../assets/flashcards124/cba0fb8cc7de4aa2b8d4491a16f9324d5dc5f9a9c1be4f77fed7c87c2dcf857f.mp3'
import expanded124Asset2 from '../assets/flashcards124/561fd4d4a8a8b38476e6cdebd10d9b27fbcc7d091917e58358b0c4427305949a.mp3'
import expanded124Asset3 from '../assets/flashcards124/813d3e8bac03be37f1961eed3573fa34cd72e1c9921887e7e7e6966e733d763f.mp3'
import expanded124Asset4 from '../assets/flashcards124/d5c7764d217bf06ed6b0c59c2aab503bb796ca6f3057335e9291ca6ee7a8e001.mp3'
import expanded124Asset5 from '../assets/flashcards124/ab7c86ecc54f1b7d4f66b700cfd6eae597c1d49f05c09bea2f7b9ffa9cc4179b.mp3'
import expanded124Asset6 from '../assets/flashcards124/0c04e75bb8cee6aae2c7854b5798bbd0f6cfd10b9c26feba4c97188a6402c690.mp3'
import expanded124Asset7 from '../assets/flashcards124/56ebfc4cc7bf87221b721a98d06d5b70342c8658987dc0a49e80da9e5224bbd2.mp3'
import expanded124Asset8 from '../assets/flashcards124/8ff87c59bd07a92203f85666cd29b7f8ddc432001adc045dd874e50afda83c4d.mp3'
import expanded124Asset9 from '../assets/flashcards124/d333ea3966cd34b1a15c32498e3179f97fb3bf45bb08052387afd2c4cafc4917.mp3'
import expanded124Asset10 from '../assets/flashcards124/251e5c23fbd83b84bb00e48c0631566025ecc5c552b9870b299b22cc9631d6e7.mp3'
import expanded124Asset11 from '../assets/flashcards124/a873a4d57718808121f06ca8fb9c4bb068355ce4dd5cb01d77fd087a9c6f502a.mp3'
import expanded124Asset12 from '../assets/flashcards124/95343f00b6306cd878884868543da166afc69de6b7d731e49fd3e556d7cce02a.mp3'
import expanded124Asset13 from '../assets/flashcards124/f8b6de189bff62e3a713e13026e51fc9690053c3826a67f05f7bdd5fb3583718.mp3'
import expanded124Asset14 from '../assets/flashcards124/46ad50138c46af53e92a646cbaaa4ad10a2c4e167e07c6a7cbd4c5a9ef91f108.webp'
import expanded124Asset15 from '../assets/flashcards124/edb503c7a99b5f49e750f3d5f5fafa6c2ca81339a5d10be71b60e0e81ba5f335.webp'
import expanded124Asset16 from '../assets/flashcards124/2d27d6226c8eeffeea60b9fcb023b87dc174476e37b7f15ba8f6a69239a16e33.webp'
import expanded124Asset17 from '../assets/flashcards124/a03359c642d321ea8a6d270657358006c7c4ab3de3205d8a9989e453f23ecfd2.webp'
import expanded124Asset18 from '../assets/flashcards124/2518b29898fb577cef61e5f705f1cc5cea7e211950f84c59475f2b518ca92746.webp'
import expanded124Asset19 from '../assets/flashcards124/b9ccbd41d53221bf854caa82f7a7c2fce639f2eb9280f7d8b31af91ef11e066d.webp'
import expanded124Asset20 from '../assets/flashcards124/87724a316803ec3ceff499400d5a54bf9eef0fb7ca39f5e4d7673c19b18b74e9.webp'
import expanded124Asset21 from '../assets/flashcards124/384e7d3c2458a9315602c19d6088a484f0c941b4bdfd161ce5d4342062fb0a8d.webp'
import expanded124Asset22 from '../assets/flashcards124/3160c564bd0772446ecd541371598cd3b046ea56c0538c884c8b6b7717df19e8.webp'
import expanded124Asset23 from '../assets/flashcards124/e3147fc749baeed32d8b38b3d2928a89e59c101927c6613a1e922ec9347c80f6.webp'
import expanded124Asset24 from '../assets/flashcards124/503e70af239dc0a0df22db6767ac50cd097acc97b8655be5e04b73d8d8088c06.webp'
import expanded124Asset25 from '../assets/flashcards124/7bfa4e2e69b2eadf581b42f877aa442c14476bd7e48a70ece6f7e3ffecce7c59.webp'
import expanded124Asset26 from '../assets/flashcards124/432f92900bb87a138a1fa78e171c73aa3f43882e86e373d59e12240bd49fec9c.webp'
import expanded124Asset27 from '../assets/flashcards124/2cf892e6bd4aaf6d3721fcea5291cff585b3d139ebe983a0b1cd91426401d366.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'deck-b1-conversation-starters-ive-been-there.front',
      text: "I've been there.. A: Have you been to London? B: I've been there.",
      src: expanded124Asset0,
    },
    {
      id: 'deck-b1-conversation-starters-ive-never-tried-it.front',
      text: "I've never tried it.. A: Do you like sushi? B: I've never tried it.",
      src: expanded124Asset1,
    },
    {
      id: 'deck-b1-conversation-starters-how-was-it.front',
      text: 'How was it?. A: I had a job interview. B: How was it?',
      src: expanded124Asset2,
    },
    {
      id: 'deck-b1-conversation-starters-it-was-fun.front',
      text: 'It was fun.. A: How was the party? B: It was fun.',
      src: expanded124Asset3,
    },
    {
      id: 'deck-b1-conversation-starters-it-was-too-crowded.front',
      text: 'It was too crowded.. A: How was the mall? B: It was too crowded.',
      src: expanded124Asset4,
    },
    {
      id: 'deck-b1-conversation-starters-it-was-worth-it.front',
      text: 'It was worth it.. The trip was expensive, but it was worth it.',
      src: expanded124Asset5,
    },
    {
      id: 'deck-b1-conversation-starters-i-really-enjoyed-it.front',
      text: 'I really enjoyed it.. A: How was the movie? B: I really enjoyed it.',
      src: expanded124Asset6,
    },
    {
      id: 'deck-b1-conversation-starters-i-tried-something-new.front',
      text: 'I tried something new.. I tried something new yesterday.',
      src: expanded124Asset7,
    },
    {
      id: 'deck-b1-conversation-starters-that-sounds-nice.front',
      text: 'That sounds nice.. A: I went to the beach. B: That sounds nice.',
      src: expanded124Asset8,
    },
    {
      id: 'deck-b1-conversation-starters-tell-me-more.front',
      text: 'Tell me more.. A: I started a new course. B: Tell me more.',
      src: expanded124Asset9,
    },
    {
      id: 'deck-b1-conversation-starters-how-come.front',
      text: "How come?. A: I'm leaving early today. B: How come?",
      src: expanded124Asset10,
    },
    {
      id: 'deck-b1-conversation-starters-what-about-you.front',
      text: 'What about you?. I like coffee. What about you?',
      src: expanded124Asset11,
    },
    {
      id: 'deck-a2-travel-how-do-i-get-there.front',
      text: 'How do I get there?. How do I get there?',
      src: expanded124Asset12,
    },
    {
      id: 'deck-b1-conversation-starters-of-course.front',
      text: 'Of course.. A: Can you help me? B: Of course.',
      src: expanded124Asset13,
    },
    {
      id: 'a2-08.shadowing.01',
      text: 'Have you ever been to Lisbon?',
      src: asset0,
    },
    {
      id: 'a2-08.shadowing.02',
      text: 'Yes, I’ve been twice. Have you?',
      src: asset1,
    },
    {
      id: 'a2-08.shadowing.03',
      text: 'No, never. What did you do there?',
      src: asset2,
    },
    {
      id: 'a2-08.shadowing.04',
      text: 'I took a tram and visited the castle',
      src: asset3,
    },
    {
      id: 'a2-08.shadowing.05',
      text: 'Did you try a pastel de nata?',
      src: asset4,
    },
    {
      id: 'a2-08.shadowing.06',
      text: 'Of course. I had one every morning',
      src: asset5,
    },
    {
      id: 'a2-08.shadowing.07',
      text: 'That sounds lovely. I’m going there next month',
      src: asset6,
    },
    {
      id: 'a2-08.shadowing.08',
      text: 'You’ll love it. Try to watch the sunset by the river',
      src: asset7,
    },
    { id: 'course-a2-08-take-a-tram.front', text: 'take a tram', src: asset8 },
    {
      id: 'course-a2-08-take-a-tram.back',
      text: 'Have you ever taken a tram?',
      src: asset9,
    },
    {
      id: 'course-a2-08-visit-a-castle.front',
      text: 'visit a castle',
      src: asset10,
    },
    {
      id: 'course-a2-08-visit-a-castle.back',
      text: 'I visited a castle last year.',
      src: asset11,
    },
    {
      id: 'course-a2-08-try-a-pastel-de-nata.front',
      text: 'try a pastel de nata',
      src: asset12,
    },
    {
      id: 'course-a2-08-try-a-pastel-de-nata.back',
      text: 'You should try a pastel de nata.',
      src: asset13,
    },
    {
      id: 'course-a2-08-see-the-tiles.front',
      text: 'see the tiles',
      src: asset14,
    },
    {
      id: 'course-a2-08-see-the-tiles.back',
      text: 'We saw beautiful tiles in the city.',
      src: asset15,
    },
    {
      id: 'course-a2-08-watch-the-sunset.front',
      text: 'watch the sunset',
      src: asset16,
    },
    {
      id: 'course-a2-08-watch-the-sunset.back',
      text: 'I’d like to watch the sunset.',
      src: asset17,
    },
    {
      id: 'course-a2-08-visit-the-aquarium.front',
      text: 'visit the aquarium',
      src: asset18,
    },
    {
      id: 'course-a2-08-visit-the-aquarium.back',
      text: 'I haven’t visited the aquarium yet.',
      src: asset19,
    },
  ],
  images: {
    '/flashcards-transparent/b1/conversation-starters/ive-been-there/image.webp':
      expanded124Asset14,
    '/flashcards-transparent/b1/conversation-starters/ive-never-tried-it/image.webp':
      expanded124Asset15,
    '/flashcards-transparent/b1/conversation-starters/how-was-it/image.webp':
      expanded124Asset16,
    '/flashcards-transparent/b1/conversation-starters/it-was-fun/image.webp':
      expanded124Asset17,
    '/flashcards-transparent/b1/conversation-starters/it-was-too-crowded/image.webp':
      expanded124Asset18,
    '/flashcards-transparent/b1/conversation-starters/it-was-worth-it/image.webp':
      expanded124Asset19,
    '/flashcards-transparent/b1/conversation-starters/i-really-enjoyed-it/image.webp':
      expanded124Asset20,
    '/flashcards-transparent/b1/conversation-starters/i-tried-something-new/image.webp':
      expanded124Asset21,
    '/flashcards-transparent/b1/conversation-starters/that-sounds-nice/image.webp':
      expanded124Asset22,
    '/flashcards-transparent/b1/conversation-starters/tell-me-more/image.webp':
      expanded124Asset23,
    '/flashcards-transparent/b1/conversation-starters/how-come/image.webp':
      expanded124Asset24,
    '/flashcards-transparent/b1/conversation-starters/what-about-you/image.webp':
      expanded124Asset25,
    '/flashcards-transparent/a2/travel/how-do-i-get-there/image.webp':
      expanded124Asset26,
    '/flashcards-transparent/b1/conversation-starters/of-course/image.webp':
      expanded124Asset27,
    '/flashcards/course-characters/ruby-bennett/image.webp': asset20,
    '/flashcards/course-characters/noah-ellis/image.webp': asset21,
    '/flashcards-transparent/course-images/1f9f6d41f00437f3b9bf4bca61dd688704ab9a048af11539cf25631db4814af5/image.webp':
      asset22,
  },
}
export default prepared
