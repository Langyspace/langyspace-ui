import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Root = styled.p.withConfig({ componentId: 'lsui-sc-form-error' })`
  margin: 0;
  padding: ${tokens.spacing[3]} ${tokens.spacing[4]};
  border: 1px solid ${tokens.color.feedback.danger};
  border-radius: ${tokens.radius.control};
  color: ${tokens.color.feedback.danger};
  background: ${tokens.color.feedback.dangerSoft};
  font-size: ${tokens.typography.fontSize.sm};
  line-height: ${tokens.typography.lineHeight.normal};
`
