import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-quiz-badge',
})`
  display: inline-flex;
  align-items: center;
  min-height: 1.75rem;
  padding: 0 0.75rem;
  border-radius: ${theme.radius.pill};
  color: ${theme.colors.palette.white};
  background: var(--quiz-ink, ${theme.colors.palette.neutral[900]});
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
`
