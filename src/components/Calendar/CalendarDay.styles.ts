import { styled } from 'styled-components'
import { Pressable } from '../Pressable'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-calendar-day',
})`
  position: relative;
  display: flex;
  min-width: 0;
  flex-direction: column;
  min-height: 112px;
  gap: 4px;
  padding: 8px 12px;
  border-top: 1px solid ${theme.colors.border.subtle};
  border-right: 1px solid ${theme.colors.border.subtle};
  color: ${theme.colors.text.primary};
  background: ${theme.colors.palette.white};
  > [data-ui-calendar-event] {
    position: relative;
    z-index: 1;
  }
  &[data-muted='true'] {
    color: ${theme.colors.text.muted};
    background: ${theme.colors.palette.extended.snow};
  }
  &:nth-child(7n) {
    border-right: 0;
  }
  &[data-interactive='true'] {
    cursor: pointer;
    &:hover {
      background: ${theme.colors.palette.neutral[100]};
    }
  }
`

export const OpenButton = styled(Pressable).withConfig({
  componentId: 'lsui-sc-calendar-day-open',
})`
  display: flex;
  align-self: flex-start;
  padding: 0;
  border: 0;
  color: inherit;
  background: transparent;
  font: inherit;

  &::after {
    position: absolute;
    inset: 0;
    content: '';
  }

  &:focus-visible {
    outline: none;
  }

  &:focus-visible::after {
    outline: 3px solid ${theme.semantic.focus.ring};
    outline-offset: -3px;
  }
`
