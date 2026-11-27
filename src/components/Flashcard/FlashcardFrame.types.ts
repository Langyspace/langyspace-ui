import type { ComponentPropsWithRef } from 'react'

export type FlashcardFrameProps = ComponentPropsWithRef<'section'> & {
  /** Full practice session sizing, shared with the Student portal. Default preserves content embeds. */
  layout?: 'content' | 'session'
}
