import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.p.withConfig({
  componentId: 'lsui-sc-auth-legal-text',
})`
  margin: 1rem 0 0;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  line-height: ${token.typographyLineHeightNormal};

  & + button {
    margin-top: ${token.spacing4};
  }
`
