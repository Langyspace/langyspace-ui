import type { PreparedPractice } from '../Practice.types'
import data from './a1-12.json'
import asset0 from '../assets/audio/1352c9a8f91a3cbc07f350677255cac974883f58d20ac775d9bcb41c0dd09a9a.mp3'
import asset1 from '../assets/audio/a8d8a82269ba4019c85fd7272134bfa8fed001862c90e8f8eb70a626433379d9.mp3'
import asset2 from '../assets/audio/31ee0c79178c6245487c7c23e3c8e22e0cc384a193b25d9a1618e5945ddd8846.mp3'
import asset3 from '../assets/audio/a7f6c2c307727afb6a300ce8dcabeb4d09a8114fcd5120096a7b423214f18078.mp3'
import asset4 from '../assets/audio/fdb34a35ef2bc1885e90858fe976c62caf0ecba8fcbdc12c5cf34f27c94afae8.mp3'
import asset5 from '../assets/audio/4fff1e09bcc8e9a2bd79b6fef9c0f57de80607a9b48f9766519dad6ea4a360d4.mp3'
import asset6 from '../assets/characters/niamh-murphy.webp'
import asset7 from '../assets/characters/cian-walsh.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a1-12.shadowing.01',
      text: 'It’s sunny today. Let’s go to the park',
      src: asset0,
    },
    {
      id: 'a1-12.shadowing.02',
      text: 'Good idea. Can we take the train?',
      src: asset1,
    },
    {
      id: 'a1-12.shadowing.03',
      text: 'Yes. Two tickets are six euros',
      src: asset2,
    },
    {
      id: 'a1-12.shadowing.04',
      text: 'Great. Do you have water?',
      src: asset3,
    },
    {
      id: 'a1-12.shadowing.05',
      text: 'Yes. I have water and two sandwiches',
      src: asset4,
    },
    { id: 'a1-12.shadowing.06', text: 'Perfect. Let’s go', src: asset5 },
  ],
  images: {
    '/flashcards/course-characters/niamh-murphy/image.webp': asset6,
    '/flashcards/course-characters/cian-walsh/image.webp': asset7,
  },
}
export default prepared
