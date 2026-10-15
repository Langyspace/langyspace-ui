import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-stat-label',
})`
  margin-top: 7px;
  color: ${token.colorContentMuted};
  font-size: 10px;
  font-weight: ${token.typographyFontWeightBold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
  [data-tone='brand'] & {
    color: #9d174d;
  }
`
