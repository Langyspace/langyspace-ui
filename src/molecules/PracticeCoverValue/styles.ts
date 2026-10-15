import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-practice-cover-value',
})`
  color: inherit;
  font-size: 40px;
  font-weight: ${token.typographyFontWeightBold};
  line-height: 1;
  display: flex;
  align-items: center;
`
