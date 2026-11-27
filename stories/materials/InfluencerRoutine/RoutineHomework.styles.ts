import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'

export const Error = styled.p`
  padding: ${theme.spacing[2]};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.feedback.danger};
`
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
