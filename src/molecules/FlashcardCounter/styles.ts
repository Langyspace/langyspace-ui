import { styled } from 'styled-components'
export const Root = styled.div.withConfig({
  componentId: 'lsui-sc-flashcard-counter',
})`
  flex-shrink: 0;
  color: var(--fc-muted-2, #6b6b6b);
  font-size: 0.75rem;
  font-variant-numeric: tabular-nums;
  font-weight: 500;

  b {
    color: var(--fc-ink, #0a0a0a);
    font-weight: 700;
  }
`
