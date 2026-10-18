// Volume2 geometry from Lucide (ISC); see THIRD_PARTY_NOTICES.md.
import * as Styled from './FlashcardAudioButton.styles'

import type { ComponentPropsWithRef } from 'react'

export interface FlashcardAudioButtonProps extends Omit<
  ComponentPropsWithRef<'button'>,
  'children' | 'type' | 'aria-label'
> {
  label: string
  placement?: 'image' | 'term'
  playing?: boolean
}

export function FlashcardAudioButton({
  label,
  placement = 'image',
  playing = false,
  ...props
}: FlashcardAudioButtonProps) {
  const iconSize = placement === 'term' ? 14 : 17

  return (
    <Styled.Button
      {...props}
      aria-busy={playing || undefined}
      aria-label={label}
      $placement={placement}
      $playing={playing}
      type="button"
    >
      <svg
        aria-hidden="true"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
        <path d="M16 9a5 5 0 0 1 0 6" />
        <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
      </svg>
    </Styled.Button>
  )
}
