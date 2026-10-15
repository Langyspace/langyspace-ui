import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-flip',
})<{ $flipped?: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-transform: ${({ $flipped }) => ($flipped ? 'rotateY(180deg)' : 'none')};
  transform: ${({ $flipped }) => ($flipped ? 'rotateY(180deg)' : 'none')};
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition:
    -webkit-transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1),
    transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: transform;

  [data-ui-flashcard-face='front'] {
    pointer-events: ${({ $flipped }) => ($flipped ? 'none' : 'auto')};
  }

  [data-ui-flashcard-face='back'] {
    pointer-events: ${({ $flipped }) => ($flipped ? 'auto' : 'none')};
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    & * {
      transition: none !important;
    }
  }
`
