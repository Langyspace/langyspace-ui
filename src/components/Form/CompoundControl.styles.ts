import { css, styled } from 'styled-components'
import type { FieldControlSize } from '../../foundations/fields'
import type { CompoundControlSurface } from './CompoundControl.types'
import { theme } from '../../foundations/theme/theme'

const sizeStyles = {
  sm: css`
    min-height: ${theme.sizes.field.sm};
    gap: ${theme.spacing[2]};
    border-radius: ${theme.radius.control};
    padding-right: ${theme.spacing[3]};
    padding-left: ${theme.spacing[3]};
  `,
  md: css`
    min-height: ${theme.sizes.field.md};
    gap: ${theme.spacing[2]};
    border-radius: ${theme.radius.control};
    padding-right: ${theme.spacing[3]};
    padding-left: ${theme.spacing[3]};
  `,
  lg: css`
    min-height: ${theme.sizes.field.lg};
    gap: ${theme.spacing[3]};
    border-radius: ${theme.radius.control};
    padding-right: ${theme.spacing[3]};
    padding-left: ${theme.spacing[3]};
  `,
} satisfies Record<FieldControlSize, ReturnType<typeof css>>

const surfaces = {
  muted: theme.semantic.background.muted,
  surface: theme.colors.palette.white,
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
      $invalid ? theme.colors.feedback.danger : theme.semantic.border.default};
  color: ${theme.colors.text.muted};
  background: ${({ $surface }) => surfaces[$surface]};
  transition:
    background-color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    border-color ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard},
    box-shadow ${theme.transitions.duration.fast}
      ${theme.transitions.easing.standard};

  ${({ $size }) => sizeStyles[$size]}

  &:hover:not([data-disabled='true']):not([data-invalid='true']) {
    border-color: ${theme.semantic.border.strong};
  }

  &:focus-within {
    border-color: ${({ $invalid }) =>
      $invalid ? theme.colors.feedback.danger : theme.semantic.border.strong};
    background: ${theme.colors.palette.white};
    box-shadow: ${theme.shadows.focusHalo};
  }

  &[data-disabled='true'] {
    background: ${theme.semantic.background.muted};
    color: ${theme.semantic.foreground.placeholder};
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
