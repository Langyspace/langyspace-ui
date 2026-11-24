import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface ComicParticipant {
  id: string
  name: string
  avatarUrl?: string
  initials?: string
}
export interface ComicTurn {
  id: string
  participantId: string
  hint?: ReactNode
  model?: ReactNode
}
export interface ComicPanel {
  id: string
  imageUrl: string
  imageAlt: string
  /** Reading order follows the participants' left-to-right positions in the artwork. */
  turns: readonly ComicTurn[]
}
export interface ComicGuidance {
  hintedTurnIds: readonly string[]
  revealedTurnIds: readonly string[]
  /** Undefined clears this layer after its final available turn. */
  onRevealHint: (turnId?: string) => void
  onRevealModel: (turnId?: string) => void
}
export interface ComicRolePlayProps extends Omit<
  ComponentPropsWithRef<'section'>,
  'children'
> {
  panels: readonly ComicPanel[]
  /** Same order and identity positions across every panel. */
  participants: readonly ComicParticipant[]
  guidance?: ComicGuidance
  onParticipantImageError?: (participantId: string, imageUrl: string) => void
}
