import type { PreparedPractice } from '../Practice.types'
import data from './a2-06.json'
import asset0 from '../../Course/assets/audio/A206-D81.1.mp3'
import asset1 from '../../Course/assets/audio/A206-D81.2.mp3'
import asset2 from '../../Course/assets/audio/A206-D81.3.mp3'
import asset3 from '../../Course/assets/audio/A206-D81.4.mp3'
import asset4 from '../../Course/assets/audio/A206-D81.5.mp3'
import asset5 from '../../Course/assets/audio/A206-D81.6.mp3'
import asset6 from '../../Course/assets/audio/A206-D81.7.mp3'
import asset7 from '../../Course/assets/audio/A206-D81.8.mp3'
import asset8 from '../../Course/assets/audio/A206-V81.0.mp3'
import asset9 from '../../Course/assets/audio/A206-FE81.0.mp3'
import asset10 from '../../Course/assets/audio/A206-V81.1.mp3'
import asset11 from '../../Course/assets/audio/A206-FE81.1.mp3'
import asset12 from '../../Course/assets/audio/A206-V81.2.mp3'
import asset13 from '../../Course/assets/audio/A206-FE81.2.mp3'
import asset14 from '../../Course/assets/audio/A206-V81.3.mp3'
import asset15 from '../../Course/assets/audio/A206-FE81.3.mp3'
import asset16 from '../../Course/assets/audio/A206-V81.4.mp3'
import asset17 from '../../Course/assets/audio/A206-FE81.4.mp3'
import asset18 from '../../Course/assets/audio/A206-V81.5.mp3'
import asset19 from '../../Course/assets/audio/A206-FE81.5.mp3'
import asset20 from '../assets/characters/kim.webp'
import asset21 from '../assets/characters/ana.webp'
import asset22 from '../../Course/assets/a2-06-vocabulary81.webp'
import expanded124Asset0 from '../assets/flashcards124/7f39f6059a6ae5f66c3daa6e7383ff179b5f64b3fe10b1dfab3ab0a97ee89169.mp3'
import expanded124Asset1 from '../assets/flashcards124/4af523fdbe0d5822fec7686b7837bbc5bb25f27cffaa61dd671bb76739303e05.mp3'
import expanded124Asset2 from '../assets/flashcards124/e6c482b9ce256b2b4c7ee2912db46949b3d0a62fada4f37275308d4855d84377.mp3'
import expanded124Asset3 from '../assets/flashcards124/a1f735b718c3d9c5c1ea97a7a56ebc39829dd49b5999dd6784f7f8cedbf4a65c.mp3'
import expanded124Asset4 from '../assets/flashcards124/44b2b2cd923bc9b944ce6475ea0d48c818272901c3b2c04cb487443ace24a950.mp3'
import expanded124Asset5 from '../assets/flashcards124/27d5ed4fd7645330ac8d8b9c0d6293ca10edfbeb6de325a05af57ad31b3f2b99.mp3'
import expanded124Asset6 from '../assets/flashcards124/60315d19b033b8bde0951ebd658465b24385af5f44af664aee4e6690bb24af04.mp3'
import expanded124Asset7 from '../assets/flashcards124/abea8e3bd741efa1211a983ed929f1325cc90d88bba892c49b198bd95ca18a7b.mp3'
import expanded124Asset8 from '../assets/flashcards124/e4a78c4843d926d414e226e318055e9913f9c072c3d26a348bfb0ab35aa6b284.mp3'
import expanded124Asset9 from '../assets/flashcards124/31866295558731a913f2c40bcd382cb4b0db081ef24757f57c708557705cc0f2.mp3'
import expanded124Asset10 from '../assets/flashcards124/9756f31bdc6239312ce93d1765a20107b725b43498fd0133572ca4b1a208e60d.mp3'
import expanded124Asset11 from '../assets/flashcards124/03d75f0a469a718d4486b622c01fec128f3d9d5cbe04de02e834e1020990618a.mp3'
import expanded124Asset12 from '../assets/flashcards124/39551df5ca1e36fa20ed8df215e7124798635aa6bcc446b3160c489824d77015.mp3'
import expanded124Asset13 from '../assets/flashcards124/1643806a3db21beb0eb26cb61890fdc55d94754ce3a5e384abb47e5d7d91dd34.mp3'
import expanded124Asset14 from '../assets/flashcards124/0da8b868f8af86fde7768c97d99481c6bfe95789a0cdb3580000bd35bfc77d93.mp3'
import expanded124Asset15 from '../assets/flashcards124/4d79f9383532e85b9b00f7c644883eac9a86511c6db885da65e66250da4db4dd.mp3'
import expanded124Asset16 from '../assets/flashcards124/62e23fe0ad90cf63aac53c93d31ca33bdfd68b6ba4f07fa21b56717b120c5b71.mp3'
import expanded124Asset17 from '../assets/flashcards124/23a0bcc05015a0edf654bfc292ead1a1d4c83d53a33a04912c897baa7c862ef9.mp3'
import expanded124Asset18 from '../assets/flashcards124/e4207561f54e78325eab83c6da229d686e0c13c5f761d13c14264b696f4e2440.mp3'
import expanded124Asset19 from '../assets/flashcards124/6b7716d285be3930f5e54a2a9cf911ac78104036f7ae62775f13de96d3343d88.mp3'
import expanded124Asset20 from '../assets/flashcards124/c13725efe5c68bedca38408f4ee293011a6e1469fd67faf658b1d107c10d463c.mp3'
import expanded124Asset21 from '../assets/flashcards124/8a39e4a5a19e3a7919a76de35f75d8ff01c8e6fefbf27928af0adc4df969a535.mp3'
import expanded124Asset22 from '../assets/flashcards124/601479a3d754317b29e8b688ff603fbd66afede10689a33186c38ece43d4753b.mp3'
import expanded124Asset23 from '../assets/flashcards124/7dcbcb6dee8d164064a8545d9b6140413a023d247e3146d116973cee8e53abb4.mp3'
import expanded124Asset24 from '../assets/flashcards124/51c532e26ade0960697035d4c39a0d70ef2d149f856403734b57a1ed5f699e80.mp3'
import expanded124Asset25 from '../assets/flashcards124/5a00ad1be34ff20fffca7132c69dcb6439b9df410ea62691b70555d5ee13dd71.mp3'
import expanded124Asset26 from '../assets/flashcards124/b44501a74f792357f2a28b37a1bf60825bd317f7a040789c8737665c8fa52f4d.mp3'
import expanded124Asset27 from '../assets/flashcards124/373324e609bdbd007967f0005da07822ce941c85f21bbe7887e0769a8931ec3f.mp3'
import expanded124Asset28 from '../assets/flashcards124/65abc2f356592b9593cca24e0ffbd1ea7613e76bde300b9916b45143bd6126e6.webp'
import expanded124Asset29 from '../assets/flashcards124/e9d561807a1d71f0aab6fcf841f8c96748ee79c9512bacfaf5f90a35cfc2fc1a.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'flashcard124-an-earache.front',
      text: 'an earache',
      src: expanded124Asset0,
    },
    {
      id: 'flashcard124-an-earache.back',
      text: 'I have an earache',
      src: expanded124Asset1,
    },
    {
      id: 'flashcard124-a-toothache.front',
      text: 'a toothache',
      src: expanded124Asset2,
    },
    {
      id: 'flashcard124-a-toothache.back',
      text: 'I have a toothache',
      src: expanded124Asset3,
    },
    { id: 'flashcard124-a-cold.front', text: 'a cold', src: expanded124Asset4 },
    {
      id: 'flashcard124-a-cold.back',
      text: 'I think I have a cold',
      src: expanded124Asset5,
    },
    { id: 'flashcard124-dizzy.front', text: 'dizzy', src: expanded124Asset6 },
    {
      id: 'flashcard124-dizzy.back',
      text: 'I feel dizzy when I stand up',
      src: expanded124Asset7,
    },
    { id: 'flashcard124-sick.front', text: 'sick', src: expanded124Asset8 },
    {
      id: 'flashcard124-sick.back',
      text: 'I feel sick today',
      src: expanded124Asset9,
    },
    {
      id: 'course-a1-01-tired.front',
      text: 'tired. I’m tired',
      src: expanded124Asset10,
    },
    {
      id: 'course-a1-01-tired.back',
      text: 'cansado(a). Estou cansado',
      src: expanded124Asset11,
    },
    {
      id: 'flashcard124-a-runny-nose.front',
      text: 'a runny nose',
      src: expanded124Asset12,
    },
    {
      id: 'flashcard124-a-runny-nose.back',
      text: 'I have a runny nose',
      src: expanded124Asset13,
    },
    {
      id: 'flashcard124-temperature.front',
      text: 'temperature',
      src: expanded124Asset14,
    },
    {
      id: 'flashcard124-temperature.back',
      text: 'Can you check my temperature?',
      src: expanded124Asset15,
    },
    {
      id: 'flashcard124-medicine.front',
      text: 'medicine',
      src: expanded124Asset16,
    },
    {
      id: 'flashcard124-medicine.back',
      text: 'Do I need any medicine?',
      src: expanded124Asset17,
    },
    { id: 'flashcard124-rest.front', text: 'rest', src: expanded124Asset18 },
    {
      id: 'flashcard124-rest.back',
      text: 'You need some rest',
      src: expanded124Asset19,
    },
    {
      id: 'flashcard124-an-appointment.front',
      text: 'an appointment',
      src: expanded124Asset20,
    },
    {
      id: 'flashcard124-an-appointment.back',
      text: 'I have an appointment this afternoon',
      src: expanded124Asset21,
    },
    {
      id: 'course-a1-03-doctor.front',
      text: 'a doctor',
      src: expanded124Asset22,
    },
    {
      id: 'course-a1-03-doctor.back',
      text: 'My mother is a doctor.',
      src: expanded124Asset23,
    },
    {
      id: 'flashcard124-a-pharmacy.front',
      text: 'a pharmacy',
      src: expanded124Asset24,
    },
    {
      id: 'flashcard124-a-pharmacy.back',
      text: 'Is there a pharmacy near here?',
      src: expanded124Asset25,
    },
    {
      id: 'flashcard124-drink-water.front',
      text: 'drink water',
      src: expanded124Asset26,
    },
    {
      id: 'flashcard124-drink-water.back',
      text: 'Remember to drink water',
      src: expanded124Asset27,
    },
    {
      id: 'a2-06.shadowing.01',
      text: 'Good afternoon. How can I help you?',
      src: asset0,
    },
    {
      id: 'a2-06.shadowing.02',
      text: 'My back hurts. I’d like to make an appointment.',
      src: asset1,
    },
    { id: 'a2-06.shadowing.03', text: 'When did it start?', src: asset2 },
    {
      id: 'a2-06.shadowing.04',
      text: 'Yesterday afternoon. Is there an appointment today?',
      src: asset3,
    },
    {
      id: 'a2-06.shadowing.05',
      text: 'There’s one at three at the Green Clinic.',
      src: asset4,
    },
    {
      id: 'a2-06.shadowing.06',
      text: 'Could you repeat the time, please?',
      src: asset5,
    },
    {
      id: 'a2-06.shadowing.07',
      text: 'Three o’clock. We’ll send you the address.',
      src: asset6,
    },
    {
      id: 'a2-06.shadowing.08',
      text: 'Thank you. I’ll check the message.',
      src: asset7,
    },
    { id: 'course-a2-06-headache.front', text: 'a headache', src: asset8 },
    {
      id: 'course-a2-06-headache.back',
      text: 'I have a headache.',
      src: asset9,
    },
    {
      id: 'course-a2-06-sore-throat.front',
      text: 'a sore throat',
      src: asset10,
    },
    {
      id: 'course-a2-06-sore-throat.back',
      text: 'My friend has a sore throat.',
      src: asset11,
    },
    { id: 'course-a2-06-fever.front', text: 'a fever', src: asset12 },
    {
      id: 'course-a2-06-fever.back',
      text: 'I have a fever today.',
      src: asset13,
    },
    { id: 'course-a2-06-cough.front', text: 'a cough', src: asset14 },
    {
      id: 'course-a2-06-cough.back',
      text: 'I’ve had a cough since yesterday.',
      src: asset15,
    },
    {
      id: 'course-a2-06-stomachache.front',
      text: 'a stomachache',
      src: asset16,
    },
    {
      id: 'course-a2-06-stomachache.back',
      text: 'She has a stomachache.',
      src: asset17,
    },
    { id: 'course-a2-06-backache.front', text: 'a backache', src: asset18 },
    {
      id: 'course-a2-06-backache.back',
      text: 'I’d like an appointment for my backache.',
      src: asset19,
    },
  ],
  images: {
    '/flashcards-transparent/course-images/65abc2f356592b9593cca24e0ffbd1ea7613e76bde300b9916b45143bd6126e6/image.webp':
      expanded124Asset28,
    '/flashcards-transparent/course-images/e9d561807a1d71f0aab6fcf841f8c96748ee79c9512bacfaf5f90a35cfc2fc1a/image.webp':
      expanded124Asset29,
    '/flashcards/course-characters/kim/image.webp': asset20,
    '/flashcards/course-characters/ana/image.webp': asset21,
    '/flashcards-transparent/course-images/f646113a119a25f70735ec059555a41749f87df586c82aba1e4d468f1c666137/image.webp':
      asset22,
  },
}
export default prepared
