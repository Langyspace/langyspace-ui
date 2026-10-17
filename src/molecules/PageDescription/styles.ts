import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.p.withConfig({
  componentId: 'lsui-sc-page-description',
})`
  margin: 4px 0 0;
  color: ${token.colorContentMuted};
  font-size: 14px;
  line-height: ${token.typographyLineHeightNormal};
`
