import { styled, keyframes } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { alpha } from '../../foundations/theme/alpha'

const shadowPulse = keyframes`
  0%,
  100% {
    box-shadow: 0 0 0 0 ${alpha(theme.colors.palette.accent.pink, 0.35)};
  }

  50% {
    box-shadow: 0 0 0 5px ${alpha(theme.colors.palette.accent.pink, 0)};
  }
`

export const Dot = styled.span``

export const Label = styled.span``

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-repetitions',
})`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};

  ${Dot} {
    width: 0.5625rem;
    height: 0.5625rem;
    border-radius: 50%;
    background: ${theme.colors.palette.neutral[400]};
    transition:
      background 0.2s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  ${Dot}[data-active] {
    background: ${theme.colors.palette.accent.pink};
    transform: scale(1.12);
  }

  ${Dot}[data-live] {
    animation: ${shadowPulse} 1s ease-in-out infinite;
  }

  ${Label} {
    margin-left: ${theme.spacing[1]};
    color: ${theme.colors.text.muted};
    font-family: ${theme.typography.fontFamily.mono};
    font-size: ${theme.typography.fontSize.xs};
    font-weight: ${theme.typography.fontWeight.bold};
  }

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (min-height: ${theme.viewportHeights.tall}) {
    ${Dot} {
      width: 0.625rem;
      height: 0.625rem;
    }

    ${Label} {
      font-size: ${theme.typography.fontSize.sm};
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    & * {
      animation: none;
      transition: none;
    }
  }
`
