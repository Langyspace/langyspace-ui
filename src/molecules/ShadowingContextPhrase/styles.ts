import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-context-phrase',
})`
  min-height: 1.25rem;
  max-width: 22rem;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeSm};
  font-weight: 400;
  line-height: ${token.typographyLineHeightNormal};

  @media (min-width: 640px) and (max-width: 900px) and (min-height: 761px) {
    max-width: 32rem;
    font-size: ${token.typographyFontSizeMd};
  }
`
