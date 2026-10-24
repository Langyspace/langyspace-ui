import { css, styled } from 'styled-components'
import { theme } from '../../foundations/theme/theme'
import type {
  QuizResponseMarkVariant,
  QuizResponseTone,
} from './QuizResponseMark.types'

const backgrounds = {
  feedback: {
    correct: theme.colors.palette.feedback.success,
    wrong: theme.colors.palette.extended.red600,
  },
  option: {
    correct: theme.colors.feedback.success,
    wrong: theme.colors.feedback.danger,
  },
} as const

const optionPlacement = css`
  margin-left: auto;
  width: 1.625rem;
  height: 1.625rem;
`

export const Mark = styled.span<{
  $tone: QuizResponseTone
  $variant: QuizResponseMarkVariant
}>`
  width: 1.375rem;
  height: 1.375rem;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radius.circle};
  color: ${theme.colors.text.inverse};
  background: ${({ $tone, $variant }) => backgrounds[$variant][$tone]};
  ${({ $variant }) => $variant === 'option' && optionPlacement}
`
