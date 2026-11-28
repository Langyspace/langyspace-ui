import type { PreparedPractice } from '../Practice.types'
import data from './c1-05.json'
import asset0 from '../assets/audio/1a83f19ac853b6b3eb9d5b8de7f69ebcfb8ed218d5e1f28dfff8768aa6fcaaee.mp3'
import asset1 from '../assets/audio/10629d704e142f999451fbb008a1e01094fc41defb7361eadf09a3bfa4a21eab.mp3'
import asset2 from '../assets/audio/6016a5f6cf1a08992c1ffda77f9ee3dc309ceb5b0fa7657d6bbe563ddcc81fff.mp3'
import asset3 from '../assets/audio/7e9cd2f5c4c228681e3ef537779d36ec0f02f246c4e936b1eb3fed0f944e7037.mp3'
import asset4 from '../assets/audio/516f29f00f4fdda1535a518dd12e682df49de947bee90d02fda73c99145fae9b.mp3'
import asset5 from '../assets/audio/a0facccb88ca61cbd4057a08e918c64bc8709641822cff9014b723066546043f.mp3'
import asset6 from '../assets/audio/af334961d2b0be61a0ea92ca9f4eaa9fffd75b37ac6a5fe24110d9f9f9adfe18.mp3'
import asset7 from '../assets/audio/83122ec0539433a3b570f6f36b44aaa76964b44aa30381530d70617e424157be.mp3'
import asset8 from '../assets/audio/209fe59b340ad7dde8a8f4611fa46108ff0fd045eedd61165e518551fb96c915.mp3'
import asset9 from '../assets/audio/d50118bf5847079e220afd22a1dd5bb28c7843fe6d55a738ead841815b5656d8.mp3'
import asset10 from '../assets/audio/01302b7c11fe98161fe68541d82c0665ccc72e8137190e9c34751e91cadcafc7.mp3'
import asset11 from '../assets/audio/079dfaf286c92d4debd8a534dcb95c46f048f6eb9f3cd9328c65572bf69608b1.mp3'
import asset12 from '../../Course/assets/audio/C105-V81.0.mp3'
import asset13 from '../../Course/assets/audio/C105-FE81.0.mp3'
import asset14 from '../../Course/assets/audio/C105-V81.1.mp3'
import asset15 from '../../Course/assets/audio/C105-FE81.1.mp3'
import asset16 from '../../Course/assets/audio/C105-V81.2.mp3'
import asset17 from '../../Course/assets/audio/C105-FE81.2.mp3'
import asset18 from '../../Course/assets/audio/C105-V81.3.mp3'
import asset19 from '../../Course/assets/audio/C105-FE81.3.mp3'
import asset20 from '../../Course/assets/audio/C105-V81.4.mp3'
import asset21 from '../../Course/assets/audio/C105-FE81.4.mp3'
import asset22 from '../../Course/assets/audio/C105-V81.5.mp3'
import asset23 from '../../Course/assets/audio/C105-FE81.5.mp3'
import asset24 from '../assets/characters/niamh-murphy.webp'
import asset25 from '../assets/characters/cian-walsh.webp'
import asset26 from '../../Course/assets/c1-05-vocabulary81.webp'
import atFirst163 from '../assets/homework163/at-first.webp'
import expanded124Asset0 from '../assets/flashcards124/2ecf4b534a79e55272af7f32ec380486880f6fd9a5bfee772945405d5eedde6c.mp3'
import expanded124Asset1 from '../assets/flashcards124/3386e098a55db47af3cac890d72796bfc5ceeb1b7f154f4e55a9067fecfb7e78.mp3'
import expanded124Asset2 from '../assets/flashcards124/c823af3635d5e11d84ff1e4f4fe2833be038399e811be76a18c0461166cc8b9b.mp3'
import expanded124Asset3 from '../assets/flashcards124/63f8d5695c4c2fdc898ba5a37a09fd28360e07aef835737f2960726ed6b87290.mp3'
import expanded124Asset4 from '../assets/flashcards124/5465186bd443dd01aeb45af6b23828291df7802e3dea801d6d8445f337a2eec9.mp3'
import expanded124Asset5 from '../assets/flashcards124/5e9c62b8fbe5e4ecd4207ac3adce0c237e780023724e56186daaa11d031c7755.mp3'
import expanded124Asset6 from '../assets/flashcards124/8cf10dfcaac26ed3850a3567fd087af08d7cc2212abb4630a541cab8f1f561ca.mp3'
import expanded124Asset7 from '../assets/flashcards124/e571826f09bb0aa121ba7b44fcf8ec9f99b402e9e94bd91bc9a262db3b63fde7.mp3'
import expanded124Asset8 from '../assets/flashcards124/0d354397e6476cf7eaf9b0d84e7eec5a29c6edb3a2cf38c679a92d2ea804f9b0.mp3'
import expanded124Asset9 from '../assets/flashcards124/bdbc19dde221d526849ca75265a368a9c37d3ada9a4128acf4fa4df3f91a5608.mp3'
import expanded124Asset10 from '../assets/flashcards124/227e3a5d19b51c966c44f6645869e7a7dbc74a705af27524115cdf4da1b43e22.mp3'
import expanded124Asset11 from '../assets/flashcards124/8c989dc0b5688656ceaac47718fb1b70e6629682cacc7b89038d8e5063c971cb.mp3'
import expanded124Asset12 from '../assets/flashcards124/e1608cf1313667e740f540ab7174c485ac50be63c660b381102475d5e7b01098.mp3'
import expanded124Asset13 from '../assets/flashcards124/189880420e4aaead885619596a347d0391c5269523be8924499267a2901c1e58.mp3'
import expanded124Asset14 from '../assets/flashcards124/bc4687c709fda56bfdb8aaf0e253c2de864e84d22e1e13aee21555ebf71993fd.mp3'
import expanded124Asset15 from '../assets/flashcards124/ea2a0cc840f8cfc8a7bd071ed93b992da7387ab0be84429837ed8e1d3ebcba27.mp3'
import expanded124Asset16 from '../assets/flashcards124/dc9b1da529b18532ebcf3853231c0b23c71bde0d4fa9ffc0ef9999ab210acee8.mp3'
import expanded124Asset17 from '../assets/flashcards124/edf85d8afcf4a0ddee63db2d6c6aca5217fb4b6e5125fd51a5bf5893a112e878.mp3'
import expanded124Asset18 from '../assets/flashcards124/9c2f13043fabd2b228971943c4b591d27a49f85ef3b9604e997afff766b337b8.mp3'
import expanded124Asset19 from '../assets/flashcards124/b1347b85db089ab5cf7769b1a69c035121ad5fe63cb1fa5d8c5ca9cb64048712.webp'
import expanded124Asset20 from '../assets/flashcards124/7432e9d9d31ef5bce3c8344028154fe4aa9d144d9b02234b80fa6469afa98950.webp'
import expanded124Asset21 from '../assets/flashcards124/94bc97a6de0a0e0b46fe8f73be7b171572e3153ebe6d56bf5da5a2c854ff0552.webp'
import expanded124Asset22 from '../assets/flashcards124/ea1dedf32108c92b3dd1e0f852d2b9b3866019b83c6e0c2b892e0949693c19bd.webp'
import expanded124Asset23 from '../assets/flashcards124/ab56839474636e324af9a3a0c1d830d57340a74e5a61656ee025e82d74da4b27.webp'
import expanded124Asset24 from '../assets/flashcards124/9c8ecfa7bde2b78584d079a7733aa4f8e41ed44844574947f215ad241cc61bce.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'course-b2-03-take-a-chance.front',
      text: 'take a chance',
      src: expanded124Asset0,
    },
    {
      id: 'course-b2-03-take-a-chance.back',
      text: 'They decided to take a chance on it.',
      src: expanded124Asset1,
    },
    {
      id: 'course-b2-03-miss-an-opportunity.front',
      text: 'miss an opportunity',
      src: expanded124Asset2,
    },
    {
      id: 'course-b2-03-miss-an-opportunity.back',
      text: 'Missing one opportunity doesn’t close every path.',
      src: expanded124Asset3,
    },
    {
      id: 'course-b2-03-consequence.front',
      text: 'a consequence',
      src: expanded124Asset4,
    },
    {
      id: 'course-b2-03-consequence.back',
      text: 'The collaboration was an unexpected consequence.',
      src: expanded124Asset5,
    },
    {
      id: 'course-b2-03-setback.front',
      text: 'a setback',
      src: expanded124Asset6,
    },
    {
      id: 'course-b2-03-setback.back',
      text: 'A setback may change the route.',
      src: expanded124Asset7,
    },
    {
      id: 'course-b2-03-fresh-start.front',
      text: 'a fresh start',
      src: expanded124Asset8,
    },
    {
      id: 'course-b2-03-fresh-start.back',
      text: 'The move offered a fresh start.',
      src: expanded124Asset9,
    },
    {
      id: 'deck-b2-software-development-vocabulary-assumption.front',
      text: 'assumption. The estimate relies on the assumption that the API contract will not change.',
      src: expanded124Asset10,
    },
    {
      id: 'C102-FS81.1',
      text: 'a warning sign. A warning sign is useful only if someone can act.',
      src: expanded124Asset11,
    },
    {
      id: 'C102-FS81.3',
      text: 'an oversight. The missing check may have been an oversight.',
      src: expanded124Asset12,
    },
    {
      id: 'B204-FS81.0',
      text: 'a clue. A clue is not always proof.',
      src: expanded124Asset13,
    },
    {
      id: 'B204-FS81.5',
      text: 'an explanation. An explanation should fit the evidence.',
      src: expanded124Asset14,
    },
    {
      id: 'C103-FS81.3',
      text: 'an unconfirmed report. This is still an unconfirmed report.',
      src: expanded124Asset15,
    },
    {
      id: 'C109-FS81.5',
      text: 'a contributing factor. Service timing is a contributing factor.',
      src: expanded124Asset16,
    },
    {
      id: 'C109-FS81.4',
      text: 'an early sign. This could be an early sign of a gap.',
      src: expanded124Asset17,
    },
    {
      id: 'C109-FS81.3',
      text: 'a worst-case scenario. A worst-case scenario should be labelled as a scenario.',
      src: expanded124Asset18,
    },
    {
      id: 'c1-05.shadowing.01',
      text: 'I nearly cancelled the trip, to be honest',
      src: asset0,
    },
    {
      id: 'c1-05.shadowing.02',
      text: 'Really? You seemed quite excited about it',
      src: asset1,
    },
    {
      id: 'c1-05.shadowing.03',
      text: 'I was, but the forecast looked terrible and the train had been delayed',
      src: asset2,
    },
    { id: 'c1-05.shadowing.04', text: 'What changed your mind?', src: asset3 },
    {
      id: 'c1-05.shadowing.05',
      text: 'A friend said we should go anyway. Little did I know how much I needed the break',
      src: asset4,
    },
    { id: 'c1-05.shadowing.06', text: 'So it turned out well?', src: asset5 },
    {
      id: 'c1-05.shadowing.07',
      text: 'Better than I expected. The rain stopped just as we arrived',
      src: asset6,
    },
    { id: 'c1-05.shadowing.08', text: 'That was lucky', src: asset7 },
    {
      id: 'c1-05.shadowing.09',
      text: 'It was. No sooner had we checked in than the sun came out',
      src: asset8,
    },
    {
      id: 'c1-05.shadowing.10',
      text: 'And that was the turning point?',
      src: asset9,
    },
    {
      id: 'c1-05.shadowing.11',
      text: 'Absolutely. Looking back, the last thing I expected was to come home feeling so rested',
      src: asset10,
    },
    {
      id: 'c1-05.shadowing.12',
      text: 'Sometimes the trip you almost skip is the one you remember',
      src: asset11,
    },
    { id: 'course-c1-05-at-first.front', text: 'at first', src: asset12 },
    {
      id: 'course-c1-05-at-first.back',
      text: 'At first, I assumed it had disappeared on the train.',
      src: asset13,
    },
    {
      id: 'course-c1-05-to-my-surprise.front',
      text: 'to my surprise',
      src: asset14,
    },
    {
      id: 'course-c1-05-to-my-surprise.back',
      text: 'To my surprise, the photograph told another story.',
      src: asset15,
    },
    {
      id: 'course-c1-05-as-it-turned-out.front',
      text: 'as it turned out',
      src: asset16,
    },
    {
      id: 'course-c1-05-as-it-turned-out.back',
      text: 'As it turned out, it was still at the café.',
      src: asset17,
    },
    {
      id: 'course-c1-05-turning-point.front',
      text: 'a turning point',
      src: asset18,
    },
    {
      id: 'course-c1-05-turning-point.back',
      text: 'That earlier photograph was the turning point.',
      src: asset19,
    },
    {
      id: 'course-c1-05-looking-back.front',
      text: 'looking back',
      src: asset20,
    },
    {
      id: 'course-c1-05-looking-back.back',
      text: 'Looking back, I’d confused noticing with losing.',
      src: asset21,
    },
    {
      id: 'course-c1-05-last-thing-i-expected.front',
      text: 'the last thing I expected',
      src: asset22,
    },
    {
      id: 'course-c1-05-last-thing-i-expected.back',
      text: 'Finding it on that chair was the last thing I expected.',
      src: asset23,
    },
  ],
  images: {
    '/flashcards-transparent/course-practice/homework-media163/b628c2783624c73b23931fb19c7e8bfd22061d912b9b0bfdef861978f45bc2ad/image.webp':
      atFirst163,
    '/flashcards-transparent/course-images/b1347b85db089ab5cf7769b1a69c035121ad5fe63cb1fa5d8c5ca9cb64048712/image.webp':
      expanded124Asset19,
    '/flashcards/b2/software-development-vocabulary/assumption/image.webp':
      expanded124Asset20,
    '/flashcards-transparent/course-practice/homework-media131/94bc97a6de0a0e0b46fe8f73be7b171572e3153ebe6d56bf5da5a2c854ff0552/image.webp':
      expanded124Asset21,
    '/flashcards-transparent/course-practice/homework-media131/ea1dedf32108c92b3dd1e0f852d2b9b3866019b83c6e0c2b892e0949693c19bd/image.webp':
      expanded124Asset22,
    '/flashcards-transparent/course-practice/homework-media131/ab56839474636e324af9a3a0c1d830d57340a74e5a61656ee025e82d74da4b27/image.webp':
      expanded124Asset23,
    '/flashcards-transparent/course-practice/homework-media131/9c8ecfa7bde2b78584d079a7733aa4f8e41ed44844574947f215ad241cc61bce/image.webp':
      expanded124Asset24,
    '/flashcards/course-characters/niamh-murphy/image.webp': asset24,
    '/flashcards/course-characters/cian-walsh/image.webp': asset25,
    '/flashcards-transparent/course-images/90e737ed199062d4fed108ae5c309bb83b415e960799760928cdd717631077c6/image.webp':
      asset26,
  },
}
export default prepared
