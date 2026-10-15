import { styled } from 'styled-components'
import { Pressable } from '../../primitives/Pressable'
export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-conversation-row',
})<{ $selected: boolean }>`
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: 0;
  background: ${({ $selected }) => ($selected ? '#FAFAF9' : 'transparent')};
  cursor: pointer;
  text-align: left;
  transition: background 150ms ease;

  &:hover {
    background: #fafaf9;
  }

  &:focus-visible {
    outline: 2px solid #00f2ea;
    outline-offset: -2px;
  }
`
export const Body = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-body',
})`
  display: flex;
  min-width: 0;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 0.25rem;
`
export const Top = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-top',
})`
  display: flex;
  min-width: 0;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
`
export const Title = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-title',
})`
  overflow: hidden;
  color: #0a0a0a;
  font-size: 0.875rem;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const Meta = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-meta',
})`
  flex: 0 0 auto;
  color: #6b6b6b;
  font-size: 0.75rem;
  white-space: nowrap;
`
export const Bottom = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-bottom',
})`
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 0.5rem;
`
export const Preview = styled.span.withConfig({
  componentId: 'lsui-sc-conversation-preview',
})<{ $unread: boolean }>`
  overflow: hidden;
  flex: 1 1 auto;
  color: ${({ $unread }) => ($unread ? '#0A0A0A' : '#6B6B6B')};
  font-size: 0.875rem;
  font-weight: ${({ $unread }) => ($unread ? 500 : 400)};
  text-overflow: ellipsis;
  white-space: nowrap;
`
