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
import expanded124Asset0 from '../assets/flashcards124/5e4c93f324f48e81824fefacca4fe4b28944b767c1f4bc62fc21614999286a7d.mp3'
import expanded124Asset1 from '../assets/flashcards124/efb2bf57ae1eeccfb7544561a9c55496ac7a3039af1df0ecd2ba7ac3d0e57b0b.mp3'
import expanded124Asset2 from '../assets/flashcards124/66c6d434643739dd3d79867e30786d8ec601911d3a6a53242d7a979480ec1d51.mp3'
import expanded124Asset3 from '../assets/flashcards124/a0a6748cd5f8029450e61d3e5eda456101fcda4c942ef76f73ccfef5df9dff51.mp3'
import expanded124Asset4 from '../assets/flashcards124/227e3a5d19b51c966c44f6645869e7a7dbc74a705af27524115cdf4da1b43e22.mp3'
import expanded124Asset5 from '../assets/flashcards124/e1608cf1313667e740f540ab7174c485ac50be63c660b381102475d5e7b01098.mp3'
import expanded124Asset6 from '../assets/flashcards124/cb6d9b8b637e637c7f310012cb04b3973c17e904a5d6069fe5039dd27438c8ec.mp3'
import expanded124Asset7 from '../assets/flashcards124/3782f65a1d485687f333ebd012e64faba5bcef7e7b25f3dbad92f30e9aa1e252.mp3'
import expanded124Asset8 from '../assets/flashcards124/458467a65517c699e80692575cc0bbb8c2a2e99256b11bac841ea0d2d06f4158.mp3'
import expanded124Asset9 from '../assets/flashcards124/9bfba94eb6bd5bc126b0ed897f55916fe129b47e334d2583b16457a287d70212.mp3'
import expanded124Asset10 from '../assets/flashcards124/048166f02878facd74c10cb9aa94bf73dfbcc651d17f962071780b82b25af0f4.mp3'
import expanded124Asset11 from '../assets/flashcards124/95dc04bd147a9a75b741ca7d41fb65a3d74f63a950dec78816a8b08bb0aafff2.mp3'
import expanded124Asset12 from '../assets/flashcards124/3b052f6e5059671b478ed492ea841f6b868e87cba0fa5d211fade81976eb100c.mp3'
import expanded124Asset13 from '../assets/flashcards124/80e1d41ffc907cdba88ac174e5907ab33ee20df4f572363cc78ab7b17b8b34bf.mp3'
import expanded124Asset14 from '../assets/flashcards124/3ba82ab73432c0fee13c34869e23f6e1b23be21192b7d85dc2b7cbaaaa85568a.mp3'
import expanded124Asset15 from '../assets/flashcards124/b95db567f3f420ef5b0fc3acf24d4f3428e4154e38dc9807d0611c821624c54c.mp3'
import expanded124Asset16 from '../assets/flashcards124/c47291e9cc88bd443aeb544761bf5d2749a3b0bdd2c1237b652df91ef259b2f8.mp3'
import expanded124Asset17 from '../assets/flashcards124/7c45a0257224d4bcba75ed56ae94136e2bd045606ac63df665f916b944315d55.mp3'
import expanded124Asset18 from '../assets/flashcards124/b8298153f3b7b94ee7e5f812023e78814961abf846f00905af023accda75a190.mp3'
import expanded124Asset19 from '../assets/flashcards124/ae140b37a7154bc7482d92381f7fa19e29de11b54c6b961ae5e1c44a3a8312b3.mp3'
import expanded124Asset20 from '../assets/flashcards124/5037f706134bf69ba6fb9977e35817287306ca8c912e6ce2fc3cd8c8d577b70e.webp'
import expanded124Asset21 from '../assets/flashcards124/7432e9d9d31ef5bce3c8344028154fe4aa9d144d9b02234b80fa6469afa98950.webp'
import expanded124Asset22 from '../assets/flashcards124/94bc97a6de0a0e0b46fe8f73be7b171572e3153ebe6d56bf5da5a2c854ff0552.webp'
import expanded124Asset23 from '../assets/flashcards124/491e9411ed01a85d5a63b172b44fa98b4d21a06607e76dcd1b99587e2f298768.webp'
import expanded124Asset24 from '../assets/flashcards124/e36eb40175cb97472e5df748c2d39bc60601186371a2d627a7a7e9449fa39d53.webp'
import expanded124Asset25 from '../assets/flashcards124/33cc65287412ef657ee44ee5afc4aaa4c440bf5172a46e4f8da3a7bdac3532cf.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'C110-FS81.2',
      text: 'a tone. A formal tone is not automatically clearer.',
      src: expanded124Asset0,
    },
    {
      id: 'C110-FS81.3',
      text: 'an acknowledgement. An acknowledgement is not an attendance commitment.',
      src: expanded124Asset1,
    },
    {
      id: 'C110-FS81.5',
      text: 'a follow-up. A follow-up should address the missing answer.',
      src: expanded124Asset2,
    },
    {
      id: 'C110-FS81.1',
      text: 'a recipient. Choose the tone for the recipient.',
      src: expanded124Asset3,
    },
    {
      id: 'deck-b2-software-development-vocabulary-assumption.front',
      text: 'assumption. The estimate relies on the assumption that the API contract will not change.',
      src: expanded124Asset4,
    },
    {
      id: 'C102-FS81.3',
      text: 'an oversight. The missing check may have been an oversight.',
      src: expanded124Asset5,
    },
    {
      id: 'C102-FS81.5',
      text: 'a lesson learned. A lesson learned should lead to a testable action.',
      src: expanded124Asset6,
    },
    {
      id: 'course-c1-04-bring-something-up.front',
      text: 'bring something up',
      src: expanded124Asset7,
    },
    {
      id: 'course-c1-04-bring-something-up.back',
      text: 'Bring it up before resentment grows.',
      src: expanded124Asset8,
    },
    {
      id: 'course-c1-04-expectation.front',
      text: 'an expectation',
      src: expanded124Asset9,
    },
    {
      id: 'course-c1-04-expectation.back',
      text: 'The expectation needs to be explicit.',
      src: expanded124Asset10,
    },
    {
      id: 'course-c1-04-recurring-issue.front',
      text: 'a recurring issue',
      src: expanded124Asset11,
    },
    {
      id: 'course-c1-04-recurring-issue.back',
      text: 'The late calls have become a recurring issue.',
      src: expanded124Asset12,
    },
    {
      id: 'course-c1-11-common-ground.front',
      text: 'common ground',
      src: expanded124Asset13,
    },
    {
      id: 'course-c1-11-common-ground.back',
      text: 'Accuracy and predictability are common ground.',
      src: expanded124Asset14,
    },
    {
      id: 'course-c1-11-misunderstanding.front',
      text: 'a misunderstanding',
      src: expanded124Asset15,
    },
    {
      id: 'course-c1-11-misunderstanding.back',
      text: 'The misunderstanding concerns the meaning of quick.',
      src: expanded124Asset16,
    },
    {
      id: 'course-c1-11-clarification.front',
      text: 'a clarification',
      src: expanded124Asset17,
    },
    {
      id: 'course-c1-11-clarification.back',
      text: 'A clarification should make the action concrete.',
      src: expanded124Asset18,
    },
    {
      id: 'deck-b2-academy-feedback.front',
      text: 'feedback. Her feedback helped me improve the essay.',
      src: expanded124Asset19,
    },
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
    '/flashcards/course-practice/expanded124/5037f706134bf69ba6fb9977e35817287306ca8c912e6ce2fc3cd8c8d577b70e.webp':
      expanded124Asset20,
    '/flashcards/b2/software-development-vocabulary/assumption/image.webp':
      expanded124Asset21,
    '/flashcards/course-practice/expanded124/94bc97a6de0a0e0b46fe8f73be7b171572e3153ebe6d56bf5da5a2c854ff0552.webp':
      expanded124Asset22,
    '/flashcards-transparent/course-images/491e9411ed01a85d5a63b172b44fa98b4d21a06607e76dcd1b99587e2f298768/image.webp':
      expanded124Asset23,
    '/flashcards-transparent/course-images/e36eb40175cb97472e5df748c2d39bc60601186371a2d627a7a7e9449fa39d53/image.webp':
      expanded124Asset24,
    '/flashcards-transparent/b2/academy/feedback/image.webp':
      expanded124Asset25,
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
