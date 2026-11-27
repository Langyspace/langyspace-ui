import type { ReactNode } from 'react'
export interface StatementReviewProps {
  items: readonly {
    id: string
    s: string
    ok?: boolean
    a?: string
    why: string
    pre?: string
  }[]
  context?: ReactNode
  labels?: { positive: string; negative: string }
}
