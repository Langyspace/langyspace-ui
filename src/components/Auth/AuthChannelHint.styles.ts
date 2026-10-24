import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-auth-channel-hint',
})`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  margin-top: ${theme.spacing[4]};
  border-radius: ${theme.radius.xl};
  background-color: ${theme.colors.palette.neutral[100]};
  padding: 0.75rem 1rem;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  line-height: 1.45;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.sm};
  }
`
