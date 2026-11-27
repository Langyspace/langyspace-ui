import type {
  ReviewedPage,
  ReviewedPrompt,
} from '../shared/ReviewedLesson.types'
import type { RouteMapProps } from '../../../src/components/InteractiveMaterial/RouteMap.types'
export interface CourseOption {
  pictures?: readonly { id: string; label: string; index: number }[]
  map?: CourseActivity['map']
  id: string
  title: string
  facts: readonly { id: string; label: string; value: string }[]
}
export interface CourseActivity {
  questionPurpose?: 'conversation' | 'comprehension' | 'response'
  type:
    | 'facts'
    | 'choices'
    | 'comparison'
    | 'sequence'
    | 'map'
    | 'menu'
    | 'timeline'
    | 'chart'
  title: string
  /** Optional noun/metadata label for the reference, never task instructions. */
  referenceLabel?: string
  vocabulary?: Readonly<Record<string, { id: string; text: string }>>
  image?: string
  pictureGrid?: { columns: number; rows: number; sourceAspectRatio: number }
  pictures?: readonly { id: string; label: string; index: number }[]
  stages?: readonly { id: string; label: string }[]
  facts?: readonly { id: string; label: string; value: string }[]
  options?: readonly CourseOption[]
  questions: readonly ReviewedPrompt[]
  map?: Omit<RouteMapProps, 'onSelect' | 'footer' | 'children'>
  chart?: {
    items: readonly {
      id: string
      label: string
      description: string
      values: readonly number[]
    }[]
  }
  menu?: readonly {
    pictureIndex?: number
    id: string
    label: string
    price: number
    group: 'drink' | 'food'
  }[]
}
export interface CourseLessonData {
  version: number
  code: string
  key: string
  title: string
  goal: string
  notesStorageKey?: string
  freeConversationInstruction: string
  freeConversationMinutes: number
  pages: readonly ReviewedPage[]
  activities: Readonly<Record<string, CourseActivity>>
}
export interface CourseLessonProps {
  materialKey: string
  initialPageId?: string
  learnerName?: string
}

export interface PreparedCourseData {
  data: CourseLessonData
  recordings: readonly import('../../../src/internal/useRecordedAudio.types').PreparedRecording[]
  images: Readonly<Record<string, string>>
}
