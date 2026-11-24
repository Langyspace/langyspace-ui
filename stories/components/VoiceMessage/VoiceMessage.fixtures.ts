import type {
  VoiceMessageExerciseProps,
  VoiceMessageQuestion,
} from '../../../src/components/VoiceMessage/VoiceMessageExercise.types'
import { kim } from '../../materials/shared/characterPortraits'
import source from './assets/kim-demo.mp3'

export const contact = { name: 'Kim', avatarUrl: kim, status: 'online' }
export const audio = {
  id: 'a1-01-listening',
  src: source,
  transcript:
    'Hi! How are you? I’m really tired, and I’m also hungry! But I’m happy!',
  duration: 9,
  timestamp: '19:41',
}
export const questions: readonly VoiceMessageQuestion[] = [
  {
    id: 'tired',
    prompt: 'Is Kim tired?',
    choices: [
      { id: 'yes', label: 'Yes, she is.' },
      { id: 'no', label: 'No, she isn’t.' },
    ],
  },
  {
    id: 'hungry',
    prompt: 'Is Kim hungry?',
    choices: [
      { id: 'yes', label: 'Yes, she is.' },
      { id: 'no', label: 'No, she isn’t.' },
    ],
  },
  {
    id: 'angry',
    prompt: 'Is Kim angry?',
    choices: [
      { id: 'yes', label: 'Yes, she is.' },
      { id: 'no', label: 'No, she isn’t.' },
    ],
  },
]
export const initial: VoiceMessageExerciseProps = {
  contact,
  greeting: { text: 'Hi! How are you?', timestamp: '19:40' },
  audio,
  questions,
  onAnswer: () => undefined,
}
