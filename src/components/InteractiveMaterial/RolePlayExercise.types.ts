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
  labels?: Partial<{
    show: string
    hide: string
    steps: string
    progress: string
  }>
}
