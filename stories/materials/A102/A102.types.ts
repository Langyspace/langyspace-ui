import type { SpeechProps } from '../shared/Lesson.types'

export interface ChoiceProps extends SpeechProps {
  item: {
    t: string
    o: readonly string[]
    a: number
    im?: string
    alt?: string
    id?: string
    now?: string
    why?: Readonly<Record<number, string | undefined>>
  }
}

export interface PromptProps {
  items: readonly { q: string; a?: string }[]
}

export interface ModelProps {
  question: string
  models: readonly string[]
  cue?: string
  alt?: string
}
