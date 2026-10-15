import { css, styled } from 'styled-components'
import {
  actionRecipe,
  actionSizeHeights,
} from '../../foundations/actions/recipe'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../../primitives/Pressable'
import type { IconButtonStyleProps } from './types'

const intentStyles = {
  brand: css``,
  danger: css`
    &,
    &:active:not(:disabled) {
      border-color: transparent;
      color: ${token.colorFeedbackDanger};
      background-color: transparent;
    }

    &:hover:not(:disabled) {
      border-color: transparent;
      color: ${token.colorFeedbackDangerStrong};
      background-color: ${token.colorNeutral100};
    }
  `,
  inverse: css`
    & {
      border-color: ${token.colorInverseBorderSubtle};
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
