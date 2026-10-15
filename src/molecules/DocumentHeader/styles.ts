import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Root = styled.header.withConfig({
  componentId: 'lsui-sc-document-header',
})`
  border-bottom: 1px solid ${tokens.color.surfaceBorder.subtle};
  background: ${tokens.color.neutral[0]};
`
