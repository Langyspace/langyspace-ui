import type { SceneHotspot } from '../../../src/components/InteractiveMaterial/SceneExplorer.types'
import type { VocabularyItem } from '../../../src/components/Exercise/VocabularyGrid.types'
import type { GrammarTableProps } from '../../../src/components/InteractiveMaterial/GrammarTable.types'
import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'
import type { useRecordedAudio } from '../../../src/internal/useRecordedAudio'
import type { ReactNode } from 'react'
import type { SlideColumns } from '../../../src/foundations/layout/slideColumns'

export interface ReviewedTurn {
  id: string
  speaker: string
  text: string
  /** Exact original recording text when display punctuation differs. */
  audioText?: string
  translation?: string
  parts?: readonly (string | { id: string; answer: string })[]
  cue?: string
  hint?: string
}
export interface ReviewedPrompt {
  id: string
  prompt: string
  /** Factual checks have an answer; open practice intentionally has no fixed answer. */
  answer?: string
  cue?: string
  hint?: string
}
interface PageBase {
  id: string
  title: string
  eyebrow: string
  instruction: string
  minutes: number
  /** Authored semantic span for custom compositions; defaults remain unchanged. */
  columns?: SlideColumns
  /** A continued model is counted across its explicitly linked parts. */
  dialogueGroup?: string
  /** Factual checks and short replies are not fictional two-person conversations. */
  vocabularyRole?: 'introduction' | 'reference'
  referenceReason?: string
  questionPurpose?: 'conversation' | 'comprehension' | 'review' | 'response'
  /** A standalone diagram shares the scene/cover height-aware layout bound. */
  mediaAspectRatio?: number
  /** Prepared audio alongside an authored listening prompt. */
  titleAudio?: readonly { id: string; text: string }[]
}
export type ReviewedPage = PageBase &
  (
    | { kind: 'prompts' | 'questions'; items: readonly ReviewedPrompt[] }
    | {
        kind: 'vocabulary'
        items: readonly (VocabularyItem & {
          audioId?: string
          audioText?: string
        })[]
        isolated?: boolean
        alignHeading?: boolean
      }
    | {
        kind: 'words' | 'calendar'
        items: readonly {
          id: string
          clue: string
          word: string
          example: string
        }[]
      }
    | {
        kind: 'scene' | 'scene-vocabulary'
        image: { src: string; alt: string; aspectRatio?: number }
        context?: string
        hotspots: readonly (SceneHotspot & {
          audioId: string
          audioText: string
        })[]
        connections?: readonly { from: string; to: string }[]
      }
    | {
        kind: 'grammar'
        layout?: GrammarTableProps['layout']
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
        audioText?: string
        audioId?: string
        contact?: { name: string; avatarUrl?: string }
        greeting?: string
        greetingTimestamp?: string
        voiceTimestamp?: string
        image?: { src: string; alt: string }
        items: readonly ReviewedPrompt[]
      }
    | { kind: 'activity' }
    | {
        kind: 'video'
        video: {
          videoId: string
          startSeconds: number
          endSeconds: number
          title: string
          credit?: string
        }
        items: readonly ReviewedPrompt[]
      }
    | {
        kind: 'image-choice'
        choiceGroup: string
        image: { src: string; alt: string }
        imageBadge?: { src: string; alt: string }
        options: readonly string[]
        correctIndex: number
      }
    | {
        kind: 'source'
        author: string
        subject: string
        paragraphs: readonly string[]
      }
    | {
        kind: 'introductions'
        image: { src: string; alt: string }
        choices: readonly {
          id: string
          label: string
          xPercent: number
          yPercent: number
          facts: readonly { label: string; value: string }[]
          introduction: string
          detail: string
          hint: string
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
  /** Retain an existing material's local Notes namespace during migration. */
  notesStorageKey?: string
  /** Authored activities compose library components; no additional visual skin. */
  activities?: Readonly<
    Record<
      string,
      ReactNode | ((context: ReviewedActivityContext) => ReactNode)
    >
  >
  freeConversationInstruction?: string
}
export type ReviewedSpeech = ReturnType<typeof useRecordedAudio>
export interface ReviewedActivityContext {
  active: boolean
  speech: ReviewedSpeech
}
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
  activity?: ReactNode
  imageChoiceCounter?: string
}
export interface ReviewedClipRecord {
  id: string
  text: string
  file: string
}
