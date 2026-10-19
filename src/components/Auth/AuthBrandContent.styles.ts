import { styled } from 'styled-components'
import { authRecipe } from '../../foundations/authRecipe'
import starSrc from '../../assets/brand/star.svg'

export const Title = styled.h1.withConfig({
  componentId: 'lsui-sc-auth-brand-title',
})`
  max-width: 30rem;
  margin-top: ${authRecipe.spacing.responsive.block['4xl']};
  color: ${authRecipe.colors.text.inverse};
  font-size: 2.25rem;
  font-weight: ${authRecipe.typography.fontWeight.bold};
  letter-spacing: ${authRecipe.typography.letterSpacing.normal};
  line-height: ${authRecipe.typography.lineHeight.tight};

  @media (min-width: ${authRecipe.breakpoints.md}) {
    font-size: ${authRecipe.typography.fontSize['4xl']};
  }

  @media (min-width: ${authRecipe.breakpoints.lg}) {
    font-size: 3.375rem;
  }

  @media (min-width: ${authRecipe.breakpoints.lg}) and (max-height: 760px) {
    margin-top: ${authRecipe.spacing[12]};
  }
`

export const Accent = styled.span.withConfig({
  componentId: 'lsui-sc-auth-brand-accent',
})`
  background-image: linear-gradient(
    ${authRecipe.colors.brand.accent},
    ${authRecipe.colors.brand.accent}
  );
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 100% 0.25rem;
  padding-bottom: ${authRecipe.spacing[1]};
`

export const Description = styled.p.withConfig({
  componentId: 'lsui-sc-auth-brand-description',
})`
  max-width: 27.5rem;
  margin-top: ${authRecipe.spacing.responsive.block.sm};
  color: rgba(255, 255, 255, 0.7);
  font-size: ${authRecipe.typography.fontSize.lg};
  line-height: ${authRecipe.typography.lineHeight.normal};
`

export const FeatureList = styled.ul.withConfig({
  componentId: 'lsui-sc-auth-feature-list',
})`
  display: none;
  margin: ${authRecipe.spacing.responsive.block['2xl']} 0 0;
  padding: 0;
  list-style: none;

  @media (min-width: ${authRecipe.breakpoints.md}) {
    display: grid;
    gap: ${authRecipe.spacing[3]};
  }
`

export const Feature = styled.li.withConfig({
  componentId: 'lsui-sc-auth-feature',
})`
  display: flex;
  align-items: center;
  gap: ${authRecipe.spacing[3]};
  color: rgba(255, 255, 255, 0.92);
  font-size: ${authRecipe.typography.fontSize.md};
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
