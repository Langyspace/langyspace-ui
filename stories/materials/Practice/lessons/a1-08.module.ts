import type { PreparedPractice } from '../Practice.types'
import data from './a1-08.json'
import asset0 from '../assets/audio/09e4f9ccae810f3490a5256e81280b413541ad8bdb98849d6f192cf1ccae3521.mp3'
import asset1 from '../assets/audio/a6126d032d8642b8cfd02012e1557bfdad392b06fa60214375fc18cb22c369a1.mp3'
import asset2 from '../assets/audio/f7af04c4bfa1c7b3f80b28aca4c6f79a56e294d718a521af9049047e9da82cb3.mp3'
import asset3 from '../assets/audio/9fdca094b50a36b1398b618a8ee50fd0a4931c3c8584a4d42ab84f3dfef2bd63.mp3'
import asset4 from '../assets/audio/882b71e066cf4de339bdf2f13dd5ae28f3f2c90a3a439e978228d28d26166e36.mp3'
import asset5 from '../assets/audio/798faebb21b579a5f7848f79a40e6805315b3fdf1a0f8194850545eaabc6a4e6.mp3'
import asset6 from '../../Course/assets/audio/A108-V81.0.mp3'
import asset7 from '../../Course/assets/audio/A108-FE81.0.mp3'
import asset8 from '../../Course/assets/audio/A108-V81.1.mp3'
import asset9 from '../../Course/assets/audio/A108-FE81.1.mp3'
import asset10 from '../../Course/assets/audio/A108-V81.2.mp3'
import asset11 from '../../Course/assets/audio/A108-FE81.2.mp3'
import asset12 from '../../Course/assets/audio/A108-V81.3.mp3'
import asset13 from '../../Course/assets/audio/A108-FE81.3.mp3'
import asset14 from '../../Course/assets/audio/A108-V81.4.mp3'
import asset15 from '../../Course/assets/audio/A108-FE81.4.mp3'
import asset16 from '../../Course/assets/audio/A108-V81.5.mp3'
import asset17 from '../../Course/assets/audio/A108-FE81.5.mp3'
import asset18 from '../assets/characters/evelyn-carter.webp'
import asset19 from '../assets/characters/owen-harris.webp'
import asset20 from '../../Course/assets/a1-08-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a1-08.shadowing.01',
      text: 'Hello. My room key doesn’t work',
      src: asset0,
    },
    {
      id: 'a1-08.shadowing.02',
      text: 'I’m sorry. What’s your room number?',
      src: asset1,
    },
    {
      id: 'a1-08.shadowing.03',
      text: 'Room twelve. Can you help me?',
      src: asset2,
    },
    { id: 'a1-08.shadowing.04', text: 'Yes. Here’s a new key', src: asset3 },
    {
      id: 'a1-08.shadowing.05',
      text: 'Thank you. Can I have a towel, too?',
      src: asset4,
    },
    { id: 'a1-08.shadowing.06', text: 'Of course. Here you are', src: asset5 },
    { id: 'course-a1-08-room.front', text: 'room', src: asset6 },
    {
      id: 'course-a1-08-room.back',
      text: 'My room is on the left.',
      src: asset7,
    },
    { id: 'course-a1-08-key.front', text: 'key', src: asset8 },
    {
      id: 'course-a1-08-key.back',
      text: 'Can I have my key, please?',
      src: asset9,
    },
    { id: 'course-a1-08-shower.front', text: 'shower', src: asset10 },
    {
      id: 'course-a1-08-shower.back',
      text: 'The shower doesn’t work.',
      src: asset11,
    },
    { id: 'course-a1-08-light.front', text: 'light', src: asset12 },
    {
      id: 'course-a1-08-light.back',
      text: 'Can you check the light?',
      src: asset13,
    },
    { id: 'course-a1-08-towel.front', text: 'towel', src: asset14 },
    {
      id: 'course-a1-08-towel.back',
      text: 'I need a clean towel.',
      src: asset15,
    },
    { id: 'course-a1-08-reception.front', text: 'reception', src: asset16 },
    {
      id: 'course-a1-08-reception.back',
      text: 'Please call reception.',
      src: asset17,
    },
  ],
  images: {
    '/flashcards/course-characters/evelyn-carter/image.webp': asset18,
    '/flashcards/course-characters/owen-harris/image.webp': asset19,
    '/flashcards-transparent/course-images/a652b1a0158ff4559526802d176054cc879d560dc7a95eb2b079b0b2795f1ba7/image.webp':
      asset20,
  },
}
export default prepared
