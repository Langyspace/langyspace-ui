import { css, keyframes, styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'
import type {
  ActionMenuAlign,
  ActionMenuPlacement,
  ActionMenuSize,
  ActionMenuTone,
} from './ActionMenu.types'
import type { ActionMenuPosition } from './position'

interface ActionMenuMenuStyleProps {
  $align: ActionMenuAlign
  $placement: ActionMenuPlacement
  $position: ActionMenuPosition | null
}

interface ActionMenuItemStyleProps {
  $size: ActionMenuSize
  $tone: ActionMenuTone
}

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
    color: ${theme.semantic.status.danger.foreground};

    &:hover:not(:disabled),
    &:focus-visible {
      color: ${theme.semantic.status.danger.foreground};
      background: ${theme.colors.feedback.dangerSubtle};
    }
  `,
  neutral: css`
    color: ${theme.colors.text.primary};

    &:hover:not(:disabled),
    &:focus-visible {
      background: ${theme.colors.palette.neutral[200]};
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

// Coordinates follow the trigger on every layout pass, so they stay inline.
export const Menu = styled.div.attrs<ActionMenuMenuStyleProps>(
  ({ $position }) => ({
    style: {
      left: $position?.left,
      maxHeight: $position?.maxHeight,
      top: $position?.top,
      visibility: $position ? 'visible' : 'hidden',
    },
  }),
)`
  --lsui-action-menu-enter-y: ${({ $placement }) =>
    $placement === 'top' ? theme.spacing[1] : `-${theme.spacing[1]}`};

  box-sizing: border-box;
  position: fixed;
  z-index: ${theme.zIndex.popover};
  display: flex;
  width: max-content;
  min-width: 13rem;
  max-width: calc(100vw - ${theme.spacing[4]});
  flex-direction: column;
  padding: calc(${theme.spacing[1]} + ${theme.spacing[1]} / 2);
  border: 1px solid ${theme.colors.border.subtle};
  border-radius: ${theme.radius.xl};
  background: ${theme.colors.palette.white};
  box-shadow: ${theme.shadows.floating};
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  animation: ${enter} ${theme.transitions.duration.fast}
    ${theme.transitions.easing.standard};
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
    $size === 'sm' ? theme.sizes.control.md : theme.sizes.field.md};
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  border: 0;
  border-radius: ${theme.radius.control};
  background: transparent;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: ${theme.typography.lineHeight.snug};
  text-align: left;
  overflow-wrap: anywhere;

  ${({ $tone }) => toneStyles[$tone]}

  &:focus-visible {
    outline: 3px solid ${theme.semantic.focus.ring};
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
  margin: ${theme.spacing[1]} ${theme.spacing[2]};
  background: ${theme.colors.border.subtle};
`
