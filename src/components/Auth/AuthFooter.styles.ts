import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'

export const Brand = styled.p.withConfig({
  componentId: 'lsui-sc-auth-brand-footer',
})`
  margin-top: auto;
  padding-top: ${theme.spacing.responsive.block['2xl']};
  color: ${alpha(theme.colors.palette.white, 0.5)};
  font-size: ${theme.typography.fontSize.xs};
`

export const Mobile = styled.p.withConfig({
  componentId: 'lsui-sc-auth-mobile-footer',
})`
  display: none;
  margin-top: auto;
  padding-top: ${theme.spacing.responsive.compactBlock.sm};
  padding-right: ${theme.spacing[6]};
  padding-bottom: ${theme.spacing.responsive.compactBlock.md};
  padding-left: ${theme.spacing[6]};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  letter-spacing: ${theme.typography.letterSpacing.wide};
  text-align: center;

  @media (min-width: ${theme.breakpoints.sm}) {
    display: block;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`

export const Link = styled.a.withConfig({
  componentId: 'lsui-sc-auth-footer-link',
})`
  color: inherit;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.16em;

  &:hover {
    opacity: 0.8;
  }
`
