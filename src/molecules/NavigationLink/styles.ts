import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
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
  color: ${token.colorContentSecondary};
  font: inherit;
  font-size: 14px;
  font-weight: ${token.typographyFontWeightMedium};
  white-space: nowrap;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  &:hover {
    background: ${token.colorNeutral50};
  }
  &:focus-visible {
    outline: 3px solid ${token.colorFocus};
    outline-offset: 2px;
  }
  &[aria-current]:not([aria-current='false']),
  &.active {
    color: ${token.colorNeutral0};
    background: ${token.colorContentDefault};
  }
  svg {
    flex-shrink: 0;
  }
`
