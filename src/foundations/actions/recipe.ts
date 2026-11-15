import { css } from 'styled-components'
import type { ExecutionContext } from 'styled-components'
import type { ActionRecipeStyleProps, ActionSize, ActionVariant } from './types'
import { theme as defaultTheme } from '../theme/theme'
import { resolveButtonsTheme, resolveTheme } from '../theme/resolveTheme'

export const actionSizeHeights = {
  sm: defaultTheme.sizes.control.sm,
  md: defaultTheme.sizes.control.md,
  lg: defaultTheme.sizes.control.lg,
} satisfies Record<ActionSize, string>

const sizeStyles = (context: ExecutionContext & ActionRecipeStyleProps) => {
  const size = resolveButtonsTheme(context).sizes[context.$size]
  return css`
    min-height: ${size.minHeight};
    padding-top: ${size.paddingY};
    padding-bottom: ${size.paddingY};
    gap: ${size.gap};
    padding-right: ${size.paddingX};
    padding-left: ${size.paddingX};
    font-size: ${size.fontSize};
  `
}

const compactSizeStyles = {
  sm: css``,
  md: css`
    padding-right: ${(context) => resolveTheme(context).spacing?.[4] ?? defaultTheme.spacing[4]};
    padding-left: ${(context) => resolveTheme(context).spacing?.[4] ?? defaultTheme.spacing[4]};
    font-size: ${(context) => resolveTheme(context).typography?.fontSize.sm ?? defaultTheme.typography.fontSize.sm};
  `,
  lg: css`
    padding-right: ${(context) => resolveTheme(context).spacing?.[5] ?? defaultTheme.spacing[5]};
    padding-left: ${(context) => resolveTheme(context).spacing?.[5] ?? defaultTheme.spacing[5]};
  `,
} satisfies Record<ActionSize, ReturnType<typeof css>>

const filledVariant =
  (variant: 'primary' | 'secondary' | 'brand') =>
  (context: ExecutionContext) => {
    const buttons = resolveButtonsTheme(context)
    const value = buttons[variant]
    return css`
      border: ${value.border};
      border-color: ${value.borderColor};
      color: ${value.color};
      background-color: ${value.background};
      box-shadow: ${value.shadow};
      &:hover:not(:disabled):not([aria-disabled='true']) {
        ${
          variant === 'secondary' &&
          css`
            color: ${buttons.secondary.colorHover};
          `
        }
        border-color: ${variant === 'secondary' ? buttons.secondary.borderColorHover : value.backgroundHover};
        background-color: ${value.backgroundHover};
        box-shadow: ${value.shadowHover};
        transform: ${buttons.base.hoverTransform};
      }
      &:active:not(:disabled):not([aria-disabled='true']) {
        background-color: ${value.backgroundActive};
        transform: ${buttons.base.activeTransform};
      }
    `
  }

const feedbackVariant =
  (variant: 'danger' | 'success') => (context: ExecutionContext) => {
    const provided = resolveTheme(context)
    const danger = variant === 'danger'
    const color = danger
      ? (provided.colors?.feedback.danger ??
        defaultTheme.colors.feedback.danger)
      : (provided.semantic?.status.success.foreground ??
        defaultTheme.semantic.status.success.foreground)
    const active = danger
      ? (provided.semantic?.status.danger.foreground ??
        defaultTheme.semantic.status.danger.foreground)
      : (provided.semantic?.foreground.successStrong ??
        defaultTheme.semantic.foreground.successStrong)
    const buttons = resolveButtonsTheme(context)
    return css`
      border-color: ${color};
      color: ${provided.colors?.palette.white ?? defaultTheme.colors.palette.white};
      background-color: ${color};
      box-shadow: none;
      &:hover:not(:disabled):not([aria-disabled='true']) {
        border-color: ${active};
        background-color: ${active};
        box-shadow: ${provided.shadows?.sm ?? defaultTheme.shadows.sm};
        transform: ${buttons.base.hoverTransform};
      }
      &:active:not(:disabled):not([aria-disabled='true']) {
        border-color: ${active};
        background-color: ${active};
        transform: ${buttons.base.activeTransform};
      }
    `
  }

const actionTransition = (context: ExecutionContext) => {
  const provided = resolveTheme(context)
  const duration =
    provided.transitions?.duration.fast ??
    defaultTheme.transitions.duration.fast
  const easing =
    provided.transitions?.easing.standard ??
    defaultTheme.transitions.easing.standard
  return [
    'background-color',
    'border-color',
    'box-shadow',
    'color',
    'transform',
  ]
    .map((property) => `${property} ${duration} ${easing}`)
    .join(', ')
}

const variantStyles = {
  primary: filledVariant('primary'),
  secondary: filledVariant('secondary'),
  tertiary: css`
    border-color: transparent;
    color: ${(context) => resolveButtonsTheme(context).tertiary.color};
    background-color: ${(context) => resolveButtonsTheme(context).tertiary.background};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: ${(context) => resolveButtonsTheme(context).tertiary.backgroundHover};
      transform: ${(context) => resolveButtonsTheme(context).base.hoverTransform};
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      background-color: ${(context) => resolveButtonsTheme(context).tertiary.backgroundActive};
      transform: ${(context) => resolveButtonsTheme(context).base.activeTransform};
    }
  `,
  brand: filledVariant('brand'),
  danger: feedbackVariant('danger'),
  success: feedbackVariant('success'),
  inverse: css`
    border-color: transparent;
    color: ${(context) => resolveTheme(context).colors?.palette.white ?? defaultTheme.colors.palette.white};
    background-color: transparent;
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${(context) => resolveTheme(context).colors?.palette.white ?? defaultTheme.colors.palette.white};
      color: ${(context) => resolveTheme(context).colors?.palette.neutral[900] ?? defaultTheme.colors.palette.neutral[900]};
      background-color: ${(context) => resolveTheme(context).colors?.palette.white ?? defaultTheme.colors.palette.white};
      transform: ${(context) => resolveButtonsTheme(context).base.hoverTransform};
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${(context) => resolveTheme(context).colors?.palette.neutral[200] ?? defaultTheme.colors.palette.neutral[200]};
      color: ${(context) => resolveTheme(context).colors?.palette.neutral[900] ?? defaultTheme.colors.palette.neutral[900]};
      background-color: ${(context) => resolveTheme(context).colors?.palette.neutral[200] ?? defaultTheme.colors.palette.neutral[200]};
      transform: ${(context) => resolveButtonsTheme(context).base.activeTransform};
    }
  `,
} satisfies Record<
  ActionVariant,
  | ReturnType<typeof css>
  | ((context: ExecutionContext) => ReturnType<typeof css>)
>

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
  border-radius: ${({ $shape, ...context }) => resolveTheme(context).radius?.[$shape === 'pill' ? 'pill' : 'xl'] ?? defaultTheme.radius[$shape === 'pill' ? 'pill' : 'xl']};
  appearance: none;
  font: inherit;
  && {
    font-family: ${(context) => resolveTheme(context).typography?.fontFamily.heading ?? defaultTheme.typography.fontFamily.heading};
  }
  font-weight: ${(context) => resolveButtonsTheme(context).base.fontWeight};
  line-height: ${(context) => resolveButtonsTheme(context).base.lineHeight};
  overflow-wrap: anywhere;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: ${actionTransition};

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
  ${sizeStyles}
  ${({ $density, $size }) => $density === 'compact' && compactSizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}

  &:focus-visible {
    outline: none;
    box-shadow: ${(context) => resolveTheme(context).shadows?.focusHalo ?? defaultTheme.shadows.focusHalo};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      transform: none;
    }
  }
`
