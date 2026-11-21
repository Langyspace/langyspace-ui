import type { ReactNode } from 'react'
import type { SlidePageProps } from '../../../src/components/Slide/SlidePage.types'

export interface MaterialLessonPage {
  id: string
  label: string
  eyebrow?: string
  title: ReactNode
  instruction?: ReactNode
  width?: SlidePageProps['width']
  tone?: SlidePageProps['tone']
  lead?: ReactNode
  content: ReactNode
}

export interface MaterialLessonDefinition {
  code: string
  title: string
  goal?: string
  pages: readonly MaterialLessonPage[]
}

export interface LessonDeckProps {
  lesson: MaterialLessonDefinition
  initialPageId?: string
  learnerName?: string
  studentPortalOrigin?: string
}

export interface LessonCoverProps {
  code: string
  title: string
  goal?: string
}
