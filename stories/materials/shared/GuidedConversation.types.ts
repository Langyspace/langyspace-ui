import type { ReactNode } from 'react'

export type GuidedConversationMode = 'model' | 'rehearse' | 'independent'

export interface GuidedConversationTurn {
  id: string
  partner: string
  partnerLine: string
  avatarUrl?: string
  cue: string
  support: readonly string[]
}

export interface GuidedConversationLabels {
  switcher: string
  model: string
  rehearse: string
  independent: string
  previous: string
  next: string
  turn: string
  of: string
  learner: string
  support: string
  hideSupport: string
}

/** A model, short supported exchanges and an unscripted transfer on one screen. */
export interface GuidedConversationProps {
  children: ReactNode
  turns: readonly [GuidedConversationTurn, ...GuidedConversationTurn[]]
  rehearsalInstruction: string
  independentInstruction: string
  labels?: Partial<GuidedConversationLabels>
  defaultMode?: GuidedConversationMode
  /** Consumers can stop a model player rendered in the page heading. */
  onModeChange?: (mode: GuidedConversationMode) => void
}

export type GuidedConversationContent = Omit<
  GuidedConversationProps,
  'children' | 'defaultMode' | 'onModeChange'
>
