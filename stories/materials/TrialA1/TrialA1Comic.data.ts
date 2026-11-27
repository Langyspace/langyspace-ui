import type { ComicPanel } from '../../../src/components/Exercise/ComicRolePlay.types'
import meeting from './assets/comic-01-meeting.webp'
import introductions from './assets/comic-02-introductions.webp'
import interests from './assets/comic-03-interests.webp'
import goodbye from './assets/comic-04-goodbye.webp'

export const comicTitle = 'A new friend at the park'
export const comicInstruction =
  'You meet someone in the park. Use the pictures to create your conversation'
/** Optional examples, never a script or a key to personal preferences. */
export const comicPanels: readonly ComicPanel[] = [
  {
    id: 'meeting',
    imageUrl: meeting,
    imageAlt: 'Two people meet in a park and wave hello',
    turns: [
      {
        id: 'hello',
        participantId: 'learner',
        hint: 'Cumprimente',
        model: 'Hi!',
      },
      {
        id: 'ask-name',
        participantId: 'teacher',
        hint: 'Pergunte o nome',
        model: 'Hi! What’s your name?',
      },
    ],
  },
  {
    id: 'introductions',
    imageUrl: introductions,
    imageAlt: 'They point to themselves as they introduce each other',
    turns: [
      {
        id: 'your-name',
        participantId: 'learner',
        hint: 'Apresente-se',
        model: 'I’m … Nice to meet you!',
      },
      {
        id: 'other-name',
        participantId: 'teacher',
        hint: 'Diga seu nome',
        model: 'I’m … Nice to meet you too!',
      },
    ],
  },
  {
    id: 'interests',
    imageUrl: interests,
    imageAlt:
      'One person holds a soccer ball, the other shows headphones as they talk about interests',
    turns: [
      {
        id: 'ask-likes',
        participantId: 'learner',
        hint: 'Pergunte sobre um gosto',
        model: 'Do you like music?',
      },
      {
        id: 'answer-likes',
        participantId: 'teacher',
        hint: 'Responda sobre você',
        model: 'Yes, I do / No, I don’t',
      },
    ],
  },
  {
    id: 'goodbye',
    imageUrl: goodbye,
    imageAlt: 'They start walking away and turn back to wave goodbye',
    turns: [
      {
        id: 'say-bye',
        participantId: 'learner',
        hint: 'Despeça-se',
        model: 'Bye! Nice to meet you!',
      },
      {
        id: 'reply-bye',
        participantId: 'teacher',
        hint: 'Responda à despedida',
        model: 'Bye! See you!',
      },
    ],
  },
]
