import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { recipe } from '../../../src/components/Exercise/Material.shared.styles'

export const ProduceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${theme.spacing[2]};
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
export const Produce = styled.figure`
  margin: 0;
  min-width: 0;
  background: ${(p) => recipe(p).surface};
  border: 1.5px solid ${(p) => recipe(p).border};
  border-radius: ${theme.radius.md};
  overflow: hidden;
  img {
    width: 100%;
    aspect-ratio: 1;
    display: block;
    object-fit: cover;
  }
  figcaption {
    padding: ${theme.spacing[2]};
    text-align: center;
    font-weight: ${theme.typography.fontWeight.bold};
  }
`
export const Fields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
  label {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[2]};
    font-size: ${theme.typography.fontSize.sm};
  }
  input {
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    padding: ${theme.spacing[3]};
    border-radius: ${theme.radius.md};
    border: 1.5px solid ${(p) => recipe(p).border};
    background: ${(p) => recipe(p).canvas};
    color: ${(p) => recipe(p).foreground};
    font: inherit;
  }
  input:focus-visible {
    outline: 2px solid ${(p) => recipe(p).accent};
    outline-offset: 2px;
  }
`
export const Checklist = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  label {
    display: flex;
    align-items: flex-start;
    gap: ${theme.spacing[3]};
    line-height: 1.5;
    cursor: pointer;
  }
  input {
    accent-color: ${(p) => recipe(p).accent};
    min-width: 20px;
    min-height: 20px;
  }
`
