import { styled } from 'styled-components'
import starSrc from '../../assets/brand/star.svg'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'

export const Title = styled.h1.withConfig({
  componentId: 'lsui-sc-auth-brand-title',
})`
  max-width: 30rem;
  margin-top: ${theme.spacing.responsive.block['4xl']};
  color: ${theme.colors.text.inverse};
  font-size: 2.25rem;
  font-weight: ${theme.typography.fontWeight.bold};
  letter-spacing: ${theme.typography.letterSpacing.normal};
  line-height: ${theme.typography.lineHeight.tight};

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['4xl']};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    font-size: 3.375rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) and (max-height: ${theme.viewportHeights.lg}) {
    margin-top: ${theme.spacing[12]};
  }
`

export const Accent = styled.span.withConfig({
  componentId: 'lsui-sc-auth-brand-accent',
})`
  background-image: linear-gradient(
    ${theme.colors.brand.accent},
    ${theme.colors.brand.accent}
  );
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 100% 0.25rem;
  padding-bottom: ${theme.spacing[1]};
`

export const Description = styled.p.withConfig({
  componentId: 'lsui-sc-auth-brand-description',
})`
  max-width: 27.5rem;
  margin-top: ${theme.spacing.responsive.block.sm};
  color: ${alpha(theme.colors.palette.white, 0.7)};
  font-size: ${theme.typography.fontSize.lg};
  line-height: ${theme.typography.lineHeight.normal};
`

export const FeatureList = styled.ul.withConfig({
  componentId: 'lsui-sc-auth-feature-list',
})`
  display: none;
  margin: ${theme.spacing.responsive.block['2xl']} 0 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${theme.breakpoints.md}) {
    display: grid;
    gap: ${theme.spacing[3]};
  }
`

export const Feature = styled.li.withConfig({
  componentId: 'lsui-sc-auth-feature',
})`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  color: ${alpha(theme.colors.palette.white, 0.92)};
  font-size: ${theme.typography.fontSize.md};
`

export const Mark = styled.img.attrs({
  alt: '',
  src: starSrc,
})`
  display: block;
  width: 0.875rem;
  height: 0.875rem;
  flex-shrink: 0;
  object-fit: contain;
`
