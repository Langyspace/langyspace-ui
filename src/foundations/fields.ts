import { css } from 'styled-components'
import { theme } from './theme/theme'

export type FieldControlSize = 'sm' | 'md' | 'lg'

export interface FieldControlStyleProps {
  $invalid: boolean
  $size: FieldControlSize
}

const heights = {
  lg: theme.sizes.field.lg,
  md: theme.sizes.field.md,
  sm: theme.sizes.field.sm,
} satisfies Record<FieldControlSize, string>

export const fieldControlStyles = css<FieldControlStyleProps>`
  width: 100%;
  min-width: 0;
  --lsui-field-size-height: ${({ $size }) => heights[$size]};
  min-height: var(--lsui-field-control-height, var(--lsui-field-size-height));
  border: 1px solid
    ${({ $invalid }) =>
      $invalid ? theme.colors.feedback.danger : theme.semantic.border.default};
  border-radius: ${theme.radius.control};
  outline: none;
  background: ${theme.colors.palette.white};
  color: ${theme.colors.text.primary};
  font: inherit;
  font-size: ${theme.typography.fontSize.sm};
  padding-right: ${theme.spacing[3]};
  padding-left: ${theme.spacing[3]};
  transition:
    color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    background-color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    border-color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    box-shadow ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard};

  &:hover:not(:disabled):not([aria-invalid='true']) {
    border-color: ${theme.semantic.border.strong};
  }

  &:focus-visible {
    border-color: ${({ $invalid }) =>
      $invalid ? theme.colors.feedback.danger : theme.semantic.border.strong};
    box-shadow: ${theme.shadows.focusHalo};
  }

  &:disabled {
    background: ${theme.semantic.background.muted};
    color: ${theme.colors.text.muted};
    cursor: default;
  }

  &:read-only:not(:disabled) {
    background: ${theme.semantic.background.surfaceSubtle};
  }

  &::placeholder {
    color: ${theme.semantic.foreground.placeholder};
  }
`
