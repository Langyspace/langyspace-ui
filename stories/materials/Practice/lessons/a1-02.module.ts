import type { PreparedPractice } from '../Practice.types'
import data from './a1-02.json'
import asset0 from '../../A102/assets/audio/D.1.mp3'
import asset1 from '../../A102/assets/audio/D.2.mp3'
import asset2 from '../../A102/assets/audio/D.3.mp3'
import asset3 from '../../A102/assets/audio/D.4.mp3'
import asset4 from '../../A102/assets/audio/D.5.mp3'
import asset5 from '../../A102/assets/audio/D.6.mp3'
import asset6 from '../../A102/assets/audio/V.0.mp3'
import asset7 from '../assets/audio/af97a8b108f0647586446d62cf86264f51a5ec5b4432b789386db2e73f4b8147.mp3'
import asset8 from '../../A102/assets/audio/V.1.mp3'
import asset9 from '../assets/audio/e6ade95aa2b1e68843c068b9e9d0324245885992dad1841e00cf60373bb8efdb.mp3'
import asset10 from '../../A102/assets/audio/V.2.mp3'
import asset11 from '../assets/audio/3d965c33651a3761bfb60163e218700df6c1b660f45ba750ee7ca694065c1358.mp3'
import asset12 from '../../A102/assets/audio/V.3.mp3'
import asset13 from '../assets/audio/4362c794182d3d3aa275dd1f6e866b542942baef76b03a07f5fc23613404af17.mp3'
import asset14 from '../../A102/assets/audio/V.4.mp3'
import asset15 from '../assets/audio/c8479bc20a175d28768850ed4962f589e6bb3d57d1451a35519518102095c054.mp3'
import asset16 from '../../A102/assets/audio/V.5.mp3'
import asset17 from '../assets/audio/8a9016a468a71f04787026474370dfaea3944abe83d36cc65a1c1b49bf180262.mp3'
import asset18 from '../../A102/assets/audio/V.6.mp3'
import asset19 from '../assets/audio/0111e1ad5cb73ae5780225eb43ca44e65ac3369bf1479201c40c94aef4313d73.mp3'
import asset20 from '../../A102/assets/audio/V.7.mp3'
import asset21 from '../assets/audio/e95d463c4417ba30966ce871a56d386a0bf5962ffa7fdfc25f653f575d592736.mp3'
import asset22 from '../../A102/assets/audio/V.8.mp3'
import asset23 from '../assets/audio/a07c13f626c7dcc34dfde23135c68d95314f2f79d68adf511d7b8c1d0adcde7b.mp3'
import asset24 from '../../A102/assets/audio/V.9.mp3'
import asset25 from '../assets/audio/3e070e76c2b12cfa0e3ccf5c63183591d8f2f5a41bfd1b5ddace392f205d5280.mp3'
import asset26 from '../assets/characters/kim.webp'
import asset27 from '../assets/characters/ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a1-02.shadowing.01',
      text: 'Hi, Ana! What’s your last name?',
      src: asset0,
    },
    { id: 'a1-02.shadowing.02', text: 'My last name is Souza.', src: asset1 },
    { id: 'a1-02.shadowing.03', text: 'How do you spell it?', src: asset2 },
    { id: 'a1-02.shadowing.04', text: 'S-O-U-Z-A.', src: asset3 },
    {
      id: 'a1-02.shadowing.05',
      text: 'What’s your phone number?',
      src: asset4,
    },
    { id: 'a1-02.shadowing.06', text: 'It’s 984 221 507.', src: asset5 },
    { id: 'course-a1-02-zero.front', text: 'zero', src: asset6 },
    {
      id: 'course-a1-02-zero.back',
      text: 'There’s a zero in this phone number',
      src: asset7,
    },
    { id: 'course-a1-02-one.front', text: 'one', src: asset8 },
    { id: 'course-a1-02-one.back', text: 'I have one phone', src: asset9 },
    { id: 'course-a1-02-two.front', text: 'two', src: asset10 },
    {
      id: 'course-a1-02-two.back',
      text: 'Please repeat the last two numbers',
      src: asset11,
    },
    { id: 'course-a1-02-three.front', text: 'three', src: asset12 },
    {
      id: 'course-a1-02-three.back',
      text: 'Can you repeat the first three numbers?',
      src: asset13,
    },
    { id: 'course-a1-02-four.front', text: 'four', src: asset14 },
    {
      id: 'course-a1-02-four.back',
      text: 'The last number is four',
      src: asset15,
    },
    { id: 'course-a1-02-five.front', text: 'five', src: asset16 },
    {
      id: 'course-a1-02-five.back',
      text: 'The code has five numbers',
      src: asset17,
    },
    { id: 'course-a1-02-six.front', text: 'six', src: asset18 },
    {
      id: 'course-a1-02-six.back',
      text: 'Is the next number six?',
      src: asset19,
    },
    { id: 'course-a1-02-seven.front', text: 'seven', src: asset20 },
    {
      id: 'course-a1-02-seven.back',
      text: 'Please say seven again',
      src: asset21,
    },
    { id: 'course-a1-02-eight.front', text: 'eight', src: asset22 },
    {
      id: 'course-a1-02-eight.back',
      text: 'Did you say eight or nine?',
      src: asset23,
    },
    { id: 'course-a1-02-nine.front', text: 'nine', src: asset24 },
    {
      id: 'course-a1-02-nine.back',
      text: 'The number after eight is nine',
      src: asset25,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset26,
    '/flashcards/course-characters/ana/image.webp': asset27,
  },
}
export default prepared
