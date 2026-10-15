import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../../primitives/Pressable'
export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-calendar-time-slot',
})`
  display: block;
  width: 100%;
  height: 56px;
  padding: 4px;
  border: 0;
  border-bottom: 1px solid ${token.colorSurfaceBorderSubtle};
  color: ${token.colorContentMuted};
  text-align: left;
  background: ${token.colorNeutral0};
  cursor: pointer;
  &[aria-disabled='true'] {
    cursor: default;
  }
  &[data-tone='muted'] {
    background: ${token.colorNeutral50};
  }
  &:not([aria-disabled='true']):hover {
    background: ${token.colorNeutral50};
  }
  &[data-selected='true'] {
    color: ${token.colorContentDefault};
    background: #e8fffe;
  }
  &:focus-visible {
    outline: 3px solid rgba(0, 242, 234, 0.72);
    outline-offset: -3px;
  }
`
