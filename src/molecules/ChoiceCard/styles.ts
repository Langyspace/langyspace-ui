import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../../primitives/Pressable'
export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-choice-card',
})`
  display: flex;
  align-items: center;
  min-width: 0;
  min-height: 2.875rem;
  gap: ${token.spacing3};
  padding-top: ${token.spacing3};
  padding-right: ${token.spacing4};
  padding-bottom: ${token.spacing3};
  padding-left: ${token.spacing4};
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-radius: ${token.radiusLg};
  color: ${token.colorContentDefault};
  background-color: ${token.colorNeutral0};
  text-align: left;
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1),
    box-shadow 200ms cubic-bezier(0.2, 0, 0, 1),
    transform 200ms cubic-bezier(0.2, 0, 0, 1);

  &:hover:not(:disabled) {
    border-color: ${token.colorSurfaceBorderStrong};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }

  &:focus-visible {
    outline: 2px solid #00f2ea;
    outline-offset: 2px;
  }

  &[aria-pressed='true'] {
    border-color: ${token.colorSurfaceBorderStrong};
    color: ${token.colorNeutral0};
    background-color: #000000;
  }

  &:disabled {
    cursor: default;
  }

  @media (min-width: 640px) {
    min-height: 3rem;
  }

  @media (max-width: 360px) {
    gap: ${token.spacing2};
    padding-right: ${token.spacing3};
    padding-left: ${token.spacing3};
  }
`
