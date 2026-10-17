import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-practice-cover-label',
})`
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  font-weight: ${token.typographyFontWeightSemibold};
  line-height: ${token.typographyLineHeightSnug};
  text-transform: uppercase;
`
