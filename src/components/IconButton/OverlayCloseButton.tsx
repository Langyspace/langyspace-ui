import { IconButton } from './IconButton'
import type { OverlayCloseButtonProps } from './OverlayCloseButton.types'
import * as Styled from './OverlayCloseButton.styles'

export function OverlayCloseButton({
  children,
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
      {children ?? <Styled.Glyph aria-hidden="true" />}
    </IconButton>
  )
}
