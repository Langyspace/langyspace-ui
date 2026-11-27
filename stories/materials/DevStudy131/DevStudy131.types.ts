import type { useRecordedAudio } from '../../../src/internal/useRecordedAudio'

export interface DevStudy131LessonProps {
  initialPageId?: string
}
export interface DevStudyOralTurn {
  id: string
  question: string
  cue: string
  hint: string
  model: string
}
export interface DevStudyOralPracticeProps {
  turns: readonly DevStudyOralTurn[]
}
export type DevStudySpeech = ReturnType<typeof useRecordedAudio>
export interface DevStudyRecordedProps {
  speech: DevStudySpeech
}
export interface DevStudyReferenceProps {
  kind: 'week' | 'project' | 'problem' | 'mentor' | 'portfolio' | 'reply'
}
