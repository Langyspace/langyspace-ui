import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface ConversationMessage {
  id: string
  side: 'incoming' | 'outgoing'
  content: ReactNode
  timeLabel?: string
}
export interface ConversationChoice {
  id: string
  label: ReactNode
}
export interface BranchingConversationProps extends ComponentPropsWithRef<'section'> {
  contact: { name: string; imageUrl?: string; status?: string }
  messages: readonly ConversationMessage[]
  choices?: readonly ConversationChoice[]
  onChoice?: (id: string) => void
  mode?: 'choices' | 'free'
  draft?: string
  onDraftChange?: (value: string) => void
  onSend?: () => void
  onRestart?: () => void
  ended?: boolean
  disabled?: boolean
  status?: ReactNode
  labels?: Partial<{
    send: string
    message: string
    choose: string
    restart: string
    history: string
  }>
}
