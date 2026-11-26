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
import expanded124Asset0 from '../assets/flashcards124/06a330c84874900a57c941bd615123683d4e8be9794859f5ecc55567d0e20792.mp3'
import expanded124Asset1 from '../assets/flashcards124/53536aca9a5acccd96b4402c835bffe0d9de4227bd011f9817e44bbe842dbd03.mp3'
import expanded124Asset2 from '../assets/flashcards124/77571a73a52413752b06fd1db2e91fd8a761137792de935878bc1e6e4c49ec21.mp3'
import expanded124Asset3 from '../assets/flashcards124/8b6e918517bf1fe4e3d00dbe407af645f9894069100c0174a951fc2719d68d7d.mp3'
import expanded124Asset4 from '../assets/flashcards124/6a643dd1267061687f1ebef1264807b553b06078a020191d5628f17aaa9da5fc.mp3'
import expanded124Asset5 from '../assets/flashcards124/64d2a9ee868d6c1f7e9518041a29a982c52ae7cb71d76d82110f394e246aa051.mp3'
import expanded124Asset6 from '../assets/flashcards124/7dd608f576f9fde1e3340f6f9bfd173f5601a1667ac440244ebd0cbb404d65c5.mp3'
import expanded124Asset7 from '../assets/flashcards124/511b2de0555ba120be5d13519a635c2833bdc2da15dd283b1c4d6ba197048545.mp3'
import expanded124Asset8 from '../assets/flashcards124/df2a136d642c799a73c3d310a81a9b7d8dad93bd25acbde7b5524732dcbed8f6.mp3'
import expanded124Asset9 from '../assets/flashcards124/33a79f613488256f4179ed49a3d81e1ed118ab5d13bf6f0713961512f80e15d3.mp3'
import expanded124Asset10 from '../assets/flashcards124/e034e83c9885ab65f2df6ad1a05d1b2b64f36c5bb67ba63d94a9a5ac387d053f.mp3'
import expanded124Asset11 from '../assets/flashcards124/cdf1898ec3c37be33dbf21c37d79df2c8d00d5cdf599802d20de7be635d12c40.mp3'
import expanded124Asset12 from '../assets/flashcards124/3697928495046a9b64faf39d9ecf2afeb895a6c183857bef066b850f38103d34.mp3'
import expanded124Asset13 from '../assets/flashcards124/ac9a3372a5a0a0b5457dd025a74fbb85c69b9dcfa0a8637dff5295807d8a280a.mp3'
import expanded124Asset14 from '../assets/flashcards124/be129e03f0bb404be5668a01b75000d5391839679462e9320023cd89cb8c5cef.mp3'
import expanded124Asset15 from '../assets/flashcards124/9eb493bc3a6517727cd6199839115d6ac2b9ea32c3eeea110221fb66ca70052d.mp3'
import expanded124Asset16 from '../assets/flashcards124/ce80f1f32ba38c29cfab1f3b6fcc9bd2ff0b980b4ba139e8a96222c42ea77230.mp3'
import expanded124Asset17 from '../assets/flashcards124/6f87327bbe1256b9805b1a0611ccdfb1089a53054ce03bdcdf05553c9df94375.mp3'
import expanded124Asset18 from '../assets/flashcards124/a685f71fbb23df67398d7c7ba01c619964cac53f4ad7011d06a7367e29f16a5d.mp3'
import expanded124Asset19 from '../assets/flashcards124/17da3c339a5dff4f304428b4d22f8c76e979b1cfcc4534af7a6db88eb61e5da4.mp3'
import expanded124Asset20 from '../assets/flashcards124/b9557b2129cf3e3158b20ef5a0a34058aa7e815b6a9bdb50226b951ca6899bd8.mp3'
import expanded124Asset21 from '../assets/flashcards124/c892de26b008cbee9753ff60795b88d69d38289f5834dc21acc85e1d61e14834.mp3'
import expanded124Asset22 from '../assets/flashcards124/010a22a4d0b47553c68cbe53d9d692dc1279d1944c1af60a12084693c23f8f6c.mp3'
import expanded124Asset23 from '../assets/flashcards124/0fb4277bfb922858a743016ee604ceb7849d8c0697fa621aa0c21a50029d215d.mp3'
import expanded124Asset24 from '../assets/flashcards124/127a0cb4f5687ef3d52398a66f7404ac7375a5717104fbc575b357bcd8623295.mp3'
import expanded124Asset25 from '../assets/flashcards124/eb263c40af22cbf4735b16b52b4527a9371d77b19f72b16360ec7886e2cded37.mp3'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    { id: 'course-a1-02-letter-a.front', text: 'A', src: expanded124Asset0 },
    { id: 'course-a1-02-letter-b.front', text: 'B', src: expanded124Asset1 },
    { id: 'course-a1-02-letter-c.front', text: 'C', src: expanded124Asset2 },
    { id: 'course-a1-02-letter-d.front', text: 'D', src: expanded124Asset3 },
    { id: 'course-a1-02-letter-e.front', text: 'E', src: expanded124Asset4 },
    { id: 'course-a1-02-letter-f.front', text: 'F', src: expanded124Asset5 },
    { id: 'course-a1-02-letter-g.front', text: 'G', src: expanded124Asset6 },
    { id: 'course-a1-02-letter-h.front', text: 'H', src: expanded124Asset7 },
    { id: 'course-a1-02-letter-i.front', text: 'I', src: expanded124Asset8 },
    { id: 'course-a1-02-letter-j.front', text: 'J', src: expanded124Asset9 },
    { id: 'course-a1-02-letter-k.front', text: 'K', src: expanded124Asset10 },
    { id: 'course-a1-02-letter-l.front', text: 'L', src: expanded124Asset11 },
    { id: 'course-a1-02-letter-m.front', text: 'M', src: expanded124Asset12 },
    { id: 'course-a1-02-letter-n.front', text: 'N', src: expanded124Asset13 },
    { id: 'course-a1-02-letter-o.front', text: 'O', src: expanded124Asset14 },
    { id: 'course-a1-02-letter-p.front', text: 'P', src: expanded124Asset15 },
    { id: 'course-a1-02-letter-q.front', text: 'Q', src: expanded124Asset16 },
    { id: 'course-a1-02-letter-r.front', text: 'R', src: expanded124Asset17 },
    { id: 'course-a1-02-letter-s.front', text: 'S', src: expanded124Asset18 },
    { id: 'course-a1-02-letter-t.front', text: 'T', src: expanded124Asset19 },
    { id: 'course-a1-02-letter-u.front', text: 'U', src: expanded124Asset20 },
    { id: 'course-a1-02-letter-v.front', text: 'V', src: expanded124Asset21 },
    { id: 'course-a1-02-letter-w.front', text: 'W', src: expanded124Asset22 },
    { id: 'course-a1-02-letter-x.front', text: 'X', src: expanded124Asset23 },
    { id: 'course-a1-02-letter-y.front', text: 'Y', src: expanded124Asset24 },
    { id: 'course-a1-02-letter-z.front', text: 'Z', src: expanded124Asset25 },
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
