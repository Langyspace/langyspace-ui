import type { ComponentPropsWithRef } from 'react'

import { styled } from 'styled-components'
import { Pressable } from '../Pressable'

const Button = styled(Pressable).withConfig({
  componentId: 'lsui-sc-flashcard-flip-button',
})`
  position: absolute;
  inset: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  border-radius: 1.625rem;
  background: transparent;

  &:focus-visible {
    outline: 3px solid #00f2ea52;
    outline-offset: -3px;
  }
`

export interface FlashcardFlipButtonProps extends Omit<
  ComponentPropsWithRef<'button'>,
  'children' | 'type' | 'aria-label'
> {
  label: string
}

export function FlashcardFlipButton({
  label,
  ...props
}: FlashcardFlipButtonProps) {
  return <Button {...props} aria-label={label} type="button" />
}
