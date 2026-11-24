import type { PreparedPractice } from '../Practice.types'
import data from './a1-01.json'
import asset0 from '../../A101/assets/audio/R.T1.mp3'
import asset1 from '../../A101/assets/audio/R.T2.mp3'
import asset2 from '../../A101/assets/audio/R.T3.mp3'
import asset3 from '../../A101/assets/audio/R.T4.mp3'
import asset4 from '../../A101/assets/audio/R80.5.mp3'
import asset5 from '../../A101/assets/audio/R80.6.mp3'
import asset6 from '../../A101/assets/audio/V80.0.mp3'
import asset7 from '../../A101/assets/audio/FE80.0.mp3'
import asset8 from '../../A101/assets/audio/V80.1.mp3'
import asset9 from '../../A101/assets/audio/FE80.1.mp3'
import asset10 from '../../A101/assets/audio/V80.2.mp3'
import asset11 from '../../A101/assets/audio/FE80.2.mp3'
import asset12 from '../../A101/assets/audio/ph_happy.mp3'
import asset13 from '../../A101/assets/audio/FE80.3.mp3'
import asset14 from '../../A101/assets/audio/ph_tired.mp3'
import asset15 from '../../A101/assets/audio/FE80.4.mp3'
import asset16 from '../../A101/assets/audio/ph_hungry.mp3'
import asset17 from '../../A101/assets/audio/FE80.5.mp3'
import asset18 from '../assets/characters/kim.webp'
import asset19 from '../assets/characters/ana.webp'
import asset20 from '../../A101/assets/flag-br.svg'
import asset21 from '../../A101/assets/flag-kr.svg'
import asset22 from '../../A101/assets/flag-us.svg'
import asset23 from '../../A101/assets/scene-happy-mia.webp'
import asset24 from '../../A101/assets/scene-tired-tom.webp'
import asset25 from '../../A101/assets/scene-hungry-ana.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a1-01.shadowing.01',
      text: 'Hi! I’m Kim. I’m from Korea.',
      src: asset0,
    },
    {
      id: 'a1-01.shadowing.02',
      text: 'Hi, Kim! I’m Ana. I’m from Brazil. Nice to meet you.',
      src: asset1,
    },
    {
      id: 'a1-01.shadowing.03',
      text: 'Nice to meet you too. How are you?',
      src: asset2,
    },
    {
      id: 'a1-01.shadowing.04',
      text: 'I’m good, thanks. I’m hungry! And you?',
      src: asset3,
    },
    {
      id: 'a1-01.shadowing.05',
      text: 'I’m tired, but I’m happy. Welcome, Ana!',
      src: asset4,
    },
    {
      id: 'a1-01.shadowing.06',
      text: 'Thank you! It’s nice to be here.',
      src: asset5,
    },
    { id: 'course-a1-01-brazil.front', text: 'Brazil', src: asset6 },
    { id: 'course-a1-01-brazil.back', text: 'I’m from Brazil.', src: asset7 },
    { id: 'course-a1-01-south-korea.front', text: 'South Korea', src: asset8 },
    {
      id: 'course-a1-01-south-korea.back',
      text: 'I’m from South Korea.',
      src: asset9,
    },
    {
      id: 'course-a1-01-united-states.front',
      text: 'the United States',
      src: asset10,
    },
    {
      id: 'course-a1-01-united-states.back',
      text: 'I’m from the United States.',
      src: asset11,
    },
    { id: 'course-a1-01-happy.front', text: 'happy', src: asset12 },
    { id: 'course-a1-01-happy.back', text: 'I’m happy.', src: asset13 },
    { id: 'course-a1-01-tired.front', text: 'tired', src: asset14 },
    { id: 'course-a1-01-tired.back', text: 'I’m tired.', src: asset15 },
    { id: 'course-a1-01-hungry.front', text: 'hungry', src: asset16 },
    { id: 'course-a1-01-hungry.back', text: 'I’m hungry.', src: asset17 },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset18,
    '/flashcards/course-characters/ana/image.webp': asset19,
    '/course-practice/flags/flag-br.svg': asset20,
    '/course-practice/flags/flag-kr.svg': asset21,
    '/course-practice/flags/flag-us.svg': asset22,
    '/flashcards-transparent/course-images/7ef12ef7b54dc40fa68f0b3d567e1b441f244a7186d1dd15d376791c184c12b9/image.webp':
      asset23,
    '/flashcards-transparent/course-images/65abc2f356592b9593cca24e0ffbd1ea7613e76bde300b9916b45143bd6126e6/image.webp':
      asset24,
    '/flashcards-transparent/course-images/3fac180160396ac067cf36e4adaa70bd5e5c2d674f0ff19a3def4f946d62bab9/image.webp':
      asset25,
  },
}
export default prepared
