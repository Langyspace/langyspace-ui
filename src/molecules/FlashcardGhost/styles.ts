import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-ghost',
})<{ $layer: 1 | 2; $obscured?: boolean }>`
  position: absolute;
  inset: 0;
  z-index: ${({ $layer }) => ($layer === 1 ? 1 : 0)};
  border: 1px solid var(--fc-line);
  border-radius: 1.625rem;
  background: var(--fc-paper);
  box-shadow: ${({ $layer, $obscured }) =>
    $obscured
      ? 'none'
      : $layer === 1
        ? '0 10px 22px rgba(10, 10, 10, 0.05)'
        : '0 8px 16px rgba(10, 10, 10, 0.04)'};
  opacity: ${({ $layer, $obscured }) => ($obscured ? 0 : $layer === 1 ? 0.85 : 0.6)};
  transform: ${({ $layer }) =>
    $layer === 1
      ? 'translateY(0.8125rem) scale(0.955)'
      : 'translateY(1.5625rem) scale(0.91)'};
  visibility: ${({ $obscured }) => ($obscured ? 'hidden' : 'visible')};
  transition:
    opacity 0.12s ease,
    box-shadow 0.12s ease,
    visibility 0s linear ${({ $obscured }) => ($obscured ? '0s' : '0.12s')};

  @media (prefers-reduced-motion: reduce) {
    &,
    & * {
      transition: none !important;
    }
  }
`
