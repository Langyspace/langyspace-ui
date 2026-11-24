import type { PreparedPractice } from '../Practice.types'
import data from './b2-01.json'
import asset0 from '../../Course/assets/audio/legacy-B201-D.1.mp3'
import asset1 from '../../Course/assets/audio/legacy-B201-D.2.mp3'
import asset2 from '../../Course/assets/audio/legacy-B201-D.3.mp3'
import asset3 from '../../Course/assets/audio/legacy-B201-D.4.mp3'
import asset4 from '../../Course/assets/audio/legacy-B201-D.5.mp3'
import asset5 from '../../Course/assets/audio/legacy-B201-D.6.mp3'
import asset6 from '../../Course/assets/audio/legacy-B201-D.7.mp3'
import asset7 from '../../Course/assets/audio/legacy-B201-D.8.mp3'
import asset8 from '../../Course/assets/audio/legacy-B201-D.9.mp3'
import asset9 from '../../Course/assets/audio/legacy-B201-D.10.mp3'
import asset10 from '../../Course/assets/audio/legacy-B201-D.11.mp3'
import asset11 from '../../Course/assets/audio/legacy-B201-D.12.mp3'
import asset12 from '../../B201/assets/expressions/E.0.mp3'
import asset13 from '../../Course/assets/audio/B201-FE81.0.mp3'
import asset14 from '../../B201/assets/expressions/E.1.mp3'
import asset15 from '../../Course/assets/audio/B201-FE81.1.mp3'
import asset16 from '../../B201/assets/expressions/E.2.mp3'
import asset17 from '../../Course/assets/audio/B201-FE81.2.mp3'
import asset18 from '../../B201/assets/expressions/E.3.mp3'
import asset19 from '../../Course/assets/audio/B201-FE81.3.mp3'
import asset20 from '../../B201/assets/expressions/E.4.mp3'
import asset21 from '../../Course/assets/audio/B201-FE81.4.mp3'
import asset22 from '../../B201/assets/expressions/E.5.mp3'
import asset23 from '../../Course/assets/audio/B201-FE81.5.mp3'
import asset24 from '../../B201/assets/expressions/E.6.mp3'
import asset25 from '../../Course/assets/audio/B201-FE81.6.mp3'
import asset26 from '../assets/characters/kim.webp'
import asset27 from '../assets/characters/ana.webp'
import asset28 from '../../Course/assets/b2-01-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    { id: 'b2-01.shadowing.01', text: 'So, how was New York?', src: asset0 },
    {
      id: 'b2-01.shadowing.02',
      text: 'Pretty good, but on the second day, my phone died at four in the afternoon.',
      src: asset1,
    },
    { id: 'b2-01.shadowing.03', text: 'Oh no! Why?', src: asset2 },
    {
      id: 'b2-01.shadowing.04',
      text: 'I’d been using it as a map all day, and I didn’t notice how low the battery was. And I’d left my charger at the hotel.',
      src: asset3,
    },
    {
      id: 'b2-01.shadowing.05',
      text: 'Why didn’t you go back to the hotel?',
      src: asset4,
    },
    {
      id: 'b2-01.shadowing.06',
      text: 'I tried, but I got lost. And the team dinner was at seven. The address was in a message from Raj!',
      src: asset5,
    },
    { id: 'b2-01.shadowing.07', text: 'So what did you do?', src: asset6 },
    {
      id: 'b2-01.shadowing.08',
      text: 'I asked a doorman for help, and he told me about a café. But there were no free outlets.',
      src: asset7,
    },
    { id: 'b2-01.shadowing.09', text: 'Oh no. And then?', src: asset8 },
    {
      id: 'b2-01.shadowing.10',
      text: 'I’d been waiting there alone for twenty minutes when a woman lent me her power bank. Luckily, I had my cable.',
      src: asset9,
    },
    {
      id: 'b2-01.shadowing.11',
      text: 'So did you make it to the dinner?',
      src: asset10,
    },
    {
      id: 'b2-01.shadowing.12',
      text: 'Eventually, yes. I caught a taxi and got there at eight. By then, they’d been waiting for an hour!',
      src: asset11,
    },
    {
      id: 'course-b2-01-run-out-of-battery.front',
      text: 'run out of battery',
      src: asset12,
    },
    {
      id: 'course-b2-01-run-out-of-battery.back',
      text: 'My phone ran out of battery after I’d used it as a map.',
      src: asset13,
    },
    { id: 'course-b2-01-get-lost.front', text: 'get lost', src: asset14 },
    {
      id: 'course-b2-01-get-lost.back',
      text: 'I got lost on the way to the hotel.',
      src: asset15,
    },
    { id: 'course-b2-01-borrow.front', text: 'borrow', src: asset16 },
    {
      id: 'course-b2-01-borrow.back',
      text: 'Could I borrow your power bank?',
      src: asset17,
    },
    { id: 'course-b2-01-lend.front', text: 'lend', src: asset18 },
    {
      id: 'course-b2-01-lend.back',
      text: 'A woman lent me her power bank.',
      src: asset19,
    },
    { id: 'course-b2-01-address.front', text: 'an address', src: asset20 },
    {
      id: 'course-b2-01-address.back',
      text: 'The address was in Raj’s message.',
      src: asset21,
    },
    { id: 'course-b2-01-by-then.front', text: 'by then', src: asset22 },
    {
      id: 'course-b2-01-by-then.back',
      text: 'By then, they’d been waiting for an hour.',
      src: asset23,
    },
    { id: 'course-b2-01-eventually.front', text: 'eventually', src: asset24 },
    {
      id: 'course-b2-01-eventually.back',
      text: 'Eventually, I arrived at the restaurant.',
      src: asset25,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset26,
    '/flashcards/course-characters/ana/image.webp': asset27,
    '/flashcards-transparent/course-images/216271f46ef70098d16579db117992d867ea32a6df5ce53bec840672d43351b7/image.webp':
      asset28,
  },
}
export default prepared
