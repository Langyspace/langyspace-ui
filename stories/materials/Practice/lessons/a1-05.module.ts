import type { PreparedPractice } from '../Practice.types'
import data from './a1-05.json'
import asset0 from '../../A105/assets/audio/D.1.mp3'
import asset1 from '../../A105/assets/audio/D.2.mp3'
import asset2 from '../../A105/assets/audio/D.3.mp3'
import asset3 from '../../A105/assets/audio/D.4.mp3'
import asset4 from '../../A105/assets/audio/D.5.mp3'
import asset5 from '../../A105/assets/audio/D.6.mp3'
import asset6 from '../../A105/assets/audio/vocab.banana.mp3'
import asset7 from '../../A105/assets/audio/FE81.0.mp3'
import asset8 from '../../A105/assets/audio/vocab.apple.mp3'
import asset9 from '../../A105/assets/audio/G.1.mp3'
import asset10 from '../../A105/assets/audio/vocab.orange.mp3'
import asset11 from '../../A105/assets/audio/FE81.2.mp3'
import asset12 from '../../A105/assets/audio/vocab.mango.mp3'
import asset13 from '../../A105/assets/audio/FE81.3.mp3'
import asset14 from '../../A105/assets/audio/vocab.pineapple.mp3'
import asset15 from '../../A105/assets/audio/FE81.4.mp3'
import asset16 from '../../A105/assets/audio/vocab.watermelon.mp3'
import asset17 from '../../A105/assets/audio/FE81.5.mp3'
import asset18 from '../../A105/assets/audio/vocab.carrot.mp3'
import asset19 from '../assets/audio/60f3c824dbeb508a84ce9d5f492261cb14cac3c30f08010b656cf93aa935e482.mp3'
import asset20 from '../../A105/assets/audio/vocab.onion.mp3'
import asset21 from '../assets/audio/b0dc50e9fb6dba645b61f18753acd1ac22bf5b0ef8595a79b1035ff297880f7f.mp3'
import asset22 from '../../A105/assets/audio/vocab.tomato.mp3'
import asset23 from '../assets/audio/94775074901cfc4ef45dd7a58e0202be22b75c774f7749a18afb7c84870ed97e.mp3'
import asset24 from '../assets/characters/kim.webp'
import asset25 from '../assets/characters/ana.webp'
import asset26 from '../../A105/assets/scene-banana.webp'
import asset27 from '../../A105/assets/scene-apple.webp'
import asset28 from '../../A105/assets/scene-orange.webp'
import asset29 from '../../A105/assets/scene-mango.webp'
import asset30 from '../../A105/assets/scene-pineapple.webp'
import asset31 from '../../A105/assets/scene-watermelon.webp'
import asset32 from '../../A105/assets/scene-carrot.webp'
import asset33 from '../../A105/assets/scene-onion.webp'
import asset34 from '../../A105/assets/scene-tomato.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'a1-05.shadowing.01',
      text: 'This market is great! Do you like mangoes?',
      src: asset0,
    },
    {
      id: 'a1-05.shadowing.02',
      text: 'Yes, I do. I love mangoes. What about you?',
      src: asset1,
    },
    {
      id: 'a1-05.shadowing.03',
      text: 'I like mangoes, but I don’t like watermelons.',
      src: asset2,
    },
    {
      id: 'a1-05.shadowing.04',
      text: 'My mother loves watermelons! Do you like carrots?',
      src: asset3,
    },
    {
      id: 'a1-05.shadowing.05',
      text: 'Yes, I do. How much are they?',
      src: asset4,
    },
    { id: 'a1-05.shadowing.06', text: 'They’re two dollars.', src: asset5 },
    { id: 'course-a1-05-banana.front', text: 'a banana', src: asset6 },
    { id: 'course-a1-05-banana.back', text: 'I like bananas.', src: asset7 },
    { id: 'course-a1-05-apple.front', text: 'an apple', src: asset8 },
    { id: 'course-a1-05-apple.back', text: 'Do you like apples?', src: asset9 },
    { id: 'course-a1-05-orange.front', text: 'an orange', src: asset10 },
    {
      id: 'course-a1-05-orange.back',
      text: 'I don’t like oranges.',
      src: asset11,
    },
    { id: 'course-a1-05-mango.front', text: 'a mango', src: asset12 },
    {
      id: 'course-a1-05-mango.back',
      text: 'My sister likes mangoes.',
      src: asset13,
    },
    { id: 'course-a1-05-pineapple.front', text: 'a pineapple', src: asset14 },
    {
      id: 'course-a1-05-pineapple.back',
      text: 'A pineapple is six dollars.',
      src: asset15,
    },
    { id: 'course-a1-05-watermelon.front', text: 'a watermelon', src: asset16 },
    {
      id: 'course-a1-05-watermelon.back',
      text: 'I’d like a watermelon, please.',
      src: asset17,
    },
    { id: 'course-a1-05-carrot.front', text: 'a carrot', src: asset18 },
    {
      id: 'course-a1-05-carrot.back',
      text: 'My mother likes carrots',
      src: asset19,
    },
    { id: 'course-a1-05-onion.front', text: 'an onion', src: asset20 },
    {
      id: 'course-a1-05-onion.back',
      text: 'Do you like onions?',
      src: asset21,
    },
    { id: 'course-a1-05-tomato.front', text: 'a tomato', src: asset22 },
    { id: 'course-a1-05-tomato.back', text: 'I like tomatoes', src: asset23 },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset24,
    '/flashcards/course-characters/ana/image.webp': asset25,
    '/flashcards-transparent/course-images/bdf6717331ee02da3f57872ff9338da4d9bd18fdd90fc004426881551c54d19f/image.webp':
      asset26,
    '/flashcards-transparent/course-images/a4bf61c74a81a676c1d5c9a45e306422e05ab64015493e0a624a8f70332f02bb/image.webp':
      asset27,
    '/flashcards-transparent/course-images/e2c73b4ca600a4a0958a631991f00ecb685928be49006ef5a3677fb38d69bcb7/image.webp':
      asset28,
    '/flashcards-transparent/course-images/d2ebc8002fc7a0ae48b0485da6a8377337444f23d23fa53f519e9ced7d405338/image.webp':
      asset29,
    '/flashcards-transparent/course-images/cd098339d0c038011adb8e4e92a1ea2afe465effc5302dda4b8a164bd98adf37/image.webp':
      asset30,
    '/flashcards-transparent/course-images/939c6214f54a47ef043ef90e2fea733a42be2da6a2547856cf819b52cc000e3f/image.webp':
      asset31,
    '/flashcards-transparent/course-images/a069bd926ba0b5fafcf6318e62d404c1d35e4ca89f0574917e4bcac23b39378b/image.webp':
      asset32,
    '/flashcards-transparent/course-images/f2aeda44faab4de551f6a4453d45962cef25fcb4f39321b462b5391633e4883b/image.webp':
      asset33,
    '/flashcards-transparent/course-images/7e87b8fda62caf0d1946b978ece8f8a356c1cd47eec9827af35d2069a65c0188/image.webp':
      asset34,
  },
}
export default prepared
