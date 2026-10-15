import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../../primitives/Pressable'
export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-toggle-button',
})`
  min-width: 0;
  min-height: 2.25rem;
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-radius: ${token.radiusPill};
  background-color: ${token.colorNeutral0};
  color: ${token.colorContentSecondary};
  font-size: ${token.typographyFontSizeSm};
  font-weight: ${token.typographyFontWeightSemibold};
  transition:
    color 150ms cubic-bezier(0.2, 0, 0, 1),
    background-color 150ms cubic-bezier(0.2, 0, 0, 1),
    border-color 150ms cubic-bezier(0.2, 0, 0, 1),
    box-shadow 200ms cubic-bezier(0.2, 0, 0, 1),
    transform 200ms cubic-bezier(0.2, 0, 0, 1);

  &:hover:not(:disabled) {
    border-color: ${token.colorSurfaceBorderStrong};
    color: ${token.colorContentDefault};
  }

  &:focus-visible {
    outline: 2px solid #00f2ea;
    outline-offset: 2px;
  }

  &[aria-pressed='true'] {
    border-color: ${token.colorSurfaceBorderStrong};
    background-color: #000000;
    color: ${token.colorNeutral0};
  }

  &:disabled {
    cursor: default;
  }

  @media (min-width: 640px) {
    min-height: 2.5rem;
  }
`
