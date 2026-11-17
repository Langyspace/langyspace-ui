import { css } from 'styled-components'
import { theme } from './theme/theme'
import { resolveTheme } from './theme/resolveTheme'

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
    ${(p) =>
      p.$invalid
        ? (resolveTheme(p).colors?.feedback.danger ??
          theme.colors.feedback.danger)
        : (resolveTheme(p).semantic?.border.default ??
          theme.semantic.border.default)};
  border-radius: ${theme.radius.control};
  outline: none;
  background: ${(p) => resolveTheme(p).colors?.surface.canvas ?? theme.colors.palette.white};
  color: ${(p) => resolveTheme(p).colors?.text.primary ?? theme.colors.text.primary};
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
    border-color: ${(p) => resolveTheme(p).semantic?.border.strong ?? theme.semantic.border.strong};
  }

  &:focus-visible {
    border-color: ${(p) =>
      p.$invalid
        ? (resolveTheme(p).colors?.feedback.danger ??
          theme.colors.feedback.danger)
        : (resolveTheme(p).semantic?.border.strong ??
          theme.semantic.border.strong)};
    box-shadow: ${(p) => resolveTheme(p).shadows?.focusHalo ?? theme.shadows.focusHalo};
  }

  &:disabled {
    background: ${(p) => resolveTheme(p).semantic?.background.muted ?? theme.semantic.background.muted};
    color: ${(p) => resolveTheme(p).colors?.text.muted ?? theme.colors.text.muted};
    cursor: default;
  }

  &:read-only:not(:disabled) {
    background: ${(p) => resolveTheme(p).semantic?.background.surfaceSubtle ?? theme.semantic.background.surfaceSubtle};
  }

  &::placeholder {
    color: ${(p) => resolveTheme(p).semantic?.foreground.placeholder ?? theme.semantic.foreground.placeholder};
  }
`
