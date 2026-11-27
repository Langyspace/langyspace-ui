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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
`
export const CopyStatus = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  inset: 0 auto auto 0;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  pointer-events: none;
`
