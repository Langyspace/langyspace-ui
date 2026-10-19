import { styled } from 'styled-components'

export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-face',
})`
  position: absolute;
  inset: 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  border: 1px solid var(--fc-line);
  border-radius: 1.625rem;
  background: var(--fc-paper);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.9) inset,
    0 18px 40px rgba(10, 10, 10, 0.1),
    0 4px 10px rgba(10, 10, 10, 0.05);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;

  &[data-side='front'] {
    -webkit-transform: rotateY(0deg) translateZ(0.0625rem);
    transform: rotateY(0deg) translateZ(0.0625rem);
  }

  &[data-side='back'] {
    -webkit-transform: rotateY(180deg) translateZ(0.0625rem);
    transform: rotateY(180deg) translateZ(0.0625rem);
    background: radial-gradient(
      125% 95% at 50% 44%,
      var(--fc-pink-tint) 0%,
      #fffdfc 68%
    );
  }

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 46%;
    background: radial-gradient(
      120% 80% at 50% 0%,
      rgba(255, 255, 255, 0.7),
      transparent 70%
    );
    content: '';
    pointer-events: none;
  }
`
