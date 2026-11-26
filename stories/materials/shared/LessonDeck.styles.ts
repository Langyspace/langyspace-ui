import { styled } from 'styled-components'
import { SlideDeck } from '../../../src/components/Slide/SlideDeck'
import { theme } from '../../../src/foundations/theme/theme'
import { recipe } from '../../../src/components/InteractiveMaterial/Material.shared.styles'

export const Stage = styled.div`
  height: 100dvh;
  min-width: 0;
`

export const Cover = styled.header`
  display: grid;
  gap: ${theme.spacing[3]};
  padding-bottom: ${theme.spacing[5]};
  margin-bottom: ${theme.spacing[4]};
  border-bottom: 1px solid ${(p) => recipe(p).border};
`

export const Eyebrow = styled.p`
  margin: 0;
  color: ${(p) => recipe(p).accent};
  font-family: ${theme.typography.fontFamily.sans};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.sm};
  letter-spacing: 0.15em;
  text-transform: uppercase;
`

export const Heading = styled.h1`
  margin: 0;
  font-family: ${(p) => recipe(p).displayFontFamily};
  font-size: clamp(2.25rem, 6cqw, 4rem);
  line-height: 1.08;
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${(p) => recipe(p).foreground};
`

export const Goal = styled.p`
  margin: 0;
  color: ${(p) => recipe(p).muted};
  line-height: 1.5;
  strong {
    color: ${(p) => recipe(p).accent};
    margin-right: ${theme.spacing[2]};
  }
`

export const ExerciseProgress = styled.span`
  color: ${(p) => recipe(p).foreground};
  font-size: ${theme.typography.fontSize.xs};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`

export const ExerciseProgressLabel = styled.span`
  @media (max-width: ${theme.breakpoints.sm}) {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
  }
`

export const MaterialDeck = styled(SlideDeck)`
  color-scheme: inherit;
`
