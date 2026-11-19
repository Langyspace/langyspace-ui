import { RevealCard } from '../../../src/components/Exercise/RevealCard'
import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'
export * from '../shared/Lesson.styles'
export const Columns = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: ${theme.spacing[6]};
  min-width: 0;
  @container (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Paper = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[6]};
  background: ${(p) => resolveSlideTheme(p).surface};
  border: 1px solid ${(p) => resolveSlideTheme(p).border};
  border-radius: ${(p) => resolveSlideTheme(p).panelRadius};
  font-family: ${theme.typography.fontFamily.sans};
  line-height: 1.65;
  p {
    margin: 0;
    white-space: pre-line;
  }
  header {
    padding-bottom: ${theme.spacing[4]};
    border-bottom: 1px solid ${(p) => resolveSlideTheme(p).border};
  }
  small {
    display: block;
    color: ${(p) => resolveSlideTheme(p).muted};
  }
  @container (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing[4]};
  }
`
export const Note = styled(Paper)`
  font-size: ${theme.typography.fontSize.xl};
  strong {
    color: ${(p) => resolveSlideTheme(p).indicator};
  }
`
export const ExpressionList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
  min-width: 0;
  @container (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Disclosure = styled.details`
  padding: ${theme.spacing[4]};
  border: 1px solid ${(p) => resolveSlideTheme(p).border};
  border-radius: ${(p) => resolveSlideTheme(p).panelRadius};
  background: ${(p) => resolveSlideTheme(p).surface};
  min-width: 0;
  line-height: 1.5;
  summary {
    cursor: pointer;
    font-weight: ${theme.typography.fontWeight.semibold};
  }
  summary:focus-visible {
    outline: 2px solid ${(p) => resolveSlideTheme(p).indicator};
    outline-offset: ${theme.spacing[1]};
  }
  p {
    margin: ${theme.spacing[3]} 0 0;
  }
  b {
    color: ${(p) => resolveSlideTheme(p).indicator};
  }
  small {
    display: block;
    color: ${(p) => resolveSlideTheme(p).muted};
  }
`
export const Forms = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
  label {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[2]};
    font-size: ${theme.typography.fontSize.sm};
  }
  @container (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const AudioStatus = styled.p`
  color: ${(p) => resolveSlideTheme(p).indicator};
  margin: 0;
`

export const QuestionReveal = styled(RevealCard)`
  grid-template-columns: auto minmax(0, 1fr) auto;
  > span:last-child {
    grid-column: 2 / -1;
    font-weight: ${theme.typography.fontWeight.regular};
  }
  &[aria-expanded='false'] > span:last-child {
    display: none;
  }
  @container (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: auto minmax(0, 1fr) auto;
  }
`
