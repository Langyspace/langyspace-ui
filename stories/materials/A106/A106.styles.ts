import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import {
  recipe,
  Surface,
} from '../../../src/components/Exercise/Material.shared.styles'

export const Scene = styled.img`
  width: 100%;
  max-height: 480px;
  object-fit: contain;
  border-radius: ${theme.radius.md};
`
export const Room = styled.div`
  position: relative;
  min-width: 0;
  img {
    width: 100%;
    display: block;
    border-radius: ${theme.radius.md};
  }
  button {
    position: absolute;
    transform: translate(-50%, -50%);
    min-width: 40px;
    min-height: 40px;
    border: 2px solid ${(p) => recipe(p).canvas};
    border-radius: ${theme.radius.circle};
    background: ${(p) => recipe(p).accent};
    color: ${(p) => recipe(p).canvas};
    font: inherit;
    font-weight: ${theme.typography.fontWeight.bold};
    cursor: pointer;
  }
  button:focus-visible {
    outline: 3px solid ${(p) => recipe(p).foreground};
    outline-offset: 2px;
  }
  button[data-location='0'] {
    left: 60%;
    top: 40%;
  }
  button[data-location='1'] {
    left: 28%;
    top: 57%;
  }
  button[data-location='2'] {
    left: 85%;
    top: 43%;
  }
  button[data-location='3'] {
    left: 28%;
    top: 66%;
  }
  button[aria-pressed='true'] {
    background: ${(p) => recipe(p).foreground};
  }
`
export const Explanation = styled(Surface)`
  background: ${(p) => recipe(p).inverseCanvas};
  color: ${(p) => recipe(p).inverseForeground};
`
export const Pets = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${theme.spacing[2]};
  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: ${theme.radius.md};
  }
`
export const Notes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[3]};
  label {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[2]};
  }
  input {
    box-sizing: border-box;
    width: 100%;
    padding: ${theme.spacing[3]};
    font: inherit;
    color: ${(p) => recipe(p).foreground};
    background: ${(p) => recipe(p).canvas};
    border: 1.5px solid ${(p) => recipe(p).border};
    border-radius: ${theme.radius.md};
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
