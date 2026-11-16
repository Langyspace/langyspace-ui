import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
export const Preview = styled.div`
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[6]};
  width: min(100%, ${theme.slides.standardWidth});
  margin-inline: auto;
`
export const Narrow = styled.div`
  width: 17.5rem;
  max-width: 100%;
`
