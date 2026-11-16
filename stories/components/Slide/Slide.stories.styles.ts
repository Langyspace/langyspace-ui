import { styled } from 'styled-components'
import { Card } from '../../../src/components/Card/Card'
import { theme } from '../../../src/foundations/theme/theme'

export const Stage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  min-width: 0;
`
export const NarrowStage = styled(Stage)`
  width: min(100%, 17.5rem);
  height: 36rem;
`
export const Panel = styled(Card)`
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border-color: ${theme.slides.border};
  border-radius: ${theme.slides.panelRadius};
  box-shadow: none;
  color: ${theme.slides.foreground};
`
export const Question = styled.h3`
  margin: ${theme.spacing[2]} 0;
  font-size: ${theme.typography.fontSize.xl};
`
export const Count = styled.div`
  color: ${theme.slides.muted};
  font-weight: ${theme.typography.fontWeight.semibold};
`
export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`
export const Image = styled.img`
  display: block;
  width: 100%;
  max-height: 10.625rem;
  object-fit: contain;
  background: ${theme.colors.accent.primaryTint};
  border-radius: ${theme.radius.sm};
  margin-bottom: ${theme.spacing[2]};
`
export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[3]};
  font-size: ${theme.typography.fontSize.xl};
  line-height: ${theme.typography.lineHeight.normal};
  p {
    margin: 0;
  }
`
export const Goal = styled.strong`
  color: ${theme.slides.indicator};
  font-size: ${theme.typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`
