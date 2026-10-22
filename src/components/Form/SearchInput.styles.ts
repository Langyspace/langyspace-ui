import { css, styled } from 'styled-components'
import type { FieldControlSize } from '../../foundations/fields'
import { theme } from '../../foundations/theme/theme'

const fontStyles = {
  lg: css`
    font-size: ${theme.typography.fontSize.md};
  `,
  md: css`
    font-size: ${theme.typography.fontSize.sm};
  `,
  sm: css`
    font-size: ${theme.typography.fontSize.sm};
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
  color: ${theme.colors.text.primary};
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
    color: ${theme.semantic.foreground.placeholder};
  }

  &:disabled {
    color: ${theme.colors.text.muted};
    cursor: default;
  }
`
