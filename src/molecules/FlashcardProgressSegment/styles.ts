import { styled } from 'styled-components'
export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-flashcard-progress-segment',
  shouldForwardProp: (prop) => prop !== 'state',
})<{ state: 'pending' | 'current' | 'done' }>`
  position: relative;
  height: 0.3125rem;
  flex: 1;
  overflow: hidden;
  border-radius: 999px;
  background: #eeece8;

  &::after {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: ${({ state }) => (state === 'current' ? 'var(--fc-pink, #f10f4d)' : 'var(--fc-ink, #0a0a0a)')};
    content: '';
    transform: scaleX(
      ${({ state }) => (state === 'done' ? 1 : state === 'current' ? 0.5 : 0)}
    );
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: none;
    }
  }
`
