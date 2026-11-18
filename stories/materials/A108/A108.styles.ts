import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'
import * as S from '../shared/Lesson.styles'

export const Cue = styled.img`
  display: block;
  width: min(100%, 360px);
  max-height: 220px;
  margin-inline: auto;
  object-fit: contain;
`
export const WordCard = styled(S.Surface)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  min-width: 0;
  img {
    width: ${theme.spacing[10]};
    height: ${theme.spacing[10]};
    object-fit: contain;
  }
`
export const TableWrap = styled.div`
  overflow-x: auto;
`
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  th,
  td {
    padding: ${theme.spacing[2]};
    border-bottom: 1px solid ${(p) => resolveSlideTheme(p).border};
    vertical-align: top;
  }
`
