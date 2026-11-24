import type { PreparedPractice } from '../Practice.types'
import data from './a1-03.json'
import asset0 from '../../A103/assets/audio/D.1.mp3'
import asset1 from '../../A103/assets/audio/D.2.mp3'
import asset2 from '../../A103/assets/audio/D.3.mp3'
import asset3 from '../../A103/assets/audio/D.4.mp3'
import asset4 from '../../A103/assets/audio/D.5.mp3'
import asset5 from '../../A103/assets/audio/D.6.mp3'
import asset6 from '../../A103/assets/audio/F.0.mp3'
import asset7 from '../../A103/assets/audio/FE.0.mp3'
import asset8 from '../../A103/assets/audio/F.1.mp3'
import asset9 from '../../A103/assets/audio/FE.1.mp3'
import asset10 from '../../A103/assets/audio/F.2.mp3'
import asset11 from '../../A103/assets/audio/FE.2.mp3'
import asset12 from '../../A103/assets/audio/F.3.mp3'
import asset13 from '../../A103/assets/audio/FE.3.mp3'
import asset14 from '../../A103/assets/audio/F.4.mp3'
import asset15 from '../../A103/assets/audio/FE.4.mp3'
import asset16 from '../../A103/assets/audio/F.5.mp3'
import asset17 from '../../A103/assets/audio/FE.5.mp3'
import asset18 from '../../A103/assets/audio/V.0.mp3'
import asset19 from '../assets/audio/09ca4cdac5aeefd4940513125b76adbd89cac5f9824424ffc6f355052a7e5df9.mp3'
import asset20 from '../../A103/assets/audio/V.2.mp3'
import asset21 from '../../A103/assets/audio/V.3.mp3'
import asset22 from '../assets/audio/b3154dac307db4c88f81241a7703b0fd9081e4311d7fa33fcc92bf036983da66.mp3'
import asset23 from '../assets/characters/kim.webp'
import asset24 from '../assets/characters/ana.webp'
import asset25 from '../../A103/assets/scene-ana-family.webp'
import asset26 from '../../A103/assets/scene-student.webp'
import asset27 from '../../A103/assets/scene-doctor.webp'
import asset28 from '../../A103/assets/scene-cook.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    { id: 'a1-03.shadowing.01', text: 'Who’s this?', src: asset0 },
    {
      id: 'a1-03.shadowing.02',
      text: 'This is my brother, Leo. He’s a student.',
      src: asset1,
    },
    { id: 'a1-03.shadowing.03', text: 'And who are they?', src: asset2 },
    {
      id: 'a1-03.shadowing.04',
      text: 'These are my parents. They’re from Recife.',
      src: asset3,
    },
    {
      id: 'a1-03.shadowing.05',
      text: 'Is your mother a teacher?',
      src: asset4,
    },
    {
      id: 'a1-03.shadowing.06',
      text: 'No, she isn’t. She’s a doctor.',
      src: asset5,
    },
    { id: 'course-a1-03-mother.front', text: 'mother', src: asset6 },
    {
      id: 'course-a1-03-mother.back',
      text: 'My mother is a doctor.',
      src: asset7,
    },
    { id: 'course-a1-03-father.front', text: 'father', src: asset8 },
    {
      id: 'course-a1-03-father.back',
      text: 'This is my father. He’s from Recife.',
      src: asset9,
    },
    { id: 'course-a1-03-parents.front', text: 'parents', src: asset10 },
    {
      id: 'course-a1-03-parents.back',
      text: 'My parents are from Recife.',
      src: asset11,
    },
    { id: 'course-a1-03-brother.front', text: 'brother', src: asset12 },
    {
      id: 'course-a1-03-brother.back',
      text: 'My brother, Leo, is a student.',
      src: asset13,
    },
    { id: 'course-a1-03-sister.front', text: 'sister', src: asset14 },
    {
      id: 'course-a1-03-sister.back',
      text: 'This is Bia, my sister. She’s a cook.',
      src: asset15,
    },
    { id: 'course-a1-03-friend.front', text: 'friend', src: asset16 },
    { id: 'course-a1-03-friend.back', text: 'Kim is my friend.', src: asset17 },
    { id: 'course-a1-03-student.front', text: 'a student', src: asset18 },
    {
      id: 'course-a1-03-student.back',
      text: 'My brother is a student',
      src: asset19,
    },
    { id: 'course-a1-03-doctor.front', text: 'a doctor', src: asset20 },
    {
      id: 'course-a1-03-doctor.back',
      text: 'My mother is a doctor.',
      src: asset7,
    },
    { id: 'course-a1-03-cook.front', text: 'a cook', src: asset21 },
    { id: 'course-a1-03-cook.back', text: 'My sister is a cook', src: asset22 },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset23,
    '/flashcards/course-characters/ana/image.webp': asset24,
    '/flashcards-transparent/course-images/4e32abdc754e5a4a049b08d811bd363c96891d4a8423244c778dfade8212eb49/image.webp':
      asset25,
    '/flashcards-transparent/course-images/bd3d6a132b7bf195227a92c86831cf241adfd45b7bea97899cc011ce16cebf17/image.webp':
      asset26,
    '/flashcards-transparent/course-images/e9d561807a1d71f0aab6fcf841f8c96748ee79c9512bacfaf5f90a35cfc2fc1a/image.webp':
      asset27,
    '/flashcards-transparent/course-images/ae72a43dd8405cfc16cfb3ba976486a6997e28ad83e0e9f32e9993cc5fe3ca7c/image.webp':
      asset28,
  },
}
export default prepared
