import type { ComponentPropsWithRef, ReactNode } from 'react'

export interface FlashcardWordProps extends ComponentPropsWithRef<'div'> {
  phonetic?: ReactNode
  example?: ReactNode
}
