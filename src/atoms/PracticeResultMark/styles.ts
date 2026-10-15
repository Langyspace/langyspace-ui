import { keyframes, styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
import { quizRecipe } from '../../foundations/quizRecipe'
const rise = keyframes`
  from { opacity: 0; transform: translateY(1.875rem); }
  to { opacity: 1; transform: translateY(0); }
`

export const CompletionMark = styled.div.withConfig({
  componentId: 'lsui-sc-practice-result-mark',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 5.25rem;
  height: 5.25rem;
  border-radius: ${quizRecipe.radius.circle};
  color: ${tokens.color.neutral[0]};
  background: ${tokens.color.accent.default};
  animation: ${rise} 0.32s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`
