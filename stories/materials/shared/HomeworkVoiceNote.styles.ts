import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
export const Assignment = styled.div`
  display: grid;
  gap: ${theme.spacing[3]};
  p {
    margin: 0;
  }
  strong {
    font-weight: ${theme.typography.fontWeight.bold};
  }
`
