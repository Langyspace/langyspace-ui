import { css, styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import type { FieldControlSize } from '../../foundations/fields'

const fontStyles = {
  lg: css`
    font-size: ${token.typographyFontSizeMd};
  `,
  md: css`
    font-size: ${token.typographyFontSizeSm};
  `,
  sm: css`
    font-size: ${token.typographyFontSizeSm};
  `,
} satisfies Record<FieldControlSize, ReturnType<typeof css>>

export const Input = styled.input.withConfig({
  componentId: 'lsui-sc-search-input',
})<{ $size: FieldControlSize }>`
  width: 100%;
  min-width: 0;
  align-self: stretch;
  flex: 1;
  border: 0;
  border-radius: 0;
  outline: 0;
  appearance: none;
  background: transparent;
  box-shadow: none;
  color: ${token.colorContentDefault};
  font-family: inherit;
  padding: 0;

  ${({ $size }) => fontStyles[$size]}

  &::-webkit-search-cancel-button {
    display: none;
  }

  &:focus,
  &:focus-visible {
    border: 0;
    outline: 0;
    background: transparent;
    box-shadow: none;
  }

  &::placeholder {
    color: ${token.colorContentPlaceholder};
  }

  &:disabled {
    color: ${token.colorContentMuted};
    cursor: default;
  }
`
