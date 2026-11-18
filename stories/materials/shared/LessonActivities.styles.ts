import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { recipe } from '../../../src/components/InteractiveMaterial/Material.shared.styles'

export const TableScroll = styled.div`
  width: 100%;
  overflow-x: auto;
`
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  th {
    background: ${(p) => recipe(p).foreground};
    color: ${(p) => recipe(p).canvas};
  }
  th,
  td {
    padding: ${theme.spacing[3]};
    border-bottom: 1px solid ${(p) => recipe(p).border};
    line-height: 1.5;
  }
  td:first-child {
    font-weight: ${theme.typography.fontWeight.bold};
  }
`
export const Rule = styled.aside`
  padding: ${theme.spacing[5]};
  border-radius: ${theme.radius.xl};
  background: ${(p) => recipe(p).foreground};
  color: ${(p) => recipe(p).canvas};
  align-self: start;
  p {
    line-height: 1.6;
  }
`
export const CopyText = styled.textarea`
  display: block;
  width: 100%;
  min-height: 160px;
  margin-top: ${theme.spacing[3]};
  padding: ${theme.spacing[3]};
  color: ${(p) => recipe(p).foreground};
  background: ${(p) => recipe(p).canvas};
  border: 1px solid ${(p) => recipe(p).border};
  border-radius: ${theme.radius.md};
  font: inherit;
  resize: vertical;
`
