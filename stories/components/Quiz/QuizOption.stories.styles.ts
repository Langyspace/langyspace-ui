import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'

export const AnswerPreview = styled.div`
  &&&& {
    max-width: 30rem;
  }
`

export const AnswerStates = styled.div`
  &&&& {
    display: grid;
    gap: 1rem;
  }
`

export const InlineStates = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
`
