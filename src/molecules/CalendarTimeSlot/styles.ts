import { styled } from 'styled-components'
import { Pressable } from '../../primitives/Pressable'
export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-calendar-time-slot',
})`
  display: block;
  width: 100%;
  height: 56px;
  padding: 4px;
  border: 0;
  border-bottom: 1px solid #ececea;
  color: #6b6b6b;
  text-align: left;
  background: #fff;
  cursor: pointer;
  &[aria-disabled='true'] {
    cursor: default;
  }
  &[data-tone='muted'] {
    background: #fafaf9;
  }
  &:not([aria-disabled='true']):hover {
    background: #fafaf9;
  }
  &[data-selected='true'] {
    color: #0a0a0a;
    background: #e8fffe;
  }
  &:focus-visible {
    outline: 3px solid rgba(0, 242, 234, 0.72);
    outline-offset: -3px;
  }
`
