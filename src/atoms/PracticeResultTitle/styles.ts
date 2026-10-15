import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Title = styled.h2.withConfig({
  componentId: 'lsui-sc-practice-result-title',
})`
  margin: 0;
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSize2xl};
  font-weight: ${token.typographyFontWeightBold};
`
