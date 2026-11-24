import type { PreparedPractice } from '../Practice.types'
import data from './tema-frontend.json'
import extraAsset0 from '../../Frontend/assets/audio/V.0.mp3'
import extraAsset1 from '../../Frontend/assets/audio/V.1.mp3'
import extraAsset2 from '../../Frontend/assets/audio/V.2.mp3'
import extraAsset3 from '../../Frontend/assets/audio/V.3.mp3'
import extraAsset4 from '../../Frontend/assets/audio/V.4.mp3'
import extraAsset5 from '../../Frontend/assets/audio/V.5.mp3'
import extraAsset6 from '../../Frontend/assets/audio/V.6.mp3'
import extraAsset7 from '../../Frontend/assets/audio/D.1.mp3'
import extraAsset8 from '../../Frontend/assets/audio/D.2.mp3'
import extraAsset9 from '../../Frontend/assets/audio/D.3.mp3'
import extraAsset10 from '../../Frontend/assets/audio/D.4.mp3'
import extraAsset11 from '../../Frontend/assets/audio/D.5.mp3'
import extraAsset12 from '../../Frontend/assets/audio/D.6.mp3'
import extraAsset13 from '../../Frontend/assets/audio/D.7.mp3'
import extraAsset14 from '../../Frontend/assets/audio/D.8.mp3'
import extraAsset15 from '../../Frontend/assets/audio/D.9.mp3'
import extraAsset16 from '../../Frontend/assets/audio/D.10.mp3'
import extraAsset17 from '../../Frontend/assets/v_bt.webp'
import extraAsset18 from '../../Frontend/assets/v_fm.svg'
import extraAsset19 from '../../Frontend/assets/v_mn.svg'
import extraAsset20 from '../../Frontend/assets/v_sb.svg'
import extraAsset21 from '../../Frontend/assets/v_pp.svg'
import extraAsset22 from '../../Frontend/assets/v_cb.svg'
import extraAsset23 from '../../Frontend/assets/v_dd.svg'
import extraAsset24 from '../assets/characters/ana.webp'
import extraAsset25 from '../assets/characters/kim.webp'
const prepared: PreparedPractice = {
  data: data as PreparedPractice['data'],
  recordings: [
    { id: 'course-tema-frontend-v1.front', text: 'a button', src: extraAsset0 },
    { id: 'course-tema-frontend-v1.back', text: 'a button', src: extraAsset0 },
    { id: 'course-tema-frontend-v2.front', text: 'a form', src: extraAsset1 },
    { id: 'course-tema-frontend-v2.back', text: 'a form', src: extraAsset1 },
    { id: 'course-tema-frontend-v3.front', text: 'a menu', src: extraAsset2 },
    { id: 'course-tema-frontend-v3.back', text: 'a menu', src: extraAsset2 },
    {
      id: 'course-tema-frontend-v4.front',
      text: 'a search bar',
      src: extraAsset3,
    },
    {
      id: 'course-tema-frontend-v4.back',
      text: 'a search bar',
      src: extraAsset3,
    },
    { id: 'course-tema-frontend-v5.front', text: 'a pop-up', src: extraAsset4 },
    { id: 'course-tema-frontend-v5.back', text: 'a pop-up', src: extraAsset4 },
    {
      id: 'course-tema-frontend-v6.front',
      text: 'a checkbox',
      src: extraAsset5,
    },
    {
      id: 'course-tema-frontend-v6.back',
      text: 'a checkbox',
      src: extraAsset5,
    },
    {
      id: 'course-tema-frontend-v7.front',
      text: 'a dropdown',
      src: extraAsset6,
    },
    {
      id: 'course-tema-frontend-v7.back',
      text: 'a dropdown',
      src: extraAsset6,
    },
    {
      id: 'tema-frontend.shadowing.01',
      text: 'Ana, do you have a minute? There’s a bug before the launch. The “Buy now” button doesn’t show on mobile.',
      src: extraAsset7,
    },
    {
      id: 'tema-frontend.shadowing.02',
      text: 'Oh no! On which phones?',
      src: extraAsset8,
    },
    {
      id: 'tema-frontend.shadowing.03',
      text: 'On small screens. When the pop-up opens, it covers the button. I’ve tested it on three phones, and it breaks on all of them.',
      src: extraAsset9,
    },
    {
      id: 'tema-frontend.shadowing.04',
      text: 'Hmm. What if we move the button above the pictures?',
      src: extraAsset10,
    },
    {
      id: 'tema-frontend.shadowing.05',
      text: 'Good idea, but the design will change. Could you check it today? The launch is on Friday.',
      src: extraAsset11,
    },
    {
      id: 'tema-frontend.shadowing.06',
      text: 'Sure. I’ll send you a new version this afternoon. Have you talked to Leo?',
      src: extraAsset12,
    },
    {
      id: 'tema-frontend.shadowing.07',
      text: 'Not yet. I’ve written to him, but he hasn’t answered yet. He’s in a meeting.',
      src: extraAsset13,
    },
    {
      id: 'tema-frontend.shadowing.08',
      text: 'OK. And what about the screen reader? Last week, it didn’t read the button.',
      src: extraAsset14,
    },
    {
      id: 'tema-frontend.shadowing.09',
      text: 'I’ve already fixed that. Now it reads “Buy now”. I tested it yesterday with my eyes closed!',
      src: extraAsset15,
    },
    {
      id: 'tema-frontend.shadowing.10',
      text: 'Ha! Perfect. Let’s fix the mobile version, and then we can deploy.',
      src: extraAsset16,
    },
  ],
  images: {
    '/course-practice/frontend/v_bt.webp': extraAsset17,
    '/course-practice/frontend/v_fm.svg': extraAsset18,
    '/course-practice/frontend/v_mn.svg': extraAsset19,
    '/course-practice/frontend/v_sb.svg': extraAsset20,
    '/course-practice/frontend/v_pp.svg': extraAsset21,
    '/course-practice/frontend/v_cb.svg': extraAsset22,
    '/course-practice/frontend/v_dd.svg': extraAsset23,
    '/flashcards/course-characters/ana/image.webp': extraAsset24,
    '/flashcards/course-characters/kim/image.webp': extraAsset25,
  },
}
export default prepared
