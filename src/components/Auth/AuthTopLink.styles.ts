import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { LinkElement } from '../../internal/LinkElement/LinkElement'

export const Link = styled(LinkElement).withConfig({
  componentId: 'lsui-sc-auth-top-link',
})`
  display: inline-flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[1]};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.regular};
  line-height: ${theme.typography.lineHeight.normal};
  text-decoration: none;

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: ${theme.typography.fontSize.xs};
  }
`

export const Highlight = styled.span.withConfig({
  componentId: 'lsui-sc-auth-top-link-highlight',
})`
  color: ${theme.colors.text.primary};
  text-decoration: underline;
  text-underline-offset: 0.12em;
`
