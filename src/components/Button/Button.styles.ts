import { css, styled } from 'styled-components'
import { actionRecipe } from '../../foundations/actions/recipe'
import * as token from '../../foundations/tokenValues'
import { Pressable } from './Pressable'
import type { ButtonStyleProps } from './Button.types'

const textColors = {
  text: token.colorContentDefault,
  'text-subtle': token.colorContentMuted,
  'text-danger': token.colorFeedbackDanger,
} as const

const textRecipe = css<ButtonStyleProps>`
  display: inline-flex;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'fit-content')};
  max-width: 100%;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  padding: 0;
  text-align: left;
  cursor: pointer;
  color: ${({ $textVariant }) => textColors[$textVariant ?? 'text']};
  font-weight: ${({ $textVariant }) =>
    $textVariant === 'text-subtle'
      ? token.typographyFontWeightMedium
      : token.typographyFontWeightSemibold};
  text-decoration: ${({ $textVariant }) =>
    $textVariant === 'text-subtle' ? 'none' : 'underline'};
  text-underline-offset: 2px;

  &:hover:not(:disabled) {
    color: ${token.colorBrandDefault};
  }

  &:focus-visible {
    outline: 3px solid ${token.colorFocus};
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  svg {
    flex-shrink: 0;
  }
`

const actionStates = css`
  &:disabled {
    opacity: 0.48;
    cursor: default;
  }

  &[data-loading='true'] {
    opacity: 1;
    cursor: wait;
  }
`

export const Button = styled(Pressable).withConfig({
  componentId: 'lsui-sc-button',
})<ButtonStyleProps>`
  ${({ $textVariant }) => ($textVariant ? textRecipe : actionRecipe)}
  ${({ $textVariant }) => !$textVariant && actionStates}
`
