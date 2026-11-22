import type { ReactNode } from 'react'
import type { SlidePageProps } from '../../../src/components/Slide/SlidePage.types'
import type { PreparedRecording } from '../../../src/internal/useRecordedAudio.types'
export interface TrialPreviewDialogue {
  title: string
  subtitle: string
  lines: readonly { id: string; who: string; en: string; pt: string }[]
  questions: readonly { id: string; prompt: string; answer: string }[]
}
export interface TrialPreviewConversationProps {
  active: boolean
  dialogue: TrialPreviewDialogue
  recordings: readonly PreparedRecording[]
}
export interface TrialPreviewLessonProps {
  initialPageId?: string
  materialKey: string
  storageKey?: string
  title: string
  level: string
  vocabulary: {
    title: string
    instruction: string
    columns?: SlidePageProps['columns']
    width?: SlidePageProps['width']
    render: (active: boolean) => ReactNode
  }
  dialogue: TrialPreviewDialogue
  recordings: readonly PreparedRecording[]
  freeConversationInstruction: string
}
