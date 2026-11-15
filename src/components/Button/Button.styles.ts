import { css, styled } from 'styled-components'
import { actionRecipe } from '../../foundations/actions/recipe'
import { Pressable } from '../Pressable'
import type { ActionRecipeStyleProps } from '../../foundations/actions/types'
import type { ButtonTextVariant } from './Button.types'
import { resolveTheme } from '../../foundations/theme/resolveTheme'
import type { ExecutionContext } from 'styled-components'

interface ButtonStyleProps extends ActionRecipeStyleProps {
  $textVariant?: ButtonTextVariant
}

const textColors = (context: ExecutionContext) => ({
  text: resolveTheme(context).colors.text.primary,
  'text-subtle': resolveTheme(context).colors.text.muted,
  'text-danger': resolveTheme(context).colors.feedback.danger,
})

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
  color: ${({ $textVariant, ...context }) => textColors(context)[$textVariant ?? 'text']};
  font-weight: ${({ $textVariant, ...context }) =>
    $textVariant === 'text-subtle'
      ? resolveTheme(context).typography.fontWeight.medium
      : resolveTheme(context).typography.fontWeight.semibold};
  text-decoration: ${({ $textVariant }) =>
    $textVariant === 'text-subtle' ? 'none' : 'underline'};
  text-underline-offset: 2px;

  &:hover:not(:disabled) {
    color: ${(context) => resolveTheme(context).semantic.foreground.brand};
  }

  &:focus-visible {
    outline: 3px solid ${(context) => resolveTheme(context).semantic.focus.ring};
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
    opacity: ${(context) => resolveTheme(context).buttons.base.disabledOpacity};
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
