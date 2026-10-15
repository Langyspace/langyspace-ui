import { css, styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import type { FieldControlSize } from '../../foundations/fields'
import type { CompoundControlSurface } from './types'

const sizeStyles = {
  sm: css`
    min-height: ${token.fieldHeightSm};
    gap: ${token.spacing2};
    border-radius: ${token.radiusControl};
    padding-right: ${token.spacing3};
    padding-left: ${token.spacing3};
  `,
  md: css`
    min-height: ${token.fieldHeightMd};
    gap: ${token.spacing2};
    border-radius: ${token.radiusControl};
    padding-right: ${token.spacing3};
    padding-left: ${token.spacing3};
  `,
  lg: css`
    min-height: ${token.fieldHeightLg};
    gap: ${token.spacing3};
    border-radius: ${token.radiusControl};
    padding-right: ${token.spacing3};
    padding-left: ${token.spacing3};
  `,
} satisfies Record<FieldControlSize, ReturnType<typeof css>>

const surfaces = {
  muted: token.colorSurfaceMuted,
  surface: token.colorNeutral0,
} satisfies Record<CompoundControlSurface, string>

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-compound-control',
})<{
  $disabled: boolean
  $invalid: boolean
  $size: FieldControlSize
  $surface: CompoundControlSurface
}>`
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  border: 1px solid
    ${({ $invalid }) =>
      $invalid ? token.colorFeedbackDanger : token.colorSurfaceBorderDefault};
  color: ${token.colorContentMuted};
  background: ${({ $surface }) => surfaces[$surface]};
  transition:
    background-color ${token.motionDurationInteractive}
      ${token.motionEasingInteractive},
    border-color ${token.motionDurationInteractive}
      ${token.motionEasingInteractive},
    box-shadow ${token.motionDurationInteractive}
      ${token.motionEasingInteractive};

  ${({ $size }) => sizeStyles[$size]}

  &:hover:not([data-disabled='true']):not([data-invalid='true']) {
    border-color: ${token.colorSurfaceBorderStrong};
  }

  &:focus-within {
    border-color: ${({ $invalid }) =>
      $invalid ? token.colorFeedbackDanger : token.colorSurfaceBorderStrong};
    background: ${token.colorNeutral0};
    box-shadow: ${token.shadowFocus};
  }

  &[data-disabled='true'] {
    background: ${token.colorSurfaceMuted};
    color: ${token.colorContentPlaceholder};
  }

  &&& > input,
  &&& > select,
  &&& > textarea,
  &&& > input:focus,
  &&& > input:focus-visible,
  &&& > select:focus,
  &&& > select:focus-visible,
  &&& > textarea:focus,
  &&& > textarea:focus-visible {
    border: 0;
    border-radius: 0;
    outline: 0;
    background: transparent;
    box-shadow: none;
  }
`

export const Slot = styled.span`
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  color: inherit;

  > svg {
    flex-shrink: 0;
  }
`
