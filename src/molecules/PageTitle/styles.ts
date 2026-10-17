import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.h1.withConfig({ componentId: 'lsui-sc-page-title' })`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  color: ${token.colorContentDefault};
  font-size: 32px;
  font-weight: ${token.typographyFontWeightBold};
  line-height: 1.1;
  letter-spacing: 0;
`
