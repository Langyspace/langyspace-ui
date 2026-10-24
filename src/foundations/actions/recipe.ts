import { css } from 'styled-components'
import type {
  ActionRecipeStyleProps,
  ActionShape,
  ActionSize,
  ActionVariant,
} from './types'
import { theme } from '../theme/theme'

const shapeRadii = {
  pill: theme.radius.pill,
  rounded: theme.radius.xl,
} satisfies Record<ActionShape, string>

export const actionSizeHeights = {
  sm: theme.sizes.control.sm,
  md: theme.sizes.control.md,
  lg: theme.sizes.control.lg,
} satisfies Record<ActionSize, string>

const sizeStyles = {
  sm: css`
    min-height: ${actionSizeHeights.sm};
    gap: ${theme.spacing[2]};
    padding-right: ${theme.spacing[3]};
    padding-left: ${theme.spacing[3]};
    font-size: ${theme.typography.fontSize.sm};
  `,
  md: css`
    min-height: ${actionSizeHeights.md};
    gap: ${theme.spacing[2]};
    padding-right: ${theme.spacing[5]};
    padding-left: ${theme.spacing[5]};
    font-size: ${theme.typography.fontSize.md};
  `,
  lg: css`
    min-height: ${actionSizeHeights.lg};
    gap: ${theme.spacing[3]};
    padding-right: ${theme.spacing[6]};
    padding-left: ${theme.spacing[6]};
    font-size: ${theme.typography.fontSize.md};
  `,
} satisfies Record<ActionSize, ReturnType<typeof css>>

const compactSizeStyles = {
  sm: css``,
  md: css`
    padding-right: ${theme.spacing[4]};
    padding-left: ${theme.spacing[4]};
    font-size: ${theme.typography.fontSize.sm};
  `,
  lg: css`
    padding-right: ${theme.spacing[5]};
    padding-left: ${theme.spacing[5]};
  `,
} satisfies Record<ActionSize, ReturnType<typeof css>>

const variantStyles = {
  primary: css`
    border-color: ${theme.colors.palette.neutral[900]};
    color: ${theme.colors.palette.white};
    background-color: ${theme.colors.palette.neutral[900]};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${theme.colors.palette.neutral[800]};
      background-color: ${theme.colors.palette.neutral[800]};
      box-shadow: ${theme.shadows.sm};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${theme.colors.palette.neutral[900]};
      background-color: ${theme.colors.palette.neutral[900]};
      transform: translateY(0);
    }
  `,
  secondary: css`
    border-color: ${theme.colors.palette.neutral[400]};
    color: ${theme.colors.palette.neutral[900]};
    background-color: ${theme.colors.palette.white};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${theme.colors.palette.neutral[500]};
      background-color: ${theme.colors.palette.neutral[100]};
      box-shadow: ${theme.shadows.xs};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      background-color: ${theme.colors.palette.neutral[200]};
      transform: translateY(0);
    }
  `,
  tertiary: css`
    border-color: transparent;
    color: ${theme.colors.palette.neutral[900]};
    background-color: transparent;
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: ${theme.colors.palette.neutral[100]};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      background-color: ${theme.colors.palette.neutral[200]};
      transform: translateY(0);
    }
  `,
  brand: css`
    border-color: ${theme.semantic.foreground.brand};
    color: ${theme.colors.palette.white};
    background-color: ${theme.semantic.foreground.brand};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${theme.semantic.foreground.brandHover};
      background-color: ${theme.semantic.foreground.brandHover};
      box-shadow: ${theme.shadows.sm};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${theme.semantic.foreground.brandHover};
      background-color: ${theme.semantic.foreground.brandHover};
      transform: translateY(0);
    }
  `,
  danger: css`
    border-color: ${theme.colors.feedback.danger};
    color: ${theme.colors.palette.white};
    background-color: ${theme.colors.feedback.danger};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${theme.semantic.status.danger.foreground};
      background-color: ${theme.semantic.status.danger.foreground};
      box-shadow: ${theme.shadows.sm};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${theme.semantic.status.danger.foreground};
      background-color: ${theme.semantic.status.danger.foreground};
      transform: translateY(0);
    }
  `,
  success: css`
    border-color: ${theme.semantic.status.success.foreground};
    color: ${theme.colors.palette.white};
    background-color: ${theme.semantic.status.success.foreground};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${theme.semantic.foreground.successStrong};
      background-color: ${theme.semantic.foreground.successStrong};
      box-shadow: ${theme.shadows.sm};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${theme.semantic.foreground.successStrong};
      background-color: ${theme.semantic.foreground.successStrong};
      transform: translateY(0);
    }
  `,
  inverse: css`
    border-color: transparent;
    color: ${theme.colors.palette.white};
    background-color: transparent;
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${theme.colors.palette.white};
      color: ${theme.colors.palette.neutral[900]};
      background-color: ${theme.colors.palette.white};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${theme.colors.palette.neutral[200]};
      color: ${theme.colors.palette.neutral[900]};
      background-color: ${theme.colors.palette.neutral[200]};
      transform: translateY(0);
    }
  `,
} satisfies Record<ActionVariant, ReturnType<typeof css>>

export const actionRecipe = css<ActionRecipeStyleProps>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-width: 0;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-style: solid;
  border-width: 1px;
  border-radius: ${({ $shape }) => shapeRadii[$shape]};
  appearance: none;
  font: inherit;
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.snug};
  overflow-wrap: anywhere;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    border-color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    box-shadow ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    transform ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard};

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
  ${({ $size }) => sizeStyles[$size]}
  ${({ $density, $size }) => $density === 'compact' && compactSizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}

  &:focus-visible {
    outline: none;
    box-shadow: ${theme.shadows.focusHalo};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      transform: none;
    }
  }
`
