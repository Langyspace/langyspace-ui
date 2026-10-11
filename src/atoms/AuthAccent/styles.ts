import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'

export const Accent = styled.span.withConfig({
  componentId: 'lsui-sc-auth-accent',
})`
  color: ${tokens.color.accent.default};
`
