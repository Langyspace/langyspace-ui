import type { SlideDeckProps } from '../../../src/components/Slide/SlideDeck.types'
import type { LessonShellProps } from '../shared/Lesson.types'
export interface WarmUpProps {
  index: number
}
export interface ListeningProps {
  active: boolean
}
export interface WordTableProps {
  grammar?: boolean
  active?: boolean
}

export interface VocabularySectionProps {
  group?: number
  active?: boolean
}

export interface B201ShellProps extends Omit<LessonShellProps, 'pages'> {
  pages: (activeId: string) => SlideDeckProps['pages']
}
