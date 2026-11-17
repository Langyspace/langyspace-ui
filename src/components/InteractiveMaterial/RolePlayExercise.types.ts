import type { ComponentPropsWithRef, ReactNode } from 'react'
export interface RolePlayStep {
  id: string
  label: ReactNode
}
export interface RolePlayExerciseProps extends ComponentPropsWithRef<'section'> {
  situation: ReactNode
  image?: { src: string; alt: string }
  roles?: readonly string[]
  support?: readonly string[]
  supportVisible?: boolean
  onSupportToggle?: () => void
  steps: readonly RolePlayStep[]
  completedIds: readonly string[]
  onStepToggle: (id: string) => void
  /** Consumer-owned summary or task information before the checklist. */
  tracker?: ReactNode
  density?: 'regular' | 'compact'
  /** Plain scene with support beside the checklist and an outlined next step. */
  presentation?: 'default' | 'tracker'
  labels?: Partial<{
    show: string
    hide: string
    steps: string
    progress: string
    joiner: string
  }>
}
