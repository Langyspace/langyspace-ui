import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Description = styled.p.withConfig({
  componentId: 'lsui-sc-practice-result-description',
})`
  max-width: 22rem;
  margin: 0;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};
`
