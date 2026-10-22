import { IconButton } from './IconButton'
import type { OverlayCloseButtonProps } from './OverlayCloseButton.types'
import * as Styled from './OverlayCloseButton.styles'

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
      <Styled.Glyph aria-hidden="true" />
    </IconButton>
  )
}
