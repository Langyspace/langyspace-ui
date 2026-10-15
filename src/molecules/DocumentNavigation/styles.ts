import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
export const Root = styled.nav.withConfig({
  componentId: 'lsui-sc-document-navigation',
})`
  display: flex;
  align-items: center;
  gap: ${token.spacing2};
`
