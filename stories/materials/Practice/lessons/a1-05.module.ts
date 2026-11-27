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
import expanded124Asset0 from '../assets/flashcards124/0492c593afed3dab14960a90e825298eb20759be88ac27980bed02218543240b.mp3'
import expanded124Asset1 from '../assets/flashcards124/47ffc65e0fba920c043d2171468d65e9030261ec39e5b91647c6a897658b5cf8.mp3'
import expanded124Asset2 from '../assets/flashcards124/771b1b32861cc8455abc0db62c53f192b8a364acd9674860e235dded5920619c.mp3'
import expanded124Asset3 from '../assets/flashcards124/6f536dc6097c532c892c834cbd0e915266b12c2aabbd4116a67ff00fec0b1e5e.mp3'
import expanded124Asset4 from '../assets/flashcards124/379a90eeca6db291c183f9ff9873d09dd95f798340333714a548e648f7ae236a.mp3'
import expanded124Asset5 from '../assets/flashcards124/f427f113585439b330d323543bbe0a3f415f96ee22067f33bbaf71c03bf98a12.mp3'
import expanded124Asset6 from '../assets/flashcards124/2c0b16e266574141b3c2c16c2e1e4766bbe816a0804eaa8892e2860f51f1c12a.mp3'
import expanded124Asset7 from '../assets/flashcards124/9241adbac4bb7cd22b1ad106575d189134d0522a196fc9662e48b8e98705bedf.mp3'
import expanded124Asset8 from '../assets/flashcards124/42bb2a246e74ede7f8d05129d18a9863ce43324b0f08668b4ccceb6609953085.mp3'
import expanded124Asset9 from '../assets/flashcards124/fc3f14e16f98020a9a485b382d2d56b01a42f3d26c54a921183f1e2b756a0c23.mp3'
import expanded124Asset10 from '../assets/flashcards124/868673f647ba6473e93b9499c083603e1104ccb7ac30b0cdd9a842ca124221d4.mp3'
import expanded124Asset11 from '../assets/flashcards124/ad8147469d086c544280ec28530ed13a7b72887368d8d2610e29ab242466e7c9.webp'
import expanded124Asset12 from '../assets/flashcards124/e6351306c8c43c874eebb69a0887ae4c6eb006d1ac2cfe158edd654e3604407e.webp'
import expanded124Asset13 from '../assets/flashcards124/cc8a0aa2913fba2e26d7c7807ca7f345064d1c2442d92822aaa02c64cea2a381.webp'
import expanded124Asset14 from '../assets/flashcards124/302bd5e558e3284ced68c57648a35b9386aa036ee752d30f3a1883dec73e4844.webp'
import expanded124Asset15 from '../assets/flashcards124/d300e99a26f20681cb8beb2318683d378595ac277f38a6cd36f5a76fa2d84d4c.webp'
import expanded124Asset16 from '../assets/flashcards124/f549dc55996b19b257fa548b5e22ba182b7f24d4b5fe49f4853120fd24ef5bf4.webp'
import expanded124Asset17 from '../assets/flashcards124/a0fe18ad82d8acf46257eda257850a0fb19dcc30e4789f978434e1fc754a3af7.webp'
import expanded124Asset18 from '../assets/flashcards124/b171ee064800df195625fee62cd013ebdf4441de5f692ba71edec6cd79e5c2c6.webp'
import expanded124Asset19 from '../assets/flashcards124/31120d118412909a943a7031f935196c0b413bcab9c05245c2f51a0cdc97af73.webp'
import expanded124Asset20 from '../assets/flashcards124/89bd466a9cba45d0af5727da4b36e72f69c377be23a7344dea774e9c6abbeebf.webp'
import expanded124Asset21 from '../assets/flashcards124/b0f79d7756455865985b90a08da2cc49cb5a0e43bdaf9eebaf80e32dde980628.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    {
      id: 'deck-a1-vegetables-potato.front',
      text: 'potato. I eat potatoes for lunch.',
      src: expanded124Asset0,
    },
    {
      id: 'deck-a1-vegetables-lettuce.front',
      text: 'lettuce. I put lettuce in my sandwich.',
      src: expanded124Asset1,
    },
    {
      id: 'deck-a1-vegetables-corn.front',
      text: 'corn. I eat corn with butter.',
      src: expanded124Asset2,
    },
    {
      id: 'deck-a1-fruits-grape.front',
      text: 'grape. I eat grapes.',
      src: expanded124Asset3,
    },
    {
      id: 'deck-a1-fruits-lemon.front',
      text: 'lemon. I make lemonade with lemon.',
      src: expanded124Asset4,
    },
    {
      id: 'deck-a1-fruits-strawberry.front',
      text: 'strawberry. I eat strawberries.',
      src: expanded124Asset5,
    },
    {
      id: 'deck-a1-fruits-pear.front',
      text: 'pear. I eat a pear.',
      src: expanded124Asset6,
    },
    {
      id: 'deck-a1-fruits-peach.front',
      text: 'peach. I eat a peach.',
      src: expanded124Asset7,
    },
    {
      id: 'deck-a1-vegetables-cucumber.front',
      text: 'cucumber. I put cucumber in my salad.',
      src: expanded124Asset8,
    },
    {
      id: 'deck-a1-vegetables-bell-pepper.front',
      text: 'bell pepper. I cook with bell pepper.',
      src: expanded124Asset9,
    },
    {
      id: 'deck-a1-vegetables-broccoli.front',
      text: 'broccoli. I eat broccoli with rice.',
      src: expanded124Asset10,
    },
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
    '/flashcards-transparent/a1/vegetables/potato/image.webp':
      expanded124Asset11,
    '/flashcards-transparent/a1/vegetables/lettuce/image.webp':
      expanded124Asset12,
    '/flashcards-transparent/a1/vegetables/corn/image.webp': expanded124Asset13,
    '/flashcards-transparent/a1/fruits/grape/image.webp': expanded124Asset14,
    '/flashcards-transparent/a1/fruits/lemon/image.webp': expanded124Asset15,
    '/flashcards-transparent/a1/fruits/strawberry/image.webp':
      expanded124Asset16,
    '/flashcards-transparent/a1/fruits/pear/image.webp': expanded124Asset17,
    '/flashcards-transparent/a1/fruits/peach/image.webp': expanded124Asset18,
    '/flashcards-transparent/a1/vegetables/cucumber/image.webp':
      expanded124Asset19,
    '/flashcards-transparent/a1/vegetables/bell-pepper/image.webp':
      expanded124Asset20,
    '/flashcards-transparent/a1/vegetables/broccoli/image.webp':
      expanded124Asset21,
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
