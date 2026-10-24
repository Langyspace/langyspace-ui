import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Eyebrow = styled.span.withConfig({
  componentId: 'lsui-sc-auth-eyebrow',
})`
  display: inline-flex;
  margin-bottom: ${theme.spacing.responsive.block.sm};
  padding: 0.375rem 0.875rem;
  border: ${theme.borders.default};
  border-radius: ${theme.radius.pill};
  background-color: ${theme.colors.surface.raised};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  @media (max-width: ${theme.breakpoints.mobileShell}) {
    margin-bottom: ${theme.spacing.responsive.compactBlock.sm};
  }
`
