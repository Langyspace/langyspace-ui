import { styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'

// Shared auth recipe preserves the established panel rhythm and product breakpoints.
const recipe = {
  breakpoints: { sm: '640px', md: '768px', lg: '1024px' },
  blockXl: `clamp(${tokens.spacing[6]}, 4svh, ${tokens.spacing[8]})`,
  block2Xl: `clamp(${tokens.spacing[6]}, 4svh, 2.5rem)`,
  block3Xl: `clamp(${tokens.spacing[8]}, 5svh, 2.5rem)`,
  compactSm: `clamp(${tokens.spacing[3]}, 2svh, ${tokens.spacing[4]})`,
  compactMd: `clamp(${tokens.spacing[3]}, 2.5svh, ${tokens.spacing[5]})`,
  compactXl: `clamp(${tokens.spacing[4]}, 3.5svh, ${tokens.spacing[8]})`,
  compact2Xl: `clamp(${tokens.spacing[5]}, 4svh, 2.5rem)`,
  compact3Xl: `clamp(${tokens.spacing[6]}, 5svh, 3rem)`,
} as const

export const Page = styled.main.withConfig({
  componentId: 'lsui-sc-auth-frame',
})`
  display: grid;
  height: 100svh;
  min-height: 100svh;
  overflow: hidden;
  background-color: ${tokens.color.neutral[0]};

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
  color: ${tokens.color.neutral[0]};

  &::before {
    position: absolute;
    top: -12.5rem;
    right: -12.5rem;
    width: 32.5rem;
    height: 32.5rem;
    border-radius: 50%;
    background-image: radial-gradient(
      circle at 30% 30%,
      ${tokens.color.accent.default} 0%,
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
  padding-right: ${tokens.spacing[6]};
  padding-bottom: ${recipe.blockXl};
  padding-left: ${tokens.spacing[6]};

  @media (min-width: ${recipe.breakpoints.md}) {
    padding: ${recipe.block3Xl};
  }

  @media (min-width: ${recipe.breakpoints.lg}) and (max-height: 760px) {
    padding-top: ${tokens.spacing[8]};
    padding-bottom: ${tokens.spacing[8]};
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
  background-color: ${tokens.color.neutral[0]};
  -webkit-overflow-scrolling: touch;

  @media (min-width: ${recipe.breakpoints.lg}) {
    padding-top: ${recipe.block2Xl};
    padding-right: 3rem;
    padding-bottom: ${recipe.block2Xl};
    padding-left: 3rem;
  }

  @media (min-width: ${recipe.breakpoints.lg}) and (max-height: 760px) {
    padding-top: ${tokens.spacing[6]};
    padding-bottom: ${tokens.spacing[6]};
  }
`

export const MobileHeader = styled.div`
  display: grid;
  gap: ${recipe.compactSm};
  padding-top: ${recipe.compact2Xl};
  padding-right: ${tokens.spacing[6]};
  padding-left: ${tokens.spacing[6]};

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
  color: ${tokens.color.content.muted};
  font-size: ${tokens.typography.fontSize.sm};
  text-align: center;

  @media (min-width: ${recipe.breakpoints.lg}) {
    display: none;
  }
`

export const TopBar = styled.div`
  display: none;
  justify-content: flex-end;
  color: ${tokens.color.content.muted};
  font-size: ${tokens.typography.fontSize.sm};

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
  padding-right: ${tokens.spacing[6]};
  padding-bottom: ${recipe.compactXl};
  padding-left: ${tokens.spacing[6]};

  @media (min-width: ${recipe.breakpoints.lg}) {
    align-items: center;
    padding-top: ${recipe.block2Xl};
    padding-right: 0;
    padding-bottom: ${recipe.block2Xl};
    padding-left: 0;
  }

  @media (min-width: ${recipe.breakpoints.lg}) and (max-height: 760px) {
    padding-top: ${tokens.spacing[6]};
    padding-bottom: ${tokens.spacing[6]};
  }
`

export const Card = styled.div`
  width: 100%;
  max-width: 27.5rem;
`
