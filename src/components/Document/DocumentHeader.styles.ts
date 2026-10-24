import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.header.withConfig({
  componentId: 'lsui-sc-document-header',
})`
  border-bottom: 1px solid ${theme.colors.border.subtle};
  background: ${theme.colors.palette.white};
`
