import { css, styled } from 'styled-components'
import {
  actionRecipe,
  actionSizeHeights,
} from '../../foundations/actions/recipe'
import { Pressable } from '../Pressable'
import type {
  ActionRecipeStyleProps,
  ActionShape,
} from '../../foundations/actions/types'
import type { IconButtonVariant } from './IconButton.types'
import { theme } from '../../foundations/theme/theme'

interface IconButtonStyleProps extends ActionRecipeStyleProps {
  $iconVariant: IconButtonVariant
  $shape: ActionShape
}

const intentStyles = {
  brand: css``,
  danger: css`
    &,
    &:active:not(:disabled) {
      border-color: transparent;
      color: ${theme.colors.feedback.danger};
      background-color: transparent;
    }

    &:hover:not(:disabled) {
      border-color: transparent;
      color: ${theme.semantic.status.danger.foreground};
      background-color: ${theme.colors.palette.neutral[200]};
    }
  `,
  inverse: css`
    & {
      border-color: ${theme.semantic.inverse.border};
    }
  `,
  neutral: css``,
  subtle: css``,
  success: css``,
} satisfies Record<IconButtonStyleProps['$iconVariant'], ReturnType<typeof css>>

export const IconButton = styled(Pressable).withConfig({
  componentId: 'lsui-sc-icon-button',
})<IconButtonStyleProps>`
  ${actionRecipe}
  width: ${({ $size }) => actionSizeHeights[$size]};
  max-width: none;
  flex-shrink: 0;
  padding-right: 0;
  padding-left: 0;

  ${({ $iconVariant }) => intentStyles[$iconVariant]}

  &:disabled {
    opacity: 0.48;
    cursor: default;
  }

  &[data-loading='true'] {
    opacity: 1;
    cursor: wait;
  }
`
