export * from '../shared/Lesson.styles'
import { styled } from 'styled-components'
import { theme } from '../../../src/foundations/theme/theme'
import { resolveSlideTheme } from '../../../src/foundations/theme/resolveSlideTheme'
import {
  Word,
  WordImage,
  WordCaption,
  WordLabel,
} from '../../../src/components/Exercise/VocabularyGrid.styles'
import { VocabularyGrid } from '../../../src/components/Exercise/VocabularyGrid'
import { RolePlayExercise } from '../../../src/components/InteractiveMaterial/RolePlayExercise'
import { SlidePage } from '../../../src/components/Slide/SlidePage'
import {
  Stage as SharedStage,
  Clues as SharedClues,
  MiniCard as SharedMiniCard,
} from '../shared/Lesson.styles'
export const Stage = styled(SharedStage)`
  [data-slide-viewport] {
    scroll-snap-type: y proximity;
  }
  details {
    font-size: ${theme.typography.fontSize.sm};
    line-height: 1.5;
  }
  summary {
    cursor: pointer;
    padding: ${theme.spacing[3]};
    color: ${(p) => resolveSlideTheme(p).muted};
  }
  summary:focus-visible {
    outline: 2px solid ${(p) => resolveSlideTheme(p).accent};
  }
`
export const Page = styled(SlidePage)`
  h2 em {
    color: ${(p) => resolveSlideTheme(p).foreground};
    font-family: ${(p) => resolveSlideTheme(p).accentFontFamily};
    font-weight: ${theme.typography.fontWeight.regular};
  }
`
export const MiniCard = styled(SharedMiniCard)`
  img {
    object-fit: contain;
  }
`
export const Clues = styled(SharedClues)`
  button > img {
    object-fit: contain;
    height: clamp(10rem, 25cqh, 15rem);
  }
  @container (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const Vocabulary = styled(VocabularyGrid)`
  max-width: ${theme.slides.exerciseWidth};
  ${Word} {
    display: flex;
    flex-direction: column;
    aspect-ratio: auto;
    height: auto;
    justify-content: flex-start;
    overflow: hidden;
  }
  ${WordImage} {
    position: static;
    aspect-ratio: 3 / 2;
    height: auto;
    flex: none;
  }
  ${WordCaption}, ${WordLabel} {
    position: static;
    width: 100%;
    padding: ${theme.spacing[2]};
    border-radius: 0;
    background: ${(p) => resolveSlideTheme(p).surface};
    color: ${(p) => resolveSlideTheme(p).foreground};
  }
  ${WordLabel} small {
    color: ${(p) => resolveSlideTheme(p).muted};
  }
  ${Word}:has(${WordLabel}) ${WordCaption} {
    display: none;
  }
  @container (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr);
  }
`

export const RolePlay = styled(RolePlayExercise)`
  grid-template-columns: minmax(0, 1fr);
`
