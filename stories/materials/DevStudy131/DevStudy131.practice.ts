import type { PreparedPractice } from '../Practice/Practice.types'
import { homeworkMediaImages } from '../Practice/homeworkMedia131'
import { devStudyRecordings } from './DevStudy131.recordings'
import source from './DevStudy131.practice.json'
import atlas from './assets/vocabulary-atlas131.webp'
import kim from '../Practice/assets/characters/kim.webp'
import owen from '../Practice/assets/characters/owen-harris.webp'
import niamh from '../Practice/assets/characters/niamh-murphy.webp'

/** Preview and provisioning share this exact authored data; links stay disabled until readback. */
import region131Asset0 from '../Practice/assets/homework131/regionExports/region-9f3888bc87d968c2caad3fc6dfa4b9b7b3f1ae8635348e8a730219eca88b5d67.webp'
import region131Asset1 from '../Practice/assets/homework131/regionExports/region-dddd49dd32876e93f3a8c8f67c0a127324f7fc45fc48245cdcdbff300786d79a.webp'
import region131Asset2 from '../Practice/assets/homework131/regionExports/region-b6b3058c790346d347a6adb7ffa58f376ba31a76cc2d5cea141f5d2b46390fc2.webp'
const prepared: PreparedPractice = {
  data: source as PreparedPractice['data'],
  recordings: devStudyRecordings,
  images: {
    '/flashcards-transparent/course-practice/homework-media131/5d3038f82ff3a10e03d978419c7a3395801c55ddfd4d5bf42cdf3876a2189ccd/image.webp':
      region131Asset0,
    '/flashcards-transparent/course-practice/homework-media131/bd6d4d08ac9e42ad4a2d6a728fd5d026f5eab053a6afe618e526d6ecf15c6456/image.webp':
      region131Asset1,
    '/flashcards-transparent/course-practice/homework-media131/7c5ca63718143557b6f58265ac3675e690f37525470f3383778afdd1be9b9a1a/image.webp':
      region131Asset2,
    ...homeworkMediaImages('extra-dev-first-day'),
    '/flashcards-transparent/course-practice/dev-track131/f6b0896d83f2e58fc1cbb97a860c3948f086069b943102d3ca273b4177cdc154/image.webp':
      atlas,
    '/flashcards/course-characters/kim/image.webp': kim,
    '/flashcards/course-characters/owen-harris/image.webp': owen,
    '/flashcards/course-characters/niamh-murphy/image.webp': niamh,
  },
}
export default prepared
