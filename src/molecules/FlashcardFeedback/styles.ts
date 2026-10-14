import { styled, keyframes } from 'styled-components'
const rise = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.625rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
const pop = keyframes`
  from {
    opacity: 0;
    transform: scale(0.3);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-feedback',
})`
  position: absolute;
  inset: 0;
  z-index: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  overflow: hidden;
  border-radius: 1.625rem;
  background: rgba(255, 255, 255, 0.92);
  animation: ${fadeIn} 0.18s ease;
  backdrop-filter: blur(5px);

  .circle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    color: #ffffff;
    animation: ${pop} 0.46s cubic-bezier(0.2, 1.45, 0.4, 1);
  }

  .message {
    padding: 0 1.625rem;
    font-size: 1.625rem;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.15;
    text-align: center;
    animation: ${rise} 0.34s ease both 0.07s;
  }

  .next {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    margin-top: -0.25rem;
    color: var(--fc-muted);
    font-family:
      'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 0.78125rem;
    font-weight: 500;
    white-space: nowrap;
    animation: ${rise} 0.34s ease both 0.13s;
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    & * {
      animation: none !important;
      transition: none !important;
    }
  }
`
