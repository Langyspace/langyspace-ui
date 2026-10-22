import { css } from 'styled-components'
import * as token from '../tokenValues'

export type FieldControlSize = 'sm' | 'md' | 'lg'

export interface FieldControlStyleProps {
  $invalid: boolean
  $size: FieldControlSize
}

const heights = {
  lg: token.fieldHeightLg,
  md: token.fieldHeightMd,
  sm: token.fieldHeightSm,
} satisfies Record<FieldControlSize, string>

export const fieldControlStyles = css<FieldControlStyleProps>`
  width: 100%;
  min-width: 0;
  --lsui-field-size-height: ${({ $size }) => heights[$size]};
  min-height: var(--lsui-field-control-height, var(--lsui-field-size-height));
  border: 1px solid
    ${({ $invalid }) =>
      $invalid ? token.colorFeedbackDanger : token.colorSurfaceBorderDefault};
  border-radius: ${token.radiusControl};
  outline: none;
  background: ${token.colorNeutral0};
  color: ${token.colorContentDefault};
  font: inherit;
  font-size: ${token.typographyFontSizeSm};
  padding-right: ${token.spacing3};
  padding-left: ${token.spacing3};
  transition:
    color ${token.motionDurationInteractive} ${token.motionEasingInteractive},
    background-color ${token.motionDurationInteractive}
      ${token.motionEasingInteractive},
    border-color ${token.motionDurationInteractive}
      ${token.motionEasingInteractive},
    box-shadow ${token.motionDurationInteractive}
      ${token.motionEasingInteractive};

  &:hover:not(:disabled):not([aria-invalid='true']) {
    border-color: ${token.colorSurfaceBorderStrong};
  }

  &:focus-visible {
    border-color: ${({ $invalid }) =>
      $invalid ? token.colorFeedbackDanger : token.colorSurfaceBorderStrong};
    box-shadow: ${token.shadowFocus};
  }

  &:disabled {
    background: ${token.colorSurfaceMuted};
    color: ${token.colorContentMuted};
    cursor: default;
  }

  &:read-only:not(:disabled) {
    background: ${token.colorSurfaceSubtle};
  }

  &::placeholder {
    color: ${token.colorContentPlaceholder};
  }
`
