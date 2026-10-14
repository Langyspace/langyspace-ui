import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Root = styled.a.withConfig({
  componentId: 'lsui-sc-navigation-link',
})`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 40px;
  padding: 0 12px;
  border: 0;
  border-radius: 10px;
  color: ${tokens.color.content.secondary};
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  &:hover {
    background: ${tokens.color.neutral[50]};
  }
  &:focus-visible {
    outline: 3px solid ${tokens.color.focus};
    outline-offset: 2px;
  }
  &[aria-current]:not([aria-current='false']),
  &.active {
    color: #fff;
    background: ${tokens.color.content.default};
  }
  svg {
    flex-shrink: 0;
  }
`
