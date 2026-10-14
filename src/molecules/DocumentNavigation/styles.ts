import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Root = styled.nav.withConfig({
  componentId: 'lsui-sc-document-navigation',
})`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[2]};
`
