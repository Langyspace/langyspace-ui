import { styled } from 'styled-components'
export const Root = styled.span.withConfig({
  componentId: 'lsui-sc-quiz-badge',
})`
  display: inline-flex;
  align-items: center;
  min-height: 1.75rem;
  padding: 0 0.75rem;
  border-radius: 999px;
  color: #ffffff;
  background: var(--quiz-ink, #0a0a0a);
  font-size: 0.75rem;
  font-weight: 700;
`
