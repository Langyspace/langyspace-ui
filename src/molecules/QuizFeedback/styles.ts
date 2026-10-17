import { styled } from 'styled-components'
import { quizRecipe } from '../../foundations/quizRecipe'

export const Feedback = styled.div.withConfig({
  componentId: 'lsui-sc-quiz-feedback',
})<{ $correct: boolean }>`
  display: flex;
  gap: ${quizRecipe.spacing[3]};
  align-items: flex-start;
  padding: ${quizRecipe.spacing[3]} ${quizRecipe.spacing[4]};
  border-radius: ${quizRecipe.radius.lg};
  background: ${({ $correct }) => ($correct ? '#dcfce7' : '#fef2f2')};
  color: ${({ $correct }) => ($correct ? '#166534' : '#b91c1c')};
  font-size: ${quizRecipe.typography.fontSize.sm};
  line-height: ${quizRecipe.typography.lineHeight.normal};
`
