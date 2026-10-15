import { styled } from 'styled-components'
import { Pressable } from '../../primitives/Pressable'
export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-toggle-button',
})`
  min-width: 0;
  min-height: 2.25rem;
  border: 1px solid #ececea;
  border-radius: 999px;
  background-color: #ffffff;
  color: #2a2a2a;
  font-size: 0.875rem;
  font-weight: 600;
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1),
    box-shadow 200ms cubic-bezier(0.2, 0, 0, 1),
    transform 200ms cubic-bezier(0.2, 0, 0, 1);

  &:hover:not(:disabled) {
    border-color: #0a0a0a;
    color: #0a0a0a;
  }

  &:focus-visible {
    outline: 2px solid #00f2ea;
    outline-offset: 2px;
  }

  &[aria-pressed='true'] {
    border-color: #0a0a0a;
    background-color: #000000;
    color: #ffffff;
  }

  &:disabled {
    cursor: default;
  }

  @media (min-width: 640px) {
    min-height: 2.5rem;
  }
`
