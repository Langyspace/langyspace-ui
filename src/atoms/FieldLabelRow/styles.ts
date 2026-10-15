import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-field-label-row',
})`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${token.spacing3};
  color: ${token.colorContentDefault};
  font-size: ${token.typographyFontSizeSm};
  font-weight: ${token.typographyFontWeightSemibold};
  line-height: ${token.typographyLineHeightSnug};
`
