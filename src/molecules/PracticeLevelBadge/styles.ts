import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-practice-level-badge',
})`
  align-self: flex-end;
  padding: 2px 8px;
  border-radius: ${token.radiusPill};
  background: rgba(255, 255, 255, 0.16);
  font-size: 12px;
  font-weight: ${token.typographyFontWeightBold};
  line-height: ${token.typographyLineHeightSnug};
`
