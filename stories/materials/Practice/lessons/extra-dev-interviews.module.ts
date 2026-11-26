import type { PreparedPractice } from '../Practice.types'
import source from '../../DevInterviews131/DevInterviews131.content.json'
import { interviewRecordings } from '../../DevInterviews131/DevInterviews131.recordings'
import atlas from '../../DevInterviews131/assets/vocabulary-atlas131.webp'
import kim from '../assets/characters/kim.webp'
import priya from '../assets/characters/priya-nair.webp'
import ruby from '../assets/characters/ruby-bennett.webp'

// The first six cells name the targets. Later abstract targets reuse an honestly related
// interview context, rather than claiming an illustration is a literal definition.
const cells = [0, 1, 2, 3, 4, 5, 2, 4, 4, 1, 4, 4, 0, 4, 4, 5, 4, 0, 0, 1]
const atlasPath =
  '/flashcards-transparent/course-practice/dev-interviews131/753fae71b1bbd1270719506455a1c81b17add288e66281030e0afbe6b8fcc086/image.webp'
const prepared: PreparedPractice = {
  data: {
    key: source.materialKey,
    code: source.code,
    title: source.title,
    publishedEnvironments: ['staging'],
    homeworkCopy: {
      title: 'Entrevistas para desenvolvedores',
      first: 'Revisar as vinte expressões de entrevista nos flashcards',
      shadowing:
        'Ouvir e repetir as seis frases para explicar sua experiência e fazer perguntas',
      voice:
        'Mandar um áudio em inglês para a teacher apresentando um projeto, sua contribuição e um desafio que resolveu',
    },
    first: {
      kind: 'flashcards',
      id: source.homework.flashcardsId,
      cards: source.homeworkVocabulary.map((item, index) => ({
        ...item,
        imageSrc: atlasPath,
        imageRegion: {
          columns: 3,
          rows: 2,
          column: cells[index]! % 3,
          row: Math.floor(cells[index]! / 3),
          sourceAspectRatio: 3 / 2,
        },
      })),
    },
    shadowing: {
      id: source.homework.shadowingId,
      speakers: [
        {
          id: 'Kim',
          name: 'Kim',
          avatarUrl: '/flashcards/course-characters/kim/image.webp',
          accentLabel: 'American English',
        },
        {
          id: 'Priya',
          name: 'Priya',
          avatarUrl: '/flashcards/course-characters/priya/image.webp',
          accentLabel: 'Indian English',
        },
        {
          id: 'Ruby',
          name: 'Ruby',
          avatarUrl: '/flashcards/course-characters/ruby/image.webp',
          accentLabel: 'Australian English',
        },
      ],
      phrases: source.shadowing.map((item) => ({
        id: item.id,
        speakerId: item.speaker,
        displayText: item.text,
        translation: item.translation,
      })),
    },
    voice: {
      prompt:
        'Introduce one real or practice project. Explain its purpose, your own contribution and one challenge you handled',
      duration: '45–60 seconds',
      starters: [
        'My project helps…',
        'I was responsible for…',
        'One challenge was…',
      ],
      closing: 'Send your teacher one clear project introduction',
    },
  },
  recordings: interviewRecordings,
  images: {
    [atlasPath]: atlas,
    '/flashcards/course-characters/kim/image.webp': kim,
    '/flashcards/course-characters/priya/image.webp': priya,
    '/flashcards/course-characters/ruby/image.webp': ruby,
  },
}
export default prepared
