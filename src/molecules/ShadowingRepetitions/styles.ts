import { styled, keyframes } from 'styled-components'
const shadowPulse = keyframes`
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(255, 31, 92, 0.35);
  }

  50% {
    box-shadow: 0 0 0 5px rgba(255, 31, 92, 0);
  }
`
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-shadowing-repetitions',
})`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  .dot {
    width: 0.5625rem;
    height: 0.5625rem;
    border-radius: 50%;
    background: #d9d9d6;
    transition:
      background 0.2s ease,
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .dot.on {
    background: #ff1f5c;
    transform: scale(1.12);
  }

  .dot.live {
    animation: ${shadowPulse} 1s ease-in-out infinite;
  }

  .label {
    margin-left: 0.25rem;
    color: #6b6b6b;
    font-family:
      'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 0.75rem;
    font-weight: 700;
  }

  @media (min-width: 640px) and (max-width: 900px) and (min-height: 761px) {
    .dot {
      width: 0.625rem;
      height: 0.625rem;
    }

    .label {
      font-size: 0.875rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    & * {
      animation: none;
      transition: none;
    }
  }
`
