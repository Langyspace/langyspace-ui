import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
export * from '../shared/Lesson.styles'
export const SceneImage = styled.img`
  width: 100%;
  max-height: 28rem;
  object-fit: contain;
  aspect-ratio: 3/2;
  border-radius: ${(p) => resolveSlideTheme(p).panelRadius};
  @container (max-width:${theme.breakpoints.sm}) {
    max-height: none;
  }
`
export const RecallImages = styled.div`
  display: flex;
  gap: ${theme.spacing[2]};
  img {
    width: clamp(6rem, 14cqw, 12rem);
    height: auto;
    aspect-ratio: 4/3;
    object-fit: contain;
    border-radius: ${theme.radius.md};
  }
`
export const PictureStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
  gap: ${theme.spacing[2]};
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: contain;
    border-radius: ${theme.radius.md};
  }
`
export const GrammarColumns = styled.div<{ $explanation: boolean }>`
  display: grid;
  grid-template-columns: ${(p) => (p.$explanation ? 'minmax(0, 0.8fr) minmax(0, 1.3fr)' : 'minmax(0, 1fr)')};
  gap: ${theme.spacing[6]};
  @container (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const LessonTable = styled(GrammarTable)`
  table {
    table-layout: fixed;
  }
  thead th {
    letter-spacing: normal;
    overflow-wrap: normal;
  }
  thead th:first-child {
    width: 38%;
  }
  thead th:nth-child(2) {
    width: 24%;
  }
  @container (max-width: ${theme.breakpoints.sm}) {
    table,
    tbody,
    tr,
    th,
    td {
      display: block;
      width: 100%;
      min-width: 0;
    }
    caption {
      display: block;
      box-sizing: border-box;
      width: 100%;
    }
    thead {
      display: none;
    }
    tr {
      padding-block: ${theme.spacing[3]};
      border-bottom: 1px solid ${(p) => resolveSlideTheme(p).border};
    }
    th,
    td {
      border: 0;
      overflow-wrap: anywhere;
    }
  }
`
export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${theme.spacing[2]};
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: contain;
    border-radius: ${theme.radius.md};
  }
`
export const NoteFields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[2]};
  label {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[1]};
    font-size: ${theme.typography.fontSize.sm};
    color: ${(p) => resolveSlideTheme(p).muted};
  }
  @container (max-width:${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

export const GrammarSummary = styled.div`
  display: grid;
  gap: ${theme.spacing[3]};
`

export const LargeVocabularyGrid = styled(VocabularyGrid)`
  max-width: 100%;
  button {
    display: flex;
    flex-direction: column;
    aspect-ratio: auto;
  }
  button img {
    position: static;
    height: auto;
    aspect-ratio: 1;
  }
  button > span {
    position: static;
    inset: auto;
    width: 100%;
  }
`
