import { styled } from 'styled-components'
import { Button } from '../../../src/components/Button/Button'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import { Content } from '../../../src/components/Slide/SlidePage.styles'
import { VoiceMessageExercise } from '../../../src/components/VoiceMessage/VoiceMessageExercise'
import { Phone } from '../../../src/components/VoiceMessage/VoiceMessageExercise.styles'
import { regularVocabularyMaxWidth } from '../../../src/components/Exercise/VocabularyGrid.styles'
import { theme } from '../../../src/foundations/theme/theme'
import { recipe } from '../../../src/components/InteractiveMaterial/Material.shared.styles'
import type { GapButtonStyleProps } from './A201.types'

export { WarmupPage } from '../shared/WarmupPage.styles'

export const VocabularyPage = styled(SlidePage)`
  ${Content} {
    max-width: ${regularVocabularyMaxWidth()};
  }
`
export const VocabularyBody = styled.div`
  padding-top: ${theme.exercises.vocabularyTopSpace};
`
export const TimeWord = styled(Button)`
  padding: 0;
  min-height: ${theme.spacing[10]};
  border: 0;
  background: transparent;
  box-shadow: none;
  color: inherit;
  font: inherit;
  font-weight: ${theme.typography.fontWeight.semibold};
  transform: none;
  transition: none;
  &:hover,
  &:active {
    background: transparent;
    box-shadow: none;
    color: inherit;
    text-decoration: none;
    transform: none;
  }
`
export const Listening = styled(VoiceMessageExercise)`
  ${Phone} {
    position: sticky;
    top: 0;
  }
`
export const WarmImage = styled.img`
  min-width: 0;
  min-height: 0;
  max-height: none;
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: contain;
  border-radius: ${theme.radius.lg};
`
export const GrammarColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing[5]};
  min-width: 0;
  @container (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const Structure = styled.p`
  margin: 0;
  padding: ${theme.spacing[3]};
  border-radius: ${theme.slides.panelRadius};
  background: ${(p) => recipe(p).surface};
  font-family: inherit;
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.5;
`
export const Emphasis = styled.strong`
  color: ${(p) => recipe(p).accent};
  font-weight: ${theme.typography.fontWeight.bold};
`
export const Gap = styled(Button)<GapButtonStyleProps>`
  && {
    min-width: ${theme.spacing[10]};
    min-height: ${theme.sizes.control.sm};
    padding: 0 ${theme.spacing[1]};
    border: 0;
    background: transparent;
    box-shadow: none;
    color: ${(p) => (p.$revealed ? theme.colors.palette.feedback.success : recipe(p).foreground)};
    font: inherit;
    font-weight: ${theme.typography.fontWeight.bold};
    vertical-align: baseline;
    &:hover,
    &:active {
      background: transparent;
      box-shadow: none;
    }
  }
`
export const ParkLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  align-items: start;
  gap: ${theme.spacing[5]};
  min-width: 0;
  @container (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
  }
`
export const StickyReference = styled.div`
  position: sticky;
  top: 0;
  min-width: 0;
  background: ${(p) => recipe(p).canvas};
  z-index: 1;
`
export const ParkReference = styled(StickyReference)`
  img {
    max-height: 48dvh;
    object-fit: contain;
  }
  @container (max-width: ${theme.breakpoints.md}) {
    img {
      max-height: 32dvh;
    }
  }
`
