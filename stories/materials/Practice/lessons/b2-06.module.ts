import type { PreparedPractice } from '../Practice.types'
import data from './b2-06.json'
import asset0 from '../assets/audio/3d65c0d127824abef0c42f3d982997f7b86b06e1b615e82efa443feb861f104a.mp3'
import asset1 from '../assets/audio/22e3ce5ee208d4a62852669a33e7413bc8df38e1ba213d34b636d2c28de044fc.mp3'
import asset2 from '../assets/audio/cce00ac35647bcca6145c64e38b07c2328b2997f27000082a4441c2f1ae8a337.mp3'
import asset3 from '../assets/audio/31f0ba7d081c3495d7fbee593374e37d37d87b4a281ab2798439c6240332811a.mp3'
import asset4 from '../assets/audio/d950ffc617a86227ab1d05c2ddcd1f11f2eff7bf0a8b945f222812f203ee5504.mp3'
import asset5 from '../assets/audio/20af87e425f864537d9882c3ddd13822e65aa7613cdb3efbc7f2348d1cc35df1.mp3'
import asset6 from '../assets/audio/99df77e8a49190fb6465da377a3f07070971b0d61e6b4c09f83c5d5225ea9931.mp3'
import asset7 from '../assets/audio/ac32a2da0911f67630f533ca53fa06f856939e09128e6c1c37e2a72a43de9803.mp3'
import asset8 from '../assets/audio/785f5dc0a3dd2690950cebe4be6e41d3b10c3472c5cefeb90b8a4e148e39743f.mp3'
import asset9 from '../assets/audio/4c3032ed2b3c4b67c6bc29829d3fc13f0d0ac3fb918018f4aab0da4a7040b6c4.mp3'
import asset10 from '../assets/audio/82ba344014703ae34dc4bc5b36edfadead32fa1b5da6d8d352a80fc30494e24e.mp3'
import asset11 from '../assets/audio/dd038a5bd9e01ed208730c2704995e2b119b1c6c9a3313375fd2b2aa99e458ec.mp3'
import asset12 from '../assets/characters/niamh-murphy.webp'
import asset13 from '../assets/characters/cian-walsh.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b2-06.shadowing.01',
      text: 'My phone screen cracked yesterday. Do you know a reliable repair shop?',
      src: asset0,
    },
    {
      id: 'b2-06.shadowing.02',
      text: 'Yes. I had mine repaired at a place near the station',
      src: asset1,
    },
    {
      id: 'b2-06.shadowing.03',
      text: 'Did you have to leave it there?',
      src: asset2,
    },
    {
      id: 'b2-06.shadowing.04',
      text: 'Just for the afternoon. They sent me a message when it was ready',
      src: asset3,
    },
    {
      id: 'b2-06.shadowing.05',
      text: 'That sounds convenient. I need to get my jacket altered as well',
      src: asset4,
    },
    {
      id: 'b2-06.shadowing.06',
      text: 'There’s a tailor next door. What do you need done?',
      src: asset5,
    },
    {
      id: 'b2-06.shadowing.07',
      text: 'The sleeves are too long, so I want to have them shortened',
      src: asset6,
    },
    {
      id: 'b2-06.shadowing.08',
      text: 'You could get a quote before you leave it',
      src: asset7,
    },
    {
      id: 'b2-06.shadowing.09',
      text: 'Good point. I don’t want to pay more than the jacket cost',
      src: asset8,
    },
    {
      id: 'b2-06.shadowing.10',
      text: 'Ask about the collection date too. They can get busy',
      src: asset9,
    },
    {
      id: 'b2-06.shadowing.11',
      text: 'I will. I need it back before Friday',
      src: asset10,
    },
    {
      id: 'b2-06.shadowing.12',
      text: 'Then I’d call first and check that they can have it ready in time',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/niamh-murphy/image.webp': asset12,
    '/flashcards/course-characters/cian-walsh/image.webp': asset13,
  },
}
export default prepared
