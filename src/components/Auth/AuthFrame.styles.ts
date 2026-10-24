import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'

export const Page = styled.main.withConfig({
  componentId: 'lsui-sc-auth-frame',
})`
  display: grid;
  height: 100svh;
  min-height: 100svh;
  overflow: hidden;
  background-color: ${theme.colors.palette.white};

  @supports (height: 100dvh) {
    height: 100dvh;
    min-height: 100dvh;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
`

export const BrandPanel = styled.section`
  position: relative;
  display: none;
  min-height: 24rem;
  overscroll-behavior: none;
  overflow: hidden;
  background-color: ${theme.colors.palette.black};
  color: ${theme.colors.palette.white};

  &::before {
    position: absolute;
    top: -12.5rem;
    right: -12.5rem;
    width: 32.5rem;
    height: 32.5rem;
    border-radius: 50%;
    background-image: radial-gradient(
      circle at 30% 30%,
      ${theme.colors.accent.primary} 0%,
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
      ${alpha(theme.colors.palette.white, 0.06)} 0%,
      transparent 70%
    );
    content: '';
    pointer-events: none;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
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
  padding-top: ${theme.spacing.responsive.block.xl};
  padding-right: ${theme.spacing[6]};
  padding-bottom: ${theme.spacing.responsive.block.xl};
  padding-left: ${theme.spacing[6]};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.responsive.block['3xl']};
  }

  @media (min-width: ${theme.breakpoints.lg}) and (max-height: ${theme.viewportHeights.lg}) {
    padding-top: ${theme.spacing[8]};
    padding-bottom: ${theme.spacing[8]};
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
  background-color: ${theme.colors.palette.white};
  -webkit-overflow-scrolling: touch;

  @media (min-width: ${theme.breakpoints.lg}) {
    padding-top: ${theme.spacing.responsive.block['2xl']};
    padding-right: 3rem;
    padding-bottom: ${theme.spacing.responsive.block['2xl']};
    padding-left: 3rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) and (max-height: ${theme.viewportHeights.lg}) {
    padding-top: ${theme.spacing[6]};
    padding-bottom: ${theme.spacing[6]};
  }
`

export const MobileHeader = styled.div`
  display: grid;
  gap: ${theme.spacing.responsive.compactBlock.sm};
  padding-top: ${theme.spacing.responsive.compactBlock['2xl']};
  padding-right: ${theme.spacing[6]};
  padding-left: ${theme.spacing[6]};

  @media (min-width: ${theme.breakpoints.sm}) {
    align-items: center;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`

export const MobileCardAction = styled.div`
  display: flex;
  min-width: 0;
  justify-content: center;
  margin-top: ${theme.spacing.responsive.compactBlock.md};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};
  text-align: center;

  @media (min-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`

export const TopBar = styled.div`
  display: none;
  justify-content: flex-end;
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.sm};

  @media (min-width: ${theme.breakpoints.lg}) {
    display: flex;
  }
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  padding-top: ${theme.spacing.responsive.compactBlock['3xl']};
  padding-right: ${theme.spacing[6]};
  padding-bottom: ${theme.spacing.responsive.compactBlock.xl};
  padding-left: ${theme.spacing[6]};

  @media (min-width: ${theme.breakpoints.lg}) {
    align-items: center;
    padding-top: ${theme.spacing.responsive.block['2xl']};
    padding-right: 0;
    padding-bottom: ${theme.spacing.responsive.block['2xl']};
    padding-left: 0;
  }

  @media (min-width: ${theme.breakpoints.lg}) and (max-height: ${theme.viewportHeights.lg}) {
    padding-top: ${theme.spacing[6]};
    padding-bottom: ${theme.spacing[6]};
  }
`

export const Card = styled.div`
  width: 100%;
  max-width: 27.5rem;
`
