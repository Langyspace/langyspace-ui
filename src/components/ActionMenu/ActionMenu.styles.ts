import { css, keyframes, styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../Pressable'
import type {
  ActionMenuItemStyleProps,
  ActionMenuMenuStyleProps,
} from './ActionMenu.types'

const enter = keyframes`
  from {
    opacity: 0;
    transform: translateY(var(--lsui-action-menu-enter-y));
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const toneStyles = {
  danger: css`
    color: ${token.colorFeedbackDangerStrong};

    &:hover:not(:disabled),
    &:focus-visible {
      color: ${token.colorFeedbackDangerStrong};
      background: ${token.colorFeedbackDangerSoft};
    }
  `,
  neutral: css`
    color: ${token.colorContentDefault};

    &:hover:not(:disabled),
    &:focus-visible {
      background: ${token.colorNeutral100};
    }
  `,
} satisfies Record<ActionMenuItemStyleProps['$tone'], ReturnType<typeof css>>

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-action-menu',
})`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  max-width: 100%;
`

export const Menu = styled.div<ActionMenuMenuStyleProps>`
  --lsui-action-menu-enter-y: ${({ $placement }) =>
    $placement === 'top' ? token.spacing1 : `-${token.spacing1}`};

  box-sizing: border-box;
  position: fixed;
  z-index: 1200;
  display: flex;
  width: max-content;
  min-width: 13rem;
  max-width: calc(100vw - ${token.spacing4});
  flex-direction: column;
  padding: calc(${token.spacing1} + ${token.spacing1} / 2);
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-radius: ${token.radiusRounded};
  background: ${token.colorNeutral0};
  box-shadow: ${token.shadowPopover};
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  animation: ${enter} ${token.motionDurationInteractive}
    ${token.motionEasingInteractive};
  transform-origin: ${({ $align, $placement }) =>
    `${$align === 'start' ? 'left' : 'right'} ${$placement === 'top' ? 'bottom' : 'top'}`};

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export const MenuItem = styled(Pressable)<ActionMenuItemStyleProps>`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  min-width: 0;
  min-height: ${({ $size }) =>
    $size === 'sm' ? token.controlHeightMd : token.fieldHeightMd};
  align-items: center;
  gap: ${token.spacing2};
  padding: ${token.spacing2} ${token.spacing3};
  border: 0;
  border-radius: ${token.radiusControl};
  background: transparent;
  font-size: ${token.typographyFontSizeSm};
  font-weight: ${token.typographyFontWeightMedium};
  line-height: ${token.typographyLineHeightSnug};
  text-align: left;
  overflow-wrap: anywhere;

  ${({ $tone }) => toneStyles[$tone]}

  &:focus-visible {
    outline: 3px solid ${token.colorFocus};
    outline-offset: -3px;
  }

  &:disabled {
    opacity: 0.48;
  }

  &[data-loading='true'] {
    opacity: 1;
    cursor: wait;
  }
`

export const ItemLabel = styled.span`
  min-width: 0;
  flex: 1 1 auto;
`

export const Separator = styled.div`
  height: 1px;
  flex: 0 0 auto;
  margin: ${token.spacing1} ${token.spacing2};
  background: ${token.colorSurfaceBorderSubtle};
`
