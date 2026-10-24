import { styled } from 'styled-components'
import { fieldControlStyles } from '../../foundations/fields'
import type { FieldControlStyleProps } from '../../foundations/fields'
import { theme } from '../../foundations/theme/theme'

export const Input = styled.input.withConfig({
  componentId: 'lsui-sc-text-input',
})<FieldControlStyleProps>`
  ${fieldControlStyles}

  @media (width < ${theme.breakpoints.md}) {
    &[type='date'] {
      display: block;
      max-width: 100%;
      height: var(--lsui-field-control-height, var(--lsui-field-size-height));
      padding-top: calc(
        (
            var(--lsui-field-control-height, var(--lsui-field-size-height)) -
              1.5em - 2px
          ) /
          2
      );
      padding-bottom: calc(
        (
            var(--lsui-field-control-height, var(--lsui-field-size-height)) -
              1.5em - 2px
          ) /
          2
      );
      line-height: 1.5;
      -webkit-appearance: none;
      appearance: none;
    }

    &[type='date']::-webkit-date-and-time-value {
      min-height: 1.5em;
      text-align: left;
    }
  }
`
