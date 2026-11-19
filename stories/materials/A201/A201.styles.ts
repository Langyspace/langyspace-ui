import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { LearningDialogue } from '../../../src/components/Exercise/LearningDialogue'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { Surface } from '../shared/Lesson.styles'
export const Vocabulary = styled(VocabularyGrid)`
  max-width: 56rem;
  > button {
    aspect-ratio: 4 / 3;
  }
  @container (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
    max-width: 25rem;
  }
`
export const Dialogue = styled(LearningDialogue)`
  [aria-label='Ana'] img {
    width: 204.8%;
    height: auto;
    max-width: none;
    left: -18%;
    top: 0;
    object-fit: contain;
  }
`
export const Page = styled(SlidePage)`
  &[data-opening='true'] h2 {
    font-size: clamp(2.125rem, 4cqw, 3rem);
    line-height: 1.12;
  }
  h2 em {
    font-family: ${(p) => resolveSlideTheme(p).accentFontFamily};
    color: ${(p) => resolveSlideTheme(p).foreground};
    font-weight: ${theme.typography.fontWeight.regular};
  }
`
export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[4]};
  min-width: 0;
  @container (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Info = styled(Surface)`
  gap: ${theme.spacing[2]};
  line-height: 1.5;
  p,
  h3 {
    margin: 0;
  }
  b {
    color: ${(p) => resolveSlideTheme(p).accent};
  }
`
export const Formula = styled.p`
  margin: 0;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border-radius: ${(p) => resolveSlideTheme(p).panelRadius};
  background: ${(p) => resolveSlideTheme(p).surface};
  font-family: ${(p) => resolveSlideTheme(p).displayFontFamily};
  line-height: 1.6;
  b {
    color: ${(p) => resolveSlideTheme(p).accent};
  }
`
export const NoWrap = styled.span`
  white-space: nowrap;
`
export const Grammar = styled(GrammarTable)<{ $questions?: boolean }>`
  table {
    table-layout: fixed;
  }
  th,
  td {
    overflow-wrap: anywhere;
  }
  th:first-child {
    width: ${(p) => (p.$questions ? '58%' : '35%')};
  }
  caption,
  thead th {
    background: ${(p) => resolveSlideTheme(p).surface};
    color: ${(p) => resolveSlideTheme(p).muted};
  }
  tbody th > span {
    padding: 0;
    border-radius: 0;
    background: transparent;
    color: ${(p) => resolveSlideTheme(p).foreground};
  }
  @container (max-width: ${theme.breakpoints.sm}) {
    th,
    td {
      padding: ${theme.spacing[2]};
    }
  }
`
export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[8]};
  h1 {
    margin: 0;
    font-family: ${(p) => resolveSlideTheme(p).displayFontFamily};
    font-size: clamp(2.25rem, 5.6cqh, 3.6rem);
    letter-spacing: -0.03em;
    line-height: 1.08;
  }
  em {
    font-family: ${(p) => resolveSlideTheme(p).accentFontFamily};
    color: ${(p) => resolveSlideTheme(p).indicator};
    font-weight: ${theme.typography.fontWeight.regular};
  }
`
export const Player = styled(Surface)`
  width: 100%;
  max-width: 32rem;
  margin-inline: auto;
  box-sizing: border-box;
  progress {
    width: 100%;
    accent-color: ${(p) => resolveSlideTheme(p).accent};
  }
`
export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  font-family: ${(p) => resolveSlideTheme(p).displayFontFamily};
`
export const Transcript = styled.div`
  line-height: 1.6;
  p {
    margin: 0 0 ${theme.spacing[3]};
  }
`
export const Question = styled.fieldset`
  min-width: 0;
  margin: 0;
  padding: ${theme.spacing[3]};
  border: 1px solid ${(p) => resolveSlideTheme(p).border};
  border-radius: ${(p) => resolveSlideTheme(p).panelRadius};
  legend {
    padding-inline: ${theme.spacing[1]};
    font-weight: ${theme.typography.fontWeight.bold};
  }
`
export const CueImage = styled.img`
  display: block;
  width: min(100%, 30rem);
  aspect-ratio: 4 / 3;
  object-fit: contain;
  border-radius: ${(p) => resolveSlideTheme(p).panelRadius};
  margin-inline: auto;
`
