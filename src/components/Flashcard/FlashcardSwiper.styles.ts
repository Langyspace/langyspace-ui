import { styled, keyframes } from 'styled-components'

const cardIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(1.25rem) scale(0.94);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

const cardThrow = keyframes`
  to {
    opacity: 0;
    transform: translate(var(--tx, 0), var(--ty, -2.5rem)) rotate(var(--tr, 0)) scale(0.92);
  }
`

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-swiper',
})<{ $exiting?: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 3;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  animation: ${({ $exiting }) => ($exiting ? cardThrow : cardIn)}
    ${({ $exiting }) => ($exiting ? '0.3s' : '0.36s')}
    cubic-bezier(0.2, 0.85, 0.25, 1)
    ${({ $exiting }) => ($exiting ? 'forwards' : 'both')};

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px #00f2ea52;
    border-radius: 1.625rem;
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    & * {
      animation: none !important;
      transition: none !important;
    }
  }
`
