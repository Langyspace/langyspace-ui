import { styled, keyframes } from 'styled-components'
import type { CSSProperties } from 'react'
import { theme } from '../../foundations/theme/theme'
import type { FlashcardSwiperExit } from './FlashcardSwiper.types'

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

interface SwiperStyleProps {
  $exit: FlashcardSwiperExit | null
}

const exitVector = ({ $exit }: SwiperStyleProps): CSSProperties | undefined =>
  $exit
    ? ({
        '--tr': $exit.rotate,
        '--tx': $exit.x,
        '--ty': $exit.y,
      } as CSSProperties)
    : undefined

// The exit vector changes per rating, so it is passed as inline custom properties.
export const Root = styled.div
  .withConfig({ componentId: 'lsui-sc-flashcard-swiper' })
  .attrs<SwiperStyleProps>((props) => ({ style: exitVector(props) }))`
  position: absolute;
  inset: 0;
  z-index: 3;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  animation: ${({ $exit }) => ($exit ? cardThrow : cardIn)}
    ${({ $exit }) => ($exit ? '0.3s' : '0.36s')}
    cubic-bezier(0.2, 0.85, 0.25, 1)
    ${({ $exit }) => ($exit ? 'forwards' : 'both')};

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.focusRing};
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
