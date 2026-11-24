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
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
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
    '/flashcards/course-characters/ruby-bennett/image.webp': asset20,
    '/flashcards/course-characters/noah-ellis/image.webp': asset21,
    '/flashcards-transparent/course-images/1f9f6d41f00437f3b9bf4bca61dd688704ab9a048af11539cf25631db4814af5/image.webp':
      asset22,
  },
}
export default prepared
