import type { PreparedPractice } from '../Practice.types'
import data from './c1-08.json'
import asset0 from '../assets/audio/00b99a6db9e2d7aced1291988f23900ce7146c667f2070f68531412665e56251.mp3'
import asset1 from '../assets/audio/70f5faf8d695093f0a0e3c6dc25202b4987e99a1dd1a15fbf7af1ef1a8125ad1.mp3'
import asset2 from '../assets/audio/593034428a6b59e13bc924ccf878c87333928ff4b9674c3ccbe2ab4464c35405.mp3'
import asset3 from '../assets/audio/1aaa8030f86da2db8c05196797b2cea839fd90d10afc84d0cbc24c75ca7cc647.mp3'
import asset4 from '../assets/audio/090dae05cf60b086017663ae896aa3465e710e21fa58591fa9376049a4786b56.mp3'
import asset5 from '../assets/audio/bb031be5a8f89b05e0f7295cbfeadb86c4d2dd56c1b2887c1fea77c63608ce53.mp3'
import asset6 from '../assets/audio/064dbcc63f8de1395cf5612c2676df0d2157b1a14f4fea4cf39a0e33815095db.mp3'
import asset7 from '../assets/audio/719541cbe7aa00f6c24667140bb91350820b5554184d5d3f34009fadadda5169.mp3'
import asset8 from '../assets/audio/8cb699f7dbd2cff2c3ecc170eadc818a2925266f63c55c99eb40a20a97724031.mp3'
import asset9 from '../assets/audio/5f396a7799023de550ccc3b4b9ee83be20475fd3ef510177ea55212261ffed82.mp3'
import asset10 from '../assets/audio/8a7e3a3e69232ab1bd426ce68e7415bbab487fdf3683a0a9132487b3b0aef91d.mp3'
import asset11 from '../assets/audio/0d29bbbb983f0bebcb0a2aec4c60080b85704929d2132251e3941e8563e29b76.mp3'
import asset12 from '../assets/characters/ruby-bennett.webp'
import asset13 from '../assets/characters/noah-ellis.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'c1-08.shadowing.01',
      text: 'I understand why you’d prefer a twelve-month contract',
      src: asset0,
    },
    {
      id: 'c1-08.shadowing.02',
      text: 'It gives me some certainty, especially with the maintenance costs',
      src: asset1,
    },
    {
      id: 'c1-08.shadowing.03',
      text: 'Much as I like the apartment, I can only commit to six months',
      src: asset2,
    },
    {
      id: 'c1-08.shadowing.04',
      text: 'That’s difficult. I need to know the place won’t be empty halfway through the year',
      src: asset3,
    },
    {
      id: 'c1-08.shadowing.05',
      text: 'Would you consider six months with an option to extend?',
      src: asset4,
    },
    {
      id: 'c1-08.shadowing.06',
      text: 'Possibly, provided you let me know well in advance',
      src: asset5,
    },
    {
      id: 'c1-08.shadowing.07',
      text: 'That seems reasonable. The rent would also need to stay the same during the initial term',
      src: asset6,
    },
    {
      id: 'c1-08.shadowing.08',
      text: 'I can agree to that, but I can’t promise the same price for the extension',
      src: asset7,
    },
    {
      id: 'c1-08.shadowing.09',
      text: 'Fair enough. My main concern is having a clear review date',
      src: asset8,
    },
    {
      id: 'c1-08.shadowing.10',
      text: 'Then let’s put that in writing',
      src: asset9,
    },
    {
      id: 'c1-08.shadowing.11',
      text: 'Good. We’ve both had to compromise, but the arrangement feels workable',
      src: asset10,
    },
    {
      id: 'c1-08.shadowing.12',
      text: 'Agreed. I’ll send you the revised terms this afternoon',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/ruby-bennett/image.webp': asset12,
    '/flashcards/course-characters/noah-ellis/image.webp': asset13,
  },
}
export default prepared
