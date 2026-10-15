import { styled } from 'styled-components'
import { quizRecipe } from '../../foundations/quizRecipe'
export const Mark = styled.span`
  width: 1.375rem;
  height: 1.375rem;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${quizRecipe.radius.circle};
  color: ${quizRecipe.colors.text.inverse};

  &.correct {
    background: #16a34a;
  }

  &.wrong {
    background: #dc2626;
  }
`
