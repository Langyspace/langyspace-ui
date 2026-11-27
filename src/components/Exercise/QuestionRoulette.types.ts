import type { ComponentPropsWithRef } from 'react'

export interface QuestionRouletteQuestion {
  /** Unique within its topic; identity stays stable when the text changes. */
  id: string
  prompt: string
  /** Optional speaking strategy, never a fixed answer to a personal question. */
  hint?: string
}

export interface QuestionRouletteTopic {
  id: string
  /** A short label for the wheel, e.g. Work, Travel or Choices. */
  label: string
  /** Optional relative sector area and topic draw weight. Repeat weights on opposite topics for a mirrored wheel. */
  weight?: number
  questions: readonly QuestionRouletteQuestion[]
}

export interface QuestionRouletteSelection {
  topic: QuestionRouletteTopic
  question: QuestionRouletteQuestion
  drawNumber: number
}

export interface QuestionRouletteLabels {
  spin: string
  spinning: string
  newRound: string
  ready: string
  unavailable: string
  progress: string
  hint: string
  hideHint: string
}

export interface QuestionRouletteProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'children'
> {
  /** One to eight nonempty topics. Without explicit topic weights, remaining questions are drawn uniformly. */
  topics: readonly QuestionRouletteTopic[]
  /** Disable when leaving a material page; cancels a pending draw without consuming it. */
  disabled?: boolean
  labels?: Partial<QuestionRouletteLabels>
  /** Called once after the final question is revealed, never for animation frames. */
  onDraw?: (selection: QuestionRouletteSelection) => void
}

export interface RouletteEntry {
  key: string
  topic: QuestionRouletteTopic
  question: QuestionRouletteQuestion
  topicIndex: number
}

export interface RouletteRoundState {
  used: ReadonlySet<string>
  selected?: RouletteEntry
  pending?: RouletteEntry
  rotation: number
  settledRotation: number
  hint: boolean
}

export type RouletteRoundAction =
  | { type: 'spin'; entry: RouletteEntry; rotation: number }
  | {
      type: 'reveal'
      entry: RouletteEntry
      used: ReadonlySet<string>
      rotation: number
    }
  | { type: 'cancel' }
  | { type: 'toggleHint' }

export interface RouletteSegment {
  topic: QuestionRouletteTopic
  topicIndex: number
  count: number
  start: number
  end: number
  center: number
}
