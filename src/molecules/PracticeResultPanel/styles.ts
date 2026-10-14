import { keyframes, styled } from 'styled-components'
import { tokens } from '../../foundations/tokens'
import { quizRecipe } from '../../foundations/quizRecipe'

const rise = keyframes`
  from { opacity: 0; transform: translateY(1.875rem); }
  to { opacity: 1; transform: translateY(0); }
`

export const Panel = styled.div.withConfig({
  componentId: 'lsui-sc-practice-result-panel',
})`
  display: flex;
  min-height: min(70svh, 34rem);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${tokens.spacing[4]};
  text-align: center;

  > p {
    max-width: 22rem;
    margin: 0;
    color: ${tokens.color.content.muted};
    font-size: ${tokens.typography.fontSize.sm};
    line-height: ${tokens.typography.lineHeight.normal};
  }
`

export const Title = styled.h2`
  margin: 0;
  color: ${tokens.color.content.default};
  font-size: ${tokens.typography.fontSize['2xl']};
  font-weight: ${tokens.typography.fontWeight.bold};
`

export const CompletionMark = styled.div`
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

export const Actions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${tokens.spacing[2]};
  margin-top: ${tokens.spacing[1]};

  > button {
    width: 100%;
    align-self: stretch;
  }
`
