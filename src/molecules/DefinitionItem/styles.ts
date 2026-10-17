import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-definition-item',
})`
  min-width: 0;
  border: 1px solid ${token.colorSurfaceBorderDefault};
  border-radius: 14px;
  padding: 12px;
`

export const Label = styled.span`
  display: block;
  color: ${token.colorContentMuted};
  font-size: 12px;
  font-weight: ${token.typographyFontWeightBold};
`

export const Value = styled.strong`
  display: block;
  margin-top: 4px;
  color: ${token.colorContentDefault};
  font-size: 14px;
  font-weight: ${token.typographyFontWeightBold};
  overflow-wrap: anywhere;
`
