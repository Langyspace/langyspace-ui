import { styled } from 'styled-components'
import { Pressable } from '../../primitives/Pressable'
export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-notification-item',
})`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  width: 100%;
  gap: 0.75rem;
  padding-top: 0.75rem;
  padding-right: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 0.75rem;
  border: 1px solid #ececea;
  border-radius: 0.75rem;
  color: #0a0a0a;
  background: #ffffff;
  text-align: left;
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1),
    box-shadow 200ms cubic-bezier(0.2, 0, 0, 1),
    transform 200ms cubic-bezier(0.2, 0, 0, 1);

  &:hover {
    border-color: #0a0a0a;
    background: #fafaf9;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px #00f2ea52;
  }

  @media (max-width: 900px) {
    grid-template-columns: auto minmax(0, 1fr);
  }
`
export const Content = styled.span.withConfig({
  componentId: 'lsui-sc-notification-content',
})`
  min-width: 0;
`
export const ItemTitle = styled.span.withConfig({
  componentId: 'lsui-sc-notification-itemtitle',
})`
  display: block;
  color: #0a0a0a;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25;
`
export const ItemBody = styled.span.withConfig({
  componentId: 'lsui-sc-notification-itembody',
})`
  display: block;
  margin-top: 0.25rem;
  color: #6b6b6b;
  font-size: 0.875rem;
  line-height: 1.5;
`
export const ItemMeta = styled.span.withConfig({
  componentId: 'lsui-sc-notification-itemmeta',
})`
  display: block;
  margin-top: 0.25rem;
  color: #6b6b6b;
  font-size: 0.75rem;
  line-height: 1.25;
`
export const ItemAction = styled.span.withConfig({
  componentId: 'lsui-sc-notification-itemaction',
})`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.25rem;
  color: #6b6b6b;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 900px) {
    display: none;
  }
`
