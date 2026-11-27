import type { PreparedPractice } from '../Practice.types'
import data from './a1-01.json'
import asset0 from '../../A101/assets/audio/R.T1.mp3'
import asset1 from '../../A101/assets/audio/R.T2.mp3'
import asset2 from '../../A101/assets/audio/R.T3.mp3'
import asset3 from '../../A101/assets/audio/R.T4.mp3'
import asset4 from '../../A101/assets/audio/R80.5.mp3'
import asset5 from '../../A101/assets/audio/R80.6.mp3'
import kim from '../assets/characters/kim.webp'
import ana from '../assets/characters/ana.webp'

// Bundled copies of the Student's existing Storage media; no expiring signed URLs.
const countryMedia = import.meta.glob<string>('../assets/countries97/*', {
  eager: true,
  import: 'default',
  query: '?url',
})
const media = (id: string, extension: 'mp3' | 'webp') => {
  const src = countryMedia[`../assets/countries97/${id}.${extension}`]
  if (!src) throw new Error(`Missing Countries media: ${id}.${extension}`)
  return src
}
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
    ...data.first.cards.map((card) => ({
      id: card.audioId,
      text: card.word,
      src: media(card.id, 'mp3'),
    })),
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': kim,
    '/flashcards/course-characters/ana/image.webp': ana,
    ...Object.fromEntries(
      data.first.cards.map((card) => [card.imageSrc, media(card.id, 'webp')]),
    ),
  },
}
export default prepared
