import type { PreparedPractice } from '../Practice.types'
import data from './b1-05.json'
import asset0 from '../assets/audio/35cd8918a1ea6d67f1a9feb6be38b621b23c21754852f038b3ed7859c956326a.mp3'
import asset1 from '../assets/audio/20bba570b20cc5650b57d5a5c938ed363a747b209e7aa32e07e5af9796cf030b.mp3'
import asset2 from '../assets/audio/6184c2d01286fbe6929023382a377db6ebde08049cd9897a1b6ce24d9ed1c8fd.mp3'
import asset3 from '../assets/audio/cd3b7393a41d8bff5f7b3e416adfce9351082fdd08d57fe56c475ba30b54ded8.mp3'
import asset4 from '../assets/audio/66fbbfba63b51ce0608be1e9b9d5db5fcf7550276df01ddfee8cb8c350f318dc.mp3'
import asset5 from '../assets/audio/4d69c3b0fb2cfc746429d06f4195cc96846fda6058882495dcc6e3e17aaf0def.mp3'
import asset6 from '../assets/audio/565d5781843d4db8f82c041f47bf0f6d3680131ad8b7a82fc6a49c22ff806c8b.mp3'
import asset7 from '../assets/audio/64f2e798fe86c135be7dde08edc7c0331efc42e578ec908750c2fccd3ea4e9a7.mp3'
import asset8 from '../assets/characters/priya-nair.webp'
import asset9 from '../assets/characters/arjun-mehta.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b1-05.shadowing.01',
      text: 'I spoke to the building manager about the leak',
      src: asset0,
    },
    { id: 'b1-05.shadowing.02', text: 'Good. What did he say?', src: asset1 },
    {
      id: 'b1-05.shadowing.03',
      text: 'He said the plumber would come on Thursday morning',
      src: asset2,
    },
    { id: 'b1-05.shadowing.04', text: 'Did he say what time?', src: asset3 },
    {
      id: 'b1-05.shadowing.05',
      text: 'Yes. He told me the appointment was between nine and eleven',
      src: asset4,
    },
    {
      id: 'b1-05.shadowing.06',
      text: 'I’ll be at work. Did he ask us to leave a spare key?',
      src: asset5,
    },
    {
      id: 'b1-05.shadowing.07',
      text: 'He did. He asked us to leave it at reception',
      src: asset6,
    },
    {
      id: 'b1-05.shadowing.08',
      text: 'Okay. I’ll do that before I leave',
      src: asset7,
    },
  ],
  images: {
    '/flashcards/course-characters/priya-nair/image.webp': asset8,
    '/flashcards/course-characters/arjun-mehta/image.webp': asset9,
  },
}
export default prepared
