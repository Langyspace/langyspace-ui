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
import alphabet131Asset0 from '../assets/homework131/alphabet/glyph-0.webp'
import alphabet131Asset1 from '../assets/homework131/alphabet/glyph-1.webp'
import alphabet131Asset2 from '../assets/homework131/alphabet/glyph-2.webp'
import alphabet131Asset3 from '../assets/homework131/alphabet/glyph-3.webp'
import alphabet131Asset4 from '../assets/homework131/alphabet/glyph-4.webp'
import alphabet131Asset5 from '../assets/homework131/alphabet/glyph-5.webp'
import alphabet131Asset6 from '../assets/homework131/alphabet/glyph-6.webp'
import alphabet131Asset7 from '../assets/homework131/alphabet/glyph-7.webp'
import alphabet131Asset8 from '../assets/homework131/alphabet/glyph-8.webp'
import alphabet131Asset9 from '../assets/homework131/alphabet/glyph-9.webp'
import alphabet131Asset10 from '../assets/homework131/alphabet/glyph-a.webp'
import alphabet131Asset11 from '../assets/homework131/alphabet/glyph-b.webp'
import alphabet131Asset12 from '../assets/homework131/alphabet/glyph-c.webp'
import alphabet131Asset13 from '../assets/homework131/alphabet/glyph-d.webp'
import alphabet131Asset14 from '../assets/homework131/alphabet/glyph-e.webp'
import alphabet131Asset15 from '../assets/homework131/alphabet/glyph-f.webp'
import alphabet131Asset16 from '../assets/homework131/alphabet/glyph-g.webp'
import alphabet131Asset17 from '../assets/homework131/alphabet/glyph-h.webp'
import alphabet131Asset18 from '../assets/homework131/alphabet/glyph-i.webp'
import alphabet131Asset19 from '../assets/homework131/alphabet/glyph-j.webp'
import alphabet131Asset20 from '../assets/homework131/alphabet/glyph-k.webp'
import alphabet131Asset21 from '../assets/homework131/alphabet/glyph-l.webp'
import alphabet131Asset22 from '../assets/homework131/alphabet/glyph-m.webp'
import alphabet131Asset23 from '../assets/homework131/alphabet/glyph-n.webp'
import alphabet131Asset24 from '../assets/homework131/alphabet/glyph-o.webp'
import alphabet131Asset25 from '../assets/homework131/alphabet/glyph-p.webp'
import alphabet131Asset26 from '../assets/homework131/alphabet/glyph-q.webp'
import alphabet131Asset27 from '../assets/homework131/alphabet/glyph-r.webp'
import alphabet131Asset28 from '../assets/homework131/alphabet/glyph-s.webp'
import alphabet131Asset29 from '../assets/homework131/alphabet/glyph-t.webp'
import alphabet131Asset30 from '../assets/homework131/alphabet/glyph-u.webp'
import alphabet131Asset31 from '../assets/homework131/alphabet/glyph-v.webp'
import alphabet131Asset32 from '../assets/homework131/alphabet/glyph-w.webp'
import alphabet131Asset33 from '../assets/homework131/alphabet/glyph-x.webp'
import alphabet131Asset34 from '../assets/homework131/alphabet/glyph-y.webp'
import alphabet131Asset35 from '../assets/homework131/alphabet/glyph-z.webp'
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
    '/flashcards-transparent/course-practice/homework-media131/a8642dd093ac4138a9400ef740545c7788a46c0d03ff2cde19383c83fccab210/image.webp': alphabet131Asset0,
    '/flashcards-transparent/course-practice/homework-media131/06413b1f1a8f4c53454994a27075f9cc86ac8979fad5f6b53367081bf4ec6d84/image.webp': alphabet131Asset1,
    '/flashcards-transparent/course-practice/homework-media131/a6b26318539d26e728eff370afeb2e45110120088756181e035394be0b4f3232/image.webp': alphabet131Asset2,
    '/flashcards-transparent/course-practice/homework-media131/483357a7291e28ee4312f368b956232143a81cf7694b279b5aef4ce32d3a0b55/image.webp': alphabet131Asset3,
    '/flashcards-transparent/course-practice/homework-media131/3b40062162a48db89149d03421fbec26af6cfcadf792296f0e563586e58ac39b/image.webp': alphabet131Asset4,
    '/flashcards-transparent/course-practice/homework-media131/5b791934f4de25d185fe2459e50af1c1152714e8e634c1d29a58c3acd67e7ac0/image.webp': alphabet131Asset5,
    '/flashcards-transparent/course-practice/homework-media131/550047997fbf0b7ac54563af726571f4697446493e9d387b058eae336266569f/image.webp': alphabet131Asset6,
    '/flashcards-transparent/course-practice/homework-media131/cf25879b89fa7f8f0f0a904f2d8ba7e37104e82a82e9a444c5de528fc1977bfb/image.webp': alphabet131Asset7,
    '/flashcards-transparent/course-practice/homework-media131/d42411bbd4428a227c2e4bb815c392931bd8ba65d66e273aad7fbfa4faedc8cc/image.webp': alphabet131Asset8,
    '/flashcards-transparent/course-practice/homework-media131/8d3285a85a1a9866ef6d863041e3e28c0d7d88bfb56f33f4b79864bb17c8ca37/image.webp': alphabet131Asset9,
    '/flashcards-transparent/course-practice/homework-media131/3931b6b1ceea563425e641f0beab8e3390f4bbdb1b6c788969e1850973905a3d/image.webp': alphabet131Asset10,
    '/flashcards-transparent/course-practice/homework-media131/4ed3d840cbb6483b8d73cc44866ad7a84bd8fbafbcc1d8c7c37e52fb31c1c12f/image.webp': alphabet131Asset11,
    '/flashcards-transparent/course-practice/homework-media131/5518ac3abb5fef8046c9d969d064ed9e11c9adb96022c2dd9739e21211a9cdc2/image.webp': alphabet131Asset12,
    '/flashcards-transparent/course-practice/homework-media131/d242b61f40c5c95263c37fe8e68be7f440c1f31c04dc372c270c983689d866e5/image.webp': alphabet131Asset13,
    '/flashcards-transparent/course-practice/homework-media131/50faf97c2680384bfcc00467f893560bc1136ab10e8e5f9fde6de4a783b38a37/image.webp': alphabet131Asset14,
    '/flashcards-transparent/course-practice/homework-media131/4b49b2c89814f9d6848b5e0489435d453d48d6af221ff1bc2a209bb9fec2e544/image.webp': alphabet131Asset15,
    '/flashcards-transparent/course-practice/homework-media131/9f290f7ac3f131197978f33ece7b063fb979d979f2644954eb4fe2aaab40278d/image.webp': alphabet131Asset16,
    '/flashcards-transparent/course-practice/homework-media131/d097c3cd5627dafff18dda172534a79de316a06fc250c6d876d00554d916f1f1/image.webp': alphabet131Asset17,
    '/flashcards-transparent/course-practice/homework-media131/52930374e7223d5d8f762e0ec3fe8e8722d6b36fd2e37b33887318816cc5d47a/image.webp': alphabet131Asset18,
    '/flashcards-transparent/course-practice/homework-media131/c9430c83c4fe5877b54e3267e43c8a78386a638c45644ccf05c4f49a9716fecf/image.webp': alphabet131Asset19,
    '/flashcards-transparent/course-practice/homework-media131/6b8466a0a5ca7f048dc60d60ff00c8f2fa398f98e34f3a4092ff113e9cde1ea1/image.webp': alphabet131Asset20,
    '/flashcards-transparent/course-practice/homework-media131/61baaa9acd331f389bd9e92a9b4b90feba84bf5f739c35037b30b582ff7629e3/image.webp': alphabet131Asset21,
    '/flashcards-transparent/course-practice/homework-media131/6db0d1dbbd1fec662b1aa7f10b68449c6556d6e9ee9dcce9878291c56e4aa4af/image.webp': alphabet131Asset22,
    '/flashcards-transparent/course-practice/homework-media131/ca091c927464622e46f4c91ad100b57b803a6714841caaa59f876015280a4933/image.webp': alphabet131Asset23,
    '/flashcards-transparent/course-practice/homework-media131/95f5f8c8d6c0c1b1910c94e01ecc14ef5bd8a682fc7f93350681e7428cfbbf9e/image.webp': alphabet131Asset24,
    '/flashcards-transparent/course-practice/homework-media131/90ad7db4084813b36de5bfffece8acd11ddd275ef4f39d179f631bc82ab001e7/image.webp': alphabet131Asset25,
    '/flashcards-transparent/course-practice/homework-media131/c9ccf42ea5ee58be663eb6c1e4a962527cd2725eacdf6d7fba10afcaef5db3de/image.webp': alphabet131Asset26,
    '/flashcards-transparent/course-practice/homework-media131/7943b7910b5085f7ea504f6659e02a4e84876c53c62d34f5a1e3f8270cc98025/image.webp': alphabet131Asset27,
    '/flashcards-transparent/course-practice/homework-media131/95a7ce83412625fba8117396cbd4dda0946a2625417324abb8a8ae7413292d3c/image.webp': alphabet131Asset28,
    '/flashcards-transparent/course-practice/homework-media131/7c8f8ec6c753f735fba58e17d3579c11d2ae716a34364b1bc74ff16a201fee46/image.webp': alphabet131Asset29,
    '/flashcards-transparent/course-practice/homework-media131/169827ef4474f0486e1fe51438adb4999a1128251a43c3802cd53dc56d11de36/image.webp': alphabet131Asset30,
    '/flashcards-transparent/course-practice/homework-media131/1202243722597f021e8e8002a1221b128530674c0d116654024bdae6540c34b0/image.webp': alphabet131Asset31,
    '/flashcards-transparent/course-practice/homework-media131/f3a2ff9b8c5a0e5c4e746a82c222b3e13b5fb60913c7a5c676df007617dba6c8/image.webp': alphabet131Asset32,
    '/flashcards-transparent/course-practice/homework-media131/a6c6497e260275e7bf84ce7974461065830821133de9ab111bdc2d8165753e02/image.webp': alphabet131Asset33,
    '/flashcards-transparent/course-practice/homework-media131/5e00a1d55efa2e4399c13802c144b1bb0274e7b06cd7ceb43d1f06da1ab51a95/image.webp': alphabet131Asset34,
    '/flashcards-transparent/course-practice/homework-media131/0ce27734d0ee76858bcf3158e8a91145fec50c3b858de7146d48886a7d8b521e/image.webp': alphabet131Asset35,
    '/flashcards/course-characters/kim/image.webp': asset26,
    '/flashcards/course-characters/ana/image.webp': asset27,
  },
}
export default prepared
