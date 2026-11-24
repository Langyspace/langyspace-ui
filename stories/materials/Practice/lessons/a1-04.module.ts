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
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
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
