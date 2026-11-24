import type { PreparedPractice } from '../Practice.types'
import data from './b1-08.json'
import asset0 from '../assets/audio/77ee37088a95c8dd95293f1f2d4b547981c2464f071c65f14ba43f613bcbbc87.mp3'
import asset1 from '../assets/audio/cd497ee10b475b711cdef4ba9e75879f1cf2188236283c39994cdb64182a1ef6.mp3'
import asset2 from '../assets/audio/c3753d4ba16f037c1e253d63ab3f34badead43b107974851671b5a0596331a3c.mp3'
import asset3 from '../assets/audio/e5b781ab42b0be5f5165359674d810102aa447a70ca059e043516481a710f96b.mp3'
import asset4 from '../assets/audio/d98f34e08ccd964529f1893b89e8a7455e3fab6b9adeede633031b4a0625c699.mp3'
import asset5 from '../assets/audio/2e9730c03c970813e66f050362051d8c1168623029f9e9aa634f656ff25a4580.mp3'
import asset6 from '../assets/audio/45c74d88ca3c01572b2dbd0fe269eccc48fdfb21b7bdcfefad85c13af51d38c2.mp3'
import asset7 from '../assets/audio/ce24f5ae8970170272d2590bf9a3b8b2ef8e2b8d1d50dfd9d2b4996e0905f4b6.mp3'
import asset8 from '../../Course/assets/audio/B108-V81.0.mp3'
import asset9 from '../../Course/assets/audio/B108-FE81.0.mp3'
import asset10 from '../../Course/assets/audio/B108-V81.1.mp3'
import asset11 from '../../Course/assets/audio/B108-FE81.1.mp3'
import asset12 from '../../Course/assets/audio/B108-V81.2.mp3'
import asset13 from '../../Course/assets/audio/B108-FE81.2.mp3'
import asset14 from '../../Course/assets/audio/B108-V81.3.mp3'
import asset15 from '../../Course/assets/audio/B108-FE81.3.mp3'
import asset16 from '../../Course/assets/audio/B108-V81.4.mp3'
import asset17 from '../../Course/assets/audio/B108-FE81.4.mp3'
import asset18 from '../../Course/assets/audio/B108-V81.5.mp3'
import asset19 from '../../Course/assets/audio/B108-FE81.5.mp3'
import asset20 from '../assets/characters/ruby-bennett.webp'
import asset21 from '../assets/characters/noah-ellis.webp'
import asset22 from '../../Course/assets/b1-08-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b1-08.shadowing.01',
      text: 'How are you finding your first winter here?',
      src: asset0,
    },
    {
      id: 'b1-08.shadowing.02',
      text: 'I’m still getting used to the cold',
      src: asset1,
    },
    {
      id: 'b1-08.shadowing.03',
      text: 'I used to complain about hot summers. Now I miss them',
      src: asset2,
    },
    {
      id: 'b1-08.shadowing.04',
      text: 'Same here. I’m not used to wearing so many layers',
      src: asset3,
    },
    {
      id: 'b1-08.shadowing.05',
      text: 'Have you changed your morning routine?',
      src: asset4,
    },
    {
      id: 'b1-08.shadowing.06',
      text: 'Yes. I leave earlier because I’m getting used to the commute',
      src: asset5,
    },
    {
      id: 'b1-08.shadowing.07',
      text: 'It took me a while, but I’m used to it now',
      src: asset6,
    },
    {
      id: 'b1-08.shadowing.08',
      text: 'That’s good to hear. I’m sure it’ll get easier',
      src: asset7,
    },
    { id: 'course-b1-08-settle-in.front', text: 'settle in', src: asset8 },
    {
      id: 'course-b1-08-settle-in.back',
      text: 'It takes time to settle in.',
      src: asset9,
    },
    { id: 'course-b1-08-commute.front', text: 'commute', src: asset10 },
    {
      id: 'course-b1-08-commute.back',
      text: 'My commute is easier now.',
      src: asset11,
    },
    {
      id: 'course-b1-08-dress-in-layers.front',
      text: 'dress in layers',
      src: asset12,
    },
    {
      id: 'course-b1-08-dress-in-layers.back',
      text: 'I’m getting used to dressing in layers.',
      src: asset13,
    },
    {
      id: 'course-b1-08-feel-homesick.front',
      text: 'feel homesick',
      src: asset14,
    },
    {
      id: 'course-b1-08-feel-homesick.back',
      text: 'It’s normal to feel homesick sometimes.',
      src: asset15,
    },
    {
      id: 'course-b1-08-make-friends.front',
      text: 'make friends',
      src: asset16,
    },
    {
      id: 'course-b1-08-make-friends.back',
      text: 'The weekly group helped me make friends.',
      src: asset17,
    },
    {
      id: 'course-b1-08-adjust-your-routine.front',
      text: 'adjust your routine',
      src: asset18,
    },
    {
      id: 'course-b1-08-adjust-your-routine.back',
      text: 'You may need to adjust your routine.',
      src: asset19,
    },
  ],
  images: {
    '/flashcards/course-characters/ruby-bennett/image.webp': asset20,
    '/flashcards/course-characters/noah-ellis/image.webp': asset21,
    '/flashcards-transparent/course-images/9b9aceb3d484aa083558642a9dc7b6fb29a52572ff574c9d37551ea735ef4fa6/image.webp':
      asset22,
  },
}
export default prepared
