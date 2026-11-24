import type { PreparedPractice } from '../Practice.types'
import data from './b1-02.json'
import asset0 from '../assets/audio/902e90a9eaee6c73f041d97fdd6f16a4b6b7ef31723d411ab90bfdce866ee15d.mp3'
import asset1 from '../assets/audio/460b427d11597ee44775fef667a3cb0acf06e903b2c716bcaf1105980b8feba7.mp3'
import asset2 from '../assets/audio/fbb2d1dcae433d1aee67fa5f685df563f6b4282d248db5d52ef1649c5f9f02e8.mp3'
import asset3 from '../assets/audio/a2014b83f3628d94674550305e18634b7cdafc16cb7f3c308ffcf3dc017eed31.mp3'
import asset4 from '../assets/audio/7af70d31916db84b2b9a05e33f3b55ef06351671eebddb6ec507f2a5d96d69eb.mp3'
import asset5 from '../assets/audio/fc616fa04c7c244dfaf3563075ba9f19916374afb17467323c715e499659349a.mp3'
import asset6 from '../assets/audio/d17fe07993b714421d2d193d8e1a04bc04c930722a96c57b3b846dfab5804d65.mp3'
import asset7 from '../assets/audio/50171c22b1e7ccc66996f41313d2382bd8ccc166a80a304b745b975b37e7800e.mp3'
import asset8 from '../../Course/assets/audio/B102-V81.0.mp3'
import asset9 from '../../Course/assets/audio/B102-FE81.0.mp3'
import asset10 from '../../Course/assets/audio/B102-V81.1.mp3'
import asset11 from '../../Course/assets/audio/B102-FE81.1.mp3'
import asset12 from '../../Course/assets/audio/B102-V81.2.mp3'
import asset13 from '../../Course/assets/audio/B102-FE81.2.mp3'
import asset14 from '../../Course/assets/audio/B102-V81.3.mp3'
import asset15 from '../../Course/assets/audio/B102-FE81.3.mp3'
import asset16 from '../../Course/assets/audio/B102-V81.4.mp3'
import asset17 from '../../Course/assets/audio/B102-FE81.4.mp3'
import asset18 from '../../Course/assets/audio/B102-V81.5.mp3'
import asset19 from '../../Course/assets/audio/B102-FE81.5.mp3'
import asset20 from '../assets/characters/evelyn-carter.webp'
import asset21 from '../assets/characters/owen-harris.webp'
import asset22 from '../../Course/assets/b1-02-vocabulary81.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'b1-02.shadowing.01',
      text: 'This street looks completely different',
      src: asset0,
    },
    {
      id: 'b1-02.shadowing.02',
      text: 'I know. There used to be a cinema on that corner',
      src: asset1,
    },
    {
      id: 'b1-02.shadowing.03',
      text: 'Did you use to go there after school?',
      src: asset2,
    },
    {
      id: 'b1-02.shadowing.04',
      text: 'Yes. We used to meet outside the ticket office every Friday',
      src: asset3,
    },
    {
      id: 'b1-02.shadowing.05',
      text: 'Now there’s an apartment block. What happened to the playground?',
      src: asset4,
    },
    {
      id: 'b1-02.shadowing.06',
      text: 'It moved to the park. Children didn’t use to have much space there',
      src: asset5,
    },
    {
      id: 'b1-02.shadowing.07',
      text: 'The new square is lovely, but I miss the little shops',
      src: asset6,
    },
    {
      id: 'b1-02.shadowing.08',
      text: 'Me too. There used to be a corner shop next to the cinema',
      src: asset7,
    },
    { id: 'course-b1-02-cinema.front', text: 'a cinema', src: asset8 },
    {
      id: 'course-b1-02-cinema.back',
      text: 'There used to be a cinema on this corner.',
      src: asset9,
    },
    { id: 'course-b1-02-playground.front', text: 'a playground', src: asset10 },
    {
      id: 'course-b1-02-playground.back',
      text: 'The playground still has its old swings.',
      src: asset11,
    },
    {
      id: 'course-b1-02-corner-shop.front',
      text: 'a corner shop',
      src: asset12,
    },
    {
      id: 'course-b1-02-corner-shop.back',
      text: 'I used to buy bread at the corner shop.',
      src: asset13,
    },
    { id: 'course-b1-02-square.front', text: 'a square', src: asset14 },
    {
      id: 'course-b1-02-square.back',
      text: 'The factory was beside the square.',
      src: asset15,
    },
    { id: 'course-b1-02-factory.front', text: 'a factory', src: asset16 },
    {
      id: 'course-b1-02-factory.back',
      text: 'My neighbour used to work at the factory.',
      src: asset17,
    },
    {
      id: 'course-b1-02-apartment-block.front',
      text: 'an apartment block',
      src: asset18,
    },
    {
      id: 'course-b1-02-apartment-block.back',
      text: 'There’s an apartment block on the old site now.',
      src: asset19,
    },
  ],
  images: {
    '/flashcards/course-characters/evelyn-carter/image.webp': asset20,
    '/flashcards/course-characters/owen-harris/image.webp': asset21,
    '/flashcards-transparent/course-images/984053a6feeeb1832944531386155d2b722956036536905e837f14487b67d8f6/image.webp':
      asset22,
  },
}
export default prepared
