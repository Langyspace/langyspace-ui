import type { PreparedPractice } from '../Practice.types'
import data from './c1-12.json'
import asset0 from '../assets/audio/ef0a89ef60c361cb3349b468e8ad38b04224ff15099ca33cc4b17a77e4b139cf.mp3'
import asset1 from '../assets/audio/e37f611e490d95ed1f075a9d01c92006324e1fa36901b3431c77009805e678bd.mp3'
import asset2 from '../assets/audio/a4d0d85170e31478ad8c79be3d717f2c4fab406731c4532183b81d77bf95b2b5.mp3'
import asset3 from '../assets/audio/0c85572fba6da13a0230c71920777719805e26a11996b21e27ff9497c6f88371.mp3'
import asset4 from '../assets/audio/c4640413747d1d831e497e39040520ce379eaaad394d20508d3e5154d1b36c5d.mp3'
import asset5 from '../assets/audio/125e768609200bf11bffe53250edb50a49fbe64441c2c18e92df27a35a0607a8.mp3'
import asset6 from '../assets/audio/58771596c8e5b53cbf3c1754c521c38509891140078ba3b7007eae025f1563b3.mp3'
import asset7 from '../assets/audio/9062021dd85c7b787c47df67d81c64c0675b9f9179eb50faa84fcb860a811d51.mp3'
import asset8 from '../assets/audio/362997a3020fac84a2c9aa6ace818540740a208fa7cad90003eed6fe1320f8db.mp3'
import asset9 from '../assets/audio/ff01a504e831679b79cf9f64b76e58696b1f400125f8946ea3e4e8f24b686169.mp3'
import asset10 from '../assets/audio/399025f7542a932c1b14af3aedfb43faa9d4d87b107dcc7193164598de4d1951.mp3'
import asset11 from '../assets/audio/e3bf0bc0afc9b8c1431cd1b90d1f2ebafadc0425b56fb59d83f12991588bc6b4.mp3'
import asset12 from '../assets/characters/zanele-dlamini.webp'
import asset13 from '../assets/characters/theo-jacobs.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'c1-12.shadowing.01',
      text: 'A cashless system would be convenient, but I’m not convinced convenience should settle the debate',
      src: asset0,
    },
    { id: 'c1-12.shadowing.02', text: 'What concerns you most?', src: asset1 },
    {
      id: 'c1-12.shadowing.03',
      text: 'Access, mainly. A system can be efficient and still exclude people',
      src: asset2,
    },
    {
      id: 'c1-12.shadowing.04',
      text: 'You mean people without reliable internet or a bank account?',
      src: asset3,
    },
    {
      id: 'c1-12.shadowing.05',
      text: 'Exactly. And privacy matters even for people who do have access',
      src: asset4,
    },
    {
      id: 'c1-12.shadowing.06',
      text: 'To be fair, cash has costs too. Handling and protecting it isn’t free',
      src: asset5,
    },
    {
      id: 'c1-12.shadowing.07',
      text: 'That’s true. I’m not arguing that cash is a perfect solution',
      src: asset6,
    },
    {
      id: 'c1-12.shadowing.08',
      text: 'Then perhaps the question is how much choice people should retain',
      src: asset7,
    },
    {
      id: 'c1-12.shadowing.09',
      text: 'That’s closer to what I mean. A fallback option could reduce the risk of exclusion',
      src: asset8,
    },
    {
      id: 'c1-12.shadowing.10',
      text: 'Although it might make the system more expensive to maintain',
      src: asset9,
    },
    {
      id: 'c1-12.shadowing.11',
      text: 'Possibly. We’d need evidence about those costs before deciding they outweigh the benefits',
      src: asset10,
    },
    {
      id: 'c1-12.shadowing.12',
      text: 'So we agree on the aim, even if we haven’t agreed on the balance',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/zanele-dlamini/image.webp': asset12,
    '/flashcards/course-characters/theo-jacobs/image.webp': asset13,
  },
}
export default prepared
