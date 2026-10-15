import { styled } from 'styled-components'
import { Pressable } from '../../primitives/Pressable'
export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-calendar-event',
})`
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 4px;
  padding: 3px 8px;
  border: 0;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  text-align: left;
  color: #fff;
  background: #0a0a0a;
  &[data-tone='success'] {
    color: #166534;
    background: #dcfce7;
  }
  &[data-tone='muted'] {
    color: #6b6b6b;
    background: #f1f1ef;
    text-decoration: line-through;
  }
`
