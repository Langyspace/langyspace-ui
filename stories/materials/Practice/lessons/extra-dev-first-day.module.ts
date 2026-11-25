import type { PreparedPractice } from '../Practice.types'
import { devRecordings } from '../../DevFirstDay/DevFirstDay.recordings'
import source from '../../DevFirstDay/DevFirstDay.content.json'
import homeworkVocabulary from '../../DevFirstDay/homework-vocabulary95.json'
import { devHomeworkRecordings } from '../../DevFirstDay/DevHomework.recordings'
import { characterPortrait } from '../../shared/characterPortraits'
const translations = [
  'Você poderia repetir?',
  'Você poderia me dar acesso ao repositório?',
  'O que deve acontecer quando a pessoa clicar em Sign in?',
  'Estou impedida de avançar porque ainda não tenho acesso',
  'O prazo é sexta-feira. Isso continua correto?',
  'Obrigada pelos comentários. Vou atualizar a tarefa',
]
const prepared: PreparedPractice = {
  data: {
    key: source.materialKey,
    code: 'DEV.02',
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
          audioId: item.id,
          backAudioId: index === 0 ? 'ACCOUNT.EX.0' : 'EX.' + index,
        })),
        ...homeworkVocabulary,
      ],
    },
    shadowing: {
      id: 'dev-first-day-shadowing',
      speakers: [
        {
          id: 'kim',
          name: 'Kim',
          avatarUrl: characterPortrait('Kim')!,
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
  images: {},
}
export default prepared
