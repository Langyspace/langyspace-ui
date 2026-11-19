import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'
import { Row, Stack, Surface } from './Lesson.styles'

export const Root = styled(Stack)`
  gap: ${theme.spacing[4]};
`

export const Modes = styled(Row)`
  gap: ${theme.spacing[2]};
`

export const Cue = styled.p`
  margin: 0;
  font-family: ${(p) => resolveSlideTheme(p).displayFontFamily};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.4;
  overflow-wrap: anywhere;
`

export const Navigation = styled(Row)`
  justify-content: space-between;
`

export const Task = styled(Surface)`
  padding: ${theme.spacing[6]};
`
