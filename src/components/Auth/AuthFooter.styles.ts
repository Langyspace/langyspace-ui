import { styled } from 'styled-components'
import { authRecipe } from '../../foundations/authRecipe'

export const Brand = styled.p.withConfig({
  componentId: 'lsui-sc-auth-brand-footer',
})`
  margin-top: auto;
  padding-top: ${authRecipe.spacing.responsive.block['2xl']};
  color: rgba(255, 255, 255, 0.5);
  font-size: ${authRecipe.typography.fontSize.xs};
`

export const Mobile = styled.p.withConfig({
  componentId: 'lsui-sc-auth-mobile-footer',
})`
  display: none;
  margin-top: auto;
  padding-top: ${authRecipe.spacing.responsive.compactBlock.sm};
  padding-right: ${authRecipe.spacing[6]};
  padding-bottom: ${authRecipe.spacing.responsive.compactBlock.md};
  padding-left: ${authRecipe.spacing[6]};
  color: ${authRecipe.colors.text.muted};
  font-size: ${authRecipe.typography.fontSize.xs};
  letter-spacing: ${authRecipe.typography.letterSpacing.wide};
  text-align: center;

  @media (min-width: ${authRecipe.breakpoints.sm}) {
    display: block;
  }

  @media (min-width: ${authRecipe.breakpoints.lg}) {
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
