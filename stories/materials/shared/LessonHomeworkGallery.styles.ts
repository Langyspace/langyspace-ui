import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
export const Item = styled.div`
  display: grid;
  justify-items: center;
  gap: ${theme.spacing[3]};
  min-width: 0;
`
export const Error = styled.p`
  padding: ${theme.spacing[2]};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.feedback.danger};
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing[3]};
  min-width: 0;
`
export const CopyStatus = styled.span`
  color: ${theme.semantic.status.success.foreground};
  font-size: ${theme.typography.fontSize.sm};
`
