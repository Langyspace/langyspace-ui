import type { PreparedPractice } from '../Practice.types'
import data from './c1-01.json'
import asset0 from '../../C101/assets/c101-D6-1.mp3'
import asset1 from '../../C101/assets/c101-D6-2.mp3'
import asset2 from '../../C101/assets/c101-D6-3.mp3'
import asset3 from '../../C101/assets/c101-D6-4.mp3'
import asset4 from '../../C101/assets/c101-D6-5.mp3'
import asset5 from '../../C101/assets/c101-D6-6.mp3'
import asset6 from '../../C101/assets/c101-D6-7.mp3'
import asset7 from '../../C101/assets/c101-D6-8.mp3'
import asset8 from '../../C101/assets/c101-D6-9.mp3'
import asset9 from '../../C101/assets/c101-D6-10.mp3'
import asset10 from '../../C101/assets/c101-D6-11.mp3'
import asset11 from '../../C101/assets/c101-D6-12.mp3'
import asset12 from '../../C101/assets/c101-D6-13.mp3'
import asset13 from '../../C101/assets/c101-D6-14.mp3'
import asset14 from '../../C101/assets/vocabulary/E.0.mp3'
import asset15 from '../../C101/assets/audio/FE79.0.mp3'
import asset16 from '../../C101/assets/vocabulary/E.4.mp3'
import asset17 from '../../C101/assets/audio/FE79.1.mp3'
import asset18 from '../../C101/assets/vocabulary/E.6.mp3'
import asset19 from '../../C101/assets/audio/FE79.2.mp3'
import asset20 from '../../C101/assets/vocabulary/E.7.mp3'
import asset21 from '../../C101/assets/audio/FE79.3.mp3'
import asset22 from '../../C101/assets/vocabulary/E.3.mp3'
import asset23 from '../../C101/assets/audio/FE79.4.mp3'
import asset24 from '../../C101/assets/vocabulary/E.2.mp3'
import asset25 from '../../C101/assets/audio/FE79.5.mp3'
import asset26 from '../assets/characters/kim.webp'
import asset27 from '../assets/characters/ana.webp'
import asset28 from '../../C101/assets/scene-come-across79.webp'
import asset29 from '../../C101/assets/scene-take-on-board79.webp'
import asset30 from '../../C101/assets/scene-constructive79.webp'
import asset31 from '../../C101/assets/scene-harsh79.webp'
import asset32 from '../../C101/assets/scene-learning-curve79.webp'
import asset33 from '../../C101/assets/scene-to-be-fair79.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'c1-01.shadowing.01',
      text: 'So, the big talk with Raj is tomorrow?',
      src: asset0,
    },
    {
      id: 'c1-01.shadowing.02',
      text: 'Yes. I’ll start with: “You really know the project, and I like your style.”',
      src: asset1,
    },
    { id: 'c1-01.shadowing.03', text: 'Nice. And then?', src: asset2 },
    {
      id: 'c1-01.shadowing.04',
      text: 'Then: “You talked too fast and just read the slides.”',
      src: asset3,
    },
    {
      id: 'c1-01.shadowing.05',
      text: 'Hmm. That sounds a bit harsh.',
      src: asset4,
    },
    { id: 'c1-01.shadowing.06', text: 'But it’s true!', src: asset5 },
    {
      id: 'c1-01.shadowing.07',
      text: 'Sure, but it might come across as an attack. Try: “It seemed a little rushed.”',
      src: asset6,
    },
    {
      id: 'c1-01.shadowing.08',
      text: '“It seemed a little rushed.” And for the slides, maybe—',
      src: asset7,
    },
    {
      id: 'c1-01.shadowing.09',
      text: 'Maybe “The slides tend to—” Sorry, go on.',
      src: asset8,
    },
    {
      id: 'c1-01.shadowing.10',
      text: 'No, that’s it! “The slides tend to have a lot of text. You might want to cut some.”',
      src: asset9,
    },
    {
      id: 'c1-01.shadowing.11',
      text: 'Much better. And the client’s question? That one’s more serious.',
      src: asset10,
    },
    {
      id: 'c1-01.shadowing.12',
      text: '“I wonder if we could prepare the answers together next time.”',
      src: asset11,
    },
    {
      id: 'c1-01.shadowing.13',
      text: 'Perfect. Oh, and start with a question: “How do you think it went?”',
      src: asset12,
    },
    {
      id: 'c1-01.shadowing.14',
      text: 'Good idea. To be fair, it was his first big client. There’s a learning curve.',
      src: asset13,
    },
    {
      id: 'course-c1-01-come-across-as.front',
      text: 'come across as',
      src: asset14,
    },
    {
      id: 'course-c1-01-come-across-as.back',
      text: 'Short emails can come across as cold.',
      src: asset15,
    },
    {
      id: 'course-c1-01-take-it-on-board.front',
      text: 'take it on board',
      src: asset16,
    },
    {
      id: 'course-c1-01-take-it-on-board.back',
      text: 'Raj will take it on board and practise before the next meeting.',
      src: asset17,
    },
    {
      id: 'course-c1-01-constructive.front',
      text: 'constructive',
      src: asset18,
    },
    {
      id: 'course-c1-01-constructive.back',
      text: 'Constructive feedback gives a clear next step.',
      src: asset19,
    },
    { id: 'course-c1-01-harsh.front', text: 'harsh', src: asset20 },
    {
      id: 'course-c1-01-harsh.back',
      text: 'That criticism sounds harsh because it attacks the person.',
      src: asset21,
    },
    {
      id: 'course-c1-01-learning-curve.front',
      text: 'a learning curve',
      src: asset22,
    },
    {
      id: 'course-c1-01-learning-curve.back',
      text: 'Starting a new role involves a learning curve.',
      src: asset23,
    },
    { id: 'course-c1-01-to-be-fair.front', text: 'To be fair', src: asset24 },
    {
      id: 'course-c1-01-to-be-fair.back',
      text: 'To be fair, Raj had a lot to explain in thirty minutes.',
      src: asset25,
    },
  ],
  images: {
    '/flashcards/course-characters/kim/image.webp': asset26,
    '/flashcards/course-characters/ana/image.webp': asset27,
    '/flashcards-transparent/course-images/447f7864eb703fd26eb1c636583a42b8491bde1e45f103dde79bb5f513ec2036/image.webp':
      asset28,
    '/flashcards-transparent/course-images/3cdd63a934f4e5f9dc4e53e9eee9a401475644c6d2498d6e0865891dfe332fa6/image.webp':
      asset29,
    '/flashcards-transparent/course-images/c58c841d59f76791993b52b5c8c8be0e365c7ee4e8ed944af065322e7ee9d7d1/image.webp':
      asset30,
    '/flashcards-transparent/course-images/8d9e18b30bc51d3fdb29a9c2865b48c3bc5f74570225399f32979543fdd9828b/image.webp':
      asset31,
    '/flashcards-transparent/course-images/153512ad6e39a81e5b5a4acd0e483d4bf1e93af8c6966fd6e322a2978aedd4b1/image.webp':
      asset32,
    '/flashcards-transparent/course-images/70cad12428a4be4d2e540003a48f0e2ed044c98e3e8e3f3e95022da9f433dc60/image.webp':
      asset33,
  },
}
export default prepared
