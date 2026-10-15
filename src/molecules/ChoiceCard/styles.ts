import { styled } from 'styled-components'
import { Pressable } from '../../primitives/Pressable'
export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-choice-card',
})`
  display: flex;
  align-items: center;
  min-width: 0;
  min-height: 2.875rem;
  gap: 0.75rem;
  padding-top: 0.75rem;
  padding-right: 1rem;
  padding-bottom: 0.75rem;
  padding-left: 1rem;
  border: 1px solid #ececea;
  border-radius: 0.5rem;
  color: #0a0a0a;
  background-color: #ffffff;
  text-align: left;
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1),
    box-shadow 200ms cubic-bezier(0.2, 0, 0, 1),
    transform 200ms cubic-bezier(0.2, 0, 0, 1);

  &:hover:not(:disabled) {
    border-color: #0a0a0a;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  &:focus-visible {
    outline: 2px solid #00f2ea;
    outline-offset: 2px;
  }

  &[aria-pressed='true'] {
    border-color: #0a0a0a;
    color: #ffffff;
    background-color: #000000;
  }

  &:disabled {
    cursor: default;
  }

  @media (min-width: 640px) {
    min-height: 3rem;
  }

  @media (max-width: 360px) {
    gap: 0.5rem;
    padding-right: 0.75rem;
    padding-left: 0.75rem;
  }
`
