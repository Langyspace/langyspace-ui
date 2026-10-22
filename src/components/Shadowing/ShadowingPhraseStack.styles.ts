import { styled, keyframes } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

const shadowRise = keyframes`
  from {
    opacity: 0;
    transform: translateY(1.875rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-phrase-stack',
})<{ $rising?: boolean }>`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing[3]};
  text-align: center;
  animation: ${({ $rising }) => ($rising ? shadowRise : 'none')} 0.45s
    cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (min-width: ${theme.breakpoints.sm}) and (max-width: ${theme.breakpoints.mobileShell}) and (min-height: ${theme.viewportHeights.tall}) {
    gap: ${theme.spacing[4]};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`
