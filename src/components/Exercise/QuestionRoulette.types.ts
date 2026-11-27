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
  /** One to eight nonempty topics. All remaining questions have equal drawing probability. */
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
