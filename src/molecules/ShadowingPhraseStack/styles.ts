import { styled, keyframes } from 'styled-components'
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
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  animation: ${({ $rising }) => ($rising ? shadowRise : 'none')} 0.45s
    cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (min-width: 640px) and (max-width: 900px) and (min-height: 761px) {
    gap: 1rem;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`
