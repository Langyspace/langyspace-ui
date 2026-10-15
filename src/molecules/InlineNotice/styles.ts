import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-inline-notice',
})`
  padding: ${tokens.spacing[3]} ${tokens.spacing[4]};
  border: 1px solid ${tokens.color.surfaceBorder.subtle};
  border-radius: ${tokens.radius.card};
  color: ${tokens.color.content.secondary};
  background: ${tokens.color.neutral[50]};
  font-size: ${tokens.typography.fontSize.sm};
  line-height: ${tokens.typography.lineHeight.normal};
`
