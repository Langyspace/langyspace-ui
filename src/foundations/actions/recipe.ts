import { css } from 'styled-components'
import type { ActionRecipeStyleProps, ActionSize, ActionVariant } from './types'
import { theme as defaultTheme } from '../theme/theme'
import { resolveTheme } from '../theme/resolveTheme'

export const actionSizeHeights = {
  sm: defaultTheme.sizes.control.sm,
  md: defaultTheme.sizes.control.md,
  lg: defaultTheme.sizes.control.lg,
} satisfies Record<ActionSize, string>

const sizeStyles = {
  sm: css`
    min-height: ${(context) => resolveTheme(context).buttons.sizes.sm.minHeight};
    padding-top: ${(context) => resolveTheme(context).buttons.sizes.sm.paddingY};
    padding-bottom: ${(context) => resolveTheme(context).buttons.sizes.sm.paddingY};
    gap: ${(context) => resolveTheme(context).buttons.sizes.sm.gap};
    padding-right: ${(context) => resolveTheme(context).buttons.sizes.sm.paddingX};
    padding-left: ${(context) => resolveTheme(context).buttons.sizes.sm.paddingX};
    font-size: ${(context) => resolveTheme(context).buttons.sizes.sm.fontSize};
  `,
  md: css`
    min-height: ${(context) => resolveTheme(context).buttons.sizes.md.minHeight};
    padding-top: ${(context) => resolveTheme(context).buttons.sizes.md.paddingY};
    padding-bottom: ${(context) => resolveTheme(context).buttons.sizes.md.paddingY};
    gap: ${(context) => resolveTheme(context).buttons.sizes.md.gap};
    padding-right: ${(context) => resolveTheme(context).buttons.sizes.md.paddingX};
    padding-left: ${(context) => resolveTheme(context).buttons.sizes.md.paddingX};
    font-size: ${(context) => resolveTheme(context).buttons.sizes.md.fontSize};
  `,
  lg: css`
    min-height: ${(context) => resolveTheme(context).buttons.sizes.lg.minHeight};
    padding-top: ${(context) => resolveTheme(context).buttons.sizes.lg.paddingY};
    padding-bottom: ${(context) => resolveTheme(context).buttons.sizes.lg.paddingY};
    gap: ${(context) => resolveTheme(context).buttons.sizes.lg.gap};
    padding-right: ${(context) => resolveTheme(context).buttons.sizes.lg.paddingX};
    padding-left: ${(context) => resolveTheme(context).buttons.sizes.lg.paddingX};
    font-size: ${(context) => resolveTheme(context).buttons.sizes.lg.fontSize};
  `,
} satisfies Record<ActionSize, ReturnType<typeof css>>

const compactSizeStyles = {
  sm: css``,
  md: css`
    padding-right: ${(context) => resolveTheme(context).spacing[4]};
    padding-left: ${(context) => resolveTheme(context).spacing[4]};
    font-size: ${(context) => resolveTheme(context).typography.fontSize.sm};
  `,
  lg: css`
    padding-right: ${(context) => resolveTheme(context).spacing[5]};
    padding-left: ${(context) => resolveTheme(context).spacing[5]};
  `,
} satisfies Record<ActionSize, ReturnType<typeof css>>

