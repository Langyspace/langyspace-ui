import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../../primitives/Pressable'

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
  border-top: 1px solid ${token.colorSurfaceBorderSubtle};
  border-right: 1px solid ${token.colorSurfaceBorderSubtle};
  color: ${token.colorContentDefault};
  background: ${token.colorNeutral0};
  > [data-ui-calendar-event] {
    position: relative;
    z-index: 1;
  }
  &[data-muted='true'] {
    color: ${token.colorContentMuted};
    background: #fcfcfb;
  }
  &:nth-child(7n) {
    border-right: 0;
  }
  &[data-interactive='true'] {
    cursor: pointer;
    &:hover {
      background: ${token.colorNeutral50};
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
    outline: 3px solid rgba(0, 242, 234, 0.72);
    outline-offset: -3px;
  }
`
