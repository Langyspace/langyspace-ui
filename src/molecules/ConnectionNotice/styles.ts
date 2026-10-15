import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-connection-notice',
})`
  display: flex;
  align-items: center;
  gap: ${token.spacing2};
  margin-bottom: ${token.spacing3};
  color: #d97706;
  font-size: ${token.typographyFontSizeSm};
  line-height: ${token.typographyLineHeightNormal};

  svg {
    flex: 0 0 auto;
  }
`
