import type { ReactNode } from 'react'

export interface LessonOpeningReview {
  title: string
  instruction?: ReactNode
  content: ReactNode
}
export type LessonOpeningProps = { materialKey: string } & (
  | {
      closing?: false
      review?: LessonOpeningReview
      children?: never
      reviewTitle?: never
      instruction?: never
    }
  | {
      closing: true
      review?: never
      reviewTitle: string
      instruction?: ReactNode
      children: ReactNode
    }
)
