import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.header.withConfig({
  componentId: 'lsui-sc-document-header',
})`
  border-bottom: 1px solid ${token.colorSurfaceBorderSubtle};
  background: ${token.colorNeutral0};
`
