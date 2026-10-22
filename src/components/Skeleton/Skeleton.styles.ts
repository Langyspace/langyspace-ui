import { styled, keyframes } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

const shimmer = keyframes`from{background-position:100% 0;}to{background-position:-100% 0;}`

export const Root = styled.span.withConfig({ componentId: 'lsui-sc-skeleton' })`
  display: block;
  max-width: 100%;
  height: 0.75rem;
  border-radius: ${theme.radius.pill};
  background: linear-gradient(
    90deg,
    ${theme.colors.palette.neutral[100]} 0%,
    ${theme.colors.palette.neutral[200]} 48%,
    ${theme.colors.palette.neutral[100]} 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.35s ease-in-out infinite;
  &[data-shape='circle'] {
    border-radius: 50%;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`
