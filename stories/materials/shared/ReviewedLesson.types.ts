import type { SceneHotspot } from '../../../src/components/InteractiveMaterial/SceneExplorer.types'
import type { VocabularyItem } from '../../../src/components/Exercise/VocabularyGrid.types'
import type { GrammarTableProps } from '../../../src/components/InteractiveMaterial/GrammarTable.types'
import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'
import type { useRecordedAudio } from '../../../src/internal/useRecordedAudio'

export interface ReviewedTurn {
  id: string
  speaker: 'Kim' | 'Ana'
  text: string
  translation?: string
  parts?: readonly (string | { id: string; answer: string })[]
  cue?: string
  hint?: string
}
export interface ReviewedPrompt {
  id: string
  prompt: string
  answer: string
}
interface PageBase {
  id: string
  title: string
  eyebrow: string
  instruction: string
  minutes: number
}
export type ReviewedPage = PageBase &
  (
    | { kind: 'prompts'; items: readonly ReviewedPrompt[] }
    | {
        kind: 'vocabulary'
        items: readonly VocabularyItem[]
        isolated?: boolean
      }
    | {
        kind: 'words'
        items: readonly {
          id: string
          clue: string
          word: string
          example: string
        }[]
      }
    | {
        kind: 'scene'
        image: { src: string; alt: string }
        context?: string
        hotspots: readonly (SceneHotspot & {
          audioId: string
          audioText: string
        })[]
        connections?: readonly { from: string; to: string }[]
      }
    | {
        kind: 'grammar'
        rows: GrammarTableProps['rows']
        columns?: GrammarTableProps['columns']
        note?: string
      }
    | {
        kind: 'dialogue'
        lines: readonly ReviewedTurn[]
        questions?: readonly ReviewedPrompt[]
      }
    | {
        kind: 'listening'
        message: string
        greeting?: string
        items: readonly ReviewedPrompt[]
      }
    | {
        kind: 'introductions'
        image: { src: string; alt: string }
        choices: readonly {
          id: string
          label: string
          xPercent: number
          yPercent: number
          introduction: string
          detail: string
        }[]
      }
    | {
        kind: 'roleplay'
        steps: readonly string[]
        image?: { src: string; alt: string }
        lines?: readonly ReviewedTurn[]
        items?: readonly ReviewedPrompt[]
      }
    | {
        kind: 'homework'
        tasks: readonly { title: string; description: string }[]
      }
  )
export interface ReviewedLessonProps {
  code: string
  title: string
  pages: readonly ReviewedPage[]
  recordings: readonly PreparedRecording[]
  initialPageId?: string
  learnerName?: string
}
export type ReviewedSpeech = ReturnType<typeof useRecordedAudio>
export interface ReviewedDialogueProps {
  lines: readonly ReviewedTurn[]
  speech: ReviewedSpeech
  guidance?: boolean
}
export interface ReviewedPageContentProps {
  page: ReviewedPage
  speech: ReviewedSpeech
  active: boolean
  recordings: readonly PreparedRecording[]
}
export interface ReviewedClipRecord {
  id: string
  text: string
  file: string
}
