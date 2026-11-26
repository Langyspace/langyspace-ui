import type { PreparedPractice } from '../Practice/Practice.types'
import { homeworkMediaImages } from '../Practice/homeworkMedia131'
import { devStudyRecordings } from './DevStudy131.recordings'
import source from './DevStudy131.practice.json'
import atlas from './assets/vocabulary-atlas131.webp'
import kim from '../Practice/assets/characters/kim.webp'
import owen from '../Practice/assets/characters/owen-harris.webp'
import niamh from '../Practice/assets/characters/niamh-murphy.webp'

/** Preview and provisioning share this exact authored data; links stay disabled until readback. */
const prepared: PreparedPractice = {
  data: source as PreparedPractice['data'],
  recordings: devStudyRecordings,
  images: {
    ...homeworkMediaImages('extra-dev-first-day'),
    '/flashcards-transparent/course-practice/dev-track131/f6b0896d83f2e58fc1cbb97a860c3948f086069b943102d3ca273b4177cdc154/image.webp':
      atlas,
    '/flashcards/course-characters/kim/image.webp': kim,
    '/flashcards/course-characters/owen-harris/image.webp': owen,
    '/flashcards/course-characters/niamh-murphy/image.webp': niamh,
  },
}
export default prepared
