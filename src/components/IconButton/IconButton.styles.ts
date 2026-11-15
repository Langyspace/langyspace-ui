import { css, styled } from 'styled-components'
import { actionRecipe } from '../../foundations/actions/recipe'
import { Pressable } from '../Pressable'
import type {
  ActionRecipeStyleProps,
  ActionShape,
} from '../../foundations/actions/types'
import type { IconButtonVariant } from './IconButton.types'
import { resolveTheme } from '../../foundations/theme/resolveTheme'

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
      color: ${(context) => resolveTheme(context).colors.feedback.danger};
      background-color: transparent;
    }

    &:hover:not(:disabled) {
      border-color: transparent;
      color: ${(context) => resolveTheme(context).semantic.status.danger.foreground};
      background-color: ${(context) => resolveTheme(context).colors.palette.neutral[200]};
    }
  `,
  inverse: css`
    & {
      border-color: ${(context) => resolveTheme(context).semantic.inverse.border};
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
  width: ${({ $size, ...context }) => resolveTheme(context).sizes.control[$size]};
  height: ${({ $size, ...context }) => resolveTheme(context).sizes.control[$size]};
  min-height: ${({ $size, ...context }) => resolveTheme(context).sizes.control[$size]};
  padding-top: 0;
  padding-bottom: 0;
  max-width: none;
  flex-shrink: 0;
  padding-right: 0;
  padding-left: 0;

  ${({ $iconVariant }) => intentStyles[$iconVariant]}

  &:disabled {
    opacity: ${(context) => resolveTheme(context).buttons.base.disabledOpacity};
    cursor: default;
  }

  &[data-loading='true'] {
    opacity: 1;
    cursor: wait;
  }
`
