import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { LinkElement } from '../../internal/LinkElement/LinkElement'

export const Root = styled(LinkElement).withConfig({
  componentId: 'lsui-sc-document-navigation-link',
})`
  border-radius: ${theme.radius.pill};
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-decoration: none;
  transition:
    background-color 180ms ease,
    color 180ms ease;
  &:hover {
    background: ${theme.colors.palette.neutral[100]};
    color: ${theme.colors.text.primary};
  }
  &:focus-visible {
    outline: 3px solid ${theme.semantic.focus.ring};
    outline-offset: 2px;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`
