import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'

export const PracticeLessonPreview = styled.div`
  &&&& {
    max-width: 20rem;
    border: 1px solid ${theme.colors.palette.neutral[300]};
    border-radius: 1rem;
    overflow: hidden;
  }
`

export const CompletedLessonPreview = styled.div`
  &&&& {
    max-width: 16.875rem;
  }
`
