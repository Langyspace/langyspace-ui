import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface OralReviewQuestion {
  id: string
  level: string
  prompt: ReactNode
  example?: ReactNode
}
export interface OralReviewProps extends ComponentPropsWithRef<'section'> {
  questions: readonly OralReviewQuestion[]
  ratings: Readonly<Record<string, number>>
  onRate: (id: string, stars: 1 | 2 | 3) => void
  revealedIds?: readonly string[]
  onReveal?: (id: string) => void
  disabled?: boolean
  labels?: Partial<{
    show: string
    hide: string
    rating: string
    empty: string
  }>
}
export interface OralReviewPart {
  id: string
  label: string
  score: number
  maximum: number
}
export interface OralReviewResultProps extends ComponentPropsWithRef<'section'> {
  parts: readonly OralReviewPart[]
  result: ReactNode
  completedQuestions: number
  totalQuestions: number
  studentName: string
  teacherName: string
  date: string
  notes: string
  onFieldChange: (
    field: 'studentName' | 'teacherName' | 'date' | 'notes',
    value: string,
  ) => void
  onExport: () => void
  onClear: () => void
  exporting?: boolean
  status?: ReactNode
  labels?: Partial<{
    student: string
    teacher: string
    date: string
    notes: string
    download: string
    clear: string
    stars: string
  }>
}
