import { css } from 'styled-components'
import * as token from '../tokenValues'
import type {
  ActionRecipeStyleProps,
  ActionShape,
  ActionSize,
  ActionVariant,
} from './types'

const shapeRadii = {
  pill: token.radiusPill,
  rounded: token.radiusRounded,
} satisfies Record<ActionShape, string>

export const actionSizeHeights = {
  sm: token.controlHeightSm,
  md: token.controlHeightMd,
  lg: token.controlHeightLg,
} satisfies Record<ActionSize, string>

const sizeStyles = {
  sm: css`
    min-height: ${actionSizeHeights.sm};
    gap: ${token.spacing2};
    padding-right: ${token.spacing3};
    padding-left: ${token.spacing3};
    font-size: ${token.typographyFontSizeSm};
  `,
  md: css`
    min-height: ${actionSizeHeights.md};
    gap: ${token.spacing2};
    padding-right: ${token.spacing5};
    padding-left: ${token.spacing5};
    font-size: ${token.typographyFontSizeMd};
  `,
  lg: css`
    min-height: ${actionSizeHeights.lg};
    gap: ${token.spacing3};
    padding-right: ${token.spacing6};
    padding-left: ${token.spacing6};
    font-size: ${token.typographyFontSizeMd};
  `,
} satisfies Record<ActionSize, ReturnType<typeof css>>

const compactSizeStyles = {
  sm: css``,
  md: css`
    padding-right: ${token.spacing4};
    padding-left: ${token.spacing4};
    font-size: ${token.typographyFontSizeSm};
  `,
  lg: css`
    padding-right: ${token.spacing5};
    padding-left: ${token.spacing5};
  `,
} satisfies Record<ActionSize, ReturnType<typeof css>>

const variantStyles = {
  primary: css`
    border-color: ${token.colorNeutral950};
    color: ${token.colorNeutral0};
    background-color: ${token.colorNeutral950};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${token.colorNeutral900};
      background-color: ${token.colorNeutral900};
      box-shadow: ${token.shadowRaised};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${token.colorNeutral950};
      background-color: ${token.colorNeutral950};
      transform: translateY(0);
    }
  `,
  secondary: css`
    border-color: ${token.colorNeutral300};
    color: ${token.colorNeutral950};
    background-color: ${token.colorNeutral0};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${token.colorNeutral500};
      background-color: ${token.colorNeutral50};
      box-shadow: ${token.shadowSubtle};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      background-color: ${token.colorNeutral100};
      transform: translateY(0);
    }
  `,
  tertiary: css`
    border-color: transparent;
    color: ${token.colorNeutral950};
    background-color: transparent;
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      background-color: ${token.colorNeutral50};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      background-color: ${token.colorNeutral100};
      transform: translateY(0);
    }
  `,
  brand: css`
    border-color: ${token.colorBrandDefault};
    color: ${token.colorNeutral0};
    background-color: ${token.colorBrandDefault};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${token.colorBrandHover};
      background-color: ${token.colorBrandHover};
      box-shadow: ${token.shadowRaised};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${token.colorBrandHover};
      background-color: ${token.colorBrandHover};
      transform: translateY(0);
    }
  `,
  danger: css`
    border-color: ${token.colorFeedbackDanger};
    color: ${token.colorNeutral0};
    background-color: ${token.colorFeedbackDanger};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${token.colorFeedbackDangerStrong};
      background-color: ${token.colorFeedbackDangerStrong};
      box-shadow: ${token.shadowRaised};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${token.colorFeedbackDangerStrong};
      background-color: ${token.colorFeedbackDangerStrong};
      transform: translateY(0);
    }
  `,
  success: css`
    border-color: ${token.colorFeedbackSuccess};
    color: ${token.colorNeutral0};
    background-color: ${token.colorFeedbackSuccess};
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${token.colorFeedbackSuccessStrong};
      background-color: ${token.colorFeedbackSuccessStrong};
      box-shadow: ${token.shadowRaised};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${token.colorFeedbackSuccessStrong};
      background-color: ${token.colorFeedbackSuccessStrong};
      transform: translateY(0);
    }
  `,
  inverse: css`
    border-color: transparent;
    color: ${token.colorNeutral0};
    background-color: transparent;
    box-shadow: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      border-color: ${token.colorNeutral0};
      color: ${token.colorNeutral950};
      background-color: ${token.colorNeutral0};
      transform: translateY(-1px);
    }

    &:active:not(:disabled):not([aria-disabled='true']) {
      border-color: ${token.colorNeutral100};
      color: ${token.colorNeutral950};
      background-color: ${token.colorNeutral100};
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
  font-weight: ${token.typographyFontWeightSemibold};
  line-height: ${token.typographyLineHeightSnug};
  overflow-wrap: anywhere;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color ${token.motionDurationInteractive}
      ${token.motionEasingInteractive},
    border-color ${token.motionDurationInteractive}
      ${token.motionEasingInteractive},
    box-shadow ${token.motionDurationInteractive}
      ${token.motionEasingInteractive},
    color ${token.motionDurationInteractive} ${token.motionEasingInteractive},
    transform ${token.motionDurationInteractive}
      ${token.motionEasingInteractive};

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
    box-shadow: ${token.shadowFocus};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover:not(:disabled):not([aria-disabled='true']) {
      transform: none;
    }
  }
`
