import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'

export const Questions = styled.div`
  display: grid;
  gap: ${theme.spacing[4]};
  min-width: 0;
`
export const QuestionGroup = styled.section`
  display: grid;
  gap: ${theme.spacing[2]};
  min-width: 0;
`
export const GroupTitle = styled.h3`
  margin: 0;
  font-family: ${(p) => resolveSlideTheme(p).displayFontFamily};
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: inherit;
`
