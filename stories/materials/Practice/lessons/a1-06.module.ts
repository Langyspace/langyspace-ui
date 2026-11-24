import type { PreparedPractice } from '../Practice.types'
import data from './a1-06.json'
import asset0 from '../../A106/assets/audio/D.1.mp3'
import asset1 from '../../A106/assets/audio/D.2.mp3'
import asset2 from '../../A106/assets/audio/D.3.mp3'
import asset3 from '../../A106/assets/audio/D.4.mp3'
import asset4 from '../../A106/assets/audio/D.5.mp3'
import asset5 from '../../A106/assets/audio/D.6.mp3'
import asset6 from '../../A106/assets/audio/V.0.mp3'
import asset7 from '../../A106/assets/audio/FE81.0.mp3'
import asset8 from '../../A106/assets/audio/V.1.mp3'
import asset9 from '../../A106/assets/audio/FE81.1.mp3'
import asset10 from '../../A106/assets/audio/V.2.mp3'
import asset11 from '../../A106/assets/audio/FE81.2.mp3'
import asset12 from '../../A106/assets/audio/V.3.mp3'
import asset13 from '../../A106/assets/audio/FE81.3.mp3'
import asset14 from '../../A106/assets/audio/V.4.mp3'
import asset15 from '../../A106/assets/audio/FS81.4.mp3'
import asset16 from '../../A106/assets/audio/V.5.mp3'
import asset17 from '../../A106/assets/audio/FE81.5.mp3'
import asset18 from '../../A106/assets/audio/V.6.mp3'
import asset19 from '../assets/audio/f590cbe9fc16fef397f149f5fc9fcbb7c7ffde4bf27a9c6bd68cd96ca78102ce.mp3'
import asset20 from '../../A106/assets/audio/V.7.mp3'
import asset21 from '../assets/audio/b3172a8bf3c64ef9c1f5860928c7d523a212982674ab3af1761a648aa32412a6.mp3'
import asset22 from '../../A106/assets/audio/V.8.mp3'
import asset23 from '../assets/audio/bc46b6472089557e46589b01582591e5d48102ce990e3d9e6f52b1715b232201.mp3'
import asset24 from '../../A106/assets/audio/P.0.mp3'
import asset25 from '../assets/audio/f54af3c469fd729a214de8ea724739ff0151f3963f1c6f4479048e8e5063c6a0.mp3'
import asset26 from '../../A106/assets/audio/P.1.mp3'
import asset27 from '../assets/audio/a97552548192dcc99f9c19347cde75029c900eae02823d7295e684573d248d47.mp3'
import asset28 from '../../A106/assets/audio/P.2.mp3'
import asset29 from '../assets/audio/896a09d4e84f8b2a8ed03ffd3a60352084db6366dcae08cb261d0d82a1c62c59.mp3'
import asset30 from '../../A106/assets/audio/P.3.mp3'
import asset31 from '../assets/audio/e680b68e5a04199ceca07632d136a6d6e66ec2fa505f50d577d61d4721505414.mp3'
import asset32 from '../assets/characters/kim.webp'
import asset33 from '../assets/characters/ana.webp'
import asset34 from '../../A106/assets/scene-dog.webp'
import asset35 from '../../A106/assets/scene-cat.webp'
import asset36 from '../../A106/assets/scene-fish.webp'
import asset37 from '../../A106/assets/scene-bird.webp'
import asset38 from '../../A106/assets/scene-rabbit.webp'
import asset39 from '../../A106/assets/scene-turtle.webp'
import asset40 from '../../A106/assets/scene-bed.webp'
import asset41 from '../../A106/assets/scene-sofa.webp'
import asset42 from '../../A106/assets/scene-table.webp'
import asset43 from '../../A106/assets/scene-cat-on.webp'
import asset44 from '../../A106/assets/scene-cat-in.webp'
import asset45 from '../../A106/assets/scene-cat-under.webp'
import asset46 from '../../A106/assets/scene-cat-next.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    { id: 'a1-06.shadowing.01', text: 'Is this your dog?', src: asset0 },
    {
      id: 'a1-06.shadowing.02',
      text: 'Yes! This is Thor. He’s three.',
      src: asset1,
    },
    {
      id: 'a1-06.shadowing.03',
      text: 'Hi, Thor! Do you have a cat too?',
      src: asset2,
    },
    {
      id: 'a1-06.shadowing.04',
      text: 'Yes, I do. Her name is Mia. Mia! Where’s Mia?',
      src: asset3,
    },
    { id: 'a1-06.shadowing.05', text: 'Is she on the sofa?', src: asset4 },
    {
      id: 'a1-06.shadowing.06',
      text: 'No, she isn’t. Look! She’s under the bed.',
      src: asset5,
    },
    { id: 'course-a1-06-dog.front', text: 'a dog', src: asset6 },
    {
      id: 'course-a1-06-dog.back',
      text: 'This is Thor, Ana’s dog.',
      src: asset7,
    },
    { id: 'course-a1-06-cat.front', text: 'a cat', src: asset8 },
    {
      id: 'course-a1-06-cat.back',
      text: 'This is Mia, Ana’s cat.',
      src: asset9,
    },
    { id: 'course-a1-06-fish.front', text: 'a fish', src: asset10 },
    {
      id: 'course-a1-06-fish.back',
      text: 'The fish is in the water.',
      src: asset11,
    },
    { id: 'course-a1-06-bird.front', text: 'a bird', src: asset12 },
    {
      id: 'course-a1-06-bird.back',
      text: 'The bird is next to the window.',
      src: asset13,
    },
    { id: 'course-a1-06-rabbit.front', text: 'a rabbit', src: asset14 },
    {
      id: 'course-a1-06-rabbit.back',
      text: 'a rabbit. Do you have a rabbit?',
      src: asset15,
    },
    { id: 'course-a1-06-turtle.front', text: 'a turtle', src: asset16 },
    { id: 'course-a1-06-turtle.back', text: 'I like turtles.', src: asset17 },
    { id: 'course-a1-06-bed.front', text: 'a bed', src: asset18 },
    {
      id: 'course-a1-06-bed.back',
      text: 'The cat is under the bed',
      src: asset19,
    },
    { id: 'course-a1-06-sofa.front', text: 'a sofa', src: asset20 },
    {
      id: 'course-a1-06-sofa.back',
      text: 'The cat is on the sofa',
      src: asset21,
    },
    { id: 'course-a1-06-table.front', text: 'a table', src: asset22 },
    {
      id: 'course-a1-06-table.back',
      text: 'The dog is next to the table',
      src: asset23,
    },
    { id: 'course-a1-06-on.front', text: 'on', src: asset24 },
    {
      id: 'course-a1-06-on.back',
      text: 'The cat is on the sofa',
      src: asset25,
    },
    { id: 'course-a1-06-in.front', text: 'in', src: asset26 },
    { id: 'course-a1-06-in.back', text: 'The cat is in the box', src: asset27 },
    { id: 'course-a1-06-under.front', text: 'under', src: asset28 },
    {
      id: 'course-a1-06-under.back',
      text: 'The cat is under the bed',
      src: asset29,
    },
    { id: 'course-a1-06-next-to.front', text: 'next to', src: asset30 },
    {
      id: 'course-a1-06-next-to.back',
      text: 'The cat is next to the table',
      src: asset31,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset32,
    '/flashcards/course-characters/ana/image.webp': asset33,
    '/flashcards-transparent/course-images/4cab8640207fa0a8e02ecbcebadcddd318cc11d8c0910ace074d2b49c3af5b61/image.webp':
      asset34,
    '/flashcards-transparent/course-images/2fa2be0425cdcbe4fae6db740c57be8bf372df423313c2d442d59d79ca92554a/image.webp':
      asset35,
    '/flashcards-transparent/course-images/65a770188d0145f9e12e2e0af9b0b8022afbe4a602278cf320108e8426d9b4cd/image.webp':
      asset36,
    '/flashcards-transparent/course-images/f66643b8d3fc5cc5d085cffdbf2db1718dcf6bf4f00cb837dcc262f2e87429f6/image.webp':
      asset37,
    '/flashcards-transparent/course-images/36b458233cc5371b43e784adf65e262eba50e58004d394ef7a6c0461726ed665/image.webp':
      asset38,
    '/flashcards-transparent/course-images/8351de89bc90aa37730c042df46856426c6fb4c75d8b9aff0f3f5fc0197cfef7/image.webp':
      asset39,
    '/flashcards-transparent/course-images/5d37d141f215ef8d84fa455a603de75fecc00155736a8830937c17539b5e7701/image.webp':
      asset40,
    '/flashcards-transparent/course-images/bedf7066bb99b2081415f676f223fc2f7bedaa014facc22c62bcf3328b47c9af/image.webp':
      asset41,
    '/flashcards-transparent/course-images/c2df6f087f1d64a76ccdc264c268a3ddfac5a2a43b890c5b7311e472bf5258c1/image.webp':
      asset42,
    '/flashcards-transparent/course-images/0d53bbfcff2999ecc75c407d381ad41130e2217b448464a4b7553174d23c3b0b/image.webp':
      asset43,
    '/flashcards-transparent/course-images/45782ad82ae1efcd84b96bf4e7d6a8fb5b332e1aeedf80a73aebd513d8fa496b/image.webp':
      asset44,
    '/flashcards-transparent/course-images/52dad90b6dc77dd190675c92c04a56f0d92dd0d004c82354e1784bca49cb009e/image.webp':
      asset45,
    '/flashcards-transparent/course-images/13e0c1025430844fe2d8c11155fab20b59ed728b1c2bd28abab49652aa3d4ece/image.webp':
      asset46,
  },
}
export default prepared
