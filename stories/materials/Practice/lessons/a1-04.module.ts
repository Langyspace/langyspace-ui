import type { PreparedPractice } from '../Practice.types'
import data from './a1-04.json'
import asset0 from '../assets/audio/53c2c3872a8ddff9a75c9611e3a99504b418b6e4f542be6e794338c831fa9d01.mp3'
import asset1 from '../assets/audio/ef990c33969b8810cc73d693987fd59ec1387be659d6244bab60d5749ffe1568.mp3'
import asset2 from '../assets/audio/8eec5442f8a83832c9f851239dad5d8480607476139b394b16869fe4c656d1d0.mp3'
import asset3 from '../assets/audio/6e136e0422e1eb04cbd5c7823324d8cdaee7d517ab5a18bba86a84a636786125.mp3'
import asset4 from '../assets/audio/9c93bb29df2816455c7c61cdd695bd975aaf3c9e7c0073a32e7c13c1ab6817a5.mp3'
import asset5 from '../assets/audio/652761340b3880102d1f4406a52d3d46cc0851ea255ff3c55061e698069ca12d.mp3'
import asset6 from '../../A104/assets/audio/V79.0.mp3'
import asset7 from '../../A104/assets/audio/FE79.0.mp3'
import asset8 from '../../A104/assets/audio/V79.1.mp3'
import asset9 from '../../A104/assets/audio/FE79.1.mp3'
import asset10 from '../assets/audio/1521546e152fd9d027fbfbe760cc197a17e164eac499b56e0efc4bb8bfa76652.mp3'
import asset11 from '../../A104/assets/audio/FE79.2.mp3'
import asset12 from '../assets/audio/7e54da46f1ca2f9cdcebf49fbb748ba47b6d808a34496e926ad82ff940466d5c.mp3'
import asset13 from '../../A104/assets/audio/FE79.3.mp3'
import asset14 from '../../A104/assets/audio/V.4.mp3'
import asset15 from '../../A104/assets/audio/FE79.4.mp3'
import asset16 from '../../A104/assets/audio/V79.5.mp3'
import asset17 from '../../A104/assets/audio/FE79.5.mp3'
import asset18 from '../assets/audio/5e484c10135ff14a26d2a5bc968cd1ca507e2f2b75a82432842fe9df9080e1ba.mp3'
import asset19 from '../../A104/assets/audio/T.afternoon.mp3'
import asset20 from '../assets/audio/5a2fcab0f0e79abbf1aefb779e6857145aca7b64d424f85b4ba88d43e03e5e3b.mp3'
import asset21 from '../assets/audio/e6c1e9c54bcc7380cb009e3e8fecf526a3bc756875b7c1bc0d4a77af16e71428.mp3'
import asset22 from '../assets/characters/priya-nair.webp'
import asset23 from '../assets/characters/arjun-mehta.webp'
import asset24 from '../../A104/assets/scene-wake-up79.webp'
import asset25 from '../../A104/assets/scene-breakfast79.webp'
import asset26 from '../../A104/assets/scene-work79.webp'
import asset27 from '../../A104/assets/scene-study79.webp'
import asset28 from '../../A104/assets/scene-gym79.webp'
import asset29 from '../../A104/assets/scene-bedtime79.webp'
import asset30 from '../../A104/assets/scene-morning42.webp'
import asset31 from '../../A104/assets/scene-afternoon42.webp'
import asset32 from '../../A104/assets/scene-evening42.webp'
import expanded124Asset0 from '../assets/flashcards124/a9c5985fd4ac48607643a556d3c4e17f92a2a5df2e17b183043e80314eed7d3e.mp3'
import expanded124Asset1 from '../assets/flashcards124/64d681ce17260dd328c49198c2db3a29d907b95d0fce80130ac4703d47a00a15.mp3'
import expanded124Asset2 from '../assets/flashcards124/a16efa5590db9c44372ec278614ba322053983fd963144d49d7de0d92883e0e4.mp3'
import expanded124Asset3 from '../assets/flashcards124/31713b431d112299be9c33b85a0585c9a9a4dad2260c5e409dfd565782749542.mp3'
import expanded124Asset4 from '../assets/flashcards124/6abd3498773e945fb40d51c394d327394178a7d64631db8b7fd5f3d4935f9b29.mp3'
import expanded124Asset5 from '../assets/flashcards124/236b0d58f080b550d9345c81740f539c3dd296d8e6301aef6cf3b23afb82f942.mp3'
import expanded124Asset6 from '../assets/flashcards124/28976bfb59fcae4bdc82a4fc1b1fc7bc3915d4897cbf41990e76e33f21ae3224.mp3'
import expanded124Asset7 from '../assets/flashcards124/da9d14ff3db60a2020efaf3a07f5406d8a5cb47a09358f37f52205e01534d907.mp3'
import expanded124Asset8 from '../assets/flashcards124/b3154dac307db4c88f81241a7703b0fd9081e4311d7fa33fcc92bf036983da66.mp3'
import expanded124Asset9 from '../assets/flashcards124/fa44a92984baf84d62996857be4b2985fa0d8be954e143f50bc31fa981c0b71e.mp3'
import expanded124Asset10 from '../assets/flashcards124/43c431d508d8fc278ad59161c6e0cf8204d1e8a13be8489d8c3f52725afa3272.mp3'
import expanded124Asset11 from '../assets/flashcards124/b961e7e33f79ca700b6ce49011cca9aa836d5692742e74e6ea76b0b95cc849e7.mp3'
import expanded124Asset12 from '../assets/flashcards124/132e3a939153e3b52e4be8f626c66dc44a774ab349b8026ad76d257b9c0c5656.webp'
import expanded124Asset13 from '../assets/flashcards124/352aff537d3111630e3dd8823f649796f600b6eb645cb9067aee8405bc01c22b.webp'
import expanded124Asset14 from '../assets/flashcards124/1f55b8824c8c942a1ec6b8dab342b06cdce9c31ae2ab5feb8b74253e57b843d3.webp'
import expanded124Asset15 from '../assets/flashcards124/8c8360a3ab14425d8d026789ae1d1f72aad591bde7f2d621bbe605af9f16660b.webp'
import expanded124Asset16 from '../assets/flashcards124/4562c25823dcedf443a71f3e45aadf5e74ddd6058fcda32fa05a5cdb14b5600f.webp'
import expanded124Asset17 from '../assets/flashcards124/ef3be618cf70ffd96f050b6c55b9ed432eceec73fe4e892103047747c8375899.webp'
import expanded124Asset18 from '../assets/flashcards124/073dfa46f391bdb54895e797ea6361a58168ea0032685a5cb015a85af6389d24.webp'
import expanded124Asset19 from '../assets/flashcards124/ae72a43dd8405cfc16cfb3ba976486a6997e28ad83e0e9f32e9993cc5fe3ca7c.webp'
import expanded124Asset20 from '../assets/flashcards124/6c544ff42b8e1fb8d1d311361eaf87a517d7a6a9dada2d1c01ae72fa2c2f4233.webp'
import expanded124Asset21 from '../assets/flashcards124/a5550baa035bdc106086102513e46f5f1cef456fc345ddb9fa4ca30d473bdd21.webp'
import expanded124Asset22 from '../assets/flashcards124/ea4b036d606526b6946a0f4916b3dc85b54719971f59320a9ca08d57be9a7fbb.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'deck-a1-verbs-brush.front',
      text: 'brush. I brush my teeth.',
      src: expanded124Asset0,
    },
    {
      id: 'deck-a1-verbs-wash.front',
      text: 'wash. He washes his hands.',
      src: expanded124Asset1,
    },
    {
      id: 'deck-a1-verbs-eat.front',
      text: 'eat. I eat bread.',
      src: expanded124Asset2,
    },
    {
      id: 'deck-a1-verbs-drink.front',
      text: 'drink. She drinks water.',
      src: expanded124Asset3,
    },
    {
      id: 'deck-a1-verbs-read.front',
      text: 'read. I read a book.',
      src: expanded124Asset4,
    },
    {
      id: 'deck-a1-verbs-watch.front',
      text: 'watch. She watches TV.',
      src: expanded124Asset5,
    },
    {
      id: 'deck-a1-verbs-sleep.front',
      text: 'sleep. She sleeps at night.',
      src: expanded124Asset6,
    },
    { id: 'course-a1-03-cook.front', text: 'a cook', src: expanded124Asset7 },
    {
      id: 'course-a1-03-cook.back',
      text: 'My sister is a cook',
      src: expanded124Asset8,
    },
    {
      id: 'deck-a1-verbs-make.front',
      text: 'make. I make a cake.',
      src: expanded124Asset9,
    },
    {
      id: 'course-extra-influencer-routine-v8.front',
      text: 'get dressed. I get dressed after breakfast',
      src: expanded124Asset10,
    },
    {
      id: 'course-extra-influencer-routine-v8.back',
      text: 'get dressed. I get dressed after breakfast',
      src: expanded124Asset10,
    },
    {
      id: 'deck-a1-verbs-call.front',
      text: 'call. I call my mom.',
      src: expanded124Asset11,
    },
    {
      id: 'a1-04.shadowing.01',
      text: 'What time do you wake up?',
      src: asset0,
    },
    {
      id: 'a1-04.shadowing.02',
      text: 'I wake up at seven and have breakfast at half past seven',
      src: asset1,
    },
    {
      id: 'a1-04.shadowing.03',
      text: 'Do you work in the morning?',
      src: asset2,
    },
    {
      id: 'a1-04.shadowing.04',
      text: 'Yes. I work in the morning and study in the afternoon',
      src: asset3,
    },
    {
      id: 'a1-04.shadowing.05',
      text: 'Do you go to the gym in the evening?',
      src: asset4,
    },
    {
      id: 'a1-04.shadowing.06',
      text: 'Yes. Then I go home and go to bed at ten',
      src: asset5,
    },
    { id: 'course-a1-04-wake-up.front', text: 'wake up', src: asset6 },
    {
      id: 'course-a1-04-wake-up.back',
      text: 'I wake up at seven.',
      src: asset7,
    },
    {
      id: 'course-a1-04-have-breakfast.front',
      text: 'have breakfast',
      src: asset8,
    },
    {
      id: 'course-a1-04-have-breakfast.back',
      text: 'I have breakfast in the morning.',
      src: asset9,
    },
    { id: 'course-a1-04-work.front', text: 'work', src: asset10 },
    {
      id: 'course-a1-04-work.back',
      text: 'I work in the afternoon.',
      src: asset11,
    },
    { id: 'course-a1-04-study.front', text: 'study', src: asset12 },
    {
      id: 'course-a1-04-study.back',
      text: 'I study after work.',
      src: asset13,
    },
    {
      id: 'course-a1-04-go-to-the-gym.front',
      text: 'go to the gym',
      src: asset14,
    },
    {
      id: 'course-a1-04-go-to-the-gym.back',
      text: 'I go to the gym on Tuesday.',
      src: asset15,
    },
    { id: 'course-a1-04-go-to-bed.front', text: 'go to bed', src: asset16 },
    {
      id: 'course-a1-04-go-to-bed.back',
      text: 'I go to bed at ten.',
      src: asset17,
    },
    { id: 'course-a1-04-morning.front', text: 'morning', src: asset18 },
    {
      id: 'course-a1-04-morning.back',
      text: 'I have breakfast in the morning.',
      src: asset9,
    },
    { id: 'course-a1-04-afternoon.front', text: 'afternoon', src: asset19 },
    {
      id: 'course-a1-04-afternoon.back',
      text: 'I work in the afternoon.',
      src: asset11,
    },
    { id: 'course-a1-04-evening.front', text: 'evening', src: asset20 },
    {
      id: 'course-a1-04-evening.back',
      text: 'I go to the gym in the evening',
      src: asset21,
    },
  ],
  images: {
    '/flashcards-transparent/a1/verbs/brush/image.webp': expanded124Asset12,
    '/flashcards-transparent/a1/verbs/wash/image.webp': expanded124Asset13,
    '/flashcards-transparent/a1/verbs/eat/image.webp': expanded124Asset14,
    '/flashcards-transparent/a1/verbs/drink/image.webp': expanded124Asset15,
    '/flashcards-transparent/a1/verbs/read/image.webp': expanded124Asset16,
    '/flashcards-transparent/a1/verbs/watch/image.webp': expanded124Asset17,
    '/flashcards-transparent/a1/verbs/sleep/image.webp': expanded124Asset18,
    '/flashcards-transparent/course-images/ae72a43dd8405cfc16cfb3ba976486a6997e28ad83e0e9f32e9993cc5fe3ca7c/image.webp':
      expanded124Asset19,
    '/flashcards-transparent/a1/verbs/make/image.webp': expanded124Asset20,
    '/flashcards-transparent/course-images/a5550baa035bdc106086102513e46f5f1cef456fc345ddb9fa4ca30d473bdd21/image.webp':
      expanded124Asset21,
    '/flashcards-transparent/a1/verbs/call/image.webp': expanded124Asset22,
    '/flashcards/course-characters/priya-nair/image.webp': asset22,
    '/flashcards/course-characters/arjun-mehta/image.webp': asset23,
    '/flashcards-transparent/course-images/53a934819e2f31d96e726eca9408dfae4984898f63649ad3bb28f349d9df5caf/image.webp':
      asset24,
    '/flashcards-transparent/course-images/5f3c82fba8e1cc75fd760c2b3d37605373e23a50c6c9e614ee8a05ff175c0f8a/image.webp':
      asset25,
    '/flashcards-transparent/course-images/890681291331fcb6bbf0f2480a08e862f6efacd457fcaead73de797811dca83b/image.webp':
      asset26,
    '/flashcards-transparent/course-images/b5e62ae8cf526048b7bd6ce97e3ebc504ac89a7bbeed6ba197dc751f7eea7693/image.webp':
      asset27,
    '/flashcards-transparent/course-images/cc3ca75f987aba4062f432bf46f301cbcc7369eadd83a5bd6a37be8df12ebb19/image.webp':
      asset28,
    '/flashcards-transparent/course-images/aac230d344df85079b910ce83143ddb3d0d79cec30d1d2facc6bbe1d4e6d94f7/image.webp':
      asset29,
    '/flashcards-transparent/course-images/7fc0fc97de1a59bf7fbca08682b9adfa86810b01bc023a51a31fb33b54a1da58/image.webp':
      asset30,
    '/flashcards-transparent/course-images/6b0d1ecb9497b50b510fd2b24a61212546de7e82b7da7a919a8e61f2ac8f5f15/image.webp':
      asset31,
    '/flashcards-transparent/course-images/2399bfa682d8b665ba57203d4c293b2a21f6b4b82a3ef01b343fd6ca6fd12102/image.webp':
      asset32,
  },
}
export default prepared
