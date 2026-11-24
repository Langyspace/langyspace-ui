import type { PreparedPractice } from '../Practice.types'
import data from './b2-12.json'
import asset0 from '../assets/audio/37d681e38127601727ac9cd8e2a8baf08401c931e4ffb44c475054502163511e.mp3'
import asset1 from '../assets/audio/3d0d47aa293d8e0c26ac4f364b65fd4365a5bdc63e92aaf1dbafa6900dd7c0d0.mp3'
import asset2 from '../assets/audio/e17092df11bc4d35baacb30dd7267050e5e0120e1d24919064a574199f2ac278.mp3'
import asset3 from '../assets/audio/6b976c914be7f0d4402186fcfd4bb60801bb080023661df0d3cf0cdec35185a4.mp3'
import asset4 from '../assets/audio/ddc7c44c31efe53f61ceb909f083bcbcef94ef014ee9675dd9880d915b2e9cc2.mp3'
import asset5 from '../assets/audio/cda35cc9835ed64f5718f4c27217c4491c64fd64f10366660e09c16da2dd0a03.mp3'
import asset6 from '../assets/audio/c4a3fccbb55301d12569f41b6154d17d067e22ea0c615a2e8e1a990bc9625ad8.mp3'
import asset7 from '../assets/audio/e56bcf29bf5ffe7d486a2802f8d1daef59ba2994eda78f36d9a66fdb9b89405a.mp3'
import asset8 from '../assets/audio/f145f7ea679208a393b004fcc4c625a5ccdcc2f720bc08b8593b48681ef81faf.mp3'
import asset9 from '../assets/audio/4e171c83dcad8bb523a77edbcf5d7be475400aba062732020dab7fcab3f2785c.mp3'
import asset10 from '../assets/audio/d0601cf9aeb5d62c2d6bbe26bb70e4ad0c1f3376833b973a42a12c128a2cde68.mp3'
import asset11 from '../assets/audio/03efb85165d740fbc0c0621fa65689705cdc3c9497b0c0b0b276570ed8d6812d.mp3'
import asset12 from '../assets/characters/ruby-bennett.webp'
import asset13 from '../assets/characters/noah-ellis.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b2-12.shadowing.01',
      text: 'Would you support a complete phone ban at school?',
      src: asset0,
    },
    {
      id: 'b2-12.shadowing.02',
      text: 'I’d support restrictions, although I’m not sure a total ban would be fair',
      src: asset1,
    },
    {
      id: 'b2-12.shadowing.03',
      text: 'What kind of exceptions would you make?',
      src: asset2,
    },
    {
      id: 'b2-12.shadowing.04',
      text: 'Some students use their phones for accessibility or medical reasons',
      src: asset3,
    },
    {
      id: 'b2-12.shadowing.05',
      text: 'That makes sense. The main problem is distraction during lessons',
      src: asset4,
    },
    {
      id: 'b2-12.shadowing.06',
      text: 'Exactly. Whereas adults can choose when to check messages, younger students may need clearer boundaries',
      src: asset5,
    },
    {
      id: 'b2-12.shadowing.07',
      text: 'Even adults find that difficult sometimes',
      src: asset6,
    },
    {
      id: 'b2-12.shadowing.08',
      text: 'True. That’s why responsibility shouldn’t fall entirely on the students',
      src: asset7,
    },
    {
      id: 'b2-12.shadowing.09',
      text: 'So schools and families would need to agree on the rules',
      src: asset8,
    },
    {
      id: 'b2-12.shadowing.10',
      text: 'Yes. Despite the practical challenges, a shared approach could work better',
      src: asset9,
    },
    {
      id: 'b2-12.shadowing.11',
      text: 'I’d be more comfortable with that than with a rule that ignores individual needs',
      src: asset10,
    },
    {
      id: 'b2-12.shadowing.12',
      text: 'Me too. The aim should be better learning, not simply fewer devices',
      src: asset11,
    },
  ],
  images: {
    '/flashcards/course-characters/ruby-bennett/image.webp': asset12,
    '/flashcards/course-characters/noah-ellis/image.webp': asset13,
  },
}
export default prepared
