import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
export * from '../shared/Lesson.styles'
export const SceneImage = styled.img`
  width: 100%;
  max-height: 36cqh;
  object-fit: contain;
  aspect-ratio: 3/2;
  border-radius: ${theme.slides.panelRadius};
  @container (max-width:${theme.breakpoints.sm}) {
    max-height: none;
  }
`
export const RecallImages = styled.div`
  display: flex;
  gap: ${theme.spacing[2]};
  img {
    width: ${theme.spacing[16]};
    height: ${theme.spacing[16]};
    object-fit: contain;
    border-radius: ${theme.radius.md};
  }
`
export const PictureStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
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
    width: 36%;
  }
  thead th:nth-child(2) {
    width: 25%;
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
    color: ${theme.slides.muted};
  }
  @container (max-width:${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`
