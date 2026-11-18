import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'
import * as S from '../shared/Lesson.styles'

export const Cue = styled.img`
  display: block;
  width: min(100%, 200px);
  max-height: 200px;
  object-fit: contain;
  margin-inline: auto;
`

export const Booth = styled.img`
  width: ${theme.spacing[12]};
  height: ${theme.spacing[12]};
  border-radius: ${theme.radius.md};
`

export const ListeningLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
  align-items: start;
  gap: ${theme.spacing[5]};
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const Phone = styled(S.Surface)`
  border-radius: ${theme.radius.card};
  border-color: ${(p) => resolveSlideTheme(p).border};
`

export const ArrivalColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
`

export const ArrivalFields = styled.fieldset`
  display: grid;
  gap: ${theme.spacing[3]};
  min-width: 0;
  margin: 0;
  padding: ${theme.spacing[2]};
  border: 1px solid ${(p) => resolveSlideTheme(p).border};
  border-radius: ${theme.radius.md};

  legend {
    font-weight: ${theme.typography.fontWeight.bold};
  }
`

export const ArrivalLabel = styled.label`
  display: grid;
  min-width: 0;
  gap: ${theme.spacing[1]};
`