const variantStyles = {
  primary: css`
    border: ${(context) => resolveTheme(context).buttons.primary.border};
    border-color: ${(context) => resolveTheme(context).buttons.primary.borderColor};
    color: ${(context) => resolveTheme(context).buttons.primary.color};
    background-color: ${(context) => resolveTheme(context).buttons.primary.background};
    box-shadow: ${(context) => resolveTheme(context).buttons.primary.shadow};
    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${(context) => resolveTheme(context).buttons.primary.backgroundHover};
      background-color: ${(context) => resolveTheme(context).buttons.primary.backgroundHover};
      box-shadow: ${(context) => resolveTheme(context).buttons.primary.shadowHover};
      transform: ${(context) => resolveTheme(context).buttons.base.hoverTransform};
    }
    &:active:not(:disabled):not([aria-disabled='true']) {
      background-color: ${(context) => resolveTheme(context).buttons.primary.backgroundActive};
      transform: ${(context) => resolveTheme(context).buttons.base.activeTransform};
    }
  `,
  secondary: css`
    border: ${(context) => resolveTheme(context).buttons.secondary.border};
    border-color: ${(context) => resolveTheme(context).buttons.secondary.borderColor};
    color: ${(context) => resolveTheme(context).buttons.secondary.color};
    background-color: ${(context) => resolveTheme(context).buttons.secondary.background};
    box-shadow: ${(context) => resolveTheme(context).buttons.secondary.shadow};
    &:hover:not(:disabled):not([aria-disabled='true']) {
      color: ${(context) => resolveTheme(context).buttons.secondary.colorHover};
      border-color: ${(context) => resolveTheme(context).buttons.secondary.borderColorHover};
      background-color: ${(context) => resolveTheme(context).buttons.secondary.backgroundHover};
      box-shadow: ${(context) => resolveTheme(context).buttons.secondary.shadowHover};
      transform: ${(context) => resolveTheme(context).buttons.base.hoverTransform};
    }
    &:active:not(:disabled):not([aria-disabled='true']) {
      background-color: ${(context) => resolveTheme(context).buttons.secondary.backgroundActive};
      transform: ${(context) => resolveTheme(context).buttons.base.activeTransform};
    }
  `,
  tertiary: css`
    border-color: transparent;
    color: ${(context) => resolveTheme(context).buttons.tertiary.color};
    background-color: ${(context) => resolveTheme(context).buttons.tertiary.background};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: ${(context) => resolveTheme(context).buttons.tertiary.backgroundHover};
      transform: ${(context) => resolveTheme(context).buttons.base.hoverTransform};
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      background-color: ${(context) => resolveTheme(context).buttons.tertiary.backgroundActive};
      transform: ${(context) => resolveTheme(context).buttons.base.activeTransform};
    }
  `,
  brand: css`
    border: ${(context) => resolveTheme(context).buttons.brand.border};
    border-color: ${(context) => resolveTheme(context).buttons.brand.borderColor};
    color: ${(context) => resolveTheme(context).buttons.brand.color};
    background-color: ${(context) => resolveTheme(context).buttons.brand.background};
    box-shadow: ${(context) => resolveTheme(context).buttons.brand.shadow};
    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${(context) => resolveTheme(context).buttons.brand.backgroundHover};
      background-color: ${(context) => resolveTheme(context).buttons.brand.backgroundHover};
      box-shadow: ${(context) => resolveTheme(context).buttons.brand.shadowHover};
      transform: ${(context) => resolveTheme(context).buttons.base.hoverTransform};
    }
    &:active:not(:disabled):not([aria-disabled='true']) {
      background-color: ${(context) => resolveTheme(context).buttons.brand.backgroundActive};
      transform: ${(context) => resolveTheme(context).buttons.base.activeTransform};
    }
  `,
  danger: css`
    border-color: ${(context) => resolveTheme(context).colors.feedback.danger};
    color: ${(context) => resolveTheme(context).colors.palette.white};
    background-color: ${(context) => resolveTheme(context).colors.feedback.danger};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${(context) => resolveTheme(context).semantic.status.danger.foreground};
      background-color: ${(context) => resolveTheme(context).semantic.status.danger.foreground};
      box-shadow: ${(context) => resolveTheme(context).shadows.sm};
      transform: ${(context) => resolveTheme(context).buttons.base.hoverTransform};
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${(context) => resolveTheme(context).semantic.status.danger.foreground};
      background-color: ${(context) => resolveTheme(context).semantic.status.danger.foreground};
      transform: ${(context) => resolveTheme(context).buttons.base.activeTransform};
    }
  `,
  success: css`
    border-color: ${(context) => resolveTheme(context).semantic.status.success.foreground};
    color: ${(context) => resolveTheme(context).colors.palette.white};
    background-color: ${(context) => resolveTheme(context).semantic.status.success.foreground};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${(context) => resolveTheme(context).semantic.foreground.successStrong};
      background-color: ${(context) => resolveTheme(context).semantic.foreground.successStrong};
      box-shadow: ${(context) => resolveTheme(context).shadows.sm};
      transform: ${(context) => resolveTheme(context).buttons.base.hoverTransform};
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${(context) => resolveTheme(context).semantic.foreground.successStrong};
      background-color: ${(context) => resolveTheme(context).semantic.foreground.successStrong};
      transform: ${(context) => resolveTheme(context).buttons.base.activeTransform};
    }
  `,
  inverse: css`
    border-color: transparent;
    color: ${(context) => resolveTheme(context).colors.palette.white};
    background-color: transparent;
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${(context) => resolveTheme(context).colors.palette.white};
      color: ${(context) => resolveTheme(context).colors.palette.neutral[900]};
      background-color: ${(context) => resolveTheme(context).colors.palette.white};
      transform: ${(context) => resolveTheme(context).buttons.base.hoverTransform};
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${(context) => resolveTheme(context).colors.palette.neutral[200]};
      color: ${(context) => resolveTheme(context).colors.palette.neutral[900]};
      background-color: ${(context) => resolveTheme(context).colors.palette.neutral[200]};
      transform: ${(context) => resolveTheme(context).buttons.base.activeTransform};
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
  border-radius: ${({ $shape, ...context }) => resolveTheme(context).radius[$shape === 'pill' ? 'pill' : 'xl']};
  appearance: none;
  font: inherit;
  && {
    font-family: ${(context) => resolveTheme(context).typography.fontFamily.heading};
  }
  font-weight: ${(context) => resolveTheme(context).buttons.base.fontWeight};
  line-height: ${(context) => resolveTheme(context).buttons.base.lineHeight};
  overflow-wrap: anywhere;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color
      ${(context) => resolveTheme(context).transitions.duration.fast}
      ${(context) => resolveTheme(context).transitions.easing.standard},
    border-color ${(context) => resolveTheme(context).transitions.duration.fast}
      ${(context) => resolveTheme(context).transitions.easing.standard},
    box-shadow ${(context) => resolveTheme(context).transitions.duration.fast}
      ${(context) => resolveTheme(context).transitions.easing.standard},
    color ${(context) => resolveTheme(context).transitions.duration.fast}
      ${(context) => resolveTheme(context).transitions.easing.standard},
    transform ${(context) => resolveTheme(context).transitions.duration.fast}
      ${(context) => resolveTheme(context).transitions.easing.standard};

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
    box-shadow: ${(context) => resolveTheme(context).shadows.focusHalo};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      transform: none;
    }
  }
`
