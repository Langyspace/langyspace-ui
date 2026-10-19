import { IconButton } from './IconButton'

import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const Glyph = styled.span`
  position: relative;
  display: block;
  width: 1rem;
  height: 1rem;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.75rem;
    height: 1.5px;
    border-radius: ${token.radiusPill};
    background: currentColor;
    content: '';
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`

export interface OverlayCloseButtonProps {
  disabled: boolean
  label: string
  onClick: () => void
}

export function OverlayCloseButton({
  disabled,
  label,
  onClick,
}: OverlayCloseButtonProps) {
  return (
    <IconButton
      aria-label={label}
      disabled={disabled}
      shape="rounded"
      size="sm"
      variant="subtle"
      onClick={onClick}
    >
      <Glyph aria-hidden="true" />
    </IconButton>
  )
}
