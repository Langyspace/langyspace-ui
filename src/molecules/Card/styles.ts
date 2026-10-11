import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'

export const Container = styled.div.withConfig({
  componentId: 'lsui-sc-card',
})`
  min-width: 0;
  padding: ${tokens.spacing[4]};
  border: 1px solid ${tokens.color.surfaceBorder.subtle};
  border-radius: ${tokens.radius.card};
  background: ${tokens.color.neutral[0]};
  box-shadow: ${tokens.shadow.subtle};
  overflow-wrap: anywhere;
`
