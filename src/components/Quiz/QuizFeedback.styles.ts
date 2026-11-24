import { styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import { resolveTheme } from '../../foundations/theme/resolveTheme'

export const Feedback = styled.div.withConfig({
  componentId: 'lsui-sc-quiz-feedback',
})<{ $correct: boolean }>`
  display: flex;
  gap: ${theme.spacing[3]};
  align-items: flex-start;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border-radius: ${theme.radius.lg};
  background: ${(p) => (p.$correct ? (resolveTheme(p).colors?.palette.feedback.successSoft ?? theme.colors.palette.feedback.successSoft) : (resolveTheme(p).colors?.palette.extended.red50 ?? theme.colors.palette.extended.red50))};
  color: ${(p) => (p.$correct ? (resolveTheme(p).semantic?.status.success.foreground ?? theme.semantic.status.success.foreground) : (resolveTheme(p).colors?.palette.extended.red700 ?? theme.colors.palette.extended.red700))};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.normal};
`
