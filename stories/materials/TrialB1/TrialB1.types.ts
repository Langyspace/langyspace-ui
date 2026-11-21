import type { SceneHotspot } from '../../../src/components/InteractiveMaterial/SceneExplorer.types'
export interface TrialB1Content {
  revision: string
  title: string
  level: string
  minutes: number
  reviewScope: readonly string[]
  scene: {
    id: string
    title: string
    subtitle: string
    imageAlt: string
    imageWidth: number
    imageHeight: number
    hotspots: readonly (Omit<SceneHotspot, 'prompt'> & {
      audioId: string
      audioText: string
    })[]
  }
  dialogue: {
    id: string
    title: string
    subtitle: string
    lines: readonly { id: string; who: 'Ana' | 'Kim'; en: string; pt: string }[]
    questions: readonly { id: string; prompt: string; answer: string }[]
  }
  freeConversationInstruction: string
}
export interface TrialB1LessonProps {
  initialPageId?: string
}
