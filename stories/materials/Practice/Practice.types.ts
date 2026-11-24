import type { HomeworkVoiceNoteProps } from '../shared/HomeworkVoiceNote.types'
import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'
import type { PictureRegion } from '../../../src/internal/PictureImage.types'
export interface PracticeCard {
  id: string
  word: string
  translation: string
  example: string
  exampleTranslation: string
  imageSrc?: string
  imageRegion?: PictureRegion
  visualLabel: string
  audioId?: string
  backAudioId?: string
}
export interface PracticeQuestion {
  id: string
  prompt: string
  context?: string
  options: readonly { id: string; text: string }[]
  previewOptions?: readonly { id: string; text: string }[]
  correctOptionId: string
  feedback: {
    correct: { title: string; message: string }
    wrong: { title: string; message: string }
  }
}
export interface PracticePhrase {
  id: string
  speakerId: string
  displayText: string
  translation: string
}
export interface CoursePracticeData {
  key: string
  code: string
  title: string
  voice: HomeworkVoiceNoteProps
  /** Only a real published activity receives its Student destination. */
  publishedEnvironments: readonly ('staging' | 'production')[]
  first:
    | { kind: 'flashcards'; id: string; cards: readonly PracticeCard[] }
    | { kind: 'quiz'; id: string; questions: readonly PracticeQuestion[] }
  shadowing: {
    id: string
    phrases: readonly PracticePhrase[]
    speakers: readonly {
      id: string
      name: string
      avatarUrl: string
      accentLabel: string
    }[]
  }
}
export interface PreparedPractice {
  data: CoursePracticeData
  recordings: readonly PreparedRecording[]
  images: Readonly<Record<string, string>>
}
