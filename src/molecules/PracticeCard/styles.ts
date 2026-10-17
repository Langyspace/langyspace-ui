import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { Pressable } from '../../primitives/Pressable'

export const Root = styled(Pressable).withConfig({
  componentId: 'lsui-sc-practice-card',
})`
  display: flex;
  min-width: 0;
  min-height: 100%;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
  border: 1px solid ${token.colorSurfaceBorderSubtle};
  border-radius: 14px;
  color: ${token.colorContentDefault};
  background: ${token.colorNeutral0};
  text-align: left;
  transition:
    border-color 0.15s ease,
    transform 0.15s ease;
  &:hover:not(:disabled) {
    border-color: ${token.colorSurfaceBorderStrong};
    transform: translateY(-1px);
  }
  &:disabled {
    cursor: default;
    opacity: 0.72;
  }
  &:focus-visible {
    outline: 3px solid rgba(0, 242, 234, 0.72);
    outline-offset: 2px;
  }
  &[data-completed='true'] {
    border-color: ${token.colorNeutral300};
    background: ${token.colorNeutral50};
    box-shadow: none;
    [data-ui-practice-card-cover] {
      opacity: 0.72;
      filter: grayscale(0.38);
    }
    &:hover:not(:disabled) {
      background: ${token.colorNeutral100};
    }
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`
