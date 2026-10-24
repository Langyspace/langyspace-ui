import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.nav.withConfig({
  componentId: 'lsui-sc-document-navigation',
})`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
`
