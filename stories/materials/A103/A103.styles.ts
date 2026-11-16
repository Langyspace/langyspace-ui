import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { recipe } from '../../../src/components/Exercise/Material.shared.styles'

export const Worksheet = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${theme.spacing[3]};
`
export const Person = styled.fieldset`
  margin: 0;
  padding: ${theme.spacing[3]};
  min-width: 0;
  border: 1px solid ${(p) => recipe(p).border};
  border-radius: ${theme.radius.md};
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${theme.spacing[2]};
  legend {
    font-weight: ${theme.typography.fontWeight.bold};
  }
  label {
    display: grid;
    gap: ${theme.spacing[1]};
    font-size: ${theme.typography.fontSize.sm};
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const PhotoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[3]};
  justify-content: center;
  img {
    display: block;
    width: 96px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: ${theme.radius.md};
  }
`
export const Scene = styled.img`
  display: block;
  width: min(100%, 340px);
  max-height: 340px;
  aspect-ratio: 1;
  object-fit: cover;
  margin-inline: auto;
  border-radius: ${theme.radius.md};
`
