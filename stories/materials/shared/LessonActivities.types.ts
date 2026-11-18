import type { ReactNode } from 'react'

export interface PronunciationActivityProps {
  choices: readonly [string, string]
  translations: readonly [string, string]
  tip: string
}
export interface GrammarActivityProps {
  rows: readonly {
    id: string
    label: string
    word: string
    example: string
    translation?: string
  }[]
  explanation?: ReactNode
  afterReveal?: ReactNode
  columns?: { label: string; word: string; example: string }
}
export interface ReviewActivityProps {
  items: readonly {
    sentence: string
    correct: boolean
    answer: string
    why?: string
  }[]
  ownPrompt?: string
}
export interface HomeworkActivityProps {
  items: readonly { title: string; description: string }[]
  message: string
  studentPortalOrigin?: string
}
export interface ListeningActivityProps {
  contact?: string
  avatarUrl?: string
  message: string
  translation?: string
  questions: readonly { id: string; text: string; correct: 'Yes' | 'No' }[]
  replyPrompt: string
  support: readonly string[]
  greeting?: string
  timestamp?: string
}
