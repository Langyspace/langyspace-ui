import { css } from 'styled-components'
import type { ActionRecipeStyleProps, ActionSize, ActionVariant } from './types'
import { theme as defaultTheme } from '../theme/theme'
import type { LangyTheme } from '../theme/theme'

export const actionSizeHeights = {
  sm: defaultTheme.sizes.control.sm,
  md: defaultTheme.sizes.control.md,
  lg: defaultTheme.sizes.control.lg,
} satisfies Record<ActionSize, string>

const sizeStyles = {
  sm: css`
    min-height: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).sizes.sm.minHeight};
    gap: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).sizes.sm.gap};
    padding-right: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).sizes.sm.paddingX};
    padding-left: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).sizes.sm.paddingX};
    font-size: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).sizes.sm.fontSize};
  `,
  md: css`
    min-height: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).sizes.md.minHeight};
    gap: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).sizes.md.gap};
    padding-right: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).sizes.md.paddingX};
    padding-left: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).sizes.md.paddingX};
    font-size: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).sizes.md.fontSize};
  `,
  lg: css`
    min-height: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).sizes.lg.minHeight};
    gap: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).sizes.lg.gap};
    padding-right: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).sizes.lg.paddingX};
    padding-left: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).sizes.lg.paddingX};
    font-size: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).sizes.lg.fontSize};
  `,
} satisfies Record<ActionSize, ReturnType<typeof css>>

const compactSizeStyles = {
  sm: css``,
  md: css`
    padding-right: ${({ theme }) => ((theme as Partial<LangyTheme>).spacing ?? defaultTheme.spacing)[4]};
    padding-left: ${({ theme }) => ((theme as Partial<LangyTheme>).spacing ?? defaultTheme.spacing)[4]};
    font-size: ${({ theme }) => ((theme as Partial<LangyTheme>).typography ?? defaultTheme.typography).fontSize.sm};
  `,
  lg: css`
    padding-right: ${({ theme }) => ((theme as Partial<LangyTheme>).spacing ?? defaultTheme.spacing)[5]};
    padding-left: ${({ theme }) => ((theme as Partial<LangyTheme>).spacing ?? defaultTheme.spacing)[5]};
  `,
} satisfies Record<ActionSize, ReturnType<typeof css>>

