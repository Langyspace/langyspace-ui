import { styled } from 'styled-components'
import { Pressable } from '../../primitives/Pressable'
export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-timeline-event',
})`
  position: absolute;
  right: 4px;
  left: 4px;
  overflow: hidden;
  padding: 8px 12px;
  border: 0;
  border-left: 3px solid #0a0a0a;
  border-radius: 8px;
  font-size: 12px;
  text-align: left;
  color: #0a0a0a;
  background: #f1f1ef;
  &[data-tone='success'] {
    color: #166534;
    background: #dcfce7;
    border-left-color: #16a34a;
  }
  &[data-tone='muted'] {
    color: #6b6b6b;
    background: #f1f1ef;
    border-left-color: #9a9a9a;
  }
`
