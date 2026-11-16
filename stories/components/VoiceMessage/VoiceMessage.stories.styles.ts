import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'

export const Stage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  min-width: 0;
`
export const Caption = styled.p`
  flex-shrink: 0;
  margin: 0;
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  color: ${theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.xs};
  background: ${theme.slides.canvas};
`
export const Narrow = styled.div`
  width: min(100%, 17.5rem);
  margin-inline: auto;
`
export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[3]};
`
