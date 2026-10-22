import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.p.withConfig({ componentId: 'lsui-sc-form-error' })`
  margin: 0;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border: 1px solid ${theme.colors.feedback.danger};
  border-radius: ${theme.radius.control};
  color: ${theme.colors.feedback.danger};
  background: ${theme.colors.feedback.dangerSubtle};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
`
