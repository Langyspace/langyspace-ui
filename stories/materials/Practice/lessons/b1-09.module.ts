import type { PreparedPractice } from '../Practice.types'
import data from './b1-09.json'
import asset0 from '../../Course/assets/audio/B109-D81.1.mp3'
import asset1 from '../../Course/assets/audio/B109-D81.2.mp3'
import asset2 from '../../Course/assets/audio/B109-D81.3.mp3'
import asset3 from '../../Course/assets/audio/B109-D81.4.mp3'
import asset4 from '../../Course/assets/audio/B109-D81.5.mp3'
import asset5 from '../../Course/assets/audio/B109-D81.6.mp3'
import asset6 from '../../Course/assets/audio/B109-D81.7.mp3'
import asset7 from '../../Course/assets/audio/B109-D81.8.mp3'
import asset8 from '../../Course/assets/audio/B109-V81.0.mp3'
import asset9 from '../../Course/assets/audio/B109-FE81.0.mp3'
import asset10 from '../../Course/assets/audio/B109-V81.1.mp3'
import asset11 from '../../Course/assets/audio/B109-FE81.1.mp3'
import asset12 from '../../Course/assets/audio/B109-V81.2.mp3'
import asset13 from '../../Course/assets/audio/B109-FE81.2.mp3'
import asset14 from '../../Course/assets/audio/B109-V81.3.mp3'
import asset15 from '../../Course/assets/audio/B109-FE81.3.mp3'
import asset16 from '../../Course/assets/audio/B109-V81.4.mp3'
import asset17 from '../../Course/assets/audio/B109-FE81.4.mp3'
import asset18 from '../../Course/assets/audio/B109-V81.5.mp3'
import asset19 from '../../Course/assets/audio/B109-FE81.5.mp3'
import asset20 from '../assets/characters/kim.webp'
import asset21 from '../assets/characters/ana.webp'
import asset22 from '../../Course/assets/b1-09-vocabulary81.webp'
import expanded124Asset0 from '../assets/flashcards124/e13761786a51dbf342f9bdaa4ada085f82edac39481a62684d8dddd4eae5d015.mp3'
import expanded124Asset1 from '../assets/flashcards124/c99d51002ce26cb2b37740ad9194d9ebf7eda05c4d426ff2b4e3759e7334b04f.mp3'
import expanded124Asset2 from '../assets/flashcards124/f7d70d6638dc9733250eb960729a9d5cb2d9a7af4719773ce0e30db8bb534799.mp3'
import expanded124Asset3 from '../assets/flashcards124/901fecbe833f161c18b13f1222eb2dc8a32b3a45edc393b5af64bb847324f7a5.mp3'
import expanded124Asset4 from '../assets/flashcards124/99179d03aa00e975585f635bd6716aae0587a8968b37673ea8df883bcfa29b96.mp3'
import expanded124Asset5 from '../assets/flashcards124/7288d91726b1c1b6f0eee1ffd6b38b3435f1aa7c07d678481dcad6e9ee71979b.mp3'
import expanded124Asset6 from '../assets/flashcards124/3250b49079e179ada014f7aa55db287a97c037c1062e692a678e477fb3235ea2.mp3'
import expanded124Asset7 from '../assets/flashcards124/f20639226567e3126420f0deeaea33c1d04a2bd534ec779e4fa67b4043cdb3d9.mp3'
import expanded124Asset8 from '../assets/flashcards124/56fe5ac749b54518af51b797ec9846c4ee8ce6016310cef146037d402e7d6931.mp3'
import expanded124Asset9 from '../assets/flashcards124/495847b7e5124937a24fbfef61998e116bb3df558ca88addb16a6ed2c8d08cce.mp3'
import expanded124Asset10 from '../assets/flashcards124/beb9d97efc7d0118a02f25df75b3068290d04cb85ea38c77fceb460b362399d5.mp3'
import expanded124Asset11 from '../assets/flashcards124/1af6a5e70fa271f25b168a44f33cbfc5bd1a42252b83dca2eb920e148436f62b.mp3'
import expanded124Asset12 from '../assets/flashcards124/704eb13d015a36f0a6fee412478307d579e0c1e0739faa4dacd0fae8b0238dd7.mp3'
import expanded124Asset13 from '../assets/flashcards124/1704725cf5f690a592dec094366d379e91630d22766120712ad84fb6aca0322f.mp3'
import expanded124Asset14 from '../assets/flashcards124/fbb56ec50d35b159ea0fbbb1924b90044faf7eebf6c4df923289fad410ef2f94.mp3'
import expanded124Asset15 from '../assets/flashcards124/b8298e6f2b620a13f87184e7e29752dfb8eceaa5134e8d3572a14b8a3fa2f9b0.mp3'
import expanded124Asset16 from '../assets/flashcards124/7d8bd3227d9b4ebb16d4a6449589ebae8ee0d05972cbe4918a3654b0cdf75e1e.mp3'
import expanded124Asset17 from '../assets/flashcards124/02367b8552a13f7064ed38719fb638d8e7f5270926248919fa485f5d75690e62.mp3'
import expanded124Asset18 from '../assets/flashcards124/9e0d739d72f0204cf9791c376f59c0cff6298f129fe07193d57565dc6672a2f3.mp3'
import expanded124Asset19 from '../assets/flashcards124/a896cde93c393679ac642a1b59453854433bb17d59f4f450fb67eaaa90a65331.mp3'
import expanded124Asset20 from '../assets/flashcards124/70ae9884dad3a682c928e8c594d2b0ae16372a4b2cb3f88005fed597bee2ab8c.mp3'
import expanded124Asset21 from '../assets/flashcards124/ea374f15130503aaf7498f7a0091e9773910d77f828687c2c732973b938ab064.webp'
import expanded124Asset22 from '../assets/flashcards124/92206a9783b1a7a35b008d743b3acba0fc07e9da1515369022dbbd50531c2804.webp'
import expanded124Asset23 from '../assets/flashcards124/690947ad97ac32a3c9b3298cf8cba33878d9b50a59b3b9fba11555ea1097f5ed.webp'
import expanded124Asset24 from '../assets/flashcards124/a3a215499b9efb2edfea728124446586426a6a77ce3de39f5fecaae20418325a.webp'
import expanded124Asset25 from '../assets/flashcards124/3dadf0216e638ce009a226d8038fa7adf7935c3dbd1cb85a62c60e45672e465a.webp'
import expanded124Asset26 from '../assets/flashcards124/013fb22f490579fb17b37b1bc58e6d6c402bce0c816708cca96d4e9cc7124f6d.webp'
import expanded124Asset27 from '../assets/flashcards124/728e3fccfc1e2ae90bb2f539ca304f97956786775dd1badbb923e0456f8b9dd5.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'deck-b2-legal-english-theft.front',
      text: 'theft. The theft was caught on camera.',
      src: expanded124Asset0,
    },
    {
      id: 'deck-b2-legal-english-crime.front',
      text: 'crime. The crime was reported immediately.',
      src: expanded124Asset1,
    },
    {
      id: 'deck-b2-legal-english-witness.front',
      text: 'witness. A witness confirmed the story.',
      src: expanded124Asset2,
    },
    {
      id: 'deck-b2-academy-evidence.front',
      text: "evidence. There isn't enough evidence to support this claim.",
      src: expanded124Asset3,
    },
    {
      id: 'deck-b2-legal-english-document.front',
      text: 'document. The document must be notarized.',
      src: expanded124Asset4,
    },
    {
      id: 'deck-b2-legal-english-property.front',
      text: 'property. The property was transferred legally.',
      src: expanded124Asset5,
    },
    {
      id: 'deck-b2-legal-english-ownership.front',
      text: 'ownership. Ownership passed to the buyer.',
      src: expanded124Asset6,
    },
    {
      id: 'flashcard124-a-wheel.front',
      text: 'a wheel',
      src: expanded124Asset7,
    },
    {
      id: 'flashcard124-a-wheel.back',
      text: 'The front wheel is damaged',
      src: expanded124Asset8,
    },
    {
      id: 'flashcard124-a-handlebar.front',
      text: 'a handlebar',
      src: expanded124Asset9,
    },
    {
      id: 'flashcard124-a-handlebar.back',
      text: 'There is a light on the handlebar',
      src: expanded124Asset10,
    },
    {
      id: 'flashcard124-a-frame.front',
      text: 'a frame',
      src: expanded124Asset11,
    },
    {
      id: 'flashcard124-a-frame.back',
      text: 'There is a yellow sticker on the frame',
      src: expanded124Asset12,
    },
    {
      id: 'flashcard124-a-security-camera.front',
      text: 'a security camera',
      src: expanded124Asset13,
    },
    {
      id: 'flashcard124-a-security-camera.back',
      text: 'There is a security camera near the bike rack',
      src: expanded124Asset14,
    },
    {
      id: 'flashcard124-a-police-station.front',
      text: 'a police station',
      src: expanded124Asset15,
    },
    {
      id: 'flashcard124-a-police-station.back',
      text: 'I reported the missing bicycle at the police station',
      src: expanded124Asset16,
    },
    {
      id: 'flashcard124-a-description.front',
      text: 'a description',
      src: expanded124Asset17,
    },
    {
      id: 'flashcard124-a-description.back',
      text: 'Can you give a clear description of the bicycle?',
      src: expanded124Asset18,
    },
    {
      id: 'flashcard124-an-incident-number.front',
      text: 'an incident number',
      src: expanded124Asset19,
    },
    {
      id: 'flashcard124-an-incident-number.back',
      text: 'Please keep your incident number',
      src: expanded124Asset20,
    },
    {
      id: 'b1-09.shadowing.01',
      text: 'What happened? You look worried.',
      src: asset0,
    },
    {
      id: 'b1-09.shadowing.02',
      text: 'My bike was taken from the rack near the station. I last saw it at six.',
      src: asset1,
    },
    { id: 'b1-09.shadowing.03', text: 'Have you reported it?', src: asset2 },
    {
      id: 'b1-09.shadowing.04',
      text: 'Yes. They asked for a description and the serial number.',
      src: asset3,
    },
    {
      id: 'b1-09.shadowing.05',
      text: 'How can they identify it?',
      src: asset4,
    },
    {
      id: 'b1-09.shadowing.06',
      text: 'It’s blue, with a black basket and a yellow sticker on the frame.',
      src: asset5,
    },
    {
      id: 'b1-09.shadowing.07',
      text: 'Has anything been found yet?',
      src: asset6,
    },
    {
      id: 'b1-09.shadowing.08',
      text: 'Not yet. A similar bike was seen nearby, but nobody has checked the number.',
      src: asset7,
    },
    {
      id: 'course-b1-09-bicycle-lock.front',
      text: 'a bicycle lock',
      src: asset8,
    },
    {
      id: 'course-b1-09-bicycle-lock.back',
      text: 'The bicycle lock was beside the rack.',
      src: asset9,
    },
    {
      id: 'course-b1-09-serial-number.front',
      text: 'a serial number',
      src: asset10,
    },
    {
      id: 'course-b1-09-serial-number.back',
      text: 'The serial number hasn’t been checked.',
      src: asset11,
    },
    { id: 'course-b1-09-helmet.front', text: 'a helmet', src: asset12 },
    {
      id: 'course-b1-09-helmet.back',
      text: 'The helmet is still at home.',
      src: asset13,
    },
    { id: 'course-b1-09-bike-rack.front', text: 'a bike rack', src: asset14 },
    {
      id: 'course-b1-09-bike-rack.back',
      text: 'The bike was taken from the bike rack.',
      src: asset15,
    },
    { id: 'course-b1-09-report.front', text: 'a report', src: asset16 },
    {
      id: 'course-b1-09-report.back',
      text: 'An update has been added to the report.',
      src: asset17,
    },
    {
      id: 'course-b1-09-lost-property.front',
      text: 'lost property',
      src: asset18,
    },
    {
      id: 'course-b1-09-lost-property.back',
      text: 'Ask at lost property before assuming it was stolen.',
      src: asset19,
    },
  ],
  images: {
    '/flashcards-transparent/b2/legal-english/theft/image.webp':
      expanded124Asset21,
    '/flashcards-transparent/b2/legal-english/crime/image.webp':
      expanded124Asset22,
    '/flashcards-transparent/b2/legal-english/witness/image.webp':
      expanded124Asset23,
    '/flashcards-transparent/b2/academy/evidence/image.webp':
      expanded124Asset24,
    '/flashcards-transparent/b2/legal-english/document/image.webp':
      expanded124Asset25,
    '/flashcards-transparent/b2/legal-english/property/image.webp':
      expanded124Asset26,
    '/flashcards-transparent/b2/legal-english/ownership/image.webp':
      expanded124Asset27,
    '/flashcards/course-characters/kim/image.webp': asset20,
    '/flashcards/course-characters/ana/image.webp': asset21,
    '/flashcards-transparent/course-images/117b5924965ff82abeb8eddedfc33818ffd105ad60437af7bcde5a4743ce0f37/image.webp':
      asset22,
  },
}
export default prepared
