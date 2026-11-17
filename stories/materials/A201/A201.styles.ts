import { styled } from 'styled-components'
import { GrammarTable } from '../../../src/components/InteractiveMaterial/GrammarTable'
import { theme } from '../../../src/foundations/theme/theme'
import { Stack, Surface, VocabularyTools, Now } from '../shared/Lesson.styles'
export const SceneImage = styled.img`
  display: block;
  width: min(100%, 15rem);
  max-height: 9rem;
  object-fit: contain;
  border-radius: ${theme.slides.panelRadius};
  align-self: center;
`
export const CallBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: ${theme.spacing[1]};
  min-width: 0;
  img {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: ${theme.slides.panelRadius};
  }
`
export const CallSummary = styled(Surface)`
  > div:first-child {
    justify-content: space-between;
  }
  label > span {
    font-size: ${theme.typography.fontSize.xs};
    font-weight: ${theme.typography.fontWeight.bold};
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${theme.slides.muted};
  }

  padding: ${theme.spacing[3]};
  gap: ${theme.spacing[2]};
  label {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[1]};
    font-size: ${theme.typography.fontSize.sm};
  }
`
export const Cell = styled(Stack)`
  gap: ${theme.spacing[2]};
`

export const VocabularyPrompt = styled(Stack)`
  align-items: center;
  text-align: center;
  gap: ${theme.spacing[1]};
`
export const VocabularyBody = styled(Stack)`
  gap: ${theme.spacing[2]};
`
export const VocabularyControls = styled(VocabularyTools)`
  padding-top: 0;
`
export const VocabularyNote = styled(Surface)`
  padding-block: ${theme.spacing[2]};
`

export const GrammarPrompt = styled(Now)`
  > p {
    flex: 1 1 14rem;
  }
  > button {
    max-width: 100%;
  }
  > span {
    flex-basis: 100%;
  }
`

export const Grammar = styled(GrammarTable)`
  @container (max-width: ${theme.breakpoints.sm}) {
    table {
      table-layout: fixed;
    }
    th,
    td {
      padding-inline: ${theme.spacing[2]};
    }
    th {
      letter-spacing: 0.04em;
    }
    th:first-child {
      width: 24%;
    }
    thead th:nth-child(2) {
      width: 24%;
    }
  }
`
