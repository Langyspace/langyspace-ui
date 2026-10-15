import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
export const Root = styled.a.withConfig({
  componentId: 'lsui-sc-document-navigation-link',
})`
  border-radius: ${tokens.radius.pill};
  padding: ${tokens.spacing[2]} ${tokens.spacing[3]};
  color: ${tokens.color.content.secondary};
  font-size: ${tokens.typography.fontSize.sm};
  font-weight: ${tokens.typography.fontWeight.semibold};
  text-decoration: none;
  transition:
    background-color 180ms ease,
    color 180ms ease;
  &:hover {
    background: ${tokens.color.neutral[50]};
    color: ${tokens.color.content.default};
  }
  &:focus-visible {
    outline: 3px solid ${tokens.color.focus};
    outline-offset: 2px;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`
