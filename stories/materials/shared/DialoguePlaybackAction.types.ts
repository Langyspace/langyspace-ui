import type { RecordedConversationStatus } from './RecordedDialoguePlayback.types'

export interface DialoguePlaybackActionProps {
  context: string
  status: RecordedConversationStatus
  disabled?: boolean
  describedBy?: string
  onClick: () => void
}
