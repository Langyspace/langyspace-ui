import type { PreparedPractice } from '../Practice.types'
import data from './a1-11.json'
import asset0 from '../../Course/assets/audio/A111-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A111-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A111-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A111-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A111-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A111-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A111-V81.0.mp3'
import asset7 from '../../Course/assets/audio/A111-FE81.0.mp3'
import asset8 from '../../Course/assets/audio/A111-V81.1.mp3'
import asset9 from '../../Course/assets/audio/A111-FE81.1.mp3'
import asset10 from '../../Course/assets/audio/A111-V81.2.mp3'
import asset11 from '../../Course/assets/audio/A111-FE81.2.mp3'
import asset12 from '../../Course/assets/audio/A111-V81.3.mp3'
import asset13 from '../../Course/assets/audio/A111-FE81.3.mp3'
import asset14 from '../../Course/assets/audio/A111-V81.4.mp3'
import asset15 from '../../Course/assets/audio/A111-FE81.4.mp3'
import asset16 from '../../Course/assets/audio/A111-V81.5.mp3'
import asset17 from '../../Course/assets/audio/A111-FE81.5.mp3'
import asset18 from '../assets/characters/kim.webp'
import asset19 from '../assets/characters/ana.webp'
import asset20 from '../../Course/assets/a1-11-vocabulary81.webp'
import expanded124Asset0 from '../assets/flashcards124/549d0f5cfd280a467c0453a75d46de6ccd5ee166f603cb014388a46bb6b82700.mp3'
import expanded124Asset1 from '../assets/flashcards124/997cf989e2a5b68f74e881eccd793bd6f9448b795e4a46ae034a5fb524bfb1cd.mp3'
import expanded124Asset2 from '../assets/flashcards124/e82643072350f20fc7b492203267242b2ea50505af59cf2435e74c60d5e3bd03.mp3'
import expanded124Asset3 from '../assets/flashcards124/ef179cd31f0e3b81570dd6a00566851aa5f2184c96e7a3324a98cb031de73652.mp3'
import expanded124Asset4 from '../assets/flashcards124/155efcbe9bda1a0eba81ca8b64c3a19c6b5cb240948360fc6bd7fe85a49e8134.mp3'
import expanded124Asset5 from '../assets/flashcards124/60e7d8fd2bf96de30e97a238aa8f18aa0afec08a88c03a8340e564f1d26e306c.mp3'
import expanded124Asset6 from '../assets/flashcards124/52735a481dffe785a9178e3652a73016f1c83556382d99452ef3b9030663a413.mp3'
import expanded124Asset7 from '../assets/flashcards124/4bcd25862013579ecb0c0022d8a101f822d1c4b21174cacb1c4d2c32911239f4.mp3'
import expanded124Asset8 from '../assets/flashcards124/61e944772dee7d3c5ef599c6c5bbda5e4efd8abe6a0d58a1bac0196637472536.mp3'
import expanded124Asset9 from '../assets/flashcards124/aaaaa75ed2c92391af7c1dfd9d540853f316d70a6d83224f3830d81c1e432942.mp3'
import expanded124Asset10 from '../assets/flashcards124/0ae5b392bfe2e5c5ca81da6a2acce17f6a1b33bf11d05f9b1c4e5728a12cbbd6.mp3'
import expanded124Asset11 from '../assets/flashcards124/87c7d0e9724a222ba576719be9e40fba7886732ecbaa89da2ace6dadf111e5cf.mp3'
import expanded124Asset12 from '../assets/flashcards124/d7e86bfba706be24fe7c61d6b3d5a79944975cc6d549b79679cbd1ccd14762f7.mp3'
import expanded124Asset13 from '../assets/flashcards124/84bf37a8a3f1b57d86ad5558b2ef856aedc4da95c9f18687a586d63961d6a7f4.mp3'
import expanded124Asset14 from '../assets/flashcards124/d10a90ef2a5c0fdf75ff2e3bb3b6490a56f326b6eac3872579aa4ec4868fba55.webp'
import expanded124Asset15 from '../assets/flashcards124/95cfbf4eb0ca501c0121e8c65732db8c51a853ac452bde0f6bee2a1c3fbbd035.webp'
import expanded124Asset16 from '../assets/flashcards124/064a76994622d02e9b4c74ea263414903d8f6661d5a1ab21fa26c9c145e3b08c.webp'
import expanded124Asset17 from '../assets/flashcards124/780744e692748a15cd7a1e8b8729a7c8182e0a91eced071e60e7b775cbfcd8c8.webp'
import expanded124Asset18 from '../assets/flashcards124/8e6dac9bc4df2493ff613b2c25715cc3ac698abc5accb54c58b1ca9337f41039.webp'
import expanded124Asset19 from '../assets/flashcards124/f46e91b4da1faa510e425c5ef5668792e020cc4cf822d9e777e493bec7edc3f4.webp'
import expanded124Asset20 from '../assets/flashcards124/ccbffa275a68cc91916948d6d3bec335c65902771bbea89edaca0944ef8adb8c.webp'
import expanded124Asset21 from '../assets/flashcards124/a4ac2a9a5da0fd7594dcf889a55b4c4bbf16cd310276af0c3ca197f56e74a1e2.webp'
import expanded124Asset22 from '../assets/flashcards124/093f8fbc48c7e490b40ec6f390403ac2f15710069bf111f7b7e504bb206e22fd.webp'
import expanded124Asset23 from '../assets/flashcards124/a550840fbeebcbf18aa26c35f1dd9445a34421a46a16387db623c4986a103ee8.webp'
import expanded124Asset24 from '../assets/flashcards124/3cfc13d6fc41ea5304f5eff5fc03400e1a566d25f52d0f62af4cef7e76d4726c.webp'
import expanded124Asset25 from '../assets/flashcards124/f7f4bac0176b5593eb546266120ec11518221cdcd1f924c396172843775aa22f.webp'
import expanded124Asset26 from '../assets/flashcards124/5edeace9cdae5bebe1abca9e98bb756ce2389f681fafc2bd23264438caebe6d1.webp'
import expanded124Asset27 from '../assets/flashcards124/92430c80ca694e11bb138ecdd18d93241c6f2acc2f55a77a54995aba73dca848.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'deck-a2-clothing-essentials-jeans.front',
      text: 'jeans. These jeans are comfortable and durable.',
      src: expanded124Asset0,
    },
    {
      id: 'deck-a2-clothing-essentials-skirt.front',
      text: 'skirt. This skirt has two large pockets.',
      src: expanded124Asset1,
    },
    {
      id: 'deck-a2-clothing-essentials-shorts.front',
      text: 'shorts. He wore shorts because it was hot.',
      src: expanded124Asset2,
    },
    {
      id: 'deck-a2-clothing-essentials-sweater.front',
      text: 'sweater. This sweater keeps me warm.',
      src: expanded124Asset3,
    },
    {
      id: 'deck-a2-clothing-essentials-shirt.front',
      text: 'shirt. He wears a white shirt to work.',
      src: expanded124Asset4,
    },
    {
      id: 'deck-a2-clothing-essentials-sneakers.front',
      text: 'sneakers. I wear sneakers when I go running.',
      src: expanded124Asset5,
    },
    {
      id: 'deck-a2-clothing-essentials-socks.front',
      text: 'socks. I need a clean pair of socks.',
      src: expanded124Asset6,
    },
    {
      id: 'deck-a2-clothing-essentials-hat.front',
      text: 'hat. Wear a hat to protect yourself from the sun.',
      src: expanded124Asset7,
    },
    {
      id: 'deck-a2-clothing-essentials-cap.front',
      text: 'cap. He turned his cap backwards.',
      src: expanded124Asset8,
    },
    {
      id: 'deck-a2-clothing-essentials-scarf.front',
      text: 'scarf. She wrapped a scarf around her neck.',
      src: expanded124Asset9,
    },
    {
      id: 'deck-a2-clothing-essentials-size.front',
      text: 'size. Do you have this dress in my size?',
      src: expanded124Asset10,
    },
    {
      id: 'deck-a2-clothing-essentials-fitting-room.front',
      text: 'fitting room. Can I take these pants to the fitting room?',
      src: expanded124Asset11,
    },
    {
      id: 'deck-a2-clothing-essentials-try-on.front',
      text: 'try on. I would like to try on this jacket.',
      src: expanded124Asset12,
    },
    {
      id: 'deck-a2-clothing-essentials-pants.front',
      text: 'pants. I need a pair of black pants.',
      src: expanded124Asset13,
    },
    { id: 'a1-11.shadowing.01', text: 'Can I help you?', src: asset0 },
    {
      id: 'a1-11.shadowing.02',
      text: 'Yes. I’d like this blue T-shirt in medium.',
      src: asset1,
    },
    {
      id: 'a1-11.shadowing.03',
      text: 'Sorry, we have blue in large, or green in medium.',
      src: asset2,
    },
    {
      id: 'a1-11.shadowing.04',
      text: 'Can I see the green one, please?',
      src: asset3,
    },
    {
      id: 'a1-11.shadowing.05',
      text: 'Here you are. It’s twelve dollars.',
      src: asset4,
    },
    {
      id: 'a1-11.shadowing.06',
      text: 'That’s good. This one, please.',
      src: asset5,
    },
    { id: 'course-a1-11-t-shirt.front', text: 'T-shirt', src: asset6 },
    {
      id: 'course-a1-11-t-shirt.back',
      text: 'This T-shirt is green.',
      src: asset7,
    },
    { id: 'course-a1-11-shoes.front', text: 'shoes', src: asset8 },
    {
      id: 'course-a1-11-shoes.back',
      text: 'These shoes are small.',
      src: asset9,
    },
    { id: 'course-a1-11-jacket.front', text: 'jacket', src: asset10 },
    {
      id: 'course-a1-11-jacket.back',
      text: 'That jacket is blue.',
      src: asset11,
    },
    { id: 'course-a1-11-bag.front', text: 'bag', src: asset12 },
    {
      id: 'course-a1-11-bag.back',
      text: 'How much is this bag?',
      src: asset13,
    },
    { id: 'course-a1-11-glasses.front', text: 'glasses', src: asset14 },
    {
      id: 'course-a1-11-glasses.back',
      text: 'I like those glasses.',
      src: asset15,
    },
    { id: 'course-a1-11-dress.front', text: 'dress', src: asset16 },
    {
      id: 'course-a1-11-dress.back',
      text: 'Can I see this dress?',
      src: asset17,
    },
  ],
  images: {
    '/flashcards/a2/clothing-essentials/jeans/image.webp': expanded124Asset14,
    '/flashcards/a2/clothing-essentials/skirt/image.webp': expanded124Asset15,
    '/flashcards/a2/clothing-essentials/shorts/image.webp': expanded124Asset16,
    '/flashcards/a2/clothing-essentials/sweater/image.webp': expanded124Asset17,
    '/flashcards/a2/clothing-essentials/shirt/image.webp': expanded124Asset18,
    '/flashcards/a2/clothing-essentials/sneakers/image.webp':
      expanded124Asset19,
    '/flashcards/a2/clothing-essentials/socks/image.webp': expanded124Asset20,
    '/flashcards/a2/clothing-essentials/hat/image.webp': expanded124Asset21,
    '/flashcards/a2/clothing-essentials/cap/image.webp': expanded124Asset22,
    '/flashcards/a2/clothing-essentials/scarf/image.webp': expanded124Asset23,
    '/flashcards/a2/clothing-essentials/size/image.webp': expanded124Asset24,
    '/flashcards/a2/clothing-essentials/fitting-room/image.webp':
      expanded124Asset25,
    '/flashcards/a2/clothing-essentials/try-on/image.webp': expanded124Asset26,
    '/flashcards/a2/clothing-essentials/pants/image.webp': expanded124Asset27,
    '/flashcards/course-characters/kim/image.webp': asset18,
    '/flashcards/course-characters/ana/image.webp': asset19,
    '/flashcards-transparent/course-images/cc8b090ec2a7d9c3fd5d6ed68d3f2a9e899e96a93b2a7e558d6ac40504bf2716/image.webp':
      asset20,
  },
}
export default prepared
