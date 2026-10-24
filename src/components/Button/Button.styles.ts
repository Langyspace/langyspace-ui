import { css, styled } from 'styled-components'
import { actionRecipe } from '../../foundations/actions/recipe'
import { Pressable } from '../Pressable'
import type { ActionRecipeStyleProps } from '../../foundations/actions/types'
import type { ButtonTextVariant } from './Button.types'
import { theme } from '../../foundations/theme/theme'

interface ButtonStyleProps extends ActionRecipeStyleProps {
  $textVariant?: ButtonTextVariant
}

const textColors = {
  text: theme.colors.text.primary,
  'text-subtle': theme.colors.text.muted,
  'text-danger': theme.colors.feedback.danger,
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
      ? theme.typography.fontWeight.medium
      : theme.typography.fontWeight.semibold};
  text-decoration: ${({ $textVariant }) =>
    $textVariant === 'text-subtle' ? 'none' : 'underline'};
  text-underline-offset: 2px;

  &:hover:not(:disabled) {
    color: ${theme.semantic.foreground.brand};
  }

  &:focus-visible {
    outline: 3px solid ${theme.semantic.focus.ring};
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
