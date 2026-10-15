import { styled } from 'styled-components'
import * as token from '../../foundations/tokenValues'
import { authRecipe } from '../../foundations/authRecipe'

// Shared auth recipe preserves the established panel rhythm and product breakpoints.
const recipe = {
  breakpoints: authRecipe.breakpoints,
  blockXl: authRecipe.spacing.responsive.block.xl,
  block2Xl: authRecipe.spacing.responsive.block['2xl'],
  block3Xl: `clamp(${token.spacing8}, 5svh, 2.5rem)`,
  compactSm: authRecipe.spacing.responsive.compactBlock.sm,
  compactMd: authRecipe.spacing.responsive.compactBlock.md,
  compactXl: authRecipe.spacing.responsive.compactBlock.xl,
  compact2Xl: `clamp(${token.spacing5}, 4svh, 2.5rem)`,
  compact3Xl: `clamp(${token.spacing6}, 5svh, 3rem)`,
} as const

export const Page = styled.main.withConfig({
  componentId: 'lsui-sc-auth-frame',
})`
  display: grid;
  height: 100svh;
  min-height: 100svh;
  overflow: hidden;
  background-color: ${token.colorNeutral0};

  @supports (height: 100dvh) {
    height: 100dvh;
    min-height: 100dvh;
  }

  @media (min-width: ${recipe.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
`

export const BrandPanel = styled.section`
  position: relative;
  display: none;
  min-height: 24rem;
  overscroll-behavior: none;
  overflow: hidden;
  background-color: #000000;
  color: ${token.colorNeutral0};

  &::before {
    position: absolute;
    top: -12.5rem;
    right: -12.5rem;
    width: 32.5rem;
    height: 32.5rem;
    border-radius: 50%;
    background-image: radial-gradient(
      circle at 30% 30%,
      ${token.colorAccentDefault} 0%,
      transparent 60%
    );
    opacity: 0.45;
    content: '';
    pointer-events: none;
  }

  &::after {
    position: absolute;
    bottom: -16rem;
    left: -11rem;
    width: 29rem;
    height: 29rem;
    border-radius: 50%;
    background-image: radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.06) 0%,
      transparent 70%
    );
    content: '';
    pointer-events: none;
  }

  @media (min-width: ${recipe.breakpoints.lg}) {
    display: flex;
    min-height: 100svh;

    @supports (min-height: 100dvh) {
      min-height: 100dvh;
    }
  }
`

export const BrandInner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-width: 34rem;
  padding-top: ${recipe.blockXl};
  padding-right: ${token.spacing6};
  padding-bottom: ${recipe.blockXl};
  padding-left: ${token.spacing6};

  @media (min-width: ${recipe.breakpoints.md}) {
    padding: ${recipe.block3Xl};
  }

  @media (min-width: ${recipe.breakpoints.lg}) and (max-height: 760px) {
    padding-top: ${token.spacing8};
    padding-bottom: ${token.spacing8};
  }
`

export const FormPanel = styled.section`
  position: relative;
  display: flex;
  min-height: 0;
  height: 100%;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  background-color: ${token.colorNeutral0};
  -webkit-overflow-scrolling: touch;

  @media (min-width: ${recipe.breakpoints.lg}) {
    padding-top: ${recipe.block2Xl};
    padding-right: 3rem;
    padding-bottom: ${recipe.block2Xl};
    padding-left: 3rem;
  }

  @media (min-width: ${recipe.breakpoints.lg}) and (max-height: 760px) {
    padding-top: ${token.spacing6};
    padding-bottom: ${token.spacing6};
  }
`

export const MobileHeader = styled.div`
  display: grid;
  gap: ${recipe.compactSm};
  padding-top: ${recipe.compact2Xl};
  padding-right: ${token.spacing6};
  padding-left: ${token.spacing6};

  @media (min-width: ${recipe.breakpoints.sm}) {
    align-items: center;
  }

  @media (min-width: ${recipe.breakpoints.lg}) {
    display: none;
  }
`

export const MobileCardAction = styled.div`
  display: flex;
  min-width: 0;
  justify-content: center;
  margin-top: ${recipe.compactMd};
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeSm};
  text-align: center;

  @media (min-width: ${recipe.breakpoints.lg}) {
    display: none;
  }
`

export const TopBar = styled.div`
  display: none;
  justify-content: flex-end;
  color: ${token.colorContentMuted};
  font-size: ${token.typographyFontSizeSm};

  @media (min-width: ${recipe.breakpoints.lg}) {
    display: flex;
  }
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  padding-top: ${recipe.compact3Xl};
  padding-right: ${token.spacing6};
  padding-bottom: ${recipe.compactXl};
  padding-left: ${token.spacing6};

  @media (min-width: ${recipe.breakpoints.lg}) {
    align-items: center;
    padding-top: ${recipe.block2Xl};
    padding-right: 0;
    padding-bottom: ${recipe.block2Xl};
    padding-left: 0;
  }

  @media (min-width: ${recipe.breakpoints.lg}) and (max-height: 760px) {
    padding-top: ${token.spacing6};
    padding-bottom: ${token.spacing6};
  }
`

export const Card = styled.div`
  width: 100%;
  max-width: 27.5rem;
`
