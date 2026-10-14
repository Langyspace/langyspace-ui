import { styled } from 'styled-components'
import { Pressable } from '../../primitives/Pressable'
import { tokens } from '../../foundations/tokens'
export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-text-button',
})`
  display: inline-flex;
  width: fit-content;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  padding: 0;
  font: inherit;
  text-align: left;
  cursor: pointer;
  color: ${tokens.color.content.default};
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
  &[data-variant='subtle'] {
    color: ${tokens.color.content.muted};
    font-weight: 500;
    text-decoration: none;
  }
  &[data-variant='danger'] {
    color: ${tokens.color.feedback.danger};
  }
  &:hover:not(:disabled) {
    color: ${tokens.color.brand.default};
  }
  &:focus-visible {
    outline: 3px solid ${tokens.color.focus};
    outline-offset: 3px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  svg {
    flex-shrink: 0;
  }
`
