import type { ComponentPropsWithRef } from 'react'

export type QuizBlankProps = Omit<
  ComponentPropsWithRef<'span'>,
  'children' | 'aria-hidden'
>
