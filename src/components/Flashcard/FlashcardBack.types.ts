import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface FlashcardBackProps extends Omit<
  ComponentPropsWithRef<'div'>,
  'children'
> {
  term: ReactNode
  translation: ReactNode
  phonetic?: ReactNode
  example?: ReactNode
}
