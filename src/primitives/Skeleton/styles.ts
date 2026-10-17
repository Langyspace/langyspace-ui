import { styled, keyframes } from 'styled-components'
import * as token from '../../foundations/tokenValues'

const shimmer = keyframes`from{background-position:100% 0;}to{background-position:-100% 0;}`

export const Root = styled.span.withConfig({ componentId: 'lsui-sc-skeleton' })`
  display: block;
  max-width: 100%;
  height: 0.75rem;
  border-radius: ${token.radiusPill};
  background: linear-gradient(90deg, #fafaf9 0%, #f1f1ef 48%, #fafaf9 100%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.35s ease-in-out infinite;
  &[data-shape='circle'] {
    border-radius: 50%;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`
