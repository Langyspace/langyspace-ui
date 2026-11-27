import type { PreparedPractice } from '../Practice.types'
import { devRecordings } from '../../DevFirstDay/DevFirstDay.recordings'
import source from '../../DevFirstDay/DevFirstDay.content.json'
import homeworkVocabulary from '../../DevFirstDay/homework-vocabulary95.json'
import { devHomeworkRecordings } from '../../DevFirstDay/DevHomework.recordings'
import kim from '../assets/characters/kim.webp'
import { homeworkCardMedia, homeworkMediaImages } from '../homeworkMedia131'
const translations = [
  'Você poderia repetir?',
  'Você poderia me dar acesso ao repositório?',
  'O que deve acontecer quando a pessoa clicar em Sign in?',
  'Estou impedida de avançar porque ainda não tenho acesso',
  'O prazo é sexta-feira. Isso continua correto?',
  'Obrigada pelos comentários. Vou atualizar a tarefa',
]
import region131Asset0 from '../assets/homework131/regionExports/region-9f3888bc87d968c2caad3fc6dfa4b9b7b3f1ae8635348e8a730219eca88b5d67.webp'
import region131Asset1 from '../assets/homework131/regionExports/region-f4a76a667cde17e810d03b8b57bd66c66801f0a139c845af6f4fca9e0ef847cb.webp'
import region131Asset2 from '../assets/homework131/regionExports/region-4c14bc6c0f359c4b6d5a9904d599adcd2c05503032b1aa7c16818e08b079acfc.webp'
import region131Asset3 from '../assets/homework131/regionExports/region-dddd49dd32876e93f3a8c8f67c0a127324f7fc45fc48245cdcdbff300786d79a.webp'
import region131Asset4 from '../assets/homework131/regionExports/region-ca84cca5e06ead37ebfdfeaed978487578978731838899c38cd5288010055539.webp'
import region131Asset5 from '../assets/homework131/regionExports/region-b6b3058c790346d347a6adb7ffa58f376ba31a76cc2d5cea141f5d2b46390fc2.webp'
const wholeRegionImages131: Readonly<Record<string, string>> = {
  'V.0':
    '/flashcards-transparent/course-practice/homework-media131/5d3038f82ff3a10e03d978419c7a3395801c55ddfd4d5bf42cdf3876a2189ccd/image.webp',
  'HW.17':
    '/flashcards-transparent/course-practice/homework-media131/5d3038f82ff3a10e03d978419c7a3395801c55ddfd4d5bf42cdf3876a2189ccd/image.webp',
  'V.1':
    '/flashcards-transparent/course-practice/homework-media131/fe38e5974a450a95a6c539a09bc5e327041f4b793709cdb601a0ab8634250be5/image.webp',
  'V.2':
    '/flashcards-transparent/course-practice/homework-media131/af024f0045bcbe7e8ca82050503581455a91d448a755907b1765204c9923315e/image.webp',
  'V.3':
    '/flashcards-transparent/course-practice/homework-media131/bd6d4d08ac9e42ad4a2d6a728fd5d026f5eab053a6afe618e526d6ecf15c6456/image.webp',
  'V.4':
    '/flashcards-transparent/course-practice/homework-media131/adf5f9c558233c54961ae8d2104208c29cd266734f9d502303fff86176da2905/image.webp',
  'V.5':
    '/flashcards-transparent/course-practice/homework-media131/7c5ca63718143557b6f58265ac3675e690f37525470f3383778afdd1be9b9a1a/image.webp',
}
const prepared: PreparedPractice = {
  data: {
    key: source.materialKey,
    code: 'DEV.03',
    homeworkCopy: {
      title: 'Primeiro dia no time',
      first: 'Estudar o vocabulário de trabalho e tecnologia nos flashcards',
      shadowing:
        'Ouvir e repetir as frases para pedir ajuda e combinar entregas',
      voice:
        'Mandar um áudio em inglês para a teacher contando qual tela você está desenvolvendo, o que está bloqueando o trabalho e de que ajuda precisa',
    },
    title: source.title,
    publishedEnvironments: ['staging', 'production'],
    first: {
      kind: 'flashcards',
      id: 'dev-first-day-flashcards',
      cards: [
        ...source.vocabulary.map((item, index) => ({
          id: item.id,
          word: item.word,
          translation: item.translation,
          example: item.example,
          exampleTranslation: item.exampleTranslation,
          visualLabel: item.word,
          ...homeworkCardMedia(source.materialKey, item.word),
          audioId: item.id,
          backAudioId: index === 0 ? 'ACCOUNT.EX.0' : 'EX.' + index,
        })),
        ...homeworkVocabulary.map((item) => ({
          ...item,
          visualLabel: item.word,
          ...homeworkCardMedia(source.materialKey, item.word),
        })),
      ].map((card) => {
        const imageSrc = wholeRegionImages131[card.id]
        if (!imageSrc) return card
        const exportedCard = { ...card, imageSrc }
        delete exportedCard.imageRegion
        return exportedCard
      }),
    },
    shadowing: {
      id: 'dev-first-day-shadowing',
      speakers: [
        {
          id: 'kim',
          name: 'Kim',
          avatarUrl: '/flashcards/course-characters/kim/image.webp',
          accentLabel: 'American English',
        },
      ],
      phrases: source.shadowing.map((item, index) => ({
        id: item.id,
        speakerId: 'kim',
        displayText: item.text,
        translation: translations[index]!,
      })),
    },
    voice: {
      prompt:
        'Tell your teacher which screen you are building, explain one blocker and ask for the help you need',
      duration: '30–45 seconds',
      starters: ['I’m working on…', 'I’m blocked because…', 'Could you…?'],
      closing: 'Send your teacher one clear update',
    },
  },
  recordings: [...devRecordings, ...devHomeworkRecordings],
  images: {
    '/flashcards-transparent/course-practice/homework-media131/5d3038f82ff3a10e03d978419c7a3395801c55ddfd4d5bf42cdf3876a2189ccd/image.webp':
      region131Asset0,
    '/flashcards-transparent/course-practice/homework-media131/fe38e5974a450a95a6c539a09bc5e327041f4b793709cdb601a0ab8634250be5/image.webp':
      region131Asset1,
    '/flashcards-transparent/course-practice/homework-media131/af024f0045bcbe7e8ca82050503581455a91d448a755907b1765204c9923315e/image.webp':
      region131Asset2,
    '/flashcards-transparent/course-practice/homework-media131/bd6d4d08ac9e42ad4a2d6a728fd5d026f5eab053a6afe618e526d6ecf15c6456/image.webp':
      region131Asset3,
    '/flashcards-transparent/course-practice/homework-media131/adf5f9c558233c54961ae8d2104208c29cd266734f9d502303fff86176da2905/image.webp':
      region131Asset4,
    '/flashcards-transparent/course-practice/homework-media131/7c5ca63718143557b6f58265ac3675e690f37525470f3383778afdd1be9b9a1a/image.webp':
      region131Asset5,
    ...homeworkMediaImages(source.materialKey),
    '/flashcards/course-characters/kim/image.webp': kim,
  },
}
export default prepared
