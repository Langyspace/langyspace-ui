export type RecordedConversationId =
  | 'TrialA1:s3'
  | 'A201:s6'
  | 'B201:s6'
  | 'B201:s62'
  | 'TrialB1:s3'
  | 'TrialB2:s3'

export type RecordedConversationStatus =
  'idle' | 'loading' | 'playing' | 'paused' | 'ended' | 'error'

export interface RecordedConversationTurn {
  readonly id: string
  readonly text: string
  readonly speaker: string
  readonly src: string
  readonly sha256: string
  readonly voiceId: string
  readonly durationSeconds: number
}

export interface RecordedConversationDefinition {
  readonly id: RecordedConversationId
  readonly title: string
  readonly revision: string
  readonly turns: readonly RecordedConversationTurn[]
}

export interface RecordedConversationState {
  status: RecordedConversationStatus
  currentId?: string
  error: string
}

export interface RecordedDialoguePlaybackProps {
  conversationId: RecordedConversationId
  active: boolean
}
