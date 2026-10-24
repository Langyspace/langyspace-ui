import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'

export const Feedback = styled.div.withConfig({
  componentId: 'lsui-sc-quiz-feedback',
})<{ $correct: boolean }>`
  display: flex;
  gap: ${theme.spacing[3]};
  align-items: flex-start;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border-radius: ${theme.radius.lg};
  background: ${({ $correct }) => ($correct ? theme.colors.palette.feedback.successSoft : theme.colors.palette.extended.red50)};
  color: ${({ $correct }) => ($correct ? theme.semantic.status.success.foreground : theme.colors.palette.extended.red700)};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
`
