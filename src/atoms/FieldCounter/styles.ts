import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-field-counter',
})`
  flex-shrink: 0;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeXs};
  font-weight: 400;
  line-height: ${token.typographyLineHeightSnug};
`
