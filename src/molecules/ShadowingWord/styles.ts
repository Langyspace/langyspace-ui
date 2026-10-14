import { styled } from 'styled-components'
export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-shadowing-word',
})<{ $state: 'pending' | 'current' | 'spoken' }>`
  display: inline-block;
  color: ${({ $state }) => ($state === 'current' ? '#ff1f5c' : '#0a0a0a')};
  font-weight: ${({ $state }) => ($state === 'current' ? 700 : 'inherit')};
  transform: ${({ $state }) => ($state === 'current' ? 'translateY(-.125rem) scale(1.07)' : 'none')};
  transition:
    color 0.12s ease,
    transform 0.12s ease;
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`
