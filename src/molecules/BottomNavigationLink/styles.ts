import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.a.withConfig({
  componentId: 'lsui-sc-bottom-navigation-link',
})`
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 52px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border: 0;
  border-radius: 14px;
  background: transparent;
  color: ${token.colorContentMuted};
  font: inherit;
  font-size: 11px;
  font-weight: ${token.typographyFontWeightSemibold};
  line-height: ${token.typographyLineHeightSnug};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:focus-visible {
    outline: 3px solid rgba(0, 242, 234, 0.72);
    outline-offset: 2px;
  }
  &[aria-current]:not([aria-current='false']),
  &.active {
    color: ${token.colorContentDefault};
  }
`