const variantStyles = {
  primary: css`
    border: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).primary.border};
    color: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).primary.color};
    background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).primary.background};
    box-shadow: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).primary.shadow};
    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).primary.backgroundHover};
      background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).primary.backgroundHover};
      box-shadow: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).primary.shadowHover};
      transform: translateY(-1px);
    }
    &:active:not(:disabled):not([aria-disabled='true']) {
      background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).primary.backgroundActive};
      transform: translateY(0);
    }
  `,
  secondary: css`
    border: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).secondary.border};
    color: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).secondary.color};
    background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).secondary.background};
    box-shadow: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).secondary.shadow};
    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${({ theme }) => ((theme as Partial<LangyTheme>).colors ?? defaultTheme.colors).palette.neutral[500]};
      background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).secondary.backgroundHover};
      box-shadow: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).secondary.shadowHover};
      transform: translateY(-1px);
    }
    &:active:not(:disabled):not([aria-disabled='true']) {
      background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).secondary.backgroundActive};
      transform: translateY(0);
    }
  `,
  tertiary: css`
    border-color: transparent;
    color: ${({ theme }) => ((theme as Partial<LangyTheme>).colors ?? defaultTheme.colors).palette.neutral[900]};
    background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).ghost.background};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).colors ?? defaultTheme.colors).palette.neutral[100]};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).colors ?? defaultTheme.colors).palette.neutral[200]};
      transform: translateY(0);
    }
  `,
  brand: css`
    border: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).brand.border};
    color: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).brand.color};
    background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).brand.background};
    box-shadow: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).brand.shadow};
    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).brand.backgroundHover};
      background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).brand.backgroundHover};
      box-shadow: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).brand.shadowHover};
      transform: translateY(-1px);
    }
    &:active:not(:disabled):not([aria-disabled='true']) {
      background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).brand.backgroundActive};
      transform: translateY(0);
    }
  `,
  danger: css`
    border-color: ${({ theme }) => ((theme as Partial<LangyTheme>).colors ?? defaultTheme.colors).feedback.danger};
    color: ${({ theme }) => ((theme as Partial<LangyTheme>).colors ?? defaultTheme.colors).palette.white};
    background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).colors ?? defaultTheme.colors).feedback.danger};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${({ theme }) => ((theme as Partial<LangyTheme>).semantic ?? defaultTheme.semantic).status.danger.foreground};
      background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).semantic ?? defaultTheme.semantic).status.danger.foreground};
      box-shadow: ${({ theme }) => ((theme as Partial<LangyTheme>).shadows ?? defaultTheme.shadows).sm};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${({ theme }) => ((theme as Partial<LangyTheme>).semantic ?? defaultTheme.semantic).status.danger.foreground};
      background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).semantic ?? defaultTheme.semantic).status.danger.foreground};
      transform: translateY(0);
    }
  `,
  success: css`
    border-color: ${({ theme }) => ((theme as Partial<LangyTheme>).semantic ?? defaultTheme.semantic).status.success.foreground};
    color: ${({ theme }) => ((theme as Partial<LangyTheme>).colors ?? defaultTheme.colors).palette.white};
    background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).semantic ?? defaultTheme.semantic).status.success.foreground};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${({ theme }) => ((theme as Partial<LangyTheme>).semantic ?? defaultTheme.semantic).foreground.successStrong};
      background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).semantic ?? defaultTheme.semantic).foreground.successStrong};
      box-shadow: ${({ theme }) => ((theme as Partial<LangyTheme>).shadows ?? defaultTheme.shadows).sm};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${({ theme }) => ((theme as Partial<LangyTheme>).semantic ?? defaultTheme.semantic).foreground.successStrong};
      background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).semantic ?? defaultTheme.semantic).foreground.successStrong};
      transform: translateY(0);
    }
  `,
  inverse: css`
    border-color: transparent;
    color: ${({ theme }) => ((theme as Partial<LangyTheme>).colors ?? defaultTheme.colors).palette.white};
    background-color: transparent;
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${({ theme }) => ((theme as Partial<LangyTheme>).colors ?? defaultTheme.colors).palette.white};
      color: ${({ theme }) => ((theme as Partial<LangyTheme>).colors ?? defaultTheme.colors).palette.neutral[900]};
      background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).colors ?? defaultTheme.colors).palette.white};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${({ theme }) => ((theme as Partial<LangyTheme>).colors ?? defaultTheme.colors).palette.neutral[200]};
      color: ${({ theme }) => ((theme as Partial<LangyTheme>).colors ?? defaultTheme.colors).palette.neutral[900]};
      background-color: ${({ theme }) => ((theme as Partial<LangyTheme>).colors ?? defaultTheme.colors).palette.neutral[200]};
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
  border-radius: ${({ $shape, theme }) => ((theme as Partial<LangyTheme>).radius ?? defaultTheme.radius)[$shape === 'pill' ? 'pill' : 'xl']};
  appearance: none;
  font: inherit;
  && {
    font-family: ${({ theme }) => ((theme as Partial<LangyTheme>).typography ?? defaultTheme.typography).fontFamily.heading};
  }
  font-weight: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).base.fontWeight};
  line-height: ${({ theme }) => ((theme as Partial<LangyTheme>).buttons ?? defaultTheme.buttons).base.lineHeight};
  overflow-wrap: anywhere;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color
      ${({ theme }) => ((theme as Partial<LangyTheme>).transitions ?? defaultTheme.transitions).duration.fast}
      ${({ theme }) => ((theme as Partial<LangyTheme>).transitions ?? defaultTheme.transitions).easing.standard},
    border-color
      ${({ theme }) => ((theme as Partial<LangyTheme>).transitions ?? defaultTheme.transitions).duration.fast}
      ${({ theme }) => ((theme as Partial<LangyTheme>).transitions ?? defaultTheme.transitions).easing.standard},
    box-shadow
      ${({ theme }) => ((theme as Partial<LangyTheme>).transitions ?? defaultTheme.transitions).duration.fast}
      ${({ theme }) => ((theme as Partial<LangyTheme>).transitions ?? defaultTheme.transitions).easing.standard},
    color
      ${({ theme }) => ((theme as Partial<LangyTheme>).transitions ?? defaultTheme.transitions).duration.fast}
      ${({ theme }) => ((theme as Partial<LangyTheme>).transitions ?? defaultTheme.transitions).easing.standard},
    transform
      ${({ theme }) => ((theme as Partial<LangyTheme>).transitions ?? defaultTheme.transitions).duration.fast}
      ${({ theme }) => ((theme as Partial<LangyTheme>).transitions ?? defaultTheme.transitions).easing.standard};

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
    box-shadow: ${({ theme }) => ((theme as Partial<LangyTheme>).shadows ?? defaultTheme.shadows).focusHalo};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      transform: none;
    }
  }
`
